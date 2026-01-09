import { createClient } from '@/lib/supabase/server'
import { logout } from '@/lib/auth/actions'
import { LogOut } from 'lucide-react'

export default async function SettingsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-xl shadow-black/20">
          <h1 className="text-2xl font-bold text-white/90 mb-6">
            Paramètres
          </h1>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-400">Email</label>
              <p className="text-white text-lg mt-1">{user?.email}</p>
            </div>

            <div className="pt-6 border-t border-slate-700">
              <form action={logout}>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Se déconnecter</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
