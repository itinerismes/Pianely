'use client';

import { NiveauPageClient } from '@/components/parcours/NiveauPageClient';

const rawLessons = [
  { id: 1, title: 'Position des mains et posture', description: 'Adopte une posture correcte et place tes doigts sur les touches', duration: 12, unlocked: true },
  { id: 2, title: 'Les doigtés', description: 'Apprends la numérotation des doigts et développe leur indépendance', duration: 10, unlocked: true },
  { id: 3, title: 'Les intervalles', description: 'Comprends les distances entre les notes', duration: 12, unlocked: true },
  { id: 4, title: 'Introduction au rythme', description: 'Maîtrise les valeurs de notes et le tempo', duration: 15, unlocked: true },
  { id: 5, title: 'Première mélodie simple', description: 'Joue ta première mélodie complète', duration: 15, unlocked: true },
  { id: 6, title: 'Main gauche et accords de base', description: 'Apprends les accords majeurs et mineurs', duration: 15, unlocked: true },
  { id: 7, title: 'Coordination mains ensemble', description: 'Synchronise tes deux mains pour jouer simultanément', duration: 15, unlocked: true }
];

const lessons = rawLessons.map((l) => ({
  completed: false,
  href: `/parcours/niveau-2/lecon-${l.id}`,
  ...l,
}));

export default function Niveau2Page() {
  return (
    <NiveauPageClient
      niveau={2}
      title="Niveau 2 - Fondations"
      subtitle="Construis des bases solides pour ta technique"
      gradient="from-sky-400 to-cyan-400"
      lessons={lessons}
      nextNiveauHref="/parcours/niveau-3"
    />
  );
}
