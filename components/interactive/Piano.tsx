'use client'

import { useEffect, useState, useRef } from 'react'
import * as Tone from 'tone'

interface PianoProps {
  highlightedKeys?: string[] // For PiecePlayer usage: ["C4", "E4", "G4"]
  highlightedNotes?: string[] // For PianoDemo usage: ["C", "E", "G"]
  onKeyPress?: (note: string) => void
  onNotePlay?: (note: string) => void
  octaves?: number
  startOctave?: number
  showLabels?: boolean
  autoScroll?: boolean // Auto-scroll to highlighted keys
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
  showLabels = true,
  autoScroll = true
}: PianoProps) {
  const [sampler, setSampler] = useState<Tone.Sampler | null>(null)
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const keyRefs = useRef<Map<string, HTMLDivElement>>(new Map())

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
      // Vérifier quelles touches existent dans le piano
      const pianoKeys = keys.map(k => k.note)
      const matchingKeys = highlightedKeys.filter(k => pianoKeys.includes(k))
      const missingKeys = highlightedKeys.filter(k => !pianoKeys.includes(k))
      if (matchingKeys.length > 0) {
        console.log('🎹 Matching keys on piano:', matchingKeys)
      }
      if (missingKeys.length > 0) {
        console.log('⚠️ Keys NOT on piano (out of range):', missingKeys)
      }
    }
  }, [highlightedKeys, keys])

  // Auto-scroll to show highlighted keys
  useEffect(() => {
    if (!autoScroll || highlightedKeys.length === 0 || !containerRef.current) return

    // Trouver la première touche highlighted qui a une ref
    const firstHighlightedKey = highlightedKeys.find(key => keyRefs.current.has(key))
    if (!firstHighlightedKey) return

    const keyElement = keyRefs.current.get(firstHighlightedKey)
    if (!keyElement) return

    // Calculer le scroll pour centrer la touche
    const container = containerRef.current
    const keyRect = keyElement.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    // Scroll seulement si la touche est hors de la vue
    const keyLeft = keyElement.offsetLeft
    const keyCenter = keyLeft + keyElement.offsetWidth / 2
    const containerCenter = container.scrollLeft + containerRect.width / 2

    // Scroll smoothly vers la touche si elle est trop loin du centre
    const distance = Math.abs(keyCenter - containerCenter - container.scrollLeft)
    if (distance > containerRect.width / 3) {
      container.scrollTo({
        left: keyCenter - containerRect.width / 2,
        behavior: 'smooth'
      })
    }
  }, [highlightedKeys, autoScroll])

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
        border: isHighlighted ? '3px solid #fbbf24' : '1px solid #000', // Yellow border when highlighted
        borderRadius: '0 0 3px 3px',
        cursor: 'pointer',
        transition: 'all 0.1s ease',
        boxShadow: isHighlighted
          ? '0 0 15px 5px rgba(251, 191, 36, 0.6)'  // Glow effect
          : (isActive ? '0 4px 8px rgba(0,0,0,0.4)' : '0 2px 4px rgba(0,0,0,0.3)'),
        transform: isActive ? 'translateY(2px)' : 'translateY(0)',
      }
    } else {
      return {
        width: '45px',
        height: '180px',
        backgroundColor: isActive ? '#86efac' : (isHighlighted ? '#a78bfa' : '#ffffff'),
        border: isHighlighted ? '3px solid #8b5cf6' : '1px solid #d1d5db', // Purple border when highlighted
        borderRadius: '0 0 3px 3px',
        cursor: 'pointer',
        transition: 'all 0.1s ease',
        boxShadow: isHighlighted
          ? '0 0 15px 5px rgba(139, 92, 246, 0.5)'  // Glow effect
          : (isActive ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'),
        transform: isActive ? 'translateY(2px)' : 'translateY(0)',
      }
    }
  }

  return (
    <div ref={containerRef} className="w-full overflow-x-auto pb-4 scroll-smooth">
      <div className="inline-flex items-end relative min-w-max px-4">
        {keys.map((key, index) => (
          <div
            key={`${key.note}-${index}`}
            ref={(el) => {
              if (el) keyRefs.current.set(key.note, el)
            }}
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
