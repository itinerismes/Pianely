import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy } from "lucide-react";

interface Achievement {
  id: string
  code: string
  title: string
  description: string | null
  icon_url: string | null
  category: string | null
  unlocked: boolean
}

interface AchievementsProps {
  achievements: Achievement[]
  totalAchievements: number
  unlockedCount: number
}

export function Achievements({ achievements, totalAchievements, unlockedCount }: AchievementsProps) {
  // Get emoji icon from achievement code or use default
  const getAchievementIcon = (code: string, icon_url: string | null) => {
    if (icon_url) return icon_url

    // Default icons based on code
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

  return (
    <Card className="bg-gradient-to-br from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/50 border-amber-200 dark:border-amber-800 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white">
            <Trophy className="h-4 w-4" />
          </div>
          Succès débloqués 🏅
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          {unlockedCount} sur {totalAchievements} succès obtenus
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progression</span>
            <span className="font-medium">
              {Math.round((unlockedCount / totalAchievements) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
              style={{ width: `${(unlockedCount / totalAchievements) * 100}%` }}
            />
          </div>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          {achievements.slice(0, 6).map((achievement) => (
            <div
              key={achievement.id}
              className={`aspect-square rounded-xl flex flex-col items-center justify-center p-2 transition-all duration-300 ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 border-2 border-amber-300 dark:border-amber-700 shadow-md hover:shadow-lg hover:scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 opacity-40 grayscale'
              }`}
              title={achievement.unlocked ? achievement.title : '???'}
            >
              <span className="text-3xl mb-1">
                {achievement.unlocked
                  ? getAchievementIcon(achievement.code, achievement.icon_url)
                  : '🔒'
                }
              </span>
              {achievement.unlocked && (
                <span className="text-[9px] font-medium text-center line-clamp-2 text-amber-800 dark:text-amber-200">
                  {achievement.title}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* View all link */}
        {totalAchievements > 6 && (
          <div className="text-center pt-2">
            <button className="text-sm text-amber-600 hover:text-amber-700 font-medium hover:underline">
              Voir tous les succès ({totalAchievements})
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
