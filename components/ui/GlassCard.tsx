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
  const baseStyles = 'bg-white rounded-3xl shadow-sm border border-gray-100'

  const variantStyles = {
    default: '',
    hover: 'hover:shadow-md transition-all duration-300 cursor-pointer group',
    elevated: 'shadow-md border-gray-200'
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
