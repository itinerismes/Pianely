'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface PianoProps {
  startOctave?: number
  octaves?: number
  highlightedNotes?: string[]
  onNotePlay?: (note: string) => void
  showLabels?: boolean
  className?: string
}

const WHITE_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const BLACK_KEYS = ['C#', 'D#', null, 'F#', 'G#', 'A#', null] // null = no black key

const NOTE_FREQUENCIES: Record<string, number> = {
  'C2': 65.41, 'C#2': 69.30, 'D2': 73.42, 'D#2': 77.78, 'E2': 82.41, 'F2': 87.31, 'F#2': 92.50, 'G2': 98.00, 'G#2': 103.83, 'A2': 110.00, 'A#2': 116.54, 'B2': 123.47,
  'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'B3': 246.94,
  'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
  'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'B5': 987.77,
  'C6': 1046.50
}

const NOTE_NAMES: Record<string, string> = {
  'C': 'Do', 'C#': 'Do#', 'D': 'Ré', 'D#': 'Ré#', 'E': 'Mi',
  'F': 'Fa', 'F#': 'Fa#', 'G': 'Sol', 'G#': 'Sol#', 'A': 'La', 'A#': 'La#', 'B': 'Si'
}

export function Piano({
  startOctave = 3,
  octaves = 2,
  highlightedNotes = [],
  onNotePlay,
  showLabels = true,
  className
}: PianoProps) {
  const [activeNotes, setActiveNotes] = useState<Set<string>>(new Set())
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize Web Audio API
    if (typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return () => {
      audioContextRef.current?.close()
    }
  }, [])

  const playNote = useCallback((note: string) => {
    const frequency = NOTE_FREQUENCIES[note]
    if (!frequency || !audioContextRef.current) return

    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5)

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.5)

    setActiveNotes(prev => new Set(prev).add(note))
    setTimeout(() => {
      setActiveNotes(prev => {
        const next = new Set(prev)
        next.delete(note)
        return next
      })
    }, 150)

    onNotePlay?.(note)
  }, [onNotePlay])

  const getNoteName = (key: string, octave: number) => `${key}${octave}`

  const isHighlighted = useCallback((note: string) => {
    return highlightedNotes.some(highlighted => note.startsWith(highlighted))
  }, [highlightedNotes])

  const renderOctave = (octave: number) => {
    return (
      <div key={octave} className="relative inline-flex">
        {/* White keys */}
        {WHITE_KEYS.map((key, index) => {
          const note = getNoteName(key, octave)
          const isActive = activeNotes.has(note)
          const highlighted = isHighlighted(note)

          return (
            <button
              key={note}
              onClick={() => playNote(note)}
              className={cn(
                'relative w-12 h-40 bg-white border-2 border-gray-300 rounded-b-lg transition-all duration-75',
                'hover:bg-gray-50 active:bg-gray-200',
                'focus:outline-none focus:ring-2 focus:ring-purple-400',
                isActive && 'bg-gray-200 transform scale-95',
                highlighted && 'ring-2 ring-purple-500 ring-offset-2'
              )}
              style={{
                boxShadow: isActive
                  ? 'inset 0 4px 8px rgba(0,0,0,0.2)'
                  : '0 4px 8px rgba(0,0,0,0.1)'
              }}
            >
              {showLabels && (
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600">
                  {NOTE_NAMES[key]}
                </span>
              )}
            </button>
          )
        })}

        {/* Black keys */}
        <div className="absolute top-0 left-0 w-full h-24 pointer-events-none">
          {BLACK_KEYS.map((key, index) => {
            if (!key) return <div key={`empty-${index}`} className="w-12 inline-block" />

            const note = getNoteName(key, octave)
            const isActive = activeNotes.has(note)
            const highlighted = isHighlighted(note)

            return (
              <button
                key={note}
                onClick={() => playNote(note)}
                className={cn(
                  'relative w-8 h-24 bg-gray-900 border-2 border-gray-700 rounded-b-lg transition-all duration-75 pointer-events-auto',
                  'hover:bg-gray-800 active:bg-gray-700',
                  'focus:outline-none focus:ring-2 focus:ring-purple-400',
                  isActive && 'bg-gray-700 transform scale-95',
                  highlighted && 'ring-2 ring-yellow-400 ring-offset-2'
                )}
                style={{
                  marginLeft: index === 0 ? '32px' : '-16px',
                  boxShadow: isActive
                    ? 'inset 0 4px 8px rgba(0,0,0,0.4)'
                    : '0 4px 8px rgba(0,0,0,0.3)'
                }}
              >
                {showLabels && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-white">
                    {NOTE_NAMES[key]}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('inline-block bg-gradient-to-b from-gray-200 to-gray-300 p-6 rounded-2xl shadow-2xl', className)}>
      <div className="flex">
        {Array.from({ length: octaves }, (_, i) => renderOctave(startOctave + i))}
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        🎹 Clique sur les touches pour jouer
      </div>
    </div>
  )
}
