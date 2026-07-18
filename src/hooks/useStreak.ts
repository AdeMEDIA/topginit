import { useEffect, useState } from 'react'
import { recordActivity, getStreak } from '@/services/streak'
import { useAuthStore } from '@/stores/authStore'

export function useStreak() {
  const { updateUser } = useAuthStore()
  const [streak, setStreak] = useState(getStreak)

  useEffect(() => {
    const updated = recordActivity()
    setStreak(updated)
    updateUser({ streak: updated.current, lastActive: new Date().toISOString() })
  }, [])

  return streak
}
