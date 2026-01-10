'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg transition-colors"
        style={{
          background: 'var(--hover-bg)',
          border: '1px solid var(--border-medium)'
        }}
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="group p-2 rounded-lg transition-all duration-200 hover:scale-105"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border-medium)',
        boxShadow: 'var(--card-shadow)'
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon
          className="w-5 h-5 transition-transform duration-200 group-hover:rotate-12"
          style={{ color: 'var(--text-secondary)' }}
        />
      ) : (
        <Sun
          className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90"
          style={{ color: 'var(--accent-warning)' }}
        />
      )}
    </button>
  )
}
