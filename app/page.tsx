'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import {
  Play,
  RotateCcw,
  Music2,
  Target as TargetIcon,
  Award,
  CheckCircle2,
  Circle,
  Clock,
  TrendingUp,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'

export default function HomePage() {
  const userName = "Michel"

  // Données pour la timeline de la semaine
  const weekTimeline = [
    { day: 'Lun', type: 'découverte', niveau: 1, durée: '15min', status: 'completed' },
    { day: 'Mar', type: 'technique', niveau: 1, durée: '20min', status: 'completed' },
    { day: 'Mer', type: 'morceau', niveau: 1, durée: '25min', status: 'in_progress' },
    { day: 'Jeu', type: 'découverte', niveau: 2, durée: '15min', status: 'pending' },
    { day: 'Ven', type: 'technique', niveau: 2, durée: '20min', status: 'pending' },
    { day: 'Sam', type: 'morceau', niveau: 2, durée: '30min', status: 'pending' },
    { day: 'Dim', type: 'révision', niveau: 1, durée: '20min', status: 'pending' },
  ]

  const morceaux = [
    { titre: 'Au clair de la lune', niveau: 1, status: 'in_progress', progress: 65 },
    { titre: 'Frère Jacques', niveau: 1, status: 'not_started', progress: 0 },
    { titre: 'Joyeux anniversaire', niveau: 2, status: 'mastered', progress: 100 },
  ]

  const badges = [
    { id: 1, unlocked: true, icon: '🎹' },
    { id: 2, unlocked: true, icon: '⭐' },
    { id: 3, unlocked: true, icon: '🎵' },
    { id: 4, unlocked: false, icon: '🏆' },
    { id: 5, unlocked: false, icon: '🎼' },
    { id: 6, unlocked: false, icon: '💎' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f1629] to-[#1a1f35]">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-8 py-8">
        {/* Titre principal */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Bonjour {userName}, prêt à jouer aujourd&apos;hui ?
          </h1>
          <p className="text-[#b4c6e7]/70">Reprends là où tu t&apos;es arrêté</p>
        </div>

        {/* Layout principal - 2 colonnes desktop, pile mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6 mb-6">

          {/* COLONNE GAUCHE - Guide de progression + Widgets */}
          <div className="flex flex-col gap-4">
            {/* Guide de progression */}
            <GlassCard variant="elevated" padding="lg" className="max-h-[500px] overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Guide de progression</h2>
                <p className="text-[#b4c6e7]/70">Ton parcours de la semaine</p>
              </div>

              {/* Timeline horizontale par jour */}
              <div className="space-y-4">
                {weekTimeline.map((day, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {/* Jour */}
                    <div className="w-16 text-center">
                      <div className="text-sm font-semibold text-white">{day.day}</div>
                    </div>

                    {/* Barre de séance */}
                    <div className="flex-1">
                      <div
                        className={cn(
                          'relative p-4 rounded-xl border transition-all',
                          day.status === 'completed'
                            ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border-emerald-500/30'
                            : day.status === 'in_progress'
                            ? 'bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 border-[#667eea]/30'
                            : 'bg-white/5 border-white/10'
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {/* Statut */}
                            {day.status === 'completed' ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            ) : day.status === 'in_progress' ? (
                              <Circle className="w-5 h-5 text-[#667eea] fill-[#667eea]/20" />
                            ) : (
                              <Circle className="w-5 h-5 text-white/30" />
                            )}

                            {/* Infos */}
                            <div>
                              <div className="text-sm font-semibold text-white capitalize">
                                {day.type}
                              </div>
                              <div className="text-xs text-[#b4c6e7]/60">
                                Niveau {day.niveau} • {day.durée}
                              </div>
                            </div>
                          </div>

                          {/* Bouton action */}
                          {day.status === 'in_progress' && (
                            <GlassButton variant="primary" size="sm">
                              <Play className="w-4 h-4" />
                              Continuer
                            </GlassButton>
                          )}
                          {day.status === 'pending' && (
                            <GlassButton variant="outline" size="sm">
                              Démarrer
                            </GlassButton>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Conseil du jour */}
            <GlassCard variant="elevated" padding="md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Conseil du jour</h3>
                  <p className="text-sm text-[#b4c6e7]/80 leading-relaxed">
                    Pratique 15 minutes par jour plutôt qu&apos;une heure une fois par semaine.
                    La régularité est la clé de la progression au piano.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Prochaine étape */}
            <GlassCard variant="elevated" padding="md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Prochaine étape</h3>
                  <p className="text-xs text-[#b4c6e7]/70">À débloquer</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Niveau 2 - Fondations</h4>
                    <p className="text-xs text-[#b4c6e7]/70">8 leçons • Accords de base</p>
                  </div>
                  <div className="text-2xl">🔒</div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#b4c6e7]/70">Progression Niveau 1</span>
                    <span className="text-white font-semibold">4/7</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full"
                      style={{ width: '57%' }}
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* COLONNE DROITE - Assistant + Objectif + Badges */}
          <div className="flex flex-col gap-8">

            {/* Assistant Pianely */}
            <GlassCard
              variant="elevated"
              padding="lg"
              className="relative overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]"
            >
              {/* Visuel abstrait en arrière-plan */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M 10 50 Q 30 30, 50 50 T 90 50"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 10 60 Q 30 40, 50 60 T 90 60"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 10 70 Q 30 50, 50 70 T 90 70"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">
                  Que veux-tu travailler aujourd&apos;hui ?
                </h3>

                {/* Boutons en grille 2x2 */}
                <div className="grid grid-cols-2 gap-3">
                  <GlassButton
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center gap-2 bg-white/10 border-white/20 hover:bg-white/20"
                  >
                    <Play className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium text-white">Séance du jour</span>
                  </GlassButton>

                  <GlassButton
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center gap-2 bg-white/10 border-white/20 hover:bg-white/20"
                  >
                    <RotateCcw className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium text-white">Révision</span>
                  </GlassButton>

                  <GlassButton
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center gap-2 bg-white/10 border-white/20 hover:bg-white/20"
                  >
                    <Music2 className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium text-white">Morceaux</span>
                  </GlassButton>

                  <GlassButton
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center gap-2 bg-white/10 border-white/20 hover:bg-white/20"
                  >
                    <TargetIcon className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium text-white">Technique</span>
                  </GlassButton>
                </div>
              </div>
            </GlassCard>

            {/* Objectif */}
            <GlassCard variant="elevated" padding="md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Objectif</h3>
                  <p className="text-xs text-[#b4c6e7]/70">Pratique quotidienne</p>
                </div>
              </div>

              {/* Barre de progression */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#b4c6e7]/70">15 min / 20 min</span>
                  <span className="text-white font-semibold">75%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full transition-all"
                    style={{ width: '75%' }}
                  />
                </div>
              </div>

              {/* Mini graphique */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-end justify-between gap-1 h-16">
                  {[60, 80, 100, 75, 90, 85, 75].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#667eea] to-[#764ba2] rounded-t opacity-60 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-[#b4c6e7]/50 mt-2">
                  <span>Lun</span>
                  <span>Dim</span>
                </div>
              </div>
            </GlassCard>

            {/* Badges */}
            <GlassCard variant="elevated" padding="md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Badges</h3>
                  <p className="text-xs text-[#b4c6e7]/70">3 / 6 débloqués</p>
                </div>
              </div>

              {/* Grille 2x3 de badges */}
              <div className="grid grid-cols-3 gap-3">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={cn(
                      'aspect-square rounded-xl flex items-center justify-center text-3xl transition-all',
                      badge.unlocked
                        ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                        : 'bg-white/5 border border-white/10 grayscale opacity-40'
                    )}
                  >
                    {badge.icon}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* BANDE INFÉRIEURE - Morceaux en cours (pleine largeur) */}
        <GlassCard variant="elevated" padding="lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Morceaux en cours</h2>
              <p className="text-sm text-[#b4c6e7]/70">Continue ton apprentissage</p>
            </div>
            <GlassButton variant="outline" size="sm">
              Voir tous les morceaux
            </GlassButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {morceaux.map((morceau, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:from-white/15 hover:to-white/10 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white mb-1">{morceau.titre}</h3>
                    <p className="text-xs text-[#b4c6e7]/70">Niveau {morceau.niveau}</p>
                  </div>
                  <Music2 className="w-5 h-5 text-[#667eea]" />
                </div>

                {/* Statut */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-white">
                      {morceau.status === 'mastered' && 'Maîtrisé'}
                      {morceau.status === 'in_progress' && 'En cours'}
                      {morceau.status === 'not_started' && 'Non commencé'}
                    </span>
                    <span className="text-xs text-[#b4c6e7]/60">{morceau.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all',
                        morceau.status === 'mastered'
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                          : 'bg-gradient-to-r from-[#667eea] to-[#764ba2]'
                      )}
                      style={{ width: `${morceau.progress}%` }}
                    />
                  </div>
                </div>

                <GlassButton variant="primary" size="sm" className="w-full">
                  {morceau.status === 'not_started' ? 'Commencer' : 'Continuer'}
                </GlassButton>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </main>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
