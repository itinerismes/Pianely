'use client'

import { useState, useEffect } from 'react'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import { RotateCcw, LayoutGrid } from 'lucide-react'

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
      <main className="min-h-screen pt-6">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="animate-pulse" style={{ color: 'var(--text-primary)' }}>
            Chargement...
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-6">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        {/* Dashboard Overview Header */}
        <div
          className="card-lg rounded-2xl p-8 mb-8 transition-all duration-200"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)',
                    boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
                  }}
                >
                  <LayoutGrid className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    Dashboard
                  </h1>
                  <p className="text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                    Bienvenue, suis ta progression musicale
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                background: 'var(--hover-bg)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.borderColor = 'var(--border-strong)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'var(--border-medium)'
              }}
            >
              <RotateCcw className="w-4 h-4" />
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
