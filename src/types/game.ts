import type { ExamResult } from './exam'

export interface GameResult {
  id: string
  gameId: 'millionaire' | 'daily' | 'timeattack'
  score: number
  details: string
  createdAt: string
}

export interface UnlockStats {
  results: ExamResult[]
  gameResults: GameResult[]
  streak: number
  xp: number
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  color: string
  unlockCondition: (stats: UnlockStats) => boolean
}
