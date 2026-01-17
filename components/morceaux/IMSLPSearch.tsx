'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Search, Music, Download, Loader2, ChevronRight } from 'lucide-react'
import {
  searchIMSLP,
  getPopularComposers,
  parseIMSLPWorkInfo,
  type IMSLPSearchResult,
} from '@/lib/imslp/client'
import { importIMSLPPieceAction } from '@/app/actions/pieces'

interface IMSLPSearchProps {
  onPieceAdded?: () => void
}

export function IMSLPSearch({ onPieceAdded }: IMSLPSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<IMSLPSearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedWork, setSelectedWork] = useState<IMSLPSearchResult | null>(null)
  const [showImportDialog, setShowImportDialog] = useState(false)
  const [importLevel, setImportLevel] = useState<number>(1)
  const [importDifficulty, setImportDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium')
  const [importing, setImporting] = useState(false)

  const popularComposers = getPopularComposers()

  const handleSearch = async () => {
    if (!query.trim()) return

    setLoading(true)
    try {
      const data = await searchIMSLP(query)
      setResults(data)
    } catch (error) {
      console.error('IMSLP search error:', error)
      alert('Erreur lors de la recherche IMSLP. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const handleSelectWork = (work: IMSLPSearchResult) => {
    setSelectedWork(work)
    setShowImportDialog(true)
  }

  const handleImport = async () => {
    if (!selectedWork) return

    setImporting(true)
    try {
      // Parser les informations du morceau
      const workInfo = parseIMSLPWorkInfo(selectedWork.title)
      workInfo.pageid = selectedWork.pageid

      // Importer via server action (userId récupéré depuis la session côté serveur)
      const result = await importIMSLPPieceAction(
        workInfo,
        importLevel,
        importDifficulty
      )

      if (!result.success) {
        throw new Error(result.error || 'Import failed')
      }

      // Fermer le dialog et notifier
      setShowImportDialog(false)
      setSelectedWork(null)
      alert('Morceau importé avec succès !')
      onPieceAdded?.()
    } catch (error) {
      console.error('Import error:', error)
      alert('Erreur lors de l\'importation. Le morceau existe peut-être déjà.')
    } finally {
      setImporting(false)
    }
  }

  const stripHtmlTags = (html: string) => {
    return html.replace(/<[^>]*>/g, '')
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Bibliothèque IMSLP (Domaine Public)
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Recherchez parmi 500,000+ partitions classiques gratuites et légales
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Barre de recherche */}
          <div className="flex gap-2">
            <Input
              placeholder="Nom du compositeur ou titre d'oeuvre (ex: Chopin, Bach...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1"
            />
            <Button
              onClick={handleSearch}
              disabled={loading || !query.trim()}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Recherche...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Rechercher
                </>
              )}
            </Button>
          </div>

          {/* Compositeurs populaires */}
          <div>
            <p className="text-sm font-medium mb-2">Compositeurs populaires:</p>
            <div className="flex flex-wrap gap-2">
              {popularComposers.slice(0, 8).map((composer) => (
                <Badge
                  key={composer}
                  variant="outline"
                  className="cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  onClick={() => {
                    setQuery(composer)
                  }}
                >
                  {composer}
                </Badge>
              ))}
            </div>
          </div>

          {/* Résultats */}
          {results.length > 0 && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              <p className="text-sm font-medium">{results.length} résultat(s) trouvé(s):</p>
              {results.map((work) => (
                <Card
                  key={work.pageid}
                  className="p-3 hover:shadow-md transition-shadow cursor-pointer group"
                  onClick={() => handleSelectWork(work)}
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {work.title}
                      </h4>
                      {work.snippet && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {stripHtmlTags(work.snippet)}
                        </p>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0" />
                  </div>
                </Card>
              ))}
            </div>
          )}

          {results.length === 0 && !loading && query && (
            <div className="text-center py-8 text-muted-foreground">
              <Music className="w-12 h-12 mx-auto mb-2 opacity-20" />
              <p className="text-sm">Aucun résultat trouvé pour "{query}"</p>
              <p className="text-xs mt-1">Essayez avec le nom d'un compositeur</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Dialog d'importation */}
      <Dialog open={showImportDialog} onOpenChange={setShowImportDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Importer le morceau</DialogTitle>
            <DialogDescription>
              {selectedWork && stripHtmlTags(selectedWork.title)}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="level">Niveau de difficulté</Label>
              <Select
                value={importLevel.toString()}
                onValueChange={(value) => setImportLevel(parseInt(value))}
              >
                <SelectTrigger id="level">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Niveau 1 - Débutant</SelectItem>
                  <SelectItem value="2">Niveau 2 - Élémentaire</SelectItem>
                  <SelectItem value="3">Niveau 3 - Intermédiaire</SelectItem>
                  <SelectItem value="4">Niveau 4 - Avancé</SelectItem>
                  <SelectItem value="5">Niveau 5 - Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulté</Label>
              <Select
                value={importDifficulty}
                onValueChange={(value: any) => setImportDifficulty(value)}
              >
                <SelectTrigger id="difficulty">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Facile</SelectItem>
                  <SelectItem value="medium">Moyen</SelectItem>
                  <SelectItem value="hard">Difficile</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowImportDialog(false)}
              disabled={importing}
            >
              Annuler
            </Button>
            <Button
              onClick={handleImport}
              disabled={importing}
              className="bg-gradient-to-r from-purple-500 to-blue-600"
            >
              {importing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Importation...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Importer
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
