'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Upload, Link as LinkIcon, Loader2, Music, CheckCircle2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'

interface AudioUploadProps {
  onSuccess?: () => void
}

export function AudioUpload({ onSuccess }: AudioUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [title, setTitle] = useState('')
  const [composer, setComposer] = useState('')
  const [level, setLevel] = useState('1')
  const [difficulty, setDifficulty] = useState('medium')
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!title || !composer) {
      setError('Veuillez remplir le titre et le compositeur')
      return
    }

    setUploading(true)
    setProgress(0)
    setError('')
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('audio', file)
      formData.append('title', title)
      formData.append('composer', composer)
      formData.append('level', level)
      formData.append('difficulty', difficulty)

      // Simulation de progression (la vraie progression n'est pas disponible avec fetch)
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90))
      }, 2000)

      const response = await fetch('/api/upload-audio', {
        method: 'POST',
        body: formData,
      })

      clearInterval(progressInterval)
      setProgress(100)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Upload failed')
      }

      const data = await response.json()
      setResult(data)
      onSuccess?.()
    } catch (error) {
      console.error('Upload error:', error)
      setError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setUploading(false)
    }
  }

  const handleYoutubeSubmit = async () => {
    if (!youtubeUrl || !title || !composer) {
      setError('Veuillez remplir tous les champs')
      return
    }

    setUploading(true)
    setProgress(0)
    setError('')
    setResult(null)

    try {
      // Simulation de progression
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90))
      }, 3000)

      const response = await fetch('/api/youtube-to-midi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ youtubeUrl, title, composer, level: parseInt(level), difficulty }),
      })

      clearInterval(progressInterval)
      setProgress(100)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Processing failed')
      }

      const data = await response.json()
      setResult(data)
      onSuccess?.()
    } catch (error) {
      console.error('YouTube error:', error)
      setError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setUploading(false)
    }
  }

  return (
    <Tabs defaultValue="file" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="file">Fichier Audio</TabsTrigger>
        <TabsTrigger value="youtube">Lien YouTube</TabsTrigger>
      </TabsList>

      <TabsContent value="file" className="space-y-4">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title-file">Titre du morceau *</Label>
              <Input
                id="title-file"
                placeholder="ex: Experience, Comptine d'un autre été..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={uploading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="composer-file">Compositeur *</Label>
              <Input
                id="composer-file"
                placeholder="ex: Ludovico Einaudi, Yann Tiersen..."
                value={composer}
                onChange={(e) => setComposer(e.target.value)}
                disabled={uploading}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="level-file">Niveau</Label>
                <Select value={level} onValueChange={setLevel} disabled={uploading}>
                  <SelectTrigger id="level-file">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Niveau 1</SelectItem>
                    <SelectItem value="2">Niveau 2</SelectItem>
                    <SelectItem value="3">Niveau 3</SelectItem>
                    <SelectItem value="4">Niveau 4</SelectItem>
                    <SelectItem value="5">Niveau 5</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty-file">Difficulté</Label>
                <Select value={difficulty} onValueChange={setDifficulty} disabled={uploading}>
                  <SelectTrigger id="difficulty-file">
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

            <div className="space-y-2">
              <Label htmlFor="audio-file">Fichier audio (MP3, WAV, M4A, OGG)</Label>
              <Input
                id="audio-file"
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                disabled={uploading}
              />
              <p className="text-xs text-muted-foreground">
                🎵 Astuce: Utilisez un fichier audio de qualité pour une meilleure transcription
              </p>
            </div>

            {uploading && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transcription en cours... Cela peut prendre quelques minutes.</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {result && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Transcription réussie !</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• {result.transcription?.noteCount} notes détectées</p>
                  <p>• Durée: {Math.round(result.transcription?.duration)}s</p>
                  <p>• Tempo: {result.transcription?.tempo} BPM</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="youtube" className="space-y-4">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title-yt">Titre du morceau *</Label>
              <Input
                id="title-yt"
                placeholder="ex: Experience, River Flows in You..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={uploading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="composer-yt">Compositeur *</Label>
              <Input
                id="composer-yt"
                placeholder="ex: Ludovico Einaudi, Yiruma..."
                value={composer}
                onChange={(e) => setComposer(e.target.value)}
                disabled={uploading}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="level-yt">Niveau</Label>
                <Select value={level} onValueChange={setLevel} disabled={uploading}>
                  <SelectTrigger id="level-yt">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Niveau 1</SelectItem>
                    <SelectItem value="2">Niveau 2</SelectItem>
                    <SelectItem value="3">Niveau 3</SelectItem>
                    <SelectItem value="4">Niveau 4</SelectItem>
                    <SelectItem value="5">Niveau 5</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty-yt">Difficulté</Label>
                <Select value={difficulty} onValueChange={setDifficulty} disabled={uploading}>
                  <SelectTrigger id="difficulty-yt">
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

            <div className="space-y-2">
              <Label htmlFor="youtube-url">URL YouTube *</Label>
              <Input
                id="youtube-url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                disabled={uploading}
              />
              <p className="text-xs text-muted-foreground">
                🎹 Fonctionne mieux avec des vidéos de piano solo
              </p>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
              onClick={handleYoutubeSubmit}
              disabled={uploading || !youtubeUrl || !title || !composer}
            >
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Transcription en cours...
                </>
              ) : (
                <>
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Importer depuis YouTube
                </>
              )}
            </Button>

            {uploading && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Music className="w-4 h-4 animate-pulse" />
                  <span>Téléchargement et transcription... Patience 🎵</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {result && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Transcription réussie !</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• {result.transcription?.noteCount} notes détectées</p>
                  <p>• Durée: {Math.round(result.transcription?.duration)}s</p>
                  <p>• Tempo: {result.transcription?.tempo} BPM</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
