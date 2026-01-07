'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Piano, Zap, TrendingUp, Award, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl w-full">
          <div>
            <div className="inline-block mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2 text-sm text-[#b4c6e7]">
                <Zap className="h-4 w-4 text-[#667eea]" />
                Nouveau parcours débutant disponible
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1]">
              <span className="gradient-text">Apprends le piano</span>
              <br />
              <span className="text-white">simplement</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#b4c6e7] mb-12 max-w-3xl leading-relaxed">
              Joue tes premiers morceaux en quelques semaines.
              Méthode progressive sans solfège au départ, parfaite pour les débutants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/inscription">
                <GlassButton variant="primary" size="lg" fullWidth className="sm:w-auto text-base">
                  Commencer gratuitement
                  <ArrowRight className="h-5 w-5" />
                </GlassButton>
              </Link>
              <Link href="/parcours">
                <GlassButton variant="outline" size="lg" fullWidth className="sm:w-auto text-base">
                  <Play className="h-5 w-5" />
                  Voir le parcours
                </GlassButton>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-12 mt-20">
            <div>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">5</div>
              <div className="text-sm md:text-base text-[#b4c6e7]">Niveaux progressifs</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">30+</div>
              <div className="text-sm md:text-base text-[#b4c6e7]">Leçons interactives</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">15min</div>
              <div className="text-sm md:text-base text-[#b4c6e7]">Par jour suffit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Une méthode pensée pour toi
            </h2>
            <p className="text-lg md:text-xl text-[#b4c6e7] max-w-2xl">
              Pas de jargon complexe, juste l'essentiel pour progresser rapidement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
              <GlassCard key={index} variant="hover" padding="lg" className="lg:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] shrink-0">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-base text-[#b4c6e7] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Ils ont commencé comme toi
            </h2>
            <p className="text-lg md:text-xl text-[#b4c6e7]">
              Des débutants qui jouent maintenant leurs morceaux préférés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
              <GlassCard key={index} padding="lg" className="lg:p-10">
                <p className="text-base md:text-lg text-[#b4c6e7] mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white text-base">{testimonial.name}</p>
                  <p className="text-sm text-[#6b7fa8] mt-1">{testimonial.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 pb-32">
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="elevated" padding="xl" className="lg:p-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Prêt à jouer tes premiers morceaux ?
              </h2>
              <p className="text-lg md:text-xl text-[#b4c6e7] mb-10">
                Crée ton compte gratuit et démarre dès maintenant
              </p>
              <Link href="/inscription">
                <GlassButton variant="primary" size="lg" className="text-base">
                  Commencer l'aventure
                  <ArrowRight className="h-5 w-5" />
                </GlassButton>
              </Link>
              <p className="text-sm md:text-base text-[#6b7fa8] mt-8">
                Tu n'as pas encore d'instrument ?{' '}
                <Link href="/pianos-debutants" className="text-[#667eea] hover:text-[#764ba2] transition-colors">
                  Voir nos recommandations
                </Link>
              </p>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  )
}
