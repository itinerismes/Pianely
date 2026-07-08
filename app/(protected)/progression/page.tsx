import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getDashboardStats, getLevelsWithCompletion, getUserProgress, getPracticeStatsByDate } from '@/lib/supabase/progress'
import { ProgressionClient } from '@/components/progression/ProgressionClient'

function getLevelColor(levelNumber: number): string {
  const colors: Record<number, string> = {
    1: 'from-emerald-400 to-teal-500',
    2: 'from-sky-400 to-cyan-400',
    3: 'from-violet-400 to-purple-500',
    4: 'from-amber-400 to-yellow-500',
    5: 'from-pink-400 to-rose-400'
  }
  return colors[levelNumber] || 'from-gray-500 to-gray-600'
}

export default async function ProgressionPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // Tout en parallèle — complétions par niveau groupées en 3 requêtes
  const [stats, levels, allProgress, practiceStats] = await Promise.all([
    getDashboardStats(user.id),
    getLevelsWithCompletion(user.id),
    getUserProgress(user.id),
    getPracticeStatsByDate(user.id, 30) // Last 30 days
  ])

  const levelProgress = levels.map((level) => ({
    levelNumber: level.level_number,
    title: level.title,
    completion: level.completion,
    color: getLevelColor(level.level_number)
  }))

  // Group progress by date for activity calendar
  const progressByDate = allProgress.reduce((acc: Record<string, number>, p) => {
    if (p.completion_date) {
      const date = new Date(p.completion_date).toISOString().split('T')[0]
      acc[date] = (acc[date] || 0) + 1
    }
    return acc
  }, {})

  const totalLessons = levels.reduce((sum, level) => sum + level.totalLessons, 0)

  return (
    <ProgressionClient
      stats={stats}
      levelProgress={levelProgress}
      practiceStats={practiceStats}
      progressByDate={progressByDate}
      totalLessons={totalLessons}
    />
  )
}
