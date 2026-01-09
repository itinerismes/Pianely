export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="max-w-md mx-auto px-6">
        {children}
      </div>
    </main>
  )
}
