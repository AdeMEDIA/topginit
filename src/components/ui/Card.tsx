import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
}

const paddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
}

export function Card({ className, hover, padding = 'md', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white dark:bg-slate-800 shadow-card border border-slate-100 dark:border-slate-700/60',
        paddingClasses[padding],
        hover && 'transition-shadow hover:shadow-card-md cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
