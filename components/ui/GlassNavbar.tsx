'use client'

import Link from 'next/link'
import { Piano } from 'lucide-react'
import { GlassButton } from './GlassButton'

export function GlassNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass m-4 rounded-2xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Piano className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold text-white">Pianely</h1>
              <p className="text-xs text-gray-300">Tes premiers morceaux, simplement</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/cours" className="text-gray-200 hover:text-white transition-colors">
              Cours
            </Link>
            <Link href="/parcours" className="text-gray-200 hover:text-white transition-colors">
              Parcours
            </Link>
            <Link href="/pianos-debutants" className="text-gray-200 hover:text-white transition-colors">
              Boutique
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/connexion">
              <GlassButton variant="secondary" size="sm">
                Connexion
              </GlassButton>
            </Link>
            <Link href="/inscription">
              <GlassButton variant="primary" size="sm">
                Commencer
              </GlassButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
