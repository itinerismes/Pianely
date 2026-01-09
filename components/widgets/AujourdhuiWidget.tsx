'use client'

import { ArrowRight } from 'lucide-react'

export function AujourdhuiWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/50 p-3 h-full hover:shadow-xl hover:border-blue-300/70 transition-all duration-300">
      <h3 className="text-sm font-semibold text-gray-800 tracking-tight mb-2">Aujourd&apos;hui</h3>

      <p className="text-xs text-gray-600 mb-2">
        Pratique régulière : la clé de ta progression
      </p>

      <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200">
        <div className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-gray-900">Niveau 2 - Fondations</span>
        </div>
        <span className="text-xs text-gray-500">4/7 leçons</span>
      </div>
    </div>
  )
}
