'use client'

import { Music2 } from 'lucide-react'

export function MorceauxWidget() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl shadow-black/20 border border-slate-700 p-3 h-full w-full overflow-hidden hover:shadow-2xl hover:border-slate-600 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center">
          <Music2 className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xs font-semibold text-white/90 tracking-tight">Morceaux en cours</h3>
      </div>

      <div className="flex items-center justify-center h-32">
        <p className="text-sm text-gray-400">Aucun morceau commencé</p>
      </div>
    </div>
  )
}
