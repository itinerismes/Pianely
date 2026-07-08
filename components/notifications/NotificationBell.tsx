'use client'

/**
 * Notifications réelles — calculées depuis les données de l'utilisateur,
 * pas de contenu factice :
 *  · streak en danger (pas encore pratiqué aujourd'hui alors qu'un streak court)
 *  · séance du jour pas commencée
 *  · succès débloqués ces 7 derniers jours
 *
 * Non-lu = notification plus récente que la dernière ouverture du panneau
 * (timestamp en localStorage).
 */

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Bell, Flame, Trophy, CalendarCheck } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface Notification {
  id: string
  icon: React.ReactNode
  title: string
  body: string
  href: string
  /** Date de l'événement (pour le tri et le non-lu) */
  at: number
}

const LAST_SEEN_KEY = 'pianely-notifications-seen-at'

function daysAgoLabel(at: number): string {
  const days = Math.floor((Date.now() - at) / 86400000)
  if (days <= 0) return "Aujourd'hui"
  if (days === 1) return 'Hier'
  return `Il y a ${days} jours`
}

export function NotificationBell() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [lastSeen, setLastSeen] = useState<number>(() =>
    typeof window !== 'undefined' ? Number(localStorage.getItem(LAST_SEEN_KEY) || 0) : 0
  )
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        const today = new Date().toISOString().split('T')[0]
        const result: Notification[] = []

        // Pratique des 30 derniers jours → streak + pratiqué aujourd'hui ?
        const since = new Date(Date.now() - 30 * 86400000).toISOString().split('T')[0]
        const { data: logs } = await supabase
          .from('practice_logs')
          .select('date')
          .eq('user_id', user.id)
          .gte('date', since)
          .order('date', { ascending: false })

        const dates = [...new Set((logs || []).map((l) => l.date))]
        const practicedToday = dates.includes(today)

        // Streak à partir d'hier (aujourd'hui pas encore requis)
        let streak = 0
        const cursor = new Date()
        if (!practicedToday) cursor.setDate(cursor.getDate() - 1)
        for (;;) {
          const day = cursor.toISOString().split('T')[0]
          if (!dates.includes(day)) break
          streak += 1
          cursor.setDate(cursor.getDate() - 1)
        }

        // Minuit du jour : les rappels quotidiens datent du matin même
        const todayStart = new Date().setHours(8, 0, 0, 0)

        // Réglage « Rappels dans l'application » (Paramètres)
        const remindersMuted = localStorage.getItem('pianely-reminders-muted') === '1'

        if (remindersMuted) {
          // Les rappels quotidiens sont coupés ; les succès restent notifiés
        } else if (!practicedToday && streak > 0) {
          result.push({
            id: `streak-${today}`,
            icon: <Flame className="h-4 w-4" />,
            title: `Ton streak de ${streak} jour${streak > 1 ? 's' : ''} expire ce soir`,
            body: 'Quelques minutes de pratique suffisent pour le garder en vie.',
            href: '/echauffement',
            at: todayStart,
          })
        } else if (!practicedToday) {
          result.push({
            id: `session-${today}`,
            icon: <CalendarCheck className="h-4 w-4" />,
            title: 'Ta séance du jour t\'attend',
            body: 'Échauffement, leçon, morceau : trois temps, trente minutes.',
            href: '/dashboard',
            at: todayStart,
          })
        }

        // Succès débloqués ces 7 derniers jours
        const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString()
        const { data: unlocked } = await supabase
          .from('user_achievements')
          .select('unlocked_at, achievement:achievements(title, description)')
          .eq('user_id', user.id)
          .gte('unlocked_at', weekAgo)
          .order('unlocked_at', { ascending: false })

        for (const row of (unlocked || []) as any[]) {
          if (!row.achievement) continue
          result.push({
            id: `achievement-${row.unlocked_at}`,
            icon: <Trophy className="h-4 w-4" />,
            title: `Succès débloqué : ${row.achievement.title}`,
            body: row.achievement.description || 'Bien joué !',
            href: '/achievements',
            at: new Date(row.unlocked_at).getTime(),
          })
        }

        result.sort((a, b) => b.at - a.at)
        setNotifications(result)
      } catch (error) {
        console.error('Error loading notifications:', error)
      }
    }

    void load()
  }, [])

  // Fermer au clic extérieur
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  const unreadCount = notifications.filter((n) => n.at > lastSeen).length

  const toggle = () => {
    const next = !open
    setOpen(next)
    if (next) {
      const now = Date.now()
      localStorage.setItem(LAST_SEEN_KEY, String(now))
      // Le badge disparaît à la fermeture (les items restent visibles)
      window.setTimeout(() => setLastSeen(now), 0)
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={toggle}
        className="btn-ghost relative rounded-lg p-2 text-dim"
        aria-label={`Notifications${unreadCount > 0 ? ` (${unreadCount} non lue${unreadCount > 1 ? 's' : ''})` : ''}`}
        aria-expanded={open}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-[#e0a83c] px-1 text-[10px] font-bold text-[#1a1408]">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="panel-strong absolute right-0 top-12 z-50 w-80 rounded-2xl p-2">
          <p className="eyebrow px-3 pb-2 pt-2.5">Notifications</p>
          {notifications.length === 0 ? (
            <p className="text-dim px-3 pb-4 pt-1 text-sm">
              Rien à signaler — ta pratique est à jour. 🎹
            </p>
          ) : (
            <div className="max-h-96 space-y-1 overflow-y-auto">
              {notifications.map((n) => (
                <button
                  key={n.id}
                  onClick={() => {
                    setOpen(false)
                    router.push(n.href)
                  }}
                  className="flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-white/[0.05]"
                >
                  <span className="badge-brass mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                    {n.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-snug text-[#f2efe8]">
                      {n.title}
                    </span>
                    <span className="text-dim mt-0.5 block text-xs leading-relaxed">{n.body}</span>
                    <span className="text-faint mt-1 block text-[11px]">{daysAgoLabel(n.at)}</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
