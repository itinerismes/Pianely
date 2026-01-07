'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Piano, Music, Trophy, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  const features = [
    {
      icon: Piano,
      title: 'Accessible à tous',
      description: 'Aucune connaissance musicale requise. Commence avec les bases et progresse à ton rythme.'
    },
    {
      icon: Music,
      title: 'Morceaux réels',
      description: 'Joue des chansons que tu aimes dès les premières leçons. Apprentissage pratique et motivant.'
    },
    {
      icon: TrendingUp,
      title: 'Progression mesurable',
      description: 'Suis tes progrès avec des jalons clairs et des badges de réussite.'
    },
    {
      icon: Trophy,
      title: 'Solfège progressif',
      description: 'Introduction graduelle de la théorie musicale quand tu es prêt. Pas de surcharge dès le départ.'
    }
  ]

  const testimonials = [
    {
      name: 'Marie, 34 ans',
      text: 'J\'ai toujours voulu apprendre le piano mais je pensais que c\'était trop tard. Après 3 semaines avec Pianely, je joue déjà mes premiers morceaux !'
    },
    {
      name: 'Thomas, 16 ans',
      text: 'Les leçons sont courtes et efficaces. J\'adore pouvoir pratiquer 15-20 minutes par jour et voir les résultats rapidement.'
    },
    {
      name: 'Sophie, 42 ans',
      text: 'L\'approche progressive est parfaite. On n\'est pas noyé dans la théorie dès le début. On joue vraiment dès la première leçon.'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Apprends le piano
              <br />
              simplement
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Tes premiers morceaux en quelques semaines, sans lire la musique au départ.
              <br />
              Parfait pour les grands débutants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/inscription">
                <GlassButton variant="primary" size="lg">
                  Commencer gratuitement
                </GlassButton>
              </Link>
              <Link href="/parcours">
                <GlassButton variant="outline" size="lg">
                  Découvrir le parcours
                </GlassButton>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          >
            <GlassCard padding="md" className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-gray-300">Niveaux progressifs</div>
            </GlassCard>
            <GlassCard padding="md" className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">30+</div>
              <div className="text-gray-300">Leçons interactives</div>
            </GlassCard>
            <GlassCard padding="md" className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">15min</div>
              <div className="text-gray-300">Par jour suffit</div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Une méthode pensée pour les débutants
            </h2>
            <p className="text-xl text-gray-300">
              Pas de jargon complexe, juste l'essentiel pour jouer rapidement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard padding="lg" variant="hover">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ils ont commencé comme toi
            </h2>
            <p className="text-xl text-gray-300">
              Des débutants complets qui jouent maintenant leurs morceaux préférés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard padding="lg">
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-blue-400 font-semibold">{testimonial.name}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard padding="xl" className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à jouer tes premiers morceaux ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Crée ton compte gratuit et commence dès maintenant. Aucune carte bancaire requise.
              </p>
              <Link href="/inscription">
                <GlassButton variant="primary" size="lg">
                  Commencer l'aventure
                </GlassButton>
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                Tu n'as pas encore d'instrument ?{' '}
                <Link href="/pianos-debutants" className="text-blue-400 hover:underline">
                  Voir nos recommandations
                </Link>
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
