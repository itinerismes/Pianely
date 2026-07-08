/**
 * Progression par leçon — lecture serveur.
 *
 * Renvoie les numéros de leçons complétées d'un niveau pour l'utilisateur
 * courant. Utilisé par les pages /parcours/niveau-X pour afficher l'état
 * réel (complété / déverrouillé) de chaque leçon.
 */

import { createClient } from '@/lib/supabase/server'

export async function getCompletedLessonNumbers(levelNumber: number): Promise<Set<number>> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return new Set()

  const { data: level } = await supabase
    .from('levels')
    .select('id')
    .eq('level_number', levelNumber)
    .single()

  if (!level) return new Set()

  const { data, error } = await supabase
    .from('user_progress')
    .select('status, lesson:lessons!inner(lesson_number, level_id)')
    .eq('user_id', user.id)
    .eq('status', 'completed')
    .eq('lesson.level_id', level.id)

  if (error) {
    console.error('Error loading lesson progress:', error)
    return new Set()
  }

  return new Set((data || []).map((row: any) => row.lesson.lesson_number))
}
