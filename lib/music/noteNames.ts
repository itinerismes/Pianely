/**
 * Noms de notes en français — solfège en douceur pour grands débutants.
 *
 * "C4" → "Do4", "F#3" → "Fa#3". Utilisé sur les touches du Piano et dans
 * les consignes du mode Practice pour que Do/Ré/Mi deviennent des réflexes.
 */

const LETTER_TO_FRENCH: Record<string, string> = {
  C: 'Do',
  D: 'Ré',
  E: 'Mi',
  F: 'Fa',
  G: 'Sol',
  A: 'La',
  B: 'Si',
}

/** "C4" → "Do4" ; "F#3" → "Fa#3". Renvoie l'entrée telle quelle si inconnue. */
export function toFrenchNote(note: string): string {
  const match = /^([A-G])(#?)(-?\d+)?$/.exec(note)
  if (!match) return note
  const [, letter, sharp, octave] = match
  return `${LETTER_TO_FRENCH[letter]}${sharp}${octave ?? ''}`
}

/** "C4" → "Do" (sans octave) — pour les consignes courtes. */
export function toFrenchNoteName(note: string): string {
  return toFrenchNote(note.replace(/-?\d+$/, ''))
}
