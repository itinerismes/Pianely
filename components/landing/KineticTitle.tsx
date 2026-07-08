'use client'

/**
 * KineticTitle — typographie cinétique, réservée au hero.
 * Chaque mot se révèle en glissant depuis le bas de sa ligne (masque
 * overflow), en cascade. Respecte prefers-reduced-motion.
 */

import { motion, useReducedMotion } from 'motion/react'

interface KineticTitleProps {
  lines: { text: string; accent?: boolean }[]
  className?: string
}

export function KineticTitle({ lines, className }: KineticTitleProps) {
  const reduced = useReducedMotion()
  let wordIndex = 0

  if (reduced) {
    return (
      <h1 className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${line.accent ? 'accent-brass' : ''}`}>
            {line.text}
          </span>
        ))}
      </h1>
    )
  }

  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`block ${line.accent ? 'accent-brass' : ''}`}>
          {line.text.split(' ').map((word, j) => {
            const delay = 0.25 + wordIndex * 0.09
            wordIndex += 1
            return (
              <span key={j} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
                {j < line.text.split(' ').length - 1 ? ' ' : ''}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
