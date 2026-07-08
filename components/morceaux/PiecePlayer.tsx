'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause, SkipBack, Volume2, Headphones, Gamepad2 } from 'lucide-react'
import { FallingNotesVisualizer } from '@/components/sheet-music/FallingNotesVisualizer'
import { Piano } from '@/components/interactive/Piano'
import { PracticeMode } from '@/components/morceaux/PracticeMode'
import * as Tone from 'tone'
import { Slider } from '@/components/ui/slider'
import * as Midi from '@tonejs/midi'

interface Note {
  midi: number
  name: string
  time: number
  duration: number
  velocity: number
}

// Convertir numéro MIDI en nom de note standardisé (C#, pas Db)
function midiToNoteName(midiNumber: number): string {
  const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  const octave = Math.floor(midiNumber / 12) - 1
  const noteIndex = midiNumber % 12
  return `${noteNames[noteIndex]}${octave}`
}

interface PiecePlayerProps {
  piece: {
    id: string
    title: string
    composer: string
    musicxml_url?: string
    midi_url?: string
  }
}

type PlayerMode = 'listen' | 'practice'

export function PiecePlayer({ piece }: PiecePlayerProps) {
  const [mode, setMode] = useState<PlayerMode>('listen')
  const [isPlaying, setIsPlaying] = useState(false)
  const [notes, setNotes] = useState<Note[]>([])
  const [highlightedKeys, setHighlightedKeys] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [tempo, setTempo] = useState(120)
  const [sampler, setSampler] = useState<Tone.Sampler | null>(null)
  const [loading, setLoading] = useState(false)
  const timeUpdateRef = useRef<number | null>(null)
  const totalDuration = useRef<number>(0)

  // Charger et parser le MIDI
  useEffect(() => {
    const loadMidi = async () => {
      if (!piece.midi_url) return

      try {
        setLoading(true)
        const response = await fetch(piece.midi_url)
        const arrayBuffer = await response.arrayBuffer()
        const midiData = new Midi.Midi(arrayBuffer)

        // Extraire toutes les notes avec noms normalisés
        const allNotes: Note[] = []
        for (const track of midiData.tracks) {
          for (const note of track.notes) {
            allNotes.push({
              midi: note.midi,
              name: midiToNoteName(note.midi),
              time: note.time,
              duration: note.duration,
              velocity: note.velocity
            })
          }
        }

        allNotes.sort((a, b) => a.time - b.time)

        if (allNotes.length > 0) {
          const lastNote = allNotes[allNotes.length - 1]
          totalDuration.current = lastNote.time + lastNote.duration
        }

        setNotes(allNotes)
        setLoading(false)
      } catch (error) {
        console.error('Error loading MIDI:', error)
        setLoading(false)
      }
    }

    loadMidi()
  }, [piece.midi_url])

  // Initialiser Tone.js Sampler
  useEffect(() => {
    const newSampler = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination()

    setSampler(newSampler)

    return () => {
      newSampler.dispose()
      Tone.Transport.stop()
      Tone.Transport.cancel()
      if (timeUpdateRef.current) {
        cancelAnimationFrame(timeUpdateRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Mettre à jour le tempo du Transport
  useEffect(() => {
    Tone.Transport.bpm.value = tempo
  }, [tempo])

  // Calculer les touches illuminées basées sur le temps actuel
  useEffect(() => {
    if (!isPlaying || notes.length === 0) {
      return
    }

    // Configuration identique au FallingNotesVisualizer
    const hitLineY = 500
    const noteSpeed = 166.67 // pixels par seconde

    const activeNotes = notes.filter(note => {
      const timeDiff = note.time - currentTime
      const noteY = hitLineY - (timeDiff * noteSpeed)
      const distanceFromHitLine = Math.abs(noteY - hitLineY)
      return distanceFromHitLine < 50
    })

    setHighlightedKeys([...new Set(activeNotes.map(n => n.name))])
  }, [currentTime, notes, isPlaying])

  const startPlayback = async () => {
    if (notes.length === 0 || !sampler) return

    await Tone.start()
    Tone.Transport.cancel()

    notes.forEach((note) => {
      Tone.Transport.schedule((time) => {
        sampler.triggerAttackRelease(note.name, note.duration, time, note.velocity)
      }, note.time)
    })

    Tone.Transport.schedule(() => {
      Tone.Transport.stop()
      setIsPlaying(false)
      resetPlayback()
    }, totalDuration.current)

    Tone.Transport.start()
    setIsPlaying(true)

    const updateProgress = () => {
      const elapsed = Tone.Transport.seconds
      setCurrentTime(elapsed)

      if (totalDuration.current > 0) {
        setProgress((elapsed / totalDuration.current) * 100)
      }

      if (Tone.Transport.state === 'started') {
        timeUpdateRef.current = requestAnimationFrame(updateProgress)
      }
    }

    updateProgress()
  }

  const pausePlayback = () => {
    Tone.Transport.pause()
    setIsPlaying(false)
    if (timeUpdateRef.current) {
      cancelAnimationFrame(timeUpdateRef.current)
      timeUpdateRef.current = null
    }
  }

  const resetPlayback = () => {
    Tone.Transport.stop()
    Tone.Transport.position = 0
    Tone.Transport.cancel()
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime(0)
    setHighlightedKeys([])
    if (timeUpdateRef.current) {
      cancelAnimationFrame(timeUpdateRef.current)
      timeUpdateRef.current = null
    }
  }

  const handlePlay = () => {
    if (isPlaying) {
      pausePlayback()
    } else {
      startPlayback()
    }
  }

  const switchMode = (next: PlayerMode) => {
    if (next === mode) return
    resetPlayback()
    setMode(next)
  }

  return (
    <div className="space-y-6">
      {/* Header morceau + switch de mode */}
      <div className="panel rounded-2xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="btn-accent flex h-12 w-12 items-center justify-center rounded-xl text-xl font-black">
              {piece.title.charAt(0)}
            </div>
            <div>
              <h1 className="font-display text-2xl text-[#f2efe8]">{piece.title}</h1>
              <p className="text-dim text-sm">{piece.composer}</p>
            </div>
          </div>

          {/* Switch Écoute / Practice */}
          <div className="glass flex rounded-full p-1">
            <button
              onClick={() => switchMode('listen')}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all ${
                mode === 'listen' ? 'btn-accent' : 'text-dim hover:text-[#f2efe8]'
              }`}
            >
              <Headphones className="h-4 w-4" /> Écoute
            </button>
            <button
              onClick={() => switchMode('practice')}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all ${
                mode === 'practice' ? 'btn-accent' : 'text-dim hover:text-[#f2efe8]'
              }`}
            >
              <Gamepad2 className="h-4 w-4" /> Practice
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="panel rounded-2xl p-6 text-center text-sm text-dim">
          Chargement du fichier MIDI...
        </div>
      )}

      {notes.length === 0 && !loading && (
        <div className="panel rounded-2xl p-6 text-center text-sm text-dim">
          Aucun fichier MIDI disponible pour ce morceau
        </div>
      )}

      {/* ── Mode Practice : jouer le morceau sur son clavier ── */}
      {mode === 'practice' && notes.length > 0 && (
        <PracticeMode
          pieceId={piece.id}
          pieceTitle={piece.title}
          notes={notes}
          totalDuration={totalDuration.current}
        />
      )}

      {/* ── Mode Écoute : lecture + visualisation ── */}
      {mode === 'listen' && notes.length > 0 && (
        <>
          <FallingNotesVisualizer
            notes={notes}
            isPlaying={isPlaying}
            currentTime={currentTime}
          />

          {/* Contrôles de lecture */}
          <div className="panel rounded-2xl p-5">
            <div className="space-y-4">
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-dim">
                  <span className="tabular-nums">
                    {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')} / {Math.floor(totalDuration.current / 60)}:{String(Math.floor(totalDuration.current % 60)).padStart(2, '0')}
                  </span>
                  <span className="tabular-nums">{Math.round(progress)}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min(progress, 100)}%`,
                      background: 'linear-gradient(90deg, #d99a26, #f0c66a)',
                      boxShadow: '0 0 8px rgba(224,168,60,0.5)',
                    }}
                  />
                </div>
              </div>

              {/* Boutons de contrôle */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={resetPlayback}
                  disabled={isPlaying}
                  className="btn-ghost rounded-xl p-3 text-dim disabled:opacity-50"
                  aria-label="Revenir au début"
                >
                  <SkipBack className="h-4 w-4" />
                </button>

                <button
                  onClick={handlePlay}
                  className="btn-accent inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 font-bold"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-5 w-5" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      Lecture
                    </>
                  )}
                </button>
              </div>

              {/* Contrôle du tempo */}
              <div className="flex items-center gap-4">
                <Volume2 className="h-4 w-4 text-faint" />
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-dim">Tempo</span>
                    <span className="font-bold tabular-nums text-[#f2efe8]">{tempo} BPM</span>
                  </div>
                  <Slider
                    value={[tempo]}
                    onValueChange={(value) => setTempo(value[0])}
                    min={60}
                    max={180}
                    step={1}
                    className="w-full"
                    disabled={isPlaying}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Piano interactif */}
          <div className="panel rounded-2xl p-5">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#f2efe8]">Piano Virtuel</h2>
              <p className="text-dim text-sm">
                Suis les notes illuminées ou joue librement — ton clavier USB fonctionne aussi
              </p>
            </div>
            <Piano
              highlightedKeys={highlightedKeys}
              startOctave={1}
              octaves={5}
            />
          </div>

          {/* Informations */}
          <div className="panel rounded-2xl p-5">
            <h2 className="mb-3 text-lg font-bold text-[#f2efe8]">Informations du morceau</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-dim">Notes détectées :</span>
                <span className="ml-2 font-bold tabular-nums text-[#f2efe8]">{notes.length}</span>
              </div>
              <div>
                <span className="text-dim">Durée totale :</span>
                <span className="ml-2 font-bold tabular-nums text-[#f2efe8]">
                  {Math.floor(totalDuration.current / 60)}:{String(Math.floor(totalDuration.current % 60)).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
