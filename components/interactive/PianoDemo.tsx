'use client'

import { useState } from 'react'
import { Piano } from './Piano'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

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
    <Card className="my-6 border-2 border-purple-200 bg-gradient-to-br from-white to-purple-50">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          {completed && (
            <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white">
              ✓ Complété !
            </Badge>
          )}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">{instructions}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {targetNotes.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm font-medium">Notes à jouer :</span>
            {targetNotes.map((note) => (
              <Badge
                key={note}
                variant={playedNotes.includes(note) ? "default" : "outline"}
                className={playedNotes.includes(note)
                  ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
                  : ""}
              >
                {note}
              </Badge>
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
            <Button
              variant="outline"
              size="sm"
              onClick={resetProgress}
              disabled={playedNotes.length === 0}
            >
              Recommencer
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
