import type { Question } from '@/types/question'

type QuestionModule = { default?: Question[]; [key: string]: Question[] | undefined }

const moduleMap: Record<string, () => Promise<QuestionModule>> = {
  phy102:  () => import('@/data/questions/phy102'),
  cos102:  () => import('@/data/questions/cos102'),
  mls102:  () => import('@/data/questions/mls102'),
  mls104:  () => import('@/data/questions/mls104'),
  gst102:  () => import('@/data/questions/gst102'),
}

const cache: Record<string, Question[]> = {}

export async function loadQuestions(courseId: string): Promise<Question[]> {
  if (cache[courseId]) return cache[courseId]
  const loader = moduleMap[courseId]
  if (!loader) return []
  const mod = await loader()
  const questions = (mod[courseId] ?? mod.default ?? []) as Question[]
  cache[courseId] = questions
  return questions
}

export function getQuestionSlice(questions: Question[], startIdx: number, endIdx: number): Question[] {
  return questions.slice(startIdx, endIdx)
}
