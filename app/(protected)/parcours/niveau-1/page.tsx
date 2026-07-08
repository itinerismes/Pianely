'use client';

import { NiveauPageClient } from '@/components/parcours/NiveauPageClient';

const rawLessons = [
  {
    id: 1,
    title: 'Anatomie du clavier',
    description: 'Découvre les notes, les octaves et la structure du piano',
    duration: 8,
    completed: false,
    unlocked: true,
    href: '/parcours/niveau-1/lecon-1'
  },
  {
    id: 2,
    title: 'Position des mains',
    description: 'Apprends la bonne posture et le placement des doigts',
    duration: 10,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-1/lecon-2'
  },
  {
    id: 3,
    title: 'Premier motif main droite',
    description: 'Joue ta première mélodie simple avec la main droite',
    duration: 12,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-1/lecon-3'
  },
  {
    id: 4,
    title: 'Premier motif main gauche',
    description: 'Découvre les accords de base avec la main gauche',
    duration: 12,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-1/lecon-4'
  },
  {
    id: 5,
    title: 'Ton premier morceau complet',
    description: 'Combine les deux mains pour jouer ton premier morceau !',
    duration: 15,
    completed: false,
    unlocked: false,
    href: '/parcours/niveau-1/lecon-5'
  }
];

const lessons = rawLessons;

export default function Niveau1Page() {
  return (
    <NiveauPageClient
      niveau={1}
      title="Niveau 1 - Découverte"
      subtitle="Tes premiers pas au piano"
      gradient="from-emerald-400 to-teal-500"
      lessons={lessons}
      nextNiveauHref="/parcours/niveau-2"
    />
  );
}
