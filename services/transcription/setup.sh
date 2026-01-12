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

# Python 3.10+ est compatible avec Basic Pitch 0.4+
if [ "$PYTHON_MAJOR" -eq 3 ] && [ "$PYTHON_MINOR" -lt 10 ]; then
    echo ""
    echo "⚠️  WARNING: Python 3.10+ recommandé pour Basic Pitch"
    echo "Version actuelle: $PYTHON_VERSION"
    echo ""
    echo "Le script continuera mais peut échouer avec Python < 3.10"
    echo ""
fi

if [ "$PYTHON_MAJOR" -eq 3 ] && [ "$PYTHON_MINOR" -ge 10 ]; then
    echo "✓ Python $PYTHON_VERSION est compatible avec Basic Pitch 0.4+"
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
