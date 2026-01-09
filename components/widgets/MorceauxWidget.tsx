'use client'

import { Music2 } from 'lucide-react'

const morceaux = [
  { titre: 'Au clair de la lune', progress: 65, status: 'in_progress' },
  { titre: 'Frère Jacques', progress: 0, status: 'not_started' },
  { titre: 'Joyeux anniversaire', progress: 100, status: 'mastered' },
]

export function MorceauxWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full overflow-auto hover:shadow-md transition-all duration-200">
      <h3 className="text-base font-semibold text-gray-800 mb-3">Morceaux en cours</h3>

      <div className="space-y-3">
        {morceaux.map((morceau, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200"
          >
            <Music2 className="w-5 h-5 text-purple-500 flex-shrink-0" />

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-900">{morceau.titre}</span>
                <span className="text-xs text-gray-500">{morceau.progress}%</span>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    morceau.status === 'mastered'
                      ? 'bg-green-500'
                      : 'bg-gradient-to-r from-purple-500 to-purple-600'
                  }`}
                  style={{ width: `${morceau.progress}%` }}
                />
              </div>
            </div>

            <button className="text-sm font-medium text-purple-600 hover:bg-purple-50 hover:text-purple-700 px-4 py-1.5 rounded-lg transition-colors flex-shrink-0">
              {morceau.status === 'not_started' ? 'Commencer' : 'Continuer'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
