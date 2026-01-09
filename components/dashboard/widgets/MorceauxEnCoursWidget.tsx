'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Music2 } from 'lucide-react'
import { Morceau } from '@/types/dashboard'
import { cn } from '@/lib/utils'

interface MorceauxEnCoursWidgetProps {
  morceaux: Morceau[]
  className?: string
}

export function MorceauxEnCoursWidget({ morceaux, className }: MorceauxEnCoursWidgetProps) {
  return (
    <GlassCard variant="elevated" padding="md" className={className}>
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-900">Morceaux en cours</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {morceaux.map((morceau, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-br from-violet-100/50 to-purple-100/50 border border-violet-200/50 hover:from-violet-100 hover:to-purple-100 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-slate-900 text-sm">{morceau.titre}</h3>
              <Music2 className="w-4 h-4 text-violet-600" />
            </div>

            {/* Barre de progression compacte */}
            <div className="mb-3">
              <div className="h-1 bg-violet-100 rounded-full overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all',
                    morceau.status === 'mastered'
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                      : 'bg-gradient-to-r from-violet-600 to-purple-600'
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
  )
}
