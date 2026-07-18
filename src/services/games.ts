import { STORAGE_KEYS } from '@/lib/constants'
import { generateId } from '@/lib/utils'
import type { GameResult } from '@/types/game'

function today(): string {
  return new Date().toISOString().slice(0, 10)
}

export function saveGameResult(result: Omit<GameResult, 'id' | 'createdAt'>): GameResult {
  const full: GameResult = { ...result, id: generateId(), createdAt: new Date().toISOString() }
  try {
    const existing = getGameResults()
    localStorage.setItem(STORAGE_KEYS.GAME_RESULTS, JSON.stringify([...existing, full]))
  } catch {
    // ignore
  }
  return full
}

export function getGameResults(): GameResult[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.GAME_RESULTS) || '[]') ?? []
  } catch {
    return []
  }
}

export function getDailyPlayedDate(): string | null {
  return localStorage.getItem(STORAGE_KEYS.DAILY_PLAYED)
}

export function setDailyPlayedDate(): void {
  localStorage.setItem(STORAGE_KEYS.DAILY_PLAYED, today())
}

export function isTodayPlayed(): boolean {
  return getDailyPlayedDate() === today()
}

export function secondsUntilMidnight(): number {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(24, 0, 0, 0)
  return Math.floor((midnight.getTime() - now.getTime()) / 1000)
}

export function formatPrize(amount: number): string {
  if (amount === 0) return '₦0'
  if (amount >= 1_000_000) return `₦${(amount / 1_000_000).toFixed(amount % 1_000_000 === 0 ? 0 : 1)}M`
  if (amount >= 1_000) return `₦${(amount / 1_000).toFixed(0)}k`
  return `₦${amount}`
}

export const PRIZE_LADDER = [
  1_000, 2_000, 5_000, 10_000, 25_000,
  50_000, 100_000, 250_000, 500_000, 1_000_000,
  2_500_000, 5_000_000, 10_000_000, 25_000_000, 50_000_000,
]

export const SAFE_INDICES = [3, 9]
