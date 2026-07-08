'use client'

import { WeeklyGoals } from '@/components/dashboard/WeeklyGoals'
import { DailySession } from '@/components/dashboard/DailySession'
import { OctaveProgress } from '@/components/ui/octave-progress'
import { ArrowRight } from 'lucide-react'
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

/** Salutation selon l'heure : le piano se joue aussi le soir */
function greeting(): string {
  const hour = new Date().getHours()
  if (hour < 6) return 'Bonne nuit'
  if (hour < 12) return 'Bonjour'
  if (hour < 18) return 'Bon après-midi'
  return 'Bonsoir'
}

export function DashboardClient({
  userName,
  stats,
  niveaux,
}: DashboardClientProps) {
  const router = useRouter()
  const position = findCurrentPosition(niveaux)

  const todayLabel = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <div className="rise-seq mx-auto max-w-5xl space-y-8 py-4 md:space-y-10 md:py-8">
      {/* Salutation */}
      <div>
        <p className="text-faint mb-2 text-sm font-semibold capitalize">{todayLabel}</p>
        <h1 className="font-display text-4xl tracking-tight text-[#f2efe8] md:text-5xl">
          {greeting()}, <span className="accent-brass">{userName}</span>
        </h1>
      </div>

      {/* Bento : séance du jour en héros */}
      <DailySession
        recentActivity={stats.recentActivity}
        nextLessonHref={position.href}
        nextLessonLabel={position.label}
      />

      <div className="grid gap-8 md:grid-cols-5 md:gap-10">
        {/* Continuer l'apprentissage — où j'en suis */}
        <div className="panel flex flex-col justify-between rounded-3xl p-8 md:col-span-3">
          <div>
            <p className="eyebrow mb-2">Où j'en suis</p>
            <h2 className="font-display text-2xl text-[#f2efe8] md:text-3xl">
              {position.label}
            </h2>
            <div className="mt-8">
              <div className="mb-2.5 flex items-baseline justify-between">
                <span className="text-dim text-sm">Niveau {position.niveau}</span>
                <span className="font-display text-lg tabular-nums text-[#f2efe8]">{position.completion}%</span>
              </div>
              <OctaveProgress value={position.completion} />
            </div>
          </div>

          <button
            className="btn-accent mt-10 inline-flex w-fit items-center gap-2 rounded-full px-7 py-3.5 font-bold"
            onClick={() => router.push(position.href)}
          >
            {position.isNew ? 'Commencer la leçon' : 'Reprendre la leçon'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Objectifs hebdomadaires */}
        <div className="md:col-span-2">
          <WeeklyGoals stats={stats} />
        </div>
      </div>
    </div>
  )
}
