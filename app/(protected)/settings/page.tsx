import { createClient } from '@/lib/supabase/server'
import { logout } from '@/lib/auth/actions'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Mail, LogOut, Bell, Shield } from 'lucide-react'

export default async function SettingsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const userName = user?.user_metadata?.full_name ||
                   user?.email?.split('@')[0] ||
                   'Utilisateur'

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl text-[#f2efe8]">
          Paramètres
        </h1>
        <p className="text-dim mt-1">
          Gère ton compte et tes préférences
        </p>
      </div>

      {/* Profile */}
      <div className="panel rounded-2xl p-5">
        <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
          <Mail className="h-3.5 w-3.5" />
          Profil
        </h2>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 ring-2 ring-[#e0a83c]/40">
            <AvatarFallback className="bg-gradient-to-br from-[#f0c66a] to-[#b07d1f] text-lg font-bold text-[#1a1408]">
              {userName.split(' ').map((n: string) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-[#f2efe8]">{user?.email}</p>
            <p className="text-faint text-sm">
              Membre depuis {new Date(user?.created_at || '').toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="panel rounded-2xl p-5">
        <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-dim">
          <Bell className="h-3.5 w-3.5" />
          Préférences
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications" className="text-[#f2efe8]">Notifications</Label>
              <p className="text-faint text-sm">Recevoir des notifications par email</p>
            </div>
            <Switch id="notifications" disabled />
          </div>
          <p className="text-faint text-xs italic">
            Les notifications seront bientôt disponibles
          </p>
        </div>
      </div>

      {/* Danger zone */}
      <div className="panel rounded-2xl border-red-400/25 p-5">
        <h2 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-red-300">
          <Shield className="h-3.5 w-3.5" />
          Zone dangereuse
        </h2>
        <p className="text-dim mb-4 text-sm">
          Déconnecte-toi de ton compte. Tu devras te reconnecter pour accéder à tes leçons.
        </p>
        <form action={logout}>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-5 py-2.5 text-sm font-bold text-red-300 transition-colors hover:bg-red-400/20"
          >
            <LogOut className="h-4 w-4" />
            Se déconnecter
          </button>
        </form>
      </div>
    </div>
  )
}
