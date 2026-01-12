/**
 * Client IMSLP pour récupérer partitions du domaine public
 * IMSLP (International Music Score Library Project) - imslp.org
 * API Documentation: https://imslp.org/wiki/IMSLP:API
 */

const IMSLP_API_BASE = 'https://imslp.org/api.php'
const IMSLP_BASE_URL = 'https://imslp.org'

export interface IMSLPWork {
  pageid: number
  title: string
  composer?: string
  workTitle?: string
  opus?: string
  snippet?: string
}

export interface IMSLPFile {
  filename: string
  fileType: 'pdf' | 'midi' | 'musicxml' | 'unknown'
  url: string
  description?: string
}

export interface IMSLPSearchResult {
  pageid: number
  title: string
  snippet: string
}

/**
 * Rechercher des oeuvres par compositeur ou titre
 */
export async function searchIMSLP(query: string): Promise<IMSLPSearchResult[]> {
  try {
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: query,
      srnamespace: '0', // Main namespace
      srlimit: '20',
      srprop: 'snippet|titlesnippet',
    })

    const response = await fetch(`${IMSLP_API_BASE}?${params}`, {
      headers: {
        'User-Agent': 'Pianely/1.0 (Piano Learning App)',
      },
    })

    if (!response.ok) {
      throw new Error(`IMSLP API error: ${response.statusText}`)
    }

    const data = await response.json()

    if (!data.query || !data.query.search) {
      return []
    }

    return data.query.search.map((result: any) => ({
      pageid: result.pageid,
      title: result.title,
      snippet: result.snippet || '',
    }))
  } catch (error) {
    console.error('Error searching IMSLP:', error)
    throw error
  }
}

/**
 * Rechercher spécifiquement par compositeur
 */
export async function searchIMSLPByComposer(composerName: string): Promise<IMSLPSearchResult[]> {
  return searchIMSLP(`${composerName}`)
}

/**
 * Récupérer les détails d'une page IMSLP
 */
export async function getIMSLPPage(pageId: number): Promise<any> {
  try {
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      pageids: pageId.toString(),
      prop: 'revisions|info',
      rvprop: 'content',
      rvslots: 'main',
    })

    const response = await fetch(`${IMSLP_API_BASE}?${params}`, {
      headers: {
        'User-Agent': 'Pianely/1.0 (Piano Learning App)',
      },
    })

    if (!response.ok) {
      throw new Error(`IMSLP API error: ${response.statusText}`)
    }

    const data = await response.json()

    if (!data.query || !data.query.pages) {
      return null
    }

    const page = data.query.pages[pageId]
    return page
  } catch (error) {
    console.error('Error fetching IMSLP page:', error)
    throw error
  }
}

/**
 * Parser les informations d'une oeuvre depuis le contenu wikitext
 * Note: IMSLP utilise un format wikitext spécial qu'il faudrait parser correctement
 * Pour l'instant, on extrait les infos basiques
 */
export function parseIMSLPWorkInfo(title: string, wikitext?: string): IMSLPWork {
  // Extraire le compositeur du titre (format: "Work Title (Composer, Name)")
  const composerMatch = title.match(/\(([^,]+),\s*([^)]+)\)/)
  const composer = composerMatch ? `${composerMatch[2]} ${composerMatch[1]}` : 'Unknown'

  // Extraire le titre de l'oeuvre
  const workTitle = title.replace(/\s*\([^)]+\)\s*$/, '').trim()

  // Extraire l'opus si présent dans le wikitext
  let opus: string | undefined
  if (wikitext) {
    const opusMatch = wikitext.match(/\|Opus Number\s*=\s*([^\n|]+)/)
    if (opusMatch) {
      opus = opusMatch[1].trim()
    }
  }

  return {
    pageid: 0, // À remplir par l'appelant
    title,
    composer,
    workTitle,
    opus,
  }
}

/**
 * Construire l'URL d'une page IMSLP
 */
export function getIMSLPUrl(pageId: number, title?: string): string {
  if (title) {
    // Encoder le titre pour l'URL
    const encodedTitle = encodeURIComponent(title.replace(/ /g, '_'))
    return `${IMSLP_BASE_URL}/wiki/${encodedTitle}`
  }
  return `${IMSLP_BASE_URL}/wiki/Special:ReverseLookup/${pageId}`
}

/**
 * Parser les fichiers disponibles depuis le wikitext IMSLP
 * Note: Ceci est une implémentation simplifiée
 * IMSLP stocke les fichiers dans des templates spéciaux
 */
export function parseIMSLPFiles(wikitext: string): IMSLPFile[] {
  const files: IMSLPFile[] = []

  // Rechercher les liens de fichiers [[File:...]]
  const fileRegex = /\[\[File:([^\]|]+)(?:\|([^\]]*))?\]\]/g
  let match

  while ((match = fileRegex.exec(wikitext)) !== null) {
    const filename = match[1]
    const description = match[2] || ''

    // Déterminer le type de fichier
    let fileType: IMSLPFile['fileType'] = 'unknown'
    if (filename.toLowerCase().endsWith('.pdf')) {
      fileType = 'pdf'
    } else if (filename.toLowerCase().endsWith('.mid') || filename.toLowerCase().endsWith('.midi')) {
      fileType = 'midi'
    } else if (filename.toLowerCase().endsWith('.xml') || filename.toLowerCase().endsWith('.mxl')) {
      fileType = 'musicxml'
    }

    files.push({
      filename,
      fileType,
      url: `${IMSLP_BASE_URL}/wiki/File:${encodeURIComponent(filename)}`,
      description,
    })
  }

  return files
}

/**
 * Préparer les données d'un morceau IMSLP pour l'importation
 * Note: Cette fonction retourne les données, mais ne crée pas le morceau
 * La création doit être faite par un server action ou API route
 */
export function prepareIMSLPPieceData(
  workData: IMSLPWork,
  level: number,
  difficulty: 'easy' | 'medium' | 'hard',
  files?: IMSLPFile[]
) {
  return {
    title: workData.workTitle || workData.title,
    composer: workData.composer || 'Unknown',
    opus_number: workData.opus,
    level,
    difficulty,
    category: 'classical',
    source: 'imslp',
    imslp_id: workData.pageid.toString(),
    imslp_url: getIMSLPUrl(workData.pageid, workData.title),
    sheet_music_url: files?.find(f => f.fileType === 'pdf')?.url,
    midi_url: files?.find(f => f.fileType === 'midi')?.url,
    musicxml_url: files?.find(f => f.fileType === 'musicxml')?.url,
  }
}

/**
 * Récupérer les compositeurs populaires (liste hardcodée pour faciliter la recherche)
 */
export function getPopularComposers(): string[] {
  return [
    'Johann Sebastian Bach',
    'Ludwig van Beethoven',
    'Wolfgang Amadeus Mozart',
    'Frédéric Chopin',
    'Franz Liszt',
    'Claude Debussy',
    'Sergei Rachmaninoff',
    'Johannes Brahms',
    'Robert Schumann',
    'Franz Schubert',
    'Pyotr Ilyich Tchaikovsky',
    'Erik Satie',
    'Maurice Ravel',
    'Dmitri Shostakovich',
    'Alexander Scriabin',
  ]
}

/**
 * Vérifier si IMSLP est accessible (health check)
 */
export async function checkIMSLPAvailability(): Promise<boolean> {
  try {
    const response = await fetch(IMSLP_API_BASE, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Pianely/1.0 (Piano Learning App)',
      },
    })
    return response.ok
  } catch {
    return false
  }
}
