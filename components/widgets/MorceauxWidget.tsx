'use client'

import { Music2 } from 'lucide-react'

const morceaux = [
  { titre: 'Au clair de la lune', progress: 65, status: 'in_progress' },
  { titre: 'Frère Jacques', progress: 0, status: 'not_started' },
  { titre: 'Joyeux anniversaire', progress: 100, status: 'mastered' },
]

export function MorceauxWidget() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl shadow-black/20 border border-slate-700 p-3 h-full w-full overflow-hidden hover:shadow-2xl hover:border-slate-600 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center">
          <Music2 className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xs font-semibold text-white/90 tracking-tight">Morceaux en cours</h3>
      </div>

      <div className="space-y-1.5">
        {morceaux.map((morceau, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-slate-700/30 border border-slate-600 hover:bg-slate-700/50 transition-all duration-200"
          >
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
              <Music2 className="w-3.5 h-3.5 text-sky-400" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-white">{morceau.titre}</span>
                <span className="text-[9px] text-gray-400">{morceau.progress}%</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    morceau.status === 'mastered'
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400'
                      : 'bg-gradient-to-r from-sky-400 to-blue-400'
                  }`}
                  style={{ width: `${morceau.progress}%` }}
                />
              </div>
            </div>

            <button className="px-3 py-1 text-[10px] font-medium rounded-lg transition-all duration-200 text-sky-400 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/30 hover:border-sky-400 hover:shadow-sm active:scale-95 flex-shrink-0 min-w-[70px]">
              {morceau.status === 'not_started' ? 'Commencer' : 'Continuer'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
