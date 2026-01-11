'use client';

import { LeconCard } from '@/components/parcours/LeconCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const lessons = [
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

export default function Niveau1Page() {
  const router = useRouter();
  const completedCount = lessons.filter((l) => l.completed).length;
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0);
  const progress = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="space-y-6">
      {/* Back button */}
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="hover:bg-purple-50"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour au parcours
      </Button>

      {/* Niveau header card */}
      <Card className="bg-gradient-to-br from-white to-green-50 border-green-200 shadow-lg">
        <CardHeader>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">
                Niveau 1 - Découverte
              </CardTitle>
              <p className="text-muted-foreground mb-4">
                Tes premiers pas au piano
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{completedCount} / {lessons.length} leçons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">~{totalDuration} min</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Progression du niveau</span>
              <span className="font-bold">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Lessons grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {lessons.map((lesson) => (
          <LeconCard
            key={lesson.id}
            {...lesson}
            gradient="from-green-500 to-emerald-600"
          />
        ))}
      </div>

      {/* Completion Message */}
      {completedCount === lessons.length && (
        <Card className="bg-gradient-to-br from-white to-green-50 border-green-200 shadow-lg text-center">
          <CardContent className="pt-6">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h3 className="text-2xl font-bold mb-2">Félicitations ! 🎉</h3>
            <p className="text-muted-foreground mb-6">
              Tu as complété le Niveau 1 - Découverte
            </p>
            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0"
              onClick={() => router.push('/parcours/niveau-2')}
            >
              Passer au Niveau 2
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
