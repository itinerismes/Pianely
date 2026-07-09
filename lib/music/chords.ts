/**
 * Détection d'accords en temps réel — jeu libre.
 * À partir des notes MIDI enfoncées, identifie l'accord (fondamentale +
 * qualité) en essayant chaque note comme fondamentale et en comparant
 * les intervalles aux gabarits connus.
 */

const FRENCH_ROOTS = ['Do', 'Do#', 'Ré', 'Ré#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si']

// Gabarits d'intervalles (depuis la fondamentale), du plus riche au plus simple
const CHORD_SHAPES: { intervals: number[]; label: string }[] = [
  { intervals: [0, 4, 7, 11], label: 'majeur 7' },
  { intervals: [0, 3, 7, 10], label: 'mineur 7' },
  { intervals: [0, 4, 7, 10], label: '7' },
  { intervals: [0, 3, 6, 9], label: 'dim7' },
  { intervals: [0, 4, 7], label: 'majeur' },
  { intervals: [0, 3, 7], label: 'mineur' },
  { intervals: [0, 3, 6], label: 'diminué' },
  { intervals: [0, 4, 8], label: 'augmenté' },
  { intervals: [0, 5, 7], label: 'sus4' },
  { intervals: [0, 2, 7], label: 'sus2' },
]

/** Détecte l'accord joué. Renvoie ex. "Do majeur", "La mineur 7", ou null. */
export function detectChord(midiNotes: Iterable<number>): string | null {
  const pitchClasses = [...new Set([...midiNotes].map((n) => n % 12))]
  if (pitchClasses.length < 3) return null

  for (const root of pitchClasses) {
    const intervals = new Set(pitchClasses.map((pc) => (pc - root + 12) % 12))
    for (const shape of CHORD_SHAPES) {
      if (
        shape.intervals.length === intervals.size &&
        shape.intervals.every((i) => intervals.has(i))
      ) {
        return `${FRENCH_ROOTS[root]} ${shape.label}`
      }
    }
  }
  return null
}

/** Vélocité MIDI (0-127) → nuance musicale */
export function velocityToNuance(velocity: number): { symbol: string; name: string } {
  if (velocity < 20) return { symbol: 'pp', name: 'pianissimo' }
  if (velocity < 42) return { symbol: 'p', name: 'piano' }
  if (velocity < 68) return { symbol: 'mf', name: 'mezzo-forte' }
  if (velocity < 95) return { symbol: 'f', name: 'forte' }
  return { symbol: 'ff', name: 'fortissimo' }
}
