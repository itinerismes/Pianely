'use client'

/**
 * Préférences de notifications — fonctionnelles.
 * Le switch « Rappels dans l'application » pilote les rappels quotidiens
 * (streak en danger, séance du jour) affichés par la cloche du header.
 * Les succès débloqués restent toujours notifiés.
 */

import { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export const REMINDERS_MUTED_KEY = 'pianely-reminders-muted'

export function NotificationPrefs() {
  const [remindersEnabled, setRemindersEnabled] = useState(true)

  useEffect(() => {
    setRemindersEnabled(localStorage.getItem(REMINDERS_MUTED_KEY) !== '1')
  }, [])

  const toggle = (enabled: boolean) => {
    setRemindersEnabled(enabled)
    if (enabled) localStorage.removeItem(REMINDERS_MUTED_KEY)
    else localStorage.setItem(REMINDERS_MUTED_KEY, '1')
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="reminders" className="text-[#f2efe8]">Rappels dans l'application</Label>
          <p className="text-faint text-sm">
            Streak en danger, séance du jour — dans la cloche du haut de page
          </p>
        </div>
        <Switch
          id="reminders"
          checked={remindersEnabled}
          onCheckedChange={toggle}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="email-notifications" className="text-[#f2efe8]">Notifications par email</Label>
          <p className="text-faint text-sm">Bientôt disponible</p>
        </div>
        <Switch id="email-notifications" disabled />
      </div>
    </div>
  )
}
