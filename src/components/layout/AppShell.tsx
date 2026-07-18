import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { BottomNav } from './BottomNav'
import { Sidebar } from './Sidebar'
import { recordActivity } from '@/services/streak'
import { useAuthStore } from '@/stores/authStore'

export function AppShell() {
  const { updateUser } = useAuthStore()

  useEffect(() => {
    const s = recordActivity()
    updateUser({ streak: s.current, lastActive: new Date().toISOString() })
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 px-4 py-4 pb-20 lg:pb-4 max-w-4xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
