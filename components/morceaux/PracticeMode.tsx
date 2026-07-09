'use client'

/**
 * Mode Practice « Rocksmith » — apprendre un morceau en le jouant vraiment.
 *
 * Les notes tombent vers la ligne de frappe ; quand une note l'atteint,
 * le temps se fige jusqu'à ce que la bonne touche soit jouée sur le clavier
 * MIDI (ou cliquée sur le piano virtuel). Si tu joues en rythme, la lecture
 * ne s'arrête jamais : les notes jouées un peu en avance comptent.
 *
 * Scoring : notes justes / erreurs / précision, streak de notes sans faute.
 * En fin de session : practice_logs + piece_progress sont mis à jour.
 */

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { RotateCcw, Play, Pause, Trophy, Target, Flame } from 'lucide-react'
import { PianoRoll } from '@/components/sheet-music/PianoRoll'
import { Slider } from '@/components/ui/slider'
import { useMidiInput, useMidiNotes } from '@/hooks/useMidiInput'
import { midiNoteToName } from '@/lib/midi/midiEngine'
import { toFrenchNote } from '@/lib/music/noteNames'
import { velocityToNuance } from '@/lib/music/chords'
import { Metronome } from '@/components/tools/Metronome'
import { celebratePieceComplete } from '@/lib/celebrate'
import { createClient } from '@/lib/supabase/client'
import * as Tone from 'tone'

interface Note {
  midi: number
  name: string
  time: number
  duration: number
  velocity: number
}

/** Notes simultanées (accord) regroupées en une « porte » à franchir */
interface Gate {
  time: number
  notes: string[]
}

// Fenêtre pendant laquelle une note jouée en avance compte (secondes)
const EARLY_WINDOW = 0.35
// Deux notes séparées de moins de 50 ms = un accord
const CHORD_EPSILON = 0.05
// En dessous de Do4 (MIDI 60) = main gauche (approximation débutant)
const LEFT_HAND_SPLIT = 60

type HandMode = 'both' | 'right' | 'left'

interface PracticeModeProps {
  pieceId: string
  pieceTitle: string
  notes: Note[]
  totalDuration: number
  secondsPerMeasure?: number
}

export function PracticeMode({ pieceId, pieceTitle, notes, totalDuration, secondsPerMeasure }: PracticeModeProps) {
  const { status: midiStatus } = useMidiInput()

  const [isRunning, setIsRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [speed, setSpeed] = useState(100) // % du tempo original
  const [hand, setHand] = useState<HandMode>('both')
  const [waitingNotes, setWaitingNotes] = useState<string[]>([])
  const [stats, setStats] = useState({ hits: 0, errors: 0, streak: 0, bestStreak: 0 })
  // Timing : parfait (±0,15s), bien (en avance dans la fenêtre), en retard (le temps a dû se figer)
  const [timing, setTiming] = useState({ perfect: 0, good: 0, late: 0 })
  const [lastGrade, setLastGrade] = useState<'perfect' | 'good' | 'late' | null>(null)
  const [lastVelocity, setLastVelocity] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [flash, setFlash] = useState<'good' | 'bad' | null>(null)

  // Horloge practice (refs : lues dans la boucle rAF sans re-render)
  const timeRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const lastFrameRef = useRef<number | null>(null)
  const gateIndexRef = useRef(0)
  const remainingRef = useRef<Set<string>>(new Set())
  const waitingRef = useRef(false)
  const runningRef = useRef(false)
  const speedRef = useRef(1)
  const startedAtRef = useRef<number | null>(null)
  const savedRef = useRef(false)

  // Séparer les mains : en dessous de Do4 = main gauche
  const { playerNotes, appNotes } = useMemo(() => {
    if (hand === 'both') return { playerNotes: notes, appNotes: [] as Note[] }
    const isLeft = (n: Note) => n.midi < LEFT_HAND_SPLIT
    return {
      playerNotes: notes.filter(n => (hand === 'left' ? isLeft(n) : !isLeft(n))),
      appNotes: notes.filter(n => (hand === 'left' ? !isLeft(n) : isLeft(n))),
    }
  }, [notes, hand])

  // Regrouper les notes simultanées (du joueur) en portes
  const gates = useMemo<Gate[]>(() => {
    const sorted = [...playerNotes].sort((a, b) => a.time - b.time)
    const result: Gate[] = []
    for (const note of sorted) {
      const last = result[result.length - 1]
      if (last && note.time - last.time < CHORD_EPSILON) {
        if (!last.notes.includes(note.name)) last.notes.push(note.name)
      } else {
        result.push({ time: note.time, notes: [note.name] })
      }
    }
    return result
  }, [playerNotes])

  // Notes de l'autre main, jouées par l'app pendant que le temps avance
  const appNotesSorted = useMemo(
    () => [...appNotes].sort((a, b) => a.time - b.time),
    [appNotes]
  )
  const appNoteIndexRef = useRef(0)
  const samplerRef = useRef<Tone.Sampler | null>(null)

  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: { C4: 'C4.mp3', 'D#4': 'Ds4.mp3', 'F#4': 'Fs4.mp3', A4: 'A4.mp3' },
      release: 1,
      baseUrl: 'https://tonejs.github.io/audio/salamander/',
    }).toDestination()
    samplerRef.current = sampler
    return () => {
      sampler.dispose()
      samplerRef.current = null
    }
  }, [])

  const showFlash = useCallback((kind: 'good' | 'bad') => {
    setFlash(kind)
    window.setTimeout(() => setFlash(null), 180)
  }, [])

  const registerHit = useCallback((grade: 'perfect' | 'good' | 'late') => {
    setStats(prev => {
      const streak = prev.streak + 1
      return {
        ...prev,
        hits: prev.hits + 1,
        streak,
        bestStreak: Math.max(prev.bestStreak, streak),
      }
    })
    setTiming(prev => ({ ...prev, [grade]: prev[grade] + 1 }))
    setLastGrade(grade)
    showFlash('good')
  }, [showFlash])

  const registerError = useCallback(() => {
    setStats(prev => ({ ...prev, errors: prev.errors + 1, streak: 0 }))
    showFlash('bad')
  }, [showFlash])

  /** Une note arrive du clavier MIDI ou du piano virtuel */
  const handlePlayedNote = useCallback((noteName: string) => {
    if (!runningRef.current || finished) return

    const gate = gates[gateIndexRef.current]
    if (!gate) return

    if (waitingRef.current) {
      // Le temps est figé sur la porte : la note arrive en retard
      if (remainingRef.current.has(noteName)) {
        remainingRef.current.delete(noteName)
        registerHit('late')
        if (remainingRef.current.size === 0) {
          gateIndexRef.current += 1
          waitingRef.current = false
          setWaitingNotes([])
        } else {
          setWaitingNotes([...remainingRef.current])
        }
      } else {
        registerError()
      }
      return
    }

    // Pas encore en attente : notes jouées en rythme (dans la fenêtre)
    const delta = gate.time - timeRef.current
    if (delta <= EARLY_WINDOW) {
      if (remainingRef.current.size === 0) {
        remainingRef.current = new Set(gate.notes)
      }
      if (remainingRef.current.has(noteName)) {
        remainingRef.current.delete(noteName)
        // ±0,15 s de la cible = parfait ; sinon bien (en avance)
        registerHit(delta <= 0.15 ? 'perfect' : 'good')
        if (remainingRef.current.size === 0) {
          gateIndexRef.current += 1
        }
        return
      }
    }
    registerError()
  }, [gates, finished, registerHit, registerError])

  useMidiNotes((event) => {
    if (event.type === 'noteon') {
      setLastVelocity(event.velocity)
      handlePlayedNote(midiNoteToName(event.note))
    }
  })

  // ── Boucle d'horloge : avance le temps, fige sur les portes ──
  const tick = useCallback((timestamp: number) => {
    if (!runningRef.current) return

    if (lastFrameRef.current !== null && !waitingRef.current) {
      const dt = ((timestamp - lastFrameRef.current) / 1000) * speedRef.current
      timeRef.current += dt

      // L'app joue l'autre main au fil du temps
      while (
        appNoteIndexRef.current < appNotesSorted.length &&
        appNotesSorted[appNoteIndexRef.current].time <= timeRef.current
      ) {
        const appNote = appNotesSorted[appNoteIndexRef.current]
        samplerRef.current?.triggerAttackRelease(
          appNote.name,
          appNote.duration,
          undefined,
          appNote.velocity
        )
        appNoteIndexRef.current += 1
      }

      const gate = gates[gateIndexRef.current]
      if (gate && timeRef.current >= gate.time) {
        // La porte est atteinte sans avoir été jouée : on fige et on attend
        timeRef.current = gate.time
        waitingRef.current = true
        if (remainingRef.current.size === 0) {
          remainingRef.current = new Set(gate.notes)
        }
        setWaitingNotes([...remainingRef.current])
      }

      if (timeRef.current >= totalDuration) {
        timeRef.current = totalDuration
        runningRef.current = false
        setIsRunning(false)
        setFinished(true)
        celebratePieceComplete()
      }
    }

    lastFrameRef.current = timestamp
    setCurrentTime(timeRef.current)

    if (runningRef.current) {
      rafRef.current = requestAnimationFrame(tick)
    }
  }, [gates, totalDuration])

  const begin = useCallback(async () => {
    await Tone.start() // débloquer l'audio (geste utilisateur requis)
    runningRef.current = true
    lastFrameRef.current = null
    if (startedAtRef.current === null) startedAtRef.current = Date.now()
    setIsRunning(true)
    rafRef.current = requestAnimationFrame(tick)
  }, [tick])

  const start = useCallback(() => {
    if (finished || countdown !== null) return
    // Reprise en cours de morceau : pas de compte à rebours
    if (timeRef.current > 0) { void begin(); return }
    setCountdown(3)
    let n = 3
    const timer = window.setInterval(() => {
      n -= 1
      if (n > 0) { setCountdown(n); return }
      window.clearInterval(timer)
      setCountdown(null)
      void begin()
    }, 800)
  }, [finished, countdown, begin])

  const pause = useCallback(() => {
    runningRef.current = false
    setIsRunning(false)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  const restart = useCallback(() => {
    pause()
    timeRef.current = 0
    gateIndexRef.current = 0
    appNoteIndexRef.current = 0
    remainingRef.current = new Set()
    waitingRef.current = false
    startedAtRef.current = null
    savedRef.current = false
    setCurrentTime(0)
    setWaitingNotes([])
    setStats({ hits: 0, errors: 0, streak: 0, bestStreak: 0 })
    setTiming({ perfect: 0, good: 0, late: 0 })
    setLastGrade(null)
    setFinished(false)
  }, [pause])

  // Changer de main relance la session depuis le début
  const switchHand = useCallback((next: HandMode) => {
    setHand(next)
    restart()
  }, [restart])

  useEffect(() => {
    speedRef.current = speed / 100
  }, [speed])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const total = stats.hits + stats.errors
  const accuracy = total > 0 ? Math.round((stats.hits / total) * 100) : 100

  // ── Sauvegarde de la session en fin de morceau ──
  useEffect(() => {
    if (!finished || savedRef.current || startedAtRef.current === null) return
    savedRef.current = true

    const save = async () => {
      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        const elapsedMinutes = Math.max(1, Math.round((Date.now() - startedAtRef.current!) / 60000))

        await supabase.from('practice_logs').insert({
          user_id: user.id,
          lesson_id: null,
          duration_minutes: elapsedMinutes,
          date: new Date().toISOString().split('T')[0],
          notes: `Practice « ${pieceTitle} » — précision ${accuracy}%`,
        })

        const { data: existing } = await supabase
          .from('piece_progress')
          .select('id, time_spent_minutes, progress')
          .eq('user_id', user.id)
          .eq('piece_id', pieceId)
          .maybeSingle()

        if (existing) {
          await supabase
            .from('piece_progress')
            .update({
              progress: Math.max(existing.progress ?? 0, accuracy),
              time_spent_minutes: (existing.time_spent_minutes ?? 0) + elapsedMinutes,
              last_practiced_at: new Date().toISOString(),
            })
            .eq('id', existing.id)
        } else {
          await supabase.from('piece_progress').insert({
            user_id: user.id,
            piece_id: pieceId,
            progress: accuracy,
            time_spent_minutes: elapsedMinutes,
            last_practiced_at: new Date().toISOString(),
          })
        }
      } catch (error) {
        console.error('Error saving practice session:', error)
      }
    }

    void save()
  }, [finished, accuracy, pieceId, pieceTitle])

  return (
    <div className="space-y-6">
      {/* HUD : stats temps réel */}
      <div className="grid grid-cols-3 gap-3">
        <div className={`panel rounded-2xl p-4 text-center transition-shadow ${flash === 'good' ? 'shadow-[0_0_24px_rgba(74,222,128,0.35)]' : ''}`}>
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-dim">
            <Target className="h-3.5 w-3.5" /> Précision
          </div>
          <p className="accent-green mt-1 text-3xl font-black tabular-nums">{accuracy}%</p>
          <p className="text-faint text-xs tabular-nums">{stats.hits} justes · {stats.errors} erreurs</p>
        </div>
        <div className="panel rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-dim">
            <Flame className="h-3.5 w-3.5" /> Streak
          </div>
          <p className="accent-brass mt-1 text-3xl font-black tabular-nums">{stats.streak}</p>
          <p className="text-faint text-xs tabular-nums">record : {stats.bestStreak}</p>
        </div>
        <div className="panel rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-dim">
            <Trophy className="h-3.5 w-3.5" /> Timing
          </div>
          <p className={`mt-1 text-3xl font-black ${
            lastGrade === 'perfect' ? 'accent-green' : lastGrade === 'good' ? 'accent-brass' : lastGrade === 'late' ? 'text-[#fcd34d]' : 'text-faint'
          }`}>
            {lastGrade === 'perfect' ? 'Parfait !' : lastGrade === 'good' ? 'Bien' : lastGrade === 'late' ? 'En retard' : '—'}
          </p>
          <p className="text-faint text-xs tabular-nums">
            {timing.perfect} parfait · {timing.good} bien · {timing.late} tard
            {lastVelocity !== null && (
              <> · <span className="accent-brass font-bold italic">{velocityToNuance(lastVelocity).symbol}</span></>
            )}
          </p>
        </div>
      </div>

      {/* Alerte clavier non branché */}
      {midiStatus !== 'connected' && (
        <div className="badge-brass rounded-2xl px-4 py-3 text-sm font-semibold">
          🎹 Branche ton piano numérique en USB pour jouer pour de vrai — en
          attendant, tu peux cliquer sur le piano virtuel.
        </div>
      )}

      {/* Vue unifiée : les notes tombent sur le clavier, les touches
          attendues s'illuminent en laiton, clic possible sans clavier USB */}
      <PianoRoll
        notes={playerNotes}
        currentTime={currentTime}
        highlightedKeys={waitingNotes}
        onKeyPress={handlePlayedNote}
        playing={isRunning}
        secondsPerMeasure={secondsPerMeasure}
        countdown={countdown}
      />

      {/* Contrôles */}
      <div className="panel rounded-2xl p-5">
        {finished ? (
          <div className="space-y-4 text-center">
            <p className="font-display text-2xl text-[#f2efe8]">
              Morceau terminé — précision <span className="accent-brass">{accuracy}%</span>
            </p>
            <p className="text-dim text-sm">
              {stats.hits} notes justes ({timing.perfect} parfaites, {timing.good} bien,{' '}
              {timing.late} en retard), meilleur streak de {stats.bestStreak}. Session enregistrée.
            </p>
            <button onClick={restart} className="btn-accent inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-bold">
              <RotateCcw className="h-4 w-4" /> Rejouer
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Sélecteur de main */}
            <div className="flex items-center justify-center">
              <div className="glass flex rounded-full p-1">
                {([
                  { id: 'both', label: '🙌 Deux mains' },
                  { id: 'right', label: '🤚 Main droite' },
                  { id: 'left', label: '✋ Main gauche' },
                ] as { id: HandMode; label: string }[]).map((option) => (
                  <button
                    key={option.id}
                    onClick={() => switchHand(option.id)}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                      hand === option.id ? 'btn-accent' : 'text-dim hover:text-[#f2efe8]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            {hand !== 'both' && (
              <p className="text-faint text-center text-xs">
                Tu joues la {hand === 'right' ? 'main droite' : 'main gauche'} — Pianely joue l'autre main pour toi
              </p>
            )}

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={restart}
                className="btn-ghost rounded-xl p-3 text-dim"
                aria-label="Recommencer"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={isRunning ? pause : start}
                className="btn-accent inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 font-bold"
              >
                {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {isRunning ? 'Pause' : currentTime > 0 ? 'Reprendre' : 'Démarrer'}
              </button>
            </div>

            {/* Métronome intégré */}
            <div className="flex justify-center">
              <Metronome compact />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-dim w-24 text-sm">Vitesse</span>
              <Slider
                value={[speed]}
                onValueChange={(value) => setSpeed(value[0])}
                min={40}
                max={100}
                step={5}
                className="flex-1"
              />
              <span className="w-12 text-right text-sm font-bold tabular-nums text-[#f2efe8]">{speed}%</span>
            </div>

            {waitingNotes.length > 0 && (
              <p className="badge-brass mx-auto w-fit rounded-full px-4 py-1.5 text-center text-sm font-bold">
                Joue : {waitingNotes.map(n => `${toFrenchNote(n)} (${n})`).join(' + ')}
              </p>
            )}
          </div>
        )}
      </div>

    </div>
  )
}
