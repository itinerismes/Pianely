'use client'

import { useState } from 'react'
import { PianelyStats } from '@/components/dashboard/PianelyStats'
import { WeeklyGoals } from '@/components/dashboard/WeeklyGoals'
import { Achievements } from '@/components/dashboard/Achievements'
import { NiveauCard } from '@/components/parcours/NiveauCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Music, Trophy } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { DashboardStats } from '@/lib/supabase/progress'

interface NiveauData {
  niveau: number
  name: string
  description: string
  totalLessons: number
  completedLessons: number
  duration: string
  unlocked: boolean
  gradient: string
  href: string
  completion: number
}

interface Achievement {
  id: string
  code: string
  title: string
  description: string | null
  icon_url: string | null
  category: string | null
  unlocked: boolean
}

interface DashboardClientProps {
  userName: string
  stats: DashboardStats
  niveaux: NiveauData[]
  achievements: Achievement[]
  totalAchievements: number
  unlockedAchievementsCount: number
}

export function DashboardClient({
  userName,
  stats,
  niveaux,
  achievements,
  totalAchievements,
  unlockedAchievementsCount
}: DashboardClientProps) {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState('all')

  const inProgressNiveaux = niveaux.filter(
    (n) => n.unlocked && n.completedLessons > 0 && n.completedLessons < n.totalLessons
  )
  const completedNiveaux = niveaux.filter((n) => n.completedLessons === n.totalLessons)

  return (
    <div className="space-y-6">
      {/* Welcome Section with decorative blobs */}
      <div className="space-y-2 relative">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-xl decorative-blob" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-xl decorative-blob" />

        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent relative z-10">
          Bienvenue, {userName} ! 🎹
        </h1>
        <p className="text-muted-foreground relative z-10">
          Continue ton apprentissage du piano. Tu progresses bien ! ✨
        </p>
      </div>

      {/* Stats */}
      <PianelyStats stats={stats} />

      {/* Grid Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Section */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Mes Niveaux</h2>

          <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-3 bg-muted/50">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="in-progress">
                En cours
                {inProgressNiveaux.length > 0 && (
                  <Badge className="ml-2 bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0">
                    {inProgressNiveaux.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="completed">
                Complétés
                {completedNiveaux.length > 0 && (
                  <Badge className="ml-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0">
                    {completedNiveaux.length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid gap-4 sm:grid-cols-2 mt-4">
              {niveaux.map((niveau) => (
                <NiveauCard key={niveau.niveau} {...niveau} />
              ))}
            </TabsContent>

            <TabsContent value="in-progress" className="grid gap-4 sm:grid-cols-2 mt-4">
              {inProgressNiveaux.length > 0 ? (
                inProgressNiveaux.map((niveau) => (
                  <NiveauCard key={niveau.niveau} {...niveau} />
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <Music className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Aucun niveau en cours. Commence un niveau pour le voir ici !
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed" className="grid gap-4 sm:grid-cols-2 mt-4">
              {completedNiveaux.length > 0 ? (
                completedNiveaux.map((niveau) => (
                  <NiveauCard key={niveau.niveau} {...niveau} />
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <Trophy className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Aucun niveau complété encore. Continue ton apprentissage !
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <WeeklyGoals stats={stats} />

          {/* Achievements */}
          <Achievements
            achievements={achievements}
            totalAchievements={totalAchievements}
            unlockedCount={unlockedAchievementsCount}
          />

          {/* Continue Learning */}
          <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white">
                  <ArrowRight className="h-4 w-4" />
                </div>
                Continuer l'apprentissage 🎬
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-white/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">Niveau 1 - Leçon 1</span>
                  <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0">
                    Nouveau
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Position des mains et premières notes
                </p>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-0"
                onClick={() => router.push('/parcours/niveau-1/lecon-1')}
              >
                Commencer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gradient-to-br from-white to-green-50 border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle>Activité récente 📈</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {stats.recentActivity.length > 0 ? (
                <div className="text-sm text-muted-foreground space-y-2">
                  {stats.recentActivity.slice(0, 5).map((activity, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mt-1.5" />
                      <div>
                        <p className="font-medium text-foreground">
                          {activity.sessions} session{activity.sessions > 1 ? 's' : ''} de pratique
                        </p>
                        <p className="text-xs">
                          {activity.duration} min - {new Date(activity.date).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mt-1.5" />
                    <div>
                      <p className="font-medium text-foreground">Compte créé</p>
                      <p className="text-xs">Aujourd'hui</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 mt-1.5" />
                    <div>
                      <p className="font-medium text-foreground">Niveau 1 débloqué</p>
                      <p className="text-xs">Aujourd'hui</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
