'use client'

import { useState } from 'react'
import Link from 'next/link'
import { OctaveProgress } from '@/components/ui/octave-progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Music,
  PlayCircle,
  CheckCircle2,
  Clock,
  Star,
  Filter,
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
  category?: string
  level: number
  difficulty: 'easy' | 'medium' | 'hard'
  duration: number // in minutes
  status: 'not_started' | 'in_progress' | 'mastered'
  progress: number // 0-100
  thumbnail?: string
}

interface MorceauxClientProps {
  pieces: Piece[]
}

export function MorceauxClient({ pieces }: MorceauxClientProps) {
  const [selectedTab, setSelectedTab] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showAddDialog, setShowAddDialog] = useState(false)

  // Filter pieces based on tab and level
  const filteredPieces = pieces.filter((piece) => {
    if (selectedTab === 'in-progress' && piece.status !== 'in_progress') return false
    if (selectedTab === 'mastered' && piece.status !== 'mastered') return false
    if (selectedLevel && piece.level !== selectedLevel) return false
    if (selectedCategory && piece.category !== selectedCategory) return false
    return true
  })

  const inProgressCount = pieces.filter(p => p.status === 'in_progress').length
  const masteredCount = pieces.filter(p => p.status === 'mastered').length

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'badge-stage'
      case 'medium': return 'bg-amber-400/10 text-amber-300 border-amber-400/25'
      case 'hard': return 'bg-red-400/10 text-red-300 border-red-400/25'
      default: return 'bg-white/5 text-dim border-white/10'
    }
  }

  const getLevelColor = (level: number) => {
    const colors: Record<number, string> = {
      1: 'from-emerald-400 to-teal-500',
      2: 'from-sky-400 to-cyan-400',
      3: 'from-violet-400 to-purple-500',
      4: 'from-amber-400 to-yellow-500',
      5: 'from-pink-400 to-rose-400'
    }
    return colors[level] || 'from-gray-500 to-gray-600'
  }

  const handlePieceAdded = () => {
    setShowAddDialog(false)
    // Recharger la page pour voir le nouveau morceau
    window.location.reload()
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 py-4 md:space-y-10 md:py-8">
      {/* Header avec bouton Ajouter */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="eyebrow mb-2">Morceaux</p>
          <h1 className="font-display text-4xl tracking-tight text-[#f2efe8] md:text-5xl">
            Ta <span className="accent-brass">bibliothèque</span>.
          </h1>
          <p className="text-dim mt-3">
            Des morceaux adaptés à ton niveau, jouables en mode Practice
          </p>
        </div>

        <button
          onClick={() => setShowAddDialog(true)}
          className="btn-accent inline-flex items-center gap-2 self-start rounded-2xl px-6 py-3 font-bold sm:self-auto"
        >
          <PlusCircle className="h-5 w-5" />
          Ajouter un morceau
        </button>
      </div>

      {/* Dialog d'ajout de morceau */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="panel-strong max-h-[90vh] max-w-3xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#f2efe8]">Ajouter un morceau</DialogTitle>
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
              <IMSLPSearch onPieceAdded={handlePieceAdded} />
            </TabsContent>

            <TabsContent value="pianosnap" className="mt-4">
              <PianoSnapSearch />
            </TabsContent>

            <TabsContent value="upload" className="mt-4">
              <AudioUpload onSuccess={handlePieceAdded} />
            </TabsContent>

            <TabsContent value="files" className="mt-4">
              <div className="glass rounded-xl p-6 text-center">
                <p className="text-dim">
                  Fonctionnalité à venir... (Phase 3)
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Filters */}
      <div className="panel rounded-2xl p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="text-faint h-4 w-4" />
            <span className="text-dim text-sm font-semibold">Filtrer par niveau :</span>
          </div>
          <button
            onClick={() => setSelectedLevel(null)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
              selectedLevel === null ? 'btn-accent' : 'btn-ghost text-dim'
            }`}
          >
            Tous
          </button>
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                selectedLevel === level ? 'btn-accent' : 'btn-ghost text-dim'
              }`}
            >
              Niveau {level}
            </button>
          ))}

          <span className="mx-2 h-5 w-px bg-white/10" aria-hidden />

          {([['classical', 'Classique'], ['traditional', 'Traditionnel']] as const).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(selectedCategory === id ? null : id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                selectedCategory === id ? 'btn-accent' : 'btn-ghost text-dim'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">
            Tous
            {pieces.length > 0 && (
              <span className="badge-brass ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold">
                {pieces.length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="in-progress">
            En cours
            {inProgressCount > 0 && (
              <span className="badge-brass ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold">
                {inProgressCount}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="mastered">
            Maîtrisés
            {masteredCount > 0 && (
              <span className="badge-stage ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold">
                {masteredCount}
              </span>
            )}
          </TabsTrigger>
        </TabsList>

        {(['all', 'in-progress', 'mastered'] as const).map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-6">
            {filteredPieces.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPieces.map((piece) => (
                  <PieceCard key={piece.id} piece={piece} getLevelColor={getLevelColor} getDifficultyColor={getDifficultyColor} />
                ))}
              </div>
            ) : (
              <EmptyState tab={tab} />
            )}
          </TabsContent>
        ))}
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
    <div className="panel panel-hover group cursor-pointer overflow-hidden rounded-2xl">
      <div className="relative">
        {piece.thumbnail ? (
          <div className="relative h-48 overflow-hidden">
            <img
              src={piece.thumbnail}
              alt={piece.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/70 to-transparent" />
          </div>
        ) : (
          <div className="relative flex h-48 items-center justify-center overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${getLevelColor(piece.level)} opacity-[0.16]`} />
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(320px 130px at 50% 0%, rgba(255,255,255,0.10), transparent 70%)',
              }}
            />
            <Music className="text-dim h-16 w-16 opacity-60" />
          </div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`inline-flex items-center rounded-full bg-gradient-to-r px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0a0a0e] ${getLevelColor(piece.level)}`}>
            Niveau {piece.level}
          </span>
          <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${getDifficultyColor(piece.difficulty)}`}>
            {piece.difficulty === 'easy' ? 'Facile' :
             piece.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
          </span>
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <h3 className="text-lg font-bold text-[#f2efe8]">{piece.title}</h3>
          <p className="text-dim text-sm">{piece.composer}</p>
        </div>

        <div className="text-faint flex items-center gap-3 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {piece.duration} min
          </div>
          {piece.status === 'mastered' && (
            <div className="accent-green flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4" />
              Maîtrisé
            </div>
          )}
        </div>

        {piece.status !== 'not_started' && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-faint">Progression</span>
              <span className="font-bold tabular-nums text-[#f2efe8]">{piece.progress}%</span>
            </div>
            <OctaveProgress value={piece.progress} />
          </div>
        )}

        <Link href={`/morceaux/${piece.id}`} className="block w-full">
          <span className="btn-accent inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold">
            <PlayCircle className="h-4 w-4" />
            {piece.status === 'not_started' ? 'Commencer' :
             piece.status === 'in_progress' ? 'Continuer' : 'Revoir'}
          </span>
        </Link>
      </div>
    </div>
  )
}

function EmptyState({ tab }: { tab: string }) {
  const messages = {
    all: {
      icon: <Music className="text-faint mx-auto mb-4 h-20 w-20" />,
      title: 'Aucun morceau disponible',
      description: 'Ajoute ton premier morceau depuis IMSLP, un fichier audio ou YouTube.'
    },
    'in-progress': {
      icon: <PlayCircle className="text-faint mx-auto mb-4 h-20 w-20" />,
      title: 'Aucun morceau en cours',
      description: 'Commence à pratiquer un morceau pour le voir ici !'
    },
    mastered: {
      icon: <Star className="text-faint mx-auto mb-4 h-20 w-20" />,
      title: 'Aucun morceau maîtrisé',
      description: 'Continue à pratiquer pour maîtriser tes premiers morceaux ! 🎵'
    }
  }

  const message = messages[tab as keyof typeof messages] || messages.all

  return (
    <div className="panel rounded-2xl py-16 text-center">
      {message.icon}
      <h3 className="mb-2 text-xl font-bold text-[#f2efe8]">{message.title}</h3>
      <p className="text-dim mx-auto max-w-md">
        {message.description}
      </p>
    </div>
  )
}
