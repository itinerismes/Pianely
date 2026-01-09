'use client'

import { useState, useCallback, useEffect } from 'react'
import { WidgetLayout } from '@/types/dashboard'
import { DEFAULT_LAYOUT } from '@/lib/dashboard/constants'

const STORAGE_KEY = 'pianely-dashboard-layout'
const DEBOUNCE_MS = 300

/**
 * Hook for managing dashboard layout with localStorage persistence
 */
export function useDashboardLayout() {
  const [layout, setLayout] = useState<WidgetLayout[]>(() => {
    // Initialize from localStorage on client-side only
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const parsed = JSON.parse(stored)
          // Validate that parsed data is an array
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed
          }
        }
      } catch (error) {
        console.error('Failed to load dashboard layout from localStorage:', error)
      }
    }
    return DEFAULT_LAYOUT
  })

  const [saveTimeout, setSaveTimeout] = useState<NodeJS.Timeout | null>(null)

  // Debounced save to localStorage
  const saveToLocalStorage = useCallback((newLayout: WidgetLayout[]) => {
    if (typeof window === 'undefined') return

    // Clear existing timeout
    if (saveTimeout) {
      clearTimeout(saveTimeout)
    }

    // Set new timeout
    const timeout = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newLayout))
      } catch (error) {
        console.error('Failed to save dashboard layout to localStorage:', error)
      }
    }, DEBOUNCE_MS)

    setSaveTimeout(timeout)
  }, [saveTimeout])

  // Update layout and save to localStorage
  const updateLayout = useCallback((newLayout: WidgetLayout[]) => {
    setLayout(newLayout)
    saveToLocalStorage(newLayout)
  }, [saveToLocalStorage])

  // Reset to default layout
  const resetLayout = useCallback(() => {
    setLayout(DEFAULT_LAYOUT)
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch (error) {
        console.error('Failed to remove dashboard layout from localStorage:', error)
      }
    }
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeout) {
        clearTimeout(saveTimeout)
      }
    }
  }, [saveTimeout])

  return {
    layout,
    updateLayout,
    resetLayout,
  }
}
