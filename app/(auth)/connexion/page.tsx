import Link from 'next/link'
import { LoginForm } from '@/components/auth/LoginForm'

export default function ConnexionPage() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-xl shadow-black/20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white/90 mb-2">
          Connexion
        </h1>
        <p className="text-sm text-gray-400">
          Bienvenue ! Connecte-toi pour accéder à tes leçons
        </p>
      </div>

      <LoginForm />

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          Pas encore de compte ?{' '}
          <Link
            href="/inscription"
            className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  )
}
