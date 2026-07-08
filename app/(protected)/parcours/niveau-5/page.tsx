'use client';

import { NiveauPageClient } from '@/components/parcours/NiveauPageClient';

const rawLessons = [
  { id: 1, title: 'Gammes avancées', description: 'Chromatiques, tierces, sixtes, mouvement contraire et octaves', duration: 20, unlocked: true },
  { id: 2, title: 'Accords complexes et voicings', description: 'Accords de 9ème, 11ème, 13ème et slash chords', duration: 22, unlocked: true },
  { id: 3, title: 'Polyphonie et contrepoint', description: 'Canons, fugues et style Bach', duration: 24, unlocked: true },
  { id: 4, title: 'Rythmes avancés et polyrythmies', description: 'Mesures asymétriques, 3:2, 4:3 et swing', duration: 23, unlocked: true },
  { id: 5, title: 'Technique véloce', description: 'Trilles, ornements, gammes rapides et glissandos', duration: 21, unlocked: true },
  { id: 6, title: 'Pédales avancées', description: 'Pédale syncopée, una corda et sostenuto', duration: 19, unlocked: true },
  { id: 7, title: 'Répertoire baroque (Bach)', description: 'BWV 846, Inventions et style baroque', duration: 22, unlocked: true },
  { id: 8, title: 'Répertoire classique (Mozart, Beethoven)', description: 'K.545, Für Elise et Pathétique', duration: 23, unlocked: true },
  { id: 9, title: 'Répertoire romantique (Chopin, Liszt)', description: 'Préludes, Nocturnes et Consolations', duration: 24, unlocked: true },
  { id: 10, title: 'Improvisation et jazz', description: 'Blues, II-V-I, standards et comping', duration: 25, unlocked: true },
  { id: 11, title: 'Composition et arrangement', description: 'Créer, harmoniser et arranger', duration: 26, unlocked: true },
  { id: 12, title: 'Préparation concert et carrière', description: 'Récital, mémorisation, trac et carrières musicales', duration: 28, unlocked: true }
];

const lessons = rawLessons.map((l) => ({
  completed: false,
  href: `/parcours/niveau-5/lecon-${l.id}`,
  ...l,
}));

export default function Niveau5Page() {
  return (
    <NiveauPageClient
      niveau={5}
      title="Niveau 5 - Maîtrise"
      subtitle="Deviens un virtuose accompli"
      gradient="from-pink-400 to-rose-400"
      lessons={lessons}
    />
  );
}
