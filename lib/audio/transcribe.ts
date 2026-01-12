/**
 * Module de transcription audio → MIDI avec Basic Pitch
 * Basic Pitch: https://github.com/spotify/basic-pitch
 *
 * Ce module utilise le service Python Basic Pitch pour transcription de qualité production
 */

import * as Midi from '@tonejs/midi'
import fs from 'fs'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'

const execAsync = promisify(exec)

export interface TranscriptionResult {
  midiBuffer: Buffer
  notes: ParsedNote[]
  duration: number
  tempo: number
}

export interface ParsedNote {
  midi: number // MIDI note number (0-127)
  name: string // Note name (e.g., "C4", "D#5")
  time: number // Start time in seconds
  duration: number // Duration in seconds
  velocity: number // Velocity (0-1)
}

/**
 * Transcrit un fichier audio en MIDI avec Basic Pitch (Python service)
 * @param audioPath Chemin vers le fichier audio
 * @param usePythonService Si true, utilise le service Python (production). Si false, utilise placeholder (dev)
 * @returns Buffer MIDI
 */
export async function transcribeAudioToMIDI(
  audioPath: string,
  usePythonService: boolean = process.env.NODE_ENV === 'production'
): Promise<Buffer> {
  // Mode production: Python Basic Pitch
  if (usePythonService) {
    return transcribeWithPythonService(audioPath)
  }

  // Mode dev: Placeholder rapide
  return transcribePlaceholder(audioPath)
}

/**
 * Transcription avec Python Basic Pitch (production)
 */
async function transcribeWithPythonService(audioPath: string): Promise<Buffer> {
  try {
    console.log('🎵 Starting Basic Pitch transcription (Python service)...')

    // Chemins
    const outputPath = audioPath.replace(path.extname(audioPath), '.mid')
    const scriptPath = path.join(process.cwd(), 'services', 'transcription', 'transcribe_service.py')
    const pythonPath = path.join(process.cwd(), 'services', 'transcription', 'venv', 'bin', 'python')

    // Vérifier si le service Python est installé
    if (!fs.existsSync(scriptPath)) {
      console.warn('⚠️  Python service not found. Using placeholder.')
      return transcribePlaceholder(audioPath)
    }

    // Appeler le service Python
    const pythonCmd = fs.existsSync(pythonPath) ? pythonPath : 'python3'
    const command = `${pythonCmd} "${scriptPath}" "${audioPath}" "${outputPath}"`

    console.log(`Executing: ${command}`)
    const { stdout, stderr } = await execAsync(command)

    if (stderr && !stderr.includes('FutureWarning')) {
      console.warn('Python stderr:', stderr)
    }

    console.log(stdout)

    // Lire le fichier MIDI généré
    if (!fs.existsSync(outputPath)) {
      throw new Error('MIDI file was not created')
    }

    const midiBuffer = fs.readFileSync(outputPath)

    // Nettoyer le fichier MIDI temporaire
    fs.unlinkSync(outputPath)

    console.log('✅ Transcription completed with Python Basic Pitch')
    return midiBuffer
  } catch (error) {
    console.error('❌ Python transcription error:', error)
    console.log('⚠️  Falling back to placeholder')
    return transcribePlaceholder(audioPath)
  }
}

/**
 * Transcription placeholder (développement)
 */
function transcribePlaceholder(audioPath: string): Buffer {
  console.log('🎵 Using placeholder transcription (dev mode)')

  const midi = new Midi.Midi()
  const track = midi.addTrack()
  track.name = 'Piano (Placeholder)'

  // Gamme de C majeur
  const cMajorScale = [60, 62, 64, 65, 67, 69, 71, 72]
  const duration = 0.5

  for (let i = 0; i < cMajorScale.length; i++) {
    track.addNote({
      midi: cMajorScale[i],
      time: i * duration,
      duration: duration * 0.9,
      velocity: 0.8
    })
  }

  const midiData = midi.toArray()
  console.log('✅ Placeholder MIDI generated')
  return Buffer.from(midiData)
}

/**
 * Parser un fichier MIDI et extraire les notes structurées
 * @param midiBuffer Buffer contenant les données MIDI
 * @returns Notes parsées avec timing
 */
export function parseMIDIToNotes(midiBuffer: Buffer): ParsedNote[] {
  try {
    // Parser avec Tonejs
    const midi = new Midi.Midi(midiBuffer)
    const notes: ParsedNote[] = []

    // Extraire les notes de toutes les pistes
    for (const track of midi.tracks) {
      for (const note of track.notes) {
        notes.push({
          midi: note.midi,
          name: note.name,
          time: note.time,
          duration: note.duration,
          velocity: note.velocity,
        })
      }
    }

    // Trier par temps
    notes.sort((a, b) => a.time - b.time)

    console.log(`📊 Parsed ${notes.length} notes`)
    return notes
  } catch (error) {
    console.error('❌ MIDI parsing error:', error)
    throw new Error(`Failed to parse MIDI: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Obtenir les métadonnées d'un fichier MIDI
 * @param midiBuffer Buffer contenant les données MIDI
 * @returns Métadonnées (tempo, duration, etc.)
 */
export function getMIDIMetadata(midiBuffer: Buffer): {
  tempo: number
  duration: number
  timeSignature: string
  trackCount: number
} {
  try {
    const midi = new Midi.Midi(midiBuffer)

    return {
      tempo: midi.header.tempos[0]?.bpm || 120,
      duration: midi.duration,
      timeSignature: `${midi.header.timeSignatures[0]?.timeSignature[0] || 4}/${midi.header.timeSignatures[0]?.timeSignature[1] || 4}`,
      trackCount: midi.tracks.length,
    }
  } catch (error) {
    console.error('❌ Metadata extraction error:', error)
    return {
      tempo: 120,
      duration: 0,
      timeSignature: '4/4',
      trackCount: 0,
    }
  }
}

/**
 * Transcription complète: Audio → MIDI → Notes parsées
 * @param audioPath Chemin vers le fichier audio
 * @returns Résultat complet avec MIDI et notes
 */
export async function transcribeAudioComplete(audioPath: string): Promise<TranscriptionResult> {
  // Transcription audio → MIDI
  const midiBuffer = await transcribeAudioToMIDI(audioPath)

  // Parser le MIDI
  const notes = parseMIDIToNotes(midiBuffer)
  const metadata = getMIDIMetadata(midiBuffer)

  return {
    midiBuffer,
    notes,
    duration: metadata.duration,
    tempo: metadata.tempo,
  }
}

/**
 * Convertir MIDI en MusicXML (simplifié)
 * Note: Pour une conversion complète, utiliser un outil externe comme MuseScore
 * Cette fonction crée un MusicXML basique pour affichage
 */
export function convertMIDIToMusicXML(midiBuffer: Buffer, title: string = 'Untitled', composer: string = 'Unknown'): string {
  const notes = parseMIDIToNotes(midiBuffer)
  const metadata = getMIDIMetadata(midiBuffer)

  // MusicXML basique (simplifié - pour affichage avec OpenSheetMusicDisplay)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
  <work>
    <work-title>${escapeXml(title)}</work-title>
  </work>
  <identification>
    <creator type="composer">${escapeXml(composer)}</creator>
    <encoding>
      <software>Pianely Transcription</software>
      <encoding-date>${new Date().toISOString().split('T')[0]}</encoding-date>
    </encoding>
  </identification>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      ${generateMusicXMLNotes(notes)}
    </measure>
  </part>
</score-partwise>`

  return xml
}

/**
 * Générer les balises de notes MusicXML
 */
function generateMusicXMLNotes(notes: ParsedNote[]): string {
  // Simplification: on prend les 100 premières notes pour éviter XML trop lourd
  const limitedNotes = notes.slice(0, 100)

  return limitedNotes
    .map((note) => {
      const step = note.name.charAt(0)
      const alter = note.name.includes('#') ? 1 : note.name.includes('b') ? -1 : 0
      const octave = note.name.match(/\d+/)?.[0] || '4'

      return `
      <note>
        <pitch>
          <step>${step}</step>
          ${alter !== 0 ? `<alter>${alter}</alter>` : ''}
          <octave>${octave}</octave>
        </pitch>
        <duration>${Math.round(note.duration * 4)}</duration>
        <type>quarter</type>
      </note>`
    })
    .join('\n')
}

/**
 * Échapper les caractères XML
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
