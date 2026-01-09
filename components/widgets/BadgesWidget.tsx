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
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/50 p-5 h-full hover:shadow-xl hover:border-blue-300/70 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 cursor-move">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <Award className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 tracking-tight">Badges</h3>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {badges.map((badge) => (
          <div key={badge.id} className="relative group">
            <div
              className={`h-16 rounded-xl flex items-center justify-center text-xl transition-transform hover:scale-105 p-4 shadow-sm ${
                badge.unlocked
                  ? 'bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300'
                  : 'bg-gray-50/50 backdrop-blur-sm border border-gray-200 opacity-60'
              }`}
            >
              {badge.icon}
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
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
