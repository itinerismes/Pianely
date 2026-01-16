'use client'

import { useEffect, useState } from 'react'
import * as Tone from 'tone'

interface PianoProps {
  highlightedKeys?: string[] // For PiecePlayer usage: ["C4", "E4", "G4"]
  highlightedNotes?: string[] // For PianoDemo usage: ["C", "E", "G"]
  onKeyPress?: (note: string) => void
  onNotePlay?: (note: string) => void
  octaves?: number
  startOctave?: number
  showLabels?: boolean
}

interface PianoKey {
  note: string
  isBlack: boolean
  frequency: number
}

export function Piano({
  highlightedKeys = [],
  highlightedNotes = [],
  onKeyPress,
  onNotePlay,
  octaves = 2,
  startOctave = 4,
  showLabels = true
}: PianoProps) {
  const [sampler, setSampler] = useState<Tone.Sampler | null>(null)
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)

  const generateKeys = (): PianoKey[] => {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    const keys: PianoKey[] = []

    for (let octave = startOctave; octave < startOctave + octaves; octave++) {
      for (const note of notes) {
        const noteName = `${note}${octave}`
        keys.push({
          note: noteName,
          isBlack: note.includes('#'),
          frequency: Tone.Frequency(noteName).toFrequency()
        })
      }
    }

    return keys
  }

  const keys = generateKeys()

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
        onload: () => {
          setIsLoaded(true)
          console.log('🎹 Piano samples loaded')
        }
      }).toDestination()

      setSampler(newSampler)
    }

    initSampler()

    return () => {
      if (sampler) {
        sampler.dispose()
      }
    }
  }, [])

  const playNote = async (note: string) => {
    if (!sampler || !isLoaded) {
      console.warn('Sampler not ready')
      return
    }

    try {
      await Tone.start()
      sampler.triggerAttackRelease(note, '8n')

      setActiveKeys(prev => new Set(prev).add(note))

      setTimeout(() => {
        setActiveKeys(prev => {
          const newSet = new Set(prev)
          newSet.delete(note)
          return newSet
        })
      }, 200)

      onKeyPress?.(note)
      onNotePlay?.(note)
    } catch (error) {
      console.error('Error playing note:', error)
    }
  }

  const isKeyHighlighted = (note: string) => {
    // Check highlightedKeys (full note like "C4")
    const isHighlighted = highlightedKeys.includes(note)

    // Check highlightedNotes (note without octave like "C")
    const noteWithoutOctave = note.replace(/[0-9]/g, '')
    const isNoteHighlighted = highlightedNotes.includes(noteWithoutOctave)

    return isHighlighted || isNoteHighlighted
  }

  // Debug: log when highlightedKeys changes
  useEffect(() => {
    if (highlightedKeys.length > 0) {
      console.log('🎹 Piano received highlightedKeys:', highlightedKeys)
    }
  }, [highlightedKeys])

  const isKeyActive = (note: string) => {
    return activeKeys.has(note)
  }

  const getKeyStyle = (key: PianoKey): React.CSSProperties => {
    const isHighlighted = isKeyHighlighted(key.note)
    const isActive = isKeyActive(key.note)

    if (key.isBlack) {
      return {
        width: '30px',
        height: '120px',
        backgroundColor: isActive ? '#4ade80' : (isHighlighted ? '#8b5cf6' : '#1f2937'),
        zIndex: 10,
        marginLeft: '-15px',
        marginRight: '-15px',
        border: '1px solid #000',
        borderRadius: '0 0 3px 3px',
        cursor: 'pointer',
        transition: 'all 0.1s ease',
        boxShadow: isActive ? '0 4px 8px rgba(0,0,0,0.4)' : '0 2px 4px rgba(0,0,0,0.3)',
        transform: isActive ? 'translateY(2px)' : 'translateY(0)',
      }
    } else {
      return {
        width: '45px',
        height: '180px',
        backgroundColor: isActive ? '#86efac' : (isHighlighted ? '#a78bfa' : '#ffffff'),
        border: '1px solid #d1d5db',
        borderRadius: '0 0 3px 3px',
        cursor: 'pointer',
        transition: 'all 0.1s ease',
        boxShadow: isActive ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)',
        transform: isActive ? 'translateY(2px)' : 'translateY(0)',
      }
    }
  }

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="inline-flex items-end relative min-w-max px-4">
        {keys.map((key, index) => (
          <div
            key={`${key.note}-${index}`}
            style={getKeyStyle(key)}
            onClick={() => playNote(key.note)}
            className="relative hover:opacity-80 select-none"
          >
            {!key.isBlack && showLabels && (
              <div
                className="absolute bottom-2 left-0 right-0 text-center text-xs font-medium"
                style={{
                  color: isKeyActive(key.note) || isKeyHighlighted(key.note) ? '#1f2937' : '#6b7280'
                }}
              >
                {key.note}
              </div>
            )}
          </div>
        ))}
      </div>

      {!isLoaded && (
        <div className="text-center mt-4 text-sm text-muted-foreground">
          🎵 Chargement des samples de piano...
        </div>
      )}

      <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-400 rounded" />
          <span>Note à jouer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-400 rounded" />
          <span>Note jouée</span>
        </div>
      </div>
    </div>
  )
}
