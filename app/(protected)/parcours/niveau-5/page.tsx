import { ArrowLeft, Clock, CheckCircle2, Play, Lock } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const lessons = [
  { id: 1, title: 'Gammes avancées', description: 'Chromatiques, tierces, sixtes, mouvement contraire et octaves', duration: 20, unlocked: true },
  { id: 2, title: 'Accords complexes et voicings', description: 'Accords de 9ème, 11ème, 13ème et slash chords', duration: 22, unlocked: true },
  { id: 3, title: 'Polyphonie et contrepoint', description: 'Canons, fugues et style Bach', duration: 24, unlocked: true },
  { id: 4, title: 'Rythmes avancés et polyrythmies', description: 'Mesures asymétriques, 3:2, 4:3 et swing', duration: 23, unlocked: true },
  { id: 5, title: 'Technique véloce', description: 'Trilles, ornements, gammes rapides et glissandos', duration: 21, unlocked: true },
  { id: 6, title: 'Pédales avancées', description: 'Pédale syncopée, una corda et sostenuto', duration: 19, unlocked: true },
  { id: 7, title: 'Répertoire baroque (Bach)', description: 'BWV 846, Inventions et style baroque', duration: 22, unlocked: true },
  { id: 8, title: 'Répertoire classique (Mozart, Beethoven)', description: 'K.545, Für Elise et Pathétique', duration: 23, unlocked: true },
  { id: 9, title: 'Répertoire romantique (Chopin, Liszt)', description: 'Préludes, Nocturnes et Consolations', duration: 24, unlocked: true },
  { id: 10, title: 'Improvisation et jazz', description: 'Blues, II-V-I, standards et comping', duration: 25, unlocked: true },
  { id: 11, title: 'Composition et arrangement', description: 'Créer, harmoniser et arranger', duration: 26, unlocked: true },
  { id: 12, title: 'Préparation concert et carrière', description: 'Récital, mémorisation, trac et carrières musicales', duration: 28, unlocked: true }
]

export default function Niveau5Page() {
  const completedCount = 0
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button variant="ghost" asChild>
          <Link href="/parcours"><ArrowLeft className="w-4 h-4 mr-2" />Retour au parcours</Link>
        </Button>

        <Card className="bg-gradient-to-br from-white to-rose-50 border-pink-200 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-3xl font-bold text-white">5</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">Niveau 5 - Maîtrise</h1>
                <p className="text-muted-foreground mb-4">Deviens un virtuose accompli</p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500" />
                    <span className="font-medium">{completedCount} / {lessons.length} leçons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-pink-500" />
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
                <div className="h-full rounded-full bg-gradient-to-r from-pink-400 to-rose-500 transition-all" style={{ width: `${(completedCount / lessons.length) * 100}%` }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="group cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-pink-400 to-rose-500 flex-shrink-0">
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
                        <Link href={`/parcours/niveau-5/lecon-${lesson.id}`}>
                          <Button size="sm" className="bg-gradient-to-r from-pink-500 to-rose-600 hover:opacity-90">
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
