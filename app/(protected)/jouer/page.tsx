'use client'

/**
 * Jeu libre — brancher son clavier et explorer.
 * Détection d'accords en temps réel, nuance (vélocité) de la dernière
 * note, métronome. Aucun objectif : un terrain de jeu.
 */

import { useState } from 'react'
import { PianoRoll } from '@/components/sheet-music/PianoRoll'
import { Metronome } from '@/components/tools/Metronome'
import { useMidiInput, useMidiNotes } from '@/hooks/useMidiInput'
import { detectChord, velocityToNuance } from '@/lib/music/chords'
import { toFrenchNote } from '@/lib/music/noteNames'
import { midiNoteToName } from '@/lib/midi/midiEngine'

export default function JouerPage() {
  const { activeNotes, status } = useMidiInput()
  const [lastNote, setLastNote] = useState<{ name: string; velocity: number } | null>(null)

  useMidiNotes((event) => {
    if (event.type === 'noteon') {
      setLastNote({ name: midiNoteToName(event.note), velocity: event.velocity })
    }
  })

  const chord = detectChord(activeNotes)
  const nuance = lastNote ? velocityToNuance(lastNote.velocity) : null

  return (
    <div className="mx-auto max-w-5xl space-y-8 py-4 md:py-8">
      <div>
        <p className="eyebrow mb-2">Jeu libre</p>
        <h1 className="font-display text-4xl tracking-tight text-[#f2efe8] md:text-5xl">
          Joue, <span className="accent-brass">explore</span>.
        </h1>
        <p className="text-dim mt-3">
          Pas d'objectif ici — Pianely nomme les accords que tu joues et mesure tes nuances
        </p>
      </div>

      {/* Accord + nuance en temps réel */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="panel flex min-h-36 flex-col items-center justify-center rounded-3xl p-8 text-center">
          <p className="eyebrow mb-3">Accord détecté</p>
          {chord ? (
            <p className="font-display accent-brass text-4xl">{chord}</p>
          ) : activeNotes.size > 0 ? (
            <p className="font-display text-2xl text-dim">
              {[...activeNotes].sort((a, b) => a - b).map((n) => toFrenchNote(midiNoteToName(n))).join(' · ')}
            </p>
          ) : (
            <p className="text-faint text-sm">
              {status === 'connected'
                ? 'Joue au moins 3 notes ensemble'
                : 'Branche ton clavier USB pour commencer'}
            </p>
          )}
        </div>

        <div className="panel flex min-h-36 flex-col items-center justify-center rounded-3xl p-8 text-center">
          <p className="eyebrow mb-3">Nuance</p>
          {nuance && lastNote ? (
            <>
              <p className="font-display accent-brass text-4xl italic">{nuance.symbol}</p>
              <p className="text-faint mt-1 text-sm">
                {nuance.name} · {toFrenchNote(lastNote.name)} · vélocité {lastNote.velocity}
              </p>
            </>
          ) : (
            <p className="text-faint text-sm">
              Joue une note — plus tu frappes fort, plus la nuance monte (pp → ff)
            </p>
          )}
        </div>
      </div>

      {/* Métronome */}
      <div className="panel flex flex-wrap items-center justify-between gap-4 rounded-3xl p-6">
        <div>
          <p className="font-display text-lg text-[#f2efe8]">Métronome</p>
          <p className="text-faint text-sm">Temps fort en laiton, 4 temps par mesure</p>
        </div>
        <Metronome compact />
      </div>

      {/* Clavier 88 touches — le P-145 à l'écran */}
      <PianoRoll
        keyboardOnly
        clickSound
        midiToKeyPress
        onKeyPress={(n) => setLastNote({ name: n, velocity: 80 })}
      />
    </div>
  )
}
