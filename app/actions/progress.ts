'use server'

/**
 * Server actions de progression — appelées par LessonTemplate.
 *
 * La complétion d'une leçon est identifiée par (niveau, numéro de leçon) :
 * on résout l'UUID de la leçon en base, puis on délègue à markLessonComplete
 * (qui met à jour user_progress et débloque les achievements).
 */

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { markLessonComplete, logPracticeSession } from '@/lib/supabase/progress'

export async function completeLessonAction(
  levelNumber: number,
  lessonNumber: number,
  timeSpentMinutes: number = 0
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { ok: false, error: 'Non authentifié' }
  }

  // Résoudre l'UUID de la leçon via (niveau, numéro)
  const { data: level } = await supabase
    .from('levels')
    .select('id')
    .eq('level_number', levelNumber)
    .single()

  if (!level) {
    return { ok: false, error: `Niveau ${levelNumber} introuvable` }
  }

  const { data: lesson } = await supabase
    .from('lessons')
    .select('id, duration_minutes')
    .eq('level_id', level.id)
    .eq('lesson_number', lessonNumber)
    .single()

  if (!lesson) {
    return { ok: false, error: `Leçon ${lessonNumber} introuvable` }
  }

  try {
    const minutes = timeSpentMinutes > 0 ? timeSpentMinutes : (lesson.duration_minutes || 10)
    // Logger la session AVANT de marquer complété : logPracticeSession
    // repasse le statut à in_progress, et le streak doit être à jour
    // pour le déblocage des achievements
    await logPracticeSession(user.id, lesson.id, minutes)
    await markLessonComplete(user.id, lesson.id, minutes)

    // Rafraîchir les vues qui affichent la progression
    revalidatePath('/dashboard')
    revalidatePath('/parcours')
    revalidatePath(`/parcours/niveau-${levelNumber}`)
    revalidatePath('/progression')

    return { ok: true }
  } catch (error) {
    console.error('Error completing lesson:', error)
    return { ok: false, error: 'Erreur lors de la sauvegarde' }
  }
}
