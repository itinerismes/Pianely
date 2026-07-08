import { OctaveProgress } from "@/components/ui/octave-progress";
import { Clock, BookOpen, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface NiveauCardProps {
  niveau: number;
  name: string;
  description: string;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  unlocked: boolean;
  gradient: string;
  href: string;
  completion: number;
  onClick?: () => void;
}

export function NiveauCard({
  niveau,
  name,
  description,
  totalLessons,
  completedLessons,
  duration,
  unlocked,
  gradient,
  href,
  completion,
  onClick
}: NiveauCardProps) {
  const router = useRouter();
  const progress = completion;
  const complete = completedLessons === totalLessons;

  const handleClick = () => {
    if (unlocked) {
      if (onClick) {
        onClick();
      } else {
        router.push(href);
      }
    }
  };

  return (
    <div
      className={`panel rounded-2xl overflow-hidden transition-all ${
        unlocked ? 'panel-hover cursor-pointer' : 'opacity-60'
      }`}
      onClick={handleClick}
    >
      {/* Bandeau : numéro sous projecteur, teinté par niveau */}
      <div className="relative h-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.16]`} />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(320px 130px at 50% 0%, rgba(255,255,255,0.10), transparent 70%)',
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className={`font-display text-6xl bg-gradient-to-br ${gradient} bg-clip-text text-transparent drop-shadow`}>
            {niveau}
          </span>
        </div>

        <span className="absolute top-3 left-3 inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-dim backdrop-blur-sm">
          Niveau {niveau}
        </span>

        {!unlocked ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/55 backdrop-blur-[2px]">
            <div className="flex flex-col items-center gap-1.5">
              <Lock className="h-8 w-8 text-dim" />
              <span className="text-sm font-semibold text-dim">Verrouillé</span>
            </div>
          </div>
        ) : complete ? (
          <span className="badge-stage absolute top-3 right-3 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
            ✓ Complété
          </span>
        ) : null}
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h3 className="mb-1 text-lg font-bold text-[#f2efe8]">
            {name}
          </h3>
          <p className="text-dim line-clamp-2 text-sm">
            {description}
          </p>
        </div>

        <div className="text-faint flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {totalLessons} leçons
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            ~{duration}
          </div>
        </div>

        {/* Progression en octave */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-faint text-sm">Progression</span>
            <span className="text-sm font-bold tabular-nums text-[#f2efe8]">{progress}%</span>
          </div>
          <OctaveProgress value={progress} />
        </div>

        {/* CTA */}
        {unlocked && (
          <button
            className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${
              complete ? 'btn-ghost text-[#f2efe8]' : 'btn-accent'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            {complete ? 'Revoir' : completedLessons > 0 ? 'Continuer' : 'Commencer'}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
