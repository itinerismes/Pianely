import { OctaveProgress } from "@/components/ui/octave-progress";

interface WeeklyGoalsProps {
  stats: {
    recentActivity: { date: string; duration: number; sessions: number }[]
    currentStreak: number
  }
}

export function WeeklyGoals({ stats }: WeeklyGoalsProps) {
  const weeklySessions = stats.recentActivity.reduce((sum, a) => sum + a.sessions, 0)
  const weeklyMinutes = stats.recentActivity.reduce((sum, a) => sum + a.duration, 0)
  const weeklyHours = Math.round((weeklyMinutes / 60) * 10) / 10

  const goals = [
    {
      title: "3 leçons",
      progress: Math.min(Math.round((weeklySessions / 3) * 100), 100),
      current: weeklySessions,
      target: 3,
    },
    {
      title: "5 heures de pratique",
      progress: Math.min(Math.round((weeklyHours / 5) * 100), 100),
      current: weeklyHours,
      target: 5,
    },
    {
      title: "7 jours d'affilée",
      progress: Math.min(Math.round((stats.currentStreak / 7) * 100), 100),
      current: stats.currentStreak,
      target: 7,
    }
  ];

  return (
    <div className="panel h-full rounded-3xl p-8">
      <p className="eyebrow mb-2">Cette semaine</p>
      <h2 className="font-display mb-8 text-2xl text-[#f2efe8]">Tes objectifs</h2>

      <div className="space-y-7">
        {goals.map((goal) => (
          <div key={goal.title}>
            <div className="mb-2.5 flex items-baseline justify-between">
              <span className="text-sm font-semibold text-[#f2efe8]">{goal.title}</span>
              <span className={`font-display text-lg tabular-nums ${goal.progress >= 100 ? 'accent-green' : 'text-dim'}`}>
                {goal.current}<span className="text-faint text-sm">/{goal.target}</span>
              </span>
            </div>
            <OctaveProgress value={goal.progress} />
          </div>
        ))}
      </div>
    </div>
  );
}
