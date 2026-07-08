import { NiveauPageClient } from '@/components/parcours/NiveauPageClient';
import { getCompletedLessonNumbers } from '@/lib/supabase/lessonProgress';

const rawLessons = [
  { id: 1, title: 'Gammes avancées', description: 'Chromatiques, tierces, sixtes, mouvement contraire et octaves', duration: 20 },
  { id: 2, title: 'Accords complexes et voicings', description: 'Accords de 9ème, 11ème, 13ème et slash chords', duration: 22 },
  { id: 3, title: 'Polyphonie et contrepoint', description: 'Canons, fugues et style Bach', duration: 24 },
  { id: 4, title: 'Rythmes avancés et polyrythmies', description: 'Mesures asymétriques, 3:2, 4:3 et swing', duration: 23 },
  { id: 5, title: 'Technique véloce', description: 'Trilles, ornements, gammes rapides et glissandos', duration: 21 },
  { id: 6, title: 'Pédales avancées', description: 'Pédale syncopée, una corda et sostenuto', duration: 19 },
  { id: 7, title: 'Répertoire baroque (Bach)', description: 'BWV 846, Inventions et style baroque', duration: 22 },
  { id: 8, title: 'Répertoire classique (Mozart, Beethoven)', description: 'K.545, Für Elise et Pathétique', duration: 23 },
  { id: 9, title: 'Répertoire romantique (Chopin, Liszt)', description: 'Préludes, Nocturnes et Consolations', duration: 24 },
  { id: 10, title: 'Improvisation et jazz', description: 'Blues, II-V-I, standards et comping', duration: 25 },
  { id: 11, title: 'Composition et arrangement', description: 'Créer, harmoniser et arranger', duration: 26 },
  { id: 12, title: 'Préparation concert et carrière', description: 'Récital, mémorisation, trac et carrières musicales', duration: 28 }
];

export default async function Niveau5Page() {
  // Progression réelle : complété depuis user_progress,
  // déverrouillage progressif (leçon N accessible si N-1 complétée)
  const completed = await getCompletedLessonNumbers(5);

  const lessons = rawLessons.map((lesson, index) => ({
    ...lesson,
    completed: completed.has(lesson.id),
    unlocked: index === 0 || completed.has(rawLessons[index - 1].id),
    href: `/parcours/niveau-5/lecon-${lesson.id}`,
  }));

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
