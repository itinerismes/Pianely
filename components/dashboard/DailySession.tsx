'use client'

/**
 * Ta séance du jour — bloc héros du dashboard (bento).
 *
 * Timeline horizontale en 3 temps : échauffer, apprendre, jouer.
 * L'échauffement se coche automatiquement (localStorage posé par
 * /echauffement), le morceau dès qu'une pratique est enregistrée
 * aujourd'hui.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Flame, BookOpen, Music, Check, ArrowRight } from 'lucide-react'

interface DailySessionProps {
  recentActivity: { date: string; duration: number; sessions: number }[]
  nextLessonHref: string
  nextLessonLabel: string
}

export function DailySession({ recentActivity, nextLessonHref, nextLessonLabel }: DailySessionProps) {
  const [warmupDone, setWarmupDone] = useState(false)

  const today = new Date().toISOString().split('T')[0]
  const practicedToday = recentActivity.some((a) => a.date === today && a.duration > 0)

  useEffect(() => {
    setWarmupDone(localStorage.getItem('pianely-warmup-date') === today)
  }, [today])

  const steps = [
    {
      id: 'warmup',
      icon: <Flame className="h-5 w-5" />,
      title: 'Échauffement',
      description: '5 min pour réveiller tes doigts',
      href: '/echauffement',
      done: warmupDone,
    },
    {
      id: 'lesson',
      icon: <BookOpen className="h-5 w-5" />,
      title: 'Ta leçon',
      description: nextLessonLabel,
      href: nextLessonHref,
      done: false,
    },
    {
      id: 'piece',
      icon: <Music className="h-5 w-5" />,
      title: 'Un morceau',
      description: '10 min en mode Practice',
      href: '/morceaux',
      done: practicedToday,
    },
  ]

  const doneCount = steps.filter((s) => s.done).length
  // La prochaine étape à faire = la première non cochée
  const currentIndex = steps.findIndex((s) => !s.done)

  return (
    <div className="panel rounded-3xl p-8 md:p-10">
      <div className="mb-10 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Ta séance du jour</p>
          <h2 className="font-display text-2xl text-[#f2efe8] md:text-3xl">
            {doneCount === steps.length
              ? 'Séance complète — à demain 🎉'
              : doneCount === 0
                ? 'Trois temps, trente minutes.'
                : `Encore ${steps.length - doneCount} étape${steps.length - doneCount > 1 ? 's' : ''} — tu y es presque.`}
          </h2>
        </div>
        <span className={`font-display shrink-0 text-xl tabular-nums ${doneCount === steps.length ? 'accent-green' : 'accent-brass'}`}>
          {doneCount}<span className="text-faint"> / {steps.length}</span>
        </span>
      </div>

      {/* Timeline horizontale */}
      <div className="relative flex flex-col gap-8 md:flex-row md:gap-0">
        {steps.map((step, index) => {
          const isCurrent = index === currentIndex
          return (
            <Link
              key={step.id}
              href={step.href}
              className="group relative flex flex-1 items-start gap-4 md:flex-col md:gap-5 md:pr-8"
            >
              {/* Connecteur vers l'étape suivante (desktop) */}
              {index < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-16 right-4 top-6 hidden h-px bg-white/[0.08] md:block"
                />
              )}
              <div
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                  step.done
                    ? 'badge-stage'
                    : isCurrent
                      ? 'btn-accent shadow-[0_0_24px_rgba(224,168,60,0.35)]'
                      : 'border border-white/[0.09] bg-[#141318] text-faint group-hover:border-[#e0a83c]/40 group-hover:text-dim'
                }`}
              >
                {step.done ? <Check className="h-5 w-5" /> : step.icon}
              </div>
              <div className="min-w-0">
                <p className={`font-display text-lg transition-colors ${
                  step.done ? 'text-faint line-through' : isCurrent ? 'text-[#f2efe8]' : 'text-dim group-hover:text-[#f2efe8]'
                }`}>
                  {step.title}
                </p>
                <p className="text-faint mt-1 text-sm leading-relaxed">{step.description}</p>
                {isCurrent && (
                  <span className="accent-brass mt-3 inline-flex items-center gap-1.5 text-sm font-bold">
                    Commencer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
