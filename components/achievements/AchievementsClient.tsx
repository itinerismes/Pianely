'use client'

import { OctaveProgress } from '@/components/ui/octave-progress'
import {
  Trophy,
  Lock,
  CheckCircle2,
  Target,
  Flame,
  Clock,
  Star,
  Award
} from 'lucide-react'

interface Achievement {
  id: string
  code: string
  title: string
  description: string | null
  icon_url: string | null
  category: string | null
  criteria: any
  unlocked: boolean
  unlockedAt: string | null
}

interface AchievementsClientProps {
  achievementsByCategory: Record<string, Achievement[]>
  totalCount: number
  unlockedCount: number
}

export function AchievementsClient({
  achievementsByCategory,
  totalCount,
  unlockedCount
}: AchievementsClientProps) {
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100)

  // Get emoji icon for achievement
  const getAchievementIcon = (code: string, icon_url: string | null) => {
    if (icon_url) return icon_url

    const iconMap: Record<string, string> = {
      'first_lesson': '🎓',
      'level_1_complete': '🌟',
      'level_2_complete': '⭐',
      'level_3_complete': '✨',
      'level_4_complete': '💫',
      'level_5_complete': '🏆',
      'streak_7': '🔥',
      'streak_30': '🔥🔥',
      'practice_10h': '⏰',
      'practice_50h': '⏳',
      'practice_100h': '⌛'
    }

    return iconMap[code] || '🎯'
  }

  // Get category icon
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactElement> = {
      'Progression': <Target className="w-4 h-4" />,
      'Pratique': <Clock className="w-4 h-4" />,
      'Streak': <Flame className="w-4 h-4" />,
      'Excellence': <Star className="w-4 h-4" />,
      'Général': <Award className="w-4 h-4" />
    }
    return icons[category] || <Trophy className="w-4 h-4" />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl text-[#f2efe8]">
          Succès & <span className="accent-brass">achievements</span>
        </h1>
        <p className="text-dim mt-1">
          Débloque des succès en progressant dans ton apprentissage
        </p>
      </div>

      {/* Overview */}
      <div className="panel rounded-2xl p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="badge-brass flex h-12 w-12 items-center justify-center rounded-xl">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2efe8]">Progression globale</h2>
              <p className="text-dim mt-0.5 text-sm">
                Continue à débloquer des succès !
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="accent-brass text-4xl font-black tabular-nums">
              {completionPercentage}%
            </div>
            <p className="text-faint text-sm tabular-nums">
              {unlockedCount}/{totalCount} débloqués
            </p>
          </div>
        </div>
        <OctaveProgress value={completionPercentage} keys={12} />
      </div>

      {/* Achievements by Category */}
      <div className="space-y-8">
        {Object.entries(achievementsByCategory).map(([category, achievements]) => {
          const unlockedInCategory = achievements.filter(a => a.unlocked).length

          return (
            <div key={category}>
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="badge-brass flex h-9 w-9 items-center justify-center rounded-lg">
                  {getCategoryIcon(category)}
                </div>
                <div className="flex-1">
                  <h2 className="text-[13px] font-bold uppercase tracking-widest text-[#f2efe8]">{category}</h2>
                  <p className="text-faint text-sm tabular-nums">
                    {unlockedInCategory}/{achievements.length} débloqués
                  </p>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`panel rounded-2xl p-5 transition-all duration-300 ${
                      achievement.unlocked
                        ? 'panel-hover border-[#e0a83c]/30 shadow-[0_0_20px_rgba(224,168,60,0.10)]'
                        : 'opacity-50'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="flex items-start justify-between">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl text-4xl ${
                            achievement.unlocked
                              ? 'badge-brass'
                              : 'border border-white/[0.08] bg-white/[0.04]'
                          }`}
                        >
                          {achievement.unlocked ? (
                            getAchievementIcon(achievement.code, achievement.icon_url)
                          ) : (
                            <Lock className="text-faint h-7 w-7" />
                          )}
                        </div>
                        {achievement.unlocked && (
                          <CheckCircle2 className="accent-green h-6 w-6" />
                        )}
                      </div>

                      {/* Title and Description */}
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-[#f2efe8]">
                          {achievement.unlocked ? achievement.title : '???'}
                        </h3>
                        <p className="text-dim text-sm">
                          {achievement.unlocked
                            ? achievement.description || 'Succès débloqué !'
                            : 'Continue à progresser pour débloquer ce succès'}
                        </p>
                      </div>

                      {/* Unlock Date */}
                      {achievement.unlocked && achievement.unlockedAt && (
                        <div className="border-t border-white/[0.08] pt-2">
                          <p className="text-faint text-xs">
                            Débloqué le{' '}
                            {new Date(achievement.unlockedAt).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      )}

                      {/* Status Badge */}
                      <span
                        className={`inline-flex w-full items-center justify-center rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide ${
                          achievement.unlocked
                            ? 'badge-brass'
                            : 'text-faint border-white/[0.08] bg-white/[0.03]'
                        }`}
                      >
                        {achievement.unlocked ? '✓ Débloqué' : '🔒 Verrouillé'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Empty State */}
      {Object.keys(achievementsByCategory).length === 0 && (
        <div className="panel rounded-2xl py-16 text-center">
          <Trophy className="text-faint mx-auto mb-4 h-20 w-20" />
          <h3 className="mb-2 text-xl font-bold text-[#f2efe8]">Aucun succès disponible</h3>
          <p className="text-dim mx-auto max-w-md">
            Les succès seront bientôt disponibles. Continue à progresser !
          </p>
        </div>
      )}
    </div>
  )
}
