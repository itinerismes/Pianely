/**
 * Supabase Progress Tracking Functions
 *
 * Functions to interact with user progress, practice logs, and achievements.
 */

import { createClient } from './client'

// ============================================================================
// TYPES
// ============================================================================

export interface UserProgress {
  id: string
  user_id: string
  lesson_id: string
  niveau_id: number
  completed: boolean
  completed_at: string | null
  started_at: string
  time_spent_seconds: number
  attempts: number
  last_practiced_at: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface PracticeLog {
  id: string
  user_id: string
  lesson_id: string
  niveau_id: number
  session_date: string
  duration_seconds: number
  completed: boolean
  success_rate: number | null
  notes: string | null
  created_at: string
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string | null
  category: 'progression' | 'practice' | 'milestone' | 'special'
  points: number
  requirement_type: 'lesson_complete' | 'streak_days' | 'practice_time' | 'niveau_complete' | 'custom'
  requirement_value: number | null
  badge_color: string | null
  display_order: number
  is_hidden: boolean
  created_at: string
}

export interface UserAchievement {
  id: string
  user_id: string
  achievement_id: string
  unlocked_at: string
  progress: number
  is_completed: boolean
  created_at: string
  achievement?: Achievement // Joined data
}

// ============================================================================
// USER PROGRESS FUNCTIONS
// ============================================================================

/**
 * Get user's progress for a specific lesson
 */
export async function getLessonProgress(userId: string, lessonId: string): Promise<UserProgress | null> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('lesson_id', lessonId)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      // No rows found - return null
      return null
    }
    console.error('Error getting lesson progress:', error)
    throw error
  }

  return data
}

/**
 * Get all progress for a user (optionally filtered by niveau)
 */
export async function getUserProgress(userId: string, niveauId?: number): Promise<UserProgress[]> {
  const supabase = createClient()

  let query = supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .order('lesson_id', { ascending: true })

  if (niveauId !== undefined) {
    query = query.eq('niveau_id', niveauId)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error getting user progress:', error)
    throw error
  }

  return data || []
}

/**
 * Mark a lesson as complete
 * Uses the SQL function created in migration
 */
export async function markLessonComplete(
  userId: string,
  lessonId: string,
  niveauId: number,
  timeSpentSeconds: number = 0
): Promise<void> {
  const supabase = createClient()

  const { error } = await supabase.rpc('mark_lesson_complete', {
    p_user_id: userId,
    p_lesson_id: lessonId,
    p_niveau_id: niveauId,
    p_time_spent_seconds: timeSpentSeconds
  })

  if (error) {
    console.error('Error marking lesson complete:', error)
    throw error
  }

  // Check if this completion unlocks any achievements
  await checkAndUnlockAchievements(userId, lessonId, niveauId)
}

/**
 * Get niveau completion percentage
 */
export async function getNiveauCompletion(
  userId: string,
  niveauId: number,
  totalLessons: number
): Promise<number> {
  const supabase = createClient()

  const { data, error } = await supabase.rpc('get_niveau_completion', {
    p_user_id: userId,
    p_niveau_id: niveauId,
    p_total_lessons: totalLessons
  })

  if (error) {
    console.error('Error getting niveau completion:', error)
    throw error
  }

  return data || 0
}

/**
 * Get total completed lessons count
 */
export async function getCompletedLessonsCount(userId: string): Promise<number> {
  const supabase = createClient()

  const { count, error } = await supabase
    .from('user_progress')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('completed', true)

  if (error) {
    console.error('Error getting completed lessons count:', error)
    throw error
  }

  return count || 0
}

// ============================================================================
// PRACTICE LOG FUNCTIONS
// ============================================================================

/**
 * Log a practice session
 * Uses the SQL function created in migration
 */
export async function logPracticeSession(
  userId: string,
  lessonId: string,
  niveauId: number,
  durationSeconds: number,
  completed: boolean = false,
  successRate?: number
): Promise<string> {
  const supabase = createClient()

  const { data, error } = await supabase.rpc('log_practice_session', {
    p_user_id: userId,
    p_lesson_id: lessonId,
    p_niveau_id: niveauId,
    p_duration_seconds: durationSeconds,
    p_completed: completed,
    p_success_rate: successRate || null
  })

  if (error) {
    console.error('Error logging practice session:', error)
    throw error
  }

  return data
}

/**
 * Get practice logs for a user (optionally filtered by date range)
 */
export async function getPracticeLogs(
  userId: string,
  startDate?: string,
  endDate?: string
): Promise<PracticeLog[]> {
  const supabase = createClient()

  let query = supabase
    .from('practice_logs')
    .select('*')
    .eq('user_id', userId)
    .order('session_date', { ascending: false })

  if (startDate) {
    query = query.gte('session_date', startDate)
  }

  if (endDate) {
    query = query.lte('session_date', endDate)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error getting practice logs:', error)
    throw error
  }

  return data || []
}

/**
 * Get total practice time for a user
 */
export async function getTotalPracticeTime(userId: string): Promise<number> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('practice_logs')
    .select('duration_seconds')
    .eq('user_id', userId)

  if (error) {
    console.error('Error getting total practice time:', error)
    throw error
  }

  if (!data || data.length === 0) {
    return 0
  }

  return data.reduce((total, log) => total + log.duration_seconds, 0)
}

/**
 * Get user's current streak (consecutive days of practice)
 */
export async function getUserStreak(userId: string): Promise<number> {
  const supabase = createClient()

  const { data, error } = await supabase.rpc('get_user_streak', {
    p_user_id: userId
  })

  if (error) {
    console.error('Error getting user streak:', error)
    throw error
  }

  return data || 0
}

/**
 * Get practice stats for a date range (for graphs)
 */
export async function getPracticeStatsByDate(
  userId: string,
  days: number = 7
): Promise<{ date: string; duration: number; sessions: number }[]> {
  const supabase = createClient()

  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  const { data, error } = await supabase
    .from('practice_logs')
    .select('session_date, duration_seconds')
    .eq('user_id', userId)
    .gte('session_date', startDate.toISOString().split('T')[0])
    .order('session_date', { ascending: true })

  if (error) {
    console.error('Error getting practice stats:', error)
    throw error
  }

  if (!data) return []

  // Group by date
  const stats = data.reduce((acc, log) => {
    const existing = acc.find(s => s.date === log.session_date)
    if (existing) {
      existing.duration += log.duration_seconds
      existing.sessions += 1
    } else {
      acc.push({
        date: log.session_date,
        duration: log.duration_seconds,
        sessions: 1
      })
    }
    return acc
  }, [] as { date: string; duration: number; sessions: number }[])

  return stats
}

// ============================================================================
// ACHIEVEMENT FUNCTIONS
// ============================================================================

/**
 * Get all available achievements
 */
export async function getAchievements(): Promise<Achievement[]> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('achievements')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error getting achievements:', error)
    throw error
  }

  return data || []
}

/**
 * Get user's unlocked achievements
 */
export async function getUserAchievements(userId: string): Promise<UserAchievement[]> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('user_achievements')
    .select(`
      *,
      achievement:achievements(*)
    `)
    .eq('user_id', userId)
    .order('unlocked_at', { ascending: false })

  if (error) {
    console.error('Error getting user achievements:', error)
    throw error
  }

  return data || []
}

/**
 * Unlock an achievement for a user
 */
export async function unlockAchievement(userId: string, achievementId: string): Promise<void> {
  const supabase = createClient()

  const { error } = await supabase.rpc('unlock_achievement', {
    p_user_id: userId,
    p_achievement_id: achievementId
  })

  if (error) {
    console.error('Error unlocking achievement:', error)
    throw error
  }
}

/**
 * Check if user has specific achievement
 */
export async function hasAchievement(userId: string, achievementId: string): Promise<boolean> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('user_achievements')
    .select('id')
    .eq('user_id', userId)
    .eq('achievement_id', achievementId)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      return false
    }
    console.error('Error checking achievement:', error)
    throw error
  }

  return !!data
}

/**
 * Check and unlock achievements based on user progress
 * Called automatically after completing lessons
 */
async function checkAndUnlockAchievements(
  userId: string,
  lessonId: string,
  niveauId: number
): Promise<void> {
  const supabase = createClient()

  // Get completed lessons count
  const completedCount = await getCompletedLessonsCount(userId)

  // Check "first_lesson" achievement
  if (completedCount === 1) {
    if (!(await hasAchievement(userId, 'first_lesson'))) {
      await unlockAchievement(userId, 'first_lesson')
    }
  }

  // Check "first_piece" achievement (assuming lesson 5 is the first piece)
  if (lessonId.includes('lecon-5')) {
    if (!(await hasAchievement(userId, 'first_piece'))) {
      await unlockAchievement(userId, 'first_piece')
    }
  }

  // Check niveau completion achievements
  const totalLessonsPerNiveau = {
    1: 5,
    2: 7,
    3: 8,
    4: 10,
    5: 12
  }

  const completion = await getNiveauCompletion(
    userId,
    niveauId,
    totalLessonsPerNiveau[niveauId as keyof typeof totalLessonsPerNiveau] || 5
  )

  if (completion === 100) {
    const achievementId = `niveau_${niveauId}_complete`
    if (!(await hasAchievement(userId, achievementId))) {
      await unlockAchievement(userId, achievementId)
    }
  }

  // Check streak achievements
  const streak = await getUserStreak(userId)

  if (streak >= 7 && !(await hasAchievement(userId, 'streak_7_days'))) {
    await unlockAchievement(userId, 'streak_7_days')
  }

  if (streak >= 30 && !(await hasAchievement(userId, 'streak_30_days'))) {
    await unlockAchievement(userId, 'streak_30_days')
  }

  // Check practice time achievement (10 hours = 36000 seconds)
  const totalTime = await getTotalPracticeTime(userId)

  if (totalTime >= 36000 && !(await hasAchievement(userId, 'practice_10_hours'))) {
    await unlockAchievement(userId, 'practice_10_hours')
  }
}

// ============================================================================
// DASHBOARD STATS FUNCTIONS
// ============================================================================

/**
 * Get all dashboard stats for a user
 */
export interface DashboardStats {
  totalLessonsCompleted: number
  totalPracticeTimeSeconds: number
  currentStreak: number
  niveauxCompletion: Record<number, number>
  recentActivity: {
    date: string
    duration: number
    sessions: number
  }[]
  unlockedAchievements: number
  totalAchievements: number
}

export async function getDashboardStats(userId: string): Promise<DashboardStats> {
  // Run all queries in parallel for better performance
  const [
    totalLessonsCompleted,
    totalPracticeTimeSeconds,
    currentStreak,
    recentActivity,
    userAchievements,
    allAchievements,
    niveau1Completion,
    niveau2Completion,
    niveau3Completion,
    niveau4Completion,
    niveau5Completion
  ] = await Promise.all([
    getCompletedLessonsCount(userId),
    getTotalPracticeTime(userId),
    getUserStreak(userId),
    getPracticeStatsByDate(userId, 7),
    getUserAchievements(userId),
    getAchievements(),
    getNiveauCompletion(userId, 1, 5),
    getNiveauCompletion(userId, 2, 7),
    getNiveauCompletion(userId, 3, 8),
    getNiveauCompletion(userId, 4, 10),
    getNiveauCompletion(userId, 5, 12)
  ])

  return {
    totalLessonsCompleted,
    totalPracticeTimeSeconds,
    currentStreak,
    niveauxCompletion: {
      1: niveau1Completion,
      2: niveau2Completion,
      3: niveau3Completion,
      4: niveau4Completion,
      5: niveau5Completion
    },
    recentActivity,
    unlockedAchievements: userAchievements.length,
    totalAchievements: allAchievements.length
  }
}
