#!/bin/bash
# Setup script pour OCR Musical (Audiveris + music21)

echo "🎼 Setting up PDF to MIDI conversion service..."
echo ""

# Vérifier Java
if ! command -v java &> /dev/null; then
    echo "❌ Java n'est pas installé !"
    echo ""
    echo "Audiveris nécessite Java 17+. Installez-le :"
    echo ""
    echo "Ubuntu/Debian:"
    echo "  sudo apt update"
    echo "  sudo apt install openjdk-17-jre"
    echo ""
    echo "macOS (Homebrew):"
    echo "  brew install openjdk@17"
    echo ""
    exit 1
fi

JAVA_VERSION=$(java -version 2>&1 | grep -oP 'version "?(1\.)?\K\d+' | head -1)
echo "✓ Java version: $JAVA_VERSION"

if [ "$JAVA_VERSION" -lt 11 ]; then
    echo "⚠️  Audiveris nécessite Java 11+ (Java 17 recommandé)"
    echo "   Version actuelle: $JAVA_VERSION"
fi

# Vérifier Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 requis"
    exit 1
fi

PYTHON_VERSION=$(python3 --version 2>&1 | awk '{print $2}')
echo "✓ Python version: $PYTHON_VERSION"

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

AUDIVERIS_VERSION="5.3.1"
AUDIVERIS_URL="https://github.com/Audiveris/audiveris/releases/download/$AUDIVERIS_VERSION/Audiveris-$AUDIVERIS_VERSION.zip"
AUDIVERIS_DIR="audiveris"

mkdir -p "$AUDIVERIS_DIR"

if [ -f "$AUDIVERIS_DIR/audiveris.jar" ]; then
    echo "✓ Audiveris déjà téléchargé"
else
    echo "   Téléchargement depuis GitHub..."

    # Télécharger
    curl -L "$AUDIVERIS_URL" -o audiveris.zip

    if [ $? -ne 0 ]; then
        echo "❌ Échec du téléchargement d'Audiveris"
        echo ""
        echo "Téléchargez manuellement depuis :"
        echo "$AUDIVERIS_URL"
        echo ""
        echo "Puis extrayez dans services/ocr/audiveris/"
        exit 1
    fi

    # Extraire
    echo "   Extraction..."
    unzip -q audiveris.zip -d "$AUDIVERIS_DIR"

    # Trouver le JAR
    JAR_PATH=$(find "$AUDIVERIS_DIR" -name "Audiveris*.jar" | head -1)

    if [ -z "$JAR_PATH" ]; then
        echo "❌ JAR Audiveris introuvable après extraction"
        exit 1
    fi

    # Renommer pour simplicité
    mv "$JAR_PATH" "$AUDIVERIS_DIR/audiveris.jar"

    # Nettoyer
    rm audiveris.zip

    echo "✓ Audiveris installé : $AUDIVERIS_DIR/audiveris.jar"
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
