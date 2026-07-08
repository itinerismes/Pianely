'use client'

import { WeeklyGoals } from '@/components/dashboard/WeeklyGoals'
import { DailySession } from '@/components/dashboard/DailySession'
import { OctaveProgress } from '@/components/ui/octave-progress'
import { ArrowRight, BookOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { DashboardStats } from '@/lib/supabase/progress'

interface NiveauData {
  niveau: number
  name: string
  description: string
  totalLessons: number
  completedLessons: number
  duration: string
  unlocked: boolean
  gradient: string
  href: string
  completion: number
}

interface Achievement {
  id: string
  code: string
  title: string
  description: string | null
  icon_url: string | null
  category: string | null
  unlocked: boolean
}

interface DashboardClientProps {
  userName: string
  stats: DashboardStats
  niveaux: NiveauData[]
  achievements: Achievement[]
  totalAchievements: number
  unlockedAchievementsCount: number
}

/** Trouve où en est l'utilisateur : premier niveau débloqué non terminé */
function findCurrentPosition(niveaux: NiveauData[]) {
  const current =
    niveaux.find((n) => n.unlocked && n.completedLessons < n.totalLessons) ??
    niveaux[niveaux.length - 1]

  if (!current) {
    return {
      niveau: 1,
      lesson: 1,
      label: 'Niveau 1 · Leçon 1',
      href: '/parcours/niveau-1/lecon-1',
      completion: 0,
      isNew: true,
    }
  }

  const nextLesson = Math.min(current.completedLessons + 1, current.totalLessons)
  return {
    niveau: current.niveau,
    lesson: nextLesson,
    label: `Niveau ${current.niveau} · Leçon ${nextLesson}`,
    href: `/parcours/niveau-${current.niveau}/lecon-${nextLesson}`,
    completion: current.completion,
    isNew: current.completedLessons === 0,
  }
}

export function DashboardClient({
  userName,
  stats,
  niveaux,
}: DashboardClientProps) {
  const router = useRouter()
  const position = findCurrentPosition(niveaux)

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="font-display text-3xl text-[#f2efe8]">
          Bienvenue, <span className="accent-brass">{userName}</span>
        </h1>
        <p className="text-dim mt-1">
          Continue ton apprentissage du piano. Tu progresses bien !
        </p>
      </div>

      {/* Séance du jour — le cœur du dashboard */}
      <DailySession
        recentActivity={stats.recentActivity}
        nextLessonHref={position.href}
        nextLessonLabel={position.label}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Continuer l'apprentissage — où j'en suis */}
        <div className="panel rounded-2xl p-5">
          <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
            <BookOpen className="h-3.5 w-3.5" />
            Continuer l'apprentissage
          </h2>

          <div className="glass mb-4 space-y-2 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#f2efe8]">{position.label}</span>
              {position.isNew && (
                <span className="badge-stage inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                  Nouveau
                </span>
              )}
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-faint">Progression du niveau {position.niveau}</span>
                <span className="font-bold tabular-nums text-[#f2efe8]">{position.completion}%</span>
              </div>
              <OctaveProgress value={position.completion} />
            </div>
          </div>

          <button
            className="btn-accent inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold"
            onClick={() => router.push(position.href)}
          >
            {position.isNew ? 'Commencer' : 'Reprendre'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Objectifs hebdomadaires */}
        <WeeklyGoals stats={stats} />
      </div>
    </div>
  )
}
