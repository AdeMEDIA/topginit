import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Lock, ChevronRight, LayoutGrid, List } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useAuthStore } from '@/stores/authStore'
import { COURSES } from '@/data/courses'
import type { Course } from '@/types/course'

export function PracticePage() {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [view, setView] = useState<'grid' | 'list'>('list')

  const available = COURSES.filter(c =>
    (c.department === 'all' || c.department === (user?.department ?? '')) &&
    c.level === (user?.level ?? '100'),
  )

  const ready  = available.filter(c => !c.locked && c.qCount > 0)
  const coming = available.filter(c =>  c.locked || c.qCount === 0)

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-display font-bold text-slate-900 dark:text-white">Practice</h1>
          <p className="text-sm text-slate-500 mt-0.5">{user?.level}L • {user?.semester} Semester</p>
        </div>
        <div className="flex gap-1">
          {([['list', List], ['grid', LayoutGrid]] as const).map(([v, Icon]) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`p-2 rounded-xl transition-colors ${view === v ? 'bg-primary-50 text-primary-500 dark:bg-primary-900/20' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <Icon size={17} />
            </button>
          ))}
        </div>
      </div>

      {ready.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Available</h2>
          <div className={view === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-2'}>
            {ready.map((c, i) => (
              <CourseCard key={c.id} course={c} index={i} view={view} onClick={() => navigate(`/app/practice/${c.id}`)} />
            ))}
          </div>
        </section>
      )}

      {coming.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Coming Soon</h2>
          <div className={view === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-2'}>
            {coming.map((c, i) => (
              <CourseCard key={c.id} course={c} index={i} view={view} locked />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function CourseCard({ course, index, view, onClick, locked }: {
  course: Course; index: number; view: 'grid' | 'list'; onClick?: () => void; locked?: boolean
}) {
  const isGrid = view === 'grid'
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}>
      <Card
        hover={!locked}
        padding="md"
        className={`${locked ? 'opacity-55' : 'cursor-pointer'} ${isGrid ? 'flex flex-col gap-2' : 'flex items-center gap-4'}`}
        onClick={locked ? undefined : onClick}
      >
        <div className={`rounded-xl flex items-center justify-center shrink-0 ${isGrid ? 'w-10 h-10' : 'w-11 h-11'} ${locked ? 'bg-slate-100 dark:bg-slate-700' : 'bg-primary-50 dark:bg-primary-900/20'}`}>
          {locked ? <Lock size={16} className="text-slate-400" /> : <BookOpen size={18} className="text-primary-500" />}
        </div>
        <div className={isGrid ? '' : 'flex-1 min-w-0'}>
          <p className="font-medium text-sm text-slate-800 dark:text-slate-200 truncate">{course.name}</p>
          <p className="text-xs text-slate-400 mt-0.5">{course.code}{!locked && course.qCount > 0 ? ` • ${course.qCount}q` : ''}</p>
        </div>
        {!isGrid && (
          locked
            ? <Badge variant="muted">Soon</Badge>
            : <div className="flex items-center gap-2 shrink-0">
                <Badge variant="primary">{course.topics.length} topics</Badge>
                <ChevronRight size={16} className="text-slate-400" />
              </div>
        )}
      </Card>
    </motion.div>
  )
}
