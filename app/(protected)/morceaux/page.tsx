import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { MorceauxClient } from '@/components/morceaux/MorceauxClient'

export default async function MorceauxPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // TODO: When pieces table is created, fetch pieces here
  // const { data: pieces } = await supabase
  //   .from('pieces')
  //   .select('*')
  //   .order('level', { ascending: true })

  // For now, return empty array - structure is ready for when pieces are added
  const pieces: any[] = []

  return <MorceauxClient pieces={pieces} />
}
