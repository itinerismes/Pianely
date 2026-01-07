'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Piano, Zap, TrendingUp, Award, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-12 md:px-16 lg:px-24 py-24">
        <div className="max-w-6xl w-full mx-auto">
          <div>
            <div className="inline-block mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-2.5 text-base text-[#b4c6e7]">
                <Zap className="h-5 w-5 text-[#667eea]" />
                Nouveau parcours débutant disponible
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-10 leading-[1.05]">
              <span className="gradient-text">Apprends le piano</span>
              <br />
              <span className="text-white">simplement</span>
            </h1>

            <p className="text-2xl md:text-3xl text-[#b4c6e7] mb-14 max-w-4xl leading-relaxed">
              Joue tes premiers morceaux en quelques semaines.
              Méthode progressive sans solfège au départ, parfaite pour les débutants.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/inscription">
                <GlassButton variant="primary" size="lg" fullWidth className="sm:w-auto text-lg px-10 py-4">
                  Commencer gratuitement
                  <ArrowRight className="h-6 w-6" />
                </GlassButton>
              </Link>
              <Link href="/parcours">
                <GlassButton variant="outline" size="lg" fullWidth className="sm:w-auto text-lg px-10 py-4">
                  <Play className="h-6 w-6" />
                  Voir le parcours
                </GlassButton>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-12 md:gap-16 mt-24">
            <div>
              <div className="text-6xl md:text-7xl font-bold gradient-text mb-3">5</div>
              <div className="text-base md:text-lg text-[#b4c6e7]">Niveaux progressifs</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold gradient-text mb-3">30+</div>
              <div className="text-base md:text-lg text-[#b4c6e7]">Leçons interactives</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold gradient-text mb-3">15min</div>
              <div className="text-base md:text-lg text-[#b4c6e7]">Par jour suffit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-12 md:px-16 lg:px-24 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              Une méthode pensée pour toi
            </h2>
            <p className="text-xl md:text-2xl text-[#b4c6e7] max-w-3xl">
              Pas de jargon complexe, juste l'essentiel pour progresser rapidement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
              <GlassCard key={index} variant="hover" padding="xl">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] shrink-0">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-lg text-[#b4c6e7] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-12 md:px-16 lg:px-24 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              Ils ont commencé comme toi
            </h2>
            <p className="text-xl md:text-2xl text-[#b4c6e7]">
              Des débutants qui jouent maintenant leurs morceaux préférés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
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
              <GlassCard key={index} padding="xl">
                <p className="text-lg md:text-xl text-[#b4c6e7] mb-8 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-base text-[#6b7fa8] mt-2">{testimonial.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-12 md:px-16 lg:px-24 py-32 md:py-40 pb-40">
        <div className="max-w-5xl mx-auto">
          <GlassCard variant="elevated" padding="xl" className="lg:p-20">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
                Prêt à jouer tes premiers morceaux ?
              </h2>
              <p className="text-xl md:text-2xl text-[#b4c6e7] mb-12">
                Crée ton compte gratuit et démarre dès maintenant
              </p>
              <Link href="/inscription">
                <GlassButton variant="primary" size="lg" className="text-lg px-10 py-4">
                  Commencer l'aventure
                  <ArrowRight className="h-6 w-6" />
                </GlassButton>
              </Link>
              <p className="text-base md:text-lg text-[#6b7fa8] mt-10">
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
