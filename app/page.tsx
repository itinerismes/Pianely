import Link from 'next/link'
import { Sparkles, Music, Award, TrendingUp, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blob top-right */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)',
            animationDuration: '8s'
          }}
        />
        {/* Medium gradient blob bottom-left */}
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Glass Badge - Smaller */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 4px 24px rgba(124, 58, 237, 0.15)'
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />
            <span className="text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-primary)' }}>
              Apprends le piano autrement
            </span>
          </div>

          {/* Main Title - Much Smaller, Better Balanced */}
          <div className="relative mb-12">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-info) 50%, var(--accent-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 8s ease infinite',
                letterSpacing: '-0.025em'
              }}
            >
              Tes premiers morceaux, simplement
            </h1>
          </div>

          {/* CTA Button - Added back but single, centered */}
          <div className="mb-16">
            <Link
              href="/parcours"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white text-base font-semibold transition-all duration-300 hover:scale-105 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)',
                boxShadow: '0 8px 32px rgba(124, 58, 237, 0.25)'
              }}
            >
              <span className="relative z-10">Découvrir les leçons</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              {/* Shine effect */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                }}
              />
            </Link>
          </div>

          {/* Features Cards - Smaller, More Compact */}
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                icon: Music,
                title: 'Sans solfège',
                description: 'Joue dès le premier jour',
                gradient: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)'
              },
              {
                icon: TrendingUp,
                title: 'Progression',
                description: 'Statistiques en temps réel',
                gradient: 'linear-gradient(135deg, var(--accent-success) 0%, var(--accent-success-hover) 100%)'
              },
              {
                icon: Award,
                title: 'Gamification',
                description: 'Badges et récompenses',
                gradient: 'linear-gradient(135deg, var(--accent-warning) 0%, var(--accent-warning-hover) 100%)'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: feature.gradient,
                    boxShadow: '0 4px 16px rgba(124, 58, 237, 0.25)'
                  }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
