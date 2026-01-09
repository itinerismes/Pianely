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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base font-semibold text-gray-800">Badges</h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`h-20 rounded-xl flex items-center justify-center text-2xl transition ${
              badge.unlocked
                ? 'bg-amber-50 border-2 border-amber-200'
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
