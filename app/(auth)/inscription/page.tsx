import Link from 'next/link'
import { SignupForm } from '@/components/auth/SignupForm'
import { Music } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function InscriptionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Music className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">
            Créer un compte
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Commence ton apprentissage dès maintenant
          </p>
        </CardHeader>
        <CardContent>
          <SignupForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Déjà un compte ?{' '}
              <Link
                href="/connexion"
                className="font-semibold text-purple-600 hover:text-purple-700 transition-colors"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
