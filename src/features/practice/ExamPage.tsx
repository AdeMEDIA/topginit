import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { Flag, ChevronLeft, ChevronRight, Clock, CheckCircle, XCircle, Grid3X3 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { getCourseById } from '@/data/courses'
import { loadQuestions, getQuestionSlice } from '@/services/questions'
import { saveResult } from '@/services/db'
import { useAuthStore } from '@/stores/authStore'
import { useExam } from '@/hooks/useExam'
import { formatTime, cn } from '@/lib/utils'
import type { Question } from '@/types/question'
import type { ExamConfig } from '@/types/exam'

export function ExamPage() {
  const { courseId } = useParams<{ courseId: string }>()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { updateUser, user } = useAuthStore()
  const [questions, setQuestions] = useState<Question[] | null>(null)
  const [config, setConfig] = useState<ExamConfig | null>(null)

  useEffect(() => {
    const course = getCourseById(courseId ?? '')
    if (!course) { navigate('/app/practice'); return }

    const topicIds = searchParams.get('topics')?.split(',').filter(Boolean) ?? []
    const count = Number(searchParams.get('count') ?? 20)
    const time = Number(searchParams.get('time') ?? 20)
    const mode = (searchParams.get('mode') ?? 'exam') as 'exam' | 'practice'

    loadQuestions(course.id).then(allQ => {
      let pool: Question[] = []
      if (!topicIds.length || !course.topics.length) {
        pool = allQ
      } else {
        topicIds.forEach(tid => {
          const topic = course.topics.find(t => t.id === tid)
          if (topic) pool.push(...getQuestionSlice(allQ, topic.startIdx, topic.endIdx))
        })
      }

      setQuestions(pool)
      setConfig({
        courseId: course.id,
        courseCode: course.code,
        courseName: course.name,
        topicIds,
        questionCount: count,
        timeLimit: time,
        mode,
      })
    })
  }, [courseId, searchParams, navigate])

  const onFinish = useCallback((result: NonNullable<ReturnType<typeof useExam>['result']>) => {
    saveResult(result)
    updateUser({
      xp: (user?.xp ?? 0) + result.correct * 10 + 50,
      coins: (user?.coins ?? 0) + 5,
    })
    navigate(`/app/result/${result.id}`, { state: { result, questions } })
  }, [user, updateUser, navigate, questions])

  if (!questions || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <ExamRunner
      questions={questions}
      config={config}
      onFinish={onFinish}
    />
  )
}

function ExamRunner({ questions, config, onFinish }: {
  questions: Question[]
  config: ExamConfig
  onFinish: (result: ReturnType<typeof useExam>['result'] extends null ? never : NonNullable<ReturnType<typeof useExam>['result']>) => void
}) {
  const exam = useExam(config, questions)
  const [showGrid, setShowGrid] = useState(false)
  const [showSubmit, setShowSubmit] = useState(false)
  const [direction, setDirection] = useState(1)
  const finishedRef = useRef(false)

  const isPractice = config.mode === 'practice'
  const currentAnswer = exam.answers[exam.currentIndex]
  const currentQ = exam.currentQuestion
  const answered = Object.keys(exam.answers).length

  useEffect(() => {
    if (exam.status === 'finished' && exam.result && !finishedRef.current) {
      finishedRef.current = true
      onFinish(exam.result as NonNullable<typeof exam.result>)
    }
  }, [exam.status, exam.result, onFinish])

  const handleNext = () => { setDirection(1); exam.next() }
  const handlePrev = () => { setDirection(-1); exam.prev() }

  const isLowTime = exam.timeLeft < 120
  const unanswered = exam.questions.length - answered

  if (!currentQ) return null

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-100 dark:border-slate-800 px-4 py-2.5">
        <div className="flex items-center gap-3 max-w-2xl mx-auto">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-slate-400 truncate">{config.courseCode}</p>
            <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-primary-500 rounded-full transition-all duration-300"
                style={{ width: `${((exam.currentIndex + 1) / exam.questions.length) * 100}%` }}
              />
            </div>
          </div>
          <div className={cn('flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-sm font-mono font-bold', isLowTime ? 'bg-danger-50 text-danger-500 dark:bg-danger-900/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300')}>
            <Clock size={13} />
            {formatTime(exam.timeLeft)}
          </div>
          <button onClick={() => setShowGrid(true)} className="p-1.5 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
            <Grid3X3 size={17} />
          </button>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 px-4 py-5 max-w-2xl mx-auto w-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-slate-400">Q{exam.currentIndex + 1} / {exam.questions.length}</span>
          <button
            onClick={() => exam.toggleFlag(exam.currentIndex)}
            className={cn('flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-xl transition-colors', exam.flagged.has(exam.currentIndex) ? 'bg-warning-100 text-warning-600 dark:bg-warning-900/20' : 'bg-slate-100 text-slate-400 dark:bg-slate-800')}
          >
            <Flag size={13} />
            {exam.flagged.has(exam.currentIndex) ? 'Flagged' : 'Flag'}
          </button>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={exam.currentIndex}
            custom={direction}
            variants={{ enter: (d: number) => ({ opacity: 0, x: d * 40 }), center: { opacity: 1, x: 0 }, exit: (d: number) => ({ opacity: 0, x: d * -40 }) }}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-card border border-slate-100 dark:border-slate-700">
              <p className="text-slate-800 dark:text-slate-100 text-base leading-relaxed font-medium">{currentQ.question}</p>
            </div>

            <div className="space-y-2.5">
              {currentQ.options.map((opt, i) => {
                const letter = String.fromCharCode(65 + i)
                const isSelected = currentAnswer === letter
                const isCorrect = isPractice && currentAnswer && letter === currentQ.answer
                const isWrong = isPractice && isSelected && letter !== currentQ.answer

                return (
                  <button
                    key={letter}
                    onClick={() => { if (!isPractice || !currentAnswer) exam.answer(letter) }}
                    disabled={isPractice && !!currentAnswer}
                    className={cn(
                      'w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all',
                      isCorrect && 'bg-success-50 border-success-400 dark:bg-success-900/20 dark:border-success-500',
                      isWrong   && 'bg-danger-50 border-danger-400 dark:bg-danger-900/20 dark:border-danger-500',
                      isSelected && !isPractice && 'bg-primary-50 border-primary-400 dark:bg-primary-900/20 dark:border-primary-500',
                      !isSelected && !isCorrect && !isWrong && 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary-300 hover:bg-primary-50/50 dark:hover:bg-primary-900/10',
                    )}
                  >
                    <span className={cn(
                      'w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 mt-0.5',
                      isCorrect && 'bg-success-500 text-white',
                      isWrong   && 'bg-danger-500 text-white',
                      isSelected && !isPractice && 'bg-primary-500 text-white',
                      !isSelected && !isCorrect && !isWrong && 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
                    )}>
                      {letter}
                    </span>
                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{opt}</span>
                    {isCorrect && <CheckCircle size={16} className="text-success-500 ml-auto shrink-0 mt-0.5" />}
                    {isWrong   && <XCircle   size={16} className="text-danger-500 ml-auto shrink-0 mt-0.5" />}
                  </button>
                )
              })}
            </div>

            {/* Practice mode explanation */}
            {isPractice && currentAnswer && currentQ.explanation && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4 border border-primary-200 dark:border-primary-700">
                <p className="text-xs font-semibold text-primary-500 mb-1">Explanation</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{currentQ.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div className="sticky bottom-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-t border-slate-100 dark:border-slate-800 px-4 py-3">
        <div className="flex items-center gap-2 max-w-2xl mx-auto">
          <Button variant="outline" onClick={handlePrev} disabled={exam.currentIndex === 0} className="px-3">
            <ChevronLeft size={18} />
          </Button>

          {exam.currentIndex < exam.questions.length - 1 ? (
            <Button onClick={handleNext} fullWidth>
              Next <ChevronRight size={16} />
            </Button>
          ) : (
            <Button onClick={() => setShowSubmit(true)} fullWidth variant={unanswered > 0 ? 'outline' : 'primary'}>
              {unanswered > 0 ? `Submit (${unanswered} unanswered)` : 'Submit Exam'}
            </Button>
          )}
        </div>
      </div>

      {/* Question grid modal */}
      <Modal open={showGrid} onClose={() => setShowGrid(false)} title="Question Navigator">
        <div className="grid grid-cols-8 gap-1.5 mt-1">
          {exam.questions.map((_, i) => (
            <button
              key={i}
              onClick={() => { exam.goTo(i); setShowGrid(false) }}
              className={cn(
                'w-9 h-9 rounded-lg text-xs font-bold transition-all',
                i === exam.currentIndex && 'ring-2 ring-primary-500 ring-offset-1',
                exam.answers[i] ? 'bg-primary-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
                exam.flagged.has(i) && 'bg-warning-400 text-white',
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="flex gap-3 mt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-primary-500" /> Answered</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-warning-400" /> Flagged</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700" /> Not answered</span>
        </div>
        <Button variant="danger" fullWidth className="mt-4" onClick={() => { setShowGrid(false); setShowSubmit(true) }}>
          Submit Exam
        </Button>
      </Modal>

      {/* Submit confirm */}
      <Modal open={showSubmit} onClose={() => setShowSubmit(false)} title="Submit Exam?">
        {unanswered > 0 && (
          <p className="text-sm text-warning-600 dark:text-warning-400 bg-warning-50 dark:bg-warning-900/20 rounded-xl px-4 py-3 mb-4">
            You have <strong>{unanswered}</strong> unanswered question{unanswered > 1 ? 's' : ''}.
          </p>
        )}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
          Answered {answered} of {exam.questions.length} questions.
          This cannot be undone.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setShowSubmit(false)} className="flex-1">Cancel</Button>
          <Button onClick={() => { setShowSubmit(false); exam.finish() }} className="flex-1">Submit</Button>
        </div>
      </Modal>
    </div>
  )
}
