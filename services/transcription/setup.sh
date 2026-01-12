#!/bin/bash
# Setup script for Python Basic Pitch transcription service

echo "🎹 Setting up Python Basic Pitch transcription service..."

# Check Python version
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed"
    exit 1
fi

PYTHON_VERSION=$(python3 --version 2>&1 | awk '{print $2}')
PYTHON_MAJOR=$(echo $PYTHON_VERSION | cut -d. -f1)
PYTHON_MINOR=$(echo $PYTHON_VERSION | cut -d. -f2)

echo "Python version: $PYTHON_VERSION"

# Check if Python version is compatible
if [ "$PYTHON_MAJOR" -eq 3 ] && [ "$PYTHON_MINOR" -ge 12 ]; then
    echo ""
    echo "⚠️  WARNING: Python 3.12+ detected!"
    echo "Basic Pitch (0.3.x) requires numpy 1.23.x which is incompatible with Python 3.12"
    echo ""
    echo "Please use Python 3.11 instead:"
    echo "  1. Install Python 3.11: https://www.python.org/downloads/"
    echo "  2. Use pyenv to manage versions: pyenv install 3.11"
    echo "  3. Or create venv with: python3.11 -m venv venv"
    echo ""
    echo "Alternatively, the app will use placeholder transcription (C major scale) in dev mode."
    echo ""
    read -p "Continue anyway (will likely fail)? [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Clean up old venv if exists
if [ -d "venv" ]; then
    echo "🧹 Removing old virtual environment..."
    rm -rf venv
fi

# Create virtual environment
echo "📦 Creating virtual environment..."
python3 -m venv venv

# Activate virtual environment
echo "🔄 Activating virtual environment..."
source venv/bin/activate

# Upgrade pip and install setuptools/wheel first
echo "⬆️  Upgrading pip and installing build tools..."
pip install --upgrade pip setuptools wheel

# Install dependencies
echo "📥 Installing dependencies (this may take a few minutes)..."
pip install -r requirements.txt

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "To test the transcription service:"
    echo "  source services/transcription/venv/bin/activate"
    echo "  python services/transcription/transcribe_service.py test.mp3 output.mid"
    echo ""
    echo "The Node.js API will automatically use this when NODE_ENV=production"
else
    echo ""
    echo "❌ Installation failed. See errors above."
    exit 1
fi
