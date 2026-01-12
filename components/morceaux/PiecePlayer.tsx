'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Pause, SkipBack, Volume2 } from 'lucide-react'
import { SheetMusicViewer } from '@/components/sheet-music/SheetMusicViewer'
import { Piano } from '@/components/interactive/Piano'
import * as Tone from 'tone'
import { Slider } from '@/components/ui/slider'
import * as Midi from '@tonejs/midi'

interface Note {
  midi: number
  name: string
  time: number
  duration: number
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

export function PiecePlayer({ piece }: PiecePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [notes, setNotes] = useState<Note[]>([])
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0)
  const [highlightedKeys, setHighlightedKeys] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const [tempo, setTempo] = useState(120)
  const [sampler, setSampler] = useState<Tone.Sampler | null>(null)
  const [loading, setLoading] = useState(false)
  const playbackRef = useRef<number | null>(null)
  const startTimeRef = useRef<number>(0)

  // Charger et parser le MIDI
  useEffect(() => {
    const loadMidi = async () => {
      if (!piece.midi_url) return

      try {
        setLoading(true)
        const response = await fetch(piece.midi_url)
        const arrayBuffer = await response.arrayBuffer()
        const midiData = new Midi.Midi(arrayBuffer)

        // Extraire toutes les notes
        const allNotes: Note[] = []
        for (const track of midiData.tracks) {
          for (const note of track.notes) {
            allNotes.push({
              midi: note.midi,
              name: note.name,
              time: note.time,
              duration: note.duration
            })
          }
        }

        // Trier par temps
        allNotes.sort((a, b) => a.time - b.time)

        setNotes(allNotes)
        console.log(`🎹 Loaded ${allNotes.length} notes from MIDI`)
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
    const initSampler = async () => {
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
    }

    initSampler()

    return () => {
      if (sampler) {
        sampler.dispose()
      }
      if (playbackRef.current) {
        cancelAnimationFrame(playbackRef.current)
      }
    }
  }, [])

  // Jouer une note
  const playNote = (note: Note) => {
    if (!sampler) return

    try {
      sampler.triggerAttackRelease(note.name, note.duration)

      // Illuminer la touche
      setHighlightedKeys([note.name])

      // Retirer après la durée
      setTimeout(() => {
        setHighlightedKeys([])
      }, note.duration * 1000)
    } catch (err) {
      console.error('Error playing note:', err)
    }
  }

  const startPlayback = async () => {
    if (notes.length === 0) {
      console.warn('No notes to play')
      return
    }

    await Tone.start()
    setIsPlaying(true)
    startTimeRef.current = Date.now()

    const playNextNote = () => {
      if (!isPlaying || currentNoteIndex >= notes.length) {
        setIsPlaying(false)
        return
      }

      const note = notes[currentNoteIndex]
      const elapsed = (Date.now() - startTimeRef.current) / 1000

      if (elapsed >= note.time) {
        playNote(note)
        setCurrentNoteIndex(prev => prev + 1)
        setProgress((currentNoteIndex / notes.length) * 100)
      }

      playbackRef.current = requestAnimationFrame(playNextNote)
    }

    playNextNote()
  }

  const pausePlayback = () => {
    setIsPlaying(false)
    if (playbackRef.current) {
      cancelAnimationFrame(playbackRef.current)
    }
  }

  const resetPlayback = () => {
    pausePlayback()
    setCurrentNoteIndex(0)
    setProgress(0)
    setHighlightedKeys([])
    startTimeRef.current = 0
  }

  const handlePlay = () => {
    if (isPlaying) {
      pausePlayback()
    } else {
      startPlayback()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              {piece.title.charAt(0)}
            </div>
            <div>
              <div>{piece.title}</div>
              <div className="text-sm text-muted-foreground font-normal">
                {piece.composer}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Partition */}
      {piece.musicxml_url && (
        <Card>
          <CardHeader>
            <CardTitle>Partition</CardTitle>
          </CardHeader>
          <CardContent>
            <SheetMusicViewer musicXmlUrl={piece.musicxml_url} />
          </CardContent>
        </Card>
      )}

      {/* Contrôles de lecture */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {loading && (
              <div className="text-center text-sm text-muted-foreground">
                Chargement du fichier MIDI...
              </div>
            )}

            {notes.length === 0 && !loading && (
              <div className="text-center text-sm text-muted-foreground">
                Aucun fichier MIDI disponible pour ce morceau
              </div>
            )}

            {notes.length > 0 && (
              <>
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progression</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-600 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Boutons de contrôle */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={resetPlayback}
                    disabled={isPlaying}
                  >
                    <SkipBack className="w-4 h-4" />
                  </Button>

                  <Button
                    size="lg"
                    onClick={handlePlay}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-5 h-5 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Lecture
                      </>
                    )}
                  </Button>
                </div>

                {/* Contrôle du tempo */}
                <div className="flex items-center gap-4">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tempo</span>
                      <span className="font-medium">{tempo} BPM</span>
                    </div>
                    <Slider
                      value={[tempo]}
                      onValueChange={(value) => setTempo(value[0])}
                      min={60}
                      max={180}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Piano interactif */}
      <Card>
        <CardHeader>
          <CardTitle>Piano Virtuel</CardTitle>
          <p className="text-sm text-muted-foreground">
            Suivez les notes illuminées ou jouez librement
          </p>
        </CardHeader>
        <CardContent>
          <Piano
            highlightedKeys={highlightedKeys}
            startOctave={3}
            octaves={3}
          />
        </CardContent>
      </Card>

      {/* Informations */}
      {notes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Informations du morceau</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Notes détectées:</span>
                <span className="ml-2 font-medium">{notes.length}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Durée estimée:</span>
                <span className="ml-2 font-medium">
                  {notes.length > 0
                    ? Math.round(notes[notes.length - 1].time + notes[notes.length - 1].duration)
                    : 0}s
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
