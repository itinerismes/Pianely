// Lesson content types
export type ContentBlockType =
  | 'text'
  | 'image'
  | 'video'
  | 'interactive'
  | 'quiz'
  | 'practice'

export interface ContentBlock {
  id: string
  type: ContentBlockType
  data: any
}

export interface TextBlock extends ContentBlock {
  type: 'text'
  data: {
    content: string
    variant?: 'normal' | 'highlight' | 'warning' | 'tip'
  }
}

export interface ImageBlock extends ContentBlock {
  type: 'image'
  data: {
    src: string
    alt: string
    caption?: string
  }
}

export interface VideoBlock extends ContentBlock {
  type: 'video'
  data: {
    src: string
    thumbnail?: string
    duration?: string
  }
}

export interface QuizBlock extends ContentBlock {
  type: 'quiz'
  data: {
    question: string
    options: string[]
    correctAnswer: number
    explanation?: string
  }
}

export interface PracticeBlock extends ContentBlock {
  type: 'practice'
  data: {
    title: string
    description: string
    steps: string[]
    image?: string
  }
}

// Lesson metadata
export interface Lesson {
  id: string
  levelId: number
  lessonNumber: number
  title: string
  description: string
  duration: number // in minutes
  objectives: string[]
  content: ContentBlock[]
  nextLesson?: string
  previousLesson?: string
  unlocked: boolean
}

// Level metadata
export interface Level {
  id: number
  name: string
  description: string
  totalLessons: number
  completedLessons: number
  unlocked: boolean
  color: string
  href: string
}

// User progress
export interface LessonProgress {
  lessonId: string
  userId: string
  completed: boolean
  completedAt?: string
  timeSpent: number // in seconds
  quizScore?: number
}

// Lesson navigation
export interface LessonNavigation {
  previous?: {
    title: string
    href: string
  }
  next?: {
    title: string
    href: string
  }
  backToLevel: {
    title: string
    href: string
  }
}
