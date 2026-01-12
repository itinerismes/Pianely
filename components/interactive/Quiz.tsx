'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
    <Card className="my-6 border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
            <AlertCircle className="w-5 h-5" />
          </div>
          <span>Quiz - Teste tes connaissances</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Question */}
        <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
          <h3 className="font-semibold text-lg mb-4">{question}</h3>

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
                    'w-full text-left p-4 rounded-lg border-2 transition-all duration-200',
                    'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400',
                    !hasAnswered && 'hover:border-blue-400 hover:bg-blue-50',
                    isSelected && !showResult && 'border-blue-500 bg-blue-100',
                    showCorrect && 'border-green-500 bg-green-100',
                    showIncorrect && 'border-red-500 bg-red-100',
                    !isSelected && !showResult && 'border-gray-300 bg-white',
                    hasAnswered && !isSelected && !showCorrect && 'opacity-50'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className={cn(
                        'w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm',
                        isSelected && !showResult && 'border-blue-500 bg-blue-500 text-white',
                        showCorrect && 'border-green-500 bg-green-500 text-white',
                        showIncorrect && 'border-red-500 bg-red-500 text-white',
                        !isSelected && !showResult && 'border-gray-400 text-gray-600'
                      )}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-medium">{option}</span>
                    </span>
                    {showCorrect && <CheckCircle2 className="w-6 h-6 text-green-600" />}
                    {showIncorrect && <XCircle className="w-6 h-6 text-red-600" />}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Submit/Retry Button */}
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
            size="lg"
          >
            Valider ma réponse
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        ) : (
          <div className="space-y-4">
            {/* Result Message */}
            <div className={cn(
              'rounded-lg p-4 border-2',
              isCorrect
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300'
                : 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-300'
            )}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <h4 className={cn(
                    'font-bold mb-1',
                    isCorrect ? 'text-green-900' : 'text-orange-900'
                  )}>
                    {isCorrect ? 'Bravo ! Bonne réponse ! 🎉' : 'Pas tout à fait...'}
                  </h4>
                  {explanation && (
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Retry Button */}
            {!isCorrect && (
              <Button
                onClick={handleRetry}
                variant="outline"
                className="w-full border-2"
                size="lg"
              >
                Réessayer
              </Button>
            )}
          </div>
        )}

        {/* Score Badge */}
        {showResult && isCorrect && (
          <div className="flex justify-center">
            <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm px-4 py-2">
              ✓ Quiz réussi !
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
