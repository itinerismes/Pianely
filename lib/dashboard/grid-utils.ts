import { CSSProperties } from 'react'
import { WidgetLayout } from '@/types/dashboard'
import { GRID_CONFIG } from './constants'

/**
 * Calculate CSS Grid position from widget layout
 */
export function calculateGridPosition(layout: WidgetLayout): CSSProperties {
  return {
    gridColumn: `${layout.x + 1} / span ${layout.w}`,
    gridRow: `${layout.y + 1} / span ${layout.h}`,
  }
}

/**
 * Check if two widgets overlap
 */
export function widgetsOverlap(a: WidgetLayout, b: WidgetLayout): boolean {
  const aRight = a.x + a.w
  const aBottom = a.y + a.h
  const bRight = b.x + b.w
  const bBottom = b.y + b.h

  return !(aRight <= b.x || a.x >= bRight || aBottom <= b.y || a.y >= bBottom)
}

/**
 * Find all widgets that collide with the given widget
 */
export function findCollisions(
  widget: WidgetLayout,
  allWidgets: WidgetLayout[]
): string[] {
  const collisions: string[] = []

  for (const other of allWidgets) {
    if (other.id === widget.id) continue
    if (widgetsOverlap(widget, other)) {
      collisions.push(other.id)
    }
  }

  return collisions
}

/**
 * Find the lowest Y position occupied by any widget
 */
export function getMaxY(widgets: WidgetLayout[]): number {
  let maxY = 0
  for (const widget of widgets) {
    const bottom = widget.y + widget.h
    if (bottom > maxY) {
      maxY = bottom
    }
  }
  return maxY
}

/**
 * Sort widgets by Y position, then X position (top to bottom, left to right)
 */
export function sortWidgets(widgets: WidgetLayout[]): WidgetLayout[] {
  return [...widgets].sort((a, b) => {
    if (a.y !== b.y) return a.y - b.y
    return a.x - b.x
  })
}

/**
 * Compact the layout by moving widgets up to fill gaps
 */
export function compactLayout(widgets: WidgetLayout[]): WidgetLayout[] {
  const sorted = sortWidgets(widgets)
  const result: WidgetLayout[] = []

  for (const widget of sorted) {
    let newY = 0

    // Try to move widget as high as possible
    while (newY < widget.y) {
      const testWidget = { ...widget, y: newY }
      const hasCollision = result.some(w => widgetsOverlap(testWidget, w))

      if (hasCollision) {
        newY++
      } else {
        break
      }
    }

    result.push({ ...widget, y: newY })
  }

  return result
}

/**
 * Validate widget position (within grid bounds)
 */
export function isValidPosition(widget: WidgetLayout): boolean {
  if (widget.x < 0 || widget.y < 0) return false
  if (widget.x + widget.w > GRID_CONFIG.columns) return false
  if (widget.minW && widget.w < widget.minW) return false
  if (widget.minH && widget.h < widget.minH) return false
  return true
}
