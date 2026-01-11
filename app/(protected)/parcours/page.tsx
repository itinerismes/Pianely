'use client';

import { NiveauCard } from '@/components/parcours/NiveauCard';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

export default function ParcoursPage() {
  const niveaux = [
    {
      niveau: 1,
      name: 'Niveau 1 - Découverte',
      description: 'Tes premiers pas au piano',
      totalLessons: 5,
      completedLessons: 0,
      duration: '57 min',
      unlocked: true,
      gradient: 'from-green-500 to-emerald-600',
      href: '/parcours/niveau-1'
    },
    {
      niveau: 2,
      name: 'Niveau 2 - Initiation',
      description: 'Développe ta technique de base',
      totalLessons: 7,
      completedLessons: 0,
      duration: '1h 45min',
      unlocked: false,
      gradient: 'from-blue-500 to-cyan-600',
      href: '/parcours/niveau-2'
    },
    {
      niveau: 3,
      name: 'Niveau 3 - Progression',
      description: 'Explore des morceaux plus complexes',
      totalLessons: 8,
      completedLessons: 0,
      duration: '2h 10min',
      unlocked: false,
      gradient: 'from-purple-500 to-violet-600',
      href: '/parcours/niveau-3'
    },
    {
      niveau: 4,
      name: 'Niveau 4 - Maîtrise',
      description: 'Affine ton jeu et ton style',
      totalLessons: 10,
      completedLessons: 0,
      duration: '2h 45min',
      unlocked: false,
      gradient: 'from-orange-500 to-amber-600',
      href: '/parcours/niveau-4'
    },
    {
      niveau: 5,
      name: 'Niveau 5 - Expert',
      description: 'Deviens un virtuoso',
      totalLessons: 12,
      completedLessons: 0,
      duration: '3h 30min',
      unlocked: false,
      gradient: 'from-pink-500 to-rose-600',
      href: '/parcours/niveau-5'
    },
  ];

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
  );
}
