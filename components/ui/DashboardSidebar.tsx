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

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 z-[100] h-screen w-20 bg-[#0f1629] border-r border-white/10 flex-col">
      <div className="flex h-16 items-center justify-center border-b border-white/10">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2]">
          <Piano className="h-6 w-6 text-white" />
        </div>
      </div>

      <nav className="flex-1 flex flex-col items-center py-8 gap-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all group relative',
                isActive
                  ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-lg shadow-purple-500/20'
                  : 'text-[#b4c6e7] hover:bg-white/5 hover:text-white'
              )}
              title={item.name}
            >
              <item.icon className="h-6 w-6" />
              <span className="absolute left-full ml-4 px-2 py-1 bg-[#1a2642] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-white/10 p-4 flex flex-col items-center gap-2">
        <Link
          href="/connexion"
          className="flex items-center justify-center w-14 h-14 rounded-xl text-[#b4c6e7] hover:bg-white/5 hover:text-white transition-all"
          title="Connexion"
        >
          <User className="h-6 w-6" />
        </Link>
        <Link
          href="/settings"
          className="flex items-center justify-center w-14 h-14 rounded-xl text-[#b4c6e7] hover:bg-white/5 hover:text-white transition-all"
          title="Paramètres"
        >
          <Settings className="h-6 w-6" />
        </Link>
      </div>
    </aside>
  )
}
