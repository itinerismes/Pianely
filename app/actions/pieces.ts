'use server'

import { createPiece, addPieceToUserLibrary } from '@/lib/supabase/pieces'
import { prepareIMSLPPieceData } from '@/lib/imslp/client'
import type { IMSLPWork, IMSLPFile } from '@/lib/imslp/client'

/**
 * Server action pour importer un morceau IMSLP
 */
export async function importIMSLPPieceAction(
  workData: IMSLPWork,
  level: number,
  difficulty: 'easy' | 'medium' | 'hard',
  userId: string,
  files?: IMSLPFile[]
) {
  try {
    // Préparer les données du morceau
    const pieceData = prepareIMSLPPieceData(workData, level, difficulty, files)

    // Créer le morceau dans la base de données
    const piece = await createPiece(pieceData)

    // Ajouter à la bibliothèque utilisateur
    await addPieceToUserLibrary(userId, piece.id)

    return { success: true, piece }
  } catch (error) {
    console.error('Error importing IMSLP piece:', error)
    return { success: false, error: 'Failed to import piece' }
  }
}
