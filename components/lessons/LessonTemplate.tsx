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
import { PianoDemo } from '@/components/interactive/PianoDemo'
import { Quiz } from '@/components/interactive/Quiz'
import { completeLessonAction } from '@/app/actions/progress'
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
  const [playedBlocks, setPlayedBlocks] = useState<Set<string>>(new Set())

  // Exercices piano à jouer réellement (au clic ou sur le clavier USB)
  // avant de pouvoir valider la leçon
  const pianoExercises = content.filter(
    (block) =>
      block.type === 'interactive' &&
      (block as any).data.component === 'piano' &&
      ((block as any).data.targetNotes || []).length > 0
  )
  const allExercisesPlayed = pianoExercises.every((block) => playedBlocks.has(block.id))

  const handlePianoExerciseComplete = (blockId: string) => {
    setPlayedBlocks((prev) => new Set(prev).add(blockId))
  }

  const [saving, setSaving] = useState(false)

  const handleComplete = async () => {
    setSaving(true)
    // Persister en base : user_progress + practice_logs + achievements
    const result = await completeLessonAction(levelId, lessonNumber, duration)
    setSaving(false)

    if (!result.ok) {
      console.error('Erreur de sauvegarde de la leçon:', result.error)
    }
    setCompleted(true)
    setShowCompletion(true)
    onComplete?.()
  }

  return (
    <main className="min-h-screen py-6">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Back link */}
        <Link
          href={`/parcours/niveau-${levelId}`}
          className="btn-ghost mb-6 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-dim"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour au Niveau {levelId}
        </Link>

        {/* Lesson Header */}
        <div className="panel mb-6 rounded-2xl p-6">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-3">
                <span className="badge-brass inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                  Leçon {lessonNumber}
                </span>
                <div className="text-faint flex items-center gap-1.5 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{duration} min</span>
                </div>
              </div>
              <h1 className="font-display text-3xl text-[#f2efe8]">
                {title}
              </h1>
            </div>

            {completed && (
              <CheckCircle2 className="h-10 w-10 flex-shrink-0 text-[#4ade80]" />
            )}
          </div>

          {/* Objectives */}
          <div className="glass rounded-xl p-4">
            <h2 className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
              <Target className="h-3.5 w-3.5" />
              Objectifs de cette leçon
            </h2>
            <ul className="space-y-2">
              {objectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm"
                >
                  <span className="accent-green mt-0.5 font-bold">✓</span>
                  <span className="text-dim">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="mb-8 space-y-6">
          {content.map((block) => (
            <ContentBlockRenderer
              key={block.id}
              block={block}
              onPianoComplete={() => handlePianoExerciseComplete(block.id)}
            />
          ))}
        </div>

        {/* Complete Lesson Button */}
        {!completed && (
          <div className="panel mb-6 rounded-2xl p-6 text-center">
            <CheckCircle2 className={`mx-auto mb-3 h-12 w-12 ${allExercisesPlayed ? 'text-[#4ade80]' : 'text-faint'}`} />
            <h3 className="mb-2 text-lg font-bold text-[#f2efe8]">
              Leçon terminée ?
            </h3>
            {allExercisesPlayed ? (
              <p className="text-dim mb-4">
                Marque cette leçon comme complétée pour débloquer la suite
              </p>
            ) : (
              <p className="text-dim mb-4">
                🎹 Joue d'abord les exercices au piano ({playedBlocks.size}/{pianoExercises.length} joué{playedBlocks.size > 1 ? 's' : ''}) —
                sur ton clavier USB ou en cliquant sur les touches
              </p>
            )}
            <button
              onClick={handleComplete}
              disabled={!allExercisesPlayed || saving}
              className="btn-accent inline-flex items-center rounded-2xl px-8 py-3.5 font-bold disabled:cursor-not-allowed disabled:opacity-40"
            >
              {saving ? 'Enregistrement…' : 'Marquer comme terminée'}
            </button>
          </div>
        )}

        {/* Completion Celebration */}
        {showCompletion && (
          <div className="panel mb-6 rounded-2xl border-[#4ade80]/30 p-6 text-center shadow-[0_0_32px_rgba(74,222,128,0.15)]">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#6ee7a0] to-[#22c55e] shadow-[0_0_24px_rgba(74,222,128,0.4)]">
              <CheckCircle2 className="h-10 w-10 text-[#0a0a0e]" />
            </div>
            <h3 className="font-display accent-green mb-2 text-2xl">
              Félicitations ! 🎉
            </h3>
            <p className="text-dim mb-6">
              Tu as complété la leçon {lessonNumber} - {title}
            </p>
            {nextLesson && (
              <Link
                href={nextLesson.href}
                className="btn-accent inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 font-bold"
              >
                Leçon suivante : {nextLesson.title}
                <ArrowRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {previousLesson ? (
            <Link
              href={previousLesson.href}
              className="btn-ghost inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-dim"
            >
              <ArrowLeft className="h-4 w-4" />
              {previousLesson.title}
            </Link>
          ) : (
            <div />
          )}

          {nextLesson && completed && (
            <Link
              href={nextLesson.href}
              className="btn-accent inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold"
            >
              {nextLesson.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}

// Content Block Renderer Component
function ContentBlockRenderer({
  block,
  onPianoComplete
}: {
  block: ContentBlock
  onPianoComplete?: () => void
}) {
  if (block.type === 'text') {
    const textBlock = block as any
    const variant = (textBlock.data.variant || 'normal') as 'normal' | 'highlight' | 'warning' | 'tip'

    // Teinte de bordure/glow par variante, sur panneau sombre
    const styles = {
      normal: '',
      highlight: 'border-[#a78bfa]/30 shadow-[0_0_24px_rgba(139,92,246,0.10)]',
      warning: 'border-[#fbbf24]/30 shadow-[0_0_24px_rgba(251,191,36,0.10)]',
      tip: 'border-[#4ade80]/30 shadow-[0_0_24px_rgba(74,222,128,0.10)]'
    }

    const icons = {
      normal: null,
      highlight: (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#a78bfa]/30 bg-[#a78bfa]/10 text-[#c4b5fd]">
          <Sparkles className="h-4 w-4" />
        </div>
      ),
      warning: (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#fbbf24]/30 bg-[#fbbf24]/10 text-[#fcd34d]">
          <AlertTriangle className="h-4 w-4" />
        </div>
      ),
      tip: (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#4ade80]/30 bg-[#4ade80]/10 text-[#86efac]">
          <Lightbulb className="h-4 w-4" />
        </div>
      )
    }

    return (
      <div className={`panel rounded-2xl p-6 ${styles[variant]}`}>
        {icons[variant] && (
          <div className="mb-3 flex items-center gap-2">{icons[variant]}</div>
        )}
        <div
          className="prose prose-invert prose-sm max-w-none prose-headings:text-[#f2efe8] prose-p:text-[#c9c4ba] prose-strong:text-[#f2efe8] prose-li:text-[#c9c4ba]"
          dangerouslySetInnerHTML={{ __html: textBlock.data.content }}
        />
      </div>
    )
  }

  if (block.type === 'image') {
    const imageBlock = block as any
    return (
      <div className="panel rounded-2xl p-4">
        <img
          src={imageBlock.data.src}
          alt={imageBlock.data.alt}
          className="mb-2 w-full rounded-lg"
        />
        {imageBlock.data.caption && (
          <p className="text-faint mt-2 text-center text-sm">
            {imageBlock.data.caption}
          </p>
        )}
      </div>
    )
  }

  if (block.type === 'practice') {
    const practiceBlock = block as any
    return (
      <div className="panel rounded-2xl border-[#38bdf8]/25 p-6 shadow-[0_0_24px_rgba(56,189,248,0.08)]">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-lg">
            ✋
          </div>
          <h3 className="text-lg font-bold text-[#f2efe8]">
            {practiceBlock.data.title}
          </h3>
        </div>
        <p className="text-dim mb-4">{practiceBlock.data.description}</p>
        <ol className="space-y-3">
          {practiceBlock.data.steps.map((step: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-sm font-bold tabular-nums text-[#7dd3fc]">
                {index + 1}
              </span>
              <span className="text-dim flex-1 pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
        {practiceBlock.data.image && (
          <img
            src={practiceBlock.data.image}
            alt="Practice illustration"
            className="mt-4 w-full rounded-lg"
          />
        )}
      </div>
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
          onComplete={onPianoComplete}
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
