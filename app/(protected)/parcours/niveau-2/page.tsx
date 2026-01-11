import { ArrowLeft, Clock, CheckCircle2, Circle, Play, Lock } from 'lucide-react'
import Link from 'next/link'

const lessons = [
  {
    id: 1,
    title: 'Bientôt disponible',
    description: 'Cette leçon sera disponible prochainement',
    duration: 10,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-2/lecon-1'
  },
  {
    id: 2,
    title: 'Bientôt disponible',
    description: 'Cette leçon sera disponible prochainement',
    duration: 12,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-2/lecon-2'
  },
  {
    id: 3,
    title: 'Bientôt disponible',
    description: 'Cette leçon sera disponible prochainement',
    duration: 12,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-2/lecon-3'
  },
  {
    id: 4,
    title: 'Bientôt disponible',
    description: 'Cette leçon sera disponible prochainement',
    duration: 15,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-2/lecon-4'
  },
  {
    id: 5,
    title: 'Bientôt disponible',
    description: 'Cette leçon sera disponible prochainement',
    duration: 15,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-2/lecon-5'
  },
  {
    id: 6,
    title: 'Bientôt disponible',
    description: 'Cette leçon sera disponible prochainement',
    duration: 18,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-2/lecon-6'
  },
  {
    id: 7,
    title: 'Bientôt disponible',
    description: 'Cette leçon sera disponible prochainement',
    duration: 18,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-2/lecon-7'
  }
]

export default function Niveau2Page() {
  const completedCount = lessons.filter((l) => l.completed).length
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0)

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/parcours"
            className="group inline-flex items-center gap-2 font-semibold text-sm mb-6 transition-all duration-200"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="group-hover:text-[var(--text-primary)] transition-colors">Retour au parcours</span>
          </Link>

          <div
            className="backdrop-blur-xl rounded-3xl p-8 border"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="flex items-start gap-6 mb-8">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-info) 0%, var(--accent-info-hover) 100%)',
                  boxShadow: '0 4px 24px rgba(59, 130, 246, 0.4)'
                }}
              >
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <div className="flex-1">
                <h1
                  className="text-3xl md:text-4xl font-bold mb-3"
                  style={{
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Niveau 2 - Fondations
                </h1>
                <p className="text-lg mb-5" style={{ color: 'var(--text-secondary)' }}>
                  Construis des bases solides
                </p>

                {/* Stats */}
                <div className="flex items-center gap-8 text-sm flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--accent-info)' }} />
                    <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      {completedCount} / {lessons.length} leçons
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5" style={{ color: 'var(--accent-info)' }} />
                    <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>~{totalDuration} min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-sm mb-3">
                <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>Progression du niveau</span>
                <span className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  {Math.round((completedCount / lessons.length) * 100)}%
                </span>
              </div>
              <div
                className="h-3 rounded-full overflow-hidden backdrop-blur-sm"
                style={{ background: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-info) 0%, var(--accent-info-light) 100%)',
                    width: `${(completedCount / lessons.length) * 100}%`,
                    boxShadow: '0 0 16px rgba(59, 130, 246, 0.5)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div
          className="backdrop-blur-xl rounded-3xl p-10 border text-center mb-8"
          style={{
            background: 'rgba(59, 130, 246, 0.1)',
            borderColor: 'rgba(59, 130, 246, 0.3)',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)'
          }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{
              background: 'linear-gradient(135deg, var(--accent-info) 0%, var(--accent-info-hover) 100%)',
              boxShadow: '0 4px 24px rgba(59, 130, 246, 0.4)'
            }}
          >
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Niveau 2 en développement
          </h3>
          <p className="text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
            Les leçons du Niveau 2 - Fondations seront bientôt disponibles.
            <br />
            Continue à pratiquer le Niveau 1 en attendant !
          </p>
          <Link
            href="/parcours/niveau-1"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, var(--accent-info) 0%, var(--accent-info-hover) 100%)',
              boxShadow: '0 4px 24px rgba(59, 130, 246, 0.4)'
            }}
          >
            Retour au Niveau 1
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>

        {/* Lessons List (placeholder) */}
        <div className="flex flex-col gap-5">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="backdrop-blur-xl rounded-2xl p-6 border opacity-40"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="flex items-center gap-5">
                {/* Status Icon */}
                <div className="flex-shrink-0">
                  <Circle className="w-7 h-7" style={{ color: 'rgba(255, 255, 255, 0.1)' }} />
                </div>

                {/* Lesson Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-bold" style={{ color: 'var(--text-tertiary)' }}>
                      Leçon {lesson.id}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                      <Clock className="w-4 h-4" />
                      <span>{lesson.duration} min</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {lesson.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{lesson.description}</p>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <button
                    disabled
                    className="px-6 py-3 font-bold rounded-xl cursor-not-allowed backdrop-blur-sm"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    Bientôt
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
