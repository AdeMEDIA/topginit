import type { ExamResult } from '@/types/exam'
import { STORAGE_KEYS } from '@/lib/constants'

export function saveResult(result: ExamResult): void {
  const results = getResults()
  results.push(result)
  localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(results))
}

export function getResults(): ExamResult[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.RESULTS) || '[]')
  } catch {
    return []
  }
}

export function getResultsByCourse(courseId: string): ExamResult[] {
  return getResults().filter(r => r.courseId === courseId)
}

interface ProgressEntry {
  completed: number
  correct: number
  total: number
  lastAttempt: string
}

type CourseProgress = Record<string, ProgressEntry>
type AllProgress = Record<string, CourseProgress>

export function getProgress(): AllProgress {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}')
  } catch {
    return {}
  }
}

export function updateProgress(courseId: string, topicId: string, correct: number, total: number): void {
  const all = getProgress()
  if (!all[courseId]) all[courseId] = {}
  const prev = all[courseId][topicId] || { completed: 0, correct: 0, total: 0, lastAttempt: '' }
  all[courseId][topicId] = {
    completed: prev.completed + 1,
    correct: prev.correct + correct,
    total: prev.total + total,
    lastAttempt: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(all))
}
