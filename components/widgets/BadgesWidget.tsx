'use client'

import { Award } from 'lucide-react'

const badges = [
  { id: 1, unlocked: true, icon: '🎹', name: 'Premier pas', description: 'Compléter la première leçon' },
  { id: 2, unlocked: true, icon: '⭐', name: 'Étoile montante', description: 'Pratiquer 7 jours de suite' },
  { id: 3, unlocked: true, icon: '🎵', name: 'Mélomane', description: 'Compléter un morceau' },
  { id: 4, unlocked: false, icon: '🏆', name: 'Champion', description: 'Maîtriser 5 morceaux' },
  { id: 5, unlocked: false, icon: '🎼', name: 'Virtuose', description: 'Atteindre le niveau 10' },
  { id: 6, unlocked: false, icon: '💎', name: 'Diamant', description: 'Pratiquer 30 jours de suite' },
]

export function BadgesWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 h-full hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <Award className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-gray-800">Badges</h3>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {badges.map((badge) => (
          <div key={badge.id} className="relative group">
            <div
              className={`h-16 rounded-lg flex items-center justify-center text-xl transition-all duration-200 cursor-pointer hover:scale-105 ${
                badge.unlocked
                  ? 'bg-amber-50 border-2 border-amber-300'
                  : 'bg-gray-50 border-2 border-gray-200 grayscale opacity-40'
              }`}
            >
              {badge.icon}
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              <div className="font-semibold">{badge.name}</div>
              <div className="text-gray-300">{badge.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
