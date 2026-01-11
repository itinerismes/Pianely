import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

export async function proxy(request: NextRequest) {
  // Update session and get response
  let response = await updateSession(request)

  // Create supabase client to check auth status
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set() {}, // Not used in middleware check
        remove() {}, // Not used in middleware check
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname

  // Define auth routes (connexion, inscription)
  const isAuthRoute = pathname.startsWith('/connexion') || pathname.startsWith('/inscription')

  // Define protected routes
  const isProtectedRoute =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/parcours') ||
    pathname.startsWith('/progression') ||
    pathname.startsWith('/morceaux') ||
    pathname.startsWith('/settings')

  // Redirect unauthenticated users to login with redirectTo parameter
  if (isProtectedRoute && !user) {
    const redirectUrl = new URL('/connexion', request.url)
    redirectUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Redirect authenticated users away from auth pages to dashboard
  if (isAuthRoute && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/parcours/:path*',
    '/progression/:path*',
    '/morceaux/:path*',
    '/settings/:path*',
    '/connexion',
    '/inscription',
  ],
}
