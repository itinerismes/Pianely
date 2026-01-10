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
    color: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
    shadowColor: '0 4px 12px rgba(16, 185, 129, 0.2)',
    hoverShadow: '0 6px 20px rgba(16, 185, 129, 0.3)',
    progressGradient: 'linear-gradient(90deg, #10b981 0%, #14b8a6 100%)',
    href: '/parcours/niveau-1'
  },
  {
    id: 2,
    name: 'Fondations',
    description: 'Construis des bases solides',
    totalLessons: 7,
    completedLessons: 0,
    unlocked: false,
    color: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    shadowColor: '0 4px 12px rgba(59, 130, 246, 0.2)',
    hoverShadow: '0 6px 20px rgba(59, 130, 246, 0.3)',
    progressGradient: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
    href: '/parcours/niveau-2'
  },
  {
    id: 3,
    name: 'Exploration',
    description: 'Découvre de nouveaux horizons',
    totalLessons: 8,
    completedLessons: 0,
    unlocked: false,
    color: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
    shadowColor: '0 4px 12px rgba(139, 92, 246, 0.2)',
    hoverShadow: '0 6px 20px rgba(139, 92, 246, 0.3)',
    progressGradient: 'linear-gradient(90deg, #8b5cf6 0%, #a855f7 100%)',
    href: '/parcours/niveau-3'
  },
  {
    id: 4,
    name: 'Maîtrise',
    description: 'Perfectionne ta technique',
    totalLessons: 10,
    completedLessons: 0,
    unlocked: false,
    color: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
    shadowColor: '0 4px 12px rgba(249, 115, 22, 0.2)',
    hoverShadow: '0 6px 20px rgba(249, 115, 22, 0.3)',
    progressGradient: 'linear-gradient(90deg, #f97316 0%, #f59e0b 100%)',
    href: '/parcours/niveau-4'
  },
  {
    id: 5,
    name: 'Virtuosité',
    description: 'Atteins l\'excellence',
    totalLessons: 12,
    completedLessons: 0,
    unlocked: false,
    color: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    shadowColor: '0 4px 12px rgba(236, 72, 153, 0.2)',
    hoverShadow: '0 6px 20px rgba(236, 72, 153, 0.3)',
    progressGradient: 'linear-gradient(90deg, #ec4899 0%, #f43f5e 100%)',
    href: '/parcours/niveau-5'
  }
]

export default function ParcoursPage() {
  return (
    <main className="min-h-screen py-12 relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 md:px-8 pt-12 relative z-10">
        {/* Header */}
        <div className="mb-10 text-left">
          <h1
            className="font-bold text-2xl md:text-4xl tracking-tight leading-none mb-3"
            style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em'
            }}
          >
            Ton parcours d&apos;apprentissage
          </h1>
          <p
            className="font-normal text-lg leading-relaxed opacity-90 mt-1.5"
            style={{ color: 'var(--text-secondary)' }}
          >
            5 niveaux pour passer de débutant à virtuose
          </p>
          {/* Decorative separator */}
          <div
            className="w-16 h-0.5 rounded-full mt-4"
            style={{ background: 'linear-gradient(90deg, #10b981 0%, #14b8a6 100%)' }}
          />
        </div>

        {/* Levels Grid */}
        <div className="flex flex-col gap-6 md:gap-8">
          {levels.map((level) => {
            const progressPercent = Math.round((level.completedLessons / level.totalLessons) * 100)

            return (
              <div
                key={level.id}
                className={`card p-4 md:p-6 transition-all duration-200 ease-out border-l-4 min-h-[140px] ${
                  level.unlocked
                    ? 'hover:shadow-xl hover:scale-[1.01]'
                    : 'opacity-60'
                }`}
                style={{
                  borderLeftColor: level.unlocked ? level.color.match(/#[\w]{6}/)?.[0] : 'var(--border-medium)'
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Left: Icon + Info */}
                  <div className="flex items-start gap-5 flex-1">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: level.color,
                        boxShadow: level.shadowColor
                      }}
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
                        <h2
                          className="font-semibold text-lg"
                          style={{
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.01em'
                          }}
                        >
                          Niveau {level.id} - {level.name}
                        </h2>
                        {level.completedLessons === level.totalLessons && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        )}
                      </div>
                      <p
                        className="font-normal text-sm leading-relaxed mb-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {level.description}
                      </p>

                      {/* Progress info */}
                      <div className="mt-2">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-sm" style={{ color: 'var(--text-tertiary)' }}>
                            {level.completedLessons} / {level.totalLessons} leçons complétées
                          </span>
                          {/* Visual progress bar */}
                          <div
                            className="h-1.5 rounded-full w-40 overflow-hidden"
                            style={{ background: 'var(--hover-bg)' }}
                          >
                            <div
                              className="h-1.5 rounded-full transition-all duration-500 ease-out"
                              style={{
                                background: level.progressGradient,
                                width: `${progressPercent}%`
                              }}
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
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-105"
                        style={{
                          background: level.color,
                          boxShadow: level.shadowColor
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = level.hoverShadow
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = level.shadowColor
                        }}
                      >
                        {level.completedLessons === 0 ? 'Commencer' : 'Continuer'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <div
                        className="inline-flex items-center gap-1.5 font-medium text-sm px-3 py-1.5 rounded-lg"
                        style={{
                          background: 'var(--hover-bg)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        <Lock className="w-3.5 h-3.5" />
                        Verrouillé
                      </div>
                    )}
                  </div>
                </div>

                {/* Unlock condition */}
                {!level.unlocked && (
                  <div className="mt-5 ml-6 opacity-70">
                    <div
                      className="font-medium text-sm italic px-4 py-2 rounded-lg inline-flex items-center gap-2"
                      style={{
                        background: 'var(--hover-bg)',
                        color: 'var(--text-tertiary)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
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
