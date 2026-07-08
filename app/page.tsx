import Link from 'next/link'
import { Usb, ArrowRight, ArrowDown } from 'lucide-react'
import { BrandMark } from '@/components/BrandMark'
import { Reveal } from '@/components/landing/Reveal'

/**
 * Landing « Scène » v2 — grande échelle, beaucoup d'air, entrée orchestrée.
 * Signature : le clavier en pied de hero dont les touches s'allument
 * l'une après l'autre au chargement, comme un lever de rideau.
 */

// Accord de Do majeur illuminé (indices de touches blanches) + ordre d'allumage
const LIT_WHITE_KEYS: Record<number, number> = { 7: 0, 9: 1, 11: 2 } // C, E, G
const WHITE_KEY_COUNT = 21
const BLACK_AFTER = new Set([0, 1, 3, 4, 5]) // C#, D#, F#, G#, A#

function HeroKeyboard() {
  return (
    <div
      aria-hidden
      className="relative mx-auto w-full max-w-4xl select-none"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
      }}
    >
      {/* Touches blanches */}
      <div className="flex gap-[3px]">
        {Array.from({ length: WHITE_KEY_COUNT }, (_, i) => {
          const litOrder = LIT_WHITE_KEYS[i]
          const lit = litOrder !== undefined
          return (
            <div
              key={i}
              className={`h-36 flex-1 rounded-b-lg md:h-44 ${lit ? 'stage-key-lit' : ''}`}
              style={
                lit
                  ? {
                      background: 'linear-gradient(180deg, #f7e3b0 0%, #f0c66a 60%, #d99a26 100%)',
                      boxShadow: '0 0 32px rgba(224, 168, 60, 0.55), 0 6px 18px rgba(0,0,0,0.5)',
                      animationDelay: `${0.9 + litOrder * 0.28}s`,
                    }
                  : {
                      background: 'linear-gradient(180deg, rgba(242,239,232,0.92) 0%, rgba(214,209,198,0.88) 100%)',
                      boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.18), 0 6px 18px rgba(0,0,0,0.5)',
                    }
              }
            />
          )
        })}
      </div>
      {/* Touches noires */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex">
        {Array.from({ length: WHITE_KEY_COUNT - 1 }, (_, i) => (
          <div key={i} className="relative flex-1">
            {BLACK_AFTER.has(i % 7) && (
              <div
                className="absolute -right-[30%] top-0 z-10 h-[86px] w-[60%] rounded-b-[5px] md:h-[104px]"
                style={{
                  background: 'linear-gradient(180deg, #26242a 0%, #0c0b0f 90%)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              />
            )}
          </div>
        ))}
      </div>
      {/* Reflet sur la laque de la scène */}
      <div
        className="mx-[2%] h-20"
        style={{
          background:
            'linear-gradient(180deg, rgba(224,168,60,0.10) 0%, rgba(242,239,232,0.04) 30%, transparent 100%)',
          maskImage: 'linear-gradient(180deg, black, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(180deg, black, transparent 80%)',
          transform: 'scaleY(-0.6)',
          transformOrigin: 'top',
          filter: 'blur(2px)',
        }}
      />
    </div>
  )
}

/** Bande de notes tombantes en CSS pur — illustre le mode Practice */
function FallingNotesStrip() {
  const notes = [
    { left: '12%', top: '8%', width: '9%', height: 34, color: '#38bdf8' },
    { left: '30%', top: '30%', width: '9%', height: 52, color: '#38bdf8' },
    { left: '48%', top: '2%', width: '9%', height: 40, color: '#a78bfa' },
    { left: '58%', top: '48%', width: '9%', height: 34, color: '#38bdf8' },
    { left: '76%', top: '22%', width: '9%', height: 60, color: '#38bdf8' },
  ]
  return (
    <div aria-hidden className="relative h-40 overflow-hidden rounded-2xl bg-[#0c0b10]">
      {notes.map((n, i) => (
        <div
          key={i}
          className="absolute rounded-md"
          style={{
            left: n.left, top: n.top, width: n.width, height: n.height,
            background: `linear-gradient(180deg, ${n.color}cc, ${n.color}88)`,
            boxShadow: `0 0 12px ${n.color}44`,
          }}
        />
      ))}
      {/* Hit line */}
      <div className="absolute inset-x-0 bottom-8 h-px bg-[#4ade80] shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
      <div className="absolute bottom-2 left-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#4ade80]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
        La note t'attend ici
      </div>
    </div>
  )
}

const STEPS = [
  {
    number: '1',
    title: 'Branche ton piano',
    description:
      'Un câble USB entre ton clavier et l\'ordinateur, un clic dans Pianely — c\'est tout. Yamaha, Casio, Roland, tout clavier USB fonctionne.',
    visual: (
      <div className="flex h-40 items-center justify-center rounded-2xl bg-[#0c0b10]">
        <div className="badge-stage flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-bold">
          <Usb className="h-4 w-4" />
          P-145 connecté
        </div>
      </div>
    ),
  },
  {
    number: '2',
    title: 'Suis les notes qui tombent',
    description:
      'Pas de solfège à lire : les notes descendent vers le clavier et tu joues quand elles touchent la ligne verte. Le morceau t\'attend, note par note.',
    visual: <FallingNotesStrip />,
  },
  {
    number: '3',
    title: 'Regarde-toi progresser',
    description:
      'Chaque leçon complétée illumine une touche de ton octave. Streaks, précision, mains séparées : tu vois exactement où tu en es.',
    visual: (
      <div className="flex h-40 flex-col items-center justify-center gap-4 rounded-2xl bg-[#0c0b10] px-8">
        <div className="octave w-full max-w-[240px]">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`octave-key ${i < 4 ? 'lit' : ''}`} />
          ))}
        </div>
        <span className="text-sm font-bold tabular-nums text-[#f0c66a]">Niveau 1 · 57%</span>
      </div>
    ),
  },
]

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Nav minimale */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-3">
          <BrandMark size={34} />
          <span className="font-display text-xl text-[#f2efe8]">Pianely</span>
        </div>
        <Link
          href="/connexion"
          className="btn-ghost rounded-full px-5 py-2.5 text-sm font-semibold text-[#f2efe8]"
        >
          Se connecter
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center px-6 pt-20 md:pt-28">
        <div className="rise-seq mx-auto max-w-4xl text-center">
          <div className="badge-brass mb-10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f0c66a]" />
            Compatible piano numérique USB
          </div>

          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-[#f2efe8] md:text-7xl">
            Ton piano.
            <br />
            <span className="accent-brass">Tes premiers morceaux.</span>
          </h1>

          <p className="text-dim mx-auto mt-8 max-w-xl text-lg leading-relaxed md:text-xl">
            Branche ton clavier, suis les notes qui tombent, joue pour de vrai.
            Sans lire la musique au départ — le solfège viendra en jouant.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/inscription"
              className="btn-accent group inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-bold"
            >
              Commencer à jouer
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/parcours"
              className="btn-ghost inline-flex items-center rounded-full px-9 py-4 text-base font-semibold text-[#f2efe8]"
            >
              Voir le parcours
            </Link>
          </div>

          <div className="text-faint mt-16 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest">
            <ArrowDown className="h-3.5 w-3.5" />
            Le clavier s'allume
          </div>
        </div>

        {/* Signature : lever de rideau */}
        <div className="mt-10 w-full">
          <HeroKeyboard />
        </div>
      </section>

      {/* Comment ça marche — vraie séquence en 3 temps */}
      <section className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Comment ça marche</p>
          <h2 className="font-display text-3xl leading-tight text-[#f2efe8] md:text-5xl">
            De la boîte du piano
            <br />à ton premier morceau.
          </h2>
        </Reveal>

        <div className="grid gap-14 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.12}>
              {step.visual}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display accent-brass text-2xl">{step.number}</span>
                <h3 className="font-display text-xl text-[#f2efe8]">{step.title}</h3>
              </div>
              <p className="text-dim mt-3 text-[15px] leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Morceaux */}
      <section className="mx-auto max-w-6xl px-6 pb-32 md:pb-40">
        <Reveal>
        <div className="panel rounded-3xl p-10 md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-lg">
              <p className="eyebrow mb-4">Dès le premier jour</p>
              <h2 className="font-display text-3xl leading-tight text-[#f2efe8] md:text-4xl">
                Des vrais morceaux, à ton rythme.
              </h2>
              <p className="text-dim mt-4 leading-relaxed">
                Au clair de la lune, Ode à la joie, Frère Jacques, la Berceuse de
                Brahms… à 60 BPM, ralentissables, mains séparées si tu veux.
                Le morceau t'attend sur chaque note.
              </p>
            </div>
            <Link
              href="/inscription"
              className="btn-accent inline-flex shrink-0 items-center gap-2 rounded-full px-8 py-4 font-bold"
            >
              Jouer mon premier morceau
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BrandMark size={26} />
            <span className="text-dim text-sm font-semibold">Pianely</span>
          </div>
          <p className="text-faint text-xs">Apprendre le piano, pour de vrai.</p>
        </div>
      </footer>
    </main>
  )
}
