import { NavLink } from 'react-router-dom'
import { Home, BookOpen, Gamepad2, BarChart2, Trophy, User, Settings, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/stores/authStore'
import { Avatar } from '@/components/ui/Avatar'
import { useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/app/dashboard',   label: 'Dashboard', Icon: Home },
  { to: '/app/practice',    label: 'Practice',  Icon: BookOpen },
  { to: '/app/games',       label: 'Games',     Icon: Gamepad2 },
  { to: '/app/analytics',   label: 'Analytics', Icon: BarChart2 },
  { to: '/app/leaderboard', label: 'Leaderboard', Icon: Trophy },
  { to: '/app/profile',     label: 'Profile',   Icon: User },
]

export function Sidebar() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/auth/signin')
  }

  return (
    <aside className="hidden lg:flex flex-col w-60 shrink-0 h-screen sticky top-0 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 py-4">
      {/* Logo */}
      <div className="px-5 mb-6">
        <span className="font-display font-bold text-xl text-primary-500">TopG CBT</span>
        <p className="text-xs text-slate-400 mt-0.5">FUOYE Learning Platform</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-0.5">
        {NAV_ITEMS.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800',
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 mt-4 space-y-0.5">
        <NavLink
          to="/app/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <Settings size={18} />
          Settings
        </NavLink>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <LogOut size={18} />
          Sign out
        </button>
        {user && (
          <div className="flex items-center gap-2 px-3 py-2 mt-2 rounded-xl bg-slate-50 dark:bg-slate-800">
            <Avatar name={user.name} size="sm" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">{user.name}</p>
              <p className="text-xs text-slate-400 truncate">{user.level}L • {user.department.toUpperCase()}</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
