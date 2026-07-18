import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'muted'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  primary:   'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300',
  secondary: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  success:   'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  warning:   'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  danger:    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  muted:     'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300',
}

export function Badge({ className, variant = 'primary', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
