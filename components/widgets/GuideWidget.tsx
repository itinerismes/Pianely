'use client'

import { CheckCircle2, Circle } from 'lucide-react'

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
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/50 p-3 h-full overflow-hidden hover:shadow-xl hover:border-blue-300/70 transition-all duration-300">
      <h2 className="text-sm font-semibold text-gray-800 tracking-tight mb-2">Guide de progression</h2>

      <div className="space-y-1.5">
        {weekData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 py-1 pr-4 border-b border-gray-100 last:border-0 h-8"
          >
            {/* Checkbox */}
            {item.status === 'completed' ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
            )}

            {/* Day */}
            <span className="text-xs font-medium text-gray-500 w-8 flex-shrink-0">{item.day}</span>

            {/* Bar and type */}
            <div className="flex-1 flex items-center gap-3">
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
              <button className="text-xs font-medium text-purple-600 hover:bg-purple-50 hover:text-purple-700 px-3 py-1 rounded-lg transition-colors">
                Continuer
              </button>
            )}
            {item.status === 'pending' && (
              <button className="text-xs font-medium text-gray-600 hover:text-purple-600 px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                Démarrer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
