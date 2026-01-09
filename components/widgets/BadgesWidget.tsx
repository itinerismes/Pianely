'use client'

import { Award } from 'lucide-react'

const badges = [
  { id: 1, unlocked: true, icon: '🎹' },
  { id: 2, unlocked: true, icon: '⭐' },
  { id: 3, unlocked: true, icon: '🎵' },
  { id: 4, unlocked: false, icon: '🏆' },
  { id: 5, unlocked: false, icon: '🎼' },
  { id: 6, unlocked: false, icon: '💎' },
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
          <div
            key={badge.id}
            className={`h-16 rounded-lg flex items-center justify-center text-xl transition ${
              badge.unlocked
                ? 'bg-amber-50 border-2 border-amber-300'
                : 'bg-gray-50 border-2 border-gray-200 grayscale opacity-40'
            }`}
          >
            {badge.icon}
          </div>
        ))}
      </div>
    </div>
  )
}
