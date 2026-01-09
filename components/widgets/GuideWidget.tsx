'use client'

import { CheckCircle2, Circle, CheckCircle } from 'lucide-react'

const weekData = [
  { day: 'Lun', type: 'Découverte', status: 'completed' },
  { day: 'Mar', type: 'Technique', status: 'completed' },
  { day: 'Mer', type: 'Morceau', status: 'in_progress' },
  { day: 'Jeu', type: 'Découverte', status: 'pending' },
  { day: 'Ven', type: 'Technique', status: 'pending' },
  { day: 'Sam', type: 'Morceau', status: 'pending' },
  { day: 'Dim', type: 'Révision', status: 'pending' },
]

export function GuideWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-300 p-3 h-full w-full overflow-hidden hover:shadow-xl hover:border-sky-400 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-300 to-green-300 flex items-center justify-center">
          <CheckCircle className="w-3.5 h-3.5 text-white" />
        </div>
        <h2 className="text-xs font-semibold text-gray-700 tracking-tight">Guide de progression</h2>
      </div>

      <div className="space-y-1.5">
        {weekData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-3 px-3 py-1 border-b border-gray-100 last:border-0 h-7"
          >
            <div className="flex items-center gap-2 flex-1">
              {/* Checkbox */}
              {item.status === 'completed' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
              )}

              {/* Day */}
              <span className="text-[10px] font-medium text-gray-500 w-7 flex-shrink-0">{item.day}</span>

              {/* Bar and type */}
              <div className={`flex-1 h-7 rounded-lg flex items-center px-2 ${
                item.status === 'completed'
                  ? 'bg-emerald-50 border-l-2 border-emerald-400'
                  : item.status === 'in_progress'
                  ? 'bg-sky-50 border-l-4 border-sky-400'
                  : 'bg-gray-50 border border-gray-200'
              }`}>
                <span className="text-xs font-medium text-gray-700">{item.type}</span>
              </div>
            </div>

            {/* Action button */}
            {item.status === 'in_progress' && (
              <button className="px-3 py-1 text-[10px] font-medium rounded-lg transition-all duration-300 text-sky-600 bg-sky-50 hover:bg-sky-100 border border-sky-200 hover:border-sky-300 hover:shadow-sm active:scale-95 min-w-[75px]">
                Continuer
              </button>
            )}
            {item.status === 'pending' && (
              <button className="px-3 py-1 text-[10px] font-medium rounded-lg transition-all duration-300 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 hover:border-emerald-300 hover:shadow-sm active:scale-95 min-w-[75px]">
                Démarrer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
