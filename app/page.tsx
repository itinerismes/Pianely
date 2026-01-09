import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-white/90 mb-4">
          Bienvenue sur Pianely
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Tes premiers morceaux, simplement
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/connexion"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors"
          >
            Se connecter
          </Link>
          <Link
            href="/inscription"
            className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 text-white font-medium rounded-lg transition-colors"
          >
            Créer un compte
          </Link>
        </div>
      </div>
    </main>
  )
}
