'use client'

import { Award, Trophy } from 'lucide-react'

const badges = [
  { id: 1, unlocked: false, icon: '🎹', name: 'Premier morceau complété', condition: 'complète ton premier morceau' },
  { id: 2, unlocked: false, icon: '⭐', name: 'Pratique régulière', condition: 'pratique 7 jours de suite' },
  { id: 3, unlocked: false, icon: '🎵', name: 'Mélomane', condition: 'apprends 5 morceaux' },
  { id: 4, unlocked: false, icon: '🏆', name: 'Champion', condition: 'complète 10 morceaux' },
  { id: 5, unlocked: false, icon: '🎼', name: 'Virtuose', condition: 'atteins le niveau 10' },
  { id: 6, unlocked: false, icon: '💎', name: 'Diamant', condition: 'pratique 30 jours de suite' },
]

export function BadgesWidget() {
  const unlockedCount = badges.filter(b => b.unlocked).length

  return (
    <div className="card h-full w-full overflow-hidden p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
            }}
          >
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Badges
            </h3>
            <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
              {unlockedCount} / {badges.length} débloqués
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {badges.map((badge) => (
          <div key={badge.id} className="relative group">
            <div
              className={`h-16 rounded-xl flex items-center justify-center text-2xl transition-all duration-200 hover:scale-105 cursor-pointer ${
                badge.unlocked
                  ? ''
                  : 'grayscale opacity-40'
              }`}
              style={
                badge.unlocked
                  ? {
                      background: 'linear-gradient(135deg, var(--accent-warning-bg) 0%, var(--accent-warning-bg) 100%)',
                      border: '2px solid var(--accent-warning)',
                      boxShadow: '0 2px 8px rgba(245, 158, 11, 0.2)'
                    }
                  : {
                      background: 'var(--hover-bg)',
                      border: '1px solid var(--border-light)'
                    }
              }
            >
              {badge.icon}
            </div>
            {/* Tooltip */}
            <div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-primary)'
              }}
            >
              {badge.unlocked ? (
                <span className="font-medium">{badge.name} ✓</span>
              ) : (
                <span style={{ color: 'var(--text-secondary)' }}>À débloquer : {badge.condition}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
