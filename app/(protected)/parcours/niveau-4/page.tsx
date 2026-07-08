import { NiveauPageClient } from '@/components/parcours/NiveauPageClient';
import { getCompletedLessonNumbers } from '@/lib/supabase/lessonProgress';

const rawLessons = [
  { id: 1, title: 'Les gammes majeures et mineures', description: 'Maîtrise toutes les gammes et leurs doigtés', duration: 18 },
  { id: 2, title: 'Les armures et tonalités', description: 'Comprends le cercle des quintes et les altérations', duration: 16 },
  { id: 3, title: 'Les accords de 7ème avancés', description: 'Explore les accords dominants et leurs progressions', duration: 17 },
  { id: 4, title: 'Rythmes complexes', description: 'Syncopes, triolets avancés et mesures composées', duration: 16 },
  { id: 5, title: 'Indépendance des mains avancée', description: 'Rythmes différents et contrepoint basique', duration: 18 },
  { id: 6, title: 'Techniques d\'interprétation', description: 'Rubato, phrasé et expression musicale', duration: 17 },
  { id: 7, title: 'Les arpèges étendus', description: 'Patterns d\'arpèges et Alberti bass', duration: 16 },
  { id: 8, title: 'Lecture à vue niveau 2', description: 'Stratégies pour lire rapidement des partitions', duration: 15 },
  { id: 9, title: 'Répertoire classique intermédiaire', description: 'Mozart, Beethoven et Chopin accessibles', duration: 20 },
  { id: 10, title: 'Projet de récital', description: 'Prépare et perfectionne ton premier récital', duration: 20 }
];

export default async function Niveau4Page() {
  // Progression réelle : complété depuis user_progress,
  // déverrouillage progressif (leçon N accessible si N-1 complétée)
  const completed = await getCompletedLessonNumbers(4);

  const lessons = rawLessons.map((lesson, index) => ({
    ...lesson,
    completed: completed.has(lesson.id),
    unlocked: index === 0 || completed.has(rawLessons[index - 1].id),
    href: `/parcours/niveau-4/lecon-${lesson.id}`,
  }));

  return (
    <NiveauPageClient
      niveau={4}
      title="Niveau 4 - Intermédiaire"
      subtitle="Atteins un niveau technique avancé"
      gradient="from-amber-400 to-yellow-500"
      lessons={lessons}
      nextNiveauHref="/parcours/niveau-5"
    />
  );
}
