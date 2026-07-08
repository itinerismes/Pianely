'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import * as Tone from 'tone'
import { useMidiInput, useMidiNotes } from '@/hooks/useMidiInput'
import { midiNoteToName } from '@/lib/midi/midiEngine'

interface PianoProps {
  highlightedKeys?: string[] // For PiecePlayer usage: ["C4", "E4", "G4"]
  highlightedNotes?: string[] // For PianoDemo usage: ["C", "E", "G"]
  onKeyPress?: (note: string) => void
  onNotePlay?: (note: string) => void
  octaves?: number
  startOctave?: number
  showLabels?: boolean
  autoScroll?: boolean // Auto-scroll to highlighted keys
  /** Écouter le clavier MIDI branché en USB (P-145…). Activé par défaut. */
  midiInput?: boolean
  /** Relayer les notes MIDI vers onKeyPress/onNotePlay. À désactiver quand
   *  le parent écoute déjà le MIDI lui-même (évite le double comptage). */
  midiForwardsCallbacks?: boolean
  /** Jouer le son des notes MIDI dans le navigateur. Désactivé par défaut :
   *  le piano numérique produit déjà son propre son. */
  soundOnMidi?: boolean
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
  autoScroll = true,
  midiInput = true,
  midiForwardsCallbacks = true,
  soundOnMidi = false
}: PianoProps) {
  const [sampler, setSampler] = useState<Tone.Sampler | null>(null)
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const keyRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const { status: midiStatus } = useMidiInput()

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
    const newSampler = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => setIsLoaded(true)
    }).toDestination()

    setSampler(newSampler)

    return () => {
      newSampler.dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pressKey = useCallback((note: string) => {
    setActiveKeys(prev => new Set(prev).add(note))
    onKeyPress?.(note)
    onNotePlay?.(note)
  }, [onKeyPress, onNotePlay])

  const releaseKey = useCallback((note: string) => {
    setActiveKeys(prev => {
      const newSet = new Set(prev)
      newSet.delete(note)
      return newSet
    })
  }, [])

  // ── Entrée MIDI live : le vrai clavier illumine le piano virtuel ──
  useMidiNotes((event) => {
    if (!midiInput) return
    const note = midiNoteToName(event.note)

    if (event.type === 'noteon') {
      if (midiForwardsCallbacks) {
        pressKey(note)
      } else {
        // Affichage seul : le parent écoute déjà le MIDI lui-même
        setActiveKeys(prev => new Set(prev).add(note))
      }
      if (soundOnMidi && sampler && isLoaded) {
        sampler.triggerAttackRelease(note, '8n', undefined, event.velocity / 127)
      }
    } else {
      releaseKey(note)
    }
  })

  const playNote = async (note: string) => {
    if (!sampler || !isLoaded) return

    try {
      await Tone.start()
      sampler.triggerAttackRelease(note, '8n')
      pressKey(note)
      setTimeout(() => releaseKey(note), 200)
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

  // Auto-scroll to show highlighted keys
  useEffect(() => {
    if (!autoScroll || highlightedKeys.length === 0 || !containerRef.current) return

    const firstHighlightedKey = highlightedKeys.find(key => keyRefs.current.has(key))
    if (!firstHighlightedKey) return

    const keyElement = keyRefs.current.get(firstHighlightedKey)
    if (!keyElement) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()

    const keyLeft = keyElement.offsetLeft
    const keyCenter = keyLeft + keyElement.offsetWidth / 2
    const distance = Math.abs(keyCenter - containerRect.width / 2 - container.scrollLeft)

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

  /* Style « Scène » :
     — laiton lumineux = note à jouer
     — vert scène      = note jouée (clic ou clavier MIDI)              */
  const getKeyStyle = (key: PianoKey): React.CSSProperties => {
    const isHighlighted = isKeyHighlighted(key.note)
    const isActive = isKeyActive(key.note)

    if (key.isBlack) {
      return {
        width: '30px',
        height: '120px',
        background: isActive
          ? 'linear-gradient(180deg, #6ee7a0, #22c55e)'
          : isHighlighted
            ? 'linear-gradient(180deg, #f0c66a, #d99a26)'
            : 'linear-gradient(180deg, #26242a 0%, #0c0b0f 90%)',
        zIndex: 10,
        marginLeft: '-15px',
        marginRight: '-15px',
        border: '1px solid rgba(0,0,0,0.8)',
        borderTop: 'none',
        borderRadius: '0 0 4px 4px',
        cursor: 'pointer',
        transition: 'all 0.1s ease',
        boxShadow: isActive
          ? '0 0 16px 4px rgba(74, 222, 128, 0.5), 0 4px 8px rgba(0,0,0,0.4)'
          : isHighlighted
            ? '0 0 16px 4px rgba(224, 168, 60, 0.55), 0 4px 8px rgba(0,0,0,0.4)'
            : '0 4px 10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)',
        transform: isActive ? 'translateY(2px)' : 'translateY(0)',
      }
    } else {
      return {
        width: '45px',
        height: '180px',
        background: isActive
          ? 'linear-gradient(180deg, #a7f3c8, #4ade80)'
          : isHighlighted
            ? 'linear-gradient(180deg, #f7e3b0 0%, #f0c66a 60%, #d99a26 100%)'
            : 'linear-gradient(180deg, #f5f2ea 0%, #d8d3c8 100%)',
        border: '1px solid rgba(0,0,0,0.35)',
        borderRadius: '0 0 4px 4px',
        cursor: 'pointer',
        transition: 'all 0.1s ease',
        boxShadow: isActive
          ? '0 0 18px 4px rgba(74, 222, 128, 0.45), inset 0 -4px 8px rgba(0,0,0,0.15)'
          : isHighlighted
            ? '0 0 18px 4px rgba(224, 168, 60, 0.45), inset 0 -4px 8px rgba(0,0,0,0.12)'
            : 'inset 0 -4px 8px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.35)',
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
            className="relative hover:opacity-90 select-none"
          >
            {!key.isBlack && showLabels && (
              <div
                className="absolute bottom-2 left-0 right-0 text-center text-xs font-semibold"
                style={{
                  color: isKeyActive(key.note) || isKeyHighlighted(key.note) ? '#1a1408' : '#8a857b'
                }}
              >
                {key.note}
              </div>
            )}
          </div>
        ))}
      </div>

      {!isLoaded && (
        <div className="text-center mt-4 text-sm text-dim">
          🎵 Chargement des samples de piano...
        </div>
      )}

      <div className="flex items-center justify-center gap-5 mt-4 text-xs text-dim">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ background: 'linear-gradient(180deg, #f0c66a, #d99a26)' }} />
          <span>Note à jouer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ background: 'linear-gradient(180deg, #6ee7a0, #22c55e)' }} />
          <span>Note jouée</span>
        </div>
        {midiInput && midiStatus === 'connected' && (
          <div className="badge-stage flex items-center gap-1.5 rounded-full px-2.5 py-1 font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            Clavier USB actif
          </div>
        )}
      </div>
    </div>
  )
}
