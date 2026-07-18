import { Gamepad2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export function GamesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-display font-bold text-slate-900 dark:text-white">Games</h1>
      <Card className="flex flex-col items-center justify-center py-16 text-center">
        <Gamepad2 size={48} className="text-slate-300 dark:text-slate-600 mb-3" />
        <p className="font-medium text-slate-500">Games coming in Phase 4</p>
        <p className="text-sm text-slate-400 mt-1">Who Wants to Be a Millionaire? and more</p>
      </Card>
    </div>
  )
}
