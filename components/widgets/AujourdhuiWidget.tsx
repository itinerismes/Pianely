'use client'

import { ArrowRight, Calendar } from 'lucide-react'

export function AujourdhuiWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-300 p-3 h-full w-full overflow-hidden hover:shadow-xl hover:border-sky-400 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-300 to-blue-300 flex items-center justify-center">
          <Calendar className="w-3.5 h-3.5 text-white" />
        </div>
        <h3 className="text-xs font-semibold text-gray-700 tracking-tight">Aujourd&apos;hui</h3>
      </div>

      <p className="text-[10px] text-gray-600 mb-2">
        Pratique régulière : la clé de ta progression
      </p>

      <div className="flex items-center justify-between px-2 py-1.5 rounded-xl bg-sky-50 border border-sky-200">
        <div className="flex items-center gap-2">
          <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
          <span className="text-xs font-medium text-gray-700">Niveau 2 - Fondations</span>
        </div>
        <span className="text-[10px] text-gray-500">4/7 leçons</span>
      </div>
    </div>
  )
}
