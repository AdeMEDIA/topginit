export interface Question {
  question: string
  options: string[]
  answer: string
  explanation?: string
}

export type QuestionWithIndex = Question & { originalIndex: number }
