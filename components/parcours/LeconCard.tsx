import { Clock, CheckCircle2, Lock, Play, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface LeconCardProps {
  id: number;
  title: string;
  description: string;
  duration: number;
  completed: boolean;
  unlocked: boolean;
  href: string;
  gradient: string;
}

export function LeconCard({
  id,
  title,
  description,
  duration,
  completed,
  unlocked,
  href,
  gradient
}: LeconCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (unlocked) {
      router.push(href);
    }
  };

  return (
    <div
      className={`panel rounded-2xl transition-all duration-300 ${
        unlocked ? 'panel-hover cursor-pointer' : 'opacity-55'
      }`}
      onClick={handleClick}
    >
      <div className="p-4">
        <div className="flex items-start gap-4">
          {/* Icon status */}
          <div
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
              completed
                ? 'badge-stage'
                : unlocked
                ? `bg-gradient-to-r ${gradient} text-[#0a0a0e] shadow-[0_0_16px_rgba(255,255,255,0.12)]`
                : 'border border-white/[0.08] bg-white/[0.04] text-faint'
            }`}
          >
            {completed ? (
              <CheckCircle2 className="h-6 w-6" />
            ) : unlocked ? (
              <Play className="h-6 w-6" />
            ) : (
              <Lock className="h-5 w-5" />
            )}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-faint text-[11px] font-bold uppercase tracking-widest">
                Leçon {id}
              </span>
              <span className="text-faint inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] font-bold">
                <Clock className="h-3 w-3" />
                {duration} min
              </span>
              {completed && (
                <span className="badge-stage inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                  Complété
                </span>
              )}
            </div>
            <h3 className="mb-1 line-clamp-1 font-bold text-[#f2efe8]">{title}</h3>
            <p className="text-dim line-clamp-2 text-sm">
              {description}
            </p>

            {/* CTA */}
            <div className="mt-3">
              {unlocked ? (
                <button
                  className="btn-accent inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick();
                  }}
                >
                  {completed ? 'Revoir' : 'Commencer'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <span className="text-faint inline-flex items-center gap-1.5 px-1 py-2 text-sm font-semibold">
                  <Lock className="h-4 w-4" />
                  Verrouillé
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
