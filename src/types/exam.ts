export type ExamMode = 'exam' | 'practice'

export interface ExamConfig {
  courseId: string
  courseCode: string
  courseName: string
  topicIds: string[]
  questionCount: number
  timeLimit: number
  mode: ExamMode
}

export interface ExamAnswer {
  questionIndex: number
  selected: string
  correct: boolean
}

export interface ExamResult {
  id: string
  courseId: string
  courseCode: string
  courseName: string
  topicIds: string[]
  score: number
  correct: number
  total: number
  timeTaken: number
  mode: ExamMode
  answers: Record<number, string>
  createdAt: string
}
