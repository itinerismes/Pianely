import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Interface représentant un morceau de piano
 */
export interface Piece {
  id: string
  title: string
  composer: string
  opus_number?: string
  level: number
  difficulty: 'easy' | 'medium' | 'hard'
  duration_minutes?: number
  category: string
  source: string
  imslp_id?: string
  imslp_url?: string
  thumbnail_url?: string
  sheet_music_url?: string
  midi_url?: string
  musicxml_url?: string
  status?: 'not_started' | 'in_progress' | 'mastered'
  progress?: number
  added_at?: string
  last_practiced_at?: string
  created_at?: string
  updated_at?: string
}

/**
 * Récupérer tous les morceaux avec leur status utilisateur
 * Effectue un LEFT JOIN pour inclure les morceaux de la bibliothèque utilisateur
 */
export async function getPiecesWithUserStatus(supabase: SupabaseClient, userId: string): Promise<Piece[]> {
  const { data, error } = await supabase
    .from('pieces')
    .select(`
      *,
      user_pieces!left(status, added_at)
    `)
    .eq('user_pieces.user_id', userId)
    .order('composer', { ascending: true })

  if (error) {
    throw error
  }

  // Récupérer la progression séparément
  const pieceIds = (data || []).map(item => item.id)
  let progressData: any[] = []
  
  if (pieceIds.length > 0) {
    const { data: progress } = await supabase
      .from('piece_progress')
      .select('*')
      .eq('user_id', userId)
      .in('piece_id', pieceIds)
    
    progressData = progress || []
  }

  // Flatten la structure des données
  return (data || []).map((item: any) => {
    const progress = progressData.find(p => p.piece_id === item.id)
    
    return {
      ...item,
      status: item.user_pieces?.[0]?.status || 'not_started',
      added_at: item.user_pieces?.[0]?.added_at,
      progress: progress?.progress || 0,
      last_practiced_at: progress?.last_practiced_at,
    }
  })
}

/**
 * Récupérer uniquement les morceaux de la bibliothèque utilisateur
 */
export async function getUserPieces(supabase: SupabaseClient, userId: string): Promise<Piece[]> {
  const { data, error } = await supabase
    .from('user_pieces')
    .select(`
      *,
      pieces(*)
    `)
    .eq('user_id', userId)
    .order('added_at', { ascending: false })

  if (error) {
    throw error
  }

  // Récupérer la progression séparément
  const pieceIds = (data || []).map(item => item.piece_id)
  let progressData: any[] = []
  
  if (pieceIds.length > 0) {
    const { data: progress } = await supabase
      .from('piece_progress')
      .select('*')
      .eq('user_id', userId)
      .in('piece_id', pieceIds)
    
    progressData = progress || []
  }

  return (data || []).map((item: any) => {
    const progress = progressData.find(p => p.piece_id === item.piece_id)
    
    return {
      ...item.pieces,
      status: item.status,
      added_at: item.added_at,
      progress: progress?.progress || 0,
      last_practiced_at: progress?.last_practiced_at,
    }
  })
}

/**
 * Ajouter un morceau à la bibliothèque utilisateur
 */
export async function addPieceToUserLibrary(supabase: SupabaseClient, userId: string, pieceId: string) {
  const { data, error } = await supabase
    .from('user_pieces')
    .insert({ user_id: userId, piece_id: pieceId })
    .select()
    .single()

  if (error) {
    // Si le morceau est déjà dans la bibliothèque, ne pas throw d'erreur
    if (error.code === '23505') { // Unique constraint violation
      console.log('Piece already in user library')
      return null
    }
    throw error
  }

  return data
}

/**
 * Retirer un morceau de la bibliothèque utilisateur
 */
export async function removePieceFromUserLibrary(supabase: SupabaseClient, userId: string, pieceId: string) {
  const { error } = await supabase
    .from('user_pieces')
    .delete()
    .eq('user_id', userId)
    .eq('piece_id', pieceId)

  if (error) {
    throw error
  }

  return true
}

/**
 * Mettre à jour la progression d'un morceau
 */
export async function updatePieceProgress(
  supabase: SupabaseClient,
  userId: string,
  pieceId: string,
  progress: number,
  measuresCompleted?: number,
  timeSpentMinutes?: number
) {
  const updateData: any = {
    user_id: userId,
    piece_id: pieceId,
    progress,
    last_practiced_at: new Date().toISOString(),
  }

  if (measuresCompleted !== undefined) {
    updateData.measures_completed = measuresCompleted
  }

  if (timeSpentMinutes !== undefined) {
    // Incrémenter le temps passé
    const { data: existing } = await supabase
      .from('piece_progress')
      .select('time_spent_minutes')
      .eq('user_id', userId)
      .eq('piece_id', pieceId)
      .single()

    updateData.time_spent_minutes = (existing?.time_spent_minutes || 0) + timeSpentMinutes
  }

  const { data, error } = await supabase
    .from('piece_progress')
    .upsert(updateData, {
      onConflict: 'user_id,piece_id',
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  // Mettre à jour le status dans user_pieces si le morceau est maîtrisé
  if (progress >= 100) {
    await supabase
      .from('user_pieces')
      .update({ status: 'mastered' })
      .eq('user_id', userId)
      .eq('piece_id', pieceId)
  } else if (progress > 0) {
    await supabase
      .from('user_pieces')
      .update({ status: 'in_progress' })
      .eq('user_id', userId)
      .eq('piece_id', pieceId)
  }

  return data
}

/**
 * Filtrer les morceaux par niveau
 */
export async function getPiecesByLevel(supabase: SupabaseClient, level: number, userId: string): Promise<Piece[]> {
  const { data, error } = await supabase
    .from('pieces')
    .select(`
      *,
      user_pieces!left(status)
    `)
    .eq('level', level)
    .eq('user_pieces.user_id', userId)
    .order('composer', { ascending: true })

  if (error) {
    throw error
  }

  // Récupérer la progression séparément
  const pieceIds = (data || []).map(item => item.id)
  let progressData: any[] = []
  
  if (pieceIds.length > 0) {
    const { data: progress } = await supabase
      .from('piece_progress')
      .select('*')
      .eq('user_id', userId)
      .in('piece_id', pieceIds)
    
    progressData = progress || []
  }

  return (data || []).map((item: any) => {
    const progress = progressData.find(p => p.piece_id === item.id)
    
    return {
      ...item,
      status: item.user_pieces?.[0]?.status || 'not_started',
      progress: progress?.progress || 0,
    }
  })
}

/**
 * Rechercher des morceaux par titre ou compositeur
 */
export async function searchPieces(supabase: SupabaseClient, query: string, userId: string): Promise<Piece[]> {
  const { data, error } = await supabase
    .from('pieces')
    .select(`
      *,
      user_pieces!left(status)
    `)
    .or(`title.ilike.%${query}%,composer.ilike.%${query}%`)
    .eq('user_pieces.user_id', userId)
    .limit(20)
    .order('composer', { ascending: true })

  if (error) {
    throw error
  }

  // Récupérer la progression séparément
  const pieceIds = (data || []).map(item => item.id)
  let progressData: any[] = []
  
  if (pieceIds.length > 0) {
    const { data: progress } = await supabase
      .from('piece_progress')
      .select('*')
      .eq('user_id', userId)
      .in('piece_id', pieceIds)
    
    progressData = progress || []
  }

  return (data || []).map((item: any) => {
    const progress = progressData.find(p => p.piece_id === item.id)
    
    return {
      ...item,
      status: item.user_pieces?.[0]?.status || 'not_started',
      progress: progress?.progress || 0,
    }
  })
}

/**
 * Récupérer un morceau par ID
 */
export async function getPieceById(supabase: SupabaseClient, pieceId: string, userId?: string): Promise<Piece | null> {
  const { data, error } = await supabase
    .from('pieces')
    .select('*')
    .eq('id', pieceId)
    .single()

  if (error) {
    return null
  }

  return data
}

/**
 * Créer un nouveau morceau (upload utilisateur, IMSLP, etc.)
 */
export async function createPiece(supabase: SupabaseClient, pieceData: Omit<Piece, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('pieces')
    .insert(pieceData)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

/**
 * Récupérer les statistiques de progression utilisateur sur les morceaux
 */
export async function getPieceStats(supabase: SupabaseClient, userId: string) {
  // Nombre total de morceaux dans la bibliothèque
  const { count: totalPieces } = await supabase
    .from('user_pieces')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)

  // Nombre de morceaux maîtrisés
  const { count: masteredPieces } = await supabase
    .from('user_pieces')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('status', 'mastered')

  // Nombre de morceaux en cours
  const { count: inProgressPieces } = await supabase
    .from('user_pieces')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('status', 'in_progress')

  // Temps total de pratique
  const { data: progressData } = await supabase
    .from('piece_progress')
    .select('time_spent_minutes')
    .eq('user_id', userId)

  const totalTimeSpent = (progressData || []).reduce(
    (sum, item) => sum + (item.time_spent_minutes || 0),
    0
  )

  return {
    totalPieces: totalPieces || 0,
    masteredPieces: masteredPieces || 0,
    inProgressPieces: inProgressPieces || 0,
    notStartedPieces: (totalPieces || 0) - (masteredPieces || 0) - (inProgressPieces || 0),
    totalTimeSpentMinutes: totalTimeSpent,
    totalTimeSpentHours: Math.round((totalTimeSpent / 60) * 10) / 10,
  }
}
