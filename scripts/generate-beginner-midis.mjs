/**
 * Génère les fichiers MIDI des morceaux débutants dans public/midi/.
 *
 * Mélodies simplifiées, écrites en [note, durée en noires] à 60 BPM
 * (1 noire = 1 s) — le tempo de travail recommandé pour débuter, encore
 * ralentissable à 40 % dans le mode Practice. Les morceaux de niveau 2
 * ont une main gauche simple (basses tenues) pour les mains séparées.
 *
 * Usage : node scripts/generate-beginner-midis.mjs
 */

import pkg from '@tonejs/midi'
const { Midi } = pkg
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'midi')

const QUARTER = 1.0 // secondes par noire à 60 BPM

/** [note, durée en noires][] → notes MIDI avec temps cumulés */
function seq(notes) {
  let time = 0
  return notes.map(([name, beats]) => {
    const note = { name, time, duration: beats * QUARTER }
    time += beats * QUARTER
    return note
  })
}

const PIECES = [
  {
    slug: 'au-clair-de-la-lune',
    title: 'Au clair de la lune',
    composer: 'Traditionnel',
    level: 1,
    melody: seq([
      ['C4', 1], ['C4', 1], ['C4', 1], ['D4', 1], ['E4', 2], ['D4', 2],
      ['C4', 1], ['E4', 1], ['D4', 1], ['D4', 1], ['C4', 4],
      ['C4', 1], ['C4', 1], ['C4', 1], ['D4', 1], ['E4', 2], ['D4', 2],
      ['C4', 1], ['E4', 1], ['D4', 1], ['D4', 1], ['C4', 4],
    ]),
  },
  {
    slug: 'ah-vous-dirai-je-maman',
    title: 'Ah ! vous dirai-je, maman',
    composer: 'Traditionnel (Mozart)',
    level: 1,
    melody: seq([
      ['C4', 1], ['C4', 1], ['G4', 1], ['G4', 1], ['A4', 1], ['A4', 1], ['G4', 2],
      ['F4', 1], ['F4', 1], ['E4', 1], ['E4', 1], ['D4', 1], ['D4', 1], ['C4', 2],
      ['G4', 1], ['G4', 1], ['F4', 1], ['F4', 1], ['E4', 1], ['E4', 1], ['D4', 2],
      ['G4', 1], ['G4', 1], ['F4', 1], ['F4', 1], ['E4', 1], ['E4', 1], ['D4', 2],
      ['C4', 1], ['C4', 1], ['G4', 1], ['G4', 1], ['A4', 1], ['A4', 1], ['G4', 2],
      ['F4', 1], ['F4', 1], ['E4', 1], ['E4', 1], ['D4', 1], ['D4', 1], ['C4', 2],
    ]),
  },
  {
    slug: 'frere-jacques',
    title: 'Frère Jacques',
    composer: 'Traditionnel',
    level: 1,
    melody: seq([
      ['C4', 1], ['D4', 1], ['E4', 1], ['C4', 1],
      ['C4', 1], ['D4', 1], ['E4', 1], ['C4', 1],
      ['E4', 1], ['F4', 1], ['G4', 2],
      ['E4', 1], ['F4', 1], ['G4', 2],
      ['G4', 0.5], ['A4', 0.5], ['G4', 0.5], ['F4', 0.5], ['E4', 1], ['C4', 1],
      ['G4', 0.5], ['A4', 0.5], ['G4', 0.5], ['F4', 0.5], ['E4', 1], ['C4', 1],
      ['C4', 1], ['G3', 1], ['C4', 2],
      ['C4', 1], ['G3', 1], ['C4', 2],
    ]),
  },
  {
    slug: 'ode-a-la-joie',
    title: 'Ode à la joie',
    composer: 'Ludwig van Beethoven',
    level: 1,
    melody: seq([
      ['E4', 1], ['E4', 1], ['F4', 1], ['G4', 1], ['G4', 1], ['F4', 1], ['E4', 1], ['D4', 1],
      ['C4', 1], ['C4', 1], ['D4', 1], ['E4', 1], ['E4', 1.5], ['D4', 0.5], ['D4', 2],
      ['E4', 1], ['E4', 1], ['F4', 1], ['G4', 1], ['G4', 1], ['F4', 1], ['E4', 1], ['D4', 1],
      ['C4', 1], ['C4', 1], ['D4', 1], ['E4', 1], ['D4', 1.5], ['C4', 0.5], ['C4', 2],
    ]),
  },
  {
    slug: 'vive-le-vent',
    title: 'Vive le vent',
    composer: 'James Lord Pierpont',
    level: 2,
    melody: seq([
      ['E4', 1], ['E4', 1], ['E4', 2],
      ['E4', 1], ['E4', 1], ['E4', 2],
      ['E4', 1], ['G4', 1], ['C4', 1.5], ['D4', 0.5],
      ['E4', 4],
      ['F4', 1], ['F4', 1], ['F4', 1.5], ['F4', 0.5],
      ['F4', 1], ['E4', 1], ['E4', 1], ['E4', 1],
      ['E4', 1], ['D4', 1], ['D4', 1], ['E4', 1],
      ['D4', 2], ['G4', 2],
    ]),
    bass: seq([
      ['C3', 4], ['C3', 4], ['C3', 4], ['C3', 4],
      ['F3', 4], ['C3', 4], ['G3', 4], ['G3', 4],
    ]),
  },
  {
    slug: 'berceuse-de-brahms',
    title: 'Berceuse',
    composer: 'Johannes Brahms',
    level: 2,
    melody: seq([
      ['E4', 1], ['E4', 1], ['G4', 2], ['E4', 1], ['E4', 1], ['G4', 2],
      ['E4', 1], ['G4', 1], ['C5', 2], ['B4', 2], ['A4', 1], ['A4', 1], ['G4', 2],
      ['D4', 1], ['E4', 1], ['F4', 2], ['D4', 1], ['E4', 1], ['F4', 2],
      ['D4', 1], ['F4', 1], ['B4', 1], ['A4', 1], ['G4', 2], ['B4', 1], ['C5', 3],
    ]),
    bass: seq([
      ['C3', 4], ['C3', 4], ['C3', 4], ['G3', 4],
      ['G3', 4], ['G3', 4], ['G3', 4], ['C3', 4],
    ]),
  },
  {
    slug: 'joyeux-anniversaire',
    title: 'Joyeux anniversaire',
    composer: 'Patty & Mildred Hill',
    level: 2,
    melody: seq([
      ['C4', 0.75], ['C4', 0.25], ['D4', 1], ['C4', 1], ['F4', 1], ['E4', 2],
      ['C4', 0.75], ['C4', 0.25], ['D4', 1], ['C4', 1], ['G4', 1], ['F4', 2],
      ['C4', 0.75], ['C4', 0.25], ['C5', 1], ['A4', 1], ['F4', 1], ['E4', 1], ['D4', 1],
      ['A#4', 0.75], ['A#4', 0.25], ['A4', 1], ['F4', 1], ['G4', 1], ['F4', 2],
    ]),
    bass: seq([
      ['F3', 3], ['C3', 3], ['C3', 3], ['F3', 3],
      ['F3', 3], ['A#2', 3], ['C3', 3], ['F3', 3],
    ]),
  },
  {
    slug: 'amazing-grace',
    title: 'Amazing Grace',
    composer: 'Traditionnel',
    level: 2,
    melody: seq([
      ['D4', 1],
      ['G4', 2], ['B4', 0.5], ['G4', 0.5], ['B4', 2], ['A4', 1],
      ['G4', 2], ['E4', 1], ['D4', 2], ['D4', 1],
      ['G4', 2], ['B4', 0.5], ['G4', 0.5], ['B4', 2], ['A4', 1],
      ['D5', 3], ['B4', 3],
      ['D5', 1.5], ['B4', 0.5], ['D5', 1], ['B4', 2], ['G4', 1],
      ['D4', 2], ['E4', 0.5], ['G4', 0.5], ['G4', 2], ['E4', 1],
      ['D4', 2], ['D4', 1], ['G4', 2], ['B4', 0.5], ['G4', 0.5],
      ['B4', 2], ['A4', 1], ['G4', 3],
    ]),
    bass: seq([
      ['G3', 3], ['G3', 3], ['G3', 3], ['C3', 3], ['G3', 3],
      ['G3', 3], ['D3', 3], ['G3', 3], ['G3', 3], ['C3', 3],
      ['G3', 3], ['D3', 3], ['G3', 3],
    ]),
  },
]

mkdirSync(OUT_DIR, { recursive: true })

for (const piece of PIECES) {
  const midi = new Midi()
  midi.header.setTempo(60)

  const melodyTrack = midi.addTrack()
  melodyTrack.name = 'Main droite'
  for (const note of piece.melody) {
    melodyTrack.addNote({ ...note, velocity: 0.8 })
  }

  if (piece.bass) {
    const bassTrack = midi.addTrack()
    bassTrack.name = 'Main gauche'
    for (const note of piece.bass) {
      bassTrack.addNote({ ...note, velocity: 0.55 })
    }
  }

  const outPath = join(OUT_DIR, `${piece.slug}.mid`)
  writeFileSync(outPath, Buffer.from(midi.toArray()))

  const durationSec = Math.max(
    ...piece.melody.map(n => n.time + n.duration),
    ...(piece.bass || [{ time: 0, duration: 0 }]).map(n => n.time + n.duration)
  )
  console.log(`✓ ${piece.slug}.mid (${piece.melody.length + (piece.bass?.length || 0)} notes, ${Math.round(durationSec)}s)`)
}

console.log(`\n${PIECES.length} fichiers MIDI générés dans public/midi/`)
