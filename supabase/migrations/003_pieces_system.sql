-- Migration 003: Système de gestion des morceaux de piano
-- Créé le: 2026-01-12
-- Description: Tables pour morceaux (IMSLP, uploads utilisateur), progression et bibliothèque utilisateur

-- Table principale des morceaux (catalogue IMSLP + uploads utilisateur)
CREATE TABLE pieces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  composer TEXT NOT NULL,
  opus_number TEXT,
  level INTEGER CHECK (level BETWEEN 1 AND 5),
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  duration_minutes INTEGER,
  category TEXT, -- 'classical', 'jazz', 'pop', 'user_upload'
  source TEXT, -- 'imslp', 'pianosnap', 'user_upload', 'youtube'
  imslp_id TEXT UNIQUE, -- ID IMSLP si applicable
  imslp_url TEXT,
  thumbnail_url TEXT,
  sheet_music_url TEXT, -- URL Supabase Storage ou externe (PDF)
  midi_url TEXT, -- URL fichier MIDI
  musicxml_url TEXT, -- URL fichier MusicXML
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des morceaux ajoutés par utilisateurs (bibliothèque personnelle)
CREATE TABLE user_pieces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  piece_id UUID REFERENCES pieces(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'mastered')),
  added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, piece_id)
);

-- Table de progression sur morceaux
CREATE TABLE piece_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  piece_id UUID REFERENCES pieces(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  measures_completed INTEGER DEFAULT 0,
  total_measures INTEGER,
  time_spent_minutes INTEGER DEFAULT 0,
  last_practiced_at TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, piece_id)
);

-- Indexes pour optimiser les requêtes fréquentes
CREATE INDEX idx_pieces_composer ON pieces(composer);
CREATE INDEX idx_pieces_level ON pieces(level);
CREATE INDEX idx_pieces_category ON pieces(category);
CREATE INDEX idx_pieces_imslp_id ON pieces(imslp_id) WHERE imslp_id IS NOT NULL;
CREATE INDEX idx_user_pieces_user_id ON user_pieces(user_id);
CREATE INDEX idx_user_pieces_piece_id ON user_pieces(piece_id);
CREATE INDEX idx_user_pieces_status ON user_pieces(status);
CREATE INDEX idx_piece_progress_user_id ON piece_progress(user_id);
CREATE INDEX idx_piece_progress_last_practiced ON piece_progress(last_practiced_at DESC);

-- Activer Row Level Security (RLS)
ALTER TABLE pieces ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_pieces ENABLE ROW LEVEL SECURITY;
ALTER TABLE piece_progress ENABLE ROW LEVEL SECURITY;

-- Policies pour la table pieces
-- Tous les utilisateurs authentifiés peuvent voir tous les morceaux
CREATE POLICY "Pieces are viewable by everyone"
  ON pieces FOR SELECT
  USING (true);

-- Seuls les admins peuvent insérer des morceaux depuis IMSLP (via fonction server)
-- Les utilisateurs peuvent insérer leurs propres uploads (vérifié côté serveur)
CREATE POLICY "Authenticated users can insert pieces"
  ON pieces FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policies pour la table user_pieces
CREATE POLICY "Users can insert their own user_pieces"
  ON user_pieces FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own user_pieces"
  ON user_pieces FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own user_pieces"
  ON user_pieces FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own user_pieces"
  ON user_pieces FOR DELETE
  USING (auth.uid() = user_id);

-- Policies pour la table piece_progress
CREATE POLICY "Users can insert their own piece_progress"
  ON piece_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own piece_progress"
  ON piece_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own piece_progress"
  ON piece_progress FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own piece_progress"
  ON piece_progress FOR DELETE
  USING (auth.uid() = user_id);

-- Triggers pour mettre à jour automatiquement updated_at
CREATE TRIGGER update_pieces_updated_at
  BEFORE UPDATE ON pieces
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_piece_progress_updated_at
  BEFORE UPDATE ON piece_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Commentaires sur les tables pour documentation
COMMENT ON TABLE pieces IS 'Catalogue de morceaux de piano (IMSLP, PianoSnap, uploads utilisateur)';
COMMENT ON TABLE user_pieces IS 'Bibliothèque personnelle de morceaux par utilisateur';
COMMENT ON TABLE piece_progress IS 'Progression et statistiques de pratique par morceau et utilisateur';

-- Note: Les buckets Supabase Storage doivent être créés manuellement:
-- - 'sheet-music' (public) pour les partitions MusicXML, MIDI, PDF
-- - 'audio-uploads' (privé) pour les fichiers audio temporaires
