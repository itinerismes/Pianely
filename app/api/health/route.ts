import { NextResponse } from 'next/server'

/**
 * Health check endpoint pour monitoring
 * Utilisé par Docker healthcheck et load balancers
 */
export async function GET() {
  try {
    // Vérifications basiques
    const health = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      services: {
        nextjs: true,
        // Optionnel : vérifier les services OCR/Transcription
      }
    }

    return NextResponse.json(health, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 503 }
    )
  }
}
