'use client'

/**
 * Indicateur de connexion du clavier MIDI dans le header.
 *
 * - Clavier détecté  : chip verte avec le nom du device (ex. "P-145")
 * - Pas de clavier   : bouton « Connecter mon clavier » qui demande l'accès
 * - Navigateur sans Web MIDI : masqué (rien à proposer)
 */

import { Usb } from 'lucide-react'
import { useMidiInput } from '@/hooks/useMidiInput'

export function MidiStatus() {
  const { status, deviceName, connect } = useMidiInput()

  if (status === 'unsupported') return null

  if (status === 'connected') {
    return (
      <span
        className="badge-stage hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide sm:inline-flex"
        title={`Clavier connecté : ${deviceName}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
        {deviceName}
      </span>
    )
  }

  return (
    <button
      onClick={() => void connect()}
      disabled={status === 'requesting'}
      className="btn-ghost hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-dim disabled:opacity-60 sm:inline-flex"
      title={
        status === 'denied'
          ? "Accès MIDI refusé — autorise-le dans les réglages du site"
          : 'Brancher ton piano numérique en USB puis cliquer'
      }
    >
      <Usb className="h-3.5 w-3.5" />
      {status === 'requesting'
        ? 'Connexion…'
        : status === 'denied'
          ? 'MIDI refusé'
          : status === 'no-device'
            ? 'Aucun clavier'
            : 'Connecter mon clavier'}
    </button>
  )
}
