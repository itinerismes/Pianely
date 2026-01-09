'use client'

import { useState, useEffect } from 'react'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import { RotateCcw } from 'lucide-react'

// Widgets
import { GuideWidget } from '@/components/widgets/GuideWidget'
import { AujourdhuiWidget } from '@/components/widgets/AujourdhuiWidget'
import { ObjectifWidget } from '@/components/widgets/ObjectifWidget'
import { MorceauxWidget } from '@/components/widgets/MorceauxWidget'
import { BadgesWidget } from '@/components/widgets/BadgesWidget'

const defaultLayout = [
  { i: 'aujourdhui', x: 0, y: 0, w: 4, h: 2 },
  { i: 'objectif', x: 4, y: 0, w: 4, h: 2 },
  { i: 'badges', x: 8, y: 0, w: 4, h: 2 },
  { i: 'guide', x: 0, y: 2, w: 6, h: 3 },
  { i: 'morceaux', x: 6, y: 2, w: 6, h: 3 },
]

export default function HomePage() {
  const [layout, setLayout] = useState(defaultLayout)
  const [mounted, setMounted] = useState(false)

  // Load layout from localStorage
  useEffect(() => {
    setMounted(true)
    const savedLayout = localStorage.getItem('dashboardLayout')
    if (savedLayout) {
      try {
        setLayout(JSON.parse(savedLayout))
      } catch (e) {
        console.error('Failed to parse saved layout', e)
      }
    }
  }, [])

  const handleLayoutChange = (newLayout: any) => {
    setLayout(newLayout)
    localStorage.setItem('dashboardLayout', JSON.stringify(newLayout))
  }

  const handleReset = () => {
    setLayout(defaultLayout)
    localStorage.removeItem('dashboardLayout')
  }

  if (!mounted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-6">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="animate-pulse text-white">Chargement...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-6">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        {/* Dashboard Overview Header */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-2xl py-8 px-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-white/90 mb-2">DASHBOARD OVERVIEW</h1>
              <p className="text-sm text-gray-400">Bienvenue, suis ta progression musicale</p>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-700/50 border border-slate-600 text-gray-300 hover:bg-slate-600/50 hover:text-white transition-all duration-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Réinitialiser</span>
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="mt-4 mb-6">
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={100}
            width={1400}
            margin={[16, 16]}
            onLayoutChange={(layout: any, layouts: any) => handleLayoutChange(layouts.lg || layout)}
          >
          <div key="aujourdhui">
            <AujourdhuiWidget />
          </div>

          <div key="objectif">
            <ObjectifWidget />
          </div>

          <div key="badges">
            <BadgesWidget />
          </div>

          <div key="guide">
            <GuideWidget />
          </div>

          <div key="morceaux">
            <MorceauxWidget />
          </div>
        </ResponsiveGridLayout>
        </div>
      </div>
    </main>
  )
}
