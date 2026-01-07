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
    <aside className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:z-50 lg:h-screen lg:w-72 glass-strong border-r border-white/10">
      <div className="flex h-full flex-col w-full">
        {/* Logo */}
        <div className="flex items-center gap-3 p-8 border-b border-white/10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2]">
            <Piano className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Pianely</h1>
            <p className="text-sm text-[#b4c6e7]">Apprends simplement</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 py-8">
          <ul className="space-y-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all',
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
        <div className="border-t border-white/10 p-6">
          <Link
            href="/connexion"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#b4c6e7] hover:bg-white/5 hover:text-white transition-all mb-3"
          >
            <User className="h-5 w-5" />
            Connexion
          </Link>
          <Link
            href="/inscription"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all"
          >
            Commencer gratuitement
          </Link>
        </div>
      </div>
    </aside>
  )
}
