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

  // Récupérer les morceaux de la bibliothèque utilisateur
  let pieces: any[] = []
  try {
    pieces = await getUserPieces(user.id)
  } catch {
    // Si erreur (ex: table n'existe pas encore), retourner array vide
    pieces = []
  }

  return <MorceauxClient pieces={pieces} userId={user.id} />
}
