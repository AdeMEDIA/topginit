import { create } from 'zustand'
import { STORAGE_KEYS } from '@/lib/constants'

type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
  theme: Theme
  resolved: 'light' | 'dark'
  setTheme: (t: Theme) => void
  toggle: () => void
}

function applyTheme(resolved: 'light' | 'dark') {
  document.documentElement.classList.toggle('dark', resolved === 'dark')
}

function resolveTheme(t: Theme): 'light' | 'dark' {
  if (t === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return t
}

export const useThemeStore = create<ThemeState>((set) => {
  const stored = (localStorage.getItem(STORAGE_KEYS.THEME) as Theme | null) || 'system'
  const resolved = resolveTheme(stored)
  applyTheme(resolved)

  return {
    theme: stored,
    resolved,
    setTheme(t) {
      const r = resolveTheme(t)
      localStorage.setItem(STORAGE_KEYS.THEME, t)
      applyTheme(r)
      set({ theme: t, resolved: r })
    },
    toggle() {
      set(s => {
        const next: Theme = s.resolved === 'dark' ? 'light' : 'dark'
        const r = resolveTheme(next)
        localStorage.setItem(STORAGE_KEYS.THEME, next)
        applyTheme(r)
        return { theme: next, resolved: r }
      })
    },
  }
})
