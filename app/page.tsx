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
  { i: 'guide', x: 0, y: 0, w: 6, h: 4, static: true },
  { i: 'aujourdhui', x: 0, y: 4, w: 3, h: 2, static: true },
  { i: 'morceaux', x: 0, y: 6, w: 6, h: 2, static: true },
  { i: 'assistant', x: 6, y: 0, w: 4, h: 2, static: true },
  { i: 'badges', x: 6, y: 2, w: 4, h: 2, static: true },
  { i: 'objectif', x: 6, y: 4, w: 4, h: 2, static: true },
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
      <main className="min-h-screen bg-white pt-6">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="animate-pulse">Chargement...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white pt-6">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
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
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-sky-50 border-2 border-sky-200 text-sky-600 hover:bg-sky-100 hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser</span>
          </button>
        </div>

        {/* Grid Layout */}
        <div className="mt-4 mb-6">
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 10, md: 8, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={80}
            width={1200}
            margin={[16, 16]}
          >
          <div key="guide">
            <GuideWidget />
          </div>

          <div key="assistant">
            <AssistantWidget />
          </div>

          <div key="aujourdhui">
            <AujourdhuiWidget />
          </div>

          <div key="objectif">
            <ObjectifWidget />
          </div>

          <div key="morceaux">
            <MorceauxWidget />
          </div>

          <div key="badges">
            <BadgesWidget />
          </div>
        </ResponsiveGridLayout>
        </div>
      </div>
    </main>
  )
}
