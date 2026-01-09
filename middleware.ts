import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
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

  const isAuthRoute = request.nextUrl.pathname.startsWith('/connexion') ||
                      request.nextUrl.pathname.startsWith('/inscription')
  const isProtectedRoute = request.nextUrl.pathname === '/' ||
                          request.nextUrl.pathname.startsWith('/parcours') ||
                          request.nextUrl.pathname.startsWith('/settings')

  // Redirect unauthenticated users to login
  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL('/connexion', request.url))
  }

  // Redirect authenticated users away from auth pages
  if (isAuthRoute && user) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/',
    '/parcours/:path*',
    '/settings/:path*',
    '/connexion',
    '/inscription'
  ]
}
