import { cn } from '@/lib/utils'

interface AvatarProps {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-xl',
}

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase()
}

const COLORS = [
  'from-primary-400 to-primary-600',
  'from-secondary-400 to-secondary-600',
  'from-emerald-400 to-emerald-600',
  'from-amber-400 to-amber-600',
  'from-pink-400 to-pink-600',
]

function pickColor(name: string) {
  let hash = 0
  for (const ch of name) hash += ch.charCodeAt(0)
  return COLORS[hash % COLORS.length]
}

export function Avatar({ name = '?', src, size = 'md', className }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={cn('rounded-full object-cover', sizeClasses[size], className)}
      />
    )
  }
  return (
    <div
      className={cn(
        'rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold shrink-0',
        sizeClasses[size],
        pickColor(name),
        className,
      )}
    >
      {getInitials(name)}
    </div>
  )
}
