import { WidgetLayout } from '@/types/dashboard'
import { widgetsOverlap, sortWidgets, compactLayout } from './grid-utils'

/**
 * Reposition widgets to resolve collisions using cascade algorithm
 * When a widget is moved, any colliding widgets are pushed down
 */
export function repositionOnCollision(
  movedWidget: WidgetLayout,
  existingWidgets: WidgetLayout[]
): WidgetLayout[] {
  const result: WidgetLayout[] = []
  const processed = new Set<string>()

  // Add the moved widget first
  result.push(movedWidget)
  processed.add(movedWidget.id)

  // Process all other widgets
  const sortedWidgets = sortWidgets(existingWidgets.filter(w => w.id !== movedWidget.id))

  for (const widget of sortedWidgets) {
    let updatedWidget = { ...widget }
    let hasCollision = true
    let attempts = 0
    const maxAttempts = 50 // Prevent infinite loop

    // Keep moving down until no collision
    while (hasCollision && attempts < maxAttempts) {
      hasCollision = result.some(w => widgetsOverlap(updatedWidget, w))

      if (hasCollision) {
        updatedWidget = { ...updatedWidget, y: updatedWidget.y + 1 }
        attempts++
      }
    }

    result.push(updatedWidget)
    processed.add(updatedWidget.id)
  }

  // Compact the layout to remove unnecessary gaps
  return compactLayout(result)
}

/**
 * Handle drag end - calculate new position and resolve collisions
 */
export function handleDragEndCollision(
  activeId: string,
  overId: string | null,
  currentLayout: WidgetLayout[]
): WidgetLayout[] {
  if (!overId || activeId === overId) {
    return currentLayout
  }

  const activeWidget = currentLayout.find(w => w.id === activeId)
  const overWidget = currentLayout.find(w => w.id === overId)

  if (!activeWidget || !overWidget) {
    return currentLayout
  }

  // Swap positions
  const newActiveWidget: WidgetLayout = {
    ...activeWidget,
    x: overWidget.x,
    y: overWidget.y,
  }

  const otherWidgets = currentLayout.filter(w => w.id !== activeId)

  // Resolve collisions
  return repositionOnCollision(newActiveWidget, otherWidgets)
}

/**
 * Prevent widgets from moving outside grid bounds
 */
export function constrainToGrid(
  widget: WidgetLayout,
  maxColumns: number = 12
): WidgetLayout {
  const newWidget = { ...widget }

  // Constrain X
  if (newWidget.x < 0) newWidget.x = 0
  if (newWidget.x + newWidget.w > maxColumns) {
    newWidget.x = maxColumns - newWidget.w
  }

  // Constrain Y (don't allow negative)
  if (newWidget.y < 0) newWidget.y = 0

  return newWidget
}
