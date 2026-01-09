'use client'

import { ArrowRight, Calendar } from 'lucide-react'

export function AujourdhuiWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/50 p-5 h-full hover:shadow-xl hover:border-blue-300/70 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 cursor-move">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
          <Calendar className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 tracking-tight">Aujourd&apos;hui</h3>
      </div>

      <p className="text-xs text-gray-600 mb-2">
        Pratique régulière : la clé de ta progression
      </p>

      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 border border-gray-200">
        <div className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-gray-900">Niveau 2 - Fondations</span>
        </div>
        <span className="text-xs text-gray-500">4/7 leçons</span>
      </div>
    </div>
  )
}
