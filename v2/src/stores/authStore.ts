import { create } from 'zustand'
import type { User } from '@/types/user'
import { getStoredUser, saveUser, signOut as authSignOut } from '@/services/auth'

interface AuthState {
  user: User | null
  isLoaded: boolean
  setUser: (user: User | null) => void
  updateUser: (patch: Partial<User>) => void
  logout: () => Promise<void>
  init: () => void
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoaded: false,

  init() {
    const user = getStoredUser()
    set({ user, isLoaded: true })
  },

  setUser(user) {
    set({ user })
    if (user) saveUser(user)
  },

  updateUser(patch) {
    const current = get().user
    if (!current) return
    const updated = { ...current, ...patch }
    set({ user: updated })
    saveUser(updated)
  },

  async logout() {
    await authSignOut()
    set({ user: null })
  },
}))
