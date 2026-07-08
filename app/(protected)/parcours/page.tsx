import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getLevelsWithCompletion } from '@/lib/supabase/progress'
import { ParcoursClient } from '@/components/parcours/ParcoursClient'

const GRADIENTS: Record<number, string> = {
  1: 'from-emerald-400 to-teal-500',
  2: 'from-sky-400 to-cyan-400',
  3: 'from-violet-400 to-purple-500',
  4: 'from-amber-400 to-yellow-500',
  5: 'from-pink-400 to-rose-400'
}

export default async function ParcoursPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/connexion')
  }

  // 3 requêtes groupées pour tous les niveaux (au lieu de 2 par niveau)
  const levels = await getLevelsWithCompletion(user.id)

  const niveaux = levels.map((level) => ({
    niveau: level.level_number,
    name: `Niveau ${level.level_number} - ${level.title}`,
    description: level.description || 'Description du niveau',
    totalLessons: level.totalLessons,
    completedLessons: level.completedLessons,
    duration: level.duration,
    // Tous les niveaux sont accessibles : quelqu'un qui a déjà des bases
    // peut commencer directement au niveau 3. La progression guidée reste
    // à l'intérieur de chaque niveau (leçon N débloquée après N-1).
    unlocked: true,
    gradient: GRADIENTS[level.level_number] || 'from-gray-500 to-gray-600',
    href: `/parcours/niveau-${level.level_number}`,
    completion: level.completion
  }))

  return <ParcoursClient niveaux={niveaux} />
}
