import Link from 'next/link'
import { Music, TrendingUp, Award, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white/90 mb-6">
            Tes premiers morceaux,
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              simplement
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Apprends le piano facilement, sans lire la musique au départ.
            Méthode progressive pour grands débutants.
          </p>

          <Link
            href="/inscription"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105"
          >
            Commencer gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 text-center hover:border-violet-500/50 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Music className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Sans solfège au départ
              </h3>
              <p className="text-gray-400 text-sm">
                Joue tes premiers morceaux sans avoir besoin de lire la musique. Introduction progressive du solfège.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 text-center hover:border-emerald-500/50 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Progression mesurable
              </h3>
              <p className="text-gray-400 text-sm">
                Suis ta progression avec des objectifs clairs et des statistiques détaillées.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 text-center hover:border-amber-500/50 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Badges et récompenses
              </h3>
              <p className="text-gray-400 text-sm">
                Débloque des badges au fur et à mesure de ta pratique et reste motivé.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
