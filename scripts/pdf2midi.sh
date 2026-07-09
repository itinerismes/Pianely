#!/bin/bash
# ─────────────────────────────────────────────────────────────────
# Partition PDF → fichier MIDI, 100 % local (Audiveris + music21).
#
# Mode batch (recommandé) :
#   cd ~/pianely && ./scripts/pdf2midi.sh
#   → convertit tous les PDF de Sons/pdf/ vers Sons/midi/
#     (les PDF déjà convertis sont sautés)
#
# Mode fichier unique :
#   ./scripts/pdf2midi.sh partition.pdf [sortie.mid]
#
# Ensuite : Pianely → « Ajouter un morceau » → dépose le .mid
# ─────────────────────────────────────────────────────────────────
set -uo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)"
AUD="$DIR/services/ocr/audiveris/run-audiveris.sh"
PY="$DIR/services/ocr/venv/bin/python"
PDF_DIR="$DIR/Sons/pdf"
MIDI_DIR="$DIR/Sons/midi"

convert_one() {
  local pdf="$1" out="$2"
  local name; name="$(basename "$pdf")"
  local work; work="$(mktemp -d)"

  echo "🎼 $name"
  echo "   1/2 OCR de la partition (Audiveris, 1-3 min)…"
  # 400 DPI : identique sur les PDF vectoriels, bien meilleur sur les scans
  bash "$AUD" -batch \
    -option org.audiveris.omr.image.ImageLoading.pdfDpi=400 \
    -transcribe -output "$work" "$pdf" > "$work/audiveris.log" 2>&1

  local omr; omr="$(find "$work" -name '*.omr' | head -1)"
  if [ -z "$omr" ]; then
    cp "$work/audiveris.log" /tmp/pdf2midi-echec.log
    echo "   ❌ Échec OCR — log : /tmp/pdf2midi-echec.log"
    rm -rf "$work"; return 1
  fi

  bash "$AUD" -batch -export -output "$work" "$omr" >> "$work/audiveris.log" 2>&1
  local mxl; mxl="$(find "$work" -name '*.mxl' | head -1)"
  if [ -z "$mxl" ]; then
    cp "$work/audiveris.log" /tmp/pdf2midi-echec.log
    echo "   ❌ Échec export MusicXML — log : /tmp/pdf2midi-echec.log"
    rm -rf "$work"; return 1
  fi

  echo "   2/2 Nettoyage musical + MIDI (music21)…"
  "$PY" - "$mxl" "$out" <<'PYEOF'
import sys
from music21 import converter

score = converter.parse(sys.argv[1])

# Reprises : suivre les barres de reprise détectées (fidélité musicale)
try:
    expanded = score.expandRepeats()
    if len(expanded.flatten().notes) >= len(score.flatten().notes):
        score = expanded
except Exception:
    pass

# Liaisons de tenue : fusionner (sinon la note est ré-attaquée en MIDI)
try:
    score = score.stripTies()
except Exception:
    pass

# Quantification : recale les micro-décalages de l'OCR sur la grille
# (doubles-croches + triolets)
try:
    score.quantize((4, 3), processOffsets=True, processDurations=True, inPlace=True)
except Exception:
    pass

score.write('midi', fp=sys.argv[2])
print(f"   ✅ {len(score.flatten().notes)} notes/accords → {sys.argv[2]}")
PYEOF
  local rc=$?
  rm -rf "$work"
  return $rc
}

if [ $# -ge 1 ]; then
  # ── Mode fichier unique ──
  PDF="$(realpath "$1")"
  NAME="$(basename "${PDF%.pdf}")"
  OUT="${2:-$MIDI_DIR/$NAME.mid}"
  OUT="$(realpath -m "$OUT")"
  mkdir -p "$(dirname "$OUT")"
  convert_one "$PDF" "$OUT"
else
  # ── Mode batch : Sons/pdf → Sons/midi ──
  mkdir -p "$PDF_DIR" "$MIDI_DIR"
  shopt -s nullglob
  pdfs=("$PDF_DIR"/*.pdf "$PDF_DIR"/*.PDF)
  if [ ${#pdfs[@]} -eq 0 ]; then
    echo "Aucun PDF dans $PDF_DIR — dépose tes partitions dedans puis relance."
    exit 0
  fi

  done_count=0; skip_count=0; fail_count=0
  for pdf in "${pdfs[@]}"; do
    name="$(basename "${pdf%.*}")"
    out="$MIDI_DIR/$name.mid"
    if [ -f "$out" ]; then
      echo "⏭️  $name.mid existe déjà — sauté"
      skip_count=$((skip_count + 1))
      continue
    fi
    if convert_one "$pdf" "$out"; then
      done_count=$((done_count + 1))
    else
      fail_count=$((fail_count + 1))
    fi
    echo ""
  done

  echo "────────────────────────────────────"
  echo "Bilan : $done_count converti(s), $skip_count sauté(s), $fail_count échec(s)"
  [ $done_count -gt 0 ] && echo "→ Fichiers dans $MIDI_DIR — à déposer dans Pianely (Ajouter un morceau)"
fi
