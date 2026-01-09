'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Play, RotateCcw, Music2, Target as TargetIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AssistantPianelyWidgetProps {
  className?: string
}

export function AssistantPianelyWidget({ className }: AssistantPianelyWidgetProps) {
  return (
    <GlassCard
      variant="elevated"
      padding="lg"
      className={cn('relative overflow-hidden bg-gradient-to-br from-violet-600 to-purple-600', className)}
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
        <h3 className="text-xl font-bold text-white mb-5">
          Que veux-tu travailler ?
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
  )
}
