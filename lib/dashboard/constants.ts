import { WidgetLayout } from '@/types/dashboard'

export const GRID_CONFIG = {
  columns: 12,
  rowHeight: 200, // px
  gap: 16,        // px (Tailwind gap-4 = 1rem = 16px)
}

export const DEFAULT_LAYOUT: WidgetLayout[] = [
  { id: 'guide-progression', x: 0, y: 0, w: 8, h: 2, minW: 6, minH: 2 },
  { id: 'assistant-pianely', x: 8, y: 0, w: 4, h: 2, minW: 3, minH: 2 },
  { id: 'objectif-quotidien', x: 8, y: 2, w: 4, h: 1, minW: 3, minH: 1 },
  { id: 'badges', x: 8, y: 3, w: 4, h: 2, minW: 3, minH: 1 },
  { id: 'morceaux-en-cours', x: 0, y: 2, w: 8, h: 2, minW: 6, minH: 1 },
]

export const MOBILE_LAYOUT: WidgetLayout[] = [
  { id: 'guide-progression', x: 0, y: 0, w: 12, h: 2 },
  { id: 'assistant-pianely', x: 0, y: 2, w: 12, h: 2 },
  { id: 'objectif-quotidien', x: 0, y: 4, w: 12, h: 1 },
  { id: 'morceaux-en-cours', x: 0, y: 5, w: 12, h: 2 },
  { id: 'badges', x: 0, y: 7, w: 12, h: 1 },
]

export const TABLET_LAYOUT: WidgetLayout[] = [
  { id: 'guide-progression', x: 0, y: 0, w: 8, h: 2 },
  { id: 'assistant-pianely', x: 0, y: 2, w: 8, h: 2 },
  { id: 'objectif-quotidien', x: 8, y: 0, w: 4, h: 1 },
  { id: 'badges', x: 8, y: 1, w: 4, h: 2 },
  { id: 'morceaux-en-cours', x: 0, y: 4, w: 12, h: 1 },
]
