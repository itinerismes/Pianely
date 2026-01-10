import { ArrowLeft, Clock, CheckCircle2, Circle, Play } from 'lucide-react'
import Link from 'next/link'

const lessons = [
  {
    id: 1,
    title: 'Anatomie du clavier',
    description: 'Découvre les notes, les octaves et la structure du piano',
    duration: 8,
    completed: false,
    unlocked: true,
    href: '/parcours/niveau-1/lecon-1'
  },
  {
    id: 2,
    title: 'Position des mains',
    description: 'Apprends la bonne posture et le placement des doigts',
    duration: 10,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-1/lecon-2'
  },
  {
    id: 3,
    title: 'Premier motif main droite',
    description: 'Joue ta première mélodie simple avec la main droite',
    duration: 12,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-1/lecon-3'
  },
  {
    id: 4,
    title: 'Premier motif main gauche',
    description: 'Découvre les accords de base avec la main gauche',
    duration: 12,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-1/lecon-4'
  },
  {
    id: 5,
    title: 'Ton premier morceau complet',
    description: 'Combine les deux mains pour jouer ton premier morceau !',
    duration: 15,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-1/lecon-5'
  }
]

export default function Niveau1Page() {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white/90 mb-2">
                  Niveau 1 - Découverte
                </h1>
                <p className="text-gray-400 text-lg mb-4">
                  Tes premiers pas au piano
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
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
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${(completedCount / lessons.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="flex flex-col gap-6 md:gap-8">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-5 shadow-xl shadow-black/20 transition-all duration-200 ${
                lesson.unlocked
                  ? 'hover:shadow-2xl hover:border-slate-600'
                  : 'opacity-50'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Status Icon */}
                <div className="flex-shrink-0">
                  {lesson.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  ) : lesson.unlocked ? (
                    <Circle className="w-6 h-6 text-slate-600" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-700" />
                  )}
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
                  {lesson.unlocked ? (
                    <Link
                      href={lesson.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      {lesson.completed ? (
                        <>
                          Revoir
                          <Play className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          {index === 0 || lessons[index - 1].completed
                            ? 'Commencer'
                            : 'Continuer'}
                          <Play className="w-4 h-4" />
                        </>
                      )}
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="px-5 py-2.5 bg-slate-700/50 text-slate-600 font-medium rounded-lg cursor-not-allowed"
                    >
                      Verrouillé
                    </button>
                  )}
                </div>
              </div>

              {/* Unlock message */}
              {!lesson.unlocked && index > 0 && (
                <div className="mt-5 ml-6 opacity-70">
                  <div className="bg-slate-800/30 text-slate-500 font-medium text-sm italic px-4 py-2 rounded-lg inline-flex items-center gap-2">
                    <span>🔒 Complète la leçon {index} pour débloquer</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Completion Message */}
        {completedCount === lessons.length && (
          <div className="mt-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white/90 mb-2">
              Félicitations !
            </h3>
            <p className="text-gray-400 mb-4">
              Tu as complété le Niveau 1 - Découverte
            </p>
            <Link
              href="/parcours"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:opacity-90 transition-all"
            >
              Passer au Niveau 2
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
