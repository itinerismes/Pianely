'use client';

import { NiveauPageClient } from '@/components/parcours/NiveauPageClient';

const rawLessons = [
  { id: 1, title: 'Les gammes complètes', description: 'Maîtrise la gamme de Do majeur et comprends la structure des gammes', duration: 15, unlocked: true },
  { id: 2, title: 'Lecture de partition niveau 1', description: 'Apprends à lire des partitions simples en clé de sol et de fa', duration: 18, unlocked: true },
  { id: 3, title: 'Les accords enrichis', description: 'Découvre les accords de 7ème et leurs inversions', duration: 16, unlocked: true },
  { id: 4, title: 'Techniques d\'articulation', description: 'Maîtrise le legato, staccato et les accents', duration: 14, unlocked: true },
  { id: 5, title: 'La pédale de sustain', description: 'Apprends quand et comment utiliser la pédale', duration: 15, unlocked: true },
  { id: 6, title: 'Morceaux célèbres faciles', description: 'Joue Ode to Joy, Canon in D et Comptine d\'un autre été', duration: 18, unlocked: true },
  { id: 7, title: 'L\'expression musicale', description: 'Ajoute dynamiques, tempo et émotion à ton jeu', duration: 16, unlocked: true },
  { id: 8, title: 'Premier morceau complet', description: 'Apprends et perfectionne ton premier morceau complet', duration: 18, unlocked: true }
];

const lessons = rawLessons.map((l) => ({
  completed: false,
  href: `/parcours/niveau-3/lecon-${l.id}`,
  ...l,
}));

export default function Niveau3Page() {
  return (
    <NiveauPageClient
      niveau={3}
      title="Niveau 3 - Progression"
      subtitle="Développe tes compétences techniques et musicales"
      gradient="from-violet-400 to-purple-500"
      lessons={lessons}
      nextNiveauHref="/parcours/niveau-4"
    />
  );
}
