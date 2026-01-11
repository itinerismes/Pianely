import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Lock, CheckCircle2, ArrowRight } from "lucide-react";
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
  onClick
}: NiveauCardProps) {
  const router = useRouter();
  const progress = Math.round((completedLessons / totalLessons) * 100);

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'from-green-400 to-emerald-500';
    if (progress >= 50) return 'from-blue-400 to-cyan-500';
    if (progress >= 20) return 'from-yellow-400 to-orange-500';
    return 'from-gray-400 to-gray-500';
  };

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
    <Card
      className={`group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 ${
        !unlocked ? 'opacity-75' : ''
      }`}
      onClick={handleClick}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          {/* Background gradient */}
          <div className={`w-full h-48 bg-gradient-to-br ${gradient} transition-transform duration-200 group-hover:scale-105`}>
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Niveau number */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-5xl font-bold text-white drop-shadow-lg">
                  {niveau}
                </span>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 border-0 shadow-lg">
              Niveau {niveau}
            </Badge>
          </div>

          {/* Completion/Lock badge */}
          {!unlocked ? (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <Lock className="w-12 h-12 text-white drop-shadow-lg" />
                <span className="text-white font-medium drop-shadow-lg">Verrouillé</span>
              </div>
            </div>
          ) : completedLessons === totalLessons ? (
            <div className="absolute top-3 right-3">
              <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white border-0 shadow-lg">
                ✅ Complété
              </Badge>
            </div>
          ) : null}
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-medium text-lg mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {totalLessons} leçons
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            ~{duration}
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Progression</span>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${getProgressColor(progress)}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* CTA Button */}
        {unlocked && (
          <Button
            className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 text-white border-0 transition-all duration-200`}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            {completedLessons === totalLessons ? 'Revoir' : completedLessons > 0 ? 'Continuer' : 'Commencer'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
