'use client'

/**
 * Métronome — clic audio précis (Web Audio, planification lookahead)
 * + pulsation visuelle laiton. Temps fort accentué en début de mesure.
 */

import { useEffect, useRef, useState } from 'react'
import { Play, Square, Minus, Plus } from 'lucide-react'

export function Metronome({ compact = false }: { compact?: boolean }) {
  const [bpm, setBpm] = useState(60)
  const [running, setRunning] = useState(false)
  const [beat, setBeat] = useState(-1) // 0-3, pour la pulsation visuelle

  const ctxRef = useRef<AudioContext | null>(null)
  const nextTickRef = useRef(0)
  const beatIndexRef = useRef(0)
  const timerRef = useRef<number | null>(null)
  const bpmRef = useRef(bpm)
  bpmRef.current = bpm

  useEffect(() => {
    if (!running) {
      if (timerRef.current) window.clearInterval(timerRef.current)
      setBeat(-1)
      return
    }

    const ctx = ctxRef.current ?? new AudioContext()
    ctxRef.current = ctx
    void ctx.resume()
    nextTickRef.current = ctx.currentTime + 0.08
    beatIndexRef.current = 0

    // Planification lookahead : précis même si le thread JS est occupé
    const tick = () => {
      while (nextTickRef.current < ctx.currentTime + 0.12) {
        const isDownbeat = beatIndexRef.current % 4 === 0
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.frequency.value = isDownbeat ? 1568 : 1047 // Sol6 / Do6
        gain.gain.setValueAtTime(isDownbeat ? 0.5 : 0.3, nextTickRef.current)
        gain.gain.exponentialRampToValueAtTime(0.001, nextTickRef.current + 0.06)
        osc.connect(gain).connect(ctx.destination)
        osc.start(nextTickRef.current)
        osc.stop(nextTickRef.current + 0.07)

        const beatToShow = beatIndexRef.current % 4
        const delay = Math.max(0, (nextTickRef.current - ctx.currentTime) * 1000)
        window.setTimeout(() => setBeat(beatToShow), delay)

        beatIndexRef.current += 1
        nextTickRef.current += 60 / bpmRef.current
      }
    }

    tick()
    timerRef.current = window.setInterval(tick, 60)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [running])

  useEffect(() => () => { void ctxRef.current?.close() }, [])

  return (
    <div className={`flex items-center gap-4 ${compact ? '' : 'glass rounded-2xl p-4'}`}>
      <button
        onClick={() => setRunning((r) => !r)}
        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
          running ? 'btn-accent' : 'btn-ghost text-dim'
        }`}
        aria-label={running ? 'Arrêter le métronome' : 'Démarrer le métronome'}
      >
        {running ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>

      {/* Pulsation : 4 temps, temps fort en laiton */}
      <div className="flex items-center gap-1.5" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-full transition-all duration-100"
            style={
              beat === i
                ? {
                    background: i === 0 ? '#f0c66a' : '#f2efe8',
                    boxShadow: i === 0 ? '0 0 12px rgba(224,168,60,0.8)' : '0 0 8px rgba(242,239,232,0.5)',
                    transform: 'scale(1.35)',
                  }
                : { background: 'rgba(255,255,255,0.14)' }
            }
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setBpm((b) => Math.max(40, b - 5))}
          className="btn-ghost rounded-lg p-1.5 text-dim"
          aria-label="Ralentir"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-20 text-center text-sm font-bold tabular-nums text-[#f2efe8]">
          {bpm} <span className="text-faint font-semibold">BPM</span>
        </span>
        <button
          onClick={() => setBpm((b) => Math.min(200, b + 5))}
          className="btn-ghost rounded-lg p-1.5 text-dim"
          aria-label="Accélérer"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
