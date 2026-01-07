'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Piano, Home, BookOpen, BarChart3, ShoppingBag, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Parcours', href: '/parcours', icon: BookOpen },
  { name: 'Progression', href: '/dashboard', icon: BarChart3 },
  { name: 'Boutique', href: '/pianos-debutants', icon: ShoppingBag },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2]">
              <Piano className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Pianely</h1>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-[#b4c6e7] hover:bg-white/5 hover:text-white'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/connexion"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#b4c6e7] hover:bg-white/5 hover:text-white transition-all"
            >
              <User className="h-4 w-4" />
              Connexion
            </Link>
            <Link
              href="/inscription"
              className="flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all"
            >
              Commencer
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
