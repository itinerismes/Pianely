'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Piano, Home, BookOpen, BarChart3, ShoppingBag, User, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Parcours', href: '/parcours', icon: BookOpen },
  { name: 'Progression', href: '/dashboard', icon: BarChart3 },
  { name: 'Boutique', href: '/pianos-debutants', icon: ShoppingBag },
]

export function HorizontalNav() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 h-16 backdrop-blur-md"
      style={{
        background: 'var(--card-bg)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="h-full max-w-[1920px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{
              background: 'linear-gradient(135deg, var(--accent-info) 0%, var(--accent-primary) 100%)',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
            }}
          >
            <Piano className="h-6 w-6 text-white" />
          </div>
          <span
            className="text-xl font-bold hidden sm:block"
            style={{ color: 'var(--text-primary)' }}
          >
            Pianely
          </span>
        </Link>

        {/* Navigation principale */}
        <nav className="flex items-center gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl transition-all',
                )}
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-hover) 100%)',
                        color: '#ffffff',
                        boxShadow: '0 2px 8px rgba(124, 58, 237, 0.2)'
                      }
                    : {
                        color: 'var(--text-tertiary)',
                        background: 'transparent'
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'var(--hover-bg)'
                    e.currentTarget.style.color = 'var(--text-primary)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--text-tertiary)'
                  }
                }}
              >
                <item.icon className="h-5 w-5" />
                <span className="hidden md:inline text-sm font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Actions utilisateur */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/connexion"
            className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all"
            style={{
              color: 'var(--text-tertiary)',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--hover-bg)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--text-tertiary)'
            }}
          >
            <User className="h-5 w-5" />
            <span className="hidden sm:inline text-sm">Connexion</span>
          </Link>

          <Link
            href="/settings"
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all"
            style={{
              color: 'var(--text-tertiary)',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--hover-bg)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--text-tertiary)'
            }}
          >
            <Settings className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
