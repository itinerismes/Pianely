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

## 🎨 DESIGN SYSTEM - DARK FANTASY DASHBOARD

### Principes visuels
- **Style**: Dark fantasy dashboard inspiré des sites fantasy basketball
- **Palette principale**:
  - Fond: Gradient `from-slate-900 via-slate-800 to-slate-900`
  - Cards: `bg-slate-800/50` avec backdrop-blur-sm
  - Bordures: `border-slate-700` → hover: `border-slate-600`
  - Texte: `text-white/90` (primaire), `text-gray-300` (secondaire), `text-gray-400` (tertiaire)
  - Accents: Gradients colorés par widget (emerald, sky, purple, orange, amber)
  - Ombres: `shadow-xl shadow-black/20` → hover: `shadow-2xl`
- **Typographie**: Sans-serif moderne, hiérarchie claire avec tracking-tight
- **Coins**: `rounded-xl` pour widgets, `rounded-2xl` pour header
- **Icônes**: `w-10 h-10 rounded-xl` avec gradients colorés
- **Effets**: backdrop-blur-sm pour effet glass sur fond sombre

### Variables CSS (globals.css)
```css
/* Dark theme principal */
--bg-dark: #0a0e1a;
--bg-surface: #12192e;
--bg-elevated: #1a2642;

/* Accent colors */
--accent-primary: #667eea;
--accent-secondary: #764ba2;
--accent-tertiary: #f093fb;

/* Text colors */
--text-primary: #ffffff;
--text-secondary: #b4c6e7;
--text-muted: #6b7fa8;
```

### Règles d'accessibilité
- ✅ Contraste WCAG AA minimum (texte clair sur fond sombre)
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Support clavier complet pour navigation et drag & drop
- ✅ Curseurs contextuels (move, grab, grabbing)
- ✅ Animations fluides (200ms transition-all)

### Composants de base
```
- Widget containers → bg-slate-800/50 backdrop-blur-sm avec bordures slate-700
- Boutons → Transparents avec backgrounds /20 et borders /30-50
- Icons → w-10 h-10 rounded-xl avec gradients spécifiques par widget
- Progress bars → bg-slate-700 avec gradients colorés
- Tooltips → bg-slate-900 avec border-slate-700
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
- **react-grid-layout** (ResponsiveGridLayout) - Système de grille responsive avec drag & drop
- **localStorage** - Persistence du layout personnalisé
- **Tailwind CSS** - Styling avec thème dark fantasy

### Configuration de la grille
```typescript
GRID_CONFIG = {
  columns: 12,           // Grille 12 colonnes
  rowHeight: 100px,      // Hauteur par unité de ligne
  width: 1400px,         // Largeur container
  margin: [16, 16],      // Espacement entre widgets
}
```

### Widgets disponibles (5)
1. **AujourdhuiWidget** (4×2) - Section "Aujourd'hui" avec niveau actuel
2. **ObjectifWidget** (4×2) - Objectif quotidien + progress bar + histogram 7 jours
3. **BadgesWidget** (4×2) - Grille 3×2 de badges débloqués/verrouillés avec tooltips
4. **GuideWidget** (6×3) - Guide de progression hebdomadaire avec statuts
5. **MorceauxWidget** (6×3) - Liste des morceaux en cours avec progress bars

### Layout par défaut (3×3)
```typescript
DEFAULT_LAYOUT = [
  // Rangée 1 (3 widgets de 4 colonnes chacun)
  { i: 'aujourdhui', x: 0, y: 0, w: 4, h: 2 },
  { i: 'objectif', x: 4, y: 0, w: 4, h: 2 },
  { i: 'badges', x: 8, y: 0, w: 4, h: 2 },
  // Rangée 2 (2 widgets de 6 colonnes chacun)
  { i: 'guide', x: 0, y: 2, w: 6, h: 3 },
  { i: 'morceaux', x: 6, y: 2, w: 6, h: 3 },
]
```

### Fonctionnalités drag & drop
- **Activation**: Widgets draggables par défaut (cursor: move)
- **Déplacement**: Cliquer-glisser n'importe où sur le widget pour repositionner
- **Redimensionnement**: Handles de resize visibles en bas à droite de chaque widget
- **Collision detection**: Gestion automatique par react-grid-layout
- **Placeholder**: Bordure bleue pointillée pendant le drag
- **Persistence**: Layout sauvegardé automatiquement dans localStorage
- **Reset**: Bouton "Réinitialiser" en haut à droite pour revenir au défaut

### Header Dashboard
```tsx
DASHBOARD OVERVIEW
├── Titre: "DASHBOARD OVERVIEW" (text-2xl font-bold text-white/90)
├── Sous-titre: "Bienvenue, suis ta progression musicale" (text-sm text-gray-400)
└── Bouton Reset: Avec icône RotateCcw (hover effects)
```

### Responsive
- **Desktop (>1200px)**: Grille 12 colonnes, drag & resize activés
- **Tablet (768-1200px)**: Grille 12 colonnes adaptée
- **Mobile (<768px)**: Grille réduite, comportement adapté

### Structure des fichiers
```
app/
└── page.tsx                   # Page principale avec ResponsiveGridLayout

components/widgets/
├── AujourdhuiWidget.tsx       # Widget "Aujourd'hui"
├── ObjectifWidget.tsx         # Widget objectif quotidien
├── BadgesWidget.tsx           # Widget badges
├── GuideWidget.tsx            # Widget guide progression
└── MorceauxWidget.tsx         # Widget morceaux en cours
```

### UX/UI du drag & drop
- Cursor **move** par défaut, **grab** au hover, **grabbing** pendant drag
- Widget en cours de drag : **opacity 80%**, z-index élevé
- Placeholder : bordure **dashed bleue** (rgba(14, 165, 233))
- Animations fluides : **transition 200ms ease**
- Resize handles : coins bas-droite avec **border-right/bottom**

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

### Sprint actuel: MVP - Phase 1 + Dashboard dark fantasy
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

#### ✅ Fait (Refonte dashboard dark fantasy - 2026-01-09)
- [x] **Thème dark fantasy**: Inspiré des dashboards fantasy basketball
- [x] **Background**: Gradient slate-900 via slate-800 to slate-900
- [x] **Header "DASHBOARD OVERVIEW"**: Gradient slate avec titre et bouton reset
- [x] **Layout 3×3**: Rangée 1 (3 widgets 4×2), Rangée 2 (2 widgets 6×3)
- [x] **Suppression AssistantWidget**: Réduction à 5 widgets essentiels
- [x] **AujourdhuiWidget**: Dark theme avec gradient orange/amber, niveau actuel
- [x] **ObjectifWidget**: Dark theme avec gradient emerald/teal, histogram 7 jours
- [x] **BadgesWidget**: Dark theme avec gradient purple/violet, tooltips, amber glow
- [x] **GuideWidget**: Dark theme avec gradient emerald/teal, statuts colorés
- [x] **MorceauxWidget**: Dark theme avec gradient sky/blue, progress bars
- [x] **react-grid-layout**: Système de grille responsive avec drag & drop
- [x] **localStorage persistence**: Sauvegarde automatique des positions
- [x] **Cursors contextuels**: move, grab, grabbing avec CSS
- [x] **Build validé**: Compilation sans erreurs TypeScript

#### 🚧 En cours
- [ ] **Fonctionnalités d'apprentissage**: Développement des parcours et leçons interactives

#### 📋 À faire (Prochaines priorités)
- [ ] **Niveau 1 - Découverte**: Création des 5 premières leçons
  - [ ] Leçon 1: Anatomie du clavier (notes, octaves)
  - [ ] Leçon 2: Position des mains
  - [ ] Leçon 3: Premier motif main droite
  - [ ] Leçon 4: Premier motif main gauche
  - [ ] Leçon 5: Ton premier morceau complet
- [ ] **Page /parcours**: Affichage des 5 niveaux et progression
- [ ] **Composant Leçon**: Template réutilisable pour toutes les leçons
- [ ] **Système de validation**: Tracking progression utilisateur
- [ ] **Auth flow complet**: Connexion/Inscription avec Supabase Auth
- [ ] **Tests utilisateurs**: Dashboard et première leçon

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
- ✅ Tailwind CSS 4 (styling dark fantasy dashboard)
- ✅ Supabase client
- ✅ Framer Motion (animations)
- ✅ React Hook Form + Zod (formulaires)
- ✅ Lucide React (icônes)
- ✅ react-grid-layout (drag & drop grid system)

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
**Version**: 0.3.0 (Dashboard dark fantasy 3×3 avec drag & drop)
