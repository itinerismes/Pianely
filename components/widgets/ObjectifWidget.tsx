'use client'

import { Clock } from 'lucide-react'

export function ObjectifWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-300 p-3 h-full hover:shadow-xl hover:border-sky-400 hover:scale-[1.005] transition-all duration-200 cursor-move">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-300 to-pink-300 flex items-center justify-center">
          <Clock className="w-3.5 h-3.5 text-white" />
        </div>
        <h3 className="text-xs font-semibold text-gray-700 tracking-tight">Objectif quotidien</h3>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex justify-between text-[10px] mb-1">
          <span className="text-gray-600">15 min / 20 min</span>
          <span className="text-gray-700 font-semibold">75%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-blue-400 rounded-full"
            style={{ width: '75%' }}
          />
        </div>
      </div>

      {/* Mini histogram */}
      <div className="pt-2 border-t border-gray-200">
        <div className="flex items-end justify-between gap-1 h-7">
          {[60, 80, 100, 75, 90, 85, 75].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-sky-400 rounded-t opacity-70 hover:opacity-100 transition"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 mt-1.5">
          <span>Lun</span>
          <span>Dim</span>
        </div>
      </div>
    </div>
  )
}
