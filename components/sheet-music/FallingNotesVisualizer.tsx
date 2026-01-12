'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface Note {
  midi: number
  name: string
  time: number
  duration: number
  velocity: number
}

interface FallingNotesVisualizerProps {
  notes: Note[]
  isPlaying: boolean
  currentTime: number
  onNoteHit?: (note: Note) => void
}

/**
 * Visualiseur de notes tombantes type Synthesia / Piano Tiles
 * Les notes descendent du haut vers le bas et s'alignent avec une barre de frappe
 */
export function FallingNotesVisualizer({
  notes,
  isPlaying,
  currentTime,
  onNoteHit
}: FallingNotesVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 })

  // Configuration de l'affichage
  const config = {
    lookAheadTime: 3, // Secondes de notes visibles à l'avance
    hitLineY: 500, // Position Y de la barre de frappe (pixels du bas)
    noteSpeed: 166.67, // Pixels par seconde (500px / 3s)
    keyWidth: 30, // Largeur d'une touche
    startOctave: 3, // Octave de départ pour l'affichage (C3 = midi 48)
    octaveCount: 3, // Nombre d'octaves à afficher (3 octaves = 36 notes)
  }

  // Calculer la position X d'une note basée sur son midi number
  const getMidiX = (midiNumber: number) => {
    // Octave 3 (C3 = 48) à Octave 5 (B5 = 83)
    // 3 octaves = 36 touches (12 notes * 3)
    const lowestNote = config.startOctave * 12 + 12 // C3 = 48
    const highestNote = lowestNote + config.octaveCount * 12 // C6 = 84

    // Si la note est hors range, on la map quand même
    const relativePosition = midiNumber - lowestNote
    const totalKeys = config.octaveCount * 12

    // Position X (centrée)
    const totalWidth = totalKeys * config.keyWidth
    const offsetX = (dimensions.width - totalWidth) / 2

    return offsetX + relativePosition * config.keyWidth
  }

  // Calculer la position Y d'une note basée sur le temps
  const getNoteY = (noteTime: number, currentTime: number) => {
    const timeDiff = noteTime - currentTime
    // Les notes "tombent" : plus le temps est loin, plus haut elles sont
    return config.hitLineY - (timeDiff * config.noteSpeed)
  }

  // Déterminer si une note est une touche noire (dièse/bémol)
  const isBlackKey = (midiNumber: number) => {
    const noteInOctave = midiNumber % 12
    return [1, 3, 6, 8, 10].includes(noteInOctave) // C#, D#, F#, G#, A#
  }

  // Dessiner le canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Effacer le canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    // Dessiner le fond avec gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, dimensions.height)
    gradient.addColorStop(0, '#0a0a0a')
    gradient.addColorStop(1, '#1a1a2e')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, dimensions.width, dimensions.height)

    // Dessiner les lignes de séparation des touches (guide visuel)
    const lowestNote = config.startOctave * 12 + 12
    const totalKeys = config.octaveCount * 12
    const totalWidth = totalKeys * config.keyWidth
    const offsetX = (dimensions.width - totalWidth) / 2

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.lineWidth = 1

    for (let i = 0; i <= totalKeys; i++) {
      const x = offsetX + i * config.keyWidth
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, dimensions.height)
      ctx.stroke()
    }

    // Dessiner la barre de frappe (hit line)
    ctx.strokeStyle = '#10b981'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(offsetX, config.hitLineY)
    ctx.lineTo(offsetX + totalWidth, config.hitLineY)
    ctx.stroke()

    // Dessiner les notes
    const visibleNotes = notes.filter(note => {
      const noteY = getNoteY(note.time, currentTime)
      // Note visible si entre le haut du canvas et un peu en dessous de la barre
      return noteY > -100 && noteY < dimensions.height + 100
    })

    visibleNotes.forEach(note => {
      const x = getMidiX(note.midi)
      const y = getNoteY(note.time, currentTime)
      const height = note.duration * config.noteSpeed
      const width = config.keyWidth - 4 // Marge de 2px de chaque côté

      // Couleur basée sur touche blanche/noire
      const isBlack = isBlackKey(note.midi)

      // Déterminer si la note est "active" (proche de la barre de frappe)
      const distanceFromHitLine = Math.abs(y - config.hitLineY)
      const isActive = distanceFromHitLine < 50

      // Couleur de la note
      if (isActive) {
        // Note active : vert brillant
        const gradient = ctx.createLinearGradient(x, y, x, y + height)
        gradient.addColorStop(0, '#10b981')
        gradient.addColorStop(1, '#059669')
        ctx.fillStyle = gradient
      } else {
        // Note normale
        ctx.fillStyle = isBlack
          ? 'rgba(168, 85, 247, 0.8)'  // Violet pour touches noires
          : 'rgba(59, 130, 246, 0.8)'   // Bleu pour touches blanches
      }

      // Dessiner la note (rectangle avec coins arrondis)
      const radius = 4
      ctx.beginPath()
      ctx.moveTo(x + radius + 2, y)
      ctx.lineTo(x + width - radius + 2, y)
      ctx.quadraticCurveTo(x + width + 2, y, x + width + 2, y + radius)
      ctx.lineTo(x + width + 2, y + height - radius)
      ctx.quadraticCurveTo(x + width + 2, y + height, x + width - radius + 2, y + height)
      ctx.lineTo(x + radius + 2, y + height)
      ctx.quadraticCurveTo(x + 2, y + height, x + 2, y + height - radius)
      ctx.lineTo(x + 2, y + radius)
      ctx.quadraticCurveTo(x + 2, y, x + radius + 2, y)
      ctx.closePath()
      ctx.fill()

      // Bordure pour notes actives
      if (isActive) {
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 2
        ctx.stroke()

        // Effet de lueur
        ctx.shadowColor = '#10b981'
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // Afficher le nom de la note sur les notes actives
      if (isActive && height > 30) {
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 12px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(note.name, x + width / 2 + 2, y + height / 2 + 4)
      }
    })

    // Dessiner les labels des touches en bas
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
    ctx.font = '11px sans-serif'
    ctx.textAlign = 'center'

    for (let i = 0; i < totalKeys; i++) {
      const midiNumber = lowestNote + i
      const noteInOctave = midiNumber % 12
      const octave = Math.floor(midiNumber / 12) - 1
      const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
      const noteName = noteNames[noteInOctave]

      const x = offsetX + i * config.keyWidth + config.keyWidth / 2

      // Afficher seulement les Do (C) et les touches blanches principales
      if (noteInOctave === 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.font = 'bold 12px sans-serif'
        ctx.fillText(`${noteName}${octave}`, x, dimensions.height - 10)
      }
    }

  }, [notes, currentTime, isPlaying, dimensions])

  // Gérer le redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current?.parentElement) {
        const width = canvasRef.current.parentElement.clientWidth
        setDimensions({ width, height: 600 })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Détecter les notes "frappées" et notifier
  useEffect(() => {
    if (!isPlaying || !onNoteHit) return

    const activeNotes = notes.filter(note => {
      const noteY = getNoteY(note.time, currentTime)
      const distanceFromHitLine = Math.abs(noteY - config.hitLineY)
      return distanceFromHitLine < 20 // Zone de 20px autour de la barre
    })

    activeNotes.forEach(note => {
      onNoteHit(note)
    })
  }, [currentTime, isPlaying, notes, onNoteHit])

  return (
    <Card className="bg-gradient-to-b from-gray-900 to-gray-950 border-gray-800">
      <CardContent className="p-4">
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={dimensions.width}
            height={dimensions.height}
            className="w-full rounded-lg shadow-2xl"
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          {/* Instructions */}
          <div className="mt-4 text-center text-sm text-gray-400">
            <p>Les notes descendent du haut. Appuie sur les touches du piano quand elles atteignent la barre verte ! 🎹</p>
          </div>

          {/* Légende */}
          <div className="mt-2 flex justify-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-500"></div>
              <span>Touches blanches</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-500"></div>
              <span>Touches noires</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500"></div>
              <span>Note active</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
