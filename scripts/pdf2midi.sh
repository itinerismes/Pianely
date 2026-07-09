#!/bin/bash
# ─────────────────────────────────────────────────────────────────
# Partition PDF → fichier MIDI, 100 % local (Audiveris + music21).
#
# Usage : ./scripts/pdf2midi.sh partition.pdf [sortie.mid]
# Sortie par défaut : ~/partitions-midi/<nom>.mid
# Ensuite : Pianely → Ajouter un morceau → dépose le .mid
# ─────────────────────────────────────────────────────────────────
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage : $0 partition.pdf [sortie.mid]"; exit 1
fi

PDF="$(realpath "$1")"
NAME="$(basename "${PDF%.pdf}")"
OUT="${2:-$HOME/partitions-midi/$NAME.mid}"
OUT="$(realpath -m "$OUT")"
mkdir -p "$(dirname "$OUT")"

DIR="$(cd "$(dirname "$0")/.." && pwd)"
AUD="$DIR/services/ocr/audiveris/run-audiveris.sh"
PY="$DIR/services/ocr/venv/bin/python"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "🎼 1/2 OCR de la partition (Audiveris) — 1 à 3 min selon le nombre de pages…"
bash "$AUD" -batch -transcribe -output "$WORK" "$PDF" > "$WORK/audiveris.log" 2>&1 || true
OMR="$(find "$WORK" -name '*.omr' | head -1 || true)"
if [ -z "$OMR" ]; then
  cp "$WORK/audiveris.log" /tmp/pdf2midi-echec.log 2>/dev/null || true
  echo "❌ Échec OCR (partition scannée floue ?) — log : /tmp/pdf2midi-echec.log"
  exit 1
fi
bash "$AUD" -batch -export -output "$WORK" "$OMR" >> "$WORK/audiveris.log" 2>&1 || true
MXL="$(find "$WORK" -name '*.mxl' | head -1 || true)"
if [ -z "$MXL" ]; then
  cp "$WORK/audiveris.log" /tmp/pdf2midi-echec.log 2>/dev/null || true
  echo "❌ Échec de l'export MusicXML — log : /tmp/pdf2midi-echec.log"
  exit 1
fi

echo "🎵 2/2 MusicXML → MIDI (music21)…"
"$PY" - "$MXL" "$OUT" <<'PYEOF'
import sys
from music21 import converter
score = converter.parse(sys.argv[1])
score.write('midi', fp=sys.argv[2])
print(f"   {len(score.flatten().notes)} notes/accords extraits")
PYEOF

echo ""
echo "✅ Fichier prêt : $OUT"
echo "   → Pianely : « Ajouter un morceau » → dépose ce fichier"
