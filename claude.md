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

## 🎨 DESIGN SYSTEM - MEDICAL DASHBOARD (Thème Clair)

### Principes visuels
- **Style**: Medical dashboard moderne avec accents violet
- **Palette principale**:
  - Fond: Gradient `from-violet-50 via-blue-50 to-purple-100`
  - Cards: Blanc `bg-white` avec ombres violet-tinted
  - Texte: `slate-900` (primaire), `slate-600` (secondaire)
  - Accents: `violet-600` (actif), `amber-400`/`orange-500` (info)
- **Typographie**: Sans-serif moderne, hiérarchie claire
- **Coins**: `rounded-3xl` (très arrondis pour look moderne)
- **Ombres**: Douces avec teinte violet `shadow-lg shadow-violet-500/5`

### Variables CSS (globals.css)
```css
--light-bg-start: #f5f3ff;        /* violet-50 */
--light-bg-mid: #eff6ff;          /* blue-50 */
--light-bg-end: #fae8ff;          /* purple-100 */
--light-card-bg: #ffffff;
--light-card-shadow: 0 4px 20px rgba(139, 92, 246, 0.08);
--light-text-primary: #1e293b;    /* slate-900 */
--light-text-secondary: #64748b;  /* slate-500 */
--light-accent-violet: #7c3aed;   /* violet-600 */
--light-accent-amber: #f59e0b;    /* amber-400 */
```

### Règles d'accessibilité
- ✅ Contraste WCAG AA minimum (texte foncé sur fond clair)
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Support clavier complet (Space/Enter + Arrow keys)
- ✅ ARIA labels sur drag handles et actions
- ✅ Animations respectueuses (300ms ease)

### Composants de base
```
- GlassCard → Refactorisé en carte blanche avec ombres
- GlassButton → 5 variantes (primary, secondary, accent, outline, ghost)
- HorizontalNav → Barre sticky en haut (bg-[#0f1629]/95)
- DashboardGrid → Grille 12 colonnes avec drag & drop
- DraggableWidget → Wrapper pour widgets repositionnables
- WidgetDragHandle → Poignée visible au hover
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

## 🎛️ SYSTÈME DE DASHBOARD DRAG & DROP

### Architecture
Le dashboard utilise un système de grille 12 colonnes avec widgets repositionnables via drag & drop.

#### Technologies utilisées
- **@dnd-kit/core** v6.3.1 - Système de drag & drop moderne
- **@dnd-kit/sortable** v10.0.0 - Stratégies de tri
- **@dnd-kit/utilities** v3.2.2 - Utilitaires CSS
- **localStorage** - Persistence du layout personnalisé

### Configuration de la grille
```typescript
GRID_CONFIG = {
  columns: 12,           // Grille 12 colonnes
  rowHeight: 220px,      // Hauteur fixe par ligne
  gap: 24px,             // Espacement (gap-6)
}
```

### Widgets disponibles (5)
1. **GuideProgressionWidget** (8×2) - Timeline hebdomadaire des séances
2. **AssistantPianelyWidget** (4×2) - Grille 2×2 d'actions rapides (gradient violet)
3. **ObjectifQuotidienWidget** (4×1) - Objectif quotidien + mini graphique
4. **BadgesWidget** (4×2) - Grille 3×2 de badges débloqués/verrouillés
5. **MorceauxEnCoursWidget** (8×2) - Liste des morceaux en cours

### Layout par défaut
```typescript
DEFAULT_LAYOUT = [
  { id: 'guide-progression', x: 0, y: 0, w: 8, h: 2 },
  { id: 'assistant-pianely', x: 8, y: 0, w: 4, h: 2 },
  { id: 'objectif-quotidien', x: 8, y: 2, w: 4, h: 1 },
  { id: 'badges', x: 8, y: 3, w: 4, h: 2 },
  { id: 'morceaux-en-cours', x: 0, y: 2, w: 8, h: 2 },
]
```

### Fonctionnalités drag & drop
- **Activation**: Hover sur widget → poignée (⋮⋮) apparaît en haut à droite
- **Déplacement**: Cliquer-glisser la poignée pour repositionner
- **Collision detection**: Algorithme de cascade (push down)
- **Compaction automatique**: Suppression des espaces verticaux inutiles
- **Persistence**: Layout sauvegardé dans localStorage (debounce 300ms)
- **Reset**: Bouton "Reset Layout" pour revenir au défaut

### Responsive
- **Desktop (>1024px)**: Grille 12 colonnes, drag activé
- **Tablet (641-1024px)**: Grille 8 colonnes adaptée
- **Mobile (<640px)**: Stack vertical, drag désactivé

### Structure des fichiers
```
components/dashboard/
├── DashboardGrid.tsx          # Container DndContext
├── DraggableWidget.tsx        # Wrapper useSortable
├── WidgetDragHandle.tsx       # Poignée GripVertical
└── widgets/
    ├── GuideProgressionWidget.tsx
    ├── AssistantPianelyWidget.tsx
    ├── ObjectifQuotidienWidget.tsx
    ├── BadgesWidget.tsx
    └── MorceauxEnCoursWidget.tsx

hooks/
├── useDashboardLayout.ts      # State + localStorage
└── useMediaQuery.ts           # Breakpoints responsive

lib/dashboard/
├── constants.ts               # Config grille + layouts
├── grid-utils.ts              # Calculs position/collision
└── collision.ts               # Algorithme cascade

types/
└── dashboard.ts               # Interfaces TypeScript
```

### UX/UI du drag & drop
- Poignée visible uniquement au **hover** (opacity-0 → opacity-100)
- Cursor **grab** sur poignée, **grabbing** pendant drag
- Widget en cours de drag : **opacity 50%**, z-index élevé
- Animations fluides : **transition-all duration-300 ease**
- Feedback visuel clair : bordures, ombres

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

### Sprint actuel: MVP - Phase 1 + Dashboard refactoring
**Date de début**: 2026-01-07
**Dernière mise à jour**: 2026-01-09

#### ✅ Fait (Phase 1 - Setup complet)
- [x] Documentation projet (ce fichier)
- [x] Initialisation Next.js avec TypeScript
- [x] Configuration GitHub (repository créé)
- [x] Configuration Vercel (déployement automatique)
- [x] Intégration Supabase (schéma appliqué)
- [x] Design system glassmorphism complet
- [x] Page d'accueil avec hero, features, testimonials
- [x] Variables d'environnement configurées
- [x] Build production testé et validé

#### ✅ Fait (Refonte dashboard - 2026-01-09)
- [x] **Thème clair médical**: Variables CSS, gradient violet-50/blue-50/purple-100
- [x] **GlassCard refactoré**: Blanc avec ombres violet-tinted, rounded-3xl
- [x] **GlassButton refactoré**: 5 variantes (primary, secondary, accent, outline, ghost)
- [x] **Types TypeScript**: WidgetLayout, TimelineDay, Morceau, Badge
- [x] **5 widgets extraits**: GuideProgression, AssistantPianely, ObjectifQuotidien, Badges, MorceauxEnCours
- [x] **Système de grille**: constants.ts, grid-utils.ts, collision.ts
- [x] **Hooks custom**: useDashboardLayout (localStorage), useMediaQuery (responsive)
- [x] **Drag & drop**: DashboardGrid, DraggableWidget, WidgetDragHandle avec @dnd-kit
- [x] **Page.tsx refactorisée**: Dynamic import, skeleton loading, bouton reset
- [x] **Build validé**: Aucune erreur TypeScript ou build

#### 🚧 En cours
- Aucune tâche en cours

#### 📋 À faire (Prochaines priorités)
- [ ] Pages d'authentification (inscription/connexion)
- [ ] Page parcours avec affichage des 5 niveaux
- [ ] Système de routing pour les leçons
- [ ] Auth flow complet avec Supabase Auth
- [ ] Première leçon prototype interactive
- [ ] Tests utilisateurs du système drag & drop

---

## 🔧 CONFIGURATIONS

### Supabase
- [x] **Project URL**: `https://lyaybmlzjxgdzzaaxfcc.supabase.co`
- [x] **Dashboard**: https://supabase.com/dashboard/project/lyaybmlzjxgdzzaaxfcc
- [x] **Anon key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5YXlibWx6anhnZHp6YWF4ZmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3OTIyMDcsImV4cCI6MjA4MzM2ODIwN30.OmxVrXA80nzRh3wgFg3lyIxgXSGhKyqbal6hpov2j4g`
- [x] **Service role key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5YXlibWx6anhnZHp6YWF4ZmNjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Nzc5MjIwNywiZXhwIjoyMDgzMzY4MjA3fQ.ebvftkQnAcbB6Xw9NJLqukg4W5GxB29yCL7q7hEHY9o`
- [x] **Secret API key**: `sb_secret_7iT5L6wfEjJcJYfWuOA9-g_ro3SkM8q`
- [x] **Database schema créé** ✅ (appliqué le 2026-01-07)

### Vercel
- **Organisation**: `https://vercel.com/itinerismes-projects`
- **Projet**: `pianely`
- **URL de production**: https://pianely-itinerismes-projects.vercel.app
- [x] Projet lié via CLI
- [x] Variables d'environnement configurées
- [x] Déploiement automatique actif (GitHub → Vercel)
- [x] Domaine: `pianely-itinerismes-projects.vercel.app`

### GitHub
- **Organisation**: `https://github.com/itinerismes`
- **Repository**: https://github.com/itinerismes/Pianely
- [x] Repository créé via CLI
- [x] Push automatique configuré
- [ ] Branch protection rules (optionnel)
- [x] CI/CD pipeline (via Vercel)

### Dépendances validées
- ✅ Next.js 16.1.1 avec TypeScript
- ✅ React 19.2.3
- ✅ Tailwind CSS 4 (styling medical dashboard)
- ✅ Supabase client
- ✅ Framer Motion (animations)
- ✅ React Hook Form + Zod (formulaires)
- ✅ Lucide React (icônes)
- ✅ @dnd-kit/core v6.3.1 (drag & drop)
- ✅ @dnd-kit/sortable v10.0.0 (sorting)
- ✅ @dnd-kit/utilities v3.2.2 (CSS utils)

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

**Dernière mise à jour**: 2026-01-09
**Version**: 0.2.0 (Dashboard drag & drop complet)
