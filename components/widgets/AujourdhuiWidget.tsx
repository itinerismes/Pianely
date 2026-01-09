'use client'

import { ArrowRight } from 'lucide-react'

export function AujourdhuiWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full hover:shadow-md transition-all duration-200">
      <h3 className="text-base font-semibold text-gray-800 mb-3">Aujourd&apos;hui</h3>

      <p className="text-sm text-gray-500 mb-3">
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
