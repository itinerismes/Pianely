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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/parcours"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au parcours
          </Link>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-xl shadow-black/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white/90 mb-2">
                  Niveau 2 - Fondations
                </h1>
                <p className="text-gray-400 text-lg mb-4">
                  Construis des bases solides
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">
                      {completedCount} / {lessons.length} leçons
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span className="text-gray-300">~{totalDuration} minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Progression du niveau</span>
                <span className="text-white font-semibold">
                  {Math.round((completedCount / lessons.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${(completedCount / lessons.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-8 text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white/90 mb-2">
            Niveau 2 en développement
          </h3>
          <p className="text-gray-400 mb-4">
            Les leçons du Niveau 2 - Fondations seront bientôt disponibles.
            <br />
            Continue à pratiquer le Niveau 1 en attendant !
          </p>
          <Link
            href="/parcours/niveau-1"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition-all"
          >
            Retour au Niveau 1
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>

        {/* Lessons List (placeholder) */}
        <div className="flex flex-col gap-6 md:gap-8">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-5 shadow-xl shadow-black/20 opacity-50"
            >
              <div className="flex items-center gap-4">
                {/* Status Icon */}
                <div className="flex-shrink-0">
                  <Circle className="w-6 h-6 text-slate-700" />
                </div>

                {/* Lesson Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-medium text-gray-400">
                      Leçon {lesson.id}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{lesson.duration} min</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white/90 mb-1">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-gray-400">{lesson.description}</p>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <button
                    disabled
                    className="px-5 py-2.5 bg-slate-700/50 text-slate-600 font-medium rounded-lg cursor-not-allowed"
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
