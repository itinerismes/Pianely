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
  Sparkles
} from 'lucide-react'
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Link
          href={`/parcours/niveau-${levelId}`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au Niveau {levelId}
        </Link>

        {/* Lesson Header */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-xl shadow-black/20 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30">
                  Leçon {lessonNumber}
                </span>
                <div className="flex items-center gap-1.5 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{duration} min</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white/90 mb-3">{title}</h1>
            </div>

            {completed && (
              <CheckCircle2 className="w-10 h-10 text-emerald-400 flex-shrink-0" />
            )}
          </div>

          {/* Objectives */}
          <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600">
            <h2 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Objectifs de cette leçon
            </h2>
            <ul className="space-y-2">
              {objectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="space-y-6 mb-8">
          {content.map((block) => (
            <ContentBlockRenderer key={block.id} block={block} />
          ))}
        </div>

        {/* Complete Lesson Button */}
        {!completed && (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 shadow-xl shadow-black/20 text-center mb-8">
            <h3 className="text-lg font-semibold text-white/90 mb-2">
              Leçon terminée ?
            </h3>
            <p className="text-gray-400 mb-4">
              Marque cette leçon comme complétée pour débloquer la suite
            </p>
            <button
              onClick={handleComplete}
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Marquer comme terminée
            </button>
          </div>
        )}

        {/* Completion Celebration */}
        {showCompletion && (
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-8 text-center mb-8 animate-in fade-in duration-500">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white/90 mb-2">
              Félicitations ! 🎉
            </h3>
            <p className="text-gray-400 mb-6">
              Tu as complété la leçon {lessonNumber} - {title}
            </p>
            {nextLesson && (
              <Link
                href={nextLesson.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-lg"
              >
                Leçon suivante : {nextLesson.title}
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {previousLesson ? (
            <Link
              href={previousLesson.href}
              className="flex items-center gap-2 px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white rounded-lg hover:border-slate-600 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">{previousLesson.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson && completed && (
            <Link
              href={nextLesson.href}
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              <span className="text-sm">{nextLesson.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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
      normal: 'bg-slate-800/50 border-slate-700',
      highlight: 'bg-violet-500/10 border-violet-500/30',
      warning: 'bg-orange-500/10 border-orange-500/30',
      tip: 'bg-emerald-500/10 border-emerald-500/30'
    }

    const icons = {
      normal: null,
      highlight: <Sparkles className="w-5 h-5 text-violet-400" />,
      warning: <AlertTriangle className="w-5 h-5 text-orange-400" />,
      tip: <Lightbulb className="w-5 h-5 text-emerald-400" />
    }

    return (
      <div
        className={`backdrop-blur-sm rounded-xl border p-6 shadow-lg ${styles[variant]}`}
      >
        {icons[variant] && (
          <div className="flex items-center gap-2 mb-3">{icons[variant]}</div>
        )}
        <div
          className="prose prose-invert prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: textBlock.data.content }}
        />
      </div>
    )
  }

  if (block.type === 'image') {
    const imageBlock = block as any
    return (
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-4 shadow-lg">
        <img
          src={imageBlock.data.src}
          alt={imageBlock.data.alt}
          className="w-full rounded-lg mb-2"
        />
        {imageBlock.data.caption && (
          <p className="text-sm text-gray-400 text-center">
            {imageBlock.data.caption}
          </p>
        )}
      </div>
    )
  }

  if (block.type === 'practice') {
    const practiceBlock = block as any
    return (
      <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/30 rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">✋</span>
          </div>
          <h3 className="text-lg font-semibold text-white/90">
            {practiceBlock.data.title}
          </h3>
        </div>
        <p className="text-gray-300 mb-4">{practiceBlock.data.description}</p>
        <ol className="space-y-2">
          {practiceBlock.data.steps.map((step: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 text-sm font-semibold flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-gray-300 flex-1">{step}</span>
            </li>
          ))}
        </ol>
        {practiceBlock.data.image && (
          <img
            src={practiceBlock.data.image}
            alt="Practice illustration"
            className="w-full rounded-lg mt-4"
          />
        )}
      </div>
    )
  }

  // Default fallback
  return null
}
