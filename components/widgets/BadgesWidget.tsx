'use client'

import { Award } from 'lucide-react'

const badges = [
  { id: 1, unlocked: true, icon: '🎹', name: 'Premier morceau complété', condition: 'complète ton premier morceau' },
  { id: 2, unlocked: true, icon: '⭐', name: 'Pratique régulière', condition: 'pratique 7 jours de suite' },
  { id: 3, unlocked: true, icon: '🎵', name: 'Mélomane', condition: 'apprends 5 morceaux' },
  { id: 4, unlocked: false, icon: '🏆', name: 'Champion', condition: 'complète 10 morceaux' },
  { id: 5, unlocked: false, icon: '🎼', name: 'Virtuose', condition: 'atteins le niveau 10' },
  { id: 6, unlocked: false, icon: '💎', name: 'Diamant', condition: 'pratique 30 jours de suite' },
]

export function BadgesWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-300 p-3 h-full hover:shadow-xl hover:border-sky-400 hover:scale-[1.005] transition-all duration-200 cursor-move">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-sky-300 to-blue-300 flex items-center justify-center">
          <Award className="w-3 h-3 text-white" />
        </div>
        <h3 className="text-xs font-semibold text-gray-700 tracking-tight">Badges</h3>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {badges.map((badge) => (
          <div key={badge.id} className="relative group">
            <div
              className={`h-14 rounded-xl flex items-center justify-center text-base transition-transform hover:scale-105 ${
                badge.unlocked
                  ? 'bg-amber-50/50 border-2 border-amber-300'
                  : 'bg-gray-50 border border-gray-200 opacity-50'
              }`}
            >
              {badge.icon}
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-[9px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
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
