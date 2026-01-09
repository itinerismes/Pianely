'use client'

import { Music2 } from 'lucide-react'

const morceaux = [
  { titre: 'Au clair de la lune', progress: 65, status: 'in_progress' },
  { titre: 'Frère Jacques', progress: 0, status: 'not_started' },
  { titre: 'Joyeux anniversaire', progress: 100, status: 'mastered' },
]

export function MorceauxWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-300 p-4 h-full overflow-hidden hover:shadow-xl hover:border-sky-400 hover:scale-[1.01] transition-all duration-300 cursor-move">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-300 to-violet-300 flex items-center justify-center">
          <Music2 className="w-3.5 h-3.5 text-white" />
        </div>
        <h3 className="text-xs font-semibold text-gray-700 tracking-tight">Morceaux en cours</h3>
      </div>

      <div className="space-y-1.5">
        {morceaux.map((morceau, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-2 py-1.5 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all duration-200"
          >
            <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
              <Music2 className="w-3.5 h-3.5 text-purple-400" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-gray-700">{morceau.titre}</span>
                <span className="text-[9px] text-gray-500">{morceau.progress}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    morceau.status === 'mastered'
                      ? 'bg-gradient-to-r from-emerald-300 to-teal-300'
                      : 'bg-gradient-to-r from-sky-400 to-blue-400'
                  }`}
                  style={{ width: `${morceau.progress}%` }}
                />
              </div>
            </div>

            <button className="px-3 py-1 text-[10px] font-medium rounded-lg transition-all duration-300 text-purple-500 bg-purple-50 hover:bg-purple-100 border border-purple-200 hover:border-purple-300 hover:shadow-sm active:scale-95 flex-shrink-0 min-w-[70px]">
              {morceau.status === 'not_started' ? 'Commencer' : 'Continuer'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
