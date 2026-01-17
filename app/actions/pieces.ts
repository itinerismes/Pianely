'use server'

import { createClient } from '@/lib/supabase/server'
import { createPiece, addPieceToUserLibrary } from '@/lib/supabase/pieces'
import { prepareIMSLPPieceData } from '@/lib/imslp/client'
import type { IMSLPWork, IMSLPFile } from '@/lib/imslp/client'

/**
 * Server action pour importer un morceau IMSLP
 */
export async function importIMSLPPieceAction(
  workData: IMSLPWork,
  level: number,
  difficulty: 'easy' | 'medium' | 'hard',
  files?: IMSLPFile[]
) {
  try {
    const supabase = await createClient()

    // Vérifier l'authentification - récupérer l'utilisateur depuis la session
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return { success: false, error: 'Utilisateur non authentifié' }
    }

    // Préparer les données du morceau
    const pieceData = prepareIMSLPPieceData(workData, level, difficulty, files)

    // Créer le morceau dans la base de données
    const piece = await createPiece(supabase, pieceData)

    // Ajouter à la bibliothèque utilisateur (utiliser l'ID de la session, pas un paramètre)
    await addPieceToUserLibrary(supabase, user.id, piece.id)

    return { success: true, piece }
  } catch (error) {
    console.error('Error importing IMSLP piece:', error)
    return { success: false, error: 'Failed to import piece' }
  }
}
