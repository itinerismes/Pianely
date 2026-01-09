'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { Award } from 'lucide-react'
import { Badge } from '@/types/dashboard'
import { cn } from '@/lib/utils'

interface BadgesWidgetProps {
  badges: Badge[]
  className?: string
}

export function BadgesWidget({ badges, className }: BadgesWidgetProps) {
  return (
    <GlassCard variant="elevated" padding="md" className={className}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base font-semibold text-gray-900">Badges</h3>
      </div>

      {/* Grille 2x3 de badges */}
      <div className="grid grid-cols-3 gap-3">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={cn(
              'aspect-square rounded-xl flex items-center justify-center text-3xl transition-all',
              badge.unlocked
                ? 'bg-amber-100 border border-amber-200'
                : 'bg-gray-100 border border-gray-200 grayscale opacity-40'
            )}
          >
            {badge.icon}
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
