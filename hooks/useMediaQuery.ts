'use client'

import { useState, useEffect } from 'react'

/**
 * Hook for matching CSS media queries
 * @param query - CSS media query string (e.g., "(max-width: 768px)")
 * @returns boolean indicating if the query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Create event listener
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }
    // Legacy browsers
    else {
      mediaQuery.addListener(handler)
      return () => mediaQuery.removeListener(handler)
    }
  }, [query])

  // Return false during SSR
  if (!mounted) return false

  return matches
}

/**
 * Hook to check if viewport is mobile size
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 640px)')
}

/**
 * Hook to check if viewport is tablet size
 */
export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
}

/**
 * Hook to check if viewport is desktop size
 */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1025px)')
}

/**
 * Hook to get current breakpoint
 */
export function useBreakpoint(): 'mobile' | 'tablet' | 'desktop' {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  if (isMobile) return 'mobile'
  if (isTablet) return 'tablet'
  return 'desktop'
}
