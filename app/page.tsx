import Link from 'next/link'
import { Usb, Music2, Award, ArrowRight } from 'lucide-react'

/**
 * Landing « Scène » — un piano de concert sur une scène de nuit.
 * Signature : le clavier lumineux en pied de hero, dont certaines touches
 * s'illuminent en laiton comme sous un projecteur.
 */

// Un accord de Do majeur illuminé sur 3 octaves (indices de touches blanches)
const LIT_WHITE_KEYS = new Set([7, 9, 11]) // C, E, G de l'octave centrale
const WHITE_KEY_COUNT = 21
// Position des touches noires dans une octave (après quelle touche blanche)
const BLACK_AFTER = new Set([0, 1, 3, 4, 5]) // C#, D#, F#, G#, A#

function HeroKeyboard() {
  return (
    <div
      aria-hidden
      className="relative mx-auto max-w-3xl select-none"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
      }}
    >
      {/* Touches blanches */}
      <div className="flex gap-[3px]">
        {Array.from({ length: WHITE_KEY_COUNT }, (_, i) => {
          const lit = LIT_WHITE_KEYS.has(i)
          return (
            <div
              key={i}
              className="h-28 flex-1 rounded-b-md transition-shadow"
              style={
                lit
                  ? {
                      background: 'linear-gradient(180deg, #f7e3b0 0%, #f0c66a 60%, #d99a26 100%)',
                      boxShadow: '0 0 24px rgba(224, 168, 60, 0.55), 0 6px 18px rgba(0,0,0,0.5)',
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
                className="absolute -right-[30%] top-0 z-10 h-[68px] w-[60%] rounded-b-[4px]"
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
        className="mx-[2%] h-16"
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

const FEATURES = [
  {
    icon: Usb,
    title: 'Branche ton clavier',
    description:
      'Yamaha, Casio, Roland… un simple câble USB et Pianely entend chaque note que tu joues.',
  },
  {
    icon: Music2,
    title: 'Sans solfège au départ',
    description:
      'Les notes tombent vers le clavier, tu joues quand elles touchent la ligne. Le solfège vient après, en douceur.',
  },
  {
    icon: Award,
    title: 'Progression visible',
    description:
      'Chaque leçon complétée illumine une touche. Streaks, badges et statistiques de pratique en temps réel.',
  },
]

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="badge-brass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f0c66a]" />
            Compatible piano numérique USB
          </div>

          {/* Titre */}
          <h1 className="font-display mb-6 text-5xl leading-[1.08] md:text-6xl lg:text-7xl">
            Tes premiers morceaux,
            <br />
            <em className="accent-brass">simplement</em>.
          </h1>

          {/* Sous-titre */}
          <p className="text-dim mx-auto mb-12 max-w-2xl text-lg md:text-xl">
            Branche ton piano, suis les notes qui tombent, joue pour de vrai.
            Méthode progressive pensée pour les grands débutants — sans lire la
            musique au départ.
          </p>

          {/* CTA */}
          <div className="mb-20 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/inscription"
              className="btn-accent group inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-bold"
            >
              Commencer à jouer
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/parcours"
              className="btn-ghost inline-flex items-center rounded-2xl px-8 py-4 text-base font-semibold text-[#f2efe8]"
            >
              Voir le parcours
            </Link>
          </div>
        </div>

        {/* Signature : le clavier sous le projecteur */}
        <div className="relative z-10 w-full">
          <HeroKeyboard />
        </div>
      </section>

      {/* Features */}
      <section className="relative px-6 pb-28">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="panel panel-hover rounded-2xl p-6 text-left">
              <div className="badge-brass mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#f2efe8]">{feature.title}</h3>
              <p className="text-dim text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
