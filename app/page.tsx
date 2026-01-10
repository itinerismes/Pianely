import Link from 'next/link'
import { ArrowRight, Sparkles, Music, Award, TrendingUp } from 'lucide-react'

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
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-32">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Glass Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105"
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

          {/* Main Title with Glass Effect */}
          <div className="relative mb-8">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-6"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-info) 50%, var(--accent-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 8s ease infinite',
                letterSpacing: '-0.04em'
              }}
            >
              Tes premiers
              <br />
              morceaux,
              <br />
              <span className="relative inline-block">
                simplement
                <div
                  className="absolute -bottom-4 left-0 right-0 h-3 -z-10 blur-sm"
                  style={{
                    background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
                    opacity: 0.3
                  }}
                />
              </span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/inscription"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white text-lg font-bold transition-all duration-300 hover:scale-105 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)',
                boxShadow: '0 8px 32px rgba(124, 58, 237, 0.3)'
              }}
            >
              <span className="relative z-10">Commencer gratuitement</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              {/* Shine effect */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                }}
              />
            </Link>

            <Link
              href="/parcours"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 backdrop-blur-xl border"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'var(--border-medium)',
                color: 'var(--text-primary)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              <span>Explorer les leçons</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stats Cards with Glass Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Music, value: '5', label: 'Niveaux', gradient: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)' },
              { icon: TrendingUp, value: '42', label: 'Leçons', gradient: 'linear-gradient(135deg, var(--accent-success) 0%, var(--accent-success-hover) 100%)' },
              { icon: Award, value: '10+', label: 'Morceaux', gradient: 'linear-gradient(135deg, var(--accent-info) 0%, var(--accent-info-hover) 100%)' }
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: stat.gradient,
                      boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
                    }}
                  >
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
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
