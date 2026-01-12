'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
      'Progression': <Target className="w-5 h-5" />,
      'Pratique': <Clock className="w-5 h-5" />,
      'Streak': <Flame className="w-5 h-5" />,
      'Excellence': <Star className="w-5 h-5" />,
      'Général': <Award className="w-5 h-5" />
    }
    return icons[category] || <Trophy className="w-5 h-5" />
  }

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Progression': 'from-blue-500 to-cyan-600',
      'Pratique': 'from-green-500 to-emerald-600',
      'Streak': 'from-orange-500 to-amber-600',
      'Excellence': 'from-purple-500 to-violet-600',
      'Général': 'from-pink-500 to-rose-600'
    }
    return colors[category] || 'from-gray-500 to-gray-600'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 relative">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-10 blur-xl" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent relative z-10">
          Succès & Achievements 🏆
        </h1>
        <p className="text-muted-foreground relative z-10">
          Débloque des succès en progressant dans ton apprentissage
        </p>
      </div>

      {/* Overview Card */}
      <Card className="shadow-xl border-2 border-amber-200 bg-gradient-to-br from-white to-amber-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center shadow-md">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">Progression globale</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Continue à débloquer des succès !
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {completionPercentage}%
              </div>
              <p className="text-sm text-muted-foreground">
                {unlockedCount}/{totalCount} débloqués
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Achievements by Category */}
      <div className="space-y-8">
        {Object.entries(achievementsByCategory).map(([category, achievements]) => {
          const unlockedInCategory = achievements.filter(a => a.unlocked).length
          const categoryColor = getCategoryColor(category)

          return (
            <div key={category}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColor} text-white shadow-md`}>
                  {getCategoryIcon(category)}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{category}</h2>
                  <p className="text-sm text-muted-foreground">
                    {unlockedInCategory}/{achievements.length} débloqués
                  </p>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map((achievement) => (
                  <Card
                    key={achievement.id}
                    className={`shadow-lg border-2 transition-all duration-300 ${
                      achievement.unlocked
                        ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl hover:-translate-y-1'
                        : 'border-gray-200 bg-white opacity-75'
                    }`}
                  >
                    <CardContent className="pt-6 space-y-4">
                      {/* Icon */}
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-md ${
                            achievement.unlocked
                              ? `bg-gradient-to-br ${categoryColor}`
                              : 'bg-gray-200'
                          }`}
                        >
                          {achievement.unlocked ? (
                            getAchievementIcon(achievement.code, achievement.icon_url)
                          ) : (
                            <Lock className="w-8 h-8 text-gray-400" />
                          )}
                        </div>
                        {achievement.unlocked && (
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        )}
                      </div>

                      {/* Title and Description */}
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          {achievement.unlocked ? achievement.title : '???'}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.unlocked
                            ? achievement.description || 'Succès débloqué !'
                            : 'Continue à progresser pour débloquer ce succès'}
                        </p>
                      </div>

                      {/* Unlock Date */}
                      {achievement.unlocked && achievement.unlockedAt && (
                        <div className="pt-2 border-t border-amber-200">
                          <p className="text-xs text-muted-foreground">
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
                      <Badge
                        className={`w-full justify-center ${
                          achievement.unlocked
                            ? `bg-gradient-to-r ${categoryColor} text-white border-0`
                            : 'bg-gray-200 text-gray-600 border-0'
                        }`}
                      >
                        {achievement.unlocked ? '✓ Débloqué' : '🔒 Verrouillé'}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Empty State */}
      {Object.keys(achievementsByCategory).length === 0 && (
        <Card className="shadow-lg border-2">
          <CardContent className="pt-16 pb-16 text-center">
            <Trophy className="w-20 h-20 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aucun succès disponible</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Les succès seront bientôt disponibles. Continue à progresser !
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
