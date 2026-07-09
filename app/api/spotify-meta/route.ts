import { NextRequest, NextResponse } from 'next/server'

/**
 * Métadonnées d'un lien Spotify via leur endpoint public oEmbed —
 * aucune clé API, aucun compte développeur (leur programme dev étant
 * devenu inutilisable). Titre + artiste seulement : de quoi pré-remplir
 * la recherche MIDI.
 */
export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  if (!url) {
    return NextResponse.json({ error: 'url manquante' }, { status: 400 })
  }

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return NextResponse.json({ error: 'url invalide' }, { status: 400 })
  }
  if (parsed.hostname !== 'open.spotify.com') {
    return NextResponse.json({ error: 'seuls les liens open.spotify.com sont acceptés' }, { status: 400 })
  }

  try {
    const res = await fetch(
      `https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`,
      { next: { revalidate: 86400 } }
    )
    if (!res.ok) {
      return NextResponse.json({ error: 'titre introuvable' }, { status: 404 })
    }
    const data = await res.json()
    return NextResponse.json({ title: data.title ?? null })
  } catch {
    return NextResponse.json({ error: 'Spotify injoignable' }, { status: 502 })
  }
}
