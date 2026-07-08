/**
 * Célébrations — confettis aux couleurs de la Scène.
 *
 * Deux intensités : lessonComplete (petit burst laiton) et
 * pieceComplete (pluie plus généreuse, on vient de jouer un morceau !).
 * Respecte prefers-reduced-motion.
 */

import confetti from 'canvas-confetti'

const SCENE_COLORS = ['#f0c66a', '#e0a83c', '#4ade80', '#f2efe8']

function reducedMotion(): boolean {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function celebrateLessonComplete(): void {
  if (reducedMotion()) return
  confetti({
    particleCount: 90,
    spread: 70,
    origin: { y: 0.7 },
    colors: SCENE_COLORS,
    disableForReducedMotion: true,
  })
}

export function celebratePieceComplete(): void {
  if (reducedMotion()) return
  // Double burst depuis les deux côtés de la scène
  const defaults = { colors: SCENE_COLORS, disableForReducedMotion: true }
  confetti({ ...defaults, particleCount: 70, angle: 60, spread: 65, origin: { x: 0, y: 0.75 } })
  confetti({ ...defaults, particleCount: 70, angle: 120, spread: 65, origin: { x: 1, y: 0.75 } })
  window.setTimeout(() => {
    confetti({ ...defaults, particleCount: 110, spread: 100, origin: { y: 0.6 } })
  }, 350)
}
