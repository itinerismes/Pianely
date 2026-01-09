import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export function GlassButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}: GlassButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2'

  const variantStyles = {
    primary: 'bg-violet-600 hover:bg-violet-700 text-white shadow-md hover:shadow-lg transition-all',
    secondary: 'bg-white border-2 border-violet-200 text-violet-700 hover:bg-violet-50',
    accent: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md hover:shadow-lg hover:scale-[1.02]',
    outline: 'border-2 border-violet-300 hover:border-violet-400 hover:bg-violet-50 text-violet-700',
    ghost: 'hover:bg-violet-50 text-slate-600 hover:text-violet-700'
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base'
  }

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
