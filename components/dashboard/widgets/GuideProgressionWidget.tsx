'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { CheckCircle2, Circle } from 'lucide-react'
import { TimelineDay } from '@/types/dashboard'
import { cn } from '@/lib/utils'

interface GuideProgressionWidgetProps {
  weekTimeline: TimelineDay[]
  className?: string
}

export function GuideProgressionWidget({ weekTimeline, className }: GuideProgressionWidgetProps) {
  return (
    <GlassCard variant="elevated" padding="md" className={cn('max-h-[500px] overflow-y-auto', className)}>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Guide de progression</h2>
      </div>

      {/* Timeline horizontale par jour */}
      <div className="space-y-3">
        {weekTimeline.map((day, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Jour */}
            <div className="w-12 text-center">
              <div className="text-xs font-medium text-gray-600">{day.day}</div>
            </div>

            {/* Barre de séance */}
            <div className="flex-1">
              <div
                className={cn(
                  'relative p-3 rounded-xl border transition-all',
                  day.status === 'completed'
                    ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border-emerald-500/30'
                    : day.status === 'in_progress'
                    ? 'bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-500/30'
                    : 'bg-violet-50/50 border-violet-200/50'
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Statut */}
                    {day.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : day.status === 'in_progress' ? (
                      <Circle className="w-4 h-4 text-violet-600 fill-violet-600/20" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-400" />
                    )}

                    {/* Infos */}
                    <div className="text-sm font-medium text-gray-900 capitalize">
                      {day.type}
                    </div>
                  </div>

                  {/* Bouton action */}
                  {day.status === 'in_progress' && (
                    <GlassButton variant="primary" size="sm">
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
  )
}
