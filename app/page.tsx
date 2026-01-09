'use client'

import dynamic from 'next/dynamic'
import { RotateCcw } from 'lucide-react'
import { DashboardSkeleton } from '@/components/ui/DashboardSkeleton'
import { useDashboardLayout } from '@/hooks/useDashboardLayout'

// Dynamic import for client-only rendering (localStorage)
const DashboardGrid = dynamic(
  () => import('@/components/dashboard/DashboardGrid').then((mod) => ({ default: mod.DashboardGrid })),
  {
    ssr: false,
    loading: () => <DashboardSkeleton />,
  }
)

export default function HomePage() {
  const userName = "Michel"
  const { resetLayout } = useDashboardLayout()

  // Données pour la timeline de la semaine
  const weekTimeline = [
    { day: 'Lun', type: 'découverte' as const, niveau: 1, durée: '15min', status: 'completed' as const },
    { day: 'Mar', type: 'technique' as const, niveau: 1, durée: '20min', status: 'completed' as const },
    { day: 'Mer', type: 'morceau' as const, niveau: 1, durée: '25min', status: 'in_progress' as const },
    { day: 'Jeu', type: 'découverte' as const, niveau: 2, durée: '15min', status: 'pending' as const },
    { day: 'Ven', type: 'technique' as const, niveau: 2, durée: '20min', status: 'pending' as const },
    { day: 'Sam', type: 'morceau' as const, niveau: 2, durée: '30min', status: 'pending' as const },
    { day: 'Dim', type: 'révision' as const, niveau: 1, durée: '20min', status: 'pending' as const },
  ]

  const morceaux = [
    { titre: 'Au clair de la lune', niveau: 1, status: 'in_progress' as const, progress: 65 },
    { titre: 'Frère Jacques', niveau: 1, status: 'not_started' as const, progress: 0 },
    { titre: 'Joyeux anniversaire', niveau: 2, status: 'mastered' as const, progress: 100 },
  ]

  const badges = [
    { id: 1, unlocked: true, icon: '🎹' },
    { id: 2, unlocked: true, icon: '⭐' },
    { id: 3, unlocked: true, icon: '🎵' },
    { id: 4, unlocked: false, icon: '🏆' },
    { id: 5, unlocked: false, icon: '🎼' },
    { id: 6, unlocked: false, icon: '💎' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-purple-100 pt-6">
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        {/* Header avec titre et bouton reset */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Bonjour {userName}, prêt à jouer aujourd&apos;hui ?
            </h1>
            <p className="text-slate-600 mt-2">
              Personnalise ton dashboard en déplaçant les widgets
            </p>
          </div>

          <button
            onClick={resetLayout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-violet-50 text-violet-700 border-2 border-violet-200 hover:border-violet-300 transition-all shadow-sm hover:shadow-md"
            aria-label="Reset dashboard layout"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm font-medium">Reset Layout</span>
          </button>
        </div>

        {/* Dashboard Grid avec drag & drop */}
        <DashboardGrid
          weekTimeline={weekTimeline}
          morceaux={morceaux}
          badges={badges}
        />
      </div>
    </main>
  )
}
