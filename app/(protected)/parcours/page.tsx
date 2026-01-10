import { Music, Lock, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const levels = [
  {
    id: 1,
    name: 'Découverte',
    description: 'Tes premiers pas au piano',
    totalLessons: 5,
    completedLessons: 0,
    unlocked: true,
    color: 'from-emerald-500 to-teal-500',
    href: '/parcours/niveau-1'
  },
  {
    id: 2,
    name: 'Fondations',
    description: 'Construis des bases solides',
    totalLessons: 7,
    completedLessons: 0,
    unlocked: false,
    color: 'from-sky-500 to-blue-500',
    href: '/parcours/niveau-2'
  },
  {
    id: 3,
    name: 'Exploration',
    description: 'Découvre de nouveaux horizons',
    totalLessons: 8,
    completedLessons: 0,
    unlocked: false,
    color: 'from-violet-500 to-purple-500',
    href: '/parcours/niveau-3'
  },
  {
    id: 4,
    name: 'Maîtrise',
    description: 'Perfectionne ta technique',
    totalLessons: 10,
    completedLessons: 0,
    unlocked: false,
    color: 'from-orange-500 to-amber-500',
    href: '/parcours/niveau-4'
  },
  {
    id: 5,
    name: 'Virtuosité',
    description: 'Atteins l\'excellence',
    totalLessons: 12,
    completedLessons: 0,
    unlocked: false,
    color: 'from-pink-500 to-rose-500',
    href: '/parcours/niveau-5'
  }
]

export default function ParcoursPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white/90 mb-3">
            Ton parcours d&apos;apprentissage
          </h1>
          <p className="text-gray-400 text-lg">
            5 niveaux pour passer de débutant à virtuose
          </p>
        </div>

        {/* Levels Grid */}
        <div className="space-y-6">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 shadow-xl shadow-black/20 transition-all duration-200 ${
                level.unlocked
                  ? 'hover:shadow-2xl hover:border-slate-600'
                  : 'opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                {/* Left: Icon + Info */}
                <div className="flex items-start gap-4 flex-1">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center flex-shrink-0`}
                  >
                    {level.unlocked ? (
                      <Music className="w-8 h-8 text-white" />
                    ) : (
                      <Lock className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white/90">
                        Niveau {level.id} - {level.name}
                      </h2>
                      {level.completedLessons === level.totalLessons && (
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      )}
                    </div>
                    <p className="text-gray-400 mb-4">{level.description}</p>

                    {/* Progress bar */}
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">
                          {level.completedLessons} / {level.totalLessons} leçons complétées
                        </span>
                        <span className="text-white font-semibold">
                          {Math.round(
                            (level.completedLessons / level.totalLessons) * 100
                          )}
                          %
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${level.color} rounded-full transition-all duration-500`}
                          style={{
                            width: `${
                              (level.completedLessons / level.totalLessons) * 100
                            }%`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: CTA Button */}
                <div className="flex-shrink-0">
                  {level.unlocked ? (
                    <Link
                      href={level.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${level.color} text-white font-medium rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl`}
                    >
                      {level.completedLessons === 0 ? 'Commencer' : 'Continuer'}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-slate-500 font-medium rounded-xl cursor-not-allowed"
                    >
                      <Lock className="w-5 h-5" />
                      Verrouillé
                    </button>
                  )}
                </div>
              </div>

              {/* Unlock condition */}
              {!level.unlocked && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-500">
                    🔒 Complète tous les niveaux précédents pour débloquer
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
