import type { Achievement } from '@/types/game'
import { COURSES } from './courses'

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_exam',
    name: 'First Step',
    description: 'Complete your first exam',
    icon: 'BookOpen',
    color: 'text-primary-500',
    unlockCondition: ({ results }) => results.length >= 1,
  },
  {
    id: 'perfect_score',
    name: 'Perfectionist',
    description: 'Score 100% on any exam',
    icon: 'Target',
    color: 'text-success-500',
    unlockCondition: ({ results }) => results.some(r => r.score === 100),
  },
  {
    id: 'streak_3',
    name: 'On Fire',
    description: 'Maintain a 3-day streak',
    icon: 'Flame',
    color: 'text-orange-500',
    unlockCondition: ({ streak }) => streak >= 3,
  },
  {
    id: 'streak_7',
    name: 'Unstoppable',
    description: 'Maintain a 7-day streak',
    icon: 'Zap',
    color: 'text-warning-500',
    unlockCondition: ({ streak }) => streak >= 7,
  },
  {
    id: 'xp_500',
    name: 'Rising Star',
    description: 'Reach 500 XP',
    icon: 'Star',
    color: 'text-primary-500',
    unlockCondition: ({ xp }) => xp >= 500,
  },
  {
    id: 'xp_2000',
    name: 'Scholar',
    description: 'Reach 2,000 XP',
    icon: 'GraduationCap',
    color: 'text-secondary-500',
    unlockCondition: ({ xp }) => xp >= 2000,
  },
  {
    id: 'millionaire_safe1',
    name: 'Survivor',
    description: 'Reach the ₦10k safe level in Millionaire',
    icon: 'Shield',
    color: 'text-success-500',
    unlockCondition: ({ gameResults }) =>
      gameResults.some(r => r.gameId === 'millionaire' && r.score >= 10_000),
  },
  {
    id: 'millionaire_safe2',
    name: 'Millionaire',
    description: 'Reach the ₦1M safe level',
    icon: 'Trophy',
    color: 'text-warning-500',
    unlockCondition: ({ gameResults }) =>
      gameResults.some(r => r.gameId === 'millionaire' && r.score >= 1_000_000),
  },
  {
    id: 'millionaire_win',
    name: 'Legend',
    description: 'Win ₦50,000,000 in Millionaire',
    icon: 'Crown',
    color: 'text-yellow-400',
    unlockCondition: ({ gameResults }) =>
      gameResults.some(r => r.gameId === 'millionaire' && r.score >= 50_000_000),
  },
  {
    id: 'daily_first',
    name: 'Daily Grind',
    description: 'Complete your first Daily Challenge',
    icon: 'Calendar',
    color: 'text-primary-500',
    unlockCondition: ({ gameResults }) =>
      gameResults.some(r => r.gameId === 'daily'),
  },
  {
    id: 'daily_streak_5',
    name: 'Consistent',
    description: 'Complete 5 Daily Challenges',
    icon: 'CalendarCheck',
    color: 'text-success-500',
    unlockCondition: ({ gameResults }) =>
      gameResults.filter(r => r.gameId === 'daily').length >= 5,
  },
  {
    id: 'timeattack_20',
    name: 'Speed Demon',
    description: 'Score 20+ correct in Time Attack',
    icon: 'Timer',
    color: 'text-danger-500',
    unlockCondition: ({ gameResults }) =>
      gameResults.some(r => r.gameId === 'timeattack' && r.score >= 20),
  },
  {
    id: 'exams_10',
    name: 'Dedicated',
    description: 'Complete 10 exams',
    icon: 'Award',
    color: 'text-primary-500',
    unlockCondition: ({ results }) => results.length >= 10,
  },
  {
    id: 'pass_rate_80',
    name: 'High Achiever',
    description: 'Average score ≥ 80% across 5+ exams',
    icon: 'TrendingUp',
    color: 'text-success-500',
    unlockCondition: ({ results }) => {
      if (results.length < 5) return false
      const avg = results.reduce((s, r) => s + r.score, 0) / results.length
      return avg >= 80
    },
  },
  {
    id: 'all_courses',
    name: 'All-Rounder',
    description: 'Complete an exam in every unlocked course',
    icon: 'LayoutGrid',
    color: 'text-secondary-500',
    unlockCondition: ({ results }) => {
      const unlockedIds = COURSES.filter(c => !c.locked && c.qCount > 0).map(c => c.id)
      const attemptedIds = new Set(results.map(r => r.courseId))
      return unlockedIds.length > 0 && unlockedIds.every(id => attemptedIds.has(id))
    },
  },
]

export function checkAchievements(
  stats: import('@/types/game').UnlockStats,
  alreadyEarned: string[],
): string[] {
  const earned = new Set(alreadyEarned)
  return ACHIEVEMENTS
    .filter(a => !earned.has(a.id) && a.unlockCondition(stats))
    .map(a => a.id)
}
