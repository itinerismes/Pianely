'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Piano, TrendingUp, Clock, Target, Music, Award, ArrowRight, Play, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen pl-20">
      <div className="p-8 max-w-[1600px]">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Tableau de bord</h1>
          <p className="text-[#b4c6e7]">Bienvenue sur Pianely, ta progression en un coup d'œil</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <GlassCard variant="elevated" padding="xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Vue d'ensemble</h2>
                <p className="text-sm text-[#b4c6e7]">Ta progression cette semaine</p>
              </div>

              <div className="h-64 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-[#667eea] mx-auto mb-4" />
                  <p className="text-[#b4c6e7]">Graphique de progression</p>
                  <p className="text-xs text-[#6b7fa8] mt-2">Les données s'afficheront une fois que tu commenceras</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-3xl font-bold gradient-text mb-1">0h</div>
                  <div className="text-xs text-[#b4c6e7]">Temps de pratique</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-3xl font-bold gradient-text mb-1">0</div>
                  <div className="text-xs text-[#b4c6e7]">Leçons complétées</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-3xl font-bold gradient-text mb-1">0</div>
                  <div className="text-xs text-[#b4c6e7]">Jours de série</div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6">
            <GlassCard variant="elevated" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Niveau actuel</h3>
                  <p className="text-xs text-[#b4c6e7]">Débutant</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#b4c6e7]">Progression</span>
                  <span className="text-white font-medium">0%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
            </GlassCard>

            <GlassCard variant="elevated" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Pratique quotidienne</h3>
                  <p className="text-xs text-[#b4c6e7]">Objectif: 15 min/jour</p>
                </div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold gradient-text mb-2">0 min</div>
                <p className="text-xs text-[#b4c6e7]">Aujourd'hui</p>
              </div>
            </GlassCard>

            <GlassCard variant="elevated" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Badges</h3>
                  <p className="text-xs text-[#b4c6e7]">0 débloqués</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1,2,3].map((i) => (
                  <div key={i} className="aspect-square rounded-lg bg-white/5 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#6b7fa8]" />
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <GlassCard variant="elevated" padding="lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Commencer ton parcours</h3>
                  <p className="text-sm text-[#b4c6e7]">5 niveaux progressifs pour maîtriser le piano</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { level: 1, name: 'Découverte', lessons: 7, locked: false },
                  { level: 2, name: 'Fondations', lessons: 8, locked: true },
                  { level: 3, name: 'Progression', lessons: 7, locked: true },
                  { level: 4, name: 'Maîtrise', lessons: 6, locked: true },
                  { level: 5, name: 'Expert', lessons: 5, locked: true },
                ].map((level) => (
                  <div
                    key={level.level}
                    className={cn(
                      'p-4 rounded-xl border transition-all',
                      level.locked
                        ? 'bg-white/[0.02] border-white/5 opacity-50'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          'w-10 h-10 rounded-lg flex items-center justify-center font-bold',
                          level.locked
                            ? 'bg-white/5 text-[#6b7fa8]'
                            : 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white'
                        )}>
                          {level.level}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{level.name}</div>
                          <div className="text-xs text-[#b4c6e7]">{level.lessons} leçons</div>
                        </div>
                      </div>
                      {!level.locked && (
                        <Link href="/parcours">
                          <GlassButton variant="outline" size="sm">
                            Commencer
                          </GlassButton>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <GlassCard variant="elevated" padding="lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Pourquoi Pianely ?</h3>
                <p className="text-sm text-[#b4c6e7]">Une méthode conçue pour les débutants</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Piano,
                    title: 'Aucun prérequis',
                    description: 'Commence de zéro, aucune connaissance musicale nécessaire'
                  },
                  {
                    icon: Music,
                    title: 'Morceaux dès le début',
                    description: 'Joue des chansons réelles dès la première semaine'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Progression claire',
                    description: 'Suivi détaillé avec jalons et badges de réussite'
                  },
                  {
                    icon: Zap,
                    title: '15 min par jour',
                    description: 'Des sessions courtes et efficaces qui s\'intègrent à ton emploi du temps'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{feature.title}</div>
                      <div className="text-xs text-[#b4c6e7]">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link href="/inscription" className="block">
                  <GlassButton variant="primary" size="lg" fullWidth>
                    Créer mon compte gratuit
                    <ArrowRight className="h-5 w-5" />
                  </GlassButton>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
