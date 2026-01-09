'use client'

import { Play, RotateCcw, Music2, Target } from 'lucide-react'

export function AssistantWidget() {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-2xl shadow-sm p-3 h-full overflow-hidden flex flex-col">
      {/* Decorative wave background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <path d="M0,100 Q50,80 100,100 T200,100 L200,200 L0,200 Z" fill="white" />
          <path d="M0,120 Q50,100 100,120 T200,120 L200,200 L0,200 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <h2 className="text-white text-sm font-semibold mb-2">Que veux-tu travailler ?</h2>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          <button className="bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1">
            <Play className="w-6 h-6 text-white" />
            <span className="text-white text-[10px] font-medium">Séance du jour</span>
          </button>

          <button className="bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1">
            <RotateCcw className="w-6 h-6 text-white" />
            <span className="text-white text-[10px] font-medium">Révision</span>
          </button>

          <button className="bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1">
            <Music2 className="w-6 h-6 text-white" />
            <span className="text-white text-[10px] font-medium">Morceaux</span>
          </button>

          <button className="bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1">
            <Target className="w-6 h-6 text-white" />
            <span className="text-white text-[10px] font-medium">Technique</span>
          </button>
        </div>
      </div>
    </div>
  )
}
