'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Piano, Zap, TrendingUp, Award, ArrowRight, Play, Music, Target, Clock, Star } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-6">
                <Zap className="h-4 w-4 text-[#667eea]" />
                <span className="text-sm text-[#b4c6e7]">Nouveau parcours disponible</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Apprends le piano</span>
                <br />
                <span className="text-white">simplement</span>
              </h1>

              <p className="text-lg text-[#b4c6e7] mb-8 leading-relaxed">
                Joue tes premiers morceaux en quelques semaines. Méthode progressive sans solfège au départ, parfaite pour les débutants.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/inscription">
                  <GlassButton variant="primary" size="lg">
                    Commencer gratuitement
                    <ArrowRight className="h-5 w-5" />
                  </GlassButton>
                </Link>
                <Link href="/parcours">
                  <GlassButton variant="outline" size="lg">
                    <Play className="h-5 w-5" />
                    Découvrir
                  </GlassButton>
                </Link>
              </div>
            </div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <GlassCard variant="elevated" padding="lg">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">5</div>
                  <div className="text-sm text-[#b4c6e7]">Niveaux progressifs</div>
                </div>
              </GlassCard>

              <GlassCard variant="elevated" padding="lg">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center mb-4">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                  <div className="text-sm text-[#b4c6e7]">Leçons</div>
                </div>
              </GlassCard>

              <GlassCard variant="elevated" padding="lg">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">15min</div>
                  <div className="text-sm text-[#b4c6e7]">Par jour</div>
                </div>
              </GlassCard>

              <GlassCard variant="elevated" padding="lg">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-sm text-[#b4c6e7]">Gratuit</div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Une méthode pensée pour toi
            </h2>
            <p className="text-lg text-[#b4c6e7]">
              Tout ce dont tu as besoin pour réussir
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Piano,
                title: 'Accessible',
                description: 'Aucune connaissance musicale requise'
              },
              {
                icon: Music,
                title: 'Morceaux réels',
                description: 'Joue dès la première leçon'
              },
              {
                icon: TrendingUp,
                title: 'Suivi progression',
                description: 'Jalons clairs et badges'
              },
              {
                icon: Target,
                title: 'Solfège progressif',
                description: 'Théorie introduite graduellement'
              }
            ].map((feature, index) => (
              <GlassCard key={index} variant="hover" padding="lg">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#b4c6e7]">{feature.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ils ont commencé comme toi
            </h2>
            <p className="text-lg text-[#b4c6e7]">
              Des débutants qui progressent chaque jour
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Marie L.',
                role: '34 ans',
                text: 'Après 3 semaines, je joue déjà mes premiers morceaux. La méthode est vraiment accessible.'
              },
              {
                name: 'Thomas K.',
                role: '16 ans',
                text: 'Les leçons sont courtes et efficaces. 15 minutes par jour et je vois les résultats.'
              },
              {
                name: 'Sophie M.',
                role: '42 ans',
                text: 'L\'approche progressive est parfaite. On joue vraiment dès le début.'
              }
            ].map((testimonial, index) => (
              <GlassCard key={index} padding="lg">
                <p className="text-sm text-[#b4c6e7] mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[#6b7fa8]">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="elevated" padding="xl">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Prêt à commencer ?
              </h2>
              <p className="text-lg text-[#b4c6e7] mb-8">
                Crée ton compte gratuit et démarre dès maintenant
              </p>
              <Link href="/inscription">
                <GlassButton variant="primary" size="lg">
                  Commencer l'aventure
                  <ArrowRight className="h-5 w-5" />
                </GlassButton>
              </Link>
              <p className="text-sm text-[#6b7fa8] mt-6">
                Pas encore d'instrument ?{' '}
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
