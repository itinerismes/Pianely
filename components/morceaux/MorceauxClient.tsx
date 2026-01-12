'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Music,
  PlayCircle,
  CheckCircle2,
  Clock,
  Star,
  Filter,
  Search,
  PlusCircle
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { IMSLPSearch } from './IMSLPSearch'
import { PianoSnapSearch } from './PianoSnapSearch'
import { AudioUpload } from './AudioUpload'

interface Piece {
  id: string
  title: string
  composer: string
  level: number
  difficulty: 'easy' | 'medium' | 'hard'
  duration: number // in minutes
  status: 'not_started' | 'in_progress' | 'mastered'
  progress: number // 0-100
  thumbnail?: string
}

interface MorceauxClientProps {
  pieces: Piece[]
  userId: string
}

export function MorceauxClient({ pieces, userId }: MorceauxClientProps) {
  const [selectedTab, setSelectedTab] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [showAddDialog, setShowAddDialog] = useState(false)

  // Filter pieces based on tab and level
  const filteredPieces = pieces.filter((piece) => {
    if (selectedTab === 'in-progress' && piece.status !== 'in_progress') return false
    if (selectedTab === 'mastered' && piece.status !== 'mastered') return false
    if (selectedLevel && piece.level !== selectedLevel) return false
    return true
  })

  const inProgressCount = pieces.filter(p => p.status === 'in_progress').length
  const masteredCount = pieces.filter(p => p.status === 'mastered').length

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-200'
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'hard': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getLevelColor = (level: number) => {
    const colors: Record<number, string> = {
      1: 'from-green-500 to-emerald-600',
      2: 'from-blue-500 to-cyan-600',
      3: 'from-purple-500 to-violet-600',
      4: 'from-orange-500 to-amber-600',
      5: 'from-pink-500 to-rose-600'
    }
    return colors[level] || 'from-gray-500 to-gray-600'
  }

  const handlePieceAdded = () => {
    setShowAddDialog(false)
    // Recharger la page pour voir le nouveau morceau
    window.location.reload()
  }

  return (
    <div className="space-y-6">
      {/* Header avec bouton Ajouter */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="space-y-2 relative">
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-10 blur-xl" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent relative z-10">
            Bibliothèque de Morceaux 🎵
          </h1>
          <p className="text-muted-foreground relative z-10">
            Découvre et pratique des morceaux adaptés à ton niveau
          </p>
        </div>

        <Button
          size="lg"
          onClick={() => setShowAddDialog(true)}
          className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all self-start sm:self-auto"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Ajouter un morceau
        </Button>
      </div>

      {/* Dialog d'ajout de morceau */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Ajouter un morceau</DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="imslp" className="mt-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="imslp">IMSLP</TabsTrigger>
              <TabsTrigger value="pianosnap">PianoSnap</TabsTrigger>
              <TabsTrigger value="upload">
                Audio/YouTube
              </TabsTrigger>
              <TabsTrigger value="files" disabled>
                MusicXML/MIDI
              </TabsTrigger>
            </TabsList>

            <TabsContent value="imslp" className="mt-4">
              <IMSLPSearch userId={userId} onPieceAdded={handlePieceAdded} />
            </TabsContent>

            <TabsContent value="pianosnap" className="mt-4">
              <PianoSnapSearch />
            </TabsContent>

            <TabsContent value="upload" className="mt-4">
              <AudioUpload onSuccess={handlePieceAdded} />
            </TabsContent>

            <TabsContent value="files" className="mt-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground">
                    Fonctionnalité à venir... (Phase 3)
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Filters */}
      <Card className="shadow-lg border-2">
        <CardContent className="pt-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filtrer par niveau :</span>
            </div>
            <Button
              variant={selectedLevel === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedLevel(null)}
            >
              Tous
            </Button>
            {[1, 2, 3, 4, 5].map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedLevel(level)}
                className={selectedLevel === level ? `bg-gradient-to-r ${getLevelColor(level)} text-white border-0` : ''}
              >
                Niveau {level}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3 bg-muted/50">
          <TabsTrigger value="all">
            Tous
            {pieces.length > 0 && (
              <Badge className="ml-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white border-0">
                {pieces.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="in-progress">
            En cours
            {inProgressCount > 0 && (
              <Badge className="ml-2 bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0">
                {inProgressCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="mastered">
            Maîtrisés
            {masteredCount > 0 && (
              <Badge className="ml-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0">
                {masteredCount}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          {filteredPieces.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPieces.map((piece) => (
                <PieceCard key={piece.id} piece={piece} getLevelColor={getLevelColor} getDifficultyColor={getDifficultyColor} />
              ))}
            </div>
          ) : (
            <EmptyState tab="all" />
          )}
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          {filteredPieces.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPieces.map((piece) => (
                <PieceCard key={piece.id} piece={piece} getLevelColor={getLevelColor} getDifficultyColor={getDifficultyColor} />
              ))}
            </div>
          ) : (
            <EmptyState tab="in-progress" />
          )}
        </TabsContent>

        <TabsContent value="mastered" className="mt-6">
          {filteredPieces.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPieces.map((piece) => (
                <PieceCard key={piece.id} piece={piece} getLevelColor={getLevelColor} getDifficultyColor={getDifficultyColor} />
              ))}
            </div>
          ) : (
            <EmptyState tab="mastered" />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function PieceCard({
  piece,
  getLevelColor,
  getDifficultyColor
}: {
  piece: any
  getLevelColor: (level: number) => string
  getDifficultyColor: (difficulty: string) => string
}) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <CardHeader className="p-0">
        {piece.thumbnail ? (
          <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
            <img
              src={piece.thumbnail}
              alt={piece.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className={`relative h-48 bg-gradient-to-br ${getLevelColor(piece.level)} rounded-t-lg flex items-center justify-center`}>
            <Music className="w-16 h-16 text-white opacity-50" />
          </div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={`bg-gradient-to-r ${getLevelColor(piece.level)} text-white border-0`}>
            Niveau {piece.level}
          </Badge>
          <Badge className={getDifficultyColor(piece.difficulty)}>
            {piece.difficulty === 'easy' ? 'Facile' :
             piece.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{piece.title}</h3>
          <p className="text-sm text-muted-foreground">{piece.composer}</p>
        </div>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {piece.duration} min
          </div>
          {piece.status === 'mastered' && (
            <div className="flex items-center gap-1 text-green-600">
              <CheckCircle2 className="w-4 h-4" />
              Maîtrisé
            </div>
          )}
        </div>

        {piece.status !== 'not_started' && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progression</span>
              <span className="font-medium">{piece.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(piece.level)} transition-all`}
                style={{ width: `${piece.progress}%` }}
              />
            </div>
          </div>
        )}

        <Link href={`/morceaux/${piece.id}`} className="w-full">
          <Button
            className={`w-full bg-gradient-to-r ${getLevelColor(piece.level)} hover:opacity-90 text-white border-0`}
          >
            <PlayCircle className="w-4 h-4 mr-2" />
            {piece.status === 'not_started' ? 'Commencer' :
             piece.status === 'in_progress' ? 'Continuer' : 'Revoir'}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

function EmptyState({ tab }: { tab: string }) {
  const messages = {
    all: {
      icon: <Music className="w-20 h-20 mx-auto text-muted-foreground mb-4" />,
      title: 'Aucun morceau disponible',
      description: 'La bibliothèque de morceaux sera bientôt enrichie avec des pièces adaptées à chaque niveau.'
    },
    'in-progress': {
      icon: <PlayCircle className="w-20 h-20 mx-auto text-muted-foreground mb-4" />,
      title: 'Aucun morceau en cours',
      description: 'Commence à pratiquer un morceau pour le voir ici !'
    },
    mastered: {
      icon: <Star className="w-20 h-20 mx-auto text-muted-foreground mb-4" />,
      title: 'Aucun morceau maîtrisé',
      description: 'Continue à pratiquer pour maîtriser tes premiers morceaux ! 🎵'
    }
  }

  const message = messages[tab as keyof typeof messages] || messages.all

  return (
    <Card className="shadow-lg border-2">
      <CardContent className="pt-16 pb-16 text-center">
        {message.icon}
        <h3 className="text-xl font-semibold mb-2">{message.title}</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          {message.description}
        </p>
      </CardContent>
    </Card>
  )
}
