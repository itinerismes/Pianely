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
    <aside className="fixed left-0 top-0 z-50 h-screen w-64 glass-strong border-r border-white/10">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2]">
            <Piano className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">Pianely</h1>
            <p className="text-xs text-[#b4c6e7]">Apprends simplement</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
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
        <div className="border-t border-white/10 p-4">
          <Link
            href="/connexion"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#b4c6e7] hover:bg-white/5 hover:text-white transition-all"
          >
            <User className="h-5 w-5" />
            Connexion
          </Link>
          <Link
            href="/inscription"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all"
          >
            Commencer gratuitement
          </Link>
        </div>
      </div>
    </aside>
  )
}
