# Configuration Supabase pour Pianely

## Appliquer le schéma de base de données

Pour créer les tables nécessaires dans ta base de données Supabase :

1. Va sur https://supabase.com/dashboard/project/lyaybmlzjxgdzzaaxfcc
2. Clique sur l'onglet "SQL Editor" dans le menu de gauche
3. Clique sur "New query"
4. Copie tout le contenu du fichier `supabase-schema.sql`
5. Colle-le dans l'éditeur SQL
6. Clique sur "Run" pour exécuter le script

## Ce que ce schéma crée

### Tables principales
- **profiles** : Profils utilisateurs étendus
- **levels** : Les 5 niveaux de cours (Découverte, Fondations, Progression, Intermédiaire, Autonomie)
- **lessons** : Leçons individuelles dans chaque niveau
- **user_progress** : Progression de l'utilisateur par leçon
- **achievements** : Définition des badges/achievements
- **user_achievements** : Achievements débloqués par utilisateur
- **practice_logs** : Logs des sessions de pratique
- **user_feedback** : Feedback utilisateur sur les leçons

### Sécurité (Row Level Security)
- Les utilisateurs ne peuvent voir/modifier que leurs propres données
- Les leçons et niveaux sont publics (lecture seule)
- Les achievements sont publics (lecture seule)

### Données initiales
- Les 5 niveaux sont créés automatiquement
- 7 achievements de base sont créés
- Un trigger crée automatiquement un profil quand un utilisateur s'inscrit

## Vérification

Après avoir exécuté le script, tu peux vérifier que tout est bien créé :

1. Va dans l'onglet "Table Editor"
2. Tu devrais voir toutes les tables listées
3. Clique sur "levels" pour voir les 5 niveaux créés
4. Clique sur "achievements" pour voir les achievements de base

## Prochaines étapes

Une fois le schéma appliqué, tu pourras :
- Créer des leçons via l'interface Supabase ou via l'API
- Tester l'inscription d'utilisateurs
- Voir les profils créés automatiquement
