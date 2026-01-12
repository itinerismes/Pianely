# 🎹 Visualisation Notes Tombantes - Type Synthesia

## Concept

Au lieu d'afficher une partition classique traditionnelle (que tu ne sais pas lire), le système affiche maintenant les notes qui **descendent du haut vers le bas** comme dans Synthesia ou Piano Tiles.

C'est **100% visuel et intuitif** - pas besoin de savoir lire une partition !

## Comment Ça Marche

### 1. Les Notes Tombent

```
┌─────────────────────┐
│    Note future      │ ← Notes à venir (bleu/violet)
│         ↓           │
│         ↓           │
│    Note active      │ ← Note proche (vert brillant)
│─────────────────────│ ← Barre de frappe (ligne verte)
│   PIANO VIRTUEL     │
└─────────────────────┘
```

### 2. Guidage Visuel

- **Notes bleues** : Touches blanches à venir
- **Notes violettes** : Touches noires (dièse/bémol) à venir
- **Notes vertes** : Notes actives (proche de la barre de frappe)
- **Effet de lueur** : Quand la note est prête à être jouée
- **Nom de la note** : Affiché sur les notes actives (C4, D#5, etc.)

### 3. Synchronisation Piano

Quand une note atteint la barre verte :
1. Elle s'illumine en vert brillant
2. Le son est joué automatiquement
3. La touche du piano virtuel s'illumine
4. Tu vois exactement quelle touche presser

## Fonctionnalités

### ✅ Ce Qui Fonctionne

- **Lecture automatique** : Les notes tombent et le son est joué
- **Guidage visuel** : Tu vois 3 secondes à l'avance les notes qui arrivent
- **Piano synchronisé** : Les touches s'illuminent au bon moment
- **Contrôles complets** :
  - Play/Pause
  - Reset (recommencer)
  - Contrôle du tempo (60-180 BPM)
  - Barre de progression avec temps écoulé
- **Compatible avec toutes les sources** :
  - IMSLP (morceaux classiques)
  - Upload audio → MIDI
  - YouTube → MIDI
  - Upload MIDI direct

### 🎯 Zones d'Affichage

Le visualiseur affiche **3 octaves** (du Do3 au Si5) :
- C3 (48) → B5 (83)
- 36 touches = 3 octaves complètes
- Idéal pour la plupart des morceaux de piano

Les notes hors de cette plage sont quand même affichées (extrapolées).

### ⚙️ Configuration

Dans `FallingNotesVisualizer.tsx` :

```typescript
const config = {
  lookAheadTime: 3,      // Secondes visibles à l'avance
  hitLineY: 500,         // Position de la barre (pixels du bas)
  noteSpeed: 166.67,     // Vitesse de chute (pixels/sec)
  keyWidth: 30,          // Largeur d'une touche
  startOctave: 3,        // Octave de départ (C3)
  octaveCount: 3,        // Nombre d'octaves affichées
}
```

Tu peux ajuster :
- `lookAheadTime` : Plus haut = voir plus loin à l'avance
- `noteSpeed` : Plus rapide = notes tombent plus vite
- `keyWidth` : Plus large = plus facile à voir

## Comparaison Avant/Après

### ❌ Avant (Partition Classique)

```
╔══════════════════╗
║  ♪  ♫  ♪  ♫     ║  ← Incompréhensible si tu ne sais
║ ─────────────── ║     pas lire les notes
║  ♪     ♫  ♪     ║
╚══════════════════╝
```

### ✅ Maintenant (Notes Tombantes)

```
┌──────────────────┐
│   🔵 🟣 🔵       │  ← Notes qui descendent
│      ↓  ↓  ↓     │     (visuellement intuitif)
│   🟢 🟢 🟢       │  ← Notes actives
├──────────────────┤
│ PIANO VIRTUEL 🎹 │  ← Touches qui s'illuminent
└──────────────────┘
```

## Utilisation

### 1. Importer un Morceau

```
Page /morceaux → "Ajouter un morceau"

Options :
- IMSLP (partitions classiques gratuites)
- Upload Audio (MP3, WAV, etc.)
- YouTube (coller URL)
```

### 2. Ouvrir le Morceau

```
Cliquer sur un morceau → Page de lecture
```

### 3. Jouer

```
1. Cliquer sur "Lecture" ▶️
2. Regarder les notes descendre
3. Le piano joue automatiquement
4. Observer quelle touche s'illumine
```

### 4. Pratiquer (À Venir)

```
Mode pratique (future feature) :
- Son coupé
- Toi qui joues les notes
- Feedback si tu joues juste/faux
- Score basé sur la précision
```

## Architecture Technique

### Composants

```
PiecePlayer.tsx
├── FallingNotesVisualizer.tsx   ← Canvas avec animation
│   └── Dessine les notes qui tombent
│
├── Piano.tsx                     ← Piano virtuel
│   └── Illumine les touches
│
└── Contrôles
    ├── Play/Pause/Reset
    ├── Barre de progression
    └── Contrôle tempo
```

### Flux de Données

```
1. Charger MIDI → Parser notes
   ↓
2. Trier par temps
   ↓
3. currentTime mis à jour (60fps)
   ↓
4. Canvas redessine notes basé sur currentTime
   ↓
5. Notes actives → Jouer son + Illuminer piano
```

### Performance

- **Canvas 2D** : Dessin haute performance
- **60 FPS** : Animation fluide via requestAnimationFrame
- **Pas de lag** : Optimisé pour 1000+ notes

## Avantages pour Ton Concept

### 🎯 Apprendre Sans Savoir Lire

- Pas besoin de comprendre ♪ ♫ ♬
- Guidage visuel intuitif
- Tu vois exactement quelle touche jouer
- Apprentissage par répétition visuelle

### 🚀 Motivation

- C'est fun comme un jeu vidéo
- Effet satisfaisant quand tu joues juste
- Progression visible
- Gamification possible (score, combo, etc.)

### 📈 Évolution Possible

**Phase 1** (Actuel) : Lecture automatique
- Les notes tombent
- Le son joue automatiquement
- Tu observes et mémorises

**Phase 2** (À venir) : Mode pratique
- Son coupé
- Détection MIDI (clavier connecté)
- Feedback en temps réel
- Score basé sur la précision

**Phase 3** (Futur) : Gamification
- Système de points
- Combo (notes consécutives justes)
- Achievements
- Mode "challenge" avec difficulté croissante

## Fichiers Créés/Modifiés

### Nouveaux Fichiers

- `components/sheet-music/FallingNotesVisualizer.tsx` - Canvas avec notes tombantes

### Fichiers Modifiés

- `components/morceaux/PiecePlayer.tsx` - Intégration du visualiseur
  - Ajout de `currentTime` state
  - Système de timing avec requestAnimationFrame
  - Affichage temps écoulé / durée totale

### Fichiers Supprimés (Concept)

- `SheetMusicViewer.tsx` - Toujours présent mais plus utilisé
  - Affichait partition classique avec OpenSheetMusicDisplay
  - Remplacé par FallingNotesVisualizer

## Prochaine Étape : Convertisseur PDF

Maintenant qu'on a la visualisation parfaite, on va implémenter le **convertisseur PDF → MIDI** pour que tu puisses :

1. Télécharger un PDF depuis PianoSnap.com
2. Le système lit le PDF (OCR musical avec Audiveris)
3. Convertit en MIDI
4. Affiche avec les notes tombantes !

Tout ce que tu télécharges sera lisible sans connaître le solfège ! 🎹✨
