import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getAchievements, getUserAchievements } from '@/lib/supabase/progress'
import { AchievementsClient } from '@/components/achievements/AchievementsClient'

export default async function AchievementsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // Get all achievements and user's unlocked achievements
  const [allAchievements, userAchievements] = await Promise.all([
    getAchievements(),
    getUserAchievements(user.id)
  ])

  // Combine achievements with unlock status and unlock date
  const userAchievementMap = new Map(
    userAchievements.map(ua => [ua.achievement_id, ua])
  )

  const achievementsWithStatus = allAchievements.map(achievement => ({
    ...achievement,
    unlocked: userAchievementMap.has(achievement.id),
    unlockedAt: userAchievementMap.get(achievement.id)?.unlocked_at || null
  }))

  // Group by category
  const achievementsByCategory = achievementsWithStatus.reduce((acc, achievement) => {
    const category = achievement.category || 'Général'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(achievement)
    return acc
  }, {} as Record<string, typeof achievementsWithStatus>)

  const totalCount = allAchievements.length
  const unlockedCount = userAchievements.length

  return (
    <AchievementsClient
      achievementsByCategory={achievementsByCategory}
      totalCount={totalCount}
      unlockedCount={unlockedCount}
    />
  )
}
