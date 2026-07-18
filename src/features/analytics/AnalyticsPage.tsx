import { useMemo } from 'react'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, Cell,
} from 'recharts'
import { Flame, Star, Target, TrendingUp, AlertTriangle, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ProgressRing } from '@/components/ui/ProgressRing'
import { useAuthStore } from '@/stores/authStore'
import { getResults } from '@/services/db'
import { getStreak } from '@/services/streak'
import { COURSES } from '@/data/courses'
import { getGrade } from '@/lib/utils'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.07 } } },
  item: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } },
}

function shortDate(iso: string) {
  const d = new Date(iso)
  return `${d.getDate()}/${d.getMonth() + 1}`
}

export function AnalyticsPage() {
  const { user } = useAuthStore()
  const results = useMemo(() => getResults(), [])
  const streak = useMemo(() => getStreak(), [])

  const totalExams  = results.length
  const avgScore    = totalExams > 0 ? Math.round(results.reduce((s, r) => s + r.score, 0) / totalExams) : 0
  const bestScore   = totalExams > 0 ? Math.max(...results.map(r => r.score)) : 0
  const totalCorrect = results.reduce((s, r) => s + r.correct, 0)
  const totalQ      = results.reduce((s, r) => s + r.total, 0)
  const accuracy    = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0

  // Score trend — last 15 results
  const trendData = results.slice(-15).map((r, i) => ({
    name: shortDate(r.createdAt),
    score: r.score,
    i,
  }))

  // Per-course breakdown
  const courseStats = useMemo(() => {
    const map: Record<string, { name: string; code: string; attempts: number; avg: number; best: number }> = {}
    results.forEach(r => {
      if (!map[r.courseId]) {
        const course = COURSES.find(c => c.id === r.courseId)
        map[r.courseId] = { name: course?.name ?? r.courseName, code: r.courseCode, attempts: 0, avg: 0, best: 0 }
      }
      const s = map[r.courseId]
      s.attempts++
      s.avg = Math.round((s.avg * (s.attempts - 1) + r.score) / s.attempts)
      s.best = Math.max(s.best, r.score)
    })
    return Object.values(map).sort((a, b) => b.attempts - a.attempts)
  }, [results])

  // Weak topics — per-course topics with lowest avg
  const weakTopics = useMemo(() => {
    const topicMap: Record<string, { name: string; courseCode: string; scores: number[] }> = {}
    results.forEach(r => {
      const course = COURSES.find(c => c.id === r.courseId)
      r.topicIds.forEach(tid => {
        const topic = course?.topics.find(t => t.id === tid)
        if (!topic) return
        const key = `${r.courseId}:${tid}`
        if (!topicMap[key]) topicMap[key] = { name: topic.name, courseCode: r.courseCode, scores: [] }
        topicMap[key].scores.push(r.score)
      })
    })
    return Object.values(topicMap)
      .map(t => ({ ...t, avg: Math.round(t.scores.reduce((s, v) => s + v, 0) / t.scores.length) }))
      .filter(t => t.avg < 60 && t.scores.length >= 1)
      .sort((a, b) => a.avg - b.avg)
      .slice(0, 5)
  }, [results])

  // Activity calendar — last 35 days
  const calendarDays = useMemo(() => {
    const days: { date: string; count: number }[] = []
    for (let i = 34; i >= 0; i--) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      const iso = d.toISOString().slice(0, 10)
      const count = results.filter(r => r.createdAt.slice(0, 10) === iso).length
      days.push({ date: iso, count })
    }
    return days
  }, [results])

  const xpLevel   = Math.floor((user?.xp ?? 0) / 200) + 1
  const xpInLevel = (user?.xp ?? 0) % 200
  const grade     = getGrade(avgScore)

  if (totalExams === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-display font-bold text-slate-900 dark:text-white">Analytics</h1>
        <Card className="flex flex-col items-center justify-center py-20 text-center" padding="lg">
          <TrendingUp size={48} className="text-slate-300 dark:text-slate-600 mb-3" />
          <p className="font-semibold text-slate-600 dark:text-slate-400">No data yet</p>
          <p className="text-sm text-slate-400 mt-1">Complete some practice sessions to see your analytics</p>
        </Card>
      </div>
    )
  }

  return (
    <motion.div variants={stagger.container} initial="initial" animate="animate" className="space-y-5">
      <h1 className="text-xl font-display font-bold text-slate-900 dark:text-white">Analytics</h1>

      {/* KPI row */}
      <motion.div variants={stagger.item} className="grid grid-cols-2 gap-3">
        <Card padding="md" className="flex items-center gap-3">
          <ProgressRing value={avgScore} size={52} strokeWidth={5} color={avgScore >= 50 ? '#10b981' : '#ef4444'}>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{avgScore}%</span>
          </ProgressRing>
          <div>
            <p className="text-xs text-slate-400">Avg Score</p>
            <p className={`text-base font-bold ${grade.color}`}>{grade.letter} — {grade.label}</p>
          </div>
        </Card>
        <Card padding="md" className="flex items-center gap-3">
          <ProgressRing value={accuracy} size={52} strokeWidth={5} color="#6366f1">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{accuracy}%</span>
          </ProgressRing>
          <div>
            <p className="text-xs text-slate-400">Accuracy</p>
            <p className="text-base font-bold text-slate-800 dark:text-slate-200">{totalCorrect}/{totalQ}</p>
          </div>
        </Card>
        <Card padding="sm" className="flex items-center gap-3">
          <Flame size={20} className="text-orange-500 shrink-0" />
          <div>
            <p className="text-xs text-slate-400">Streak</p>
            <p className="text-base font-bold text-slate-800 dark:text-slate-200">{streak.current} days</p>
          </div>
        </Card>
        <Card padding="sm" className="flex items-center gap-3">
          <Trophy size={20} className="text-warning-500 shrink-0" />
          <div>
            <p className="text-xs text-slate-400">Best Score</p>
            <p className="text-base font-bold text-slate-800 dark:text-slate-200">{bestScore}%</p>
          </div>
        </Card>
      </motion.div>

      {/* XP / Level */}
      <motion.div variants={stagger.item}>
        <Card padding="md">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-primary-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Level {xpLevel}</span>
            </div>
            <span className="text-xs text-slate-400">{user?.xp ?? 0} XP total</span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-700"
              style={{ width: `${(xpInLevel / 200) * 100}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-1">{xpInLevel} / 200 XP to Level {xpLevel + 1}</p>
        </Card>
      </motion.div>

      {/* Score trend */}
      {trendData.length >= 2 && (
        <motion.div variants={stagger.item}>
          <Card padding="md">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Score Trend</p>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={trendData} margin={{ top: 4, right: 4, bottom: 0, left: -28 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip
                  contentStyle={{ background: '#1e293b', border: 'none', borderRadius: 12, fontSize: 12 }}
                  labelStyle={{ color: '#94a3b8' }}
                  itemStyle={{ color: '#818cf8' }}
                  formatter={(v) => [`${v}%`, 'Score']}
                />
                <Line type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={2} dot={{ r: 3, fill: '#6366f1' }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      )}

      {/* Per-course bars */}
      {courseStats.length > 0 && (
        <motion.div variants={stagger.item}>
          <Card padding="md">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Course Performance</p>
            <ResponsiveContainer width="100%" height={Math.max(120, courseStats.length * 36)}>
              <BarChart data={courseStats} layout="vertical" margin={{ top: 0, right: 8, bottom: 0, left: 4 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(148,163,184,0.2)" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis type="category" dataKey="code" tick={{ fontSize: 11, fill: '#94a3b8' }} width={56} />
                <Tooltip
                  contentStyle={{ background: '#1e293b', border: 'none', borderRadius: 12, fontSize: 12 }}
                  labelStyle={{ color: '#94a3b8' }}
                  formatter={(v) => [`${v}%`]}
                />
                <Bar dataKey="avg" radius={[0, 6, 6, 0]}>
                  {courseStats.map((entry, i) => (
                    <Cell key={i} fill={entry.avg >= 70 ? '#10b981' : entry.avg >= 50 ? '#6366f1' : '#ef4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      )}

      {/* Activity calendar */}
      <motion.div variants={stagger.item}>
        <Card padding="md">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Activity — Last 35 Days</p>
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map(({ date, count }) => (
              <div
                key={date}
                title={`${date}: ${count} session${count !== 1 ? 's' : ''}`}
                className={`h-7 rounded-md transition-colors ${
                  count === 0 ? 'bg-slate-100 dark:bg-slate-700/50'
                  : count === 1 ? 'bg-primary-200 dark:bg-primary-800'
                  : count <= 3 ? 'bg-primary-400 dark:bg-primary-600'
                  : 'bg-primary-600 dark:bg-primary-400'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700 inline-block" /> None</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary-200 dark:bg-primary-800 inline-block" /> 1</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary-400 inline-block" /> 2–3</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary-600 inline-block" /> 4+</span>
          </div>
        </Card>
      </motion.div>

      {/* Weak topics */}
      {weakTopics.length > 0 && (
        <motion.div variants={stagger.item}>
          <Card padding="md">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={16} className="text-warning-500" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Needs Work</p>
            </div>
            <div className="space-y-2">
              {weakTopics.map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-700 dark:text-slate-300 truncate">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.courseCode}</p>
                  </div>
                  <Badge variant={t.avg >= 50 ? 'warning' : 'danger'}>{t.avg}%</Badge>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      )}

      {/* Exam history summary */}
      <motion.div variants={stagger.item}>
        <Card padding="md">
          <div className="flex items-center gap-2 mb-3">
            <Target size={16} className="text-primary-500" />
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Session Summary</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: 'Exams',    value: totalExams },
              { label: 'Passed',   value: results.filter(r => r.score >= 50).length },
              { label: 'Longest streak', value: `${streak.longest}d` },
            ].map(({ label, value }) => (
              <div key={label} className="bg-slate-50 dark:bg-slate-700/50 rounded-xl py-3">
                <p className="text-base font-bold text-slate-800 dark:text-slate-200">{value}</p>
                <p className="text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <div className="h-2" />
    </motion.div>
  )
}
