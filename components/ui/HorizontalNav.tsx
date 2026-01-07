'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Piano, Home, BookOpen, BarChart3, ShoppingBag, User, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Parcours', href: '/parcours', icon: BookOpen },
  { name: 'Progression', href: '/dashboard', icon: BarChart3 },
  { name: 'Boutique', href: '/pianos-debutants', icon: ShoppingBag },
]

export function HorizontalNav() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] h-16 bg-[#0f1629] border-b border-white/10 shadow-2xl">
      <div className="h-full max-w-[1920px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2]">
            <Piano className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white hidden sm:block">Pianely</span>
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
                  isActive
                    ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-lg shadow-purple-500/20'
                    : 'text-[#b4c6e7] hover:bg-white/5 hover:text-white'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="hidden md:inline text-sm font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Actions utilisateur */}
        <div className="flex items-center gap-2">
          <Link
            href="/connexion"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-[#b4c6e7] hover:bg-white/5 hover:text-white transition-all"
          >
            <User className="h-5 w-5" />
            <span className="hidden sm:inline text-sm">Connexion</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center justify-center w-10 h-10 rounded-xl text-[#b4c6e7] hover:bg-white/5 hover:text-white transition-all"
          >
            <Settings className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  )
}
