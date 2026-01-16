import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { PiecePlayer } from '@/components/morceaux/PiecePlayer'
import { getPieceById } from '@/lib/supabase/pieces'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default async function PiecePage({
  params
}: {
  params: { pieceId: string }
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // Récupérer le morceau - CORRECTION : passer supabase en premier paramètre
  const piece = await getPieceById(supabase, params.pieceId, user.id)

  if (!piece) {
    redirect('/morceaux')
  }

  return (
    <div className="container max-w-6xl mx-auto py-6 space-y-6">
      {/* Bouton retour */}
      <Link href="/morceaux">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la bibliothèque
        </Button>
      </Link>

      {/* Player */}
      <PiecePlayer piece={piece} />
    </div>
  )
}
