import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'hover' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  padding = 'lg'
}: GlassCardProps) {
  const baseStyles = 'bg-white rounded-3xl shadow-lg shadow-violet-500/5 border border-violet-100/20'

  const variantStyles = {
    default: '',
    hover: 'hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 cursor-pointer group',
    elevated: 'shadow-xl shadow-violet-500/8 border-violet-100/30'
  }

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }

  return (
    <div className={cn(
      baseStyles,
      variantStyles[variant],
      paddingStyles[padding],
      className
    )}>
      {children}
    </div>
  )
}
