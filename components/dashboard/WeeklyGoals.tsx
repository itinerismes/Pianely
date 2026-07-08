import { OctaveProgress } from "@/components/ui/octave-progress";
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
    },
    {
      title: "Pratiquer 5 heures",
      progress: Math.min(Math.round((practiceGoal.current / practiceGoal.target) * 100), 100),
      current: practiceGoal.current,
      target: practiceGoal.target,
      icon: <Clock className="h-4 w-4" />,
    },
    {
      title: "Streak de 7 jours",
      progress: Math.min(Math.round((streakGoal.current / streakGoal.target) * 100), 100),
      current: streakGoal.current,
      target: streakGoal.target,
      icon: <Music className="h-4 w-4" />,
    }
  ];

  return (
    <div className="panel rounded-2xl p-5">
      <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
        <Target className="h-3.5 w-3.5" />
        Objectifs hebdomadaires
      </h2>
      <div className="space-y-5">
        {goals.map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="badge-brass flex h-7 w-7 items-center justify-center rounded-lg">
                  {goal.icon}
                </div>
                <span className="text-sm font-semibold text-[#f2efe8]">{goal.title}</span>
              </div>
              <span className="text-dim text-sm font-bold tabular-nums">
                {goal.current}/{goal.target}
              </span>
            </div>
            <OctaveProgress value={goal.progress} />
          </div>
        ))}
      </div>
    </div>
  );
}
