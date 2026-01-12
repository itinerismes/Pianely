#!/usr/bin/env python3
"""
Service de conversion PDF → MIDI via OCR Musical
Utilise Audiveris pour l'OCR et music21 pour la conversion
"""

import sys
import os
import subprocess
import tempfile
from pathlib import Path
import json

def check_audiveris():
    """Vérifie si Audiveris est installé"""
    # Audiveris 5.9+ utilise un binaire natif
    audiveris_bin = os.path.join(os.path.dirname(__file__), 'audiveris', 'Audiveris')
    if os.path.exists(audiveris_bin):
        return True, audiveris_bin

    # Fallback sur JAR pour versions anciennes
    audiveris_path = os.path.join(os.path.dirname(__file__), 'audiveris', 'audiveris.jar')
    if not os.path.exists(audiveris_path):
        return False, "Audiveris non installé. Exécutez ./setup-ocr.sh"
    return True, audiveris_path

def pdf_to_musicxml(pdf_path, output_path, audiveris_path):
    """
    Convertit un PDF en MusicXML avec Audiveris
    """
    try:
        print(f"🎼 Conversion PDF → MusicXML avec Audiveris...")

        # Audiveris 5.9 : binaire natif
        # Audiveris <5.9 : JAR avec java
        if audiveris_path.endswith('Audiveris'):
            # Binaire natif - syntaxe CLI: Audiveris -batch -export -output <output> <input>
            cmd = [
                audiveris_path,
                '-batch',
                '-export',
                '-output', output_path,
                pdf_path
            ]
        else:
            # JAR - syntaxe ancienne
            cmd = [
                'java',
                '-jar', audiveris_path,
                '-batch',
                '-export',
                '-output', output_path,
                pdf_path
            ]

        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=120  # 2 minutes max
        )

        if result.returncode != 0:
            raise Exception(f"Audiveris error: {result.stderr}")

        # Audiveris crée souvent un fichier .mxl (compressé)
        # On cherche aussi .xml
        possible_outputs = [
            output_path,
            output_path.replace('.xml', '.mxl'),
            output_path + '.mxl'
        ]

        for out in possible_outputs:
            if os.path.exists(out):
                print(f"✅ MusicXML généré : {out}")
                return out

        raise Exception("Audiveris n'a pas généré de fichier MusicXML")

    except subprocess.TimeoutExpired:
        raise Exception("Timeout lors de la conversion (PDF trop complexe ?)")
    except Exception as e:
        raise Exception(f"Erreur OCR : {str(e)}")

def musicxml_to_midi(musicxml_path, midi_output_path):
    """
    Convertit MusicXML en MIDI avec music21
    """
    try:
        print(f"🎹 Conversion MusicXML → MIDI avec music21...")

        from music21 import converter

        # Charger le MusicXML
        score = converter.parse(musicxml_path)

        # Exporter en MIDI
        score.write('midi', fp=midi_output_path)

        # Statistiques
        notes = score.flat.notes
        duration = float(score.highestTime)

        print(f"✅ MIDI généré : {midi_output_path}")
        print(f"   Notes détectées : {len(notes)}")
        print(f"   Durée estimée : {duration:.1f}s")

        return {
            'success': True,
            'midi_path': midi_output_path,
            'note_count': len(notes),
            'duration': duration
        }

    except Exception as e:
        raise Exception(f"Erreur conversion MIDI : {str(e)}")

def convert_pdf_to_midi(pdf_path, output_midi_path):
    """
    Conversion complète PDF → MIDI
    """
    # Vérifier Audiveris
    success, result = check_audiveris()
    if not success:
        return {
            'success': False,
            'error': result
        }

    audiveris_path = result

    # Créer fichier temporaire pour MusicXML
    with tempfile.NamedTemporaryFile(suffix='.xml', delete=False) as tmp:
        musicxml_path = tmp.name

    try:
        # Étape 1 : PDF → MusicXML (OCR avec Audiveris)
        musicxml_path = pdf_to_musicxml(pdf_path, musicxml_path, audiveris_path)

        # Étape 2 : MusicXML → MIDI (conversion avec music21)
        result = musicxml_to_midi(musicxml_path, output_midi_path)

        return result

    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }
    finally:
        # Nettoyer le fichier temporaire
        if os.path.exists(musicxml_path):
            os.unlink(musicxml_path)

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python pdf_to_midi.py <input.pdf> <output.mid>")
        sys.exit(1)

    input_pdf = sys.argv[1]
    output_midi = sys.argv[2]

    if not os.path.exists(input_pdf):
        print(f"❌ Erreur : Le fichier {input_pdf} n'existe pas")
        sys.exit(1)

    print(f"🎼 Conversion PDF → MIDI")
    print(f"   Input  : {input_pdf}")
    print(f"   Output : {output_midi}")
    print()

    result = convert_pdf_to_midi(input_pdf, output_midi)

    if result['success']:
        print()
        print("✅ Conversion réussie !")
        print(f"   Fichier MIDI : {output_midi}")
        print(f"   Notes : {result.get('note_count', 'N/A')}")
        print(f"   Durée : {result.get('duration', 'N/A')}s")
        sys.exit(0)
    else:
        print()
        print(f"❌ Échec de la conversion : {result['error']}")
        sys.exit(1)
