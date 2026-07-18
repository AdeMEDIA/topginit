import { Award, BookOpen, Target, Flame, Zap, Star, GraduationCap, Shield, Trophy, Crown, Calendar, Timer, TrendingUp, LayoutGrid } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { ACHIEVEMENTS } from '@/data/achievements'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BookOpen, Target, Flame, Zap, Star, GraduationCap, Shield, Trophy, Crown,
  Calendar, Timer, Award, TrendingUp, LayoutGrid,
  CalendarCheck: Calendar,
}

interface Props {
  earnedIds: string[]
}

export function AchievementsSection({ earnedIds }: Props) {
  const earned = new Set(earnedIds)
  const earnedList = ACHIEVEMENTS.filter(a => earned.has(a.id))
  const lockedList = ACHIEVEMENTS.filter(a => !earned.has(a.id))

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Achievements</p>
        <span className="text-xs text-slate-400">{earnedList.length}/{ACHIEVEMENTS.length}</span>
      </div>

      {earnedList.length === 0 && (
        <Card padding="md" className="text-center py-6">
          <Award size={28} className="text-slate-300 dark:text-slate-600 mx-auto mb-2" />
          <p className="text-sm text-slate-400">Complete exams and games to earn badges!</p>
        </Card>
      )}

      {earnedList.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {earnedList.map(a => {
            const Icon = ICON_MAP[a.icon] ?? Award
            return (
              <div
                key={a.id}
                title={a.description}
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center"
              >
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-700', a.color.replace('text-', 'text-'))}>
                  <Icon size={20} className={a.color} />
                </div>
                <p className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 leading-tight">{a.name}</p>
              </div>
            )
          })}
        </div>
      )}

      {lockedList.length > 0 && (
        <div>
          <p className="text-xs text-slate-400 mb-2">{lockedList.length} locked</p>
          <div className="grid grid-cols-3 gap-2">
            {lockedList.slice(0, 6).map(a => (
              <div
                key={a.id}
                title={a.description}
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 text-center opacity-50"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-200 dark:bg-slate-700">
                  <Award size={20} className="text-slate-400" />
                </div>
                <p className="text-[10px] font-medium text-slate-400 leading-tight">{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
