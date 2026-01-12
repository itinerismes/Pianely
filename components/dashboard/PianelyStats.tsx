import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  const getCardGradient = (title: string) => {
    const gradients = {
      'Niveaux complétés': 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200',
      'Heures de pratique': 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-200',
      'Leçons terminées': 'bg-gradient-to-br from-yellow-50 to-orange-100 border-yellow-200',
      'Progression moyenne': 'bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200'
    };
    return gradients[title as keyof typeof gradients] || 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200';
  };

  const getIconGradient = (title: string) => {
    const gradients = {
      'Niveaux complétés': 'bg-gradient-to-r from-blue-500 to-indigo-600',
      'Heures de pratique': 'bg-gradient-to-r from-green-500 to-emerald-600',
      'Leçons terminées': 'bg-gradient-to-r from-yellow-500 to-orange-600',
      'Progression moyenne': 'bg-gradient-to-r from-purple-500 to-pink-600'
    };
    return gradients[title as keyof typeof gradients] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <Card className={`${getCardGradient(title)} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${getIconGradient(title)} text-white shadow-md`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1">{value}</div>
        {change && (
          <p className={`text-xs ${
            changeType === 'positive' ? 'text-green-600' :
            changeType === 'negative' ? 'text-red-600' :
            'text-muted-foreground'
          }`}>
            {change}
          </p>
        )}
        {progress !== undefined && (
          <div className="mt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{progressLabel}</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-white/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
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
