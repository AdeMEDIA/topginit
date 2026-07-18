import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Edit2, Moon, Sun, Flame, Star, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'
import { FACULTIES } from '@/data/faculties'

export function ProfilePage() {
  const { user, logout } = useAuthStore()
  const { resolved, toggle } = useThemeStore()
  const navigate = useNavigate()
  const [loggingOut, setLoggingOut] = useState(false)

  if (!user) return null

  const faculty = FACULTIES.find(f => f.id === user.faculty)
  const dept = faculty?.departments.find(d => d.id === user.department)

  const handleLogout = async () => {
    setLoggingOut(true)
    await logout()
    navigate('/auth/signin', { replace: true })
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h1 className="text-xl font-display font-bold text-slate-900 dark:text-white">Profile</h1>

      {/* Profile card */}
      <Card padding="lg" className="text-center">
        <div className="relative inline-block mb-3">
          <Avatar name={user.name} size="xl" />
          <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-sm">
            <Edit2 size={12} />
          </button>
        </div>
        <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">{user.name}</h2>
        <p className="text-sm text-slate-400 mt-0.5">{user.email}</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Badge variant="primary">{user.level}L</Badge>
          {dept && <Badge variant="secondary">{dept.name}</Badge>}
          <Badge variant="muted">{user.semester} Sem</Badge>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: <Star size={18} />, label: 'XP', value: user.xp, color: 'text-primary-500' },
          { icon: <Flame size={18} />, label: 'Streak', value: user.streak, color: 'text-orange-500' },
          { icon: <Zap size={18} />, label: 'Coins', value: user.coins, color: 'text-warning-500' },
        ].map(({ icon, label, value, color }) => (
          <Card key={label} padding="sm" className="text-center">
            <div className={`flex justify-center mb-1 ${color}`}>{icon}</div>
            <p className="font-bold text-slate-800 dark:text-slate-200">{value}</p>
            <p className="text-xs text-slate-400">{label}</p>
          </Card>
        ))}
      </div>

      {/* Settings */}
      <Card padding="none">
        <button
          onClick={toggle}
          className="w-full flex items-center gap-3 px-5 py-4 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-2xl transition-colors"
        >
          {resolved === 'dark' ? <Sun size={18} className="text-warning-500" /> : <Moon size={18} className="text-primary-500" />}
          <span className="flex-1 text-left font-medium">
            {resolved === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </span>
        </button>
      </Card>

      {/* Logout */}
      <Button variant="danger" fullWidth onClick={handleLogout} loading={loggingOut}>
        <LogOut size={16} /> Sign Out
      </Button>
    </motion.div>
  )
}
