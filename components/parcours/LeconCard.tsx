import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <Card
      className={`group transition-all duration-300 hover:shadow-xl border-0 shadow-md ${
        unlocked ? 'cursor-pointer hover:-translate-y-1' : 'opacity-75'
      }`}
      onClick={handleClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Icon status */}
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
              completed
                ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                : unlocked
                ? `bg-gradient-to-r ${gradient}`
                : 'bg-gray-200'
            }`}
          >
            {completed ? (
              <CheckCircle2 className="w-6 h-6 text-white" />
            ) : unlocked ? (
              <Play className="w-6 h-6 text-white" />
            ) : (
              <Lock className="w-6 h-6 text-gray-400" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-sm font-bold text-muted-foreground">
                Leçon {id}
              </span>
              <Badge variant="secondary" className="text-xs">
                {duration} min
              </Badge>
              {completed && (
                <Badge className="text-xs bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0">
                  Complété
                </Badge>
              )}
            </div>
            <h3 className="font-medium mb-1 line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>

            {/* CTA */}
            <div className="mt-3">
              {unlocked ? (
                <Button
                  size="sm"
                  className={`bg-gradient-to-r ${gradient} hover:opacity-90 text-white border-0 transition-all duration-200`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick();
                  }}
                >
                  {completed ? 'Revoir' : 'Commencer'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button size="sm" variant="ghost" disabled className="text-muted-foreground">
                  <Lock className="w-4 h-4 mr-2" />
                  Verrouillé
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
