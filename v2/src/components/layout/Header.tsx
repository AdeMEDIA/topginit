import { Bell, Moon, Sun, Search } from 'lucide-react'
import { useThemeStore } from '@/stores/themeStore'
import { useAuthStore } from '@/stores/authStore'
import { Avatar } from '@/components/ui/Avatar'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { resolved, toggle } = useThemeStore()
  const { user } = useAuthStore()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-center gap-3 px-4 h-14 max-w-4xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => navigate('/app/dashboard')}
          className="font-display font-bold text-lg text-primary-500 mr-auto shrink-0"
        >
          TopG
        </button>

        {/* Search */}
        <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-sm flex-1 max-w-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <Search size={15} />
          <span>Search courses…</span>
        </button>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {resolved === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary-500" />
          </button>
          <button onClick={() => navigate('/app/profile')} className="ml-1">
            <Avatar name={user?.name} size="sm" />
          </button>
        </div>
      </div>
    </header>
  )
}
