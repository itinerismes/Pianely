'use client'

import { Music2 } from 'lucide-react'

const morceaux = [
  { titre: 'Au clair de la lune', progress: 65, status: 'in_progress' },
  { titre: 'Frère Jacques', progress: 0, status: 'not_started' },
  { titre: 'Joyeux anniversaire', progress: 100, status: 'mastered' },
]

export function MorceauxWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/50 p-3 h-full overflow-hidden hover:shadow-xl hover:border-blue-300/70 transition-all duration-300">
      <h3 className="text-sm font-semibold text-gray-800 tracking-tight mb-2">Morceaux en cours</h3>

      <div className="space-y-2">
        {morceaux.map((morceau, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200"
          >
            <Music2 className="w-4 h-4 text-purple-500 flex-shrink-0" />

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-900">{morceau.titre}</span>
                <span className="text-[10px] text-gray-500">{morceau.progress}%</span>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    morceau.status === 'mastered'
                      ? 'bg-green-500'
                      : 'bg-purple-500'
                  }`}
                  style={{ width: `${morceau.progress}%` }}
                />
              </div>
            </div>

            <button className="text-xs font-medium text-purple-600 hover:bg-purple-50 hover:text-purple-700 px-3 py-1 rounded-lg transition-colors flex-shrink-0">
              {morceau.status === 'not_started' ? 'Commencer' : 'Continuer'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
