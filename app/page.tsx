'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Piano, Zap, TrendingUp, Award, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 py-20">
        <div className="max-w-4xl">
          <div>
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-[#b4c6e7]">
                <Zap className="h-4 w-4 text-[#667eea]" />
                Nouveau parcours débutant disponible
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Apprends le piano</span>
              <br />
              <span className="text-white">simplement</span>
            </h1>

            <p className="text-lg md:text-xl text-[#b4c6e7] mb-10 max-w-2xl leading-relaxed">
              Joue tes premiers morceaux en quelques semaines.
              Méthode progressive sans solfège au départ, parfaite pour les débutants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/inscription">
                <GlassButton variant="primary" size="lg" fullWidth className="sm:w-auto">
                  Commencer gratuitement
                  <ArrowRight className="h-5 w-5" />
                </GlassButton>
              </Link>
              <Link href="/parcours">
                <GlassButton variant="outline" size="lg" fullWidth className="sm:w-auto">
                  <Play className="h-5 w-5" />
                  Voir le parcours
                </GlassButton>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">5</div>
              <div className="text-xs md:text-sm text-[#b4c6e7]">Niveaux progressifs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">30+</div>
              <div className="text-xs md:text-sm text-[#b4c6e7]">Leçons interactives</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">15min</div>
              <div className="text-xs md:text-sm text-[#b4c6e7]">Par jour suffit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Une méthode pensée pour toi
          </h2>
          <p className="text-base md:text-lg text-[#b4c6e7] max-w-2xl">
            Pas de jargon complexe, juste l'essentiel pour progresser rapidement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl">
          {[
            {
              icon: Piano,
              title: 'Accessible à tous',
              description: 'Aucune connaissance musicale requise. Démarre avec les bases et progresse à ton rythme.'
            },
            {
              icon: Play,
              title: 'Morceaux réels',
              description: 'Joue des chansons que tu aimes dès les premières leçons. Apprentissage pratique et motivant.'
            },
            {
              icon: TrendingUp,
              title: 'Progression mesurée',
              description: 'Suis tes progrès avec des jalons clairs et des badges de réussite.'
            },
            {
              icon: Award,
              title: 'Solfège progressif',
              description: 'Introduction graduelle de la théorie musicale quand tu es prêt.'
            }
          ].map((feature, index) => (
            <GlassCard key={index} variant="hover" padding="md" className="md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] shrink-0">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#b4c6e7] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Ils ont commencé comme toi
          </h2>
          <p className="text-base md:text-lg text-[#b4c6e7]">
            Des débutants qui jouent maintenant leurs morceaux préférés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl">
          {[
            {
              name: 'Marie L.',
              role: '34 ans, débutante',
              text: 'Après 3 semaines avec Pianely, je joue déjà mes premiers morceaux. La méthode est vraiment accessible.'
            },
            {
              name: 'Thomas K.',
              role: '16 ans, lycéen',
              text: 'Les leçons sont courtes et efficaces. 15-20 minutes par jour et je vois les résultats rapidement.'
            },
            {
              name: 'Sophie M.',
              role: '42 ans, professeure',
              text: 'L\'approche progressive est parfaite. On joue vraiment dès la première leçon, c\'est motivant.'
            }
          ].map((testimonial, index) => (
            <GlassCard key={index} padding="md" className="md:p-8">
              <p className="text-sm md:text-base text-[#b4c6e7] mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-[#6b7fa8]">{testimonial.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <GlassCard variant="elevated" padding="lg" className="max-w-3xl md:p-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Prêt à jouer tes premiers morceaux ?
            </h2>
            <p className="text-base md:text-lg text-[#b4c6e7] mb-8">
              Crée ton compte gratuit et démarre dès maintenant
            </p>
            <Link href="/inscription">
              <GlassButton variant="primary" size="lg">
                Commencer l'aventure
                <ArrowRight className="h-5 w-5" />
              </GlassButton>
            </Link>
            <p className="text-xs md:text-sm text-[#6b7fa8] mt-6">
              Tu n'as pas encore d'instrument ?{' '}
              <Link href="/pianos-debutants" className="text-[#667eea] hover:text-[#764ba2] transition-colors">
                Voir nos recommandations
              </Link>
            </p>
          </div>
        </GlassCard>
      </section>
    </main>
  )
}
