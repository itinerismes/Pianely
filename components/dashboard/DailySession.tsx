'use client'

/**
 * Ta séance du jour — le plan guidé du débutant.
 *
 * Trois étapes courtes et dans le bon ordre : échauffer les doigts,
 * avancer d'une leçon, jouer un vrai morceau. L'échauffement se coche
 * automatiquement (localStorage posé par /echauffement), le morceau se
 * coche dès qu'une pratique est enregistrée aujourd'hui.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Flame, BookOpen, Music, CheckCircle2, CalendarCheck } from 'lucide-react'

interface DailySessionProps {
  /** Activité récente (stats.recentActivity) pour détecter la pratique du jour */
  recentActivity: { date: string; duration: number; sessions: number }[]
  /** Lien vers la prochaine leçon à faire */
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
      icon: <Flame className="h-4 w-4" />,
      title: 'Échauffement',
      description: '5 min pour réveiller tes doigts',
      href: '/echauffement',
      done: warmupDone,
    },
    {
      id: 'lesson',
      icon: <BookOpen className="h-4 w-4" />,
      title: 'Ta leçon',
      description: nextLessonLabel,
      href: nextLessonHref,
      done: false,
    },
    {
      id: 'piece',
      icon: <Music className="h-4 w-4" />,
      title: 'Un morceau',
      description: '10 min en mode Practice',
      href: '/morceaux',
      done: practicedToday,
    },
  ]

  const doneCount = steps.filter((s) => s.done).length

  return (
    <div className="panel rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
          <CalendarCheck className="h-3.5 w-3.5" />
          Ta séance du jour
        </h2>
        <span className={`text-xs font-bold tabular-nums ${doneCount === steps.length ? 'accent-green' : 'text-faint'}`}>
          {doneCount}/{steps.length}
        </span>
      </div>

      <div className="space-y-2.5">
        {steps.map((step, index) => (
          <Link
            key={step.id}
            href={step.href}
            className={`glass flex items-center gap-3 rounded-xl p-3 transition-all hover:border-[#e0a83c]/40 hover:bg-white/[0.07] ${
              step.done ? 'opacity-70' : ''
            }`}
          >
            <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
              step.done ? 'badge-stage' : 'badge-brass'
            }`}>
              {step.done ? <CheckCircle2 className="h-4 w-4" /> : step.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className={`text-sm font-semibold ${step.done ? 'text-dim line-through' : 'text-[#f2efe8]'}`}>
                {index + 1}. {step.title}
              </p>
              <p className="text-faint truncate text-xs">{step.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {doneCount === steps.length && (
        <p className="accent-green mt-3 text-center text-sm font-semibold">
          Séance complète — à demain ! 🎉
        </p>
      )}
    </div>
  )
}
