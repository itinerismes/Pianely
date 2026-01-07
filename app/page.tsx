'use client'

import { useState, useEffect } from 'react'
import { DndContext, DragEndEvent, useSensor, useSensors, PointerSensor, DragOverlay } from '@dnd-kit/core'
import { useDraggable } from '@dnd-kit/core'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { TrendingUp, Clock, Target, Music, Award, ArrowRight, BookOpen, GripVertical } from 'lucide-react'
import Link from 'next/link'

interface WidgetPosition {
  id: string
  x: number
  y: number
  w: number
  h: number
}

interface Widget extends WidgetPosition {
  component: React.ReactNode
}

function DraggableWidget({ id, children, x, y, w, h }: { id: string; children: React.ReactNode; x: number; y: number; w: number; h: number }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
  })

  const style = {
    gridColumn: `${x + 1} / span ${w}`,
    gridRow: `${y + 1} / span ${h}`,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} className="relative group">
      <div
        {...attributes}
        {...listeners}
        className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="w-4 h-4 text-white" />
      </div>
      {children}
    </div>
  )
}

const GRID_COLS = 12
const GRID_ROWS = 20

export default function HomePage() {
  const [widgets, setWidgets] = useState<Widget[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  useEffect(() => {
    const savedPositions = localStorage.getItem('widgetPositions')
    if (savedPositions) {
      try {
        const positions: WidgetPosition[] = JSON.parse(savedPositions)
        const restoredWidgets = positions.map(pos => {
          const defaultWidget = defaultWidgets.find(w => w.id === pos.id)
          return defaultWidget ? { ...defaultWidget, ...pos } : null
        }).filter(Boolean) as Widget[]

        if (restoredWidgets.length > 0) {
          setWidgets(restoredWidgets)
          return
        }
      } catch (e) {
        console.error('Failed to load positions', e)
      }
    }
    setWidgets(defaultWidgets)
  }, [])

  const handleDragStart = (event: DragEndEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null)
    const { active, delta } = event

    if (!delta) return

    const cellWidth = 80
    const cellHeight = 180
    const deltaX = Math.round(delta.x / cellWidth)
    const deltaY = Math.round(delta.y / cellHeight)

    if (deltaX === 0 && deltaY === 0) return

    setWidgets(prevWidgets => {
      const newWidgets = prevWidgets.map(widget => {
        if (widget.id === active.id) {
          const newX = Math.max(0, Math.min(GRID_COLS - widget.w, widget.x + deltaX))
          const newY = Math.max(0, Math.min(GRID_ROWS - widget.h, widget.y + deltaY))
          return { ...widget, x: newX, y: newY }
        }
        return widget
      })

      const positions = newWidgets.map(({ id, x, y, w, h }) => ({ id, x, y, w, h }))
      localStorage.setItem('widgetPositions', JSON.stringify(positions))

      return newWidgets
    })
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  return (
    <main className="min-h-screen">
      <div className="p-6 lg:p-12 max-w-[1800px]">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Tableau de bord</h1>
          <p className="text-[#b4c6e7]">Glisse les widgets <GripVertical className="inline w-4 h-4" /> pour les placer librement dans la grille</p>
        </div>

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${GRID_ROWS}, 180px)`,
            }}
          >
            {widgets.map((widget) => (
              <DraggableWidget
                key={widget.id}
                id={widget.id}
                x={widget.x}
                y={widget.y}
                w={widget.w}
                h={widget.h}
              >
                {widget.component}
              </DraggableWidget>
            ))}
          </div>

          <DragOverlay>
            {activeId ? (
              <div className="opacity-50">
                {widgets.find(w => w.id === activeId)?.component}
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </main>
  )
}

const defaultWidgets: Widget[] = [
  {
    id: 'overview',
    x: 0,
    y: 0,
    w: 6,
    h: 2,
    component: (
      <GlassCard variant="elevated" padding="lg" className="h-full">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">Vue d'ensemble</h2>
          <p className="text-sm text-[#b4c6e7]">Ta progression cette semaine</p>
        </div>

        <div className="h-32 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-6">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-[#667eea] mx-auto mb-3" />
            <p className="text-sm text-[#b4c6e7]">Graphique de progression</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-xl bg-white/5">
            <div className="text-2xl font-bold gradient-text mb-1">0h</div>
            <div className="text-xs text-[#b4c6e7]">Pratique</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-white/5">
            <div className="text-2xl font-bold gradient-text mb-1">0</div>
            <div className="text-xs text-[#b4c6e7]">Leçons</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-white/5">
            <div className="text-2xl font-bold gradient-text mb-1">0</div>
            <div className="text-xs text-[#b4c6e7]">Série</div>
          </div>
        </div>
      </GlassCard>
    )
  },
  {
    id: 'level',
    x: 6,
    y: 0,
    w: 3,
    h: 1,
    component: (
      <GlassCard variant="elevated" padding="lg" className="h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Niveau</h3>
            <p className="text-xs text-[#b4c6e7]">Débutant</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#b4c6e7]">Progression</span>
            <span className="text-white font-medium">0%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full" style={{width: '0%'}}></div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-1">1</div>
            <div className="text-xs text-[#b4c6e7]">Niveau actuel</div>
          </div>
        </div>
      </GlassCard>
    )
  },
  {
    id: 'practice',
    x: 9,
    y: 0,
    w: 3,
    h: 1,
    component: (
      <GlassCard variant="elevated" padding="lg" className="h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Pratique</h3>
            <p className="text-xs text-[#b4c6e7]">Objectif: 15 min</p>
          </div>
        </div>
        <div className="text-center py-4">
          <div className="text-4xl font-bold gradient-text mb-2">0 min</div>
          <p className="text-xs text-[#b4c6e7]">Aujourd'hui</p>
        </div>
      </GlassCard>
    )
  },
  {
    id: 'parcours',
    x: 0,
    y: 2,
    w: 6,
    h: 2,
    component: (
      <GlassCard variant="elevated" padding="lg" className="h-full overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Parcours</h3>
            <p className="text-sm text-[#b4c6e7]">5 niveaux progressifs</p>
          </div>
          <Link href="/parcours">
            <GlassButton variant="outline" size="sm">
              <BookOpen className="w-4 h-4" />
              Voir tout
            </GlassButton>
          </Link>
        </div>

        <div className="space-y-3">
          {[
            { level: 1, name: 'Découverte', lessons: 7, locked: false },
            { level: 2, name: 'Fondations', lessons: 8, locked: true },
            { level: 3, name: 'Progression', lessons: 7, locked: true },
          ].map((level) => (
            <div
              key={level.level}
              className={cn(
                'p-4 rounded-xl border transition-all',
                level.locked
                  ? 'bg-white/[0.02] border-white/5 opacity-50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'w-10 h-10 rounded-lg flex items-center justify-center font-bold',
                    level.locked
                      ? 'bg-white/5 text-[#6b7fa8]'
                      : 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white'
                  )}>
                    {level.level}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{level.name}</div>
                    <div className="text-xs text-[#b4c6e7]">{level.lessons} leçons</div>
                  </div>
                </div>
                {!level.locked && (
                  <GlassButton variant="outline" size="sm">
                    Commencer
                  </GlassButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    )
  },
  {
    id: 'badges',
    x: 6,
    y: 1,
    w: 3,
    h: 1,
    component: (
      <GlassCard variant="elevated" padding="lg" className="h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Badges</h3>
            <p className="text-xs text-[#b4c6e7]">0 débloqués</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-square rounded-lg bg-white/5 flex items-center justify-center">
              <Award className="w-5 h-5 text-[#6b7fa8]" />
            </div>
          ))}
        </div>
      </GlassCard>
    )
  },
  {
    id: 'morceaux',
    x: 9,
    y: 1,
    w: 3,
    h: 1,
    component: (
      <GlassCard variant="elevated" padding="lg" className="h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Morceaux</h3>
            <p className="text-xs text-[#b4c6e7]">À apprendre</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <div className="font-medium text-white text-sm mb-1">Au clair de la lune</div>
            <div className="text-xs text-[#b4c6e7]">Niveau 1</div>
          </div>
          <div className="p-3 rounded-lg bg-white/5 opacity-50">
            <div className="font-medium text-white text-sm mb-1">Frère Jacques</div>
            <div className="text-xs text-[#b4c6e7]">Niveau 1</div>
          </div>
        </div>
      </GlassCard>
    )
  },
  {
    id: 'cta',
    x: 0,
    y: 4,
    w: 12,
    h: 1,
    component: (
      <GlassCard variant="elevated" padding="xl" className="h-full text-center flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-white mb-3">Prêt à commencer ?</h3>
        <p className="text-[#b4c6e7] mb-6">Crée ton compte gratuit et démarre ton apprentissage</p>
        <Link href="/inscription" className="inline-block">
          <GlassButton variant="primary" size="lg">
            Créer mon compte
            <ArrowRight className="h-5 w-5" />
          </GlassButton>
        </Link>
      </GlassCard>
    )
  },
]

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
