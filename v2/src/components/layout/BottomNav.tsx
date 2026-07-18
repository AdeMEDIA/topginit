import { NavLink } from 'react-router-dom'
import { Home, BookOpen, Gamepad2, BarChart2, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { to: '/app/dashboard',   label: 'Home',      Icon: Home },
  { to: '/app/practice',    label: 'Practice',  Icon: BookOpen },
  { to: '/app/games',       label: 'Games',     Icon: Gamepad2 },
  { to: '/app/analytics',   label: 'Stats',     Icon: BarChart2 },
  { to: '/app/leaderboard', label: 'Ranks',     Icon: Trophy },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-t border-slate-100 dark:border-slate-800 lg:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {NAV_ITEMS.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-colors min-w-[52px]',
                isActive
                  ? 'text-primary-500'
                  : 'text-slate-400 dark:text-slate-500',
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
