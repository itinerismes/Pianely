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
  const baseStyles = 'glass rounded-xl'

  const variantStyles = {
    default: '',
    hover: 'hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group',
    elevated: 'glass-strong'
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
