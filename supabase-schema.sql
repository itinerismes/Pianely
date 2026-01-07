-- Pianely Database Schema
-- This schema defines the core tables for the Pianely piano learning platform

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USERS PROFILE TABLE
-- Extends Supabase auth.users with additional profile information
-- ============================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    instrument_type TEXT CHECK (instrument_type IN ('piano', 'keyboard', 'midi', 'none')),
    practice_time_per_week INTEGER DEFAULT 0, -- minutes per week
    skill_level TEXT DEFAULT 'beginner' CHECK (skill_level IN ('beginner', 'intermediate', 'advanced')),
    onboarding_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LEVELS TABLE
-- Defines the 5 main levels of the course
-- ============================================
CREATE TABLE IF NOT EXISTS public.levels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level_number INTEGER UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    objectives TEXT[], -- Array of learning objectives
    order_index INTEGER NOT NULL,
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LESSONS TABLE
-- Individual lessons within each level
-- ============================================
CREATE TABLE IF NOT EXISTS public.lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level_id UUID REFERENCES public.levels(id) ON DELETE CASCADE,
    lesson_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    content TEXT, -- Rich text content (markdown or JSON)
    video_url TEXT,
    duration_minutes INTEGER DEFAULT 10,
    order_index INTEGER NOT NULL,
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(level_id, lesson_number)
);

-- ============================================
-- USER PROGRESS TABLE
-- Tracks user progress through lessons
-- ============================================
CREATE TABLE IF NOT EXISTS public.user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed', 'needs_review')),
    completion_date TIMESTAMP WITH TIME ZONE,
    time_spent_minutes INTEGER DEFAULT 0,
    notes TEXT, -- User's personal notes
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, lesson_id)
);

-- ============================================
-- ACHIEVEMENTS TABLE
-- Defines available badges and achievements
-- ============================================
CREATE TABLE IF NOT EXISTS public.achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL, -- e.g., 'level_1_complete', 'streak_7_days'
    title TEXT NOT NULL,
    description TEXT,
    icon_url TEXT,
    category TEXT CHECK (category IN ('level_completion', 'streak', 'practice_time', 'special')),
    criteria JSONB, -- JSON defining unlock criteria
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- USER ACHIEVEMENTS TABLE
-- Tracks which achievements users have unlocked
-- ============================================
CREATE TABLE IF NOT EXISTS public.user_achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    achievement_id UUID REFERENCES public.achievements(id) ON DELETE CASCADE,
    unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, achievement_id)
);

-- ============================================
-- PRACTICE LOGS TABLE
-- Records user practice sessions
-- ============================================
CREATE TABLE IF NOT EXISTS public.practice_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE SET NULL,
    duration_minutes INTEGER NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- USER FEEDBACK TABLE
-- Collects user feedback on lessons
-- ============================================
CREATE TABLE IF NOT EXISTS public.user_feedback (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, lesson_id)
);

-- ============================================
-- INDEXES for performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_lessons_level_id ON public.lessons(level_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON public.user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_lesson_id ON public.user_progress(lesson_id);
CREATE INDEX IF NOT EXISTS idx_user_achievements_user_id ON public.user_achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_practice_logs_user_id ON public.practice_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_practice_logs_date ON public.practice_logs(date);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.practice_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_feedback ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can only see and update their own profile
CREATE POLICY "Users can view their own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Levels: Public read access (all users can see levels)
ALTER TABLE public.levels ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Levels are viewable by everyone" ON public.levels
    FOR SELECT USING (is_published = TRUE);

-- Lessons: Public read access (all users can see lessons)
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lessons are viewable by everyone" ON public.lessons
    FOR SELECT USING (is_published = TRUE);

-- User Progress: Users can only see and modify their own progress
CREATE POLICY "Users can view their own progress" ON public.user_progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" ON public.user_progress
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress" ON public.user_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Achievements: Public read access
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Achievements are viewable by everyone" ON public.achievements
    FOR SELECT USING (TRUE);

-- User Achievements: Users can only see their own achievements
CREATE POLICY "Users can view their own achievements" ON public.user_achievements
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own achievements" ON public.user_achievements
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Practice Logs: Users can only see and create their own logs
CREATE POLICY "Users can view their own practice logs" ON public.practice_logs
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own practice logs" ON public.practice_logs
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- User Feedback: Users can only see and create their own feedback
CREATE POLICY "Users can view their own feedback" ON public.user_feedback
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own feedback" ON public.user_feedback
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================
-- FUNCTIONS AND TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply triggers to tables with updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_levels_updated_at BEFORE UPDATE ON public.levels
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lessons_updated_at BEFORE UPDATE ON public.lessons
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_progress_updated_at BEFORE UPDATE ON public.user_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email)
    VALUES (NEW.id, NEW.email);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile when user signs up
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- SEED DATA - Initial Levels
-- ============================================

INSERT INTO public.levels (level_number, title, description, objectives, order_index) VALUES
(1, 'Découverte', 'Premiers pas au piano pour débutants absolus',
    ARRAY['Découvrir le clavier', 'Positions de base', 'Premier morceau simple'],
    1),
(2, 'Fondations', 'Bases des accords et coordination mains séparées',
    ARRAY['Accords de base', 'Mélodie main droite', 'Accompagnement main gauche'],
    2),
(3, 'Progression', 'Introduction au solfège et coordination des deux mains',
    ARRAY['Lire les notes', 'Valeurs rythmiques', 'Coordination mains ensemble'],
    3),
(4, 'Intermédiaire', 'Lecture de partition et techniques avancées',
    ARRAY['Lecture complète', 'Accords avancés', 'Rythmes variés'],
    4),
(5, 'Autonomie', 'Déchiffrage autonome et expression musicale',
    ARRAY['Déchiffrage', 'Expression', 'Répertoire personnel'],
    5)
ON CONFLICT (level_number) DO NOTHING;

-- ============================================
-- SEED DATA - Initial Achievements
-- ============================================

INSERT INTO public.achievements (code, title, description, category, criteria) VALUES
('first_lesson', 'Premier pas', 'Complète ta première leçon', 'level_completion', '{"lessons_completed": 1}'::jsonb),
('level_1_complete', 'Découvreur', 'Complète le niveau Découverte', 'level_completion', '{"level_completed": 1}'::jsonb),
('level_2_complete', 'Bâtisseur', 'Complète le niveau Fondations', 'level_completion', '{"level_completed": 2}'::jsonb),
('streak_7_days', 'Une semaine', 'Pratique 7 jours d''affilée', 'streak', '{"streak_days": 7}'::jsonb),
('streak_30_days', 'Un mois', 'Pratique 30 jours d''affilée', 'streak', '{"streak_days": 30}'::jsonb),
('practice_10h', 'Dévoué', 'Accumule 10 heures de pratique', 'practice_time', '{"total_minutes": 600}'::jsonb),
('first_song', 'Musicien', 'Joue ton premier morceau complet', 'special', '{"songs_completed": 1}'::jsonb)
ON CONFLICT (code) DO NOTHING;
