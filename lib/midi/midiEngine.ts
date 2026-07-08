/**
 * Moteur Web MIDI — singleton hors React.
 *
 * Gère la connexion au clavier numérique (Yamaha P-145 & co) via
 * navigator.requestMIDIAccess, le hot-plug USB, et diffuse les événements
 * note on/off à tous les abonnés (indicateur header, Piano, mode Practice).
 *
 * Consommé côté React via hooks/useMidiInput.ts (useSyncExternalStore).
 */

export type MidiStatus =
  | 'unsupported'   // navigateur sans Web MIDI (Safari…)
  | 'idle'          // pas encore demandé
  | 'requesting'    // permission en cours
  | 'denied'        // permission refusée
  | 'no-device'     // accès OK mais aucun clavier branché
  | 'connected'     // clavier détecté

export interface MidiNoteEvent {
  type: 'noteon' | 'noteoff'
  /** Numéro MIDI (21 = A0 … 108 = C8). Le P-145 couvre les 88 touches. */
  note: number
  /** Vélocité 0-127 (force de frappe) */
  velocity: number
  timestamp: number
}

export interface MidiState {
  status: MidiStatus
  deviceName: string | null
  /** Notes actuellement enfoncées (numéros MIDI) */
  activeNotes: ReadonlySet<number>
}

type Listener = () => void
type NoteListener = (event: MidiNoteEvent) => void

let access: MIDIAccess | null = null
let state: MidiState = {
  status: 'idle',
  deviceName: null,
  activeNotes: new Set<number>(),
}

const listeners = new Set<Listener>()
const noteListeners = new Set<NoteListener>()

function emit() {
  for (const listener of listeners) listener()
}

function setState(partial: Partial<MidiState>) {
  state = { ...state, ...partial }
  emit()
}

/** Nom lisible : "P-145" plutôt que "Digital Piano MIDI 1" quand possible */
function pickDeviceName(input: MIDIInput): string {
  return input.name || input.manufacturer || 'Clavier MIDI'
}

function handleMidiMessage(event: MIDIMessageEvent) {
  const data = event.data
  if (!data || data.length < 3) return

  const status = data[0] & 0xf0
  const note = data[1]
  const velocity = data[2]

  const isNoteOn = status === 0x90 && velocity > 0
  const isNoteOff = status === 0x80 || (status === 0x90 && velocity === 0)
  if (!isNoteOn && !isNoteOff) return

  const noteEvent: MidiNoteEvent = {
    type: isNoteOn ? 'noteon' : 'noteoff',
    note,
    velocity,
    timestamp: event.timeStamp,
  }

  const next = new Set(state.activeNotes)
  if (isNoteOn) next.add(note)
  else next.delete(note)
  setState({ activeNotes: next })

  for (const listener of noteListeners) listener(noteEvent)
}

/** (Re)branche tous les inputs disponibles et met à jour le statut */
function bindInputs() {
  if (!access) return

  let firstDevice: string | null = null
  for (const input of access.inputs.values()) {
    input.onmidimessage = handleMidiMessage
    if (!firstDevice) firstDevice = pickDeviceName(input)
  }

  if (firstDevice) {
    setState({ status: 'connected', deviceName: firstDevice })
  } else {
    setState({ status: 'no-device', deviceName: null, activeNotes: new Set() })
  }
}

/**
 * Demande l'accès Web MIDI (idéalement suite à un geste utilisateur).
 * Idempotent : ne redemande pas si déjà accordé.
 */
export async function connectMidi(): Promise<void> {
  if (typeof navigator === 'undefined' || !('requestMIDIAccess' in navigator)) {
    setState({ status: 'unsupported' })
    return
  }
  if (access) {
    bindInputs()
    return
  }

  setState({ status: 'requesting' })
  try {
    access = await navigator.requestMIDIAccess({ sysex: false })
    access.onstatechange = () => bindInputs() // hot-plug USB
    bindInputs()
  } catch {
    setState({ status: 'denied' })
  }
}

/** Tentative silencieuse au chargement si la permission est déjà accordée */
export async function autoConnectMidi(): Promise<void> {
  if (typeof navigator === 'undefined' || !('requestMIDIAccess' in navigator)) {
    setState({ status: 'unsupported' })
    return
  }
  try {
    // L'API Permissions évite de déclencher un prompt non sollicité
    const permission = await navigator.permissions.query({
      name: 'midi' as PermissionName,
    })
    if (permission.state === 'granted') {
      await connectMidi()
    }
  } catch {
    // API Permissions indisponible pour 'midi' : on reste en idle,
    // l'utilisateur connectera via le bouton.
  }
}

// ── Interface store (useSyncExternalStore) ──────────────────────────────

export function subscribeMidi(listener: Listener): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function getMidiState(): MidiState {
  return state
}

const SERVER_STATE: MidiState = {
  status: 'idle',
  deviceName: null,
  activeNotes: new Set(),
}

export function getMidiServerState(): MidiState {
  return SERVER_STATE
}

/** Abonnement aux événements de notes (Piano, mode Practice) */
export function subscribeMidiNotes(listener: NoteListener): () => void {
  noteListeners.add(listener)
  return () => noteListeners.delete(listener)
}

// ── Utilitaires notes ───────────────────────────────────────────────────

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const

/** 60 → "C4" (Do central). Compatible avec le composant Piano. */
export function midiNoteToName(note: number): string {
  const octave = Math.floor(note / 12) - 1
  return `${NOTE_NAMES[note % 12]}${octave}`
}

/** "C4" → 60. Inverse de midiNoteToName. */
export function noteNameToMidi(name: string): number | null {
  const match = /^([A-G]#?)(-?\d)$/.exec(name)
  if (!match) return null
  const index = NOTE_NAMES.indexOf(match[1] as (typeof NOTE_NAMES)[number])
  if (index === -1) return null
  return (parseInt(match[2], 10) + 1) * 12 + index
}
