'use client'

import { Clock, Target } from 'lucide-react'

export function ObjectifWidget() {
  return (
    <div className="card h-full w-full overflow-hidden p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--accent-success) 0%, var(--accent-success-hover) 100%)',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
          }}
        >
          <Target className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Objectif quotidien
        </h3>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span style={{ color: 'var(--text-secondary)' }}>0 min / 20 min</span>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>0%</span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'var(--hover-bg)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              background: 'linear-gradient(90deg, var(--accent-success) 0%, var(--accent-success-light) 100%)',
              width: '0%'
            }}
          />
        </div>
      </div>

      {/* Mini histogram */}
      <div className="pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
        <p className="text-xs mb-3" style={{ color: 'var(--text-tertiary)' }}>
          Cette semaine
        </p>
        <div className="flex items-end justify-between gap-1.5 h-12">
          {[0, 0, 0, 0, 0, 0, 0].map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-t transition-all duration-200 hover:opacity-80"
              style={{
                background: height === 0 ? 'var(--hover-bg)' : 'linear-gradient(180deg, var(--accent-success) 0%, var(--accent-success-hover) 100%)',
                height: height === 0 ? '6px' : `${height}%`
              }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
          <span>L</span>
          <span>M</span>
          <span>M</span>
          <span>J</span>
          <span>V</span>
          <span>S</span>
          <span>D</span>
        </div>
      </div>
    </div>
  )
}
