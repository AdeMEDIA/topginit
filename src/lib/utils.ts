import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function getGrade(score: number): { letter: string; color: string; label: string } {
  if (score >= 70) return { letter: 'A', color: 'text-success-500', label: 'Excellent' }
  if (score >= 60) return { letter: 'B', color: 'text-primary-500', label: 'Good' }
  if (score >= 50) return { letter: 'C', color: 'text-warning-500', label: 'Average' }
  if (score >= 45) return { letter: 'D', color: 'text-orange-500', label: 'Pass' }
  return { letter: 'F', color: 'text-danger-500', label: 'Fail' }
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generateId(): string {
  return Math.random().toString(36).slice(2, 11)
}
