import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getDashboardStats, getLevels, getLevelCompletion, getUserProgress, getPracticeStatsByDate } from '@/lib/supabase/progress'
import { ProgressionClient } from '@/components/progression/ProgressionClient'

export default async function ProgressionPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // Get all data in parallel
  const [stats, levels, allProgress, practiceStats] = await Promise.all([
    getDashboardStats(user.id),
    getLevels(),
    getUserProgress(user.id),
    getPracticeStatsByDate(user.id, 30) // Last 30 days
  ])

  // Calculate level completions
  const levelProgress = await Promise.all(
    levels.map(async (level) => {
      const completion = await getLevelCompletion(user.id, level.id)
      return {
        levelNumber: level.level_number,
        title: level.title,
        completion,
        color: getLevelColor(level.level_number)
      }
    })
  )

  // Group progress by date for activity calendar
  const progressByDate = allProgress.reduce((acc: Record<string, number>, p) => {
    if (p.completion_date) {
      const date = new Date(p.completion_date).toISOString().split('T')[0]
      acc[date] = (acc[date] || 0) + 1
    }
    return acc
  }, {})

  return (
    <ProgressionClient
      stats={stats}
      levelProgress={levelProgress}
      practiceStats={practiceStats}
      progressByDate={progressByDate}
      totalLessons={42} // 5+7+8+10+12
    />
  )
}

function getLevelColor(levelNumber: number): string {
  const colors: Record<number, string> = {
    1: 'from-green-500 to-emerald-600',
    2: 'from-blue-500 to-cyan-600',
    3: 'from-purple-500 to-violet-600',
    4: 'from-orange-500 to-amber-600',
    5: 'from-pink-500 to-rose-600'
  }
  return colors[levelNumber] || 'from-gray-500 to-gray-600'
}
