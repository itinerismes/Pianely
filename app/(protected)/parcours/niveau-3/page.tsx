import { ArrowLeft, Clock, CheckCircle2, Play, Lock, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const lessons = [
  { id: 1, title: 'Les gammes complètes', description: 'Maîtrise la gamme de Do majeur et comprends la structure des gammes', duration: 15, unlocked: true },
  { id: 2, title: 'Lecture de partition niveau 1', description: 'Apprends à lire des partitions simples en clé de sol et de fa', duration: 18, unlocked: true },
  { id: 3, title: 'Les accords enrichis', description: 'Découvre les accords de 7ème et leurs inversions', duration: 16, unlocked: true },
  { id: 4, title: 'Techniques d\'articulation', description: 'Maîtrise le legato, staccato et les accents', duration: 14, unlocked: true },
  { id: 5, title: 'La pédale de sustain', description: 'Apprends quand et comment utiliser la pédale', duration: 15, unlocked: true },
  { id: 6, title: 'Morceaux célèbres faciles', description: 'Joue Ode to Joy, Canon in D et Comptine d\'un autre été', duration: 18, unlocked: true },
  { id: 7, title: 'L\'expression musicale', description: 'Ajoute dynamiques, tempo et émotion à ton jeu', duration: 16, unlocked: true },
  { id: 8, title: 'Premier morceau complet', description: 'Apprends et perfectionne ton premier morceau complet', duration: 18, unlocked: true }
]

export default function Niveau3Page() {
  const completedCount = 0
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Back button */}
        <Button variant="ghost" asChild>
          <Link href="/parcours">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au parcours
          </Link>
        </Button>

        {/* Level header card */}
        <Card className="bg-gradient-to-br from-white to-purple-50 border-purple-200 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">Niveau 3 - Progression</h1>
                <p className="text-muted-foreground mb-4">
                  Développe tes compétences techniques et musicales
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                    <span className="font-medium">{completedCount} / {lessons.length} leçons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="font-medium">~{totalDuration} min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progression du niveau</span>
                <span className="font-medium">{Math.round((completedCount / lessons.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-400 to-violet-500 transition-all"
                  style={{ width: `${(completedCount / lessons.length) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lessons grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="group cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon status */}
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-400 to-violet-500 flex-shrink-0">
                    {lesson.unlocked ? <Play className="w-6 h-6 text-white" /> : <Lock className="w-6 h-6 text-white" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-muted-foreground">
                        Leçon {lesson.id}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {lesson.duration} min
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-1 line-clamp-1">{lesson.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {lesson.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-3">
                      {lesson.unlocked ? (
                        <Link href={`/parcours/niveau-3/lecon-${lesson.id}`}>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-500 to-violet-600 hover:opacity-90"
                          >
                            Commencer
                            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                          </Button>
                        </Link>
                      ) : (
                        <Button size="sm" variant="ghost" disabled>
                          <Lock className="w-4 h-4 mr-2" />
                          Verrouillé
                        </Button>
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
