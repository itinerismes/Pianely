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
    color: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-400',
    shadowColor: 'shadow-emerald-500/20',
    hoverShadow: 'hover:shadow-emerald-500/30',
    buttonBg: 'bg-emerald-500 hover:bg-emerald-400',
    buttonShadow: 'shadow-emerald-500/25',
    hoverButtonShadow: 'hover:shadow-emerald-500/40',
    progressGradient: 'from-emerald-500 to-teal-400',
    href: '/parcours/niveau-1'
  },
  {
    id: 2,
    name: 'Fondations',
    description: 'Construis des bases solides',
    totalLessons: 7,
    completedLessons: 0,
    unlocked: false,
    color: 'from-blue-400 to-cyan-500',
    borderColor: 'border-blue-400',
    shadowColor: 'shadow-blue-500/20',
    hoverShadow: 'hover:shadow-blue-500/30',
    buttonBg: 'bg-blue-500 hover:bg-blue-400',
    buttonShadow: 'shadow-blue-500/25',
    hoverButtonShadow: 'hover:shadow-blue-500/40',
    progressGradient: 'from-blue-500 to-cyan-400',
    href: '/parcours/niveau-2'
  },
  {
    id: 3,
    name: 'Exploration',
    description: 'Découvre de nouveaux horizons',
    totalLessons: 8,
    completedLessons: 0,
    unlocked: false,
    color: 'from-violet-400 to-purple-500',
    borderColor: 'border-violet-400',
    shadowColor: 'shadow-violet-500/20',
    hoverShadow: 'hover:shadow-violet-500/30',
    buttonBg: 'bg-violet-500 hover:bg-violet-400',
    buttonShadow: 'shadow-violet-500/25',
    hoverButtonShadow: 'hover:shadow-violet-500/40',
    progressGradient: 'from-violet-500 to-purple-400',
    href: '/parcours/niveau-3'
  },
  {
    id: 4,
    name: 'Maîtrise',
    description: 'Perfectionne ta technique',
    totalLessons: 10,
    completedLessons: 0,
    unlocked: false,
    color: 'from-orange-400 to-amber-500',
    borderColor: 'border-orange-400',
    shadowColor: 'shadow-orange-500/20',
    hoverShadow: 'hover:shadow-orange-500/30',
    buttonBg: 'bg-orange-500 hover:bg-orange-400',
    buttonShadow: 'shadow-orange-500/25',
    hoverButtonShadow: 'hover:shadow-orange-500/40',
    progressGradient: 'from-orange-500 to-amber-400',
    href: '/parcours/niveau-4'
  },
  {
    id: 5,
    name: 'Virtuosité',
    description: 'Atteins l\'excellence',
    totalLessons: 12,
    completedLessons: 0,
    unlocked: false,
    color: 'from-pink-400 to-rose-500',
    borderColor: 'border-pink-400',
    shadowColor: 'shadow-pink-500/20',
    hoverShadow: 'hover:shadow-pink-500/30',
    buttonBg: 'bg-pink-500 hover:bg-pink-400',
    buttonShadow: 'shadow-pink-500/25',
    hoverButtonShadow: 'hover:shadow-pink-500/40',
    progressGradient: 'from-pink-500 to-rose-400',
    href: '/parcours/niveau-5'
  }
]

export default function ParcoursPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 relative overflow-hidden">
      {/* Radial gradient pattern overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(217,91%,60%,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,_hsla(142,76%,36%,0.05),transparent_50%),radial-gradient(ellipse_at_top_left,_hsla(350,100%,88%,0.03),transparent_50%)]" />

      <div className="max-w-2xl mx-auto px-6 md:px-8 pt-12 relative z-10">
        {/* Header */}
        <div className="mb-10 text-left">
          <h1 className="font-bold text-2xl md:text-4xl tracking-tight leading-none text-white mb-3" style={{ letterSpacing: '-0.03em' }}>
            Ton parcours d&apos;apprentissage
          </h1>
          <p className="font-normal text-lg text-slate-400 tracking-normal leading-relaxed opacity-90 mt-1.5">
            5 niveaux pour passer de débutant à virtuose
          </p>
          {/* Decorative separator */}
          <div className="w-16 h-0.5 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Levels Grid */}
        <div className="flex flex-col gap-6 md:gap-8">
          {levels.map((level) => {
            const progressPercent = Math.round((level.completedLessons / level.totalLessons) * 100)

            return (
              <div
                key={level.id}
                className={`bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 p-4 md:p-6 shadow-xl shadow-black/10 transition-all duration-200 ease-out border-l-4 min-h-[140px] ${level.borderColor} ${
                  level.unlocked
                    ? `hover:bg-slate-800/80 hover:border-slate-600 ${level.hoverShadow} hover:shadow-xl hover:scale-[1.01]`
                    : 'opacity-60'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Left: Icon + Info */}
                  <div className="flex items-start gap-5 flex-1">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center flex-shrink-0 shadow-lg ${level.shadowColor}`}
                    >
                      {level.unlocked ? (
                        <Music className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      ) : (
                        <Lock className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-semibold text-lg text-white" style={{ letterSpacing: '-0.01em' }}>
                          Niveau {level.id} - {level.name}
                        </h2>
                        {level.completedLessons === level.totalLessons && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        )}
                      </div>
                      <p className="font-normal text-sm text-slate-400 leading-relaxed mb-2">
                        {level.description}
                      </p>

                      {/* Progress info */}
                      <div className="mt-2">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-sm text-slate-400">
                            {level.completedLessons} / {level.totalLessons} leçons complétées
                          </span>
                          {/* Visual progress bar */}
                          <div className="bg-slate-700/30 h-1.5 rounded-full w-40 overflow-hidden">
                            <div
                              className={`h-1.5 rounded-full bg-gradient-to-r ${level.progressGradient} transition-all duration-500 ease-out`}
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: CTA Button */}
                  <div className="flex-shrink-0">
                    {level.unlocked ? (
                      <Link
                        href={level.href}
                        className={`inline-flex items-center gap-2 px-6 py-2.5 ${level.buttonBg} text-white font-semibold text-sm rounded-xl shadow-lg ${level.buttonShadow} ${level.hoverButtonShadow} hover:shadow-xl hover:scale-105 transition-all duration-200 border border-white/20`}
                      >
                        {level.completedLessons === 0 ? 'Commencer' : 'Continuer'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <div className="bg-slate-700/50 text-slate-400 font-medium text-sm px-3 py-1.5 rounded-lg border border-slate-600/50 inline-flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" />
                        Verrouillé
                      </div>
                    )}
                  </div>
                </div>

                {/* Unlock condition */}
                {!level.unlocked && (
                  <div className="mt-5 ml-6 opacity-70">
                    <div className="bg-slate-800/30 text-slate-500 font-medium text-sm italic px-4 py-2 rounded-lg inline-flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Complète tous les niveaux précédents pour débloquer</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
