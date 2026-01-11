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

## 🎨 DESIGN SYSTEM - MODERN LIGHT (FIGMA)

### Principes visuels
- **Style**: Design moderne light avec gradients colorés purple-blue
- **Palette principale**:
  - Fond: Gradient `from-indigo-50 via-white to-purple-50`
  - Cards: `bg-white` avec `border-gray-200` et `shadow-lg`
  - Texte: `text-gray-900` (primaire), `text-gray-600` (secondaire), `text-muted-foreground` (tertiaire)
  - Accents: Gradients `from-purple-600 to-blue-600` pour CTAs et éléments importants
  - Niveaux: Gradients colorés par niveau (green, blue, purple, orange, pink)
  - Ombres: `shadow-lg` → hover: `shadow-xl`, `hover:-translate-y-1/2` transitions
- **Typographie**: Plus Jakarta Sans (Google Font), hiérarchie claire
- **Coins**: `rounded-2xl` pour cards, `rounded-xl` pour boutons
- **Icônes**: Lucide React avec gradients colorés en background
- **Effets**: Scale transforms, decorative blobs, micro-interactions

### Thème dual (Light/Dark)
- **Light mode** (défaut): Fond blanc cassé, texte dark, gradients colorés
- **Dark mode** (optionnel): Activable via toggle dans settings
- **Provider**: next-themes avec `ThemeProvider` wrapper
- **Toggle**: Component `ThemeToggle` avec Switch shadcn/ui

### Variables CSS (globals.css)
```css
/* Light theme (défaut) */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Gradients niveaux */
--niveau-1: linear-gradient(135deg, #10b981 0%, #14b8a6 100%); /* Green */
--niveau-2: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); /* Blue */
--niveau-3: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%); /* Purple */
--niveau-4: linear-gradient(135deg, #f97316 0%, #f59e0b 100%); /* Orange */
--niveau-5: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%); /* Pink */

/* Decorative blobs */
.blob-purple { background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%); }
.blob-blue { background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%); }
```

### shadcn/ui Components
**46 composants installés** depuis le design Figma:
- Layout: Card, Separator, ScrollArea, AspectRatio
- Forms: Input, Label, Button, Checkbox, Switch, Slider, RadioGroup, Select, Textarea
- Navigation: Tabs, Menubar, NavigationMenu, ContextMenu, DropdownMenu
- Feedback: Alert, AlertDialog, Dialog, Toast, Tooltip, HoverCard, Popover
- Data: Table, Progress, Badge, Avatar, Collapsible, Accordion
- Advanced: Calendar, Carousel, Command, DatePicker, Sonner, Vaul

### Règles d'accessibilité
- ✅ Contraste WCAG AA minimum (texte dark sur fond light)
- ✅ Focus visible avec `focus:ring-purple-500`
- ✅ Composants Radix UI accessibles (ARIA native)
- ✅ Keyboard navigation complète
- ✅ Animations fluides (transition-all duration-300)

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

## 🎛️ LAYOUT GLOBAL - HEADER + SIDEBAR

### Architecture
Le layout utilise un pattern moderne avec Header sticky en haut et Sidebar fixe à gauche.

#### Technologies utilisées
- **shadcn/ui components** - Card, Button, Input, Avatar, Badge, ScrollArea
- **Lucide React** - Icônes pour navigation et actions
- **Tailwind CSS** - Styling responsive avec breakpoints
- **next-themes** - Gestion du thème light/dark

### Structure Layout
```
app/(protected)/layout.tsx
├── DashboardHeader (sticky top-0)
│   ├── Logo Pianely + icône Piano
│   ├── Search bar (desktop)
│   ├── Notifications bell
│   ├── Settings icon
│   └── Avatar + dropdown menu
└── Flex container
    ├── DashboardSidebar (fixed left, w-72)
    │   ├── Navigation principale
    │   │   ├── Dashboard
    │   │   ├── Parcours
    │   │   ├── Ma Progression
    │   │   ├── Mes Morceaux
    │   │   └── Paramètres
    │   └── Catégories (Niveaux)
    │       ├── Niveau 1 (Green)
    │       ├── Niveau 2 (Blue)
    │       ├── Niveau 3 (Purple)
    │       ├── Niveau 4 (Orange)
    │       └── Niveau 5 (Pink)
    └── Main content (flex-1, p-6)
```

### DashboardHeader
**Composant**: `components/layout/DashboardHeader.tsx`

**Fonctionnalités**:
- Logo Pianely avec icône Piano (gradient purple-blue)
- Barre de recherche: "Rechercher des leçons..."
- Icône notifications (badge compteur si nouvelles)
- Icône settings (lien vers /settings)
- Avatar utilisateur avec menu dropdown

**Responsive**:
- Desktop: Tous les éléments visibles
- Mobile: Menu hamburger + search collapsé

### DashboardSidebar
**Composant**: `components/layout/DashboardSidebar.tsx`

**Navigation items**:
```typescript
const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
  { name: 'Parcours', href: '/parcours', icon: BookOpen },
  { name: 'Ma Progression', href: '/progression', icon: TrendingUp },
  { name: 'Mes Morceaux', href: '/morceaux', icon: Music },
  { name: 'Paramètres', href: '/settings', icon: Settings },
]
```

**Catégories (Niveaux)**:
- Niveau 1: Gradient green, 5 leçons
- Niveau 2: Gradient blue, 7 leçons
- Niveau 3: Gradient purple, 8 leçons
- Niveau 4: Gradient orange, 10 leçons
- Niveau 5: Gradient pink, 12 leçons

**Responsive**:
- Desktop (>768px): Sidebar toujours visible (w-72)
- Mobile (<768px): Sidebar en overlay avec backdrop blur

### Responsive Behavior
- **Desktop (>1024px)**: Header + Sidebar fixes, main content scrollable
- **Tablet (768-1024px)**: Sidebar réduite avec icônes only ou collapsible
- **Mobile (<768px)**: Header avec menu hamburger, sidebar en overlay

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

### Sprint actuel: Refonte graphique complète (Design Figma)
**Date de début**: 2026-01-07
**Dernière mise à jour**: 2026-01-11

#### ✅ Fait (Phase 1 - Setup initial - 2026-01-07)
- [x] Documentation projet (ce fichier)
- [x] Initialisation Next.js 16.1.1 avec TypeScript
- [x] Configuration GitHub (repository créé)
- [x] Configuration Vercel (déployement automatique)
- [x] Intégration Supabase (schéma appliqué)
- [x] Page d'accueil initiale
- [x] Variables d'environnement configurées
- [x] Build production testé et validé

#### ✅ Fait (Refonte design Figma - 2026-01-11)

**Phase 1-2: Installation shadcn/ui et styles globaux**
- [x] **46 composants shadcn/ui** copiés depuis FIGMA (Card, Button, Input, Label, Switch, Tabs, etc.)
- [x] **Dépendances Radix UI** installées (29 packages)
- [x] **Autres dépendances**: class-variance-authority, clsx, tailwind-merge, sonner, vaul, cmdk, recharts
- [x] **globals.css** remplacé par le design Figma (variables CSS, gradients niveaux)
- [x] **Thème light moderne**: Gradient indigo-50 via white to purple-50

**Phase 3: Layout global (Header + Sidebar)**
- [x] **DashboardHeader** créé (logo Pianely, search, notifications, settings, avatar)
- [x] **DashboardSidebar** créé (navigation principale + catégories niveaux)
- [x] **Layout protégé** refactorisé (`app/(protected)/layout.tsx`)
- [x] **Navigation horizontale** supprimée (ancien système)
- [x] **Responsive**: Header sticky, sidebar fixe desktop / overlay mobile

**Phase 4-5: Dashboard et Pages Parcours**
- [x] **DashboardStats** créé (4 stat cards avec gradients)
- [x] **WeeklyGoals** créé (objectifs hebdomadaires avec progress bars)
- [x] **NiveauCard** créé (card de niveau avec hover effects, progress bars)
- [x] **Dashboard page** refactorisé (stats + niveaux en grid + weekly goals)
- [x] **Page /parcours** refactorisée (grid de niveaux avec filtres)
- [x] **react-grid-layout** supprimé (5 packages désinstallés)
- [x] **Anciens widgets** déplacés en backup (/tmp)

**Phase 6: Pages Niveau et Leçons**
- [x] **LeconCard** créé (card de leçon avec états locked/unlocked/completed)
- [x] **Page niveau-1** refactorisée (header + grid de leçons)
- [x] **Template niveau** créé (réutilisable pour niveaux 2-5)

**Phase 7: Pages Auth et Settings**
- [x] **Page connexion** refactorisée (Card shadcn/ui, gradient background)
- [x] **Page inscription** refactorisée (Card shadcn/ui, gradient background)
- [x] **Page settings** refactorisée (Cards avec gradients, profil, préférences)
- [x] **LoginForm** amélioré (visibilité inputs, white bg, dark text, gradient button)
- [x] **SignupForm** amélioré (visibilité inputs, white bg, dark text, gradient button)

**Phase 8: Dark Mode et Nettoyage**
- [x] **ThemeProvider** créé (wrapper next-themes)
- [x] **ThemeToggle** créé (switch fonctionnel dans settings)
- [x] **Dark mode** activé et fonctionnel
- [x] **Root layout** mis à jour (ThemeProvider + suppressHydrationWarning)
- [x] **Landing page** améliorée (visibilité textes, icônes Music2/TrendingUp/Award)
- [x] **Build final** validé (compilation sans erreurs)
- [x] **Commits et push** effectués

#### ✅ Composants créés/modifiés
**Nouveaux composants**:
- `components/ui/*` - 46 composants shadcn/ui
- `components/layout/DashboardHeader.tsx`
- `components/layout/DashboardSidebar.tsx`
- `components/dashboard/DashboardStats.tsx`
- `components/dashboard/WeeklyGoals.tsx`
- `components/parcours/NiveauCard.tsx`
- `components/parcours/LeconCard.tsx`
- `components/providers/ThemeProvider.tsx`
- `components/settings/ThemeToggle.tsx`

**Composants modifiés**:
- `app/layout.tsx` - ThemeProvider integration
- `app/page.tsx` - Landing page avec visibilité améliorée
- `app/(protected)/layout.tsx` - Nouveau layout Header + Sidebar
- `app/(protected)/dashboard/page.tsx` - Dashboard refactorisé
- `app/(protected)/parcours/page.tsx` - Page parcours refactorisée
- `app/(protected)/parcours/niveau-1/page.tsx` - Page niveau refactorisée
- `app/(protected)/settings/page.tsx` - Page settings refactorisée
- `app/(auth)/connexion/page.tsx` - Page connexion refactorisée
- `app/(auth)/inscription/page.tsx` - Page inscription refactorisée
- `components/auth/LoginForm.tsx` - Visibilité améliorée
- `components/auth/SignupForm.tsx` - Visibilité améliorée

#### 🎨 Avant/Après
**Avant (Glassmorphism dark)**:
- Design glassmorphism avec fond sombre
- Navigation horizontale custom
- Widgets draggables avec react-grid-layout
- Composants UI 100% custom
- Pas de dark mode toggle fonctionnel

**Après (Design Figma moderne)**:
- Design light moderne avec gradients purple-blue
- Layout Header + Sidebar fixe
- Grid responsive fixe (pas de drag & drop)
- 46 composants shadcn/ui + composants custom
- Dark mode fonctionnel avec toggle

#### 🚧 En cours
- [ ] **Contenu pédagogique**: Développement du contenu des leçons
- [ ] **Intégration Supabase**: Connexion réelle aux données utilisateur

#### 📋 À faire (Prochaines priorités)
Voir section "🚀 PROCHAINES ÉTAPES" ci-dessous

---

## 🚀 PROCHAINES ÉTAPES

### Phase 1: Contenu pédagogique - Niveau 1 (Priorité 1) 🎯
**Objectif**: Créer les 5 premières leçons complètes avec contenu interactif

#### Leçon 1: Anatomie du clavier
- [ ] Créer schéma interactif du clavier (88 touches)
- [ ] Animation des octaves (Do1 à Do8)
- [ ] Quiz: Identifier les notes blanches (Do, Ré, Mi, Fa, Sol, La, Si)
- [ ] Quiz: Identifier les notes noires (dièses/bémols)
- [ ] Vidéo explicative (1-2 min)
- [ ] Fiche mémo PDF téléchargeable

#### Leçon 2: Position des mains
- [ ] Vidéo position correcte des mains
- [ ] Schéma numérotation des doigts (1-5)
- [ ] Animation position assise optimale
- [ ] Exercice guidé: Placer les doigts sur Do-Mi-Sol
- [ ] Quiz validation posture

#### Leçon 3: Premier motif main droite
- [ ] Vidéo démonstration motif simple (Do-Ré-Mi-Fa-Sol)
- [ ] Schéma clavier interactif avec touches à jouer
- [ ] Mode practice: Utilisateur indique "Réussi" ou "À retravailler"
- [ ] Timer de pratique (recommandation 5 min)
- [ ] Audio de référence (piano réel)

#### Leçon 4: Premier motif main gauche
- [ ] Vidéo démonstration accord simple main gauche (Do-Sol)
- [ ] Schéma clavier main gauche
- [ ] Mode practice avec validation
- [ ] Exercice de coordination (alterner main droite / main gauche)

#### Leçon 5: Ton premier morceau complet
- [ ] Choix morceau ultra simple (ex: "Au clair de la lune" simplifié)
- [ ] Partition simplifiée (notation couleur/numéros)
- [ ] Vidéo démo complète
- [ ] Mode practice par section (4 sections de 8 temps)
- [ ] Validation finale + badge "Premier morceau" 🎉
- [ ] Message de félicitations personnalisé

**Livrables**:
- 5 pages de leçons fonctionnelles avec contenu réel
- Système de validation et progression
- 1 badge débloqué ("Premier morceau")
- Tracking Supabase (lessons completed, time spent)

---

### Phase 2: Intégration données Supabase (Priorité 2) 💾
**Objectif**: Connecter l'UI aux vraies données utilisateur

#### User Progress Tracking
- [ ] Table `user_progress`: Relier leçons complétées par user_id
- [ ] Fonction Supabase: `markLessonComplete(userId, lessonId)`
- [ ] Fonction Supabase: `getLessonProgress(userId, lessonId)`
- [ ] Dashboard: Afficher vraie progression depuis DB
- [ ] NiveauCard: Calculer progress bar depuis DB

#### Practice Logs
- [ ] Table `practice_logs`: Logger chaque session de pratique
- [ ] Fonction: `logPracticeSession(userId, lessonId, duration, success)`
- [ ] Dashboard: Stats temps de pratique depuis DB
- [ ] Weekly goals: Calculer depuis practice_logs

#### Achievements/Badges
- [ ] Table `achievements`: Définir les badges disponibles
- [ ] Table `user_achievements`: Badges débloqués par user
- [ ] Fonction: `unlockBadge(userId, badgeId)`
- [ ] BadgesWidget: Afficher badges réels depuis DB

#### Auth Flow
- [ ] Middleware: Protéger routes /dashboard, /parcours, etc.
- [ ] Redirect non-authentifiés vers /connexion
- [ ] Persist user session (Supabase Auth)
- [ ] Logout fonctionnel avec clear session

**Livrables**:
- Progression réelle persistée en DB
- Stats dashboard calculées depuis vraies données
- Auth flow complet et sécurisé
- Badges système fonctionnel

---

### Phase 3: Composants interactifs avancés (Priorité 3) 🎹
**Objectif**: Enrichir l'expérience d'apprentissage avec interactions

#### Clavier virtuel interactif
- [ ] Composant `VirtualKeyboard.tsx` (88 touches)
- [ ] Highlights des touches à jouer (couleurs)
- [ ] Click sur touches → joue note (Web Audio API)
- [ ] Mode "suivi": Highlight dynamique pendant vidéo
- [ ] Support MIDI input (détection clavier externe)

#### Video Player custom
- [ ] Composant `LessonVideoPlayer.tsx`
- [ ] Contrôles: Play/Pause, vitesse (0.5x, 0.75x, 1x, 1.25x)
- [ ] Marqueurs temporels (sections du morceau)
- [ ] Loop mode pour répéter section
- [ ] Transcription sous-titres synchronisée

#### Quiz interactifs
- [ ] Composant `QuizBlock.tsx` (multiple choice, vrai/faux)
- [ ] Feedback immédiat (correct/incorrect)
- [ ] Explication détaillée si erreur
- [ ] Score et retry option

#### Practice Timer
- [ ] Composant `PracticeTimer.tsx`
- [ ] Countdown/Timer
- [ ] Métronome intégré (BPM ajustable)
- [ ] Log automatique session dans Supabase

**Livrables**:
- Clavier virtuel fonctionnel avec audio
- Video player enrichi
- Quiz système complet
- Practice tools intégrés

---

### Phase 4: Pages manquantes (Priorité 4) 📄
**Objectif**: Compléter toutes les pages de l'app

#### Page Ma Progression
- [ ] Route `/progression`
- [ ] Graphique progression globale (chart.js ou recharts)
- [ ] Timeline des leçons complétées
- [ ] Statistiques détaillées:
  - Temps total de pratique
  - Nombre de leçons complétées
  - Streak de jours consécutifs
  - Objectifs atteints vs. manqués
- [ ] Export PDF du rapport de progression

#### Page Mes Morceaux
- [ ] Route `/morceaux`
- [ ] Liste morceaux en cours
- [ ] Liste morceaux complétés
- [ ] Filtres: Par niveau, par difficulté
- [ ] Bouton "Pratiquer" direct vers leçon
- [ ] Favoris (étoile)

#### Page Niveaux 2-5
- [ ] Pages `/parcours/niveau-2` à `/parcours/niveau-5`
- [ ] Réutiliser template niveau-1
- [ ] Adapter couleurs gradient par niveau
- [ ] Placeholder leçons (contenu à venir)

#### Page Boutique/Revendeurs (SEO)
- [ ] Route `/pianos-debutants`
- [ ] Comparatif 5-10 pianos/claviers débutants
- [ ] Liens affiliés (Amazon, Thomann, etc.)
- [ ] Guide d'achat détaillé
- [ ] FAQ SEO (schema.org markup)
- [ ] Call-to-action depuis leçons

**Livrables**:
- Page progression complète avec graphiques
- Page morceaux fonctionnelle
- 4 pages niveaux supplémentaires
- Page boutique SEO-optimisée

---

### Phase 5: Optimisations et polish (Priorité 5) ✨
**Objectif**: Améliorer performance et UX

#### Performance
- [ ] Images: Convertir en WebP, lazy loading
- [ ] Fonts: Optimiser chargement (font-display: swap)
- [ ] Code splitting: Dynamic imports pour components lourds
- [ ] Bundle analysis: Identifier et réduire large dependencies
- [ ] Lighthouse audit: Score 90+ (Performance, Accessibility, SEO)

#### SEO
- [ ] Sitemap.xml généré automatiquement
- [ ] robots.txt configuré
- [ ] Meta tags optimisées sur toutes les pages
- [ ] Schema.org markup (Organization, Course, FAQPage)
- [ ] Open Graph images pour partage social
- [ ] Blog: 3-5 articles SEO ("Comment choisir son piano", etc.)

#### UX Polish
- [ ] Loading skeletons sur toutes les pages
- [ ] Error boundaries pour composants critiques
- [ ] Toast notifications (succès, erreurs)
- [ ] Onboarding flow pour nouveaux users
- [ ] Help tooltips sur éléments complexes
- [ ] Animations page transitions (Framer Motion)

#### Mobile
- [ ] Test complet sur mobile (iOS Safari, Android Chrome)
- [ ] PWA setup (manifest.json, service worker)
- [ ] Touch gestures (swipe entre leçons)
- [ ] Responsive video player
- [ ] Clavier virtuel adapté mobile

**Livrables**:
- Performance optimisée (Lighthouse 90+)
- SEO on-page complet
- UX polie avec animations
- App mobile-ready (PWA)

---

### Phase 6: Évolutions futures (Backlog) 🔮
**À évaluer après MVP complet**

#### Détection audio (micro)
- [ ] Web Audio API: Détection notes jouées
- [ ] Feedback temps réel (note correcte/incorrecte)
- [ ] Mode "guided practice" style Flowkey
- [ ] Score de performance (précision, timing)

#### Communauté
- [ ] Forum utilisateurs (intégration Discourse ou custom)
- [ ] Partage de progrès sur réseaux sociaux
- [ ] Leaderboard (optionnel, compétition amicale)
- [ ] Commentaires sur leçons

#### Monétisation avancée
- [ ] Paywall: Niveau 2+ réservés aux abonnés
- [ ] Stripe integration: Abonnement mensuel/annuel
- [ ] Free trial 7 jours
- [ ] Coupons/codes promo

#### App mobile native
- [ ] React Native app (iOS + Android)
- [ ] Offline mode (contenu downloadable)
- [ ] Push notifications (rappels pratique)
- [ ] App Store + Google Play publication

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
**Core**:
- ✅ Next.js 16.1.1 avec TypeScript
- ✅ React 19.2.3
- ✅ Tailwind CSS 4 (styling moderne avec gradients)
- ✅ Supabase client

**UI Components (shadcn/ui)**:
- ✅ 46 composants shadcn/ui (Card, Button, Input, Label, Switch, Tabs, etc.)
- ✅ @radix-ui/* (29 packages: accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, slot, switch, tabs, toast, toggle, toggle-group, tooltip, aspect-ratio, collapsible, context-menu)
- ✅ class-variance-authority (CVA pour variants)
- ✅ clsx + tailwind-merge (gestion classes CSS)

**Forms & Validation**:
- ✅ React Hook Form (gestion formulaires)
- ✅ Zod (validation schémas)
- ✅ @hookform/resolvers (intégration Zod)

**UI/UX**:
- ✅ Lucide React (icônes)
- ✅ Framer Motion (animations)
- ✅ sonner (toast notifications)
- ✅ vaul (drawer mobile)
- ✅ cmdk (command palette)
- ✅ next-themes (dark mode)

**Data & Charts**:
- ✅ recharts (graphiques progression)
- ✅ date-fns (manipulation dates)
- ✅ react-day-picker (date picker)

**Advanced**:
- ✅ embla-carousel-react (carousel)
- ✅ input-otp (OTP inputs)

**Removed**:
- ❌ react-grid-layout (supprimé - remplacé par layout fixe)

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

**Dernière mise à jour**: 2026-01-11
**Version**: 1.0.0 (Refonte graphique complète - Design Figma avec shadcn/ui)
