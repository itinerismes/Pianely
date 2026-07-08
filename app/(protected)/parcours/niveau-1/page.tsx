import { NiveauPageClient } from '@/components/parcours/NiveauPageClient';
import { getCompletedLessonNumbers } from '@/lib/supabase/lessonProgress';

const rawLessons = [
  { id: 1, title: 'Anatomie du clavier', description: 'Découvre les notes, les octaves et la structure du piano', duration: 8 },
  { id: 2, title: 'Position des mains', description: 'Apprends la bonne posture et le placement des doigts', duration: 10 },
  { id: 3, title: 'Premier motif main droite', description: 'Joue ta première mélodie simple avec la main droite', duration: 12 },
  { id: 4, title: 'Premier motif main gauche', description: 'Découvre les accords de base avec la main gauche', duration: 12 },
  { id: 5, title: 'Ton premier morceau complet', description: 'Combine les deux mains pour jouer ton premier morceau !', duration: 15 }
];

export default async function Niveau1Page() {
  // Progression réelle : complété depuis user_progress,
  // déverrouillage progressif (leçon N accessible si N-1 complétée)
  const completed = await getCompletedLessonNumbers(1);

  const lessons = rawLessons.map((lesson, index) => ({
    ...lesson,
    completed: completed.has(lesson.id),
    unlocked: index === 0 || completed.has(rawLessons[index - 1].id),
    href: `/parcours/niveau-1/lecon-${lesson.id}`,
  }));

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
