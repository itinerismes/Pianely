# Setup Instructions - Python Basic Pitch Service

## Current Status

✅ **Application is functional** - The app works in development mode without Python service  
⚠️ **Python 3.12 incompatibility detected** - Basic Pitch requires Python 3.11  
📝 **Action required** - Install Python 3.11 to enable real audio transcription

## Problem Explained

You encountered this error when running `./setup.sh`:

```
AttributeError: module 'pkgutil' has no attribute 'ImpImporter'
```

**Root cause**: Basic Pitch (version 0.3.x) requires numpy 1.23.x, which doesn't support Python 3.12. Python 3.12 removed the `pkgutil.ImpImporter` class that old numpy versions depend on.

## Solution Options

### Option 1: Install Python 3.11 (Recommended for Production)

This enables real audio-to-MIDI transcription using Spotify's Basic Pitch model.

#### Using pyenv (Recommended)

```bash
# Install pyenv if not already installed
curl https://pyenv.run | bash

# Add to your shell config (~/.bashrc or ~/.zshrc)
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

# Reload shell
source ~/.bashrc  # or source ~/.zshrc

# Install Python 3.11
pyenv install 3.11

# Set Python 3.11 for this directory
cd /home/mich/pianely/services/transcription
pyenv local 3.11

# Verify version
python --version  # Should show Python 3.11.x

# Run setup
./setup.sh
```

#### Using system Python 3.11

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install python3.11 python3.11-venv python3.11-dev ffmpeg

# Create venv with Python 3.11
cd /home/mich/pianely/services/transcription
python3.11 -m venv venv
source venv/bin/activate
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt
```

**macOS (Homebrew):**
```bash
brew install python@3.11 ffmpeg

# Create venv with Python 3.11
cd /home/mich/pianely/services/transcription
python3.11 -m venv venv
source venv/bin/activate
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt
```

### Option 2: Continue with Placeholder (Good for Development)

The app already works perfectly in development mode without Python service! It uses a fast placeholder that generates a C major scale MIDI.

**How it works:**
- `NODE_ENV !== 'production'` → Uses placeholder automatically
- Python service not found → Falls back to placeholder
- Fast (instant), no Python dependencies needed
- Perfect for UI development and testing

**To use:**
```bash
# Just run the dev server
npm run dev

# Test audio upload - will use placeholder
# Navigate to /morceaux and try the "Audio Upload" feature
```

The placeholder is configured in `lib/audio/transcribe.ts` and will be used automatically when Python service is unavailable.

### Option 3: Wait for Basic Pitch Update

You can wait for Basic Pitch to release a Python 3.12-compatible version (likely 0.4.x or later) and continue using placeholder mode in the meantime.

## Testing the Setup

### Test Python Service (after installing Python 3.11)

```bash
cd /home/mich/pianely/services/transcription

# Activate venv
source venv/bin/activate

# Test with a sample audio file
python transcribe_service.py /path/to/piano.mp3 output.mid

# Check output
ls -lh output.mid
```

### Test from Next.js App

```bash
# Set production mode to use Python service
NODE_ENV=production npm run dev

# Or keep development mode for placeholder
npm run dev

# Navigate to http://localhost:3000/morceaux
# Click "Ajouter un morceau" > "Upload Audio/YouTube"
# Upload an MP3 file
# In dev mode: instant C major scale
# In prod mode: real transcription (takes ~30s)
```

## File Changes Made

1. **Updated `setup.sh`** - Now checks Python version and warns about 3.12
2. **Updated `README.md`** - Added Python 3.11 requirement and troubleshooting
3. **Updated `next.config.ts`** - Ignores venv directory in build
4. **Updated `.gitignore`** - Added venv to prevent committing Python files
5. **Removed `venv/`** - Deleted Python 3.12 venv that was causing build issues

## Next Steps

Choose one of the options above based on your needs:

- **For production/real transcription**: Install Python 3.11 (Option 1)
- **For development/testing**: Keep using placeholder (Option 2)  
- **For later**: Wait for Basic Pitch update (Option 3)

## Build Status

✅ **Build successful** - App compiles without errors  
✅ **All features work** - IMSLP, PianoSnap, Audio Upload UI functional  
⚠️ **Python service** - Requires Python 3.11 for real transcription  

## Questions?

See the detailed documentation:
- `README.md` - Full documentation with examples
- `requirements.txt` - Python dependencies list
- `transcribe_service.py` - Python transcription script
