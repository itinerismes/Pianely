'use client'

import { useState } from 'react'
import { PianelyStats } from '@/components/dashboard/PianelyStats'
import { WeeklyGoals } from '@/components/dashboard/WeeklyGoals'
import { Achievements } from '@/components/dashboard/Achievements'
import { NiveauCard } from '@/components/parcours/NiveauCard'
import { ArrowRight, Music, Trophy } from 'lucide-react'
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

type NiveauFilter = 'all' | 'in-progress' | 'completed'

export function DashboardClient({
  userName,
  stats,
  niveaux,
  achievements,
  totalAchievements,
  unlockedAchievementsCount
}: DashboardClientProps) {
  const router = useRouter()
  const [filter, setFilter] = useState<NiveauFilter>('all')

  const inProgressNiveaux = niveaux.filter(
    (n) => n.unlocked && n.completedLessons > 0 && n.completedLessons < n.totalLessons
  )
  const completedNiveaux = niveaux.filter((n) => n.completedLessons === n.totalLessons)

  const filtered =
    filter === 'in-progress' ? inProgressNiveaux :
    filter === 'completed' ? completedNiveaux :
    niveaux

  const filters: { id: NiveauFilter; label: string; count?: number }[] = [
    { id: 'all', label: 'Tous' },
    { id: 'in-progress', label: 'En cours', count: inProgressNiveaux.length },
    { id: 'completed', label: 'Complétés', count: completedNiveaux.length },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="font-display text-3xl text-[#f2efe8]">
          Bienvenue, <span className="accent-brass">{userName}</span>
        </h1>
        <p className="text-dim mt-1">
          Continue ton apprentissage du piano. Tu progresses bien !
        </p>
      </div>

      {/* Stats */}
      <PianelyStats stats={stats} />

      {/* Grid Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Section */}
        <div className="space-y-4 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-dim">Mes Niveaux</h2>

            {/* Filtres */}
            <div className="glass flex rounded-full p-1">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    filter === f.id ? 'btn-accent' : 'text-dim hover:text-[#f2efe8]'
                  }`}
                >
                  {f.label}
                  {f.count !== undefined && f.count > 0 && (
                    <span className="tabular-nums opacity-80">{f.count}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.length > 0 ? (
              filtered.map((niveau) => (
                <NiveauCard key={niveau.niveau} {...niveau} />
              ))
            ) : (
              <div className="panel col-span-2 rounded-2xl py-12 text-center">
                {filter === 'completed' ? (
                  <Trophy className="text-faint mx-auto mb-4 h-16 w-16" />
                ) : (
                  <Music className="text-faint mx-auto mb-4 h-16 w-16" />
                )}
                <p className="text-dim">
                  {filter === 'completed'
                    ? 'Aucun niveau complété encore. Continue ton apprentissage !'
                    : 'Aucun niveau en cours. Commence un niveau pour le voir ici !'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <WeeklyGoals stats={stats} />

          <Achievements
            achievements={achievements}
            totalAchievements={totalAchievements}
            unlockedCount={unlockedAchievementsCount}
          />

          {/* Continue Learning */}
          <div className="panel rounded-2xl p-5">
            <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
              <ArrowRight className="h-3.5 w-3.5" />
              Continuer l'apprentissage
            </h2>
            <div className="glass mb-3 space-y-1.5 rounded-xl p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#f2efe8]">Niveau 1 - Leçon 1</span>
                <span className="badge-stage inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                  Nouveau
                </span>
              </div>
              <p className="text-faint text-xs">
                Position des mains et premières notes
              </p>
            </div>
            <button
              className="btn-accent inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold"
              onClick={() => router.push('/parcours/niveau-1/lecon-1')}
            >
              Commencer
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Recent Activity */}
          <div className="panel rounded-2xl p-5">
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-dim">
              Activité récente
            </h2>
            {stats.recentActivity.length > 0 ? (
              <div className="space-y-3 text-sm">
                {stats.recentActivity.slice(0, 5).map((activity, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                    <div>
                      <p className="font-semibold text-[#f2efe8]">
                        {activity.sessions} session{activity.sessions > 1 ? 's' : ''} de pratique
                      </p>
                      <p className="text-faint text-xs tabular-nums">
                        {activity.duration} min - {new Date(activity.date).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                  <div>
                    <p className="font-semibold text-[#f2efe8]">Compte créé</p>
                    <p className="text-faint text-xs">Aujourd'hui</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-[#f0c66a] shadow-[0_0_6px_rgba(224,168,60,0.6)]" />
                  <div>
                    <p className="font-semibold text-[#f2efe8]">Niveau 1 débloqué</p>
                    <p className="text-faint text-xs">Aujourd'hui</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
