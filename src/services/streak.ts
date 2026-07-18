import { STORAGE_KEYS } from '@/lib/constants'

interface StreakData {
  current: number
  longest: number
  lastActive: string
  history: string[]
}

function today(): string {
  return new Date().toISOString().slice(0, 10)
}

function yesterday(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

export function getStreak(): StreakData {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.STREAK) || 'null') ?? {
      current: 0, longest: 0, lastActive: '', history: [],
    }
  } catch {
    return { current: 0, longest: 0, lastActive: '', history: [] }
  }
}

export function recordActivity(): StreakData {
  const data = getStreak()
  const t = today()

  if (data.lastActive === t) return data

  const isConsecutive = data.lastActive === yesterday()
  const current = isConsecutive ? data.current + 1 : 1
  const longest = Math.max(current, data.longest)
  const history = [...new Set([...data.history, t])].slice(-365)

  const updated: StreakData = { current, longest, lastActive: t, history }
  localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(updated))
  return updated
}
