'use client'

/**
 * Binding React du moteur Web MIDI (lib/midi/midiEngine.ts).
 *
 * - useMidiInput()  : état de connexion + notes enfoncées (re-render à chaque
 *                     changement — pour le Piano et les indicateurs)
 * - useMidiNotes(cb): abonnement aux événements note on/off sans re-render
 *                     (pour le scoring temps réel du mode Practice)
 */

import { useEffect, useSyncExternalStore, useRef } from 'react'
import {
  subscribeMidi,
  getMidiState,
  getMidiServerState,
  subscribeMidiNotes,
  connectMidi,
  autoConnectMidi,
  type MidiState,
  type MidiNoteEvent,
} from '@/lib/midi/midiEngine'

export type { MidiState, MidiNoteEvent }

export function useMidiInput(): MidiState & { connect: () => Promise<void> } {
  const state = useSyncExternalStore(subscribeMidi, getMidiState, getMidiServerState)

  // Reconnexion silencieuse si la permission a déjà été accordée
  useEffect(() => {
    if (state.status === 'idle') {
      void autoConnectMidi()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ...state, connect: connectMidi }
}

/**
 * Écoute les notes jouées sans provoquer de re-render.
 * Le callback est toujours la dernière version fournie (pattern ref).
 */
export function useMidiNotes(onNote: (event: MidiNoteEvent) => void): void {
  const callbackRef = useRef(onNote)
  callbackRef.current = onNote

  useEffect(() => {
    return subscribeMidiNotes((event) => callbackRef.current(event))
  }, [])
}
