import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ProtectedLayoutClient } from '@/components/layout/ProtectedLayoutClient'

export default async function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // Extract user name from email or metadata
  const userName = user.user_metadata?.full_name ||
                   user.email?.split('@')[0] ||
                   'Utilisateur'

  return (
    <ProtectedLayoutClient
      userName={userName}
      userEmail={user.email || ''}
    >
      {children}
    </ProtectedLayoutClient>
  )
}
