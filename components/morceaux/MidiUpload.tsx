'use client'

/**
 * Import direct de fichiers MIDI — la voie royale pour ajouter un morceau.
 *
 * Zéro transcription, zéro serveur : le fichier est validé et analysé dans
 * le navigateur (@tonejs/midi), uploadé dans le bucket sheet-music, puis le
 * morceau rejoint la bibliothèque, immédiatement jouable en mode Practice.
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import * as MidiPkg from '@tonejs/midi'
import { FileMusic, Upload, CheckCircle2, Search, ExternalLink } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface MidiInfo {
  file: File
  noteCount: number
  durationSec: number
  trackNames: string[]
}

interface MidiUploadProps {
  onSuccess?: () => void
  /** Fichier MIDI déjà prêt (ex. issu de la transcription audio) */
  initialFile?: File
}

export function MidiUpload({ onSuccess, initialFile }: MidiUploadProps) {
  const [info, setInfo] = useState<MidiInfo | null>(null)
  const [title, setTitle] = useState('')
  const [composer, setComposer] = useState('')
  const [level, setLevel] = useState(2)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const initialAnalyzedRef = useRef(false)

  const analyze = useCallback(async (file: File) => {
    setError(null)
    setDone(false)
    try {
      const buffer = await file.arrayBuffer()
      const midi = new MidiPkg.Midi(buffer)
      const noteCount = midi.tracks.reduce((sum, t) => sum + t.notes.length, 0)
      if (noteCount === 0) {
        setError('Ce fichier MIDI ne contient aucune note.')
        return
      }
      setInfo({
        file,
        noteCount,
        durationSec: Math.round(midi.duration),
        trackNames: midi.tracks.filter(t => t.notes.length > 0).map(t => t.name || 'Piste'),
      })
      // Titre par défaut depuis le nom du fichier
      setTitle(file.name.replace(/\.midi?$/i, '').replace(/[-_]/g, ' '))
    } catch {
      setError("Fichier illisible — vérifie que c'est bien un .mid ou .midi valide.")
    }
  }, [])

  useEffect(() => {
    if (initialFile && !initialAnalyzedRef.current) {
      initialAnalyzedRef.current = true
      void analyze(initialFile)
    }
  }, [initialFile, analyze])

  const handleFile = (file: File | undefined | null) => {
    if (!file) return
    if (!/\.midi?$/i.test(file.name)) {
      setError('Format non reconnu — choisis un fichier .mid ou .midi.')
      return
    }
    void analyze(file)
  }

  const submit = async () => {
    if (!info || !title.trim()) return
    setBusy(true)
    setError(null)
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setError('Session expirée — reconnecte-toi.')
        return
      }

      // Upload dans le dossier de l'utilisateur (RLS: {uid}/...)
      const path = `${user.id}/${Date.now()}.mid`
      const { error: uploadError } = await supabase.storage
        .from('sheet-music')
        .upload(path, info.file, { contentType: 'audio/midi' })
      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage.from('sheet-music').getPublicUrl(path)

      // Créer le morceau + l'ajouter à la bibliothèque
      const { data: piece, error: pieceError } = await supabase
        .from('pieces')
        .insert({
          title: title.trim(),
          composer: composer.trim() || 'Inconnu',
          level,
          difficulty: level <= 2 ? 'easy' : level === 3 ? 'medium' : 'hard',
          duration_minutes: Math.max(1, Math.round(info.durationSec / 60)),
          category: 'user_upload',
          source: 'user_upload',
          midi_url: publicUrl,
        })
        .select('id')
        .single()
      if (pieceError) throw pieceError

      const { error: libError } = await supabase
        .from('user_pieces')
        .insert({ user_id: user.id, piece_id: piece.id, status: 'not_started' })
      if (libError) throw libError

      setDone(true)
      window.setTimeout(() => onSuccess?.(), 900)
    } catch (e) {
      console.error('MIDI import error:', e)
      setError("L'import a échoué — réessaie, et dis-le nous si ça persiste.")
    } finally {
      setBusy(false)
    }
  }

  if (done) {
    return (
      <div className="glass flex flex-col items-center gap-3 rounded-2xl p-10 text-center">
        <CheckCircle2 className="accent-green h-12 w-12" />
        <p className="font-display text-xl text-[#f2efe8]">Morceau ajouté !</p>
        <p className="text-dim text-sm">Il t'attend dans ta bibliothèque, prêt pour le mode Practice.</p>
      </div>
    )
  }

  const openSearch = (site: 'google' | 'bitmidi') => {
    if (!query.trim()) return
    const url =
      site === 'bitmidi'
        ? `https://bitmidi.com/search?q=${encodeURIComponent(query.trim())}`
        : `https://www.google.com/search?q=${encodeURIComponent(`"${query.trim()}" midi file download`)}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <div className="space-y-4">
      {/* Assistant : trouver le MIDI sur le web, puis revenir le déposer */}
      {!info && (
        <div className="glass rounded-2xl p-4">
          <p className="text-dim mb-2.5 text-sm font-semibold">
            1. Trouve ton morceau <span className="text-faint font-normal">(s'ouvre dans un nouvel onglet)</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="relative min-w-48 flex-1">
              <Search className="text-faint absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && openSearch('google')}
                placeholder="Ex. : experience einaudi"
                className="h-10 w-full rounded-xl border border-white/10 bg-white/[0.05] pl-9 pr-3 text-sm text-[#f2efe8] caret-[#f0c66a] outline-none placeholder:text-faint focus:border-[#e0a83c]/50"
              />
            </div>
            <button
              onClick={() => openSearch('google')}
              disabled={!query.trim()}
              className="btn-accent inline-flex items-center gap-1.5 rounded-xl px-4 text-sm font-bold disabled:opacity-50"
            >
              Google <ExternalLink className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => openSearch('bitmidi')}
              disabled={!query.trim()}
              className="btn-ghost inline-flex items-center gap-1.5 rounded-xl px-4 text-sm font-semibold text-dim disabled:opacity-50"
            >
              BitMidi <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="text-faint mt-2.5 text-xs">
            Télécharge le fichier .mid, puis reviens ici — étape 2 ⬇️
          </p>
        </div>
      )}

      {/* Zone de dépôt */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files?.[0]) }}
        className={`flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed p-8 text-center transition-all ${
          dragging ? 'border-[#e0a83c]/70 bg-[#e0a83c]/[0.08]' : 'border-white/15 hover:border-[#e0a83c]/40 hover:bg-white/[0.03]'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".mid,.midi,audio/midi"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
        <FileMusic className="accent-brass h-10 w-10" />
        {info ? (
          <div>
            <p className="font-semibold text-[#f2efe8]">{info.file.name}</p>
            <p className="text-faint mt-1 text-sm tabular-nums">
              {info.noteCount} notes · {Math.floor(info.durationSec / 60)}:{String(info.durationSec % 60).padStart(2, '0')} · {info.trackNames.length} piste{info.trackNames.length > 1 ? 's' : ''}
            </p>
          </div>
        ) : (
          <div>
            <p className="font-semibold text-[#f2efe8]">2. Dépose le fichier .mid ici</p>
            <p className="text-faint mt-1 text-sm">
              ou clique pour parcourir — sources gratuites : bitmidi.com, piano-midi.de, mutopiaproject.org
            </p>
          </div>
        )}
      </div>

      {info && (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-dim mb-1.5 block text-sm font-medium">Titre</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.05] px-3.5 text-[#f2efe8] caret-[#f0c66a] outline-none placeholder:text-faint focus:border-[#e0a83c]/50"
                placeholder="Nom du morceau"
              />
            </div>
            <div>
              <label className="text-dim mb-1.5 block text-sm font-medium">Compositeur</label>
              <input
                value={composer}
                onChange={(e) => setComposer(e.target.value)}
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.05] px-3.5 text-[#f2efe8] caret-[#f0c66a] outline-none placeholder:text-faint focus:border-[#e0a83c]/50"
                placeholder="Optionnel"
              />
            </div>
          </div>

          <div>
            <label className="text-dim mb-1.5 block text-sm font-medium">Ton estimation du niveau</label>
            <div className="glass inline-flex rounded-full p-1">
              {[1, 2, 3, 4, 5].map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    level === l ? 'btn-accent' : 'text-dim hover:text-[#f2efe8]'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => void submit()}
            disabled={busy || !title.trim()}
            className="btn-accent inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 font-bold disabled:opacity-50"
          >
            <Upload className="h-4 w-4" />
            {busy ? 'Import en cours…' : 'Ajouter à ma bibliothèque'}
          </button>
        </>
      )}

      {error && (
        <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}
