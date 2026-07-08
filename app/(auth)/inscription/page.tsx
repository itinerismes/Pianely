import Link from 'next/link'
import { SignupForm } from '@/components/auth/SignupForm'
import { BrandMark } from '@/components/BrandMark'

export default function InscriptionPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="panel w-full max-w-md rounded-2xl p-8">
        <div className="mb-6 flex flex-col items-center gap-4">
          <BrandMark size={56} />
          <div className="text-center">
            <h1 className="font-display text-2xl text-[#f2efe8]">Créer un compte</h1>
            <p className="text-dim mt-1 text-sm">
              Commence ton apprentissage dès maintenant
            </p>
          </div>
        </div>

        <SignupForm />

        <div className="mt-6 text-center">
          <p className="text-dim text-sm">
            Déjà un compte ?{' '}
            <Link
              href="/connexion"
              className="accent-brass font-semibold transition-colors hover:underline"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
