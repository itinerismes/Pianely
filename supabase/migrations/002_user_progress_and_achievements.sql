-- ============================================================================
-- PIANELY - User Progress & Achievements Schema
-- ============================================================================
-- This migration creates tables for tracking user progression, practice logs,
-- and achievements/badges system.
-- ============================================================================

-- ============================================================================
-- TABLE: user_progress
-- Tracks completion status of lessons for each user
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL, -- Format: "niveau-1-lecon-1"
  niveau_id INTEGER NOT NULL, -- 1-5
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  time_spent_seconds INTEGER DEFAULT 0, -- Total time spent on this lesson
  attempts INTEGER DEFAULT 0, -- Number of times user practiced
  last_practiced_at TIMESTAMP WITH TIME ZONE,
  notes TEXT, -- Optional user notes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Constraints
  UNIQUE(user_id, lesson_id),
  CHECK (niveau_id >= 1 AND niveau_id <= 5),
  CHECK (time_spent_seconds >= 0),
  CHECK (attempts >= 0)
);

-- Indexes for performance
CREATE INDEX idx_user_progress_user_id ON public.user_progress(user_id);
CREATE INDEX idx_user_progress_lesson_id ON public.user_progress(lesson_id);
CREATE INDEX idx_user_progress_niveau_id ON public.user_progress(niveau_id);
CREATE INDEX idx_user_progress_completed ON public.user_progress(completed);
CREATE INDEX idx_user_progress_completed_at ON public.user_progress(completed_at);

-- Enable RLS (Row Level Security)
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own progress
CREATE POLICY "Users can view their own progress"
  ON public.user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress"
  ON public.user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
  ON public.user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================================================
-- TABLE: practice_logs
-- Logs each practice session for analytics and streak tracking
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.practice_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  niveau_id INTEGER NOT NULL,
  session_date DATE NOT NULL DEFAULT CURRENT_DATE,
  duration_seconds INTEGER NOT NULL, -- Duration of practice session
  completed BOOLEAN DEFAULT FALSE, -- Did user complete the lesson in this session?
  success_rate DECIMAL(5,2), -- Percentage of exercises completed successfully (0-100)
  notes TEXT, -- Optional session notes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Constraints
  CHECK (niveau_id >= 1 AND niveau_id <= 5),
  CHECK (duration_seconds > 0),
  CHECK (success_rate IS NULL OR (success_rate >= 0 AND success_rate <= 100))
);

-- Indexes for performance
CREATE INDEX idx_practice_logs_user_id ON public.practice_logs(user_id);
CREATE INDEX idx_practice_logs_lesson_id ON public.practice_logs(lesson_id);
CREATE INDEX idx_practice_logs_session_date ON public.practice_logs(session_date);
CREATE INDEX idx_practice_logs_user_date ON public.practice_logs(user_id, session_date);

-- Enable RLS
ALTER TABLE public.practice_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own logs
CREATE POLICY "Users can view their own practice logs"
  ON public.practice_logs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own practice logs"
  ON public.practice_logs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- TABLE: achievements
-- Defines all available badges/achievements in the system
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.achievements (
  id TEXT PRIMARY KEY, -- e.g., "first_lesson", "streak_7_days"
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT, -- Icon name or emoji
  category TEXT NOT NULL, -- "progression", "practice", "milestone", "special"
  points INTEGER DEFAULT 0, -- Optional points for gamification
  requirement_type TEXT NOT NULL, -- "lesson_complete", "streak_days", "practice_time", "niveau_complete"
  requirement_value INTEGER, -- Value needed (e.g., 7 for 7-day streak)
  badge_color TEXT, -- Gradient class for badge display
  display_order INTEGER DEFAULT 0, -- Order to display in UI
  is_hidden BOOLEAN DEFAULT FALSE, -- Hidden achievements (unlocked by discovery)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Constraints
  CHECK (category IN ('progression', 'practice', 'milestone', 'special')),
  CHECK (requirement_type IN ('lesson_complete', 'streak_days', 'practice_time', 'niveau_complete', 'custom')),
  CHECK (points >= 0)
);

-- Insert default achievements
INSERT INTO public.achievements (id, name, description, icon, category, requirement_type, requirement_value, badge_color, display_order) VALUES
  ('first_lesson', 'Première Leçon', 'Complète ta première leçon', '🎵', 'progression', 'lesson_complete', 1, 'from-blue-400 to-cyan-500', 1),
  ('first_piece', 'Premier Morceau', 'Joue ton premier morceau complet', '🎹', 'milestone', 'lesson_complete', 5, 'from-purple-400 to-pink-500', 2),
  ('niveau_1_complete', 'Niveau 1 Complété', 'Termine tous les exercices du Niveau 1', '⭐', 'progression', 'niveau_complete', 1, 'from-green-400 to-emerald-500', 3),
  ('streak_7_days', 'Streak 7 Jours', 'Pratique 7 jours consécutifs', '🔥', 'practice', 'streak_days', 7, 'from-orange-400 to-amber-500', 4),
  ('streak_30_days', 'Streak 30 Jours', 'Pratique 30 jours consécutifs', '🔥🔥', 'practice', 'streak_days', 30, 'from-red-400 to-rose-500', 5),
  ('practice_10_hours', '10 Heures de Pratique', 'Accumule 10 heures de pratique', '⏱️', 'practice', 'practice_time', 36000, 'from-yellow-400 to-orange-500', 6),
  ('niveau_2_complete', 'Niveau 2 Complété', 'Termine tous les exercices du Niveau 2', '⭐⭐', 'progression', 'niveau_complete', 2, 'from-blue-400 to-cyan-500', 7),
  ('niveau_3_complete', 'Niveau 3 Complété', 'Termine tous les exercices du Niveau 3', '⭐⭐⭐', 'progression', 'niveau_complete', 3, 'from-purple-400 to-violet-500', 8),
  ('niveau_4_complete', 'Niveau 4 Complété', 'Termine tous les exercices du Niveau 4', '⭐⭐⭐⭐', 'progression', 'niveau_complete', 4, 'from-orange-400 to-amber-500', 9),
  ('niveau_5_complete', 'Niveau 5 Complété', 'Termine tous les exercices du Niveau 5', '⭐⭐⭐⭐⭐', 'progression', 'niveau_complete', 5, 'from-pink-400 to-rose-500', 10)
ON CONFLICT (id) DO NOTHING;

-- ============================================================================
-- TABLE: user_achievements
-- Tracks which achievements have been unlocked by which users
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL REFERENCES public.achievements(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  progress INTEGER DEFAULT 0, -- Current progress towards achievement (if applicable)
  is_completed BOOLEAN DEFAULT TRUE, -- False for in-progress achievements
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Constraints
  UNIQUE(user_id, achievement_id),
  CHECK (progress >= 0)
);

-- Indexes for performance
CREATE INDEX idx_user_achievements_user_id ON public.user_achievements(user_id);
CREATE INDEX idx_user_achievements_achievement_id ON public.user_achievements(achievement_id);
CREATE INDEX idx_user_achievements_unlocked_at ON public.user_achievements(unlocked_at);

-- Enable RLS
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own achievements
CREATE POLICY "Users can view their own achievements"
  ON public.user_achievements FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own achievements"
  ON public.user_achievements FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Public read access to achievements table (all users can see available badges)
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available achievements"
  ON public.achievements FOR SELECT
  TO authenticated
  USING (true);

-- ============================================================================
-- FUNCTIONS: Helper functions for common operations
-- ============================================================================

-- Function: Mark lesson as complete
CREATE OR REPLACE FUNCTION mark_lesson_complete(
  p_user_id UUID,
  p_lesson_id TEXT,
  p_niveau_id INTEGER,
  p_time_spent_seconds INTEGER DEFAULT 0
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO public.user_progress (
    user_id,
    lesson_id,
    niveau_id,
    completed,
    completed_at,
    time_spent_seconds,
    attempts,
    last_practiced_at
  )
  VALUES (
    p_user_id,
    p_lesson_id,
    p_niveau_id,
    TRUE,
    NOW(),
    p_time_spent_seconds,
    1,
    NOW()
  )
  ON CONFLICT (user_id, lesson_id)
  DO UPDATE SET
    completed = TRUE,
    completed_at = NOW(),
    time_spent_seconds = user_progress.time_spent_seconds + p_time_spent_seconds,
    attempts = user_progress.attempts + 1,
    last_practiced_at = NOW(),
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Log practice session
CREATE OR REPLACE FUNCTION log_practice_session(
  p_user_id UUID,
  p_lesson_id TEXT,
  p_niveau_id INTEGER,
  p_duration_seconds INTEGER,
  p_completed BOOLEAN DEFAULT FALSE,
  p_success_rate DECIMAL DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
  v_log_id UUID;
BEGIN
  INSERT INTO public.practice_logs (
    user_id,
    lesson_id,
    niveau_id,
    session_date,
    duration_seconds,
    completed,
    success_rate
  )
  VALUES (
    p_user_id,
    p_lesson_id,
    p_niveau_id,
    CURRENT_DATE,
    p_duration_seconds,
    p_completed,
    p_success_rate
  )
  RETURNING id INTO v_log_id;

  -- Update user_progress with new session info
  INSERT INTO public.user_progress (
    user_id,
    lesson_id,
    niveau_id,
    time_spent_seconds,
    attempts,
    last_practiced_at
  )
  VALUES (
    p_user_id,
    p_lesson_id,
    p_niveau_id,
    p_duration_seconds,
    1,
    NOW()
  )
  ON CONFLICT (user_id, lesson_id)
  DO UPDATE SET
    time_spent_seconds = user_progress.time_spent_seconds + p_duration_seconds,
    attempts = user_progress.attempts + 1,
    last_practiced_at = NOW(),
    updated_at = NOW();

  RETURN v_log_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Unlock achievement
CREATE OR REPLACE FUNCTION unlock_achievement(
  p_user_id UUID,
  p_achievement_id TEXT
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO public.user_achievements (
    user_id,
    achievement_id,
    is_completed
  )
  VALUES (
    p_user_id,
    p_achievement_id,
    TRUE
  )
  ON CONFLICT (user_id, achievement_id) DO NOTHING;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Get user's current streak (consecutive days of practice)
CREATE OR REPLACE FUNCTION get_user_streak(p_user_id UUID)
RETURNS INTEGER AS $$
DECLARE
  v_streak INTEGER := 0;
  v_current_date DATE := CURRENT_DATE;
  v_has_practice BOOLEAN;
BEGIN
  LOOP
    -- Check if user practiced on current date
    SELECT EXISTS (
      SELECT 1
      FROM public.practice_logs
      WHERE user_id = p_user_id
        AND session_date = v_current_date
    ) INTO v_has_practice;

    -- If no practice on this date, break the streak
    IF NOT v_has_practice THEN
      EXIT;
    END IF;

    -- Increment streak and move to previous day
    v_streak := v_streak + 1;
    v_current_date := v_current_date - INTERVAL '1 day';
  END LOOP;

  RETURN v_streak;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Get niveau completion percentage
CREATE OR REPLACE FUNCTION get_niveau_completion(
  p_user_id UUID,
  p_niveau_id INTEGER,
  p_total_lessons INTEGER
)
RETURNS DECIMAL AS $$
DECLARE
  v_completed_count INTEGER;
BEGIN
  SELECT COUNT(*)
  INTO v_completed_count
  FROM public.user_progress
  WHERE user_id = p_user_id
    AND niveau_id = p_niveau_id
    AND completed = TRUE;

  IF p_total_lessons = 0 THEN
    RETURN 0;
  END IF;

  RETURN ROUND((v_completed_count::DECIMAL / p_total_lessons) * 100, 2);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- TRIGGERS: Auto-update timestamps
-- ============================================================================

-- Trigger function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to user_progress table
CREATE TRIGGER update_user_progress_updated_at
  BEFORE UPDATE ON public.user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- GRANTS: Ensure authenticated users can execute functions
-- ============================================================================
GRANT EXECUTE ON FUNCTION mark_lesson_complete(UUID, TEXT, INTEGER, INTEGER) TO authenticated;
GRANT EXECUTE ON FUNCTION log_practice_session(UUID, TEXT, INTEGER, INTEGER, BOOLEAN, DECIMAL) TO authenticated;
GRANT EXECUTE ON FUNCTION unlock_achievement(UUID, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_streak(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION get_niveau_completion(UUID, INTEGER, INTEGER) TO authenticated;

-- ============================================================================
-- END OF MIGRATION
-- ============================================================================
