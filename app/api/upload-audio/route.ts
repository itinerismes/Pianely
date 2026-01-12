import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { transcribeAudioComplete, convertMIDIToMusicXML } from '@/lib/audio/transcribe'
import path from 'path'
import fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid'

export const runtime = 'nodejs'
export const maxDuration = 300 // 5 minutes pour transcription

export async function POST(request: NextRequest) {
  // Note: Cette route nécessite Python + Basic Pitch installés localement ou sur VPS
  // Elle ne fonctionne PAS sur Vercel (timeouts + pas de Python)
  let tempPath = ''

  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Vérifier que les services Python sont disponibles (local/VPS uniquement)
    const scriptPath = path.join(process.cwd(), 'services', 'transcription', 'transcribe_service.py')
    const pythonPath = path.join(process.cwd(), 'services', 'transcription', 'venv', 'bin', 'python')

    try {
      await fs.access(scriptPath)
      await fs.access(pythonPath)
    } catch {
      return NextResponse.json({
        error: 'Service non disponible',
        message: 'La transcription audio → MIDI nécessite un environnement local ou VPS avec Python et Basic Pitch installés. Cette fonctionnalité n\'est pas disponible sur Vercel.'
      }, { status: 503 })
    }

    // Parser le FormData
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    const title = formData.get('title') as string
    const composer = formData.get('composer') as string
    const level = parseInt(formData.get('level') as string) || 1
    const difficulty = (formData.get('difficulty') as string) || 'medium'

    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 })
    }

    if (!title || !composer) {
      return NextResponse.json({ error: 'Title and composer are required' }, { status: 400 })
    }

    console.log(`🎵 Processing audio: ${audioFile.name} (${audioFile.size} bytes)`)

    // Convertir File en Buffer
    const arrayBuffer = await audioFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Créer un fichier temporaire
    const fileId = uuidv4()
    const ext = path.extname(audioFile.name)
    tempPath = path.join('/tmp', `${fileId}${ext}`)

    await fs.writeFile(tempPath, buffer)
    console.log(`💾 Saved to temp: ${tempPath}`)

    // Transcription avec Basic Pitch
    console.log('🎹 Starting transcription...')
    const transcriptionResult = await transcribeAudioComplete(tempPath)

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
      // Non-critique, on continue
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
        source: 'user_upload',
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
      // Non-critique si déjà existant
    }

    // Nettoyer le fichier temporaire
    try {
      await fs.unlink(tempPath)
      console.log('🗑️  Temp file cleaned')
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
    console.error('❌ Audio upload error:', error)

    // Nettoyer le fichier temporaire en cas d'erreur
    if (tempPath) {
      try {
        await fs.unlink(tempPath)
      } catch {}
    }

    return NextResponse.json(
      {
        error: 'Failed to process audio',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
