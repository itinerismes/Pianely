# 📊 Supabase Migrations - Guide d'Application

## Comment appliquer les migrations

### Option 1: Via Supabase Dashboard (Recommandé)

1. **Ouvrir le SQL Editor**
   - Va sur https://supabase.com/dashboard/project/tberafusnxjhywetfdpx
   - Clique sur "SQL Editor" dans la sidebar gauche

2. **Nouvelle requête**
   - Clique sur "New Query"

3. **Copier-coller la migration**
   - Ouvre le fichier `migrations/002_user_progress_and_achievements.sql`
   - Copie tout le contenu
   - Colle dans l'éditeur SQL

4. **Exécuter**
   - Clique sur "Run" (ou Ctrl+Enter)
   - Vérifie qu'il n'y a pas d'erreurs dans la console

5. **Vérifier**
   - Va dans "Table Editor"
   - Tu devrais voir les nouvelles tables:
     - `user_progress`
     - `practice_logs`
     - `achievements`
     - `user_achievements`

### Option 2: Via Supabase CLI (Avancé)

Si tu veux installer le CLI Supabase :

```bash
# Installer Supabase CLI
npm install -g supabase

# Se connecter à ton projet
supabase link --project-ref tberafusnxjhywetfdpx

# Appliquer les migrations
supabase db push
```

---

## 📋 Migrations Disponibles

### 002_user_progress_and_achievements.sql

**Date**: 2026-01-11
**Statut**: ⏳ À appliquer

**Contenu**:
- ✅ Table `user_progress` - Tracking progression leçons
- ✅ Table `practice_logs` - Logs sessions de pratique
- ✅ Table `achievements` - Définition badges disponibles
- ✅ Table `user_achievements` - Badges débloqués par user
- ✅ 10 achievements par défaut insérés
- ✅ Fonctions SQL:
  - `mark_lesson_complete()` - Marquer leçon comme complétée
  - `log_practice_session()` - Logger une session
  - `unlock_achievement()` - Débloquer un badge
  - `get_user_streak()` - Obtenir streak de jours consécutifs
  - `get_niveau_completion()` - % de complétion d'un niveau
- ✅ RLS (Row Level Security) activé sur toutes les tables
- ✅ Indexes pour performance
- ✅ Triggers pour auto-update timestamps

---

## ✅ Vérification Post-Migration

Après avoir appliqué la migration, vérifie que tout fonctionne :

### 1. Vérifier les tables

```sql
-- Lister toutes les tables
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name IN ('user_progress', 'practice_logs', 'achievements', 'user_achievements');
```

Tu devrais voir 4 tables.

### 2. Vérifier les achievements

```sql
-- Lister tous les achievements
SELECT id, name, category, requirement_type
FROM public.achievements
ORDER BY display_order;
```

Tu devrais voir 10 badges.

### 3. Vérifier les fonctions

```sql
-- Lister les fonctions créées
SELECT routine_name, routine_type
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_name IN (
    'mark_lesson_complete',
    'log_practice_session',
    'unlock_achievement',
    'get_user_streak',
    'get_niveau_completion'
  );
```

Tu devrais voir 5 fonctions.

### 4. Tester une fonction

```sql
-- Exemple: Obtenir la completion du niveau 1 pour un user
-- Remplace user_id par un UUID valide de ta table auth.users
SELECT get_niveau_completion(
  'your-user-id-here'::UUID,
  1, -- niveau_id
  5  -- total_lessons (niveau 1 a 5 leçons)
);
```

---

## 🔧 Rollback (En cas de problème)

Si tu as besoin d'annuler la migration :

```sql
-- Supprimer les tables (ATTENTION: Perte de données!)
DROP TABLE IF EXISTS public.user_achievements CASCADE;
DROP TABLE IF EXISTS public.achievements CASCADE;
DROP TABLE IF EXISTS public.practice_logs CASCADE;
DROP TABLE IF EXISTS public.user_progress CASCADE;

-- Supprimer les fonctions
DROP FUNCTION IF EXISTS mark_lesson_complete(UUID, TEXT, INTEGER, INTEGER);
DROP FUNCTION IF EXISTS log_practice_session(UUID, TEXT, INTEGER, INTEGER, BOOLEAN, DECIMAL);
DROP FUNCTION IF EXISTS unlock_achievement(UUID, TEXT);
DROP FUNCTION IF EXISTS get_user_streak(UUID);
DROP FUNCTION IF EXISTS get_niveau_completion(UUID, INTEGER, INTEGER);
DROP FUNCTION IF EXISTS update_updated_at_column();
```

---

## 📝 Notes

- **RLS activé**: Seuls les utilisateurs authentifiés peuvent accéder à leurs propres données
- **Indexes créés**: Requêtes optimisées sur user_id, lesson_id, dates
- **Cascading deletes**: Si un user est supprimé, toutes ses données sont aussi supprimées
- **Timestamps auto**: Les champs `updated_at` sont automatiquement mis à jour

---

## 🚀 Prochaines Étapes

Après avoir appliqué cette migration :

1. ✅ Créer les fonctions TypeScript pour appeler les fonctions SQL
2. ✅ Connecter le Dashboard aux vraies données
3. ✅ Implémenter le système de badges dans l'UI
4. ✅ Ajouter les logs de practice dans les leçons

Voir `NEXT_STEPS.md` pour plus de détails.
