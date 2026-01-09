'use client'

import { useState, useEffect } from 'react'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import { RotateCcw } from 'lucide-react'

// Widgets
import { GuideWidget } from '@/components/widgets/GuideWidget'
import { AssistantWidget } from '@/components/widgets/AssistantWidget'
import { AujourdhuiWidget } from '@/components/widgets/AujourdhuiWidget'
import { ObjectifWidget } from '@/components/widgets/ObjectifWidget'
import { MorceauxWidget } from '@/components/widgets/MorceauxWidget'
import { BadgesWidget } from '@/components/widgets/BadgesWidget'

const defaultLayout = [
  { i: 'guide', x: 0, y: 0, w: 8, h: 2.5 },
  { i: 'assistant', x: 8, y: 0, w: 4, h: 2 },
  { i: 'aujourdhui', x: 0, y: 3, w: 4, h: 1.5 },
  { i: 'objectif', x: 4, y: 3, w: 4, h: 1.5 },
  { i: 'morceaux', x: 0, y: 5, w: 8, h: 1.5 },
  { i: 'badges', x: 8, y: 2, w: 4, h: 2.5 },
]

export default function HomePage() {
  const [layout, setLayout] = useState(defaultLayout)
  const [mounted, setMounted] = useState(false)

  // Load layout from localStorage
  useEffect(() => {
    setMounted(true)
    const savedLayout = localStorage.getItem('pianely-layout')
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
    localStorage.setItem('pianely-layout', JSON.stringify(newLayout))
  }

  const handleReset = () => {
    setLayout(defaultLayout)
    localStorage.removeItem('pianely-layout')
  }

  if (!mounted) {
    return (
      <main className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="animate-pulse">Chargement...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-6">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          {/* <div>
            <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
              Bonjour Michel, prêt à jouer aujourd&apos;hui ?
            </h1>
            <p className="text-sm text-gray-500">
              Personnalise ton dashboard en déplaçant les widgets
            </p>
          </div> */}

          <button
            onClick={handleReset}
            className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors ml-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Layout</span>
          </button>
        </div>

        {/* Grid Layout */}
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={100}
          width={1400}
          margin={[16, 16]}
          onLayoutChange={(layout: any, layouts: any) => handleLayoutChange(layouts.lg || layout)}
          {...({ draggableHandle: ".drag-handle" } as any)}
        >
          <div key="guide">
            <div className="drag-handle cursor-move absolute top-2 right-2 w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </div>
            <GuideWidget />
          </div>

          <div key="assistant">
            <div className="drag-handle cursor-move absolute top-2 right-2 w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center opacity-0 hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </div>
            <AssistantWidget />
          </div>

          <div key="aujourdhui">
            <div className="drag-handle cursor-move absolute top-2 right-2 w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </div>
            <AujourdhuiWidget />
          </div>

          <div key="objectif">
            <div className="drag-handle cursor-move absolute top-2 right-2 w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </div>
            <ObjectifWidget />
          </div>

          <div key="morceaux">
            <div className="drag-handle cursor-move absolute top-2 right-2 w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </div>
            <MorceauxWidget />
          </div>

          <div key="badges">
            <div className="drag-handle cursor-move absolute top-2 right-2 w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </div>
            <BadgesWidget />
          </div>
        </ResponsiveGridLayout>
      </div>
    </main>
  )
}
