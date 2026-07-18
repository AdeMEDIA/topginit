import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Phone, Users, Scissors, LogOut, Trophy } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Modal } from '@/components/ui/Modal'
import { Badge } from '@/components/ui/Badge'
import { AchievementToast, useAchievementToasts } from '@/components/ui/AchievementToast'
import { COURSES } from '@/data/courses'
import { ACHIEVEMENTS, checkAchievements } from '@/data/achievements'
import { loadQuestions } from '@/services/questions'
import { saveGameResult, PRIZE_LADDER, SAFE_INDICES, formatPrize } from '@/services/games'
import { getResults } from '@/services/db'
import { getStreak } from '@/services/streak'
import { useAuthStore } from '@/stores/authStore'
import { shuffle, cn } from '@/lib/utils'
import type { Question } from '@/types/question'

type MilStatus = 'course-select' | 'loading' | 'running' | 'answered' | 'game-over' | 'win'

interface MilState {
  questions: Question[]
  index: number
  safePrize: number
  lifelines: { ff: boolean; audience: boolean; friend: boolean }
  hiddenOptions: number[]
  status: MilStatus
  walkedAway: boolean
  finalPrize: number
  answeredCorrectly: boolean
}

const INITIAL_STATE: Omit<MilState, 'questions'> = {
  index: 0,
  safePrize: 0,
  lifelines: { ff: false, audience: false, friend: false },
  hiddenOptions: [],
  status: 'course-select',
  walkedAway: false,
  finalPrize: 0,
  answeredCorrectly: false,
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D']

function seedRng(seed: number) {
  let s = seed
  return () => {
    s = ((s * 1664525) + 1013904223) & 0xFFFFFFFF
    return (s >>> 0) / 0xFFFFFFFF
  }
}

export function MillionairePage() {
  const navigate = useNavigate()
  const { user, updateUser } = useAuthStore()
  const toasts = useAchievementToasts()

  const [state, setState] = useState<MilState>({ ...INITIAL_STATE, questions: [] })
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showAudience, setShowAudience] = useState(false)
  const [showFriend, setShowFriend] = useState(false)
  const [showWalkAway, setShowWalkAway] = useState(false)
  const [audienceData, setAudienceData] = useState<number[]>([])

  const currentQ = state.questions[state.index] ?? null
  const currentPrize = PRIZE_LADDER[state.index] ?? 0
  const isSafe = SAFE_INDICES.includes(state.index)

  const startCourse = useCallback(async (courseId: string) => {
    setState(s => ({ ...s, status: 'loading' }))
    const allQ = await loadQuestions(courseId)
    const shuffled = shuffle(allQ)
    const questions = shuffled.slice(0, Math.min(15, shuffled.length))
    setState({ ...INITIAL_STATE, questions, status: 'running' })
    setSelectedOption(null)
  }, [])

  const awardAndCheck = useCallback((finalPrize: number) => {
    const xpGained = Math.floor(finalPrize / 1000)
    const coinsGained = Math.floor(finalPrize / 10_000)
    const newXp = (user?.xp ?? 0) + xpGained
    const newCoins = (user?.coins ?? 0) + coinsGained

    saveGameResult({ gameId: 'millionaire', score: finalPrize, details: formatPrize(finalPrize) })
    updateUser({ xp: newXp, coins: newCoins })

    const streakData = getStreak()
    const newAchievements = checkAchievements(
      { results: getResults(), gameResults: [], streak: streakData.current, xp: newXp },
      user?.achievements ?? [],
    )
    if (newAchievements.length) {
      updateUser({ achievements: [...(user?.achievements ?? []), ...newAchievements] })
      const names = newAchievements.map(id => ACHIEVEMENTS.find(a => a.id === id)?.name ?? id)
      toasts.push(names)
    }
  }, [user, updateUser, toasts])

  const handleAnswer = useCallback((optionIndex: number) => {
    if (state.status !== 'running' || selectedOption !== null) return
    setSelectedOption(optionIndex)
    setState(s => ({ ...s, status: 'answered' }))

    const q = state.questions[state.index]
    const chosen = OPTION_LETTERS[optionIndex]
    const correct = chosen === q.answer

    setTimeout(() => {
      if (correct) {
        const newIndex = state.index + 1
        const newSafe = SAFE_INDICES.includes(state.index) ? currentPrize : state.safePrize

        if (newIndex >= state.questions.length) {
          const prize = PRIZE_LADDER[state.questions.length - 1]
          awardAndCheck(prize)
          setState(s => ({ ...s, status: 'win', finalPrize: prize, safePrize: newSafe }))
        } else {
          setState(s => ({ ...s, index: newIndex, safePrize: newSafe, hiddenOptions: [], status: 'running', answeredCorrectly: true }))
          setSelectedOption(null)
        }
      } else {
        awardAndCheck(state.safePrize)
        setState(s => ({ ...s, status: 'game-over', finalPrize: s.safePrize, walkedAway: false }))
      }
    }, 1800)
  }, [state, selectedOption, currentPrize, awardAndCheck])

  const handleWalkAway = useCallback(() => {
    awardAndCheck(currentPrize)
    setState(s => ({ ...s, status: 'game-over', finalPrize: currentPrize, walkedAway: true }))
    setShowWalkAway(false)
  }, [currentPrize, awardAndCheck])

  const useFiftyFifty = useCallback(() => {
    if (state.lifelines.ff || !currentQ) return
    const correctIdx = OPTION_LETTERS.indexOf(currentQ.answer)
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== correctIdx)
    const rng = seedRng(state.index * 31 + 7)
    const toHide: number[] = []
    while (toHide.length < 2) {
      const pick = wrongIndices[Math.floor(rng() * wrongIndices.length)]
      if (!toHide.includes(pick)) toHide.push(pick)
    }
    setState(s => ({ ...s, lifelines: { ...s.lifelines, ff: true }, hiddenOptions: toHide }))
  }, [state, currentQ])

  const useAudience = useCallback(() => {
    if (state.lifelines.audience || !currentQ) return
    const correctIdx = OPTION_LETTERS.indexOf(currentQ.answer)
    const rng = seedRng(state.index * 17 + 3)
    const correctPct = Math.floor(rng() * 31) + 40
    const remaining = 100 - correctPct
    const others = [0, 1, 2, 3].filter(i => i !== correctIdx)
    const splits = [Math.floor(rng() * (remaining - 2)), Math.floor(rng() * 6)]
    splits.push(remaining - splits[0] - splits[1])
    const data = [0, 0, 0, 0]
    data[correctIdx] = correctPct
    others.forEach((idx, i) => { data[idx] = splits[i] ?? 0 })
    setAudienceData(data)
    setShowAudience(true)
    setState(s => ({ ...s, lifelines: { ...s.lifelines, audience: true } }))
  }, [state, currentQ])

  const useFriend = useCallback(() => {
    if (state.lifelines.friend || !currentQ) return
    setShowFriend(true)
    setState(s => ({ ...s, lifelines: { ...s.lifelines, friend: true } }))
  }, [state, currentQ])

  if (state.status === 'course-select' || state.status === 'loading') {
    return <CourseSelectScreen loading={state.status === 'loading'} onSelect={startCourse} onBack={() => navigate('/app/games')} />
  }

  if (state.status === 'game-over' || state.status === 'win') {
    return (
      <EndScreen
        prize={state.finalPrize}
        won={state.status === 'win'}
        walkedAway={state.walkedAway}
        onPlayAgain={() => { setState({ ...INITIAL_STATE, questions: [] }); setSelectedOption(null) }}
        onHome={() => navigate('/app/games')}
        toast={toasts.current ? <AchievementToast message={toasts.current} onDone={toasts.pop} /> : null}
      />
    )
  }

  const correctIdx = OPTION_LETTERS.indexOf(currentQ?.answer ?? '')

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 dark:bg-slate-950 text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={() => setShowWalkAway(true)} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
          <LogOut size={14} /> Walk Away
        </button>
        <span className="text-sm font-bold text-warning-400">{formatPrize(currentPrize)}</span>
        <span className="text-xs text-slate-400">Q{state.index + 1}/15</span>
      </div>

      {/* Prize ladder mini */}
      <div className="flex gap-1 px-4 pb-2">
        {PRIZE_LADDER.map((p, i) => (
          <div
            key={i}
            className={cn(
              'flex-1 h-1 rounded-full transition-colors',
              i < state.index ? 'bg-success-500' : i === state.index ? 'bg-warning-400' : 'bg-slate-700',
              SAFE_INDICES.includes(i) && i >= state.index && 'bg-primary-600',
            )}
          />
        ))}
      </div>

      {/* Lifelines */}
      <div className="flex justify-center gap-4 px-4 py-3">
        <LifelineButton icon={<Scissors size={18} />} label="50:50" used={state.lifelines.ff} onClick={useFiftyFifty} />
        <LifelineButton icon={<Users size={18} />} label="Audience" used={state.lifelines.audience} onClick={useAudience} />
        <LifelineButton icon={<Phone size={18} />} label="Friend" used={state.lifelines.friend} onClick={useFriend} />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center px-4 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={state.index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
              <p className="text-base font-medium text-white leading-relaxed text-center">
                {currentQ?.question}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {currentQ?.options.map((opt, i) => {
                if (state.hiddenOptions.includes(i)) return <div key={i} className="h-14" />
                const isSelected = selectedOption === i
                const isCorrect = isSelected && i === correctIdx
                const isWrong = isSelected && i !== correctIdx
                const isRevealedCorrect = state.status === 'answered' && !isSelected && i === correctIdx

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={state.status === 'answered'}
                    className={cn(
                      'h-14 flex items-center gap-2 px-3 rounded-xl border text-sm font-medium text-left transition-all',
                      isCorrect && 'bg-success-500 border-success-400 text-white',
                      isWrong && 'bg-danger-500 border-danger-400 text-white',
                      isRevealedCorrect && 'bg-success-500 border-success-400 text-white',
                      isSelected && state.status === 'answered' ? '' : (!isCorrect && !isWrong && 'bg-slate-800 border-slate-600 text-white hover:bg-slate-700 hover:border-primary-500'),
                    )}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0">
                      {OPTION_LETTERS[i]}
                    </span>
                    <span className="leading-tight text-xs">{opt}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Safe prize indicator */}
      {state.safePrize > 0 && (
        <div className="px-4 pb-4 text-center text-xs text-slate-400">
          Safe at <span className="text-success-400 font-semibold">{formatPrize(state.safePrize)}</span>
        </div>
      )}

      {/* Audience modal */}
      <Modal open={showAudience} onClose={() => setShowAudience(false)} title="Ask the Audience">
        <div className="space-y-2 mt-2">
          {OPTION_LETTERS.map((l, i) => (
            <div key={l} className="flex items-center gap-2">
              <span className="w-5 text-xs font-bold text-slate-500">{l}</span>
              <div className="flex-1 h-6 bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${audienceData[i] ?? 0}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="h-full bg-primary-500 rounded-lg"
                />
              </div>
              <span className="w-8 text-xs font-bold text-slate-700 dark:text-slate-300 text-right">
                {audienceData[i] ?? 0}%
              </span>
            </div>
          ))}
        </div>
      </Modal>

      {/* Phone a friend modal */}
      <Modal open={showFriend} onClose={() => setShowFriend(false)} title="Phone a Friend">
        <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 mt-2">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            "Hmm, I think the answer is{' '}
            <strong className="text-primary-500">{currentQ?.answer}</strong>…{' '}
            probably. But don't hold me to that!"
          </p>
        </div>
      </Modal>

      {/* Walk away confirm */}
      <Modal open={showWalkAway} onClose={() => setShowWalkAway(false)} title="Walk Away?">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
          You'll take home <strong className="text-warning-500">{formatPrize(currentPrize)}</strong> right now.
          Are you sure you want to walk away?
        </p>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={() => setShowWalkAway(false)}>Keep Playing</Button>
          <Button className="flex-1" onClick={handleWalkAway}>Take {formatPrize(currentPrize)}</Button>
        </div>
      </Modal>

      {toasts.current && <AchievementToast message={toasts.current} onDone={toasts.pop} />}
    </div>
  )
}

function LifelineButton({ icon, label, used, onClick }: { icon: React.ReactNode; label: string; used: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={used}
      className={cn(
        'flex flex-col items-center gap-1 w-16 py-2 rounded-xl border text-xs font-medium transition-all',
        used ? 'border-slate-700 text-slate-600 opacity-40' : 'border-primary-500 text-primary-400 hover:bg-primary-500/10',
      )}
    >
      {icon}
      {label}
    </button>
  )
}

function CourseSelectScreen({ loading, onSelect, onBack }: { loading: boolean; onSelect: (id: string) => void; onBack: () => void }) {
  const available = COURSES.filter(c => !c.locked && c.qCount >= 15)
  return (
    <div className="space-y-5 p-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-display font-bold text-slate-900 dark:text-white">Millionaire</h1>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">Choose a course to play with:</p>
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-2">
          {available.map(c => (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary-300 hover:shadow-md transition-all text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <Trophy size={18} className="text-primary-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{c.name}</p>
                <p className="text-xs text-slate-400">{c.code} · {c.qCount} questions</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function EndScreen({ prize, won, walkedAway, onPlayAgain, onHome, toast }: {
  prize: number; won: boolean; walkedAway: boolean
  onPlayAgain: () => void; onHome: () => void; toast: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6 text-center">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-6 w-full max-w-sm">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto shadow-xl">
          <Trophy size={44} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold mb-1">
            {won ? '🎉 You Won!' : walkedAway ? 'Smart Move!' : 'Game Over'}
          </h2>
          <p className="text-slate-400 text-sm">
            {won ? 'Congratulations! You answered all 15 questions!'
              : walkedAway ? 'You walked away with your winnings.'
              : 'Better luck next time!'}
          </p>
        </div>
        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-xs text-slate-400 mb-1">You take home</p>
          <p className="text-4xl font-display font-bold text-warning-400">{formatPrize(prize)}</p>
          <p className="text-xs text-slate-400 mt-2">+{Math.floor(prize / 1000)} XP · +{Math.floor(prize / 10_000)} coins</p>
        </div>
        <div className="space-y-2">
          <Button fullWidth onClick={onPlayAgain}>Play Again</Button>
          <Button variant="outline" fullWidth onClick={onHome}>Back to Games</Button>
        </div>
      </motion.div>
      {toast}
    </div>
  )
}
