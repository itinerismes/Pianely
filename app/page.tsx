import Link from 'next/link'
import { Sparkles, Music2, Award, TrendingUp, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
          {/* Glass Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105 bg-white/80 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-bold tracking-wider uppercase text-gray-900">
              Apprends le piano autrement
            </span>
          </div>

          {/* Main Title */}
          <div className="relative mb-6">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 8s ease infinite',
                letterSpacing: '-0.025em'
              }}
            >
              Tes premiers morceaux, simplement
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Apprends le piano facilement, sans lire la musique au départ. Méthode progressive pour grands débutants.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Link
              href="/parcours"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white text-base font-semibold transition-all duration-300 hover:scale-105 overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl hover:shadow-2xl"
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

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Music2,
                title: 'Sans solfège',
                description: 'Joue dès le premier jour',
                gradient: 'from-purple-500 to-purple-600',
                bgColor: 'from-purple-50 to-purple-100'
              },
              {
                icon: TrendingUp,
                title: 'Progression',
                description: 'Statistiques en temps réel',
                gradient: 'from-green-500 to-emerald-600',
                bgColor: 'from-green-50 to-emerald-100'
              },
              {
                icon: Award,
                title: 'Gamification',
                description: 'Badges et récompenses',
                gradient: 'from-yellow-500 to-orange-600',
                bgColor: 'from-yellow-50 to-orange-100'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br ${feature.gradient} shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
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
