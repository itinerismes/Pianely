-- Migration 005: Durcissement sécurité & performance (Supabase Advisors)
-- Créé le: 2026-07-09
-- Déjà appliquée en production le 2026-07-09 — conservée ici comme référence.

-- ============================================================
-- SÉCURITÉ
-- ============================================================

-- Le bucket public sheet-music n'a pas besoin de policy SELECT :
-- l'accès par URL publique directe fonctionne sans, et la policy
-- permettait de LISTER tous les fichiers du bucket (lint 0025).
DROP POLICY IF EXISTS "Anyone can read sheet music" ON storage.objects;

-- Les fonctions triggers ne doivent pas être exposées en RPC via
-- PostgREST (/rest/v1/rpc/...) — lints 0028/0029.
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, public;

-- update_updated_at_column n'a pas besoin de privilèges élevés
-- (handle_new_user reste SECURITY DEFINER : le trigger auth doit
-- pouvoir insérer dans public.profiles).
ALTER FUNCTION public.update_updated_at_column() SECURITY INVOKER;

-- ============================================================
-- PERFORMANCE
-- ============================================================

-- Index manquants sur les foreign keys (lint unindexed FK)
CREATE INDEX IF NOT EXISTS idx_user_feedback_user_id ON public.user_feedback(user_id);
CREATE INDEX IF NOT EXISTS idx_user_feedback_lesson_id ON public.user_feedback(lesson_id);
CREATE INDEX IF NOT EXISTS idx_user_achievements_achievement_id ON public.user_achievements(achievement_id);
CREATE INDEX IF NOT EXISTS idx_practice_logs_lesson_id ON public.practice_logs(lesson_id);
CREATE INDEX IF NOT EXISTS idx_piece_progress_piece_id ON public.piece_progress(piece_id);

-- Lint auth_rls_initplan : toutes les policies RLS (public + storage)
-- réécrites pour envelopper auth.uid()/auth.role() dans un sous-select,
-- évalué une fois par requête au lieu d'une fois par ligne.
DO $$
DECLARE r record;
BEGIN
  FOR r IN
    SELECT schemaname, tablename, policyname, qual, with_check
    FROM pg_policies
    WHERE schemaname IN ('public', 'storage')
      AND (qual ~ '(^|[^(])auth\.(uid|role)\(\)' OR with_check ~ '(^|[^(])auth\.(uid|role)\(\)')
      AND qual NOT LIKE '%( SELECT auth.%' AND COALESCE(with_check, '') NOT LIKE '%( SELECT auth.%'
  LOOP
    BEGIN
      EXECUTE format(
        'ALTER POLICY %I ON %I.%I %s %s',
        r.policyname, r.schemaname, r.tablename,
        CASE WHEN r.qual IS NOT NULL
          THEN 'USING (' || replace(replace(r.qual, 'auth.uid()', '(select auth.uid())'), 'auth.role()', '(select auth.role())') || ')'
          ELSE '' END,
        CASE WHEN r.with_check IS NOT NULL
          THEN 'WITH CHECK (' || replace(replace(r.with_check, 'auth.uid()', '(select auth.uid())'), 'auth.role()', '(select auth.role())') || ')'
          ELSE '' END
      );
    EXCEPTION WHEN insufficient_privilege THEN
      RAISE NOTICE 'skip (droits): %.%', r.tablename, r.policyname;
    END;
  END LOOP;
END $$;

-- ============================================================
-- Réglage manuel restant (dashboard, non scriptable) :
-- Authentication → Passwords → activer « Leaked password protection »
-- ============================================================
