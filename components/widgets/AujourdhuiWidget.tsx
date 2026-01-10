'use client'

import { ArrowRight, Calendar } from 'lucide-react'

export function AujourdhuiWidget() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl shadow-black/20 border border-slate-700 p-3 h-full w-full overflow-hidden hover:shadow-2xl hover:border-slate-600 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xs font-semibold text-white/90 tracking-tight">Aujourd&apos;hui</h3>
      </div>

      <p className="text-xs text-gray-300 mb-4">
        Commence ton apprentissage du piano dès aujourd&apos;hui
      </p>

      <div className="flex items-center justify-center py-3 px-3 rounded-lg bg-slate-700/30 border border-slate-600">
        <span className="text-xs text-gray-400">Aucune leçon commencée</span>
      </div>
    </div>
  )
}
