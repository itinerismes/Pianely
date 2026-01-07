import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'hover' | 'solid'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  padding = 'lg'
}: GlassCardProps) {
  const baseStyles = 'glass rounded-2xl'

  const variantStyles = {
    default: '',
    hover: 'hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 cursor-pointer',
    solid: 'bg-white/10 backdrop-blur-md'
  }

  const paddingStyles = {
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
