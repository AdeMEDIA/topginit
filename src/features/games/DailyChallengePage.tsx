import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { AchievementToast, useAchievementToasts } from '@/components/ui/AchievementToast'
import { ACHIEVEMENTS, checkAchievements } from '@/data/achievements'
import { COURSES } from '@/data/courses'
import { loadQuestions } from '@/services/questions'
import { saveGameResult, isTodayPlayed, setDailyPlayedDate, secondsUntilMidnight } from '@/services/games'
import { getResults } from '@/services/db'
import { getStreak } from '@/services/streak'
import { useAuthStore } from '@/stores/authStore'
import { shuffle, formatTime, cn } from '@/lib/utils'
import type { Question } from '@/types/question'

type DCStatus = 'loading' | 'already-played' | 'playing' | 'done'

const OPTION_LETTERS = ['A', 'B', 'C', 'D']

function seedRng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 0x100000000
  }
}

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function getDailyQuestions(allQuestions: Question[], dateStr: string): Question[] {
  const seed = dateStr.split('').reduce((s, c) => s + c.charCodeAt(0), 0)
  const rng = seedRng(seed)
  const shuffled = seededShuffle(allQuestions, rng)
  return shuffled.slice(0, 10)
}

export function DailyChallengePage() {
  const navigate = useNavigate()
  const { user, updateUser } = useAuthStore()
  const toasts = useAchievementToasts()

  const [status, setStatus] = useState<DCStatus>('loading')
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(secondsUntilMidnight())

  useEffect(() => {
    if (isTodayPlayed()) { setStatus('already-played'); return }
    const unlocked = COURSES.filter(c => !c.locked && c.qCount > 0)
    const today = new Date().toISOString().slice(0, 10)

    Promise.all(unlocked.map(c => loadQuestions(c.id))).then(pools => {
      const combined = pools.flat()
      const daily = getDailyQuestions(combined, today)
      setQuestions(daily)
      setStatus('playing')
    })
  }, [])

  useEffect(() => {
    if (status !== 'already-played') return
    const t = setInterval(() => setCountdown(secondsUntilMidnight()), 1000)
    return () => clearInterval(t)
  }, [status])

  const handleAnswer = useCallback((letter: string) => {
    if (selected !== null) return
    setSelected(letter)
    setAnswers(a => ({ ...a, [index]: letter }))

    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex(i => i + 1)
        setSelected(null)
      } else {
        const correct = Object.entries({ ...answers, [index]: letter })
          .filter(([i, l]) => l === questions[Number(i)]?.answer).length
        const score = correct

        setDailyPlayedDate()
        saveGameResult({ gameId: 'daily', score, details: `${correct}/10` })

        const xpGained = 100 + correct * 10
        const newXp = (user?.xp ?? 0) + xpGained
        updateUser({ xp: newXp, coins: (user?.coins ?? 0) + 20 })

        const streakData = getStreak()
        const newAchievements = checkAchievements(
          { results: getResults(), gameResults: [], streak: streakData.current, xp: newXp },
          user?.achievements ?? [],
        )
        if (newAchievements.length) {
          updateUser({ achievements: [...(user?.achievements ?? []), ...newAchievements] })
          toasts.push(newAchievements.map(id => ACHIEVEMENTS.find(a => a.id === id)?.name ?? id))
        }

        setStatus('done')
      }
    }, 1000)
  }, [selected, index, questions, answers, user, updateUser, toasts])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (status === 'already-played') {
    return (
      <div className="space-y-5 p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/app/games')} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <ArrowLeft size={18} />
          </button>
          <h1 className="text-lg font-display font-bold text-slate-900 dark:text-white">Daily Challenge</h1>
        </div>
        <Card padding="lg" className="flex flex-col items-center text-center py-12 gap-4">
          <div className="w-16 h-16 rounded-full bg-success-100 dark:bg-success-900/30 flex items-center justify-center">
            <CheckCircle size={32} className="text-success-500" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-slate-900 dark:text-white">Already Completed!</h2>
            <p className="text-sm text-slate-400 mt-1">You've done today's challenge. Come back tomorrow.</p>
          </div>
          <div className="flex items-center gap-2 text-primary-500 font-semibold">
            <Clock size={16} />
            <span className="text-sm">Resets in {formatTime(countdown)}</span>
          </div>
          <Button variant="outline" onClick={() => navigate('/app/games')}>Back to Games</Button>
        </Card>
      </div>
    )
  }

  if (status === 'done') {
    const correct = Object.entries(answers).filter(([i, l]) => l === questions[Number(i)]?.answer).length
    return (
      <div className="space-y-5 p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/app/games')} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <ArrowLeft size={18} />
          </button>
          <h1 className="text-lg font-display font-bold text-slate-900 dark:text-white">Daily Challenge</h1>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card padding="lg" className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto">
              <Calendar size={32} className="text-primary-500" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">{correct}/10</h2>
              <p className="text-slate-400 text-sm mt-1">
                {correct >= 8 ? 'Excellent!' : correct >= 6 ? 'Good job!' : correct >= 4 ? 'Keep practising' : 'Try again tomorrow!'}
              </p>
            </div>
            <div className="text-xs text-success-500 font-medium">+{100 + correct * 10} XP · +20 coins earned</div>
            <Button fullWidth onClick={() => navigate('/app/games')}>Back to Games</Button>
          </Card>
        </motion.div>
        {toasts.current && <AchievementToast message={toasts.current} onDone={toasts.pop} />}
      </div>
    )
  }

  const currentQ = questions[index]
  if (!currentQ) return null

  return (
    <div className="space-y-5 p-4">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/app/games')} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-sm font-display font-bold text-slate-900 dark:text-white">Daily Challenge</h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-500 rounded-full transition-all duration-300"
                style={{ width: `${((index + 1) / 10) * 100}%` }}
              />
            </div>
            <span className="text-xs text-slate-400 shrink-0">{index + 1}/10</span>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <Card padding="md">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed">{currentQ.question}</p>
          </Card>

          <div className="space-y-2.5">
            {currentQ.options.map((opt, i) => {
              const letter = OPTION_LETTERS[i]
              const isSelected = selected === letter
              const isCorrect = isSelected && letter === currentQ.answer
              const isWrong = isSelected && letter !== currentQ.answer
              const isRevealCorrect = selected !== null && letter === currentQ.answer && !isSelected

              return (
                <button
                  key={letter}
                  onClick={() => handleAnswer(letter)}
                  disabled={selected !== null}
                  className={cn(
                    'w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all',
                    isCorrect && 'bg-success-50 border-success-400 dark:bg-success-900/20',
                    isWrong && 'bg-danger-50 border-danger-400 dark:bg-danger-900/20',
                    isRevealCorrect && 'bg-success-50 border-success-400 dark:bg-success-900/20',
                    !isSelected && !isCorrect && !isWrong && !isRevealCorrect && 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary-300',
                  )}
                >
                  <span className={cn(
                    'w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0',
                    isCorrect || isRevealCorrect ? 'bg-success-500 text-white' : isWrong ? 'bg-danger-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
                  )}>
                    {letter}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300 flex-1">{opt}</span>
                  {(isCorrect || isRevealCorrect) && <CheckCircle size={16} className="text-success-500 shrink-0" />}
                  {isWrong && <XCircle size={16} className="text-danger-500 shrink-0" />}
                </button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {toasts.current && <AchievementToast message={toasts.current} onDone={toasts.pop} />}
    </div>
  )
}
