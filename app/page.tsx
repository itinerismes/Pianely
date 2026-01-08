'use client'

import { useState, useEffect, useRef } from 'react'
import {
  DndContext,
  DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
  DragOverlay,
} from '@dnd-kit/core'
import { useDraggable } from '@dnd-kit/core'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import {
  TrendingUp,
  Clock,
  Target,
  Music,
  Award,
  ArrowRight,
  BookOpen,
  GripVertical,
  RotateCcw,
} from 'lucide-react'
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

function DraggableWidget({
  id,
  children,
  x,
  y,
  w,
  h,
}: {
  id: string
  children: React.ReactNode
  x: number
  y: number
  w: number
  h: number
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
  })

  const style: React.CSSProperties = {
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
  const gridRef = useRef<HTMLDivElement>(null)

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

        const isValid = positions.length === defaultWidgets.length

        if (isValid) {
          const restoredWidgets = positions
            .map((pos) => {
              const defaultWidget = defaultWidgets.find((w) => w.id === pos.id)
              return defaultWidget ? { ...defaultWidget, ...pos } : null
            })
            .filter(Boolean) as Widget[]

          if (restoredWidgets.length > 0) {
            setWidgets(restoredWidgets)
            return
          }
        } else {
          localStorage.removeItem('widgetPositions')
        }
      } catch (e) {
        console.error('Failed to load positions', e)
        localStorage.removeItem('widgetPositions')
      }
    }
    setWidgets(defaultWidgets)
  }, [])

  const handleDragStart = (event: DragEndEvent) => {
    setActiveId(event.active.id as string)
  }

  const checkCollision = (widget1: WidgetPosition, widget2: WidgetPosition): boolean => {
    return !(
      widget1.x >= widget2.x + widget2.w ||
      widget1.x + widget1.w <= widget2.x ||
      widget1.y >= widget2.y + widget2.h ||
      widget1.y + widget1.h <= widget2.y
    )
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null)
    const { active, delta } = event

    if (!delta || !gridRef.current) return

    const gridRect = gridRef.current.getBoundingClientRect()
    const cellWidth = gridRect.width / GRID_COLS
    const cellHeight = 160 + 24

    const deltaX = Math.round(delta.x / cellWidth)
    const deltaY = Math.round(delta.y / cellHeight)

    if (deltaX === 0 && deltaY === 0) return

    setWidgets((prevWidgets) => {
      const draggedWidget = prevWidgets.find((w) => w.id === active.id)
      if (!draggedWidget) return prevWidgets

      const originalX = draggedWidget.x
      const originalY = draggedWidget.y

      const desiredX = Math.max(
        0,
        Math.min(GRID_COLS - draggedWidget.w, draggedWidget.x + deltaX)
      )
      const desiredY = Math.max(
        0,
        Math.min(GRID_ROWS - draggedWidget.h, draggedWidget.y + deltaY)
      )

      const desiredPosition: WidgetPosition = {
        id: draggedWidget.id,
        x: desiredX,
        y: desiredY,
        w: draggedWidget.w,
        h: draggedWidget.h,
      }

      const otherWidgets = prevWidgets.filter((w) => w.id !== active.id)
      let hasCollision = false

      for (const other of otherWidgets) {
        if (checkCollision(desiredPosition, other)) {
          hasCollision = true
          break
        }
      }

      let finalPosition = desiredPosition
      if (hasCollision) {
        finalPosition = { ...desiredPosition, x: originalX, y: originalY }
      }

      const newWidgets = prevWidgets.map((widget) => {
        if (widget.id === active.id) {
          return { ...widget, x: finalPosition.x, y: finalPosition.y }
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

  const resetPositions = () => {
    localStorage.removeItem('widgetPositions')
    setWidgets(defaultWidgets)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f1629] to-[#1a1f35] pt-20">
      <div className="p-4 lg:p-8 max-w-[1800px] mx-auto">
        <div className="mb-6 flex justify-end">
          <GlassButton
            variant="primary"
            size="sm"
            onClick={resetPositions}
            className="whitespace-nowrap"
          >
            <RotateCcw className="w-4 h-4" />
            Réinitialiser
          </GlassButton>
        </div>

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <div
            ref={gridRef}
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
              gridAutoRows: 'minmax(160px, auto)',
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
                {widgets.find((w) => w.id === activeId)?.component}
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
    w: 8,
    h: 2,
    component: (
      <GlassCard variant="elevated" padding="md" className="h-full">
        <div className="mb-4 space-y-1">
          <h2 className="text-lg font-bold text-white">Vue d&apos;ensemble</h2>
          <p className="text-sm text-[#b4c6e7]/70">Ta progression cette semaine</p>
        </div>

        <div className="h-24 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-4">
          <div className="text-center">
            <TrendingUp className="h-10 w-10 text-[#667eea] mx-auto mb-2" />
            <p className="text-xs text-[#b4c6e7]/80">Graphique de progression</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
            <div className="text-2xl font-bold gradient-text mb-1">0h</div>
            <div className="text-xs text-[#b4c6e7]/70">Pratique</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
            <div className="text-2xl font-bold gradient-text mb-1">0</div>
            <div className="text-xs text-[#b4c6e7]/70">Leçons</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
            <div className="text-2xl font-bold gradient-text mb-1">0</div>
            <div className="text-xs text-[#b4c6e7]/70">Série</div>
          </div>
        </div>
      </GlassCard>
    ),
  },

  {
    id: 'level',
    x: 8,
    y: 0,
    w: 2,
    h: 1,
    component: (
      <GlassCard variant="elevated" padding="md" className="h-full flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Niveau</h3>
            <p className="text-xs text-[#b4c6e7]/70">Débutant</p>
          </div>
        </div>
        <div className="space-y-2 mb-3">
          <div className="flex justify-between text-sm">
            <span className="text-[#b4c6e7]/70">Progression</span>
            <span className="text-white font-semibold">0%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full"
              style={{ width: '0%' }}
            />
          </div>
        </div>
        <div className="text-center pt-3 border-t border-white/10">
          <div className="text-3xl font-bold gradient-text mb-1">1</div>
          <div className="text-xs text-[#b4c6e7]/70">Niveau actuel</div>
        </div>
      </GlassCard>
    ),
  },
  {
    id: 'practice',
    x: 10,
    y: 0,
    w: 2,
    h: 1,
    component: (
      <GlassCard variant="elevated" padding="md" className="h-full flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Pratique</h3>
            <p className="text-xs text-[#b4c6e7]/70">Objectif: 15 min</p>
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold gradient-text mb-1">0 min</div>
          <p className="text-xs text-[#b4c6e7]/70">Aujourd&apos;hui</p>
        </div>
      </GlassCard>
    ),
  },

  {
    id: 'badges',
    x: 8,
    y: 1,
    w: 4,
    h: 1,
    component: (
      <GlassCard variant="elevated" padding="md" className="h-full flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Badges</h3>
            <p className="text-xs text-[#b4c6e7]/70">0 débloqués</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center"
            >
              <Award className="w-4 h-4 text-[#6b7fa8]/50" />
            </div>
          ))}
        </div>
      </GlassCard>
    ),
  },

  {
    id: 'morceaux',
    x: 8,
    y: 2,
    w: 4,
    h: 1,
    component: (
      <GlassCard variant="elevated" padding="md" className="h-full flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Morceaux</h3>
            <p className="text-xs text-[#b4c6e7]/70">À apprendre</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:from-white/15 hover:to-white/10 transition-all cursor-pointer">
            <div className="font-semibold text-white text-sm mb-0.5">Au clair de la lune</div>
            <div className="text-xs text-[#b4c6e7]/70">Niveau 1</div>
          </div>
          <div className="p-3 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 opacity-50">
            <div className="font-semibold text-white text-sm mb-0.5">Frère Jacques</div>
            <div className="text-xs text-[#b4c6e7]/70">Niveau 1</div>
          </div>
        </div>
      </GlassCard>
    ),
  },

  {
    id: 'parcours',
    x: 0,
    y: 3,
    w: 12,
    h: 2,
    component: (
      <GlassCard variant="elevated" padding="md" className="h-full overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">Parcours</h3>
            <p className="text-sm text-[#b4c6e7]/70">5 niveaux progressifs</p>
          </div>
          <Link href="/parcours">
            <GlassButton variant="outline" size="sm">
              <BookOpen className="w-4 h-4" />
              Voir tout
            </GlassButton>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { level: 1, name: 'Découverte', lessons: 7, locked: false },
            { level: 2, name: 'Fondations', lessons: 8, locked: true },
            { level: 3, name: 'Progression', lessons: 7, locked: true },
          ].map((level) => (
            <div
              key={level.level}
              className={cn(
                'p-4 rounded-xl border transition-all flex flex-col items-center text-center',
                level.locked
                  ? 'bg-white/[0.02] border-white/5 opacity-50'
                  : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:from-white/15 hover:to-white/10 cursor-pointer'
              )}
            >
              <div
                className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mb-3',
                  level.locked
                    ? 'bg-white/5 text-[#6b7fa8]'
                    : 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white'
                )}
              >
                {level.level}
              </div>
              <div className="text-base font-bold text-white mb-1">{level.name}</div>
              <div className="text-xs text-[#b4c6e7]/70 mb-4">{level.lessons} leçons</div>
              {!level.locked && (
                <GlassButton variant="outline" size="sm" className="mt-auto">
                  Commencer
                </GlassButton>
              )}
            </div>
          ))}
        </div>
      </GlassCard>
    ),
  },

  {
    id: 'cta',
    x: 0,
    y: 5,
    w: 12,
    h: 1,
    component: (
      <GlassCard
        variant="elevated"
        padding="md"
        className="h-full text-center flex flex-col items-center justify-center bg-gradient-to-br from-white/10 to-white/5"
      >
        <h3 className="text-xl font-bold text-white mb-2">Prêt à commencer ?</h3>
        <p className="text-sm text-[#b4c6e7]/70 mb-4 max-w-xl">
          Crée ton compte gratuit et démarre ton apprentissage du piano
        </p>
        <Link href="/inscription" className="inline-block">
          <GlassButton variant="primary" size="md">
            Créer mon compte
            <ArrowRight className="h-4 w-4" />
          </GlassButton>
        </Link>
      </GlassCard>
    ),
  },
]

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
