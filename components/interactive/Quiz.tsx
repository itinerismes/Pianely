'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuizProps {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  onComplete?: (correct: boolean) => void
}

export function Quiz({
  question,
  options,
  correctAnswer,
  explanation,
  onComplete
}: QuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hasAnswered, setHasAnswered] = useState(false)

  const handleAnswer = (index: number) => {
    if (hasAnswered) return

    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setShowResult(true)
    setHasAnswered(true)
    const isCorrect = selectedAnswer === correctAnswer
    onComplete?.(isCorrect)
  }

  const handleRetry = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setHasAnswered(false)
  }

  const isCorrect = selectedAnswer === correctAnswer

  return (
    <div className="panel my-6 rounded-2xl border-[#38bdf8]/25 p-6 shadow-[0_0_24px_rgba(56,189,248,0.08)]">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-[#7dd3fc]">
          <AlertCircle className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-[#f2efe8]">Quiz - Teste tes connaissances</h3>
      </div>

      <div className="space-y-4">
        {/* Question */}
        <div className="glass rounded-xl p-4">
          <h4 className="mb-4 text-lg font-semibold text-[#f2efe8]">{question}</h4>

          {/* Options */}
          <div className="space-y-3">
            {options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isThisCorrect = index === correctAnswer
              const showCorrect = showResult && isThisCorrect
              const showIncorrect = showResult && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={hasAnswered}
                  className={cn(
                    'w-full rounded-xl border p-4 text-left transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-[#e0a83c]/50',
                    !hasAnswered && 'hover:border-[#e0a83c]/40 hover:bg-white/[0.06]',
                    isSelected && !showResult && 'border-[#e0a83c]/50 bg-[#e0a83c]/[0.10]',
                    showCorrect && 'border-[#4ade80]/50 bg-[#4ade80]/[0.10]',
                    showIncorrect && 'border-red-400/50 bg-red-400/[0.10]',
                    !isSelected && !showResult && 'border-white/[0.09] bg-white/[0.03]',
                    hasAnswered && !isSelected && !showCorrect && 'opacity-40'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold',
                        isSelected && !showResult && 'border-[#e0a83c] bg-[#e0a83c] text-[#1a1408]',
                        showCorrect && 'border-[#4ade80] bg-[#4ade80] text-[#0a0a0e]',
                        showIncorrect && 'border-red-400 bg-red-400 text-[#0a0a0e]',
                        !isSelected && !showResult && 'border-white/20 text-dim'
                      )}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-semibold text-[#f2efe8]">{option}</span>
                    </span>
                    {showCorrect && <CheckCircle2 className="accent-green h-6 w-6" />}
                    {showIncorrect && <XCircle className="h-6 w-6 text-red-300" />}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Submit/Retry Button */}
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="btn-accent inline-flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 font-bold disabled:opacity-50"
          >
            Valider ma réponse
            <ArrowRight className="h-5 w-5" />
          </button>
        ) : (
          <div className="space-y-4">
            {/* Result Message */}
            <div className={cn(
              'rounded-xl border p-4',
              isCorrect
                ? 'border-[#4ade80]/35 bg-[#4ade80]/[0.08]'
                : 'border-[#fbbf24]/35 bg-[#fbbf24]/[0.08]'
            )}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="accent-green mt-0.5 h-6 w-6 flex-shrink-0" />
                ) : (
                  <XCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#fcd34d]" />
                )}
                <div className="flex-1">
                  <h4 className={cn(
                    'mb-1 font-bold',
                    isCorrect ? 'text-[#86efac]' : 'text-[#fcd34d]'
                  )}>
                    {isCorrect ? 'Bravo ! Bonne réponse ! 🎉' : 'Pas tout à fait...'}
                  </h4>
                  {explanation && (
                    <p className="text-dim text-sm leading-relaxed">
                      {explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Retry Button */}
            {!isCorrect && (
              <button
                onClick={handleRetry}
                className="btn-ghost w-full rounded-2xl py-3 font-semibold text-[#f2efe8]"
              >
                Réessayer
              </button>
            )}
          </div>
        )}

        {/* Score Badge */}
        {showResult && isCorrect && (
          <div className="flex justify-center">
            <span className="badge-stage inline-flex items-center rounded-full px-4 py-2 text-sm font-bold">
              ✓ Quiz réussi !
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
