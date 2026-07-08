import { NiveauPageClient } from '@/components/parcours/NiveauPageClient';
import { getCompletedLessonNumbers } from '@/lib/supabase/lessonProgress';

const rawLessons = [
  { id: 1, title: 'Les gammes complètes', description: 'Maîtrise la gamme de Do majeur et comprends la structure des gammes', duration: 15 },
  { id: 2, title: 'Lecture de partition niveau 1', description: 'Apprends à lire des partitions simples en clé de sol et de fa', duration: 18 },
  { id: 3, title: 'Les accords enrichis', description: 'Découvre les accords de 7ème et leurs inversions', duration: 16 },
  { id: 4, title: 'Techniques d\'articulation', description: 'Maîtrise le legato, staccato et les accents', duration: 14 },
  { id: 5, title: 'La pédale de sustain', description: 'Apprends quand et comment utiliser la pédale', duration: 15 },
  { id: 6, title: 'Morceaux célèbres faciles', description: 'Joue Ode to Joy, Canon in D et Comptine d\'un autre été', duration: 18 },
  { id: 7, title: 'L\'expression musicale', description: 'Ajoute dynamiques, tempo et émotion à ton jeu', duration: 16 },
  { id: 8, title: 'Premier morceau complet', description: 'Apprends et perfectionne ton premier morceau complet', duration: 18 }
];

export default async function Niveau3Page() {
  // Progression réelle : complété depuis user_progress,
  // déverrouillage progressif (leçon N accessible si N-1 complétée)
  const completed = await getCompletedLessonNumbers(3);

  const lessons = rawLessons.map((lesson, index) => ({
    ...lesson,
    completed: completed.has(lesson.id),
    unlocked: index === 0 || completed.has(rawLessons[index - 1].id),
    href: `/parcours/niveau-3/lecon-${lesson.id}`,
  }));

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
