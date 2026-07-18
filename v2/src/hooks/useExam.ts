import { useState, useEffect, useCallback, useRef } from 'react'
import type { Question } from '@/types/question'
import type { ExamConfig, ExamResult, ExamAnswer } from '@/types/exam'
import { shuffle, generateId } from '@/lib/utils'

export type ExamStatus = 'idle' | 'running' | 'paused' | 'finished'

interface ExamState {
  questions: Question[]
  currentIndex: number
  answers: Record<number, string>
  flagged: Set<number>
  timeLeft: number
  status: ExamStatus
  result: ExamResult | null
}

interface UseExamReturn extends ExamState {
  currentQuestion: Question | null
  progress: number
  answer: (letter: string) => void
  toggleFlag: (index: number) => void
  goTo: (index: number) => void
  next: () => void
  prev: () => void
  finish: () => void
  pause: () => void
  resume: () => void
}

export function useExam(config: ExamConfig, allQuestions: Question[]): UseExamReturn {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const buildQuestions = useCallback(() => {
    let pool: Question[] = []
    if (config.topicIds.length === 0) {
      pool = [...allQuestions]
    } else {
      pool = [...allQuestions]
    }
    const shuffled = shuffle(pool)
    return shuffled.slice(0, Math.min(config.questionCount, shuffled.length))
  }, [config, allQuestions])

  const [state, setState] = useState<ExamState>(() => ({
    questions: buildQuestions(),
    currentIndex: 0,
    answers: {},
    flagged: new Set(),
    timeLeft: config.timeLimit * 60,
    status: 'running',
    result: null,
  }))

  const finish = useCallback(() => {
    setState(s => {
      if (s.status === 'finished') return s
      let correct = 0
      const answers: Record<number, string> = { ...s.answers }
      s.questions.forEach((q, i) => {
        if (answers[i] === q.answer) correct++
      })
      const total = s.questions.length
      const score = total > 0 ? Math.round((correct / total) * 100) : 0
      const timeTaken = config.timeLimit * 60 - s.timeLeft

      const result: ExamResult = {
        id: generateId(),
        courseId: config.courseId,
        courseCode: config.courseCode,
        courseName: config.courseName,
        topicIds: config.topicIds,
        score,
        correct,
        total,
        timeTaken,
        mode: config.mode,
        answers,
        createdAt: new Date().toISOString(),
      }
      return { ...s, status: 'finished', result }
    })
  }, [config])

  // Timer
  useEffect(() => {
    if (state.status === 'running') {
      timerRef.current = setInterval(() => {
        setState(s => {
          if (s.timeLeft <= 1) {
            return s
          }
          return { ...s, timeLeft: s.timeLeft - 1 }
        })
      }, 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [state.status, finish])

  // Auto-finish when time hits 0
  useEffect(() => {
    if (state.timeLeft === 0 && state.status === 'running') {
      finish()
    }
  }, [state.timeLeft, state.status, finish])

  const answer = useCallback((letter: string) => {
    setState(s => {
      if (s.status !== 'running') return s
      return { ...s, answers: { ...s.answers, [s.currentIndex]: letter } }
    })
  }, [])

  const toggleFlag = useCallback((index: number) => {
    setState(s => {
      const next = new Set(s.flagged)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return { ...s, flagged: next }
    })
  }, [])

  const goTo = useCallback((index: number) => {
    setState(s => ({ ...s, currentIndex: Math.max(0, Math.min(index, s.questions.length - 1)) }))
  }, [])

  const next = useCallback(() => {
    setState(s => {
      if (s.currentIndex < s.questions.length - 1) {
        return { ...s, currentIndex: s.currentIndex + 1 }
      }
      return s
    })
  }, [])

  const prev = useCallback(() => {
    setState(s => ({ ...s, currentIndex: Math.max(0, s.currentIndex - 1) }))
  }, [])

  const pause = useCallback(() => setState(s => ({ ...s, status: 'paused' })), [])
  const resume = useCallback(() => setState(s => ({ ...s, status: 'running' })), [])

  return {
    ...state,
    currentQuestion: state.questions[state.currentIndex] ?? null,
    progress: state.questions.length > 0 ? (Object.keys(state.answers).length / state.questions.length) * 100 : 0,
    answer,
    toggleFlag,
    goTo,
    next,
    prev,
    finish,
    pause,
    resume,
  }
}
