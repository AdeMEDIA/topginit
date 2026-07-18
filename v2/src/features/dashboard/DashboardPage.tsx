import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Gamepad2, BarChart2, Trophy, Flame, Star, Zap, Target } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { ProgressRing } from '@/components/ui/ProgressRing'
import { Badge } from '@/components/ui/Badge'
import { useAuthStore } from '@/stores/authStore'
import { COURSES } from '@/data/courses'
import { getResults } from '@/services/db'

const QUICK_ACTIONS = [
  { to: '/app/practice', label: 'Practice',    Icon: BookOpen,  color: 'from-primary-400 to-primary-600',   bg: 'bg-primary-50 dark:bg-primary-900/20',   text: 'text-primary-500' },
  { to: '/app/games',    label: 'Games',       Icon: Gamepad2,  color: 'from-secondary-400 to-secondary-600', bg: 'bg-purple-50 dark:bg-purple-900/20',    text: 'text-secondary-500' },
  { to: '/app/analytics',label: 'Analytics',   Icon: BarChart2, color: 'from-success-400 to-success-600',   bg: 'bg-emerald-50 dark:bg-emerald-900/20',   text: 'text-success-500' },
  { to: '/app/leaderboard', label: 'Ranks',   Icon: Trophy,    color: 'from-warning-400 to-warning-600',   bg: 'bg-amber-50 dark:bg-amber-900/20',       text: 'text-warning-500' },
]

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.06 } } },
  item: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } },
}

export function DashboardPage() {
  const { user } = useAuthStore()
  const results = getResults()
  const totalExams = results.length
  const avgScore = totalExams > 0
    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / totalExams)
    : 0

  const userCourses = COURSES.filter(c =>
    !c.locked && c.qCount > 0 &&
    (c.department === 'all' || c.department === (user?.department ?? '')) &&
    c.level === (user?.level ?? '100'),
  )

  const greeting = () => {
    const h = new Date().getHours()
    if (h < 12) return 'Good morning'
    if (h < 17) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <motion.div
      variants={stagger.container}
      initial="initial"
      animate="animate"
      className="space-y-5"
    >
      {/* Welcome banner */}
      <motion.div variants={stagger.item}>
        <Card className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-0" padding="lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-primary-100 text-sm">{greeting()},</p>
              <h1 className="font-display font-bold text-xl mt-0.5">{user?.name?.split(' ')[0] ?? 'Student'} 👋</h1>
              <p className="text-primary-100 text-sm mt-1">{user?.level}L • {user?.department?.toUpperCase()} • {user?.semester} Semester</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 bg-white/20 rounded-xl px-2.5 py-1.5">
                <Flame size={14} className="text-orange-200" />
                <span className="text-sm font-bold">{user?.streak ?? 0}</span>
              </div>
              <p className="text-xs text-primary-100 mt-1">day streak</p>
            </div>
          </div>

          {/* XP bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-primary-100 mb-1">
              <span className="flex items-center gap-1"><Star size={11} /> {user?.xp ?? 0} XP</span>
              <span>Level {Math.floor((user?.xp ?? 0) / 200) + 1}</span>
            </div>
            <div className="h-1.5 bg-white/30 rounded-full">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${((user?.xp ?? 0) % 200) / 2}%` }}
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats row */}
      <motion.div variants={stagger.item} className="grid grid-cols-3 gap-3">
        <StatMini icon={<BookOpen size={16} />} label="Exams" value={totalExams} color="text-primary-500" />
        <StatMini icon={<Target size={16} />} label="Avg Score" value={`${avgScore}%`} color="text-success-500" />
        <StatMini icon={<Zap size={16} />} label="Coins" value={user?.coins ?? 0} color="text-warning-500" />
      </motion.div>

      {/* Quick actions */}
      <motion.div variants={stagger.item}>
        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {QUICK_ACTIONS.map(({ to, label, Icon, bg, text }) => (
            <Link key={to} to={to}>
              <Card hover padding="md" className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${bg}`}>
                  <Icon size={20} className={text} />
                </div>
                <span className="font-medium text-sm text-slate-800 dark:text-slate-200">{label}</span>
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Available courses */}
      {userCourses.length > 0 && (
        <motion.div variants={stagger.item}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Your Courses</h2>
            <Link to="/app/practice" className="text-xs text-primary-500 font-medium">See all</Link>
          </div>
          <div className="space-y-3">
            {userCourses.slice(0, 4).map(course => {
              const courseResults = results.filter(r => r.courseId === course.id)
              const avg = courseResults.length > 0
                ? Math.round(courseResults.reduce((s, r) => s + r.score, 0) / courseResults.length)
                : 0
              return (
                <Link key={course.id} to={`/app/practice/${course.id}`}>
                  <Card hover padding="md" className="flex items-center gap-4">
                    <ProgressRing value={avg} size={44} strokeWidth={4}>
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">{avg}%</span>
                    </ProgressRing>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-slate-800 dark:text-slate-200 truncate">{course.name}</p>
                      <p className="text-xs text-slate-400">{course.code} • {course.qCount} questions</p>
                    </div>
                    <Badge variant="muted" className="shrink-0">{courseResults.length} attempts</Badge>
                  </Card>
                </Link>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Recent results */}
      {results.length > 0 && (
        <motion.div variants={stagger.item}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Recent Activity</h2>
          </div>
          <div className="space-y-2">
            {results.slice(-3).reverse().map(r => (
              <Card key={r.id} padding="sm" className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${r.score >= 50 ? 'bg-success-50 dark:bg-success-900/20' : 'bg-danger-50 dark:bg-danger-900/20'}`}>
                  <span className={`text-sm font-bold ${r.score >= 50 ? 'text-success-500' : 'text-danger-500'}`}>{r.score}%</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">{r.courseName}</p>
                  <p className="text-xs text-slate-400">{r.correct}/{r.total} correct</p>
                </div>
                <Badge variant={r.score >= 70 ? 'success' : r.score >= 50 ? 'warning' : 'danger'} className="shrink-0">
                  {r.score >= 70 ? 'Pass' : r.score >= 50 ? 'Fair' : 'Fail'}
                </Badge>
              </Card>
            ))}
          </div>
        </motion.div>
      )}

      {/* Spacer for bottom nav */}
      <div className="h-2" />
    </motion.div>
  )
}

function StatMini({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string | number; color: string }) {
  return (
    <Card padding="sm" className="text-center">
      <div className={`flex justify-center mb-1 ${color}`}>{icon}</div>
      <p className="text-base font-bold text-slate-800 dark:text-slate-200">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </Card>
  )
}
