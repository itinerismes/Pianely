'use client'

/**
 * Échauffement quotidien — exercices de doigts validés par le clavier.
 *
 * Trois exercices sur la position de base de la main droite (Do4 → Sol4,
 * pouce à auriculaire). Chaque note attendue s'illumine en laiton ; jouée
 * juste (clavier USB ou clic), elle passe au vert et la suivante s'allume.
 * Pas de pénalité : à ce stade on construit des repères, pas un score.
 */

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Flame, RotateCcw, Compass } from 'lucide-react'
import { PianoRoll } from '@/components/sheet-music/PianoRoll'
import { OctaveProgress } from '@/components/ui/octave-progress'
import { toFrenchNote } from '@/lib/music/noteNames'
import { noteNameToMidi } from '@/lib/midi/midiEngine'
import { createClient } from '@/lib/supabase/client'

const MIDDLE_C = 60 // Do4 — le Do du milieu d'un clavier 88 touches

interface Exercise {
  id: string
  title: string
  hint: string
  sequence: string[]
  rounds: number
}

// Palier 1 : position de base (débutant)
const TIER_1: Exercise[] = [
  {
    id: 'montee',
    title: 'La montée',
    hint: 'Main droite : pouce sur Do, un doigt par touche, monte jusqu\'à Sol',
    sequence: ['C4', 'D4', 'E4', 'F4', 'G4'],
    rounds: 2,
  },
  {
    id: 'descente',
    title: 'La descente',
    hint: 'Redescends de Sol à Do — auriculaire vers le pouce',
    sequence: ['G4', 'F4', 'E4', 'D4', 'C4'],
    rounds: 2,
  },
  {
    id: 'aller-retour',
    title: 'L\'aller-retour',
    hint: 'Enchaîne la montée et la descente sans t\'arrêter',
    sequence: ['C4', 'D4', 'E4', 'F4', 'G4', 'F4', 'E4', 'D4', 'C4'],
    rounds: 2,
  },
]

// Palier 2 (niveau 1 terminé) : gamme complète + main gauche
const TIER_2: Exercise[] = [
  {
    id: 'gamme-do',
    title: 'La gamme de Do complète',
    hint: 'Monte de Do4 à Do5 — passage du pouce sous le majeur après Mi',
    sequence: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4'],
    rounds: 2,
  },
  {
    id: 'main-gauche',
    title: 'La main gauche',
    hint: 'Auriculaire sur Do3, monte jusqu\'à Sol3 et redescends',
    sequence: ['C3', 'D3', 'E3', 'F3', 'G3', 'F3', 'E3', 'D3', 'C3'],
    rounds: 2,
  },
]

// Palier 3 (niveau 2 terminé) : arpèges
const TIER_3: Exercise[] = [
  {
    id: 'arpege-do',
    title: 'L\'arpège de Do majeur',
    hint: 'Do-Mi-Sol-Do : les notes de l\'accord, une par une, aller-retour',
    sequence: ['C4', 'E4', 'G4', 'C5', 'G4', 'E4', 'C4'],
    rounds: 3,
  },
  {
    id: 'arpege-la-mineur',
    title: 'L\'arpège de La mineur',
    hint: 'La-Do-Mi-La : même geste, couleur mineure',
    sequence: ['A3', 'C4', 'E4', 'A4', 'E4', 'C4', 'A3'],
    rounds: 3,
  },
]

export default function EchauffementPage() {
  // Programme progressif : palier 2 après le niveau 1 (5 leçons),
  // palier 3 après le niveau 2 (12 leçons)
  const [exercises, setExercises] = useState<Exercise[]>(TIER_1)
  useEffect(() => {
    const load = async () => {
      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return
        const { count } = await supabase
          .from('user_progress')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .eq('status', 'completed')
        const completed = count ?? 0
        if (completed >= 12) setExercises([...TIER_1, ...TIER_2, ...TIER_3])
        else if (completed >= 5) setExercises([...TIER_1, ...TIER_2])
      } catch { /* palier 1 par défaut */ }
    }
    void load()
  }, [])

  const [locating, setLocating] = useState(true) // étape 0 : trouver Do4
  const [locateFeedback, setLocateFeedback] = useState<string | null>(null)
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [round, setRound] = useState(0)
  const [noteIndex, setNoteIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const [wrongNote, setWrongNote] = useState<string | null>(null)
  const startedAtRef = useRef(Date.now())
  const savedRef = useRef(false)

  const exercise = exercises[exerciseIndex]
  const expectedNote = exercise?.sequence[noteIndex]

  const totalSteps = exercises.reduce((sum, ex) => sum + ex.sequence.length * ex.rounds, 0)
  const doneSteps =
    exercises.slice(0, exerciseIndex).reduce((sum, ex) => sum + ex.sequence.length * ex.rounds, 0) +
    round * (exercise?.sequence.length || 0) +
    noteIndex

  const saveSession = useCallback(async () => {
    if (savedRef.current) return
    savedRef.current = true

    // Marquer l'échauffement du jour (pour la séance du jour du dashboard)
    const today = new Date().toISOString().split('T')[0]
    localStorage.setItem('pianely-warmup-date', today)

    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const elapsedMinutes = Math.max(1, Math.round((Date.now() - startedAtRef.current) / 60000))
      await supabase.from('practice_logs').insert({
        user_id: user.id,
        lesson_id: null,
        duration_minutes: elapsedMinutes,
        date: today,
        notes: 'Échauffement quotidien',
      })
    } catch (error) {
      console.error('Error saving warm-up session:', error)
    }
  }, [])

  /** Étape 0 : guider vers le Do du milieu, touche par touche */
  const handleLocateNote = useCallback((note: string) => {
    const midi = noteNameToMidi(note)
    if (midi === null) return

    if (midi === MIDDLE_C) {
      setLocateFeedback(null)
      setLocating(false)
      return
    }

    const distance = MIDDLE_C - midi
    const whiteKeys = Math.max(1, Math.round(Math.abs(distance) * (7 / 12)))
    setLocateFeedback(
      distance > 0
        ? `Tu as joué ${toFrenchNote(note)} — Do4 est plus à DROITE ➡️ (environ ${whiteKeys} touche${whiteKeys > 1 ? 's' : ''} blanche${whiteKeys > 1 ? 's' : ''})`
        : `Tu as joué ${toFrenchNote(note)} — Do4 est plus à GAUCHE ⬅️ (environ ${whiteKeys} touche${whiteKeys > 1 ? 's' : ''} blanche${whiteKeys > 1 ? 's' : ''})`
    )
  }, [])

  const handleNote = useCallback((note: string) => {
    if (locating) {
      handleLocateNote(note)
      return
    }
    if (finished || !expectedNote) return

    if (note !== expectedNote) {
      // Pas de pénalité : on montre juste ce qui a été joué + la direction
      setWrongNote(note)
      window.setTimeout(() => setWrongNote(null), 1200)
      return
    }

    setWrongNote(null)
    const nextNote = noteIndex + 1

    if (nextNote < exercise.sequence.length) {
      setNoteIndex(nextNote)
      return
    }

    // Séquence terminée → tour suivant, exercice suivant, ou fin
    const nextRound = round + 1
    if (nextRound < exercise.rounds) {
      setRound(nextRound)
      setNoteIndex(0)
      return
    }

    const nextExercise = exerciseIndex + 1
    if (nextExercise < exercises.length) {
      setExerciseIndex(nextExercise)
      setRound(0)
      setNoteIndex(0)
      return
    }

    setFinished(true)
    void saveSession()
  }, [locating, handleLocateNote, finished, expectedNote, noteIndex, exercise, round, exerciseIndex, exercises.length, saveSession])

  const restart = () => {
    setExerciseIndex(0)
    setRound(0)
    setNoteIndex(0)
    setFinished(false)
    setWrongNote(null)
    startedAtRef.current = Date.now()
    savedRef.current = false
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8 py-4 md:py-8">
      <Link
        href="/dashboard"
        className="btn-ghost inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-dim"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au dashboard
      </Link>

      <div>
        <p className="eyebrow mb-2">Échauffement</p>
        <h1 className="font-display text-4xl tracking-tight text-[#f2efe8] md:text-5xl">
          Réveille <span className="accent-brass">tes doigts</span>.
        </h1>
        <p className="text-dim mt-3">
          5 minutes avant de jouer — ton clavier te guide
        </p>
      </div>

      {/* Progression globale */}
      <div className="panel rounded-2xl p-5">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-dim font-semibold">Progression de la séance</span>
          <span className="font-bold tabular-nums text-[#f2efe8]">
            {Math.round((doneSteps / totalSteps) * 100)}%
          </span>
        </div>
        <OctaveProgress value={(doneSteps / totalSteps) * 100} keys={10} />
      </div>

      {locating && !finished ? (
        <>
          {/* Étape 0 : trouver le Do du milieu sur le vrai clavier */}
          <div className="panel rounded-2xl p-6">
            <div className="mb-1">
              <span className="badge-brass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                <Compass className="h-3.5 w-3.5" /> Repérage
              </span>
            </div>
            <h2 className="font-display text-2xl text-[#f2efe8]">Trouve le Do du milieu (Do4)</h2>
            <div className="text-dim mt-3 space-y-2 text-sm leading-relaxed">
              <p>
                Sur ton clavier, les touches noires vont par <strong className="text-[#f2efe8]">groupes de 2 et de 3</strong>.
                Un <strong className="accent-brass">Do</strong> est toujours la touche blanche
                <strong className="text-[#f2efe8]"> juste à gauche d'un groupe de 2 touches noires</strong>.
              </p>
              <p>
                Le <strong className="accent-brass">Do4</strong> (« Do du milieu ») est celui qui se trouve
                <strong className="text-[#f2efe8]"> au centre de ton clavier</strong>, en général juste sous le logo Yamaha.
                Sur 88 touches, c'est le <strong className="text-[#f2efe8]">4ᵉ Do en partant de la gauche</strong>.
              </p>
              <p className="accent-brass font-semibold">
                🎹 Appuie sur des touches de ton clavier : je te guide jusqu'à lui.
              </p>
            </div>

            {locateFeedback && (
              <p className="badge-brass mt-4 w-fit rounded-full px-4 py-2 text-sm font-bold">
                {locateFeedback}
              </p>
            )}

            <button
              onClick={() => setLocating(false)}
              className="btn-ghost mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-dim"
            >
              Je sais déjà où il est — passer
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Clavier 88 touches : Do4 illuminé comme repère */}
          <PianoRoll keyboardOnly clickSound midiToKeyPress highlightedKeys={['C4']} onKeyPress={handleNote} />
        </>
      ) : finished ? (
        <div className="panel rounded-2xl border-[#4ade80]/30 p-8 text-center shadow-[0_0_32px_rgba(74,222,128,0.15)]">
          <Flame className="accent-brass mx-auto mb-4 h-14 w-14" />
          <h2 className="font-display mb-2 text-2xl text-[#f2efe8]">
            Doigts réveillés ! 🎉
          </h2>
          <p className="text-dim mb-6">
            Échauffement terminé et enregistré. C'est le moment idéal pour ta leçon du jour.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/parcours" className="btn-accent inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-bold">
              Continuer avec ma leçon
            </Link>
            <button onClick={restart} className="btn-ghost inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-[#f2efe8]">
              <RotateCcw className="h-4 w-4" /> Refaire
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Exercice en cours */}
          <div className="panel rounded-2xl p-6">
            <div className="mb-1 flex items-center justify-between">
              <span className="badge-brass inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                Exercice {exerciseIndex + 1}/{exercises.length} · Tour {round + 1}/{exercise.rounds}
              </span>
              {exerciseIndex > 0 && (
                <span className="accent-green flex items-center gap-1 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  {exerciseIndex} terminé{exerciseIndex > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <h2 className="font-display text-2xl text-[#f2efe8]">{exercise.title}</h2>
            <p className="text-dim mt-1 text-sm">{exercise.hint}</p>

            {/* Séquence */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {exercise.sequence.map((note, i) => (
                <span
                  key={`${note}-${i}`}
                  className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-bold transition-all ${
                    i < noteIndex
                      ? 'badge-stage'
                      : i === noteIndex
                        ? 'badge-brass shadow-[0_0_14px_rgba(224,168,60,0.35)]'
                        : 'text-faint border-white/[0.08] bg-white/[0.03]'
                  }`}
                >
                  {toFrenchNote(note)}
                </span>
              ))}
            </div>

            {wrongNote && expectedNote && (
              <p className="mt-3 text-sm font-semibold text-[#fcd34d]">
                Tu as joué {toFrenchNote(wrongNote)} — {toFrenchNote(expectedNote)} est{' '}
                {(noteNameToMidi(expectedNote) ?? 0) > (noteNameToMidi(wrongNote) ?? 0)
                  ? 'plus à droite ➡️'
                  : 'plus à gauche ⬅️'}
              </p>
            )}
          </div>

          {/* Clavier 88 touches */}
          <PianoRoll
            keyboardOnly
            clickSound
            midiToKeyPress
            highlightedKeys={expectedNote ? [expectedNote] : []}
            onKeyPress={handleNote}
          />
        </>
      )}
    </div>
  )
}
