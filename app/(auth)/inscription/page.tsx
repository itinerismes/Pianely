import Link from 'next/link'
import { SignupForm } from '@/components/auth/SignupForm'

export default function InscriptionPage() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-xl shadow-black/20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white/90 mb-2">
          Créer un compte
        </h1>
        <p className="text-sm text-gray-400">
          Commence ton apprentissage du piano dès maintenant
        </p>
      </div>

      <SignupForm />

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          Déjà un compte ?{' '}
          <Link
            href="/connexion"
            className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}
