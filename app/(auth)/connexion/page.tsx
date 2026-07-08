import Link from 'next/link'
import { Suspense } from 'react'
import { LoginForm } from '@/components/auth/LoginForm'
import { BrandMark } from '@/components/BrandMark'

export default function ConnexionPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="panel w-full max-w-md rounded-2xl p-8">
        <div className="mb-6 flex flex-col items-center gap-4">
          <BrandMark size={56} />
          <div className="text-center">
            <h1 className="font-display text-2xl text-[#f2efe8]">Connexion</h1>
            <p className="text-dim mt-1 text-sm">
              Bienvenue ! Connecte-toi pour accéder à tes leçons
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="text-dim text-center">Chargement...</div>}>
          <LoginForm />
        </Suspense>

        <div className="mt-6 text-center">
          <p className="text-dim text-sm">
            Pas encore de compte ?{' '}
            <Link
              href="/inscription"
              className="accent-brass font-semibold transition-colors hover:underline"
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
