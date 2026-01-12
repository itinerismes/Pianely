/**
 * Supabase Progress Tracking Functions
 *
 * Functions to interact with user progress, practice logs, and achievements.
 * Adapted to work with existing database schema.
 */

import { createClient } from './server'

// ============================================================================
// TYPES
// ============================================================================

export type ProgressStatus = 'not_started' | 'in_progress' | 'completed' | 'needs_review'

export interface UserProgress {
  id: string
  user_id: string
  lesson_id: string
  status: ProgressStatus
  completion_date: string | null
  time_spent_minutes: number
  notes: string | null
  created_at: string
  updated_at: string
}

export interface PracticeLog {
  id: string
  user_id: string
  lesson_id: string | null
  duration_minutes: number
  date: string
  notes: string | null
  created_at: string
}

export interface Achievement {
  id: string
  code: string
  title: string
  description: string | null
  icon_url: string | null
  category: string | null
  criteria: any // jsonb
  created_at: string
}

export interface UserAchievement {
  id: string
  user_id: string
  achievement_id: string
  unlocked_at: string
  achievement?: Achievement // Joined data
}

export interface Level {
  id: string
  level_number: number
  title: string
  description: string | null
  objectives: string[] | null
  order_index: number
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface Lesson {
  id: string
  level_id: string
  lesson_number: number
  title: string
  description: string | null
  content: string | null
  video_url: string | null
  duration_minutes: number
  order_index: number
  is_published: boolean
  created_at: string
  updated_at: string
}

// ============================================================================
// LEVEL & LESSON FUNCTIONS
// ============================================================================

/**
 * Get all published levels
 */
export async function getLevels(): Promise<Level[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('levels')
    .select('*')
    .eq('is_published', true)
    .order('level_number', { ascending: true })

  if (error) {
    console.error('Error getting levels:', error)
    throw error
  }

  return data || []
}

/**
 * Get level by level_number
 */
export async function getLevelByNumber(levelNumber: number): Promise<Level | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('levels')
    .select('*')
    .eq('level_number', levelNumber)
    .eq('is_published', true)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      return null
    }
    console.error('Error getting level:', error)
    throw error
  }

  return data
}

/**
 * Get lessons for a specific level
 */
export async function getLessonsByLevel(levelId: string): Promise<Lesson[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('level_id', levelId)
    .eq('is_published', true)
    .order('lesson_number', { ascending: true })

  if (error) {
    console.error('Error getting lessons:', error)
    throw error
  }

  return data || []
}

/**
 * Get lesson by ID
 */
export async function getLessonById(lessonId: string): Promise<Lesson | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('id', lessonId)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      return null
    }
    console.error('Error getting lesson:', error)
    throw error
  }

  return data
}

// ============================================================================
// USER PROGRESS FUNCTIONS
// ============================================================================

/**
 * Get user's progress for a specific lesson
 */
export async function getLessonProgress(userId: string, lessonId: string): Promise<UserProgress | null> {
  const supabase = await createClient()

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
 * Get all progress for a user (optionally filtered by level)
 */
export async function getUserProgress(userId: string, levelId?: string): Promise<UserProgress[]> {
  const supabase = await createClient()

  let query = supabase
    .from('user_progress')
    .select(`
      *,
      lesson:lessons(
        id,
        level_id,
        lesson_number,
        title
      )
    `)
    .eq('user_id', userId)

  if (levelId) {
    // Join with lessons to filter by level_id
    query = query.eq('lesson.level_id', levelId)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error getting user progress:', error)
    throw error
  }

  return data || []
}

/**
 * Mark a lesson as completed
 */
export async function markLessonComplete(
  userId: string,
  lessonId: string,
  timeSpentMinutes: number = 0
): Promise<void> {
  const supabase = await createClient()

  // Check if progress exists
  const existing = await getLessonProgress(userId, lessonId)

  if (existing) {
    // Update existing
    const { error } = await supabase
      .from('user_progress')
      .update({
        status: 'completed' as ProgressStatus,
        completion_date: new Date().toISOString(),
        time_spent_minutes: existing.time_spent_minutes + timeSpentMinutes,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)

    if (error) {
      console.error('Error updating lesson progress:', error)
      throw error
    }
  } else {
    // Insert new
    const { error } = await supabase
      .from('user_progress')
      .insert({
        user_id: userId,
        lesson_id: lessonId,
        status: 'completed' as ProgressStatus,
        completion_date: new Date().toISOString(),
        time_spent_minutes: timeSpentMinutes
      })

    if (error) {
      console.error('Error inserting lesson progress:', error)
      throw error
    }
  }

  // Check and unlock achievements
  await checkAndUnlockAchievements(userId, lessonId)
}

/**
 * Update lesson progress status
 */
export async function updateLessonStatus(
  userId: string,
  lessonId: string,
  status: ProgressStatus,
  timeSpentMinutes: number = 0
): Promise<void> {
  const supabase = await createClient()

  const existing = await getLessonProgress(userId, lessonId)

  if (existing) {
    const { error } = await supabase
      .from('user_progress')
      .update({
        status,
        time_spent_minutes: existing.time_spent_minutes + timeSpentMinutes,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)

    if (error) {
      console.error('Error updating lesson status:', error)
      throw error
    }
  } else {
    const { error } = await supabase
      .from('user_progress')
      .insert({
        user_id: userId,
        lesson_id: lessonId,
        status,
        time_spent_minutes: timeSpentMinutes
      })

    if (error) {
      console.error('Error inserting lesson progress:', error)
      throw error
    }
  }
}

/**
 * Get level completion percentage
 */
export async function getLevelCompletion(userId: string, levelId: string): Promise<number> {
  const supabase = await createClient()

  // Get total lessons for level
  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select('id')
    .eq('level_id', levelId)
    .eq('is_published', true)

  if (lessonsError) {
    console.error('Error getting lessons count:', lessonsError)
    throw lessonsError
  }

  const totalLessons = lessons?.length || 0

  if (totalLessons === 0) {
    return 0
  }

  // Get completed lessons for this level
  const { data: progress, error: progressError } = await supabase
    .from('user_progress')
    .select('lesson_id')
    .eq('user_id', userId)
    .eq('status', 'completed')
    .in('lesson_id', lessons.map(l => l.id))

  if (progressError) {
    console.error('Error getting progress:', progressError)
    throw progressError
  }

  const completedLessons = progress?.length || 0

  return Math.round((completedLessons / totalLessons) * 100)
}

/**
 * Get total completed lessons count
 */
export async function getCompletedLessonsCount(userId: string): Promise<number> {
  const supabase = await createClient()

  const { count, error } = await supabase
    .from('user_progress')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('status', 'completed')

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
 */
export async function logPracticeSession(
  userId: string,
  lessonId: string | null,
  durationMinutes: number,
  notes?: string
): Promise<string> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('practice_logs')
    .insert({
      user_id: userId,
      lesson_id: lessonId,
      duration_minutes: durationMinutes,
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      notes: notes || null
    })
    .select('id')
    .single()

  if (error) {
    console.error('Error logging practice session:', error)
    throw error
  }

  // Update user_progress if lesson_id is provided
  if (lessonId) {
    await updateLessonStatus(userId, lessonId, 'in_progress', durationMinutes)
  }

  return data.id
}

/**
 * Get practice logs for a user (optionally filtered by date range)
 */
export async function getPracticeLogs(
  userId: string,
  startDate?: string,
  endDate?: string
): Promise<PracticeLog[]> {
  const supabase = await createClient()

  let query = supabase
    .from('practice_logs')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: false })

  if (startDate) {
    query = query.gte('date', startDate)
  }

  if (endDate) {
    query = query.lte('date', endDate)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error getting practice logs:', error)
    throw error
  }

  return data || []
}

/**
 * Get total practice time for a user (in minutes)
 */
export async function getTotalPracticeTime(userId: string): Promise<number> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('practice_logs')
    .select('duration_minutes')
    .eq('user_id', userId)

  if (error) {
    console.error('Error getting total practice time:', error)
    throw error
  }

  if (!data || data.length === 0) {
    return 0
  }

  return data.reduce((total, log) => total + log.duration_minutes, 0)
}

/**
 * Get user's current streak (consecutive days of practice)
 */
export async function getUserStreak(userId: string): Promise<number> {
  const supabase = await createClient()

  // Get all practice dates sorted descending
  const { data, error } = await supabase
    .from('practice_logs')
    .select('date')
    .eq('user_id', userId)
    .order('date', { ascending: false })

  if (error) {
    console.error('Error getting practice logs for streak:', error)
    throw error
  }

  if (!data || data.length === 0) {
    return 0
  }

  // Get unique dates
  const uniqueDates = Array.from(new Set(data.map(log => log.date))).sort((a, b) => b.localeCompare(a))

  let streak = 0
  let currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  for (const dateStr of uniqueDates) {
    const logDate = new Date(dateStr)
    logDate.setHours(0, 0, 0, 0)

    const diffDays = Math.floor((currentDate.getTime() - logDate.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays === streak) {
      streak++
      currentDate = logDate
    } else {
      break
    }
  }

  return streak
}

/**
 * Get practice stats for a date range (for graphs)
 */
export async function getPracticeStatsByDate(
  userId: string,
  days: number = 7
): Promise<{ date: string; duration: number; sessions: number }[]> {
  const supabase = await createClient()

  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  const { data, error } = await supabase
    .from('practice_logs')
    .select('date, duration_minutes')
    .eq('user_id', userId)
    .gte('date', startDate.toISOString().split('T')[0])
    .order('date', { ascending: true })

  if (error) {
    console.error('Error getting practice stats:', error)
    throw error
  }

  if (!data) return []

  // Group by date
  const stats = data.reduce((acc, log) => {
    const existing = acc.find(s => s.date === log.date)
    if (existing) {
      existing.duration += log.duration_minutes
      existing.sessions += 1
    } else {
      acc.push({
        date: log.date,
        duration: log.duration_minutes,
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
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('achievements')
    .select('*')
    .order('created_at', { ascending: true })

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
  const supabase = await createClient()

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
  const supabase = await createClient()

  const { error } = await supabase
    .from('user_achievements')
    .insert({
      user_id: userId,
      achievement_id: achievementId
    })

  if (error) {
    // Ignore duplicate key errors (achievement already unlocked)
    if (error.code !== '23505') {
      console.error('Error unlocking achievement:', error)
      throw error
    }
  }
}

/**
 * Check if user has specific achievement
 */
export async function hasAchievement(userId: string, achievementCode: string): Promise<boolean> {
  const supabase = await createClient()

  // First get achievement ID from code
  const { data: achievement, error: achError } = await supabase
    .from('achievements')
    .select('id')
    .eq('code', achievementCode)
    .single()

  if (achError) {
    if (achError.code === 'PGRST116') {
      return false
    }
    console.error('Error getting achievement:', achError)
    throw achError
  }

  if (!achievement) return false

  const { data, error } = await supabase
    .from('user_achievements')
    .select('id')
    .eq('user_id', userId)
    .eq('achievement_id', achievement.id)
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
async function checkAndUnlockAchievements(userId: string, lessonId: string): Promise<void> {
  // Get completed lessons count
  const completedCount = await getCompletedLessonsCount(userId)

  // Check "first_lesson" achievement
  if (completedCount === 1) {
    const hasFirst = await hasAchievement(userId, 'first_lesson')
    if (!hasFirst) {
      const supabase = await createClient()
      const { data: achievement } = await supabase
        .from('achievements')
        .select('id')
        .eq('code', 'first_lesson')
        .single()

      if (achievement) {
        await unlockAchievement(userId, achievement.id)
      }
    }
  }

  // Check level completions
  const levels = await getLevels()
  for (const level of levels) {
    const completion = await getLevelCompletion(userId, level.id)
    if (completion === 100) {
      const achievementCode = `level_${level.level_number}_complete`
      const hasLevelAch = await hasAchievement(userId, achievementCode)
      if (!hasLevelAch) {
        const supabase = await createClient()
        const { data: achievement } = await supabase
          .from('achievements')
          .select('id')
          .eq('code', achievementCode)
          .single()

        if (achievement) {
          await unlockAchievement(userId, achievement.id)
        }
      }
    }
  }

  // Check streak achievements
  const streak = await getUserStreak(userId)

  if (streak >= 7) {
    const has7Days = await hasAchievement(userId, 'streak_7_days')
    if (!has7Days) {
      const supabase = await createClient()
      const { data: achievement } = await supabase
        .from('achievements')
        .select('id')
        .eq('code', 'streak_7_days')
        .single()

      if (achievement) {
        await unlockAchievement(userId, achievement.id)
      }
    }
  }

  if (streak >= 30) {
    const has30Days = await hasAchievement(userId, 'streak_30_days')
    if (!has30Days) {
      const supabase = await createClient()
      const { data: achievement } = await supabase
        .from('achievements')
        .select('id')
        .eq('code', 'streak_30_days')
        .single()

      if (achievement) {
        await unlockAchievement(userId, achievement.id)
      }
    }
  }

  // Check practice time achievement (10 hours = 600 minutes)
  const totalTime = await getTotalPracticeTime(userId)

  if (totalTime >= 600) {
    const has10Hours = await hasAchievement(userId, 'practice_10_hours')
    if (!has10Hours) {
      const supabase = await createClient()
      const { data: achievement } = await supabase
        .from('achievements')
        .select('id')
        .eq('code', 'practice_10_hours')
        .single()

      if (achievement) {
        await unlockAchievement(userId, achievement.id)
      }
    }
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
  totalPracticeTimeMinutes: number
  totalPracticeTimeHours: number
  currentStreak: number
  levelsCompletion: Record<number, number>
  recentActivity: {
    date: string
    duration: number
    sessions: number
  }[]
  unlockedAchievements: number
  totalAchievements: number
}

export async function getDashboardStats(userId: string): Promise<DashboardStats> {
  const levels = await getLevels()

  // Run all queries in parallel for better performance
  const [
    totalLessonsCompleted,
    totalPracticeTimeMinutes,
    currentStreak,
    recentActivity,
    userAchievements,
    allAchievements,
    ...levelCompletions
  ] = await Promise.all([
    getCompletedLessonsCount(userId),
    getTotalPracticeTime(userId),
    getUserStreak(userId),
    getPracticeStatsByDate(userId, 7),
    getUserAchievements(userId),
    getAchievements(),
    ...levels.map(level => getLevelCompletion(userId, level.id))
  ])

  const levelsCompletionMap: Record<number, number> = {}
  levels.forEach((level, index) => {
    levelsCompletionMap[level.level_number] = levelCompletions[index]
  })

  return {
    totalLessonsCompleted,
    totalPracticeTimeMinutes,
    totalPracticeTimeHours: Math.round((totalPracticeTimeMinutes / 60) * 10) / 10,
    currentStreak,
    levelsCompletion: levelsCompletionMap,
    recentActivity,
    unlockedAchievements: userAchievements.length,
    totalAchievements: allAchievements.length
  }
}
