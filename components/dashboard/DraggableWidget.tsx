'use client'

import { CSSProperties, ReactNode } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { WidgetLayout } from '@/types/dashboard'
import { calculateGridPosition } from '@/lib/dashboard/grid-utils'
import { WidgetDragHandle } from './WidgetDragHandle'

interface DraggableWidgetProps {
  id: string
  layout: WidgetLayout
  children: ReactNode
  isDragDisabled?: boolean
}

export function DraggableWidget({
  id,
  layout,
  children,
  isDragDisabled = false,
}: DraggableWidgetProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    disabled: isDragDisabled,
  })

  const gridPosition = calculateGridPosition(layout)

  const style: CSSProperties = {
    ...gridPosition,
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group"
    >
      {!isDragDisabled && (
        <div {...attributes} {...listeners}>
          <WidgetDragHandle />
        </div>
      )}
      {children}
    </div>
  )
}
