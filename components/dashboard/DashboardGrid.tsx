'use client'

import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  KeyboardSensor,
  useSensors,
  useSensor,
  closestCorners,
} from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'
import { useDashboardLayout } from '@/hooks/useDashboardLayout'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { DraggableWidget } from './DraggableWidget'
import { GuideProgressionWidget } from './widgets/GuideProgressionWidget'
import { AssistantPianelyWidget } from './widgets/AssistantPianelyWidget'
import { ObjectifQuotidienWidget } from './widgets/ObjectifQuotidienWidget'
import { BadgesWidget } from './widgets/BadgesWidget'
import { MorceauxEnCoursWidget } from './widgets/MorceauxEnCoursWidget'
import { handleDragEndCollision } from '@/lib/dashboard/collision'
import { TimelineDay, Morceau, Badge } from '@/types/dashboard'

interface DashboardGridProps {
  weekTimeline: TimelineDay[]
  morceaux: Morceau[]
  badges: Badge[]
}

export function DashboardGrid({ weekTimeline, morceaux, badges }: DashboardGridProps) {
  const { layout, updateLayout } = useDashboardLayout()
  const isMobile = useIsMobile()

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required before drag starts
      },
    }),
    useSensor(KeyboardSensor)
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over || active.id === over.id) return

    // Calculate new layout with collision resolution
    const newLayout = handleDragEndCollision(
      active.id as string,
      over.id as string,
      layout
    )

    updateLayout(newLayout)
  }

  // Render widget based on ID
  const renderWidget = (widgetId: string) => {
    switch (widgetId) {
      case 'guide-progression':
        return <GuideProgressionWidget weekTimeline={weekTimeline} />
      case 'assistant-pianely':
        return <AssistantPianelyWidget />
      case 'objectif-quotidien':
        return <ObjectifQuotidienWidget />
      case 'badges':
        return <BadgesWidget badges={badges} />
      case 'morceaux-en-cours':
        return <MorceauxEnCoursWidget morceaux={morceaux} />
      default:
        return null
    }
  }

  // Mobile layout: Stack widgets vertically, no drag
  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        {layout
          .sort((a, b) => a.y - b.y || a.x - b.x)
          .map((widget) => (
            <div key={widget.id}>{renderWidget(widget.id)}</div>
          ))}
      </div>
    )
  }

  // Desktop layout: Grid with drag & drop
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={layout.map((w) => w.id)} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
          {layout.map((widget) => (
            <DraggableWidget key={widget.id} id={widget.id} layout={widget}>
              {renderWidget(widget.id)}
            </DraggableWidget>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
