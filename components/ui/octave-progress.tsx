/**
 * OctaveProgress — la signature visuelle de Pianely.
 *
 * Une progression se lit comme une octave de piano : 7 touches blanches,
 * celles déjà « jouées » s'illuminent en laiton (ou vert scène à 100 %).
 * Remplace les barres de progression classiques partout dans l'app.
 */

interface OctaveProgressProps {
  /** Progression 0-100 */
  value: number
  /** Nombre de touches (7 = une octave) */
  keys?: number
  className?: string
}

export function OctaveProgress({ value, keys = 7, className = '' }: OctaveProgressProps) {
  const clamped = Math.min(100, Math.max(0, value))
  const litCount = Math.round((clamped / 100) * keys)
  const complete = clamped >= 100

  return (
    <div
      className={`octave ${className}`}
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {Array.from({ length: keys }, (_, i) => (
        <div
          key={i}
          className={`octave-key ${i < litCount ? (complete ? 'lit-green' : 'lit') : ''}`}
        />
      ))}
    </div>
  )
}
