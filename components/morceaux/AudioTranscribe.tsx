'use client'

/**
 * Transcription audio → MIDI, 100 % navigateur (Basic Pitch / TensorFlow.js).
 *
 * Remplace l'ancien service Python hébergé : le fichier audio est décodé,
 * rééchantillonné à 22 050 Hz mono, passé dans le modèle de Spotify, puis
 * les notes deviennent un fichier MIDI remis à MidiUpload pour l'import.
 * Le modèle (~5 Mo) n'est chargé qu'au premier usage.
 */

import { useState } from 'react'
import * as MidiPkg from '@tonejs/midi'
import { AudioLines, Loader2 } from 'lucide-react'
import { MidiUpload } from './MidiUpload'
import { OctaveProgress } from '@/components/ui/octave-progress'

const MODEL_URL = 'https://unpkg.com/@spotify/basic-pitch@1.0.1/model/model.json'
const SAMPLE_RATE = 22050

type Phase = 'idle' | 'decoding' | 'model' | 'transcribing' | 'ready' | 'error'

async function decodeToMono22k(file: File): Promise<AudioBuffer> {
  const arrayBuffer = await file.arrayBuffer()
  const probe = new AudioContext()
  const decoded = await probe.decodeAudioData(arrayBuffer)
  void probe.close()

  const offline = new OfflineAudioContext(1, Math.ceil(decoded.duration * SAMPLE_RATE), SAMPLE_RATE)
  const source = offline.createBufferSource()
  source.buffer = decoded
  source.connect(offline.destination)
  source.start()
  return offline.startRendering()
}

export function AudioTranscribe({ onSuccess }: { onSuccess?: () => void }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [progress, setProgress] = useState(0)
  const [midiFile, setMidiFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  const transcribe = async (file: File | undefined | null) => {
    if (!file) return
    setError(null)
    setMidiFile(null)
    try {
      setPhase('decoding')
      const audio = await decodeToMono22k(file)

      setPhase('model')
      // Chargé à la demande : tfjs + modèle restent hors du bundle initial
      const { BasicPitch, noteFramesToTime, addPitchBendsToNoteEvents, outputToNotesPoly } =
        await import('@spotify/basic-pitch')
      const basicPitch = new BasicPitch(MODEL_URL)

      setPhase('transcribing')
      const frames: number[][] = []
      const onsets: number[][] = []
      const contours: number[][] = []
      await basicPitch.evaluateModel(
        audio,
        (f, o, c) => { frames.push(...f); onsets.push(...o); contours.push(...c) },
        (pct) => setProgress(Math.round(pct * 100))
      )

      const notes = noteFramesToTime(
        addPitchBendsToNoteEvents(contours, outputToNotesPoly(frames, onsets, 0.3, 0.3, 6))
      )
      if (notes.length === 0) {
        setPhase('error')
        setError("Aucune note détectée — un enregistrement de piano seul fonctionne le mieux.")
        return
      }

      // Notes → fichier MIDI
      const midi = new MidiPkg.Midi()
      const track = midi.addTrack()
      track.name = 'Transcription'
      for (const note of notes) {
        track.addNote({
          midi: note.pitchMidi,
          time: note.startTimeSeconds,
          duration: Math.max(0.1, note.durationSeconds),
          velocity: Math.min(1, Math.max(0.1, note.amplitude)),
        })
      }
      const baseName = file.name.replace(/\.[^.]+$/, '')
      setMidiFile(new File([new Uint8Array(midi.toArray())], `${baseName}.mid`, { type: 'audio/midi' }))
      setPhase('ready')
    } catch (e) {
      console.error('Browser transcription error:', e)
      setPhase('error')
      setError('La transcription a échoué — réessaie avec un MP3/WAV, ou passe par un fichier MIDI.')
    }
  }

  if (phase === 'ready' && midiFile) {
    return (
      <div className="space-y-3">
        <p className="badge-stage w-fit rounded-full px-3 py-1.5 text-xs font-bold">
          ✓ Transcription terminée — vérifie et ajoute à ta bibliothèque
        </p>
        <MidiUpload initialFile={midiFile} onSuccess={onSuccess} />
      </div>
    )
  }

  const busy = phase === 'decoding' || phase === 'model' || phase === 'transcribing'

  return (
    <div className="space-y-4">
      <label
        className={`flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-white/15 p-8 text-center transition-all hover:border-[#e0a83c]/40 hover:bg-white/[0.03] ${busy ? 'pointer-events-none opacity-60' : ''}`}
      >
        <input
          type="file"
          accept=".mp3,.wav,.ogg,.m4a,.flac,audio/*"
          className="hidden"
          disabled={busy}
          onChange={(e) => void transcribe(e.target.files?.[0])}
        />
        {busy ? (
          <Loader2 className="accent-brass h-10 w-10 animate-spin" />
        ) : (
          <AudioLines className="accent-brass h-10 w-10" />
        )}
        <div>
          <p className="font-semibold text-[#f2efe8]">
            {phase === 'decoding' && 'Lecture du fichier audio…'}
            {phase === 'model' && 'Chargement du modèle (première fois : ~5 Mo)…'}
            {phase === 'transcribing' && `Transcription en cours… ${progress}%`}
            {(phase === 'idle' || phase === 'error') && 'Dépose un fichier audio (MP3, WAV…)'}
          </p>
          {!busy && (
            <p className="text-faint mt-1 text-sm">
              La transcription se fait sur ton ordinateur — piano seul recommandé
            </p>
          )}
        </div>
        {phase === 'transcribing' && (
          <div className="w-full max-w-xs">
            <OctaveProgress value={progress} />
          </div>
        )}
      </label>

      {error && (
        <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-300">
          {error}
        </p>
      )}

      <p className="text-faint text-xs leading-relaxed">
        ⚠️ La transcription automatique reste approximative (accords denses,
        pédale…). Pour une fidélité parfaite, préfère un fichier MIDI quand il existe.
      </p>
    </div>
  )
}
