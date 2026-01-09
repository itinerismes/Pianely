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
  const [isMobile, setIsMobile] = useState(false)

  // Load layout from localStorage and detect mobile
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

    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
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
      <div className={`max-w-[1400px] mx-auto ${isMobile ? 'px-4' : 'px-6'} py-6 relative`}>
        {/* Reset Layout Button */}
        {!isMobile && (
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 z-20 flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser</span>
          </button>
        )}

        {/* Grid Layout */}
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={100}
          width={1400}
          margin={[16, 16]}
          isDraggable={!isMobile}
          isResizable={false}
          onLayoutChange={(layout: any, layouts: any) => handleLayoutChange(layouts.lg || layout)}
          {...({ draggableHandle: ".drag-handle" } as any)}
        >
          <div key="guide" className="group animate-fadeIn" style={{ animationDelay: '0ms' }}>
            <div className="drag-handle cursor-move absolute top-2 left-2 w-6 h-6 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                <circle cx="4" cy="4" r="1.5"/>
                <circle cx="4" cy="8" r="1.5"/>
                <circle cx="4" cy="12" r="1.5"/>
                <circle cx="8" cy="4" r="1.5"/>
                <circle cx="8" cy="8" r="1.5"/>
                <circle cx="8" cy="12" r="1.5"/>
              </svg>
            </div>
            <GuideWidget />
          </div>

          <div key="assistant" className="group animate-fadeIn" style={{ animationDelay: '50ms' }}>
            <div className="drag-handle cursor-move absolute top-2 left-2 w-6 h-6 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 16 16">
                <circle cx="4" cy="4" r="1.5"/>
                <circle cx="4" cy="8" r="1.5"/>
                <circle cx="4" cy="12" r="1.5"/>
                <circle cx="8" cy="4" r="1.5"/>
                <circle cx="8" cy="8" r="1.5"/>
                <circle cx="8" cy="12" r="1.5"/>
              </svg>
            </div>
            <AssistantWidget />
          </div>

          <div key="aujourdhui" className="group animate-fadeIn" style={{ animationDelay: '100ms' }}>
            <div className="drag-handle cursor-move absolute top-2 left-2 w-6 h-6 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                <circle cx="4" cy="4" r="1.5"/>
                <circle cx="4" cy="8" r="1.5"/>
                <circle cx="4" cy="12" r="1.5"/>
                <circle cx="8" cy="4" r="1.5"/>
                <circle cx="8" cy="8" r="1.5"/>
                <circle cx="8" cy="12" r="1.5"/>
              </svg>
            </div>
            <AujourdhuiWidget />
          </div>

          <div key="objectif" className="group animate-fadeIn" style={{ animationDelay: '150ms' }}>
            <div className="drag-handle cursor-move absolute top-2 left-2 w-6 h-6 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                <circle cx="4" cy="4" r="1.5"/>
                <circle cx="4" cy="8" r="1.5"/>
                <circle cx="4" cy="12" r="1.5"/>
                <circle cx="8" cy="4" r="1.5"/>
                <circle cx="8" cy="8" r="1.5"/>
                <circle cx="8" cy="12" r="1.5"/>
              </svg>
            </div>
            <ObjectifWidget />
          </div>

          <div key="morceaux" className="group animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <div className="drag-handle cursor-move absolute top-2 left-2 w-6 h-6 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                <circle cx="4" cy="4" r="1.5"/>
                <circle cx="4" cy="8" r="1.5"/>
                <circle cx="4" cy="12" r="1.5"/>
                <circle cx="8" cy="4" r="1.5"/>
                <circle cx="8" cy="8" r="1.5"/>
                <circle cx="8" cy="12" r="1.5"/>
              </svg>
            </div>
            <MorceauxWidget />
          </div>

          <div key="badges" className="group animate-fadeIn" style={{ animationDelay: '250ms' }}>
            <div className="drag-handle cursor-move absolute top-2 left-2 w-6 h-6 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                <circle cx="4" cy="4" r="1.5"/>
                <circle cx="4" cy="8" r="1.5"/>
                <circle cx="4" cy="12" r="1.5"/>
                <circle cx="8" cy="4" r="1.5"/>
                <circle cx="8" cy="8" r="1.5"/>
                <circle cx="8" cy="12" r="1.5"/>
              </svg>
            </div>
            <BadgesWidget />
          </div>
        </ResponsiveGridLayout>
      </div>
    </main>
  )
}
