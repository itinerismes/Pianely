'use client'

import { NiveauCard } from '@/components/parcours/NiveauCard'

interface NiveauData {
  niveau: number
  name: string
  description: string
  totalLessons: number
  completedLessons: number
  duration: string
  unlocked: boolean
  gradient: string
  href: string
  completion: number
}

interface ParcoursClientProps {
  niveaux: NiveauData[]
}

export function ParcoursClient({ niveaux }: ParcoursClientProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-8 py-4 md:space-y-10 md:py-8">
      {/* Header */}
      <div>
        <p className="eyebrow mb-2">Parcours</p>
        <h1 className="font-display text-4xl tracking-tight text-[#f2efe8] md:text-5xl">
          Cinq niveaux, <span className="accent-brass">un piano</span>.
        </h1>
        <p className="text-dim mt-3">
          Commence où tu veux — chaque niveau te guide leçon par leçon
        </p>
      </div>

      {/* Niveaux Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {niveaux.map((niveau) => (
          <NiveauCard key={niveau.niveau} {...niveau} />
        ))}
      </div>
    </div>
  )
}
