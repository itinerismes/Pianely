export interface WidgetLayout {
  id: string
  x: number    // Grid column (0-11)
  y: number    // Grid row (0-based)
  w: number    // Width in columns (1-12)
  h: number    // Height in rows
  minW?: number
  minH?: number
}

export const DEFAULT_LAYOUT: WidgetLayout[] = [
  { id: 'guide-progression', x: 0, y: 0, w: 8, h: 2, minW: 6, minH: 2 },
  { id: 'assistant-pianely', x: 8, y: 0, w: 4, h: 2, minW: 3, minH: 2 },
  { id: 'objectif-quotidien', x: 8, y: 2, w: 4, h: 1, minW: 3, minH: 1 },
  { id: 'badges', x: 8, y: 3, w: 4, h: 2, minW: 3, minH: 1 },
  { id: 'morceaux-en-cours', x: 0, y: 2, w: 8, h: 2, minW: 6, minH: 1 },
]

// Data types for widgets
export interface TimelineDay {
  day: string
  type: 'découverte' | 'technique' | 'morceau' | 'révision'
  niveau: number
  durée: string
  status: 'completed' | 'in_progress' | 'pending'
}

export interface Morceau {
  titre: string
  niveau: number
  status: 'not_started' | 'in_progress' | 'mastered'
  progress: number
}

export interface Badge {
  id: number
  unlocked: boolean
  icon: string
}
