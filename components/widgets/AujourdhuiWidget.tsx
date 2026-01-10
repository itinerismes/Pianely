'use client'

import { ArrowRight, Calendar } from 'lucide-react'

export function AujourdhuiWidget() {
  return (
    <div className="card h-full w-full overflow-hidden p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--accent-warning) 0%, var(--accent-warning-hover) 100%)',
            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)'
          }}
        >
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Aujourd&apos;hui
        </h3>
      </div>

      <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
        Commence ton apprentissage du piano dès aujourd&apos;hui
      </p>

      <div
        className="flex items-center justify-center py-4 px-4 rounded-lg"
        style={{
          background: 'var(--accent-warning-bg)',
          border: '1px solid var(--border-light)'
        }}
      >
        <span className="text-sm font-medium" style={{ color: 'var(--accent-warning)' }}>
          Aucune leçon commencée
        </span>
      </div>
    </div>
  )
}
