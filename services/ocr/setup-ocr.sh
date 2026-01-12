#!/bin/bash
# Setup script pour OCR Musical (Audiveris + music21)

echo "🎼 Setting up PDF to MIDI conversion service..."
echo ""

# Vérifier Java
if ! command -v java &> /dev/null; then
    echo "❌ Java n'est pas installé !"
    echo ""
    echo "Audiveris 5.9+ nécessite Java 21. Installez-le :"
    echo ""
    echo "Ubuntu/Debian:"
    echo "  sudo apt update"
    echo "  sudo apt install openjdk-21-jre"
    echo ""
    echo "macOS (Homebrew):"
    echo "  brew install openjdk@21"
    echo ""
    exit 1
fi

JAVA_VERSION=$(java -version 2>&1 | grep -oP 'version "?(1\.)?\K\d+' | head -1)
echo "✓ Java version: $JAVA_VERSION"

if [ "$JAVA_VERSION" -lt 17 ]; then
    echo "❌ Audiveris 5.9 nécessite Java 17+ (Java 21 recommandé)"
    echo "   Version actuelle: $JAVA_VERSION"
    echo ""
    echo "Installez Java 21 :"
    echo "  sudo apt install openjdk-21-jre"
    exit 1
fi

# Vérifier Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 requis"
    exit 1
fi

PYTHON_VERSION=$(python3 --version 2>&1 | awk '{print $2}')
PYTHON_MAJOR=$(echo $PYTHON_VERSION | cut -d. -f1)
PYTHON_MINOR=$(echo $PYTHON_VERSION | cut -d. -f2)

echo "✓ Python version: $PYTHON_VERSION"

# Python 3.10+ est OK pour music21
if [ "$PYTHON_MAJOR" -eq 3 ] && [ "$PYTHON_MINOR" -lt 10 ]; then
    echo "⚠️  music21 fonctionne mieux avec Python 3.10+"
    echo "   Version actuelle: $PYTHON_VERSION"
    echo "   Le script continuera quand même..."
fi

# Créer environnement virtuel
echo ""
echo "📦 Création de l'environnement virtuel Python..."

# Clean old venv
if [ -d "venv" ]; then
    echo "🧹 Suppression de l'ancien venv..."
    rm -rf venv
fi

python3 -m venv venv
source venv/bin/activate

# Installer dépendances Python
echo "📥 Installation des dépendances Python..."
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt

# Télécharger Audiveris
echo ""
echo "📥 Téléchargement d'Audiveris..."

AUDIVERIS_VERSION="5.9"
# Lien direct vers le JAR (plus simple que le ZIP)
AUDIVERIS_URL="https://github.com/Audiveris/audiveris/releases/download/v${AUDIVERIS_VERSION}/Audiveris.jar"
AUDIVERIS_DIR="audiveris"

mkdir -p "$AUDIVERIS_DIR"

if [ -f "$AUDIVERIS_DIR/audiveris.jar" ]; then
    echo "✓ Audiveris déjà téléchargé"
else
    echo "   Téléchargement Audiveris ${AUDIVERIS_VERSION} depuis GitHub..."
    echo "   URL: $AUDIVERIS_URL"

    # Télécharger directement le JAR
    curl -L "$AUDIVERIS_URL" -o "$AUDIVERIS_DIR/audiveris.jar"

    if [ $? -ne 0 ]; then
        echo "❌ Échec du téléchargement d'Audiveris"
        echo ""
        echo "Solutions :"
        echo "1. Téléchargez manuellement depuis :"
        echo "   https://github.com/Audiveris/audiveris/releases/tag/v${AUDIVERIS_VERSION}"
        echo ""
        echo "2. Placez le fichier Audiveris.jar dans :"
        echo "   services/ocr/audiveris/audiveris.jar"
        echo ""
        echo "3. Ou utilisez wget si curl ne marche pas :"
        echo "   wget $AUDIVERIS_URL -O $AUDIVERIS_DIR/audiveris.jar"
        echo ""
        exit 1
    fi

    echo "✓ Audiveris ${AUDIVERIS_VERSION} installé : $AUDIVERIS_DIR/audiveris.jar"
fi

# Tester l'installation
echo ""
echo "🧪 Test de l'installation..."

# Test Java
java -version > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✓ Java OK"
else
    echo "❌ Java non fonctionnel"
    exit 1
fi

# Test Audiveris
java -jar "$AUDIVERIS_DIR/audiveris.jar" -help > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✓ Audiveris OK"
else
    echo "⚠️  Audiveris warning (normal si première exécution)"
fi

# Test music21
python3 -c "import music21; print('✓ music21 OK')" 2>/dev/null

echo ""
echo "✅ Installation terminée !"
echo ""
echo "Pour tester :"
echo "  source services/ocr/venv/bin/activate"
echo "  python services/ocr/pdf_to_midi.py input.pdf output.mid"
echo ""
echo "L'API Next.js utilisera ce service automatiquement."
