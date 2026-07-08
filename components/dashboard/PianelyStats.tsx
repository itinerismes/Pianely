import { OctaveProgress } from "@/components/ui/octave-progress";
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  progress?: number;
  progressLabel?: string;
}

function StatCard({ title, value, change, changeType, icon, progress, progressLabel }: StatCardProps) {
  return (
    <div className="panel panel-hover rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-bold uppercase tracking-widest text-dim">{title}</p>
        <div className="badge-brass flex h-9 w-9 items-center justify-center rounded-xl">
          {icon}
        </div>
      </div>
      <p className="mt-2 text-3xl font-black tabular-nums text-[#f2efe8]">{value}</p>
      {change && (
        <p className={`mt-1 text-xs ${
          changeType === 'positive' ? 'accent-green' :
          changeType === 'negative' ? 'text-red-300' :
          'text-faint'
        }`}>
          {change}
        </p>
      )}
      {progress !== undefined && (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-faint">{progressLabel}</span>
            <span className="font-bold tabular-nums text-[#f2efe8]">{progress}%</span>
          </div>
          <OctaveProgress value={progress} />
        </div>
      )}
    </div>
  );
}

interface PianelyStatsProps {
  stats: {
    totalLessonsCompleted: number
    totalPracticeTimeMinutes: number
    totalPracticeTimeHours: number
    currentStreak: number
    levelsCompletion: Record<number, number>
    recentActivity: { date: string; duration: number; sessions: number }[]
  }
}

export function PianelyStats({ stats }: PianelyStatsProps) {
  // Calculate total lessons across all levels (5+7+8+10+12 = 42)
  const totalLessons = 42

  // Calculate completed levels (levels with 100% completion)
  const completedLevels = Object.values(stats.levelsCompletion).filter(c => c === 100).length

  // Calculate average progression across all levels
  const avgProgression = Math.round(
    Object.values(stats.levelsCompletion).reduce((sum, val) => sum + val, 0) / 5
  )

  // Calculate weekly practice time
  const weeklyPracticeMinutes = stats.recentActivity.reduce((sum, a) => sum + a.duration, 0)
  const weeklyPracticeHours = Math.round((weeklyPracticeMinutes / 60) * 10) / 10

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Niveaux complétés"
        value={`${completedLevels}/5`}
        change={completedLevels > 0 ? `${completedLevels} complété${completedLevels > 1 ? 's' : ''}` : 'Commencer le niveau 1'}
        changeType={completedLevels > 0 ? 'positive' : 'neutral'}
        icon={<BookOpen className="h-4 w-4" />}
      />

      <StatCard
        title="Heures de pratique"
        value={`${stats.totalPracticeTimeHours}h`}
        change={weeklyPracticeHours > 0 ? `+${weeklyPracticeHours}h cette semaine` : 'Aucune pratique cette semaine'}
        changeType={weeklyPracticeHours > 0 ? 'positive' : 'neutral'}
        icon={<Clock className="h-4 w-4" />}
      />

      <StatCard
        title="Leçons terminées"
        value={`${stats.totalLessonsCompleted}/${totalLessons}`}
        change={stats.currentStreak > 0 ? `🔥 ${stats.currentStreak} jour${stats.currentStreak > 1 ? 's' : ''} de suite` : 'Commence ta première leçon'}
        changeType={stats.currentStreak > 0 ? 'positive' : 'neutral'}
        icon={<Award className="h-4 w-4" />}
      />

      <StatCard
        title="Progression moyenne"
        value={`${avgProgression}%`}
        change={avgProgression > 0 ? 'Continue comme ça !' : 'Commence ton parcours'}
        changeType={avgProgression > 0 ? 'positive' : 'neutral'}
        icon={<TrendingUp className="h-4 w-4" />}
        progress={avgProgression}
        progressLabel="Progression globale"
      />
    </div>
  )
}
