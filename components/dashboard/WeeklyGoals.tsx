import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Clock, Music } from "lucide-react";

interface WeeklyGoalsProps {
  stats: {
    recentActivity: { date: string; duration: number; sessions: number }[]
    currentStreak: number
  }
}

export function WeeklyGoals({ stats }: WeeklyGoalsProps) {
  // Calculate weekly practice sessions
  const weeklySessions = stats.recentActivity.reduce((sum, a) => sum + a.sessions, 0)

  // Calculate weekly practice time in hours
  const weeklyMinutes = stats.recentActivity.reduce((sum, a) => sum + a.duration, 0)
  const weeklyHours = Math.round((weeklyMinutes / 60) * 10) / 10

  // Define weekly goals
  const lessonGoal = { current: weeklySessions, target: 3 }
  const practiceGoal = { current: weeklyHours, target: 5 }
  const streakGoal = { current: stats.currentStreak, target: 7 }

  const goals = [
    {
      title: "Terminer 3 leçons",
      progress: Math.min(Math.round((lessonGoal.current / lessonGoal.target) * 100), 100),
      current: lessonGoal.current,
      target: lessonGoal.target,
      icon: <Target className="h-4 w-4" />,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: "Pratiquer 5 heures",
      progress: Math.min(Math.round((practiceGoal.current / practiceGoal.target) * 100), 100),
      current: practiceGoal.current,
      target: practiceGoal.target,
      icon: <Clock className="h-4 w-4" />,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: "Streak de 7 jours",
      progress: Math.min(Math.round((streakGoal.current / streakGoal.target) * 100), 100),
      current: streakGoal.current,
      target: streakGoal.target,
      icon: <Music className="h-4 w-4" />,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/50 border-indigo-200 dark:border-indigo-800 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <Target className="h-4 w-4" />
          </div>
          Objectifs hebdomadaires 🎯
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg bg-gradient-to-r ${goal.color} text-white`}>
                  {goal.icon}
                </div>
                <span className="font-medium text-sm">{goal.title}</span>
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {goal.current}/{goal.target}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${goal.color} transition-all duration-500`}
                style={{ width: `${goal.progress}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
