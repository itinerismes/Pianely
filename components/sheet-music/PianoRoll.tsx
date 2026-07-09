'use client'

/**
 * PianoRoll — vue unifiée façon Rousseau/Synthesia.
 *
 * Les notes tombent directement SUR le clavier dessiné en bas du canvas :
 * chaque colonne est alignée avec sa touche, la touche s'illumine quand la
 * note l'atteint. Main gauche en bleu, main droite en vert, halo au contact.
 *
 * - `highlightedKeys` (mode Practice) : touches attendues, en laiton
 * - entrée MIDI : les touches réellement enfoncées s'illuminent
 * - clic sur une touche → `onKeyPress` (jouable à la souris sans clavier)
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import { useMidiInput, useMidiNotes } from '@/hooks/useMidiInput'
import { noteNameToMidi, midiNoteToName } from '@/lib/midi/midiEngine'
import { toFrenchNote } from '@/lib/music/noteNames'

interface Note {
  midi: number
  name: string
  time: number
  duration: number
  velocity: number
}

interface PianoRollProps {
  notes?: Note[]
  currentTime?: number
  /** Touches à jouer maintenant (mode Practice) — illuminées en laiton */
  highlightedKeys?: string[]
  onKeyPress?: (note: string) => void
  showLabels?: boolean
  /** Clavier seul (leçons, jeu libre, échauffement) : zone de chute réduite */
  keyboardOnly?: boolean
  /** Jouer le son des touches cliquées (sampler chargé à la demande) */
  clickSound?: boolean
  /** Relayer le clavier MIDI vers onKeyPress (à laisser false si le parent
   *  écoute déjà le MIDI lui-même, comme le mode Practice) */
  midiToKeyPress?: boolean
  /** Lecture en cours : active la traînée lumineuse derrière les notes */
  playing?: boolean
  /** Durée d'une mesure (s) : dessine les barres de mesure qui défilent */
  secondsPerMeasure?: number
  /** Compte à rebours 3-2-1 affiché en surimpression */
  countdown?: number | null
}

const FALL_SPEED = 170 // px par seconde
const KEYBOARD_H = 110
const BLACK_H = 68
const LEFT_SPLIT = 60 // < Do4 = main gauche

const COLOR_LEFT = '#38bdf8'
const COLOR_RIGHT = '#4ade80'
const COLOR_BRASS = '#f0c66a'

const isBlackPc = (midi: number) => [1, 3, 6, 8, 10].includes(midi % 12)

/** Géométrie du clavier pour une plage MIDI donnée */
function buildLayout(minMidi: number, maxMidi: number, width: number) {
  const whites: number[] = []
  for (let m = minMidi; m <= maxMidi; m++) if (!isBlackPc(m)) whites.push(m)
  const w = width / whites.length
  const xOf = new Map<number, { x: number; w: number }>()
  whites.forEach((m, i) => xOf.set(m, { x: i * w, w }))
  for (let m = minMidi; m <= maxMidi; m++) {
    if (isBlackPc(m)) {
      const prev = xOf.get(m - 1)
      if (prev) xOf.set(m, { x: prev.x + prev.w * 0.66, w: w * 0.62 })
    }
  }
  return { whites, whiteW: w, xOf }
}

export function PianoRoll({
  notes = [],
  currentTime = 0,
  highlightedKeys = [],
  onKeyPress,
  showLabels = true,
  keyboardOnly = false,
  clickSound = false,
  midiToKeyPress = false,
  playing = false,
  secondsPerMeasure,
  countdown = null,
}: PianoRollProps) {
  const HEIGHT = keyboardOnly ? 190 : 520
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { activeNotes } = useMidiInput()
  // Particules d'impact (façon Rousseau) — persistantes entre les frames
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; life: number; color: string }[]>([])
  const lastDrawRef = useRef<number>(0)

  // 88 touches (La0→Do8, comme le P-145) ou plage adaptée au morceau
  const [fullRange, setFullRange] = useState(true)
  const [noteNames, setNoteNames] = useState(true)
  useEffect(() => {
    const saved = localStorage.getItem('pianely-roll-88')
    if (saved !== null) setFullRange(saved === '1')
    const names = localStorage.getItem('pianely-roll-names')
    if (names !== null) setNoteNames(names === '1')
  }, [])
  const toggleNames = () => {
    setNoteNames((v) => {
      localStorage.setItem('pianely-roll-names', v ? '0' : '1')
      return !v
    })
  }
  const toggleRange = (full: boolean) => {
    setFullRange(full)
    localStorage.setItem('pianely-roll-88', full ? '1' : '0')
  }

  const [minMidi, maxMidi] = useMemo(() => {
    if (fullRange) return [21, 108] // les 88 touches du P-145
    const pitches = notes.map((n) => n.midi)
    let lo = pitches.length ? Math.min(...pitches) : 48
    let hi = pitches.length ? Math.max(...pitches) : 84
    lo = Math.floor(lo / 12) * 12
    hi = Math.ceil((hi + 1) / 12) * 12 - 1
    while (hi - lo < 35) { if (lo > 21) lo -= 12; if (hi < 108) hi += 12 }
    return [Math.max(21, lo), Math.min(108, hi)]
  }, [notes, fullRange])

  const highlightedMidis = useMemo(
    () => new Set(highlightedKeys.map((k) => noteNameToMidi(k)).filter((m): m is number => m !== null)),
    [highlightedKeys]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const dpr = window.devicePixelRatio || 1
    const width = container.clientWidth
    canvas.width = width * dpr
    canvas.height = HEIGHT * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${HEIGHT}px`
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const { whites, whiteW, xOf } = buildLayout(minMidi, maxMidi, width)
    const kbTop = HEIGHT - KEYBOARD_H

    // ── Fond ──
    const bg = ctx.createLinearGradient(0, 0, 0, kbTop)
    bg.addColorStop(0, '#0a0a0e')
    bg.addColorStop(1, '#12111a')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, width, kbTop)

    // Repères d'octaves (chaque Do)
    ctx.strokeStyle = 'rgba(255,255,255,0.05)'
    for (const m of whites) {
      if (m % 12 === 0) {
        const k = xOf.get(m)!
        ctx.beginPath(); ctx.moveTo(k.x, 0); ctx.lineTo(k.x, kbTop); ctx.stroke()
      }
    }

    // Barres de mesure : lignes horizontales qui défilent avec les notes
    if (secondsPerMeasure && secondsPerMeasure > 0.5 && !keyboardOnly) {
      const firstBar = Math.max(0, Math.floor(currentTime / secondsPerMeasure))
      for (let b = firstBar; ; b++) {
        const y = kbTop - (b * secondsPerMeasure - currentTime) * FALL_SPEED
        if (y < 0) break
        if (y > kbTop) continue
        ctx.strokeStyle = b % 4 === 0 ? 'rgba(240,198,106,0.14)' : 'rgba(255,255,255,0.06)'
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke()
      }
    }

    // ── Notes tombantes + touches « sonnantes » ──
    const sounding = new Set<number>()
    for (const note of notes) {
      const key = xOf.get(note.midi)
      if (!key) continue
      const yBottom = kbTop - (note.time - currentTime) * FALL_SPEED
      const h = Math.max(8, note.duration * FALL_SPEED)
      const yTop = yBottom - h
      if (yBottom < 0 || yTop > kbTop) {
        if (currentTime >= note.time && currentTime < note.time + note.duration) sounding.add(note.midi)
        continue
      }

      const color = note.midi < LEFT_SPLIT ? COLOR_LEFT : COLOR_RIGHT
      const atLine = yBottom >= kbTop - 2
      if (currentTime >= note.time && currentTime < note.time + note.duration) sounding.add(note.midi)

      const drawTop = Math.max(0, yTop)
      const drawBottom = Math.min(kbTop, yBottom)
      const grad = ctx.createLinearGradient(0, drawTop, 0, drawBottom)
      grad.addColorStop(0, color + '99')
      grad.addColorStop(1, color)
      ctx.fillStyle = grad
      ctx.shadowColor = color
      ctx.shadowBlur = atLine ? 22 : 8
      const nx = note.midi < LEFT_SPLIT || !isBlackPc(note.midi) ? key.x + 1.5 : key.x
      const nw = isBlackPc(note.midi) ? key.w : key.w - 3
      ctx.beginPath()
      ctx.roundRect(isBlackPc(note.midi) ? key.x : nx, drawTop, nw, drawBottom - drawTop, 4)
      ctx.fill()
      ctx.shadowBlur = 0

      // Traînée lumineuse pendant la lecture (motion blur léger)
      if (playing && drawTop > 0) {
        const trail = ctx.createLinearGradient(0, drawTop - 26, 0, drawTop)
        trail.addColorStop(0, color + '00')
        trail.addColorStop(1, color + '2e')
        ctx.fillStyle = trail
        ctx.fillRect(isBlackPc(note.midi) ? key.x : nx, drawTop - 26, nw, 26)
      }

      // Nom de la note sur la note (apprentissage)
      const noteH = drawBottom - drawTop
      if (noteNames && nw >= 15 && noteH >= 17 && drawBottom <= kbTop) {
        ctx.fillStyle = '#0a0a0e'
        ctx.font = '700 9px var(--font-manrope), sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(toFrenchNote(midiNoteToName(note.midi)).replace(/-?\d+$/, ''), (isBlackPc(note.midi) ? key.x : nx) + nw / 2, drawBottom - 5)
      }
    }

    // Halo « impact » + particules (façon Rousseau)
    const now = performance.now()
    const dt = lastDrawRef.current ? Math.min(0.05, (now - lastDrawRef.current) / 1000) : 0.016
    lastDrawRef.current = now
    const particles = particlesRef.current

    for (const m of sounding) {
      const key = xOf.get(m)
      if (!key) continue
      const color = m < LEFT_SPLIT ? COLOR_LEFT : COLOR_RIGHT
      const cx = key.x + key.w / 2
      const halo = ctx.createRadialGradient(cx, kbTop, 0, cx, kbTop, 34)
      halo.addColorStop(0, color + 'aa')
      halo.addColorStop(1, color + '00')
      ctx.fillStyle = halo
      ctx.fillRect(cx - 34, kbTop - 34, 68, 34)

      // Jaillissement : 2 étincelles par frame et par note sonnante
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: cx + (Math.random() - 0.5) * key.w,
          y: kbTop - 2,
          vx: (Math.random() - 0.5) * 60,
          vy: -60 - Math.random() * 120,
          life: 0.55 + Math.random() * 0.4,
          color,
        })
      }
    }

    // Animer et dessiner les étincelles
    for (let i = particles.length - 1; i >= 0; i--) {
      const pt = particles[i]
      pt.life -= dt
      if (pt.life <= 0) { particles.splice(i, 1); continue }
      pt.x += pt.vx * dt
      pt.y += pt.vy * dt
      pt.vy += 60 * dt // légère gravité
      const alpha = Math.min(1, pt.life * 1.8)
      ctx.globalAlpha = alpha
      ctx.fillStyle = pt.color
      ctx.shadowColor = pt.color
      ctx.shadowBlur = 6
      ctx.beginPath()
      ctx.arc(pt.x, pt.y, 1.3 + pt.life, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
    ctx.shadowBlur = 0
    if (particles.length > 400) particles.splice(0, particles.length - 400)

    // ── Clavier ──
    const pressed = activeNotes // Set<number> — touches réellement enfoncées
    const keyFill = (m: number, black: boolean): string | CanvasGradient => {
      if (pressed.has(m)) return black ? '#22c55e' : '#6ee7a0'
      if (highlightedMidis.has(m)) return black ? '#d99a26' : COLOR_BRASS
      if (sounding.has(m)) return m < LEFT_SPLIT ? COLOR_LEFT : COLOR_RIGHT
      return black ? '#141319' : '#f2efe8'
    }

    // Feutre — la fine bande rouge sombre des vrais pianos
    ctx.fillStyle = '#7a2c2c'
    ctx.fillRect(0, kbTop - 3, width, 3)

    // Blanches
    for (const m of whites) {
      const k = xOf.get(m)!
      ctx.fillStyle = keyFill(m, false)
      ctx.fillRect(k.x + 0.5, kbTop, k.w - 1, KEYBOARD_H)
      ctx.strokeStyle = 'rgba(0,0,0,0.55)'
      ctx.strokeRect(k.x + 0.5, kbTop, k.w - 1, KEYBOARD_H)
      // Repère Do4 : le Do du milieu, point laiton (comme un autocollant)
      if (m === 60) {
        ctx.fillStyle = COLOR_BRASS
        ctx.beginPath()
        ctx.arc(k.x + k.w / 2, HEIGHT - 26, Math.min(4, k.w * 0.18), 0, Math.PI * 2)
        ctx.fill()
      }
      if (showLabels && m % 12 === 0 && whiteW > 13) {
        ctx.fillStyle = sounding.has(m) || pressed.has(m) || highlightedMidis.has(m) ? '#1a1408' : '#8a857b'
        ctx.font = `600 10px var(--font-manrope), sans-serif`
        ctx.textAlign = 'center'
        ctx.fillText(toFrenchNote(midiNoteToName(m)), k.x + k.w / 2, HEIGHT - 8)
      }
    }
    // Noires
    for (let m = minMidi; m <= maxMidi; m++) {
      if (!isBlackPc(m)) continue
      const k = xOf.get(m)
      if (!k) continue
      ctx.fillStyle = keyFill(m, true)
      ctx.beginPath()
      ctx.roundRect(k.x, kbTop, k.w, BLACK_H, [0, 0, 3, 3])
      ctx.fill()
    }
  }, [notes, currentTime, minMidi, maxMidi, highlightedMidis, activeNotes, showLabels, noteNames, playing, secondsPerMeasure, keyboardOnly, HEIGHT])

  // Relais MIDI optionnel vers onKeyPress (échauffement, leçons, jeu libre)
  const onKeyPressRef = useRef(onKeyPress)
  onKeyPressRef.current = onKeyPress
  useMidiNotes((event) => {
    if (midiToKeyPress && event.type === 'noteon') {
      onKeyPressRef.current?.(midiNoteToName(event.note))
    }
  })

  // Son au clic — Tone.Sampler chargé au premier clic seulement
  const samplerRef = useRef<import('tone').Sampler | null>(null)
  const playClick = async (name: string) => {
    if (!clickSound) return
    const Tone = await import('tone')
    if (!samplerRef.current) {
      samplerRef.current = new Tone.Sampler({
        urls: { C4: 'C4.mp3', 'D#4': 'Ds4.mp3', 'F#4': 'Fs4.mp3', A4: 'A4.mp3' },
        release: 1,
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
      }).toDestination()
      await Tone.loaded()
    }
    await Tone.start()
    samplerRef.current.triggerAttackRelease(name, '8n')
  }
  useEffect(() => () => { samplerRef.current?.dispose() }, [])

  // Clic → touche (jouable à la souris)
  const handleClick = (e: React.MouseEvent) => {
    if (!onKeyPress || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if (y < HEIGHT - KEYBOARD_H) return
    const { whites, xOf } = buildLayout(minMidi, maxMidi, rect.width)
    // Noires d'abord (au-dessus)
    if (y < HEIGHT - KEYBOARD_H + BLACK_H) {
      for (let m = minMidi; m <= maxMidi; m++) {
        if (!isBlackPc(m)) continue
        const k = xOf.get(m)
        if (k && x >= k.x && x <= k.x + k.w) {
          const name = midiNoteToName(m)
          void playClick(name); onKeyPress(name); return
        }
      }
    }
    for (const m of whites) {
      const k = xOf.get(m)!
      if (x >= k.x && x <= k.x + k.w) {
        const name = midiNoteToName(m)
        void playClick(name); onKeyPress(name); return
      }
    }
  }

  return (
    <div ref={containerRef} className="panel relative overflow-hidden rounded-2xl">
      <div className="glass absolute right-3 top-3 z-10 flex rounded-full p-0.5">
        {([[true, '88 touches'], [false, 'Zoom morceau']] as const).map(([full, label]) => (
          <button
            key={label}
            onClick={() => toggleRange(full)}
            className={`rounded-full px-3 py-1 text-[11px] font-bold transition-all ${
              fullRange === full ? 'btn-accent' : 'text-dim hover:text-[#f2efe8]'
            }`}
          >
            {label}
          </button>
        ))}
        {!keyboardOnly && (
          <button
            onClick={toggleNames}
            className={`rounded-full px-3 py-1 text-[11px] font-bold transition-all ${
              noteNames ? 'btn-accent' : 'text-dim hover:text-[#f2efe8]'
            }`}
          >
            Noms
          </button>
        )}
      </div>

      {/* Compte à rebours 3-2-1 : le temps de poser les mains */}
      {countdown !== null && countdown > 0 && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-[#0a0a0e]/40">
          <span
            key={countdown}
            className="font-display accent-brass text-8xl drop-shadow-[0_0_30px_rgba(224,168,60,0.6)]"
            style={{ animation: 'rise-in 0.3s ease-out' }}
          >
            {countdown}
          </span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        onPointerDown={handleClick}
        className={onKeyPress ? 'cursor-pointer' : ''}
        aria-label="Notes tombantes et clavier"
      />
    </div>
  )
}
