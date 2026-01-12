import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { transcribeAudioComplete, convertMIDIToMusicXML } from '@/lib/audio/transcribe'
import ytdl from '@distube/ytdl-core'
import path from 'path'
import fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid'
import ffmpeg from 'fluent-ffmpeg'
import { createWriteStream } from 'fs'

export const runtime = 'nodejs'
export const maxDuration = 300 // 5 minutes

export async function POST(request: NextRequest) {
  // Note: Cette route nécessite Python + FFmpeg + ytdl installés localement ou sur VPS
  // Elle ne fonctionne PAS sur Vercel (timeouts + pas de binaires)
  let webmPath = ''
  let wavPath = ''

  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Vérifier que les services sont disponibles (local/VPS uniquement)
    const scriptPath = path.join(process.cwd(), 'services', 'transcription', 'transcribe_service.py')
    const pythonPath = path.join(process.cwd(), 'services', 'transcription', 'venv', 'bin', 'python')

    try {
      await fs.access(scriptPath)
      await fs.access(pythonPath)
    } catch {
      return NextResponse.json({
        error: 'Service non disponible',
        message: 'La conversion YouTube → MIDI nécessite un environnement local ou VPS avec Python, FFmpeg et ytdl installés. Cette fonctionnalité n\'est pas disponible sur Vercel.'
      }, { status: 503 })
    }

    const body = await request.json()
    const { youtubeUrl, title, composer, level = 1, difficulty = 'medium' } = body

    if (!youtubeUrl) {
      return NextResponse.json({ error: 'No YouTube URL provided' }, { status: 400 })
    }

    if (!title || !composer) {
      return NextResponse.json({ error: 'Title and composer are required' }, { status: 400 })
    }

    // Valider l'URL YouTube
    if (!ytdl.validateURL(youtubeUrl)) {
      return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 })
    }

    console.log(`🎥 Processing YouTube: ${youtubeUrl}`)

    const fileId = uuidv4()
    webmPath = path.join('/tmp', `${fileId}.webm`)
    wavPath = path.join('/tmp', `${fileId}.wav`)

    // Télécharger l'audio depuis YouTube
    console.log('⬇️  Downloading audio from YouTube...')

    await new Promise<void>((resolve, reject) => {
      const stream = ytdl(youtubeUrl, {
        quality: 'highestaudio',
        filter: 'audioonly',
      })

      const writeStream = createWriteStream(webmPath)
      stream.pipe(writeStream)

      writeStream.on('finish', () => resolve())
      writeStream.on('error', (err) => reject(err))
      stream.on('error', (err) => reject(err))
    })

    console.log('✅ Download complete')

    // Convertir en WAV avec FFmpeg
    console.log('🔄 Converting to WAV...')

    await new Promise<void>((resolve, reject) => {
      ffmpeg(webmPath)
        .toFormat('wav')
        .audioFrequency(22050) // Basic Pitch fonctionne mieux avec 22050 Hz
        .audioChannels(1) // Mono
        .on('end', () => resolve())
        .on('error', (err) => reject(err))
        .save(wavPath)
    })

    console.log('✅ Conversion complete')

    // Transcription avec Basic Pitch
    console.log('🎹 Starting transcription...')
    const transcriptionResult = await transcribeAudioComplete(wavPath)

    console.log(`✅ Transcription complete: ${transcriptionResult.notes.length} notes, ${transcriptionResult.duration.toFixed(2)}s`)

    // Générer MusicXML
    const musicXML = convertMIDIToMusicXML(transcriptionResult.midiBuffer, title, composer)

    // Upload vers Supabase Storage
    const timestamp = Date.now()
    const midiFileName = `${user.id}/${timestamp}-${fileId}.mid`
    const xmlFileName = `${user.id}/${timestamp}-${fileId}.xml`

    console.log('☁️  Uploading to Supabase Storage...')

    // Upload MIDI
    const { data: midiUpload, error: midiError } = await supabase.storage
      .from('sheet-music')
      .upload(midiFileName, transcriptionResult.midiBuffer, {
        contentType: 'audio/midi',
        upsert: false,
      })

    if (midiError) {
      console.error('MIDI upload error:', midiError)
      throw new Error(`Failed to upload MIDI: ${midiError.message}`)
    }

    // Upload MusicXML
    const { data: xmlUpload, error: xmlError } = await supabase.storage
      .from('sheet-music')
      .upload(xmlFileName, musicXML, {
        contentType: 'application/xml',
        upsert: false,
      })

    if (xmlError) {
      console.error('MusicXML upload error:', xmlError)
      // Non-critique
    }

    // Obtenir les URLs publiques
    const { data: midiPublicUrl } = supabase.storage
      .from('sheet-music')
      .getPublicUrl(midiFileName)

    const { data: xmlPublicUrl } = xmlUpload
      ? supabase.storage.from('sheet-music').getPublicUrl(xmlFileName)
      : { data: null }

    console.log('📝 Creating piece entry...')

    // Créer l'entrée dans la table pieces
    const { data: piece, error: pieceError } = await supabase
      .from('pieces')
      .insert({
        title,
        composer,
        category: 'user_upload',
        source: 'youtube',
        midi_url: midiPublicUrl.publicUrl,
        musicxml_url: xmlPublicUrl?.publicUrl,
        level,
        difficulty: difficulty as 'easy' | 'medium' | 'hard',
        duration_minutes: Math.ceil(transcriptionResult.duration / 60),
      })
      .select()
      .single()

    if (pieceError) {
      console.error('Piece creation error:', pieceError)
      throw new Error(`Failed to create piece: ${pieceError.message}`)
    }

    console.log(`✅ Piece created: ${piece.id}`)

    // Ajouter à la bibliothèque utilisateur
    const { error: userPieceError } = await supabase
      .from('user_pieces')
      .insert({
        user_id: user.id,
        piece_id: piece.id,
      })

    if (userPieceError) {
      console.error('User piece error:', userPieceError)
      // Non-critique
    }

    // Nettoyer les fichiers temporaires
    try {
      await fs.unlink(webmPath)
      await fs.unlink(wavPath)
      console.log('🗑️  Temp files cleaned')
    } catch (cleanupError) {
      console.warn('Cleanup warning:', cleanupError)
    }

    return NextResponse.json({
      success: true,
      piece,
      transcription: {
        noteCount: transcriptionResult.notes.length,
        duration: transcriptionResult.duration,
        tempo: transcriptionResult.tempo,
      },
    })
  } catch (error) {
    console.error('❌ YouTube processing error:', error)

    // Nettoyer les fichiers temporaires
    if (webmPath) {
      try {
        await fs.unlink(webmPath)
      } catch {}
    }
    if (wavPath) {
      try {
        await fs.unlink(wavPath)
      } catch {}
    }

    return NextResponse.json(
      {
        error: 'Failed to process YouTube video',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
