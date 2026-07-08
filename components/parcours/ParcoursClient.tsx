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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl text-[#f2efe8]">
          Ton parcours <span className="accent-brass">d'apprentissage</span>
        </h1>
        <p className="text-dim mt-1">
          5 niveaux pour passer de débutant à virtuose
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
