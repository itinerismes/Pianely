'use client'

import { Music2 } from 'lucide-react'

const morceaux = [
  { titre: 'Au clair de la lune', progress: 65, status: 'in_progress' },
  { titre: 'Frère Jacques', progress: 0, status: 'not_started' },
  { titre: 'Joyeux anniversaire', progress: 100, status: 'mastered' },
]

export function MorceauxWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/50 p-5 h-full overflow-hidden hover:shadow-xl hover:border-blue-300/70 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 cursor-move">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center">
          <Music2 className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 tracking-tight">Morceaux en cours</h3>
      </div>

      <div className="space-y-2">
        {morceaux.map((morceau, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all duration-200"
          >
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Music2 className="w-4 h-4 text-purple-600" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-900">{morceau.titre}</span>
                <span className="text-[10px] text-gray-500">{morceau.progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full shadow-sm ${
                    morceau.status === 'mastered'
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                      : 'bg-gradient-to-r from-purple-500 to-blue-500'
                  }`}
                  style={{ width: `${morceau.progress}%` }}
                />
              </div>
            </div>

            <button className="px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700 border border-purple-200/50 hover:border-purple-300 hover:shadow-sm active:scale-95 flex-shrink-0 min-w-[90px]">
              {morceau.status === 'not_started' ? 'Commencer' : 'Continuer'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
