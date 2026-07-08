'use client'

import { useState } from 'react'
import { Piano } from './Piano'

interface PianoDemoProps {
  title?: string
  instructions?: string
  targetNotes?: string[]
  onComplete?: () => void
}

export function PianoDemo({
  title = "Piano Interactif",
  instructions = "Explore le clavier et joue les notes !",
  targetNotes = [],
  onComplete
}: PianoDemoProps) {
  const [playedNotes, setPlayedNotes] = useState<string[]>([])
  const [completed, setCompleted] = useState(false)

  const handleNotePlay = (note: string) => {
    const noteName = note.replace(/[0-9]/g, '') // Remove octave number

    if (targetNotes.length > 0 && !playedNotes.includes(noteName)) {
      const newPlayedNotes = [...playedNotes, noteName]
      setPlayedNotes(newPlayedNotes)

      // Check if all target notes have been played
      const allPlayed = targetNotes.every(target => newPlayedNotes.includes(target))
      if (allPlayed && !completed) {
        setCompleted(true)
        onComplete?.()
      }
    }
  }

  const resetProgress = () => {
    setPlayedNotes([])
    setCompleted(false)
  }

  return (
    <div className="panel my-6 rounded-2xl p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#f2efe8]">{title}</h3>
          {completed && (
            <span className="badge-stage inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
              ✓ Complété !
            </span>
          )}
        </div>
        <p className="text-dim mt-1 text-sm">{instructions}</p>
      </div>

      <div className="space-y-4">
        {targetNotes.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-dim text-sm font-semibold">Notes à jouer :</span>
            {targetNotes.map((note) => (
              <span
                key={note}
                className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${
                  playedNotes.includes(note)
                    ? 'badge-stage'
                    : 'badge-brass'
                }`}
              >
                {note}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-center overflow-x-auto py-4">
          <Piano
            startOctave={3}
            octaves={2}
            highlightedNotes={targetNotes.filter(n => !playedNotes.includes(n))}
            onNotePlay={handleNotePlay}
            showLabels={true}
          />
        </div>

        {targetNotes.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={resetProgress}
              disabled={playedNotes.length === 0}
              className="btn-ghost rounded-xl px-4 py-2 text-sm font-semibold text-dim disabled:opacity-50"
            >
              Recommencer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
