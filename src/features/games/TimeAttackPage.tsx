import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Timer, CheckCircle, XCircle, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { AchievementToast, useAchievementToasts } from '@/components/ui/AchievementToast'
import { ACHIEVEMENTS, checkAchievements } from '@/data/achievements'
import { COURSES } from '@/data/courses'
import { loadQuestions } from '@/services/questions'
import { saveGameResult } from '@/services/games'
import { getResults } from '@/services/db'
import { getStreak } from '@/services/streak'
import { useAuthStore } from '@/stores/authStore'
import { shuffle, cn } from '@/lib/utils'
import type { Question } from '@/types/question'

type TAStatus = 'loading' | 'ready' | 'playing' | 'done'

const OPTION_LETTERS = ['A', 'B', 'C', 'D']
const START_TIME = 60

export function TimeAttackPage() {
  const navigate = useNavigate()
  const { user, updateUser } = useAuthStore()
  const toasts = useAchievementToasts()

  const [status, setStatus] = useState<TAStatus>('loading')
  const [pool, setPool] = useState<Question[]>([])
  const [poolIndex, setPoolIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(START_TIME)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const unlocked = COURSES.filter(c => !c.locked && c.qCount > 0)
    Promise.all(unlocked.map(c => loadQuestions(c.id))).then(pools => {
      setPool(shuffle(pools.flat()))
      setStatus('ready')
    })
  }, [])

  const startTimer = useCallback(() => {
    if (timerRef.current) return
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!)
          timerRef.current = null
          setStatus('done')
          return 0
        }
        return t - 1
      })
    }, 1000)
  }, [])

  const handleAnswer = useCallback((letter: string) => {
    if (selected !== null) return
    if (status === 'ready') {
      setStatus('playing')
      startTimer()
    }
    setSelected(letter)

    const q = pool[poolIndex % pool.length]
    const isCorrect = letter === q.answer

    setTotal(t => t + 1)
    if (isCorrect) {
      setCorrect(c => c + 1)
      setTimeLeft(t => Math.min(t + 2, START_TIME + 60))
    } else {
      setTimeLeft(t => Math.max(0, t - 3))
    }

    setTimeout(() => {
      setPoolIndex(i => i + 1)
      setSelected(null)
    }, 600)
  }, [selected, status, pool, poolIndex, startTimer])

  useEffect(() => {
    if (status === 'done') {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }

      saveGameResult({ gameId: 'timeattack', score: correct, details: `${correct} correct` })
      const xpGained = correct * 5
      const newXp = (user?.xp ?? 0) + xpGained
      updateUser({ xp: newXp, coins: (user?.coins ?? 0) + correct })

      const streakData = getStreak()
      const newAchievements = checkAchievements(
        { results: getResults(), gameResults: [], streak: streakData.current, xp: newXp },
        user?.achievements ?? [],
      )
      if (newAchievements.length) {
        updateUser({ achievements: [...(user?.achievements ?? []), ...newAchievements] })
        toasts.push(newAchievements.map(id => ACHIEVEMENTS.find(a => a.id === id)?.name ?? id))
      }
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [status])

  const currentQ = pool[poolIndex % Math.max(1, pool.length)]
  const isLowTime = timeLeft <= 10

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-danger-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (status === 'done') {
    return (
      <div className="space-y-5 p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/app/games')} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <ArrowLeft size={18} />
          </button>
          <h1 className="text-lg font-display font-bold text-slate-900 dark:text-white">Time Attack</h1>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card padding="lg" className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-danger-100 dark:bg-danger-900/30 flex items-center justify-center mx-auto">
              <Timer size={32} className="text-danger-500" />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white">{correct}</h2>
              <p className="text-slate-400 text-sm mt-1">
                correct out of {total} · {total > 0 ? Math.round((correct / total) * 100) : 0}% accuracy
              </p>
            </div>
            <div className="text-xs text-success-500 font-medium">+{correct * 5} XP · +{correct} coins</div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" fullWidth onClick={() => {
                setStatus('ready'); setCorrect(0); setTotal(0); setTimeLeft(START_TIME); setPoolIndex(0); setSelected(null); setPool(p => shuffle([...p]))
              }}>
                Play Again
              </Button>
              <Button fullWidth onClick={() => navigate('/app/games')}>Done</Button>
            </div>
          </Card>
        </motion.div>
        {toasts.current && <AchievementToast message={toasts.current} onDone={toasts.pop} />}
      </div>
    )
  }

  if (!currentQ) return null

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <button onClick={() => navigate('/app/games')} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <ArrowLeft size={18} />
        </button>
        <div className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-lg transition-colors',
          isLowTime ? 'bg-danger-100 text-danger-500 dark:bg-danger-900/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        )}>
          <Timer size={18} />
          {timeLeft}s
        </div>
        <div className="flex items-center gap-1 text-sm">
          <CheckCircle size={14} className="text-success-500" />
          <span className="font-bold text-slate-700 dark:text-slate-300">{correct}</span>
        </div>
      </div>

      {/* Timer bar */}
      <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className={cn('h-full rounded-full', isLowTime ? 'bg-danger-500' : 'bg-primary-500')}
          animate={{ width: `${Math.min((timeLeft / START_TIME) * 100, 100)}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {status === 'ready' && (
        <div className="flex items-center gap-2 justify-center text-sm text-slate-400">
          <Play size={14} /> Answer to start the timer
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={poolIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="space-y-3"
        >
          <Card padding="md">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed">{currentQ.question}</p>
          </Card>

          <div className="grid grid-cols-2 gap-2">
            {currentQ.options.map((opt, i) => {
              const letter = OPTION_LETTERS[i]
              const isSelected = selected === letter
              const isCorrect = isSelected && letter === currentQ.answer
              const isWrong = isSelected && letter !== currentQ.answer

              return (
                <button
                  key={letter}
                  onClick={() => handleAnswer(letter)}
                  disabled={selected !== null}
                  className={cn(
                    'flex items-start gap-2 p-3 rounded-xl border text-left transition-all text-sm',
                    isCorrect && 'bg-success-50 border-success-400 dark:bg-success-900/20',
                    isWrong && 'bg-danger-50 border-danger-400 dark:bg-danger-900/20',
                    !isSelected && 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary-300 active:scale-95',
                  )}
                >
                  <span className={cn(
                    'w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5',
                    isCorrect ? 'bg-success-500 text-white' : isWrong ? 'bg-danger-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
                  )}>
                    {letter}
                  </span>
                  <span className="text-xs text-slate-700 dark:text-slate-300 leading-snug">{opt}</span>
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
