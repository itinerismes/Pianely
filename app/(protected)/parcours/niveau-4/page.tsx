import { ArrowLeft, Clock, CheckCircle2, Play, Lock } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const lessons = [
  { id: 1, title: 'Les gammes majeures et mineures', description: 'Maîtrise toutes les gammes et leurs doigtés', duration: 18, unlocked: true },
  { id: 2, title: 'Les armures et tonalités', description: 'Comprends le cercle des quintes et les altérations', duration: 16, unlocked: true },
  { id: 3, title: 'Les accords de 7ème avancés', description: 'Explore les accords dominants et leurs progressions', duration: 17, unlocked: true },
  { id: 4, title: 'Rythmes complexes', description: 'Syncopes, triolets avancés et mesures composées', duration: 16, unlocked: true },
  { id: 5, title: 'Indépendance des mains avancée', description: 'Rythmes différents et contrepoint basique', duration: 18, unlocked: true },
  { id: 6, title: 'Techniques d\'interprétation', description: 'Rubato, phrasé et expression musicale', duration: 17, unlocked: true },
  { id: 7, title: 'Les arpèges étendus', description: 'Patterns d\'arpèges et Alberti bass', duration: 16, unlocked: true },
  { id: 8, title: 'Lecture à vue niveau 2', description: 'Stratégies pour lire rapidement des partitions', duration: 15, unlocked: true },
  { id: 9, title: 'Répertoire classique intermédiaire', description: 'Mozart, Beethoven et Chopin accessibles', duration: 20, unlocked: true },
  { id: 10, title: 'Projet de récital', description: 'Prépare et perfectionne ton premier récital', duration: 20, unlocked: true }
]

export default function Niveau4Page() {
  const completedCount = 0
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button variant="ghost" asChild>
          <Link href="/parcours"><ArrowLeft className="w-4 h-4 mr-2" />Retour au parcours</Link>
        </Button>

        <Card className="bg-gradient-to-br from-white to-amber-50 border-orange-200 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">Niveau 4 - Intermédiaire</h1>
                <p className="text-muted-foreground mb-4">Atteins un niveau technique avancé</p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">{completedCount} / {lessons.length} leçons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">~{totalDuration} min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progression du niveau</span>
                <span className="font-medium">{Math.round((completedCount / lessons.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-500 transition-all" style={{ width: `${(completedCount / lessons.length) * 100}%` }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="group cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-orange-400 to-amber-500 flex-shrink-0">
                    {lesson.unlocked ? <Play className="w-6 h-6 text-white" /> : <Lock className="w-6 h-6 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-muted-foreground">Leçon {lesson.id}</span>
                      <Badge variant="secondary" className="text-xs">{lesson.duration} min</Badge>
                    </div>
                    <h3 className="font-semibold mb-1 line-clamp-1">{lesson.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{lesson.description}</p>
                    <div className="mt-3">
                      {lesson.unlocked ? (
                        <Link href={`/parcours/niveau-4/lecon-${lesson.id}`}>
                          <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:opacity-90">
                            Commencer<ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                          </Button>
                        </Link>
                      ) : (
                        <Button size="sm" variant="ghost" disabled><Lock className="w-4 h-4 mr-2" />Verrouillé</Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
