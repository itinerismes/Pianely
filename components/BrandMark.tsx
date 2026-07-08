/**
 * Logomark Pianely — carré arrondi laqué contenant une octave stylisée
 * (3 touches blanches, 2 noires), en dégradé laiton. SVG pur, net à
 * toutes tailles. Pendant du BrandMark hexagonal de boardyoplan.
 */

export function BrandMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Pianely"
      style={{ filter: "drop-shadow(0 4px 14px rgba(224,168,60,0.4))" }}
    >
      <defs>
        <linearGradient id="pm-bg" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f0c66a" />
          <stop offset="100%" stopColor="#b07d1f" />
        </linearGradient>
        <linearGradient id="pm-edge" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.08)" />
        </linearGradient>
      </defs>

      {/* Carré arrondi — fond laiton */}
      <rect x="4" y="4" width="40" height="40" rx="11" fill="url(#pm-bg)" />
      {/* Liseré lumineux */}
      <rect x="4" y="4" width="40" height="40" rx="11" stroke="url(#pm-edge)" strokeWidth="1.4" fill="none" />
      {/* Reflet spéculaire haut */}
      <path
        d="M8 14c4-5.5 10-8 16-8s12 2.5 16 8c-4.5-2.8-10-4.2-16-4.2S12.5 11.2 8 14z"
        fill="rgba(255,255,255,0.28)"
      />

      {/* Octave : 3 touches blanches */}
      <g>
        <rect x="12" y="14" width="7" height="22" rx="1.6" fill="rgba(255,255,255,0.95)" />
        <rect x="20.5" y="14" width="7" height="22" rx="1.6" fill="rgba(255,255,255,0.95)" />
        <rect x="29" y="14" width="7" height="22" rx="1.6" fill="rgba(255,255,255,0.95)" />
      </g>
      {/* 2 touches noires */}
      <g>
        <rect x="17.2" y="14" width="4.6" height="13" rx="1.2" fill="#171519" />
        <rect x="26.2" y="14" width="4.6" height="13" rx="1.2" fill="#171519" />
      </g>
    </svg>
  );
}
