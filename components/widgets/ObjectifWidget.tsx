'use client'

import { Clock } from 'lucide-react'

export function ObjectifWidget() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl shadow-black/20 border border-slate-700 p-3 h-full w-full overflow-hidden hover:shadow-2xl hover:border-slate-600 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xs font-semibold text-white/90 tracking-tight">Objectif quotidien</h3>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-300">0 min / 20 min</span>
          <span className="text-white font-semibold">0%</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
            style={{ width: '0%' }}
          />
        </div>
      </div>

      {/* Mini histogram */}
      <div className="pt-2 border-t border-slate-700">
        <div className="flex items-end justify-between gap-1 h-8">
          {[0, 0, 0, 0, 0, 0, 0].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-slate-700 rounded-t"
              style={{ height: height === 0 ? '4px' : `${height}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-gray-400 mt-1.5">
          <span>Lun</span>
          <span>Dim</span>
        </div>
      </div>
    </div>
  )
}
