'use client'

import { Play, RotateCcw, Music2, Target, Sparkles } from 'lucide-react'

export function AssistantWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-300 p-2 h-full w-full overflow-hidden flex flex-col hover:shadow-xl hover:border-sky-400 transition-all duration-200">
      {/* Header with icon */}
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-sky-300 to-blue-300 flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-white" />
        </div>
        <h2 className="text-xs font-semibold text-gray-700 tracking-tight">Que veux-tu travailler ?</h2>
      </div>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-2 gap-1.5 flex-1">
        <button className="bg-blue-50 border border-blue-200 rounded-xl p-2 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 flex flex-col items-center justify-center gap-0.5">
          <Play className="w-4 h-4 text-blue-600" />
          <span className="text-blue-700 text-[9px] font-medium">Séance du jour</span>
        </button>

        <button className="bg-sky-50 border border-sky-200 rounded-xl p-2 hover:bg-sky-100 hover:border-sky-300 transition-all duration-200 flex flex-col items-center justify-center gap-0.5">
          <RotateCcw className="w-4 h-4 text-sky-600" />
          <span className="text-sky-700 text-[9px] font-medium">Révision</span>
        </button>

        <button className="bg-emerald-50 border border-emerald-200 rounded-xl p-2 hover:bg-emerald-100 hover:border-emerald-300 transition-all duration-200 flex flex-col items-center justify-center gap-0.5">
          <Music2 className="w-4 h-4 text-emerald-600" />
          <span className="text-emerald-700 text-[9px] font-medium">Morceaux</span>
        </button>

        <button className="bg-pink-50 border border-pink-200 rounded-xl p-2 hover:bg-pink-100 hover:border-pink-300 transition-all duration-200 flex flex-col items-center justify-center gap-0.5">
          <Target className="w-4 h-4 text-pink-500" />
          <span className="text-pink-600 text-[9px] font-medium">Technique</span>
        </button>
      </div>
    </div>
  )
}
