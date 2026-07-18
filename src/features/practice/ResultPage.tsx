import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Home, RotateCcw, ChevronDown, ChevronUp, CheckCircle, XCircle, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ProgressRing } from '@/components/ui/ProgressRing'
import { AchievementToast, useAchievementToasts } from '@/components/ui/AchievementToast'
import { formatTime, getGrade } from '@/lib/utils'
import type { ExamResult } from '@/types/exam'
import type { Question } from '@/types/question'

interface LocationState { result: ExamResult; questions: Question[]; newAchievements?: string[] }

export function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const routeState = location.state as LocationState | null
  const toasts = useAchievementToasts()
  const [initialized, setInitialized] = useState(false)

  const result = routeState?.result ?? null
  const questions = routeState?.questions ?? []
  const newAchievements = routeState?.newAchievements ?? []

  if (!initialized && newAchievements.length) {
    setInitialized(true)
    toasts.push(newAchievements)
  }

  if (!result) {
    navigate('/app/practice')
    return null
  }

  const grade = getGrade(result.score)

  return (
    <div className="space-y-5 pb-8">
      {/* Score card */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
        <Card padding="lg" className="text-center bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900 border-0 text-white">
          <p className="text-slate-400 text-sm mb-4">{result.courseCode} — {result.mode === 'exam' ? 'Exam' : 'Practice'}</p>
          <div className="flex justify-center mb-4">
            <ProgressRing value={result.score} size={120} strokeWidth={8} color={result.score >= 50 ? '#10b981' : '#ef4444'}>
              <div className="text-center">
                <p className="text-3xl font-display font-black text-white">{result.score}%</p>
                <p className={`text-sm font-bold ${grade.color.replace('text-', 'text-').replace('500', '400')}`}>{grade.letter}</p>
              </div>
            </ProgressRing>
          </div>
          <p className="text-xl font-display font-bold text-white">{grade.label}</p>
          <p className="text-slate-400 text-sm mt-1">{result.correct} of {result.total} correct</p>

          <div className="grid grid-cols-3 gap-3 mt-5">
            {[
              { label: 'Score',   value: `${result.score}%` },
              { label: 'Correct', value: `${result.correct}/${result.total}` },
              { label: 'Time',    value: formatTime(result.timeTaken) },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/10 rounded-xl py-2.5">
                <p className="text-base font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" onClick={() => navigate('/app/dashboard')}>
          <Home size={16} /> Home
        </Button>
        <Button onClick={() => navigate(-2)}>
          <RotateCcw size={16} /> Try Again
        </Button>
      </div>

      {/* Review */}
      {questions.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">Question Review</h2>
          <div className="space-y-3">
            {questions.map((q, i) => (
              <QuestionReview key={i} question={q} index={i} userAnswer={result.answers[i]} />
            ))}
          </div>
        </div>
      )}

      {toasts.current && <AchievementToast message={toasts.current} onDone={toasts.pop} />}
    </div>
  )
}

function QuestionReview({ question, index, userAnswer }: { question: Question; index: number; userAnswer?: string }) {
  const [open, setOpen] = useState(false)
  const isCorrect = userAnswer === question.answer
  const isSkipped = !userAnswer

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }}>
      <Card padding="none" className="overflow-hidden">
        <button
          className="w-full flex items-start gap-3 p-4 text-left"
          onClick={() => setOpen(o => !o)}
        >
          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isSkipped ? 'bg-slate-100 dark:bg-slate-700' : isCorrect ? 'bg-success-100 dark:bg-success-900/20' : 'bg-danger-100 dark:bg-danger-900/20'}`}>
            {isSkipped
              ? <Minus size={14} className="text-slate-400" />
              : isCorrect
                ? <CheckCircle size={14} className="text-success-500" />
                : <XCircle size={14} className="text-danger-500" />
            }
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug line-clamp-2">{question.question}</p>
            <div className="flex items-center gap-2 mt-1">
              {!isSkipped && (
                <Badge variant={isCorrect ? 'success' : 'danger'} className="text-xs">
                  {userAnswer} — {isCorrect ? 'Correct' : 'Wrong'}
                </Badge>
              )}
              {isSkipped && <Badge variant="muted" className="text-xs">Skipped</Badge>}
              {!isCorrect && <Badge variant="success" className="text-xs">Ans: {question.answer}</Badge>}
            </div>
          </div>
          {open ? <ChevronUp size={16} className="text-slate-400 shrink-0 mt-1" /> : <ChevronDown size={16} className="text-slate-400 shrink-0 mt-1" />}
        </button>

        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-4 pb-4 space-y-2 border-t border-slate-100 dark:border-slate-700 pt-3">
            {question.options.map((opt, i) => {
              const letter = String.fromCharCode(65 + i)
              const isAns = letter === question.answer
              const isUser = letter === userAnswer
              return (
                <div key={letter} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${isAns ? 'bg-success-50 dark:bg-success-900/20 text-success-700 dark:text-success-300' : isUser && !isAns ? 'bg-danger-50 dark:bg-danger-900/20 text-danger-700 dark:text-danger-300' : 'text-slate-600 dark:text-slate-400'}`}>
                  <span className="font-bold w-4 shrink-0">{letter}.</span>
                  <span className="flex-1">{opt}</span>
                  {isAns && <CheckCircle size={14} className="text-success-500 shrink-0" />}
                  {isUser && !isAns && <XCircle size={14} className="text-danger-500 shrink-0" />}
                </div>
              )
            })}
            {question.explanation && (
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-3 mt-2">
                <p className="text-xs font-semibold text-primary-500 mb-1">Explanation</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{question.explanation}</p>
              </div>
            )}
          </motion.div>
        )}
      </Card>
    </motion.div>
  )
}
