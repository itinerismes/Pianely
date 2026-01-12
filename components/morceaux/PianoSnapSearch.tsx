'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon, ExternalLink } from 'lucide-react'
import { PIANOSNAP_TODO } from '@/lib/pianosnap/client'
import { Button } from '@/components/ui/button'

export function PianoSnapSearch() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <img
            src="/icons/pianosnap-icon.png"
            alt="PianoSnap"
            className="w-5 h-5"
            onError={(e) => {
              // Fallback si l'icône n'existe pas
              e.currentTarget.style.display = 'none'
            }}
          />
          PianoSnap.com
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Télécharger des partitions depuis PianoSnap
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Message "À venir" */}
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Fonctionnalité en développement</AlertTitle>
          <AlertDescription className="space-y-2">
            <p>
              L'intégration PianoSnap nécessite des étapes supplémentaires avant d'être
              fonctionnelle:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2 mt-2">
              {PIANOSNAP_TODO.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>

        {/* Lien vers PianoSnap */}
        <div className="pt-2">
          <p className="text-sm text-muted-foreground mb-3">
            En attendant, vous pouvez visiter PianoSnap directement:
          </p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open('https://pianosnap.com', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Ouvrir PianoSnap.com
          </Button>
        </div>

        {/* Information technique */}
        <div className="bg-muted/50 dark:bg-muted/20 rounded-lg p-4 mt-4">
          <p className="text-xs text-muted-foreground">
            <strong>Note technique:</strong> Cette fonctionnalité requiert:
          </p>
          <ul className="text-xs text-muted-foreground mt-2 space-y-1 ml-4">
            <li>• Scraping web respectueux (verification Terms of Service)</li>
            <li>• OCR musical (Optical Music Recognition) avec Audiveris</li>
            <li>• Conversion PDF/Image → MusicXML</li>
            <li>• Upload vers Supabase Storage</li>
          </ul>
        </div>

        {/* Message utilisateur */}
        <div className="text-center pt-2">
          <p className="text-sm text-muted-foreground">
            Cette fonctionnalité sera implémentée dans une future mise à jour. 🚀
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
