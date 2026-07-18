import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy } from 'lucide-react'

interface ToastProps {
  message: string
  onDone: () => void
}

export function AchievementToast({ message, onDone }: ToastProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-3 rounded-2xl shadow-xl max-w-xs w-full mx-4"
        >
          <div className="w-8 h-8 rounded-xl bg-warning-500 flex items-center justify-center shrink-0">
            <Trophy size={16} className="text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold opacity-70">Achievement Unlocked!</p>
            <p className="text-sm font-bold truncate">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function useAchievementToasts() {
  const [queue, setQueue] = useState<string[]>([])

  const push = (names: string[]) => {
    if (names.length) setQueue(q => [...q, ...names])
  }

  const pop = () => setQueue(q => q.slice(1))

  return { current: queue[0] ?? null, push, pop }
}
