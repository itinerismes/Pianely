'use client'

import { Music2, Play } from 'lucide-react'

export function MorceauxWidget() {
  return (
    <div className="card h-full w-full overflow-hidden p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--accent-info) 0%, var(--accent-info-hover) 100%)',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
          }}
        >
          <Music2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Morceaux en cours
          </h3>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            Continue ton apprentissage
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-12">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{
            background: 'var(--hover-bg)',
            border: '1px solid var(--border-light)'
          }}
        >
          <Music2 className="w-8 h-8" style={{ color: 'var(--text-muted)' }} />
        </div>
        <p className="text-sm text-center mb-2" style={{ color: 'var(--text-secondary)' }}>
          Aucun morceau commencé
        </p>
        <p className="text-xs text-center" style={{ color: 'var(--text-tertiary)' }}>
          Démarre ta première leçon pour débloquer des morceaux
        </p>
      </div>
    </div>
  )
}
