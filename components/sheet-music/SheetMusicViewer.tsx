'use client'

import { useEffect, useRef, useState } from 'react'
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'

interface Note {
  midi: number
  name: string
  time: number
  duration: number
}

interface SheetMusicViewerProps {
  musicXmlUrl?: string
  musicXmlContent?: string
  onNotesLoaded?: (notes: Note[]) => void
  className?: string
}

export function SheetMusicViewer({
  musicXmlUrl,
  musicXmlContent,
  onNotesLoaded,
  className = ''
}: SheetMusicViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const osmdRef = useRef<OpenSheetMusicDisplay | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadSheetMusic = async () => {
      if (!containerRef.current) return
      if (!musicXmlUrl && !musicXmlContent) {
        setError('Aucune partition fournie')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        // Créer l'instance OSMD
        const osmd = new OpenSheetMusicDisplay(containerRef.current, {
          autoResize: true,
          backend: 'svg',
          drawTitle: true,
          drawComposer: true,
          drawPartNames: true,
          drawingParameters: 'compact'
        })

        osmdRef.current = osmd

        // Charger le MusicXML
        if (musicXmlUrl) {
          await osmd.load(musicXmlUrl)
        } else if (musicXmlContent) {
          await osmd.load(musicXmlContent)
        }

        // Rendre la partition
        osmd.render()

        // Pour l'extraction des notes, utiliser le fichier MIDI à la place
        // car OSMD a des propriétés protégées
        onNotesLoaded?.([])

        setLoading(false)
      } catch (err) {
        console.error('Error loading sheet music:', err)
        setError('Erreur lors du chargement de la partition')
        setLoading(false)
      }
    }

    loadSheetMusic()

    return () => {
      if (osmdRef.current) {
        osmdRef.current.clear()
      }
    }
  }, [musicXmlUrl, musicXmlContent])

  return (
    <div className={`sheet-music-container ${className}`}>
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-2">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground">
              Chargement de la partition...
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-2">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            <p className="text-xs text-muted-foreground">
              Vérifiez que le fichier MusicXML est valide
            </p>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className="w-full overflow-auto bg-white dark:bg-gray-900 rounded-lg p-4 border min-h-[400px]"
        style={{ display: loading || error ? 'none' : 'block' }}
      />
    </div>
  )
}
