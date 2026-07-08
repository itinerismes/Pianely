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

  // Bibliothèque personnelle + catalogue, chargés en parallèle
  let pieces: any[] = []
  try {
    const [userPieces, { data: catalog }] = await Promise.all([
      getUserPieces(supabase, user.id),
      supabase
        .from('pieces')
        .select('*')
        .eq('source', 'seed')
        .order('level', { ascending: true }),
    ])
    const userPieceIds = new Set(userPieces.map((p: any) => p.id))

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
