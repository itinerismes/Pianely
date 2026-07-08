import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { MorceauxClient } from '@/components/morceaux/MorceauxClient'
import { getUserPieces } from '@/lib/supabase/pieces'

export default async function MorceauxPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // Bibliothèque personnelle + catalogue de morceaux débutants
  let pieces: any[] = []
  try {
    const userPieces = await getUserPieces(supabase, user.id)
    const userPieceIds = new Set(userPieces.map((p: any) => p.id))

    // Catalogue : les morceaux seedés que l'utilisateur n'a pas encore ajoutés
    const { data: catalog } = await supabase
      .from('pieces')
      .select('*')
      .eq('source', 'seed')
      .order('level', { ascending: true })

    const catalogPieces = (catalog || [])
      .filter((p) => !userPieceIds.has(p.id))
      .map((p) => ({
        ...p,
        status: 'not_started' as const,
        progress: 0,
      }))

    pieces = [...userPieces, ...catalogPieces].map((p: any) => ({
      ...p,
      duration: p.duration ?? p.duration_minutes ?? 1,
    }))
  } catch (error) {
    console.error('Error loading pieces:', error)
    pieces = []
  }

  return <MorceauxClient pieces={pieces} />
}
