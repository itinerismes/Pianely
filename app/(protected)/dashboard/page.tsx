import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getDashboardStats, getLevels, getLevelCompletion } from '@/lib/supabase/progress'
import { DashboardClient } from '@/components/dashboard/DashboardClient'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // Get all data from Supabase
  const [stats, levels] = await Promise.all([
    getDashboardStats(user.id),
    getLevels()
  ])

  // Calculate completion for each level
  const levelsWithCompletion = await Promise.all(
    levels.map(async (level) => {
      const completion = await getLevelCompletion(user.id, level.id)

      // Get total lessons count from level (since we don't have lessons yet, hardcode for now)
      const totalLessonsMap: Record<number, number> = {
        1: 5,
        2: 7,
        3: 8,
        4: 10,
        5: 12
      }

      const totalLessons = totalLessonsMap[level.level_number] || 5
      const completedLessons = Math.round((completion / 100) * totalLessons)

      // Gradient mapping for each level
      const gradientMap: Record<number, string> = {
        1: 'from-green-500 to-emerald-600',
        2: 'from-blue-500 to-cyan-600',
        3: 'from-purple-500 to-violet-600',
        4: 'from-orange-500 to-amber-600',
        5: 'from-pink-500 to-rose-600'
      }

      // Duration mapping (estimated)
      const durationMap: Record<number, string> = {
        1: '57 min',
        2: '1h 45min',
        3: '2h 10min',
        4: '2h 45min',
        5: '3h 30min'
      }

      // Level 1 is always unlocked, others unlock when previous level is completed
      let unlocked = level.level_number === 1
      if (level.level_number > 1) {
        const previousLevel = levels.find(l => l.level_number === level.level_number - 1)
        if (previousLevel) {
          const previousCompletion = await getLevelCompletion(user.id, previousLevel.id)
          unlocked = previousCompletion === 100
        }
      }

      return {
        niveau: level.level_number,
        name: `Niveau ${level.level_number} - ${level.title}`,
        description: level.description || 'Description du niveau',
        totalLessons,
        completedLessons,
        duration: durationMap[level.level_number] || '1h',
        unlocked,
        gradient: gradientMap[level.level_number] || 'from-gray-500 to-gray-600',
        href: `/parcours/niveau-${level.level_number}`,
        completion
      }
    })
  )

  const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Utilisateur'

  return (
    <DashboardClient
      userName={userName}
      stats={stats}
      niveaux={levelsWithCompletion}
    />
  )
}
