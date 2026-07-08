'use client'

import { OctaveProgress } from '@/components/ui/octave-progress'
import {
  TrendingUp,
  Clock,
  Award,
  Target,
  Calendar,
  BarChart3,
  Flame
} from 'lucide-react'
import type { DashboardStats } from '@/lib/supabase/progress'

interface LevelProgress {
  levelNumber: number
  title: string
  completion: number
  color: string
}

interface PracticeStats {
  date: string
  duration: number
  sessions: number
}

interface ProgressionClientProps {
  stats: DashboardStats
  levelProgress: LevelProgress[]
  practiceStats: PracticeStats[]
  progressByDate: Record<string, number>
  totalLessons: number
}

function StatCard({
  title,
  icon,
  children
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="panel panel-hover rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-bold uppercase tracking-widest text-dim">{title}</p>
        <div className="badge-brass flex h-9 w-9 items-center justify-center rounded-xl">
          {icon}
        </div>
      </div>
      {children}
    </div>
  )
}

export function ProgressionClient({
  stats,
  levelProgress,
  practiceStats,
  progressByDate,
  totalLessons
}: ProgressionClientProps) {
  // Calculate overall completion
  const overallCompletion = Math.round(
    (stats.totalLessonsCompleted / totalLessons) * 100
  )

  // Get last 7 days for streak calendar
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - i))
    return date.toISOString().split('T')[0]
  })

  return (
    <div className="mx-auto max-w-6xl space-y-8 py-4 md:space-y-10 md:py-8">
      {/* Header */}
      <div>
        <p className="eyebrow mb-2">Progression</p>
        <h1 className="font-display text-4xl tracking-tight text-[#f2efe8] md:text-5xl">
          Chaque note <span className="accent-brass">compte</span>.
        </h1>
        <p className="text-dim mt-3">
          Ton évolution et tes statistiques d'apprentissage
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Progression globale" icon={<TrendingUp className="h-4 w-4" />}>
          <p className="mt-2 text-3xl font-black tabular-nums text-[#f2efe8]">{overallCompletion}%</p>
          <p className="text-faint mt-1 text-xs tabular-nums">
            {stats.totalLessonsCompleted}/{totalLessons} leçons
          </p>
          <div className="mt-3">
            <OctaveProgress value={overallCompletion} />
          </div>
        </StatCard>

        <StatCard title="Temps de pratique" icon={<Clock className="h-4 w-4" />}>
          <p className="mt-2 text-3xl font-black tabular-nums text-[#f2efe8]">{stats.totalPracticeTimeHours}h</p>
          <p className="text-faint mt-1 text-xs tabular-nums">
            {stats.totalPracticeTimeMinutes} minutes au total
          </p>
        </StatCard>

        <StatCard title="Streak actuel" icon={<Flame className="h-4 w-4" />}>
          <p className="mt-2 flex items-center gap-2 text-3xl font-black tabular-nums text-[#f2efe8]">
            {stats.currentStreak > 0 && '🔥'} {stats.currentStreak}
          </p>
          <p className="text-faint mt-1 text-xs">
            {stats.currentStreak > 0 ? 'Jours consécutifs' : 'Commence une série !'}
          </p>
        </StatCard>

        <StatCard title="Succès débloqués" icon={<Award className="h-4 w-4" />}>
          <p className="mt-2 text-3xl font-black tabular-nums text-[#f2efe8]">
            {stats.unlockedAchievements}/{stats.totalAchievements}
          </p>
          <p className="text-faint mt-1 text-xs tabular-nums">
            {Math.round((stats.unlockedAchievements / stats.totalAchievements) * 100)}% complétés
          </p>
        </StatCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Level Progress */}
          <div className="panel rounded-2xl p-5">
            <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
              <BarChart3 className="h-3.5 w-3.5" />
              Progression par niveau
            </h2>
            <div className="space-y-5">
              {levelProgress.map((level) => (
                <div key={level.levelNumber} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center rounded-full bg-gradient-to-r px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#0a0a0e] ${level.color}`}>
                        Niveau {level.levelNumber}
                      </span>
                      <span className="text-sm font-semibold text-[#f2efe8]">{level.title}</span>
                    </div>
                    <span className="text-sm font-bold tabular-nums text-[#f2efe8]">{level.completion}%</span>
                  </div>
                  <OctaveProgress value={level.completion} />
                </div>
              ))}
            </div>
          </div>

          {/* Practice History */}
          <div className="panel rounded-2xl p-5">
            <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
              <Calendar className="h-3.5 w-3.5" />
              Historique de pratique (30 derniers jours)
            </h2>
            {practiceStats.length > 0 ? (
              <div className="space-y-3">
                {practiceStats.slice(0, 10).map((stat, index) => (
                  <div
                    key={index}
                    className="glass flex items-center justify-between rounded-xl p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="badge-brass flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold tabular-nums">
                        {new Date(stat.date).getDate()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#f2efe8]">
                          {new Date(stat.date).toLocaleDateString('fr-FR', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long'
                          })}
                        </p>
                        <p className="text-faint text-xs">
                          {stat.sessions} session{stat.sessions > 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <p className="accent-brass font-bold tabular-nums">{stat.duration} min</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <Clock className="text-faint mx-auto mb-4 h-16 w-16" />
                <p className="text-dim">
                  Aucune pratique enregistrée encore
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Streak Calendar */}
          <div className="panel rounded-2xl p-5">
            <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
              <Flame className="h-3.5 w-3.5" />
              7 derniers jours
            </h2>
            <div className="grid grid-cols-7 gap-2">
              {last7Days.map((date) => {
                const hasActivity = progressByDate[date] || 0
                const dayName = new Date(date).toLocaleDateString('fr-FR', { weekday: 'short' })

                return (
                  <div key={date} className="flex flex-col items-center gap-1">
                    <span className="text-faint text-xs font-semibold">
                      {dayName}
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-all ${
                        hasActivity > 0
                          ? 'bg-gradient-to-br from-[#f0c66a] to-[#d99a26] text-[#1a1408] shadow-[0_0_12px_rgba(224,168,60,0.4)]'
                          : 'text-faint border border-white/[0.07] bg-white/[0.03]'
                      }`}
                    >
                      {hasActivity > 0 ? '✓' : '·'}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="panel rounded-2xl p-5">
            <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
              <Target className="h-3.5 w-3.5" />
              Statistiques rapides
            </h2>
            <div className="space-y-2.5">
              {[
                { label: 'Leçons complétées', value: String(stats.totalLessonsCompleted) },
                { label: 'Niveaux terminés', value: `${Object.values(stats.levelsCompletion).filter(c => c === 100).length}/5` },
                { label: 'Moyenne par niveau', value: `${Math.round(Object.values(stats.levelsCompletion).reduce((a, b) => a + b, 0) / 5)}%` },
                { label: 'Sessions cette semaine', value: String(stats.recentActivity.reduce((sum, a) => sum + a.sessions, 0)) },
              ].map((item) => (
                <div key={item.label} className="glass flex items-center justify-between rounded-xl px-3 py-2">
                  <span className="text-dim text-sm">{item.label}</span>
                  <span className="font-bold tabular-nums text-[#f2efe8]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
