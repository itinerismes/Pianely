'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Clock,
  Award,
  Target,
  Calendar,
  BarChart3,
  CheckCircle2,
  Flame
} from 'lucide-react'
import type { DashboardStats } from '@/lib/supabase/progress'

interface LevelProgress {
  levelNumber: number
  title: string
  completion: number
  color: string
}

interface PracticeStats {
  date: string
  duration: number
  sessions: number
}

interface ProgressionClientProps {
  stats: DashboardStats
  levelProgress: LevelProgress[]
  practiceStats: PracticeStats[]
  progressByDate: Record<string, number>
  totalLessons: number
}

export function ProgressionClient({
  stats,
  levelProgress,
  practiceStats,
  progressByDate,
  totalLessons
}: ProgressionClientProps) {
  // Calculate overall completion
  const overallCompletion = Math.round(
    (stats.totalLessonsCompleted / totalLessons) * 100
  )

  // Get last 7 days for streak calendar
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - i))
    return date.toISOString().split('T')[0]
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 relative">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-xl" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent relative z-10">
          Ma Progression 📊
        </h1>
        <p className="text-muted-foreground relative z-10">
          Suis ton évolution et tes statistiques d'apprentissage
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/50 border-purple-200 dark:border-purple-800 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Progression globale
            </CardTitle>
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-md">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{overallCompletion}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.totalLessonsCompleted}/{totalLessons} leçons
            </p>
            <div className="mt-3">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-600 transition-all"
                  style={{ width: `${overallCompletion}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-950/50 border-green-200 dark:border-green-800 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Temps de pratique
            </CardTitle>
            <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md">
              <Clock className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalPracticeTimeHours}h</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.totalPracticeTimeMinutes} minutes au total
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/50 border-orange-200 dark:border-orange-800 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Streak actuel
            </CardTitle>
            <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md">
              <Flame className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-2">
              {stats.currentStreak > 0 && '🔥'} {stats.currentStreak}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.currentStreak > 0 ? 'Jours consécutifs' : 'Commence une série !'}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/50 border-amber-200 dark:border-amber-800 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Succès débloqués
            </CardTitle>
            <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md">
              <Award className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats.unlockedAchievements}/{stats.totalAchievements}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round((stats.unlockedAchievements / stats.totalAchievements) * 100)}% complétés
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - 2 sections */}
        <div className="lg:col-span-2 space-y-6">
          {/* Level Progress */}
          <Card className="shadow-lg border-2 dark:border-gray-700 dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                  <BarChart3 className="h-4 w-4" />
                </div>
                Progression par niveau
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {levelProgress.map((level) => (
                <div key={level.levelNumber} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={`bg-gradient-to-r ${level.color} text-white border-0`}>
                        Niveau {level.levelNumber}
                      </Badge>
                      <span className="text-sm font-medium">{level.title}</span>
                    </div>
                    <span className="text-sm font-bold">{level.completion}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${level.color} transition-all duration-500`}
                      style={{ width: `${level.completion}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Practice History */}
          <Card className="shadow-lg border-2 dark:border-gray-700 dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                Historique de pratique (30 derniers jours)
              </CardTitle>
            </CardHeader>
            <CardContent>
              {practiceStats.length > 0 ? (
                <div className="space-y-3">
                  {practiceStats.slice(0, 10).map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm">
                          {new Date(stat.date).getDate()}
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            {new Date(stat.date).toLocaleDateString('fr-FR', {
                              weekday: 'long',
                              day: 'numeric',
                              month: 'long'
                            })}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {stat.sessions} session{stat.sessions > 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600 dark:text-blue-400">{stat.duration} min</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Clock className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Aucune pratique enregistrée encore
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Streak Calendar */}
          <Card className="shadow-lg border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white">
                  <Flame className="h-4 w-4" />
                </div>
                7 derniers jours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {last7Days.map((date) => {
                  const hasActivity = progressByDate[date] || 0
                  const dayName = new Date(date).toLocaleDateString('fr-FR', { weekday: 'short' })

                  return (
                    <div key={date} className="flex flex-col items-center gap-1">
                      <span className="text-xs font-medium text-muted-foreground">
                        {dayName}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                          hasActivity > 0
                            ? 'bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500'
                        }`}
                      >
                        {hasActivity > 0 ? '✓' : '-'}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="shadow-lg border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-950/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <Target className="h-4 w-4" />
                </div>
                Statistiques rapides
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/80 dark:bg-gray-800/80">
                <span className="text-sm text-muted-foreground">Leçons complétées</span>
                <span className="font-bold">{stats.totalLessonsCompleted}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/80 dark:bg-gray-800/80">
                <span className="text-sm text-muted-foreground">Niveaux terminés</span>
                <span className="font-bold">
                  {Object.values(stats.levelsCompletion).filter(c => c === 100).length}/5
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/80 dark:bg-gray-800/80">
                <span className="text-sm text-muted-foreground">Moyenne par niveau</span>
                <span className="font-bold">
                  {Math.round(Object.values(stats.levelsCompletion).reduce((a, b) => a + b, 0) / 5)}%
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/80 dark:bg-gray-800/80">
                <span className="text-sm text-muted-foreground">Sessions cette semaine</span>
                <span className="font-bold">
                  {stats.recentActivity.reduce((sum, a) => sum + a.sessions, 0)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
