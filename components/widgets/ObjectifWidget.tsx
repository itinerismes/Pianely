'use client'

import { Clock } from 'lucide-react'

export function ObjectifWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base font-semibold text-gray-800">Objectif quotidien</h3>
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">15 min / 20 min</span>
          <span className="text-gray-900 font-semibold">75%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 rounded-full"
            style={{ width: '75%' }}
          />
        </div>
      </div>

      {/* Mini histogram */}
      <div className="pt-3 border-t border-gray-200">
        <div className="flex items-end justify-between gap-1 h-12">
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
