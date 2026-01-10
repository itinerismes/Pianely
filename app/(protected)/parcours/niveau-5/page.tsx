import { ArrowLeft, Clock, CheckCircle2, Circle, Lock } from 'lucide-react'
import Link from 'next/link'

const lessons = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: 'Bientôt disponible',
  description: 'Cette leçon sera disponible prochainement',
  duration: 20,
  completed: false,
  unlocked: false,
  href: `/parcours/niveau-5/lecon-${i + 1}`
}))

export default function Niveau5Page() {
  const completedCount = lessons.filter((l) => l.completed).length
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6 md:px-8">
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white/90 mb-2">
                  Niveau 5 - Virtuosité
                </h1>
                <p className="text-gray-400 text-lg mb-4">
                  Atteins l&apos;excellence
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-400" />
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
                  className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${(completedCount / lessons.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-xl p-8 text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white/90 mb-2">
            Niveau 5 en développement
          </h3>
          <p className="text-gray-400 mb-4">
            Les leçons du Niveau 5 - Virtuosité seront bientôt disponibles.
            <br />
            Continue à pratiquer les niveaux précédents en attendant !
          </p>
          <Link
            href="/parcours"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-medium rounded-lg hover:opacity-90 transition-all"
          >
            Retour au parcours
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>

        {/* Lessons List (placeholder) */}
        <div className="flex flex-col gap-6 md:gap-8">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-5 shadow-xl shadow-black/20 opacity-50"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Circle className="w-6 h-6 text-slate-700" />
                </div>
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
