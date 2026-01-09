'use client'

import { Play, RotateCcw, Music2, Target } from 'lucide-react'

export function AssistantWidget() {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-2xl shadow-sm p-4 h-full overflow-hidden">
      {/* Decorative wave background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <path d="M0,100 Q50,80 100,100 T200,100 L200,200 L0,200 Z" fill="white" />
          <path d="M0,120 Q50,100 100,120 T200,120 L200,200 L0,200 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="text-white text-lg font-semibold mb-3">Que veux-tu travailler ?</h2>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition flex flex-col items-center gap-2">
            <Play className="w-8 h-8 text-white" />
            <span className="text-xs font-medium text-white">Séance du jour</span>
          </button>

          <button className="bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition flex flex-col items-center gap-2">
            <RotateCcw className="w-8 h-8 text-white" />
            <span className="text-xs font-medium text-white">Révision</span>
          </button>

          <button className="bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition flex flex-col items-center gap-2">
            <Music2 className="w-8 h-8 text-white" />
            <span className="text-xs font-medium text-white">Morceaux</span>
          </button>

          <button className="bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition flex flex-col items-center gap-2">
            <Target className="w-8 h-8 text-white" />
            <span className="text-xs font-medium text-white">Technique</span>
          </button>
        </div>
      </div>
    </div>
  )
}
