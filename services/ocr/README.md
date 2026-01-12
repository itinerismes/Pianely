# Service OCR Musical - PDF → MIDI

Ce service convertit des partitions musicales PDF en fichiers MIDI jouables, en utilisant l'OCR musical (Optical Music Recognition).

## Comment Ça Marche

```
PDF Partition → Audiveris (OCR) → MusicXML → music21 → MIDI → Notes Tombantes 🎹
```

**Workflow utilisateur** :
1. Télécharge une partition PDF depuis PianoSnap.com (ou autre)
2. Upload le PDF dans Pianely
3. ✨ Magie automatique : Le système lit la partition et convertit en MIDI
4. Les notes tombent sur le piano virtuel !

## Technologies

- **Audiveris** - OCR musical open-source (Java)
  - Lit les partitions PDF/images
  - Détecte notes, clés, mesures, temps
  - Export en MusicXML

- **music21** - Bibliothèque Python de notation musicale
  - Convertit MusicXML en MIDI
  - Manipulation avancée de partitions

## Installation

### Prérequis

- **Java 17+** (requis pour Audiveris)
- **Python 3.11+**
- **Internet** (pour télécharger Audiveris)

### Ubuntu/Debian

```bash
sudo apt update
sudo apt install openjdk-17-jre python3 python3-venv
```

### macOS

```bash
brew install openjdk@17 python@3.11
```

### Setup Automatique

```bash
cd services/ocr
./setup-ocr.sh
```

Le script va :
1. Vérifier Java et Python
2. Créer un environnement virtuel Python
3. Installer music21 et dépendances
4. Télécharger Audiveris depuis GitHub
5. Tester l'installation

## Utilisation

### En Ligne de Commande

```bash
# Activer l'environnement virtuel
source services/ocr/venv/bin/activate

# Convertir une partition
python services/ocr/pdf_to_midi.py partition.pdf output.mid
```

### Depuis l'Application

L'API Next.js utilise ce service automatiquement :

```
Page /morceaux → "Ajouter un morceau" → Onglet "Partition PDF"
```

1. Remplir titre et compositeur
2. Upload le PDF
3. Attendre 1-3 minutes (OCR + conversion)
4. Le morceau apparaît avec notes tombantes !

## Performance & Précision

### Temps de Conversion

- **Partition simple** (1-2 pages) : 30-60 secondes
- **Partition moyenne** (3-5 pages) : 1-2 minutes
- **Partition complexe** (5+ pages, dense) : 2-3 minutes

### Précision

Audiveris fonctionne mieux avec :
- ✅ Partitions imprimées propres
- ✅ PDF haute résolution
- ✅ Notation standard
- ✅ Bon contraste noir/blanc

Difficultés avec :
- ❌ Partitions manuscrites
- ❌ PDF de mauvaise qualité
- ❌ Notations non-standard
- ❌ Partitions très complexes (20+ voix)

**Précision moyenne** : 85-95% pour partitions standard

## Architecture

```
┌───────────────┐
│ Next.js API   │
│ /api/upload-  │
│    pdf        │
└───────┬───────┘
        │
        v
┌───────────────┐    exec    ┌──────────────┐
│ pdf_to_midi   ├───────────> │ Audiveris    │
│ .py           │             │ (Java JAR)   │
└───────┬───────┘             └──────┬───────┘
        │                            │
        │                            v
        │                     ┌──────────────┐
        │                     │  MusicXML    │
        │                     └──────┬───────┘
        v                            │
┌───────────────┐                   │
│  music21      │ <─────────────────┘
│  (Python)     │
└───────┬───────┘
        │
        v
┌───────────────┐
│  MIDI Output  │ → Notes Tombantes
└───────────────┘
```

## Dépannage

### "Java n'est pas installé"

```bash
# Ubuntu/Debian
sudo apt install openjdk-17-jre

# macOS
brew install openjdk@17

# Vérifier
java -version
```

### "Audiveris non installé"

```bash
cd services/ocr
./setup-ocr.sh
```

Si le téléchargement échoue, télécharge manuellement :
https://github.com/Audiveris/audiveris/releases/latest

Extrais dans `services/ocr/audiveris/`

### "Erreur OCR : timeout"

Le PDF est trop complexe. Options :
1. Simplifier la partition (moins de pages)
2. Augmenter le timeout dans `app/api/upload-pdf/route.ts` (ligne timeout: 180000)
3. Découper le PDF en plusieurs parties

### "OCR service not installed"

L'API ne trouve pas le script Python. Vérifie :
```bash
ls services/ocr/pdf_to_midi.py
ls services/ocr/audiveris/audiveris.jar
```

Si manquant, relance `./setup-ocr.sh`

### "MIDI file was not created"

Audiveris n'a pas réussi à lire le PDF. Causes possibles :
- PDF corrompu ou protégé
- Pas de partition musicale dans le PDF
- Format non supporté (partition manuscrite, etc.)

**Solution** : Essaye avec un autre PDF ou utilise l'upload audio/YouTube à la place.

## Alternatives

Si l'OCR ne fonctionne pas bien :

### 1. Upload Audio + YouTube

Le plus fiable - utilise Basic Pitch pour transcription audio :
```
Audio/YouTube → Basic Pitch → MIDI → Notes Tombantes
```

Précision : 90-95% pour piano solo

### 2. Services OCR Commerciaux

- **SmartScore Cloud** - API payante, très précis
- **ScoreCloud** - Reconnaissance automatique avancée
- **PhotoScore** - Desktop app professionnelle

### 3. Chercher le MIDI Directement

Sites avec MIDI gratuits :
- MuseScore.com (partitions + MIDI)
- IMSLP (classique uniquement)
- BitMidi
- FreeMIDI

## Limitations

### Ce Qui Fonctionne

- ✅ Piano solo/duo
- ✅ Partitions imprimées standard
- ✅ PDF haute qualité
- ✅ Notation classique

### Ce Qui Ne Fonctionne PAS (ou mal)

- ❌ Partitions manuscrites
- ❌ PDFs protégés/chiffrés
- ❌ Images floues/basse résolution
- ❌ Tablatures guitare
- ❌ Partitions d'orchestre (20+ voix)
- ❌ Notations modernes/expérimentales

## Améliorations Futures

- [ ] Support multi-pages amélioré
- [ ] Prévisualisation du MusicXML avant conversion
- [ ] Édition manuelle des erreurs OCR
- [ ] Détection automatique de tempo
- [ ] Support tablatures
- [ ] OCR manuscrit avec deep learning (oemer)

## Ressources

- **Audiveris GitHub** : https://github.com/Audiveris/audiveris
- **music21 Docs** : https://web.mit.edu/music21/
- **PianoSnap** : https://pianosnap.com/ (téléchargement de partitions)
- **IMSLP** : https://imslp.org/ (partitions classiques gratuites)

## Support

Pour toute question, ouvre une issue GitHub ou contacte le support.

Happy playing! 🎹✨
