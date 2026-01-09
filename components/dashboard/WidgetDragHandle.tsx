'use client'

import { GripVertical } from 'lucide-react'

export function WidgetDragHandle() {
  return (
    <button
      className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-violet-100 hover:bg-violet-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing z-10"
      aria-label="Drag to reposition"
      type="button"
    >
      <GripVertical className="w-4 h-4 text-violet-600" />
    </button>
  )
}
