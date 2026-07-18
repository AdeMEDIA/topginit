import { BarChart2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-display font-bold text-slate-900 dark:text-white">Analytics</h1>
      <Card className="flex flex-col items-center justify-center py-16 text-center">
        <BarChart2 size={48} className="text-slate-300 dark:text-slate-600 mb-3" />
        <p className="font-medium text-slate-500">Analytics coming in Phase 3</p>
        <p className="text-sm text-slate-400 mt-1">Complete some practice sessions first</p>
      </Card>
    </div>
  )
}
