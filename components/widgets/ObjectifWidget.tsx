'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

const targetProgress = 75 // Target percentage

export function ObjectifWidget() {
  const [progress, setProgress] = useState(0)

  // Animate progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(targetProgress)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 h-full hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <Clock className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-gray-800">Objectif quotidien</h3>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-gray-600">15 min / 20 min</span>
          <span className="text-gray-900 font-semibold">{targetProgress}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {targetProgress >= 100 && (
          <p className="text-xs text-green-600 font-medium mt-1">🎉 Objectif atteint !</p>
        )}
      </div>

      {/* Mini histogram */}
      <div className="pt-2 border-t border-gray-200">
        <div className="flex items-end justify-between gap-1 h-8">
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
