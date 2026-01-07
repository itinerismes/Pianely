# Pianely - Documentation Projet

## 🎹 CONTEXTE PROJET
**Nom**: Pianely
**Tagline**: Tes premiers morceaux, simplement
**Type**: Site d'apprentissage du piano pour grands débutants
**Distinction importante**: Ce projet est SÉPARÉ du site de fantasy développé en parallèle. Ne pas mélanger les fonctionnalités ou composants entre les deux projets.

---

## 🎯 VISION PRODUIT

### Persona cible
- **Public**: Adultes et adolescents sans aucune base musicale
- **Équipement**: Clavier/piano basique, clavier MIDI ou clavier virtuel
- **Promesse**: "En X semaines, tu es capable de jouer tes premiers morceaux complets, sans lire la musique au départ, puis en introduisant progressivement le solfège"

### Proposition de valeur
- Apprentissage progressif sans barrière d'entrée
- Jouer des morceaux réels dès le début
- Introduction graduelle du solfège (pas obligatoire au départ)
- Progression par petits pas mesurables

---

## 🏗️ ARCHITECTURE TECHNIQUE

### Stack
- **Frontend**: Next.js 14+ / React 18+
- **Déploiement**: Vercel
- **Backend/Database**: Supabase (Auth + PostgreSQL)
- **Version Control**: GitHub
- **Environnement dev**: WSL + VS Code + Claude Code

### Structure des données Supabase
```
Tables principales:
- users (profils utilisateurs)
- user_progress (progression par leçon/niveau)
- lessons (contenu des leçons)
- levels (niveaux/chapitres)
- achievements (badges/jalons)
- practice_logs (historique de pratique)
- user_feedback (notes/commentaires utilisateurs)
```

### API Routes Next.js
```
/api/auth/* (délégué à Supabase)
/api/user/progress
/api/lessons/[id]
/api/achievements
/api/practice-log
```

---

## 🎨 DESIGN SYSTEM - GLASSMORPHISM

### Principes visuels
- **Style**: Glassmorphism moderne
- **Effets**: `backdrop-filter: blur()`, transparence, dégradés
- **Palette**: Tons sombres/bleutés ou argentiques
- **Typographie**: Minimaliste, clean, lisible
- **Coins**: Arrondis (border-radius généreux)
- **Ombres**: Douces et subtiles

### Règles d'accessibilité
- ✅ Glass effect sur navigation, cards, modales
- ✅ Fond plein pour textes longs (lisibilité)
- ✅ Contraste WCAG AA minimum
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Fallback si backdrop-filter non supporté

### Composants de base
```
- GlassCard (conteneur avec effet verre)
- GlassButton (CTA avec effet)
- GlassNavbar (navigation translucide)
- GlassModal (modales avec blur)
- ProgressBar (suivi visuel progression)
- Badge (achievements/jalons)
```

---

## 📱 RESPONSIVE & MOBILE FIRST

### Navigation mobile
- Tabs en bas: Cours | Parcours | Profil | Boutique
- Gestures naturels (swipe, tap)
- Optimisé touch (min 44x44px)

### Architecture préparée pour app native
- API REST Supabase clairement définie
- Logique métier modulaire (réutilisable en React Native)
- Architecture composants : dumb/smart components
- Possibilité WebView ou React Native future

---

## 🎓 STRUCTURE PÉDAGOGIQUE

### Parcours d'apprentissage (5 niveaux)

#### Niveau 1 - Découverte (Débutant total)
**Objectifs**:
- Découverte du clavier (notes, octaves)
- Positions de base des mains
- 2-3 motifs rythmiques simples
- **Premier morceau ultra simple** (satisfaction immédiate)

**Leçons**:
1. Anatomie du clavier (touches, noms des notes)
2. Position des mains
3. Premier motif main droite
4. Premier motif main gauche
5. Ton premier morceau complet

---

#### Niveau 2 - Fondations
**Objectifs**:
- Accords de base mains séparées
- Main droite mélodie simple
- Main gauche accompagnement basique
- 2-3 morceaux connus

**Leçons**:
1. Les 3 accords magiques (C, G, Am)
2. Coordination mains séparées
3. Rythme binaire simple
4. Morceau: mélodie populaire avec accords

---

#### Niveau 3 - Progression
**Objectifs**:
- Coordination mains ensemble (simple)
- Introduction solfège basique (notes, valeurs)
- Accords enrichis
- Lecture partielle de partition

**Leçons**:
1. Lire les notes (portée, clé de sol basique)
2. Valeurs rythmiques (noires, blanches)
3. Mains ensemble: exercices progressifs
4. Morceau avec partition simplifiée

---

#### Niveau 4 - Intermédiaire
**Objectifs**:
- Lecture de partition complète
- Accords avancés, renversements
- Rythmes variés
- Morceaux classiques/pop accessibles

---

#### Niveau 5 - Autonomie
**Objectifs**:
- Déchiffrage autonome
- Nuances et expression
- Pédalier (si piano acoustique)
- Répertoire personnel

---

### Format de leçon type
```
Structure:
1. Intro vidéo/animation (1-2min)
2. Schéma clavier interactif
3. Explications écrites simples
4. Exercice guidé (objectif clair)
5. Validation/feedback
6. Ressources bonus (fiche mémo)
```

---

## 🎮 GAMIFICATION & ENGAGEMENT

### Dashboard utilisateur
**Métriques affichées**:
- Progression globale (% du parcours)
- Niveaux complétés vs. restants
- Temps de pratique hebdomadaire
- Streak de jours consécutifs
- Prochaines étapes suggérées

**Badges/Achievements**:
- Badge par niveau complété
- Badges spéciaux (streak 7j, 30j, premier morceau, etc.)
- Messages de félicitation personnalisés

### Modes d'apprentissage
1. **Mode pas-à-pas**: Mini-blocs, bouton "étape suivante", aucune surcharge
2. **Mode révision**: Accès rapide fiches mémo, accords, positions
3. **Mode practice**: Timer, log de session, feedback post-pratique

### Interaction clavier
- **Court terme**: Saisie déclarative ("Réussi" / "À retravailler") + quiz interactifs
- **Long terme**: Architecture prête pour détection audio (micro) style Flowkey/Simply Piano

---

## 💰 MONÉTISATION & SEO

### Page Boutique/Revendeurs
**URL**: `/pianos-debutants`

**Objectif**: Liens affiliés + partenariats revendeurs

**Contenu SEO**:
- Comparatifs pianos/claviers pour débutants
- Guide d'achat détaillé
- FAQ riches (schema.org FAQ + Product)
- Mots-clés: "meilleur piano pour débutant", "clavier numérique apprendre piano", "piano pas cher débuter"

**SEO Best Practices**:
- URLs propres `/slug/` structure
- Title/meta descriptions optimisées par page
- H1 unique, H2/H3 structurés
- Liens internes depuis leçons ("Pas encore d'instrument ? Voir nos recommandations")
- Images optimisées (WebP, lazy loading, alt text)
- Sitemap.xml + robots.txt
- Schema.org markup (Organization, FAQPage, Product)

### Blog/Ressources
- Articles: "Comment choisir son premier piano", "5 erreurs débutants"
- Enrichissement SEO long-tail
- Backlinks internes

---

## 🚀 ROADMAP DÉVELOPPEMENT

### Phase 1 - MVP (2-4 semaines)
- [ ] Setup projet Next.js + Supabase
- [ ] Auth simple (email/password)
- [ ] Page d'accueil + hero
- [ ] 1 parcours débutant (5-10 leçons)
- [ ] Design glassmorphism de base (lisible)
- [ ] Dashboard progression minimal (liste leçons, statut)

**Livrable MVP**: Site fonctionnel avec un parcours complet, auth, et tracking basique

---

### Phase 2 - UX & Gamification (2-3 semaines)
- [ ] Jalons et badges
- [ ] Dashboard enrichi (graphiques progression)
- [ ] Mini quiz interactifs
- [ ] Fiches mémo (notes, accords)
- [ ] Mode révision
- [ ] Onboarding personnalisé (questions initiales)

**Livrable Phase 2**: Expérience engageante avec gamification

---

### Phase 3 - SEO & Monétisation (1-2 semaines)
- [ ] Page boutique/affiliation optimisée
- [ ] SEO on-page complet
- [ ] Blog/ressources (3-5 articles)
- [ ] Interlinking stratégique
- [ ] Analytics et tracking conversions

**Livrable Phase 3**: Site monétisable + trafic organique

---

### Phase 4 - Évolutions futures
- [ ] Détection audio (micro → notes jouées)
- [ ] App mobile (React Native ou WebView)
- [ ] Contenu vidéo enrichi
- [ ] Communauté (forum, partage de progrès)
- [ ] Parcours personnalisés avancés (IA)

---

## 📊 SUIVI DES AVANCÉES

### Sprint actuel: MVP - Phase 1
**Date de début**: 2026-01-07

#### ✅ Fait
- [ ] Documentation projet (ce fichier)

#### 🚧 En cours
- [ ] Configuration initiale (Supabase, Vercel, GitHub)

#### 📋 À faire
- [ ] Initialisation Next.js
- [ ] Intégration Supabase
- [ ] Design system glassmorphism
- [ ] Page d'accueil
- [ ] Auth flow
- [ ] Première leçon prototype

---

## 🔧 CONFIGURATIONS

### Supabase
- [x] **Project URL**: `https://lyaybmlzjxgdzzaaxfcc.supabase.co`
- [x] **Anon key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5YXlibWx6anhnZHp6YWF4ZmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3OTIyMDcsImV4cCI6MjA4MzM2ODIwN30.OmxVrXA80nzRh3wgFg3lyIxgXSGhKyqbal6hpov2j4g`
- [x] **Service role key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5YXlibWx6anhnZHp6YWF4ZmNjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Nzc5MjIwNywiZXhwIjoyMDgzMzY4MjA3fQ.ebvftkQnAcbB6Xw9NJLqukg4W5GxB29yCL7q7hEHY9o`
- [x] **Secret API key**: `sb_secret_7iT5L6wfEjJcJYfWuOA9-g_ro3SkM8q`
- [ ] Database schema créé

### Vercel
- **Organisation**: `https://vercel.com/itinerismes-projects`
- **Projet**: `pianely`
- [ ] Projet lié via CLI
- [ ] Variables d'environnement configurées
- [ ] Domaine: `.vercel.app` (défaut)

### GitHub
- **Organisation**: `https://github.com/itinerismes`
- **Repository**: `Pianely`
- [ ] Repository créé via CLI
- [ ] Branch protection rules
- [ ] CI/CD pipeline

### Dépendances validées
- ✅ Next.js 14+ avec TypeScript
- ✅ Tailwind CSS (styling glassmorphism)
- ✅ Supabase client
- ✅ Framer Motion (animations)
- ✅ React Hook Form + Zod (formulaires)
- ✅ Lucide React (icônes)

---

## 📝 NOTES IMPORTANTES

### Distinction avec site de fantasy
⚠️ **ATTENTION**: Ne pas confondre avec le projet de fantasy développé en parallèle
- Pianely = apprentissage piano, design glassmorphism bleuté/argentique
- Projet fantasy = (à préciser si nécessaire dans leurs propres docs)

### Bonnes pratiques dev
- Commits atomiques et descriptifs
- Tests unitaires (composants critiques)
- Code reviews avant merge
- Documentation inline pour logique complexe

---

## 📚 RESSOURCES & RÉFÉRENCES

### Design inspiration
- Glassmorphism: https://glassmorphism.com
- Figma UI kits: Glass UI

### Stack docs
- Next.js: https://nextjs.org/docs
- Supabase: https://supabase.com/docs
- React: https://react.dev

---

**Dernière mise à jour**: 2026-01-07
**Version**: 0.1.0 (MVP en cours)
