'use client'

import { useState, useEffect } from 'react'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, rectSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Piano, TrendingUp, Clock, Target, Music, Award, ArrowRight, BookOpen, GripVertical } from 'lucide-react'
import Link from 'next/link'

interface Widget {
  id: string
  component: React.ReactNode
  className: string
}

function SortableWidget({ id, children, className }: { id: string; children: React.ReactNode; className: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} className={className}>
      <div className="relative group">
        <div
          {...attributes}
          {...listeners}
          className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing"
        >
          <GripVertical className="w-4 h-4 text-white" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default function HomePage() {
  const [widgets, setWidgets] = useState<Widget[]>([])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  useEffect(() => {
    const savedOrder = localStorage.getItem('widgetOrder')
    if (savedOrder) {
      try {
        const order = JSON.parse(savedOrder)
        setWidgets(order.map((id: string) => defaultWidgets.find(w => w.id === id)!).filter(Boolean))
      } catch {
        setWidgets(defaultWidgets)
      }
    } else {
      setWidgets(defaultWidgets)
    }
  }, [])

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setWidgets((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)
        const newOrder = arrayMove(items, oldIndex, newIndex)

        localStorage.setItem('widgetOrder', JSON.stringify(newOrder.map(w => w.id)))
        return newOrder
      })
    }
  }

  return (
    <main className="min-h-screen lg:pl-28">
      <div className="p-6 lg:p-8 max-w-[1800px]">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Tableau de bord</h1>
          <p className="text-[#b4c6e7]">Survole les widgets et clique sur <GripVertical className="inline w-4 h-4" /> pour les réorganiser</p>
        </div>

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={widgets.map(w => w.id)} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {widgets.map((widget) => (
                <SortableWidget key={widget.id} id={widget.id} className={widget.className}>
                  {widget.component}
                </SortableWidget>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </main>
  )
}

const defaultWidgets: Widget[] = [
  {
    id: 'overview',
    className: 'md:col-span-2 lg:col-span-2',
    component: (
      <GlassCard variant="elevated" padding="lg" className="h-full">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">Vue d'ensemble</h2>
          <p className="text-sm text-[#b4c6e7]">Ta progression cette semaine</p>
        </div>

        <div className="h-48 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-6">
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
    className: '',
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
        <div className="mt-6 pt-4 border-t border-white/10">
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
    className: '',
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
        <div className="text-center py-6">
          <div className="text-4xl font-bold gradient-text mb-2">0 min</div>
          <p className="text-xs text-[#b4c6e7]">Aujourd'hui</p>
        </div>
      </GlassCard>
    )
  },
  {
    id: 'parcours',
    className: 'md:col-span-2 lg:col-span-2',
    component: (
      <GlassCard variant="elevated" padding="lg" className="h-full">
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
    className: '',
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
        <div className="grid grid-cols-3 gap-2 mb-4">
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
    className: '',
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
    className: 'md:col-span-2 lg:col-span-4',
    component: (
      <GlassCard variant="elevated" padding="xl" className="h-full text-center">
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
