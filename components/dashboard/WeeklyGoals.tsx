import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Clock, Music } from "lucide-react";

export function WeeklyGoals() {
  const goals = [
    {
      title: "Terminer 3 leçons",
      progress: 67,
      current: 2,
      target: 3,
      icon: <Target className="h-4 w-4" />,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: "Pratiquer 5 heures",
      progress: 70,
      current: 3.5,
      target: 5,
      icon: <Clock className="h-4 w-4" />,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: "Maîtriser 2 morceaux",
      progress: 50,
      current: 1,
      target: 2,
      icon: <Music className="h-4 w-4" />,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-white to-indigo-50 border-indigo-200 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <Target className="h-4 w-4" />
          </div>
          Objectifs hebdomadaires 🎯
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg bg-gradient-to-r ${goal.color} text-white`}>
                  {goal.icon}
                </div>
                <span className="font-medium text-sm">{goal.title}</span>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {goal.current}/{goal.target}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${goal.color} transition-all duration-500`}
                style={{ width: `${goal.progress}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
