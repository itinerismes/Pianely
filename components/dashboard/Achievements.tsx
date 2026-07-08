import { OctaveProgress } from "@/components/ui/octave-progress";
import { Trophy } from "lucide-react";

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

  const progressPct = totalAchievements > 0
    ? Math.round((unlockedCount / totalAchievements) * 100)
    : 0

  return (
    <div className="panel rounded-2xl p-5">
      <h2 className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
        <Trophy className="h-3.5 w-3.5" />
        Succès débloqués
      </h2>
      <p className="text-faint mb-4 text-sm">
        {unlockedCount} sur {totalAchievements} succès obtenus
      </p>

      {/* Progression */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-faint">Progression</span>
          <span className="font-bold tabular-nums text-[#f2efe8]">{progressPct}%</span>
        </div>
        <OctaveProgress value={progressPct} />
      </div>

      {/* Achievements grid */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {achievements.slice(0, 6).map((achievement) => (
          <div
            key={achievement.id}
            className={`flex aspect-square flex-col items-center justify-center rounded-xl border p-2 transition-all duration-300 ${
              achievement.unlocked
                ? 'border-[#e0a83c]/35 bg-[#e0a83c]/[0.10] shadow-[0_0_16px_rgba(224,168,60,0.12)] hover:shadow-[0_0_22px_rgba(224,168,60,0.25)]'
                : 'border-white/[0.07] bg-white/[0.03] opacity-45 grayscale'
            }`}
            title={achievement.unlocked ? achievement.title : '???'}
          >
            <span className="mb-1 text-3xl">
              {achievement.unlocked
                ? getAchievementIcon(achievement.code, achievement.icon_url)
                : '🔒'
              }
            </span>
            {achievement.unlocked && (
              <span className="line-clamp-2 text-center text-[9px] font-semibold text-[#f0c66a]">
                {achievement.title}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* View all link */}
      {totalAchievements > 6 && (
        <div className="pt-3 text-center">
          <button className="accent-brass text-sm font-semibold hover:underline">
            Voir tous les succès ({totalAchievements})
          </button>
        </div>
      )}
    </div>
  )
}
