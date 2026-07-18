import { BookOpen, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useAuthStore } from '@/stores/authStore'
import { COURSES } from '@/data/courses'

export function PracticePage() {
  const { user } = useAuthStore()

  const available = COURSES.filter(c =>
    (c.department === 'all' || c.department === (user?.department ?? '')) &&
    c.level === (user?.level ?? '100'),
  )

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-display font-bold text-slate-900 dark:text-white">Practice</h1>
        <p className="text-sm text-slate-500 mt-0.5">{user?.level}L • {user?.semester} Semester</p>
      </div>

      <div className="space-y-2">
        {available.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
            <Card hover={!c.locked} padding="md" className={`flex items-center gap-4 ${c.locked ? 'opacity-60' : ''}`}>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${c.locked ? 'bg-slate-100 dark:bg-slate-700' : 'bg-primary-50 dark:bg-primary-900/20'}`}>
                {c.locked ? <Lock size={18} className="text-slate-400" /> : <BookOpen size={18} className="text-primary-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-slate-800 dark:text-slate-200 truncate">{c.name}</p>
                <p className="text-xs text-slate-400">{c.code} • {c.qCount > 0 ? `${c.qCount} questions` : 'Coming soon'}</p>
              </div>
              {c.locked || c.qCount === 0
                ? <Badge variant="muted">Soon</Badge>
                : <Badge variant="primary">{c.topics.length} topics</Badge>
              }
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
