'use client'

import { Award } from 'lucide-react'

const badges = [
  { id: 1, unlocked: false, icon: '🎹', name: 'Premier morceau complété', condition: 'complète ton premier morceau' },
  { id: 2, unlocked: false, icon: '⭐', name: 'Pratique régulière', condition: 'pratique 7 jours de suite' },
  { id: 3, unlocked: false, icon: '🎵', name: 'Mélomane', condition: 'apprends 5 morceaux' },
  { id: 4, unlocked: false, icon: '🏆', name: 'Champion', condition: 'complète 10 morceaux' },
  { id: 5, unlocked: false, icon: '🎼', name: 'Virtuose', condition: 'atteins le niveau 10' },
  { id: 6, unlocked: false, icon: '💎', name: 'Diamant', condition: 'pratique 30 jours de suite' },
]

export function BadgesWidget() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl shadow-black/20 border border-slate-700 p-3 h-full w-full overflow-hidden hover:shadow-2xl hover:border-slate-600 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xs font-semibold text-white/90 tracking-tight">Badges</h3>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-1.5">
        {badges.map((badge) => (
          <div key={badge.id} className="relative group">
            <div
              className={`h-12 rounded-lg flex items-center justify-center text-sm transition-transform hover:scale-105 ${
                badge.unlocked
                  ? 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/50'
                  : 'bg-slate-700/30 border border-slate-600 opacity-50'
              }`}
            >
              {badge.icon}
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-[9px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 border border-slate-700">
              {badge.unlocked ? (
                <>{badge.name} ✓</>
              ) : (
                <>À débloquer : {badge.condition}</>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
