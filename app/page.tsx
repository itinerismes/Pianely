import Link from 'next/link'
import { Music, TrendingUp, Award, ArrowRight, Sparkles } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
               style={{
                 background: 'var(--accent-primary-bg)',
                 border: '1px solid var(--border-light)'
               }}>
            <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
              Méthode progressive pour débutants
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
            Tes premiers morceaux,
            <br />
            <span className="gradient-text">
              simplement
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
             style={{
               color: 'var(--text-secondary)',
               lineHeight: '1.6'
             }}>
            Apprends le piano facilement, sans lire la musique au départ.
            <br className="hidden md:block" />
            Méthode progressive adaptée aux grands débutants.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inscription"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
              }}
            >
              Commencer gratuitement
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/parcours"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{
                color: 'var(--text-primary)',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--card-shadow)'
              }}
            >
              Explorer les leçons
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                5
              </div>
              <div className="text-sm md:text-base" style={{ color: 'var(--text-tertiary)' }}>
                Niveaux
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--accent-success)' }}>
                42
              </div>
              <div className="text-sm md:text-base" style={{ color: 'var(--text-tertiary)' }}>
                Leçons
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--accent-info)' }}>
                10+
              </div>
              <div className="text-sm md:text-base" style={{ color: 'var(--text-tertiary)' }}>
                Morceaux
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
              Une méthode qui fait la différence
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto"
               style={{ color: 'var(--text-secondary)' }}>
              Apprends à ton rythme avec des outils modernes
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card group p-8 text-center hover:border-violet-200 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                   style={{
                     background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)',
                     boxShadow: '0 4px 12px rgba(124, 58, 237, 0.15)'
                   }}>
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}>
                Sans solfège au départ
              </h3>
              <p className="text-base leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                Joue tes premiers morceaux sans avoir besoin de lire la musique. Introduction progressive du solfège.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card group p-8 text-center hover:border-emerald-200 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                   style={{
                     background: 'linear-gradient(135deg, var(--accent-success) 0%, var(--accent-success-hover) 100%)',
                     boxShadow: '0 4px 12px rgba(16, 185, 129, 0.15)'
                   }}>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}>
                Progression mesurable
              </h3>
              <p className="text-base leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                Suis ta progression avec des objectifs clairs et des statistiques détaillées.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card group p-8 text-center hover:border-amber-200 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                   style={{
                     background: 'linear-gradient(135deg, var(--accent-warning) 0%, var(--accent-warning-hover) 100%)',
                     boxShadow: '0 4px 12px rgba(245, 158, 11, 0.15)'
                   }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}>
                Badges et récompenses
              </h3>
              <p className="text-base leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                Débloque des badges au fur et à mesure de ta pratique et reste motivé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="card-lg p-12 md:p-16 text-center"
               style={{
                 background: 'linear-gradient(135deg, var(--accent-primary-bg) 0%, var(--accent-info-bg) 100%)',
                 border: '1px solid var(--border-light)'
               }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
              Prêt à commencer ?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
               style={{ color: 'var(--text-secondary)' }}>
              Rejoins des centaines d'élèves qui ont déjà commencé leur parcours musical
            </p>
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
              }}
            >
              Créer mon compte gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
