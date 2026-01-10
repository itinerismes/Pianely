import Link from 'next/link'
import { Sparkles, Music, Award, TrendingUp } from 'lucide-react'

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
        {/* Small accent blob center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
            animationDuration: '10s',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Glass Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-12 backdrop-blur-xl border transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(124, 58, 237, 0.1)'
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: 'var(--text-primary)' }}>
              APPRENDS LE PIANO AUTREMENT
            </span>
          </div>

          {/* Main Title - Reduced Size, Single Line */}
          <div className="relative mb-16">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-info) 50%, var(--accent-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 8s ease infinite',
                letterSpacing: '-0.04em'
              }}
            >
              Tes premiers morceaux, simplement
            </h1>
          </div>

          {/* Features Cards - Moved up */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Music,
                title: 'Sans solfège',
                description: 'Commence à jouer immédiatement sans lire la musique',
                gradient: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)'
              },
              {
                icon: TrendingUp,
                title: 'Progression claire',
                description: 'Objectifs mesurables et statistiques détaillées',
                gradient: 'linear-gradient(135deg, var(--accent-success) 0%, var(--accent-success-hover) 100%)'
              },
              {
                icon: Award,
                title: 'Gamification',
                description: 'Badges et récompenses pour rester motivé',
                gradient: 'linear-gradient(135deg, var(--accent-warning) 0%, var(--accent-warning-hover) 100%)'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative backdrop-blur-xl border rounded-3xl p-8 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: feature.gradient,
                    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.2)'
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
