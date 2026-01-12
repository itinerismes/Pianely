'use client'

import { NiveauCard } from '@/components/parcours/NiveauCard'
import { Button } from '@/components/ui/button'
import { Filter } from 'lucide-react'

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
      {/* Header with decorative blob */}
      <div className="space-y-2 relative">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-xl decorative-blob" />

        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent relative z-10">
          Ton Parcours d'Apprentissage 🎹
        </h1>
        <p className="text-muted-foreground relative z-10">
          5 niveaux pour passer de débutant à virtuose
        </p>
      </div>

      {/* View controls */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Tous les niveaux</h2>
        <Button variant="outline" size="sm" className="hover:bg-purple-50">
          <Filter className="w-4 h-4 mr-2" />
          Filtrer
        </Button>
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
