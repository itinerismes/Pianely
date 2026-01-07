'use client'

import { useState, useEffect, useRef } from 'react'
import { DndContext, DragEndEvent, useSensor, useSensors, PointerSensor, DragOverlay } from '@dnd-kit/core'
import { useDraggable } from '@dnd-kit/core'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { TrendingUp, Clock, Target, Music, Award, ArrowRight, BookOpen, GripVertical, RotateCcw } from 'lucide-react'
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

        // Vérifier que les positions sont valides (pas de chevauchement)
        const isValid = positions.length === defaultWidgets.length

        if (isValid) {
          const restoredWidgets = positions.map(pos => {
            const defaultWidget = defaultWidgets.find(w => w.id === pos.id)
            return defaultWidget ? { ...defaultWidget, ...pos } : null
          }).filter(Boolean) as Widget[]

          if (restoredWidgets.length > 0) {
            setWidgets(restoredWidgets)
            return
          }
        } else {
          // Positions invalides, réinitialiser
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

  // Fonction pour vérifier si deux widgets se chevauchent
  const checkCollision = (widget1: WidgetPosition, widget2: WidgetPosition): boolean => {
    return !(
      widget1.x >= widget2.x + widget2.w ||
      widget1.x + widget1.w <= widget2.x ||
      widget1.y >= widget2.y + widget2.h ||
      widget1.y + widget1.h <= widget2.y
    )
  }

  // Fonction pour trouver une position valide sans collision
  const findValidPosition = (widget: WidgetPosition, otherWidgets: Widget[]): WidgetPosition => {
    let newX = widget.x
    let newY = widget.y
    let hasCollision = true
    let attempts = 0
    const maxAttempts = 100

    while (hasCollision && attempts < maxAttempts) {
      hasCollision = false
      const testWidget = { ...widget, x: newX, y: newY }

      for (const other of otherWidgets) {
        if (other.id !== widget.id && checkCollision(testWidget, other)) {
          hasCollision = true
          // Décaler le widget vers la droite ou vers le bas
          newX += 1
          if (newX + widget.w > GRID_COLS) {
            newX = 0
            newY += 1
          }
          if (newY + widget.h > GRID_ROWS) {
            // Revenir à la position d'origine si aucune position valide n'est trouvée
            newX = widget.x
            newY = widget.y
            hasCollision = false
          }
          break
        }
      }
      attempts++
    }

    return { ...widget, x: newX, y: newY }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null)
    const { active, delta } = event

    if (!delta || !gridRef.current) return

    // Calculer la taille réelle des cellules en fonction du conteneur
    const gridRect = gridRef.current.getBoundingClientRect()
    const cellWidth = gridRect.width / GRID_COLS
    const cellHeight = 200 + 32 // 200px de hauteur + 32px de gap (gap-8)

    const deltaX = Math.round(delta.x / cellWidth)
    const deltaY = Math.round(delta.y / cellHeight)

    if (deltaX === 0 && deltaY === 0) return

    setWidgets(prevWidgets => {
      const draggedWidget = prevWidgets.find(w => w.id === active.id)
      if (!draggedWidget) return prevWidgets

      // Sauvegarder la position d'origine
      const originalX = draggedWidget.x
      const originalY = draggedWidget.y

      // Calculer la nouvelle position souhaitée
      const desiredX = Math.max(0, Math.min(GRID_COLS - draggedWidget.w, draggedWidget.x + deltaX))
      const desiredY = Math.max(0, Math.min(GRID_ROWS - draggedWidget.h, draggedWidget.y + deltaY))

      const desiredPosition: WidgetPosition = {
        id: draggedWidget.id,
        x: desiredX,
        y: desiredY,
        w: draggedWidget.w,
        h: draggedWidget.h
      }

      // Vérifier les collisions avec d'autres widgets
      const otherWidgets = prevWidgets.filter(w => w.id !== active.id)
      let hasCollision = false

      for (const other of otherWidgets) {
        if (checkCollision(desiredPosition, other)) {
          hasCollision = true
          break
        }
      }

      // Si collision, revenir à la position d'origine (le widget ne bouge pas)
      let finalPosition = desiredPosition
      if (hasCollision) {
        finalPosition = { ...desiredPosition, x: originalX, y: originalY }
      }

      const newWidgets = prevWidgets.map(widget => {
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
    <main className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f1629] to-[#1a1f35]">
      <div className="p-6 lg:p-12 max-w-[1800px] mx-auto">
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Tableau de bord</h1>
              <p className="text-lg text-[#b4c6e7]/80 font-light">Glisse les widgets <GripVertical className="inline w-5 h-5" /> pour personnaliser ton espace</p>
            </div>
            <GlassButton variant="primary" size="lg" onClick={resetPositions} className="whitespace-nowrap shadow-xl">
              <RotateCcw className="w-5 h-5" />
              Réinitialiser
            </GlassButton>
          </div>
        </div>

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <div
            ref={gridRef}
            className="grid gap-8"
            style={{
              gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${GRID_ROWS}, 200px)`,
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
      <GlassCard variant="elevated" padding="xl" className="h-full">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">Vue d'ensemble</h2>
          <p className="text-base text-[#b4c6e7]/70 font-light">Ta progression cette semaine</p>
        </div>

        <div className="h-36 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-8 backdrop-blur-xl">
          <div className="text-center">
            <TrendingUp className="h-14 w-14 text-[#667eea] mx-auto mb-4" />
            <p className="text-sm text-[#b4c6e7]/80 font-light">Graphique de progression</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold gradient-text mb-2">0h</div>
            <div className="text-sm text-[#b4c6e7]/70 font-light">Pratique</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold gradient-text mb-2">0</div>
            <div className="text-sm text-[#b4c6e7]/70 font-light">Leçons</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold gradient-text mb-2">0</div>
            <div className="text-sm text-[#b4c6e7]/70 font-light">Série</div>
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
      <GlassCard variant="elevated" padding="xl" className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Target className="w-7 h-7 text-white" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">Niveau</h3>
            <p className="text-sm text-[#b4c6e7]/70 font-light">Débutant</p>
          </div>
        </div>
        <div className="space-y-3 mb-auto">
          <div className="flex justify-between text-base">
            <span className="text-[#b4c6e7]/70 font-light">Progression</span>
            <span className="text-white font-semibold">0%</span>
          </div>
          <div className="h-2.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full shadow-lg" style={{width: '0%'}}></div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">1</div>
            <div className="text-sm text-[#b4c6e7]/70 font-light">Niveau actuel</div>
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
      <GlassCard variant="elevated" padding="xl" className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Clock className="w-7 h-7 text-white" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">Pratique</h3>
            <p className="text-sm text-[#b4c6e7]/70 font-light">Objectif: 15 min</p>
          </div>
        </div>
        <div className="text-center flex-1 flex flex-col justify-center">
          <div className="text-5xl font-bold gradient-text mb-3">0 min</div>
          <p className="text-sm text-[#b4c6e7]/70 font-light">Aujourd'hui</p>
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
      <GlassCard variant="elevated" padding="xl" className="h-full overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">Parcours</h3>
            <p className="text-base text-[#b4c6e7]/70 font-light">5 niveaux progressifs</p>
          </div>
          <Link href="/parcours">
            <GlassButton variant="outline" size="md">
              <BookOpen className="w-5 h-5" />
              Voir tout
            </GlassButton>
          </Link>
        </div>

        <div className="space-y-4">
          {[
            { level: 1, name: 'Découverte', lessons: 7, locked: false },
            { level: 2, name: 'Fondations', lessons: 8, locked: true },
            { level: 3, name: 'Progression', lessons: 7, locked: true },
          ].map((level) => (
            <div
              key={level.level}
              className={cn(
                'p-5 rounded-2xl border transition-all',
                level.locked
                  ? 'bg-white/[0.02] border-white/5 opacity-50'
                  : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:from-white/15 hover:to-white/10 cursor-pointer backdrop-blur-sm'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg',
                    level.locked
                      ? 'bg-white/5 text-[#6b7fa8]'
                      : 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-lg shadow-purple-500/30'
                  )}>
                    {level.level}
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-white tracking-tight">{level.name}</div>
                    <div className="text-sm text-[#b4c6e7]/70 font-light">{level.lessons} leçons</div>
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
      <GlassCard variant="elevated" padding="xl" className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Award className="w-7 h-7 text-white" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">Badges</h3>
            <p className="text-sm text-[#b4c6e7]/70 font-light">0 débloqués</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <Award className="w-6 h-6 text-[#6b7fa8]/50" />
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
      <GlassCard variant="elevated" padding="xl" className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Music className="w-7 h-7 text-white" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">Morceaux</h3>
            <p className="text-sm text-[#b4c6e7]/70 font-light">À apprendre</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:from-white/15 hover:to-white/10 transition-all cursor-pointer backdrop-blur-sm">
            <div className="font-bold text-white text-base mb-1 tracking-tight">Au clair de la lune</div>
            <div className="text-sm text-[#b4c6e7]/70 font-light">Niveau 1</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 opacity-50">
            <div className="font-bold text-white text-base mb-1 tracking-tight">Frère Jacques</div>
            <div className="text-sm text-[#b4c6e7]/70 font-light">Niveau 1</div>
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
      <GlassCard variant="elevated" padding="xl" className="h-full text-center flex flex-col items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Prêt à commencer ?</h3>
        <p className="text-lg text-[#b4c6e7]/70 mb-8 font-light max-w-2xl">Crée ton compte gratuit et démarre ton apprentissage du piano dès aujourd'hui</p>
        <Link href="/inscription" className="inline-block">
          <GlassButton variant="primary" size="lg" className="shadow-2xl shadow-purple-500/30">
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
