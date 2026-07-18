import { useMemo, useState } from 'react'
import { Trophy, Medal, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { useAuthStore } from '@/stores/authStore'
import { getResults } from '@/services/db'
import { getGameResults, formatPrize } from '@/services/games'
import { FACULTIES } from '@/data/faculties'
import { cn } from '@/lib/utils'

type Tab = 'dept' | 'overall' | 'games'

interface LeaderRow {
  id: string
  name: string
  score: number
  label: string
  isYou: boolean
  ghost: boolean
}

function seededName(seed: number): string {
  const firstNames = ['Adaeze', 'Emeka', 'Kemi', 'Tobi', 'Ngozi', 'Seun', 'Chidi', 'Amaka', 'Tunde', 'Yetunde']
  const lastNames = ['Okonkwo', 'Adeyemi', 'Eze', 'Nwosu', 'Balogun', 'Ibrahim', 'Adeleke', 'Obi', 'Fashola', 'Uche']
  let s = seed >>> 0
  const next = () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s >>> 0 }
  return `${firstNames[next() % firstNames.length]} ${lastNames[next() % lastNames.length]}`
}

function buildGhosts(userXp: number, userId: string, count = 5): LeaderRow[] {
  const seed = userId.split('').reduce((s, c) => s + c.charCodeAt(0), 0)
  let s = seed >>> 0
  const next = () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s >>> 0 }
  return Array.from({ length: count }, (_, i) => {
    const variance = (next() % 300) - 150
    const score = Math.max(10, userXp + variance + (i - 2) * 80)
    return { id: `ghost-${i}`, name: seededName(seed + i * 13), score, label: `${score} XP`, isYou: false, ghost: true }
  })
}

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1) return <Trophy size={16} className="text-yellow-400" />
  if (rank === 2) return <Medal size={16} className="text-slate-400" />
  if (rank === 3) return <Medal size={16} className="text-amber-600" />
  return <span className="text-xs font-bold text-slate-400 w-4 text-center">{rank}</span>
}

function LeaderList({ rows }: { rows: LeaderRow[] }) {
  const sorted = [...rows].sort((a, b) => b.score - a.score)
  return (
    <div className="space-y-2">
      {sorted.map((row, idx) => (
        <motion.div
          key={row.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.04 }}
        >
          <Card
            padding="sm"
            className={cn(
              'flex items-center gap-3 px-4 py-3',
              row.isYou && 'border-primary-300 dark:border-primary-600 bg-primary-50 dark:bg-primary-900/20',
              row.ghost && 'opacity-50',
            )}
          >
            <div className="w-5 flex items-center justify-center shrink-0">
              <RankIcon rank={idx + 1} />
            </div>
            <Avatar name={row.name} size="sm" />
            <div className="flex-1 min-w-0">
              <p className={cn('text-sm font-semibold truncate', row.isYou ? 'text-primary-600 dark:text-primary-400' : 'text-slate-800 dark:text-slate-200')}>
                {row.name}
                {row.isYou && <span className="ml-1.5 text-xs font-normal text-primary-400">(you)</span>}
              </p>
            </div>
            <span className={cn('text-sm font-bold shrink-0', row.isYou ? 'text-primary-500' : 'text-slate-600 dark:text-slate-400')}>
              {row.label}
            </span>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function LeaderboardPage() {
  const { user } = useAuthStore()
  const [tab, setTab] = useState<Tab>('dept')
  const results = useMemo(() => getResults(), [])
  const gameResults = useMemo(() => getGameResults(), [])

  const userXp = user?.xp ?? 0
  const userId = user?.id ?? 'me'
  const userName = user?.name ?? 'You'

  const faculty = FACULTIES.find(f => f.id === user?.faculty)
  const dept = faculty?.departments.find(d => d.id === user?.department)

  const deptRows = useMemo((): LeaderRow[] => {
    const youRow: LeaderRow = { id: userId, name: userName, score: userXp, label: `${userXp} XP`, isYou: true, ghost: false }
    return [...buildGhosts(userXp, userId, 6), youRow]
  }, [userXp, userId, userName])

  const overallRows = useMemo((): LeaderRow[] => {
    const totalExamXp = results.reduce((s, r) => s + r.correct * 10 + 50, 0)
    const totalGameXp = gameResults.reduce((s, g) => {
      if (g.gameId === 'millionaire') return s + Math.floor(g.score / 1000)
      if (g.gameId === 'timeattack') return s + g.score * 5
      return s + 100
    }, 0)
    const total = totalExamXp + totalGameXp
    const youRow: LeaderRow = { id: userId, name: userName, score: total, label: `${total} XP`, isYou: true, ghost: false }
    return [...buildGhosts(total, userId + 'o', 8), youRow]
  }, [results, gameResults, userId, userName])

  const milBest = gameResults.filter(r => r.gameId === 'millionaire').sort((a, b) => b.score - a.score)[0]
  const taBest = gameResults.filter(r => r.gameId === 'timeattack').sort((a, b) => b.score - a.score)[0]
  const dcCount = gameResults.filter(r => r.gameId === 'daily').length

  const tabs: { id: Tab; label: string }[] = [
    { id: 'dept', label: dept?.name ?? 'Department' },
    { id: 'overall', label: 'Overall' },
    { id: 'games', label: 'Games' },
  ]

  const yourRank = [...deptRows].sort((a, b) => b.score - a.score).findIndex(r => r.isYou) + 1

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-display font-bold text-slate-900 dark:text-white">Leaderboard</h1>

      <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 gap-1">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              'flex-1 py-2 text-xs font-semibold rounded-xl transition-all truncate',
              tab === t.id ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500',
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <Card padding="md" className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-0">
        <div className="flex items-center gap-3">
          <Star size={18} className="shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs opacity-80">
              {tab === 'games' ? 'Your Game Stats' : 'Your XP Rank'}
            </p>
            <p className="font-bold truncate">
              {tab === 'games'
                ? `${dcCount} daily · ${taBest?.score ?? 0} TA best`
                : tab === 'dept'
                  ? `${userXp} XP in ${dept?.name ?? 'dept'}`
                  : `${userXp} total XP`}
            </p>
          </div>
          {tab !== 'games' && (
            <Badge variant="muted" className="bg-white/20 text-white border-0 text-xs shrink-0">
              #{yourRank}
            </Badge>
          )}
        </div>
      </Card>

      {tab === 'dept' && (
        <div className="space-y-2">
          <p className="text-xs text-slate-400 px-1">Top students in {dept?.name ?? 'your department'}</p>
          <LeaderList rows={deptRows} />
        </div>
      )}

      {tab === 'overall' && (
        <div className="space-y-2">
          <p className="text-xs text-slate-400 px-1">Combined exam + game XP</p>
          <LeaderList rows={overallRows} />
        </div>
      )}

      {tab === 'games' && (
        <div className="space-y-3">
          {[
            { label: 'Millionaire Best', value: milBest ? formatPrize(milBest.score) : '—', color: 'text-warning-500' },
            { label: 'Time Attack Best', value: taBest ? `${taBest.score} correct` : '—', color: 'text-danger-500' },
            { label: 'Daily Challenges', value: dcCount > 0 ? `${dcCount} completed` : '—', color: 'text-primary-500' },
          ].map(({ label, value, color }) => (
            <Card key={label} padding="sm" className="flex items-center justify-between px-4 py-3">
              <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
              <p className={cn('text-sm font-bold', color)}>{value}</p>
            </Card>
          ))}
          {gameResults.length === 0 && (
            <Card padding="lg" className="text-center">
              <Trophy size={32} className="text-slate-300 dark:text-slate-600 mx-auto mb-2" />
              <p className="text-sm text-slate-400">Play some games to see your scores here!</p>
            </Card>
          )}
        </div>
      )}

      <p className="text-xs text-center text-slate-400 pb-2">
        Rankings are local — real-time leaderboards coming in Phase 5.
      </p>
    </div>
  )
}
