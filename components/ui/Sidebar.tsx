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

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:z-50 lg:h-screen lg:w-64 glass-strong border-r border-white/10">
      <div className="flex h-full flex-col w-full">
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] shrink-0">
            <Piano className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Pianely</h1>
            <p className="text-xs text-[#b4c6e7]">Apprends simplement</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                      isActive
                        ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg shadow-purple-500/20'
                        : 'text-[#b4c6e7] hover:bg-white/5 hover:text-white'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User section */}
        <div className="border-t border-white/10 p-4 space-y-2">
          <Link
            href="/connexion"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#b4c6e7] hover:bg-white/5 hover:text-white transition-all"
          >
            <User className="h-5 w-5" />
            Connexion
          </Link>
          <Link
            href="/inscription"
            className="flex items-center justify-center rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all"
          >
            Commencer gratuitement
          </Link>
        </div>
      </div>
    </aside>
  )
}
