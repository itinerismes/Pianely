# Python Basic Pitch Transcription Service

Service de transcription audio → MIDI utilisant Basic Pitch de Spotify.

## Installation

### 1. Prérequis

- **Python 3.11** (IMPORTANT: Ne pas utiliser Python 3.12+)
- pip
- FFmpeg (pour conversion audio)

⚠️ **Attention**: Basic Pitch 0.3.x nécessite numpy 1.23.x qui est incompatible avec Python 3.12+. Utilisez Python 3.11 pour éviter l'erreur `AttributeError: module 'pkgutil' has no attribute 'ImpImporter'`.

### 2. Installer Python 3.11 (si nécessaire)

**Avec pyenv (recommandé):**
```bash
# Installer pyenv si pas déjà installé
curl https://pyenv.run | bash

# Installer Python 3.11
pyenv install 3.11

# Définir Python 3.11 pour ce répertoire
cd services/transcription
pyenv local 3.11
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install python3.11 python3.11-venv python3.11-dev ffmpeg
```

**macOS (Homebrew):**
```bash
brew install python@3.11 ffmpeg
```

### 3. Créer un environnement virtuel

**Option A: Utiliser le script automatique (recommandé)**
```bash
cd services/transcription
./setup.sh
```

**Option B: Installation manuelle**
```bash
cd services/transcription
python3.11 -m venv venv  # Utilisez python3.11 explicitement
source venv/bin/activate  # Sur Linux/Mac
# ou
venv\Scripts\activate  # Sur Windows

pip install --upgrade pip setuptools wheel
pip install -r requirements.txt
```

Le téléchargement initial peut prendre du temps car Basic Pitch téléchargera le modèle (~40MB).

## Utilisation

### En ligne de commande

```bash
python transcribe_service.py input.mp3 output.mid
```

### Depuis Node.js

```javascript
const { exec } = require('child_process')

exec(
  `python services/transcription/transcribe_service.py ${inputPath} ${outputPath}`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Transcription error: ${error}`)
      return
    }
    console.log(stdout)
  }
)
```

## Performances

- **Vitesse**: ~10x temps réel (fichier de 3min = ~30s de transcription)
- **Qualité**: Excellente pour piano solo, bonne pour instruments mélodiques
- **Limitations**: Moins précis pour polyphonie complexe ou percussion

## Formats supportés

- **Input**: MP3, WAV, M4A, OGG, FLAC
- **Output**: MIDI (Standard MIDI File format)

## Paramètres ajustables

Dans `transcribe_service.py`, vous pouvez modifier:

- `onset_threshold`: Sensibilité de détection de note (0.3-0.7)
- `frame_threshold`: Seuil de confiance (0.1-0.5)
- `minimum_note_length`: Durée minimale des notes en ms
- `melodia_trick`: Améliore transcription pour voix/mélodie simple

## Troubleshooting

### ❌ "AttributeError: module 'pkgutil' has no attribute 'ImpImporter'"

**Cause**: Python 3.12+ est incompatible avec numpy 1.23.x requis par Basic Pitch 0.3.x

**Solution**:
1. Installer Python 3.11 (voir section 2 ci-dessus)
2. Créer le venv avec `python3.11 -m venv venv`
3. Relancer `./setup.sh`

**Alternative**: Utiliser le mode placeholder en développement (pas besoin de Python service)

### ❌ "Cannot import 'setuptools.build_meta'"

**Cause**: setuptools manquant dans l'environnement virtuel

**Solution**: Le script `setup.sh` mis à jour installe désormais setuptools/wheel automatiquement. Si problème persiste:
```bash
source venv/bin/activate
pip install --upgrade pip setuptools wheel
```

### "ModuleNotFoundError: No module named 'basic_pitch'"

```bash
pip install -r requirements.txt
```

### Modèle ne se télécharge pas

Téléchargez manuellement depuis:
https://github.com/spotify/basic-pitch/releases

### Performances lentes

- Utilisez un GPU si disponible (installer `tensorflow-gpu`)
- Réduisez la longueur de l'audio
- Augmentez `minimum_note_length`

## Mode Développement Sans Python Service

L'application fonctionne parfaitement en mode développement sans le service Python installé. Le module `lib/audio/transcribe.ts` utilise automatiquement un mode placeholder qui génère instantanément un fichier MIDI de gamme de Do majeur.

**Avantages du mode placeholder**:
- Installation instantanée (pas de dépendances Python)
- Tests UI rapides
- Pas de contrainte de version Python
- Idéal pour développement interface

**Activation**:
- Automatique si `NODE_ENV !== 'production'`
- Automatique si le service Python n'est pas trouvé
- Manuel via `transcribeAudioToMIDI(path, false)`

**Migration vers production**: Une fois Python 3.11 installé et service configuré, définir `NODE_ENV=production` active automatiquement la vraie transcription.

## Alternatives

Si Basic Pitch est insuffisant:

1. **Omnizart**: Meilleur pour piano polyphonique complexe
2. **MT3 (Music Transformer)**: Dernière tech Google, très précis
3. **APIs commerciales**: AnthemScore, AudioToMIDI
4. **TensorFlow.js Basic Pitch**: Version JavaScript (évite Python, mais performances moindres)
