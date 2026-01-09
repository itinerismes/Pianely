'use client'

import { Clock } from 'lucide-react'

export function ObjectifWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/50 p-3 h-full hover:shadow-xl hover:border-blue-300/70 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 cursor-move">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <Clock className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-gray-800">Objectif quotidien</h3>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-gray-600">15 min / 20 min</span>
          <span className="text-gray-900 font-semibold">75%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-sm"
            style={{ width: '75%', boxShadow: '0 0 8px rgba(168, 85, 247, 0.4)' }}
          />
        </div>
      </div>

      {/* Mini histogram */}
      <div className="pt-2 border-t border-gray-200">
        <div className="flex items-end justify-between gap-1 h-8">
          {[60, 80, 100, 75, 90, 85, 75].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-purple-500 rounded-t opacity-70 hover:opacity-100 transition"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Lun</span>
          <span>Dim</span>
        </div>
      </div>
    </div>
  )
}
