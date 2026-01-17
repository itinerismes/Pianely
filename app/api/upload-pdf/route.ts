import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import path from 'path'
import fs from 'fs/promises'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

// Configuration pour les longs traitements
// Note: Vercel Hobby plan limite à 300s max, Pro plan permet 900s
export const runtime = 'nodejs'
export const maxDuration = 300 // 5 minutes max (limite Vercel Hobby)

export async function POST(request: NextRequest) {
  // Note: Cette route nécessite Python + Audiveris installés localement ou sur VPS
  // Elle ne fonctionne PAS sur Vercel (timeouts + pas de Java/Python)
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Vérifier que les services Python sont disponibles (local/VPS uniquement)
    const scriptPath = path.join(process.cwd(), 'services', 'ocr', 'pdf_to_midi.py')
    const pythonPath = path.join(process.cwd(), 'services', 'ocr', 'venv', 'bin', 'python')

    try {
      await fs.access(scriptPath)
      await fs.access(pythonPath)
    } catch {
      return NextResponse.json({
        error: 'Service non disponible',
        message: 'La conversion PDF → MIDI nécessite un environnement local ou VPS avec Python et Audiveris installés. Cette fonctionnalité n\'est pas disponible sur Vercel.'
      }, { status: 503 })
    }

    const formData = await request.formData()
    const pdfFile = formData.get('pdf') as File
    const title = formData.get('title') as string
    const composer = formData.get('composer') as string || 'Unknown'

    if (!pdfFile) {
      return NextResponse.json({ error: 'No PDF file provided' }, { status: 400 })
    }

    if (!title) {
      return NextResponse.json({ error: 'Title required' }, { status: 400 })
    }

    console.log(`🎼 Processing PDF: ${pdfFile.name}`)

    // Convertir File en Buffer
    const arrayBuffer = await pdfFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Sauvegarder temporairement le PDF
    const tempPdfPath = path.join('/tmp', `${Date.now()}-${pdfFile.name}`)
    const tempMidiPath = tempPdfPath.replace('.pdf', '.mid')

    await fs.writeFile(tempPdfPath, buffer)

    try {
      // Appeler le service OCR Python
      const scriptPath = path.join(process.cwd(), 'services', 'ocr', 'pdf_to_midi.py')
      const pythonPath = path.join(process.cwd(), 'services', 'ocr', 'venv', 'bin', 'python')

      // Vérifier si le service Python est installé
      if (!await fileExists(scriptPath)) {
        return NextResponse.json({
          error: 'OCR service not installed',
          message: 'Please run: cd services/ocr && ./setup-ocr.sh'
        }, { status: 500 })
      }

      // Exécuter la conversion
      const pythonCmd = await fileExists(pythonPath) ? pythonPath : 'python3'
      const command = `${pythonCmd} "${scriptPath}" "${tempPdfPath}" "${tempMidiPath}"`

      console.log(`Executing: ${command}`)

      const { stdout, stderr } = await execAsync(command, {
        timeout: 300000 // 5 minutes max (limite Vercel Hobby)
      })

      if (stderr && !stderr.includes('warning')) {
        console.warn('Python stderr:', stderr)
      }

      console.log(stdout)

      // Vérifier que le MIDI a été créé
      if (!await fileExists(tempMidiPath)) {
        throw new Error('MIDI file was not created by OCR service')
      }

      // Lire le fichier MIDI
      const midiBuffer = await fs.readFile(tempMidiPath)

      // Upload vers Supabase Storage
      const midiFileName = `${user.id}/${Date.now()}.mid`
      const pdfFileName = `${user.id}/${Date.now()}.pdf`

      const { data: midiUpload, error: midiError } = await supabase.storage
        .from('sheet-music')
        .upload(midiFileName, midiBuffer, {
          contentType: 'audio/midi'
        })

      if (midiError) throw midiError

      // Upload aussi le PDF original
      const { data: pdfUpload, error: pdfError } = await supabase.storage
        .from('sheet-music')
        .upload(pdfFileName, buffer, {
          contentType: 'application/pdf'
        })

      if (pdfError) throw pdfError

      // Obtenir les URLs publiques
      const { data: { publicUrl: midiPublicUrl } } = supabase.storage
        .from('sheet-music')
        .getPublicUrl(midiFileName)

      const { data: { publicUrl: pdfPublicUrl } } = supabase.storage
        .from('sheet-music')
        .getPublicUrl(pdfFileName)

      // Créer l'entrée dans la table pieces
      const { data: piece, error: pieceError } = await supabase
        .from('pieces')
        .insert({
          title,
          composer,
          category: 'user_upload',
          source: 'pdf_upload',
          midi_url: midiPublicUrl,
          sheet_music_url: pdfPublicUrl,
          level: 1,
          difficulty: 'medium'
        })
        .select()
        .single()

      if (pieceError) throw pieceError

      // Ajouter à la bibliothèque utilisateur
      await supabase
        .from('user_pieces')
        .insert({
          user_id: user.id,
          piece_id: piece.id
        })

      // Nettoyer les fichiers temporaires
      await fs.unlink(tempPdfPath)
      await fs.unlink(tempMidiPath)

      console.log(`✅ PDF converted successfully: ${piece.title}`)

      return NextResponse.json({
        piece,
        message: 'PDF converted to MIDI successfully'
      })

    } catch (conversionError: any) {
      // Nettoyer en cas d'erreur
      try {
        await fs.unlink(tempPdfPath)
        if (await fileExists(tempMidiPath)) {
          await fs.unlink(tempMidiPath)
        }
      } catch {}

      console.error('❌ PDF conversion error:', conversionError)

      return NextResponse.json({
        error: 'Failed to convert PDF to MIDI',
        details: conversionError.message,
        suggestion: 'Make sure the PDF contains readable sheet music. Complex scores may take longer to process.'
      }, { status: 500 })
    }

  } catch (error: any) {
    console.error('❌ Upload error:', error)
    return NextResponse.json(
      {
        error: 'Failed to process PDF upload',
        details: error.message
      },
      { status: 500 }
    )
  }
}

// Helper pour vérifier l'existence d'un fichier
async function fileExists(path: string): Promise<boolean> {
  try {
    await fs.access(path)
    return true
  } catch {
    return false
  }
}
