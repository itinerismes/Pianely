/**
 * Client PianoSnap pour télécharger des partitions
 * Site: https://pianosnap.com/
 *
 * NOTE IMPORTANTE: Cette implémentation est un placeholder.
 * Avant de l'utiliser en production, vérifier:
 * 1. Les Terms of Service de PianoSnap pour autorisation de scraping
 * 2. Implémenter un système de scraping respectueux (rate limiting, robots.txt)
 * 3. Implémenter l'OCR musical pour convertir PDF/images en MusicXML
 */

export interface PianoSnapSheet {
  id: string
  title: string
  artist: string
  difficulty?: string
  downloadUrl?: string
  thumbnail?: string
  genre?: string
}

/**
 * Rechercher des partitions sur PianoSnap
 * TODO: Implémenter le scraping réel ou utiliser une API si disponible
 */
export async function searchPianoSnap(query: string): Promise<PianoSnapSheet[]> {
  // PLACEHOLDER: Implémentation à compléter
  // Options possibles:
  // 1. Puppeteer pour scraping automatisé
  // 2. Cheerio pour parsing HTML si pas de JS dynamique
  // 3. API officielle si disponible

  console.warn('PianoSnap search not yet implemented. Returning empty results.')

  // Pour le moment, retourner un array vide
  // Dans une vraie implémentation, on ferait:
  // - Fetch de la page de recherche PianoSnap
  // - Parser le HTML pour extraire les résultats
  // - Retourner les données structurées

  return []
}

/**
 * Télécharger une partition depuis PianoSnap
 * TODO: Implémenter le téléchargement réel
 */
export async function downloadPianoSnapSheet(sheetId: string): Promise<{
  fileBuffer: Buffer
  format: 'pdf' | 'image'
}> {
  // PLACEHOLDER: Implémentation à compléter
  // Dans une vraie implémentation:
  // 1. Naviguer vers la page du morceau
  // 2. Télécharger le PDF ou les images
  // 3. Retourner le buffer

  throw new Error('PianoSnap download not yet implemented')
}

/**
 * Convertir PDF/Image de partition en MusicXML avec OCR
 * TODO: Implémenter l'OMR (Optical Music Recognition)
 *
 * Options possibles:
 * 1. Audiveris (Java-based, open-source, très bon)
 * 2. APIs commerciales: SmartScore, PhotoScore
 * 3. Solutions ML custom avec TensorFlow/PyTorch
 */
export async function convertSheetToMusicXML(
  fileBuffer: Buffer,
  format: 'pdf' | 'image'
): Promise<{
  musicxml: string
  midi: Buffer
}> {
  // PLACEHOLDER: Implémentation à compléter
  // Audiveris serait le meilleur choix open-source:
  // - Installer Audiveris CLI
  // - Appeler via child_process
  // - Parser le résultat MusicXML

  throw new Error('Sheet music OCR not yet implemented')
}

/**
 * Importer un morceau PianoSnap dans la base de données
 * Cette fonction sera utilisée une fois le scraping et l'OCR implémentés
 */
export async function importPianoSnapPiece(
  sheetData: PianoSnapSheet,
  level: number,
  difficulty: 'easy' | 'medium' | 'hard',
  musicXmlBuffer?: Buffer,
  midiBuffer?: Buffer
): Promise<any> {
  try {
    // TODO: Upload des fichiers vers Supabase Storage
    // const { data: musicXmlUpload } = await supabase.storage
    //   .from('sheet-music')
    //   .upload(`pianosnap/${sheetData.id}.xml`, musicXmlBuffer)

    const pieceData = {
      title: sheetData.title,
      composer: sheetData.artist,
      level,
      difficulty,
      category: sheetData.genre || 'pop',
      source: 'pianosnap',
      thumbnail_url: sheetData.thumbnail,
      // musicxml_url: musicXmlUpload?.path,
      // midi_url: midiUpload?.path,
    }

    // TODO: Implement server action for PianoSnap import (similar to IMSLP)
    // const piece = await createPiece(pieceData)
    // return piece
    throw new Error('PianoSnap import not yet implemented')
  } catch (error) {
    console.error('Error importing PianoSnap piece:', error)
    throw error
  }
}

/**
 * Vérifier la disponibilité de PianoSnap
 */
export async function checkPianoSnapAvailability(): Promise<boolean> {
  try {
    const response = await fetch('https://pianosnap.com', {
      method: 'HEAD',
    })
    return response.ok
  } catch {
    return false
  }
}

/**
 * Suggestions pour l'implémentation future:
 *
 * 1. SCRAPING RESPECTUEUX:
 *    - Vérifier robots.txt
 *    - Rate limiting (max 1 requête/seconde)
 *    - User-Agent approprié
 *    - Caching des résultats
 *
 * 2. OCR MUSICAL (Audiveris):
 *    npm install child_process
 *    - Installer Audiveris: https://github.com/Audiveris/audiveris
 *    - Appeler: audiveris -batch -export <input.pdf>
 *    - Parser le MusicXML généré
 *
 * 3. ALTERNATIVE OCR (API):
 *    - SmartScore Cloud API (payant)
 *    - PhotoScore API (payant)
 *    - Solution custom avec ML
 *
 * 4. STOCKAGE:
 *    - Uploader les fichiers vers Supabase Storage
 *    - Gérer les permissions et l'accès
 */

// Export d'une constante pour indiquer que l'implémentation est incomplète
export const PIANOSNAP_IMPLEMENTED = false
export const PIANOSNAP_TODO = [
  'Implémenter le scraping (Puppeteer/Cheerio)',
  'Vérifier les Terms of Service de PianoSnap',
  'Implémenter l\'OCR musical (Audiveris recommandé)',
  'Gérer l\'upload vers Supabase Storage',
  'Ajouter le rate limiting et le respect de robots.txt',
]
