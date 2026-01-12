'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Target
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PianoDemo } from '@/components/interactive/PianoDemo'
import { Quiz } from '@/components/interactive/Quiz'
import type { ContentBlock } from '@/types/lesson'

interface LessonTemplateProps {
  levelId: number
  lessonNumber: number
  title: string
  duration: number
  objectives: string[]
  content: ContentBlock[]
  nextLesson?: {
    title: string
    href: string
  }
  previousLesson?: {
    title: string
    href: string
  }
  onComplete?: () => void
}

export function LessonTemplate({
  levelId,
  lessonNumber,
  title,
  duration,
  objectives,
  content,
  nextLesson,
  previousLesson,
  onComplete
}: LessonTemplateProps) {
  const [completed, setCompleted] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)

  const handleComplete = () => {
    setCompleted(true)
    setShowCompletion(true)
    onComplete?.()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Button
          variant="ghost"
          asChild
          className="mb-6 hover:bg-purple-50 dark:hover:bg-purple-900/20"
        >
          <Link href={`/parcours/niveau-${levelId}`}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au Niveau {levelId}
          </Link>
        </Button>

        {/* Lesson Header */}
        <Card className="mb-6 shadow-lg border-2">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                    Leçon {lessonNumber}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{duration} min</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {title}
                </h1>
              </div>

              {completed && (
                <CheckCircle2 className="w-10 h-10 text-green-500 flex-shrink-0" />
              )}
            </div>

            {/* Objectives */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-4 border-2 border-violet-200">
              <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                  <Target className="w-4 h-4" />
                </div>
                Objectifs de cette leçon
              </h2>
              <ul className="space-y-2">
                {objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="text-green-500 mt-0.5 font-bold">✓</span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardHeader>
        </Card>

        {/* Lesson Content */}
        <div className="space-y-6 mb-8">
          {content.map((block) => (
            <ContentBlockRenderer key={block.id} block={block} />
          ))}
        </div>

        {/* Complete Lesson Button */}
        {!completed && (
          <Card className="mb-6 shadow-lg border-2 border-green-200 bg-gradient-to-br from-white to-green-50">
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-green-500" />
              <h3 className="text-lg font-semibold mb-2">
                Leçon terminée ?
              </h3>
              <p className="text-muted-foreground mb-4">
                Marque cette leçon comme complétée pour débloquer la suite
              </p>
              <Button
                onClick={handleComplete}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
                size="lg"
              >
                Marquer comme terminée
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Completion Celebration */}
        {showCompletion && (
          <Card className="mb-6 shadow-xl border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 animate-in fade-in duration-500">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Félicitations ! 🎉
              </h3>
              <p className="text-muted-foreground mb-6">
                Tu as complété la leçon {lessonNumber} - {title}
              </p>
              {nextLesson && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
                  size="lg"
                >
                  <Link href={nextLesson.href}>
                    Leçon suivante : {nextLesson.title}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {previousLesson ? (
            <Button variant="outline" asChild className="border-2">
              <Link href={previousLesson.href}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="text-sm">{previousLesson.title}</span>
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {nextLesson && completed && (
            <Button
              asChild
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
            >
              <Link href={nextLesson.href}>
                <span className="text-sm">{nextLesson.title}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}

// Content Block Renderer Component
function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  if (block.type === 'text') {
    const textBlock = block as any
    const variant = (textBlock.data.variant || 'normal') as 'normal' | 'highlight' | 'warning' | 'tip'

    const styles = {
      normal: 'bg-white border-gray-200',
      highlight: 'bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200',
      warning: 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200',
      tip: 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200'
    }

    const iconContainers = {
      normal: null,
      highlight: (
        <div className="p-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white">
          <Sparkles className="w-4 h-4" />
        </div>
      ),
      warning: (
        <div className="p-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white">
          <AlertTriangle className="w-4 h-4" />
        </div>
      ),
      tip: (
        <div className="p-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white">
          <Lightbulb className="w-4 h-4" />
        </div>
      )
    }

    return (
      <Card className={`shadow-md border-2 ${styles[variant]}`}>
        <CardContent className="pt-6">
          {iconContainers[variant] && (
            <div className="flex items-center gap-2 mb-3">{iconContainers[variant]}</div>
          )}
          <div
            className="prose prose-gray prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: textBlock.data.content }}
          />
        </CardContent>
      </Card>
    )
  }

  if (block.type === 'image') {
    const imageBlock = block as any
    return (
      <Card className="shadow-md border-2">
        <CardContent className="p-4">
          <img
            src={imageBlock.data.src}
            alt={imageBlock.data.alt}
            className="w-full rounded-lg mb-2"
          />
          {imageBlock.data.caption && (
            <p className="text-sm text-muted-foreground text-center mt-2">
              {imageBlock.data.caption}
            </p>
          )}
        </CardContent>
      </Card>
    )
  }

  if (block.type === 'practice') {
    const practiceBlock = block as any
    return (
      <Card className="shadow-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">✋</span>
            </div>
            <h3 className="text-lg font-semibold">
              {practiceBlock.data.title}
            </h3>
          </div>
          <p className="text-gray-700 mb-4">{practiceBlock.data.description}</p>
          <ol className="space-y-3">
            {practiceBlock.data.steps.map((step: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-sm font-semibold flex items-center justify-center shadow-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700 flex-1 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          {practiceBlock.data.image && (
            <img
              src={practiceBlock.data.image}
              alt="Practice illustration"
              className="w-full rounded-lg mt-4 shadow-md"
            />
          )}
        </CardContent>
      </Card>
    )
  }

  if (block.type === 'interactive') {
    const interactiveBlock = block as any

    if (interactiveBlock.data.component === 'piano') {
      return (
        <PianoDemo
          title={interactiveBlock.data.title}
          instructions={interactiveBlock.data.instructions}
          targetNotes={interactiveBlock.data.targetNotes || []}
        />
      )
    }

    if (interactiveBlock.data.component === 'quiz') {
      return (
        <Quiz
          question={interactiveBlock.data.question || ''}
          options={interactiveBlock.data.options || []}
          correctAnswer={interactiveBlock.data.correctAnswer || 0}
          explanation={interactiveBlock.data.explanation}
        />
      )
    }
  }

  // Default fallback
  return null
}
