'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Pause, SkipBack, Volume2 } from 'lucide-react'
import { FallingNotesVisualizer } from '@/components/sheet-music/FallingNotesVisualizer'
import { Piano } from '@/components/interactive/Piano'
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

        // Extraire toutes les notes
        const allNotes: Note[] = []
        for (const track of midiData.tracks) {
          for (const note of track.notes) {
            allNotes.push({
              midi: note.midi,
              name: note.name,
              time: note.time,
              duration: note.duration,
              velocity: note.velocity
            })
          }
        }

        // Trier par temps
        allNotes.sort((a, b) => a.time - b.time)

        // Calculer la durée totale
        if (allNotes.length > 0) {
          const lastNote = allNotes[allNotes.length - 1]
          totalDuration.current = lastNote.time + lastNote.duration
        }

        setNotes(allNotes)
        console.log(`🎹 Loaded ${allNotes.length} notes from MIDI (${Math.round(totalDuration.current)}s)`)
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
      Tone.Transport.stop()
      Tone.Transport.cancel()
      if (timeUpdateRef.current) {
        cancelAnimationFrame(timeUpdateRef.current)
      }
    }
  }, [])

  // Mettre à jour le tempo du Transport
  useEffect(() => {
    Tone.Transport.bpm.value = tempo
  }, [tempo])

  const startPlayback = async () => {
    if (notes.length === 0 || !sampler) {
      console.warn('No notes to play or sampler not ready')
      return
    }

    await Tone.start()
    
    // Nettoyer les événements précédents
    Tone.Transport.cancel()
    
    // Planifier toutes les notes sur le Transport
    notes.forEach((note) => {
      Tone.Transport.schedule((time) => {
        sampler.triggerAttackRelease(note.name, note.duration, time, note.velocity)
        
        // Ajouter la note aux notes actives
        Tone.Draw.schedule(() => {
          setHighlightedKeys(prev => {
            if (!prev.includes(note.name)) {
              return [...prev, note.name]
            }
            return prev
          })
        }, time)
        
        // Retirer la note après sa durée
        Tone.Draw.schedule(() => {
          setHighlightedKeys(prev => prev.filter(k => k !== note.name))
        }, time + note.duration)
      }, note.time)
    })

    // Planifier l'arrêt automatique à la fin
    Tone.Transport.schedule(() => {
      Tone.Transport.stop()
      setIsPlaying(false)
      resetPlayback()
    }, totalDuration.current)

    // Démarrer le transport
    Tone.Transport.start()
    setIsPlaying(true)
    
    // Mettre à jour la progression
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

      {/* Visualisation Notes Tombantes */}
      {notes.length > 0 && (
        <FallingNotesVisualizer
          notes={notes}
          isPlaying={isPlaying}
          currentTime={currentTime}
          onNoteHit={(note) => {
            // Note frappée - pourrait être utilisé pour scoring/feedback
            console.log('Note hit:', note.name)
          }}
        />
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
                    <span>
                      {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')} / {Math.floor(totalDuration.current / 60)}:{String(Math.floor(totalDuration.current % 60)).padStart(2, '0')}
                    </span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-600 transition-all"
                      style={{ width: `${Math.min(progress, 100)}%` }}
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
                      disabled={isPlaying}
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
            startOctave={1}
            octaves={5}
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
                <span className="text-muted-foreground">Durée totale:</span>
                <span className="ml-2 font-medium">
                  {Math.floor(totalDuration.current / 60)}:{String(Math.floor(totalDuration.current % 60)).padStart(2, '0')}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
