import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getDashboardStats, getLevelsWithCompletion, getAchievements, getUserAchievements } from '@/lib/supabase/progress'
import { DashboardClient } from '@/components/dashboard/DashboardClient'

const GRADIENTS: Record<number, string> = {
  1: 'from-emerald-400 to-teal-500',
  2: 'from-sky-400 to-cyan-400',
  3: 'from-violet-400 to-purple-500',
  4: 'from-amber-400 to-yellow-500',
  5: 'from-pink-400 to-rose-400'
}

const DURATIONS: Record<number, string> = {
  1: '57 min',
  2: '1h 45min',
  3: '2h 10min',
  4: '2h 45min',
  5: '3h 30min'
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // Tout en parallèle — les complétions par niveau sont groupées
  const [stats, levels, allAchievements, userAchievements] = await Promise.all([
    getDashboardStats(user.id),
    getLevelsWithCompletion(user.id),
    getAchievements(),
    getUserAchievements(user.id)
  ])

  const niveaux = levels.map((level) => ({
    niveau: level.level_number,
    name: `Niveau ${level.level_number} - ${level.title}`,
    description: level.description || 'Description du niveau',
    totalLessons: level.totalLessons,
    completedLessons: level.completedLessons,
    duration: DURATIONS[level.level_number] || '1h',
    // Tous les niveaux sont accessibles (cohérent avec /parcours)
    unlocked: true,
    gradient: GRADIENTS[level.level_number] || 'from-gray-500 to-gray-600',
    href: `/parcours/niveau-${level.level_number}`,
    completion: level.completion
  }))

  // Combine achievements with user unlock status
  const userAchievementIds = new Set(userAchievements.map(ua => ua.achievement_id))
  const achievementsWithStatus = allAchievements.map(achievement => ({
    ...achievement,
    unlocked: userAchievementIds.has(achievement.id)
  }))

  const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Utilisateur'

  return (
    <DashboardClient
      userName={userName}
      stats={stats}
      niveaux={niveaux}
      achievements={achievementsWithStatus}
      totalAchievements={allAchievements.length}
      unlockedAchievementsCount={userAchievements.length}
    />
  )
}
