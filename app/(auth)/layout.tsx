export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen relative overflow-hidden pt-24 pb-16">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)',
            animationDuration: '8s'
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        />
      </div>

      <div className="max-w-md mx-auto px-6 relative z-10">
        {children}
      </div>
    </main>
  )
}
