'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ObjectifQuotidienWidgetProps {
  className?: string
}

export function ObjectifQuotidienWidget({ className }: ObjectifQuotidienWidgetProps) {
  return (
    <GlassCard variant="elevated" padding="md" className={className}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Objectif quotidien</h3>
      </div>

      {/* Barre de progression */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">15 min / 20 min</span>
          <span className="text-slate-900 font-semibold">75%</span>
        </div>
        <div className="h-3 bg-violet-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all"
            style={{ width: '75%' }}
          />
        </div>
      </div>

      {/* Mini graphique */}
      <div className="mt-4 pt-4 border-t border-violet-200">
        <div className="flex items-end justify-between gap-1 h-16">
          {[60, 80, 100, 75, 90, 85, 75].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-violet-600 to-purple-600 rounded-t opacity-60 hover:opacity-100 transition-opacity"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-500 mt-2">
          <span>Lun</span>
          <span>Dim</span>
        </div>
      </div>
    </GlassCard>
  )
}
