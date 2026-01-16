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
    # Audiveris 5.9+ : utiliser le script wrapper avec classpath complet
    audiveris_script = os.path.join(os.path.dirname(__file__), 'audiveris', 'run-audiveris.sh')
    audiveris_jar = os.path.join(os.path.dirname(__file__), 'audiveris', 'audiveris.jar')

    if os.path.exists(audiveris_script) and os.path.exists(audiveris_jar):
        return True, audiveris_script

    if not os.path.exists(audiveris_jar):
        return False, "Audiveris non installé. Exécutez ./setup-ocr.sh"
    return False, "Script run-audiveris.sh manquant"

def pdf_to_musicxml(pdf_path, output_dir, audiveris_path):
    """
    Convertit un PDF en MusicXML avec Audiveris
    """
    try:
        import glob

        print(f"🎼 Conversion PDF → MusicXML avec Audiveris...")

        # Créer un répertoire de sortie temporaire
        os.makedirs(output_dir, exist_ok=True)

        # ÉTAPE 1: Transcription
        # -transcribe : traite la partition entière et crée un fichier .omr
        cmd_transcribe = [
            'bash', audiveris_path,
            '-batch',
            '-transcribe',
            '-output', output_dir,
            pdf_path
        ]

        print(f"   Étape 1 - Transcription: {' '.join(cmd_transcribe)}")

        result = subprocess.run(
            cmd_transcribe,
            capture_output=True,
            text=True,
            timeout=600  # 10 minutes max pour PDF complexes
        )

        print(f"   Transcription return code: {result.returncode}")

        # Trouver le fichier .omr généré
        omr_files = glob.glob(os.path.join(output_dir, '*.omr'))
        if not omr_files:
            raise Exception(f"Audiveris n'a pas généré de fichier .omr")

        omr_file = omr_files[0]
        print(f"   Fichier .omr créé: {omr_file}")

        # ÉTAPE 2: Export MusicXML
        # -export <fichier.omr> génère le .mxl dans le même répertoire
        cmd_export = [
            'bash', audiveris_path,
            '-batch',
            '-export',
            omr_file
        ]

        print(f"   Étape 2 - Export: {' '.join(cmd_export)}")

        result = subprocess.run(
            cmd_export,
            capture_output=True,
            text=True,
            timeout=120  # 2 minutes pour l'export
        )

        print(f"   Export return code: {result.returncode}")
        if result.stderr:
            print(f"   Export stderr: {result.stderr[-500:]}")

        # Chercher le fichier MusicXML généré dans le répertoire de sortie
        # Audiveris génère: <nom_du_pdf>/<nom_du_pdf>.mxl
        pdf_name = Path(pdf_path).stem

        # Chercher récursivement les fichiers .mxl et .xml
        import glob
        search_patterns = [
            os.path.join(output_dir, '**', '*.mxl'),
            os.path.join(output_dir, '**', '*.xml'),
            os.path.join(output_dir, '*.mxl'),
            os.path.join(output_dir, '*.xml'),
        ]

        found_files = []
        for pattern in search_patterns:
            found_files.extend(glob.glob(pattern, recursive=True))

        print(f"   Fichiers trouvés: {found_files}")

        # Lister tout le contenu du répertoire de sortie pour debug
        import subprocess as sp
        import zipfile
        try:
            ls_result = sp.run(['find', output_dir, '-type', 'f'], capture_output=True, text=True)
            print(f"   Contenu complet du répertoire {output_dir}:")
            print(ls_result.stdout if ls_result.stdout else "   (vide)")
        except:
            pass

        # Prendre le premier fichier .mxl ou .xml trouvé
        for f in found_files:
            if f.endswith('.mxl') or f.endswith('.xml'):
                print(f"✅ MusicXML généré : {f}")
                return f

        # Si pas de MusicXML trouvé, chercher dans les fichiers .omr (archives ZIP)
        omr_files = glob.glob(os.path.join(output_dir, '*.omr'))
        print(f"   Fichiers .omr trouvés: {omr_files}")

        for omr_file in omr_files:
            print(f"   Extraction du fichier .omr: {omr_file}")
            try:
                with zipfile.ZipFile(omr_file, 'r') as zip_ref:
                    # Lister le contenu du .omr
                    contents = zip_ref.namelist()
                    print(f"   Contenu du .omr: {contents[:20]}")

                    # Chercher un fichier MusicXML dans le .omr
                    for name in contents:
                        if name.endswith('.mxl') or name.endswith('.xml') and 'musicxml' in name.lower():
                            extract_path = os.path.join(output_dir, os.path.basename(name))
                            with zip_ref.open(name) as source, open(extract_path, 'wb') as target:
                                target.write(source.read())
                            print(f"✅ MusicXML extrait du .omr : {extract_path}")
                            return extract_path
            except Exception as e:
                print(f"   Erreur extraction .omr: {e}")

        raise Exception(f"Audiveris n'a pas généré de fichier MusicXML dans {output_dir}")

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
    import shutil

    # Vérifier Audiveris
    success, result = check_audiveris()
    if not success:
        return {
            'success': False,
            'error': result
        }

    audiveris_path = result

    # Créer répertoire temporaire pour la sortie Audiveris
    temp_dir = tempfile.mkdtemp(prefix='audiveris_')
    musicxml_path = None

    try:
        # Étape 1 : PDF → MusicXML (OCR avec Audiveris)
        musicxml_path = pdf_to_musicxml(pdf_path, temp_dir, audiveris_path)

        # Étape 2 : MusicXML → MIDI (conversion avec music21)
        result = musicxml_to_midi(musicxml_path, output_midi_path)

        return result

    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }
    finally:
        # Nettoyer le répertoire temporaire
        if os.path.exists(temp_dir):
            shutil.rmtree(temp_dir, ignore_errors=True)

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
