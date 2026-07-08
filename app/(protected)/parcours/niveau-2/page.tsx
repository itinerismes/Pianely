import { NiveauPageClient } from '@/components/parcours/NiveauPageClient';
import { getCompletedLessonNumbers } from '@/lib/supabase/lessonProgress';

const rawLessons = [
  { id: 1, title: 'Position des mains et posture', description: 'Adopte une posture correcte et place tes doigts sur les touches', duration: 12 },
  { id: 2, title: 'Les doigtés', description: 'Apprends la numérotation des doigts et développe leur indépendance', duration: 10 },
  { id: 3, title: 'Les intervalles', description: 'Comprends les distances entre les notes', duration: 12 },
  { id: 4, title: 'Introduction au rythme', description: 'Maîtrise les valeurs de notes et le tempo', duration: 15 },
  { id: 5, title: 'Première mélodie simple', description: 'Joue ta première mélodie complète', duration: 15 },
  { id: 6, title: 'Main gauche et accords de base', description: 'Apprends les accords majeurs et mineurs', duration: 15 },
  { id: 7, title: 'Coordination mains ensemble', description: 'Synchronise tes deux mains pour jouer simultanément', duration: 15 }
];

export default async function Niveau2Page() {
  // Progression réelle : complété depuis user_progress,
  // déverrouillage progressif (leçon N accessible si N-1 complétée)
  const completed = await getCompletedLessonNumbers(2);

  const lessons = rawLessons.map((lesson, index) => ({
    ...lesson,
    completed: completed.has(lesson.id),
    unlocked: index === 0 || completed.has(rawLessons[index - 1].id),
    href: `/parcours/niveau-2/lecon-${lesson.id}`,
  }));

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
