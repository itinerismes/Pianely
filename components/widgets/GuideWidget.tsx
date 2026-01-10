'use client'

import { CheckCircle2, Circle, CheckCircle } from 'lucide-react'

const weekData = [
  { day: 'Lun', type: 'Découverte', status: 'pending' },
  { day: 'Mar', type: 'Technique', status: 'pending' },
  { day: 'Mer', type: 'Morceau', status: 'pending' },
  { day: 'Jeu', type: 'Découverte', status: 'pending' },
  { day: 'Ven', type: 'Technique', status: 'pending' },
  { day: 'Sam', type: 'Morceau', status: 'pending' },
  { day: 'Dim', type: 'Révision', status: 'pending' },
]

export function GuideWidget() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl shadow-black/20 border border-slate-700 p-3 h-full w-full overflow-hidden hover:shadow-2xl hover:border-slate-600 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xs font-semibold text-white/90 tracking-tight">Guide de progression</h2>
      </div>

      <div className="space-y-1.5">
        {weekData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-3 px-3 py-1 h-7"
          >
            <div className="flex items-center gap-2 flex-1">
              {/* Checkbox */}
              {item.status === 'completed' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-slate-600 flex-shrink-0" />
              )}

              {/* Day */}
              <span className="text-[10px] font-medium text-gray-400 w-7 flex-shrink-0">{item.day}</span>

              {/* Bar and type */}
              <div className={`flex-1 h-7 rounded-lg flex items-center px-2 ${
                item.status === 'completed'
                  ? 'bg-emerald-500/20 border-l-2 border-emerald-500/50'
                  : item.status === 'in_progress'
                  ? 'bg-sky-500/20 border-l-4 border-sky-400/50'
                  : 'bg-slate-700/30 border border-slate-600'
              }`}>
                <span className="text-xs font-medium text-white">{item.type}</span>
              </div>
            </div>

            {/* Action button */}
            {item.status === 'in_progress' && (
              <button className="px-3 py-1 text-[10px] font-medium rounded-lg transition-all duration-300 text-sky-400 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/30 hover:border-sky-400 hover:shadow-sm active:scale-95 min-w-[75px]">
                Continuer
              </button>
            )}
            {item.status === 'pending' && (
              <button className="px-3 py-1 text-[10px] font-medium rounded-lg transition-all duration-300 text-emerald-400 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-sm active:scale-95 min-w-[75px]">
                Démarrer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
