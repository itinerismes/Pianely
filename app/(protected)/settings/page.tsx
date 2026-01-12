import { createClient } from '@/lib/supabase/server'
import { logout } from '@/lib/auth/actions'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { ThemeToggle } from '@/components/settings/ThemeToggle'
import { Mail, LogOut, Bell, Shield } from 'lucide-react'

export default async function SettingsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const userName = user?.user_metadata?.full_name ||
                   user?.email?.split('@')[0] ||
                   'Utilisateur'

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Paramètres
        </h1>
        <p className="text-muted-foreground">
          Gère ton compte et tes préférences
        </p>
      </div>

      {/* Profile card */}
      <Card className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/50 border-indigo-200 dark:border-indigo-800 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <Mail className="h-4 w-4" />
            </div>
            Profil
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 ring-2 ring-purple-200 dark:ring-purple-800">
              <AvatarFallback className="bg-gradient-to-br from-purple-400 to-blue-500 text-white text-lg">
                {userName.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user?.email}</p>
              <p className="text-sm text-muted-foreground">Membre depuis {new Date(user?.created_at || '').toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences card */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
              <Bell className="h-4 w-4" />
            </div>
            Préférences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ThemeToggle />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Notifications</Label>
              <p className="text-sm text-muted-foreground">Recevoir des notifications par email</p>
            </div>
            <Switch id="notifications" disabled />
          </div>
          <p className="text-xs text-muted-foreground italic">
            Les notifications seront bientôt disponibles
          </p>
        </CardContent>
      </Card>

      {/* Danger zone */}
      <Card className="border-red-200 dark:border-red-800 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white">
              <Shield className="h-4 w-4" />
            </div>
            Zone dangereuse
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Déconnecte-toi de ton compte. Tu devras te reconnecter pour accéder à tes leçons.
          </p>
          <form action={logout}>
            <Button
              type="submit"
              variant="destructive"
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Se déconnecter
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
