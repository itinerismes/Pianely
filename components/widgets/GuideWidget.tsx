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
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/50 p-5 h-full overflow-hidden hover:shadow-xl hover:border-blue-300/70 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 cursor-move">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-sm font-semibold text-gray-800 tracking-tight">Guide de progression</h2>
      </div>

      <div className="space-y-1.5">
        {weekData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-3 px-4 py-1 border-b border-gray-100 last:border-0 h-8"
          >
            <div className="flex items-center gap-3 flex-1">
              {/* Checkbox */}
              {item.status === 'completed' ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
              )}

              {/* Day */}
              <span className="text-xs font-medium text-gray-500 w-8 flex-shrink-0">{item.day}</span>

              {/* Bar and type */}
              <div className={`flex-1 h-8 rounded-lg flex items-center px-3 ${
                item.status === 'completed'
                  ? 'bg-green-50 border border-green-200'
                  : item.status === 'in_progress'
                  ? 'bg-purple-50 border border-purple-200'
                  : 'bg-gray-50 border border-gray-200'
              }`}>
                <span className="text-sm font-medium text-gray-900">{item.type}</span>
              </div>
            </div>

            {/* Action button */}
            {item.status === 'in_progress' && (
              <button className="px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700 border border-purple-200/50 hover:border-purple-300 hover:shadow-sm active:scale-95 min-w-[90px]">
                Continuer
              </button>
            )}
            {item.status === 'pending' && (
              <button className="px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700 border border-purple-200/50 hover:border-purple-300 hover:shadow-sm active:scale-95 min-w-[90px]">
                Démarrer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
