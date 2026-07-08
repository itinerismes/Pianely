'use client';

/**
 * Gabarit des pages Niveau — header sous projecteur + grille de leçons.
 * Chaque page /parcours/niveau-X ne fournit que ses données.
 */

import { LeconCard } from '@/components/parcours/LeconCard';
import { OctaveProgress } from '@/components/ui/octave-progress';
import { ArrowLeft, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export interface NiveauLesson {
  id: number;
  title: string;
  description: string;
  duration: number;
  completed: boolean;
  unlocked: boolean;
  href: string;
}

interface NiveauPageClientProps {
  niveau: number;
  title: string;
  subtitle: string;
  /** Gradient Tailwind du niveau, ex. "from-emerald-400 to-teal-500" */
  gradient: string;
  lessons: NiveauLesson[];
  nextNiveauHref?: string;
}

export function NiveauPageClient({
  niveau,
  title,
  subtitle,
  gradient,
  lessons,
  nextNiveauHref
}: NiveauPageClientProps) {
  const router = useRouter();
  const completedCount = lessons.filter((l) => l.completed).length;
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0);
  const progress = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="mx-auto max-w-5xl space-y-8 py-4 md:py-8">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="btn-ghost inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-dim"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au parcours
      </button>

      {/* Niveau header */}
      <div className="panel rounded-2xl p-6">
        <div className="flex items-start gap-6">
          <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} opacity-90 shadow-[0_0_24px_rgba(255,255,255,0.15)]`}>
            <span className="font-display text-4xl text-[#0a0a0e]">{niveau}</span>
          </div>
          <div className="flex-1">
            <h1 className="font-display mb-1 text-2xl tracking-tight text-[#f2efe8] md:text-3xl">
              {title}
            </h1>
            <p className="text-dim mb-4">
              {subtitle}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="accent-green h-5 w-5" />
                <span className="text-sm font-semibold tabular-nums text-[#f2efe8]">
                  {completedCount} / {lessons.length} leçons
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-faint h-5 w-5" />
                <span className="text-dim text-sm font-semibold tabular-nums">~{totalDuration} min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progression en octave */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-dim font-semibold">Progression du niveau</span>
            <span className="font-bold tabular-nums text-[#f2efe8]">{progress}%</span>
          </div>
          <OctaveProgress value={progress} keys={lessons.length} />
        </div>
      </div>

      {/* Lessons grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {lessons.map((lesson) => (
          <LeconCard
            key={lesson.id}
            {...lesson}
            gradient={gradient}
          />
        ))}
      </div>

      {/* Completion Message */}
      {completedCount === lessons.length && (
        <div className="panel rounded-2xl border-[#4ade80]/30 p-6 text-center shadow-[0_0_32px_rgba(74,222,128,0.15)]">
          <CheckCircle2 className="accent-green mx-auto mb-4 h-16 w-16" />
          <h3 className="font-display mb-2 text-2xl text-[#f2efe8]">Félicitations ! 🎉</h3>
          <p className="text-dim mb-6">
            Tu as complété le {title}
          </p>
          {nextNiveauHref && (
            <button
              className="btn-accent inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 font-bold"
              onClick={() => router.push(nextNiveauHref)}
            >
              Passer au niveau suivant
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
