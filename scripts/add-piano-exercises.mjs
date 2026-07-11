// One-shot: ajoute un bloc piano interactif à chaque leçon qui n'en a pas.
// Les targetNotes sont choisies selon le sujet de la leçon (voir MAP).
import { readFileSync, writeFileSync } from 'node:fs'

const ROOT = 'app/(protected)/parcours'

// key = "niveau-X/lecon-Y" -> { notes, goal }
const MAP = {
  'niveau-1/lecon-2': { notes: ['C', 'D', 'E', 'F', 'G'], goal: 'Retrouve ta position de base, pouce sur Do.' },
  'niveau-1/lecon-3': { notes: ['C', 'D', 'E'], goal: 'Rejoue ton premier motif main droite.' },
  'niveau-1/lecon-4': { notes: ['C', 'D', 'E'], goal: 'Rejoue ton premier motif main gauche.' },
  'niveau-1/lecon-5': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Enchaîne toute la gamme de Do majeur.' },

  'niveau-2/lecon-1': { notes: ['C', 'D', 'E', 'F', 'G'], goal: 'Installe ta main en position de Do.' },
  'niveau-2/lecon-2': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Monte la gamme avec le bon doigté.' },
  'niveau-2/lecon-3': { notes: ['C', 'E', 'G'], goal: 'Joue une tierce : Do, puis Mi, puis Sol.' },
  'niveau-2/lecon-4': { notes: ['C', 'D', 'E'], goal: 'Garde un tempo régulier (aide-toi du métronome).' },
  'niveau-2/lecon-5': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Rejoue ta première mélodie.' },
  'niveau-2/lecon-6': { notes: ['C', 'F', 'G'], goal: 'Pose les fondamentales des accords Do, Fa et Sol.' },
  'niveau-2/lecon-7': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Enchaîne la gamme, les deux mains si tu peux.' },

  'niveau-3/lecon-1': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Monte et descends la gamme de Do majeur.' },
  'niveau-3/lecon-2': { notes: ['C', 'D', 'E', 'F', 'G'], goal: 'Joue les notes lues sur la portée.' },
  'niveau-3/lecon-3': { notes: ['C', 'E', 'G', 'B'], goal: "Forme l'accord Cmaj7 : Do, Mi, Sol, Si." },
  'niveau-3/lecon-4': { notes: ['C', 'D', 'E', 'F', 'G'], goal: 'Travaille ton articulation sur ces notes.' },
  'niveau-3/lecon-5': { notes: ['C', 'E', 'G'], goal: "Tiens l'accord de Do avec la pédale de sustain." },
  'niveau-3/lecon-6': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Joue les notes du thème.' },
  'niveau-3/lecon-7': { notes: ['C', 'E', 'G'], goal: "Fais chanter l'accord de Do." },
  'niveau-3/lecon-8': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Joue la gamme de ton morceau.' },

  'niveau-4/lecon-1': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Compare Do majeur et La mineur (mêmes touches blanches).' },
  'niveau-4/lecon-2': { notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'], goal: 'Découvre Sol majeur — attention au Fa#.' },
  'niveau-4/lecon-3': { notes: ['G', 'B', 'D', 'F'], goal: "Forme l'accord Sol7 : Sol, Si, Ré, Fa." },
  'niveau-4/lecon-4': { notes: ['C', 'D', 'E', 'F', 'G'], goal: 'Garde le tempo sur ces notes.' },
  'niveau-4/lecon-5': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Enchaîne la gamme, mains indépendantes.' },
  'niveau-4/lecon-6': { notes: ['C', 'E', 'G'], goal: "Fais ressortir l'accord de Do." },
  'niveau-4/lecon-7': { notes: ['C', 'E', 'G'], goal: "Déroule l'arpège Do, Mi, Sol." },
  'niveau-4/lecon-8': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Déchiffre ces notes à vue.' },
  'niveau-4/lecon-9': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Joue la gamme de ton morceau.' },
  'niveau-4/lecon-10': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Échauffe-toi sur la gamme complète.' },

  'niveau-5/lecon-1': { notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'], goal: 'Explore Ré majeur — deux dièses (Fa#, Do#).' },
  'niveau-5/lecon-2': { notes: ['C', 'E', 'G', 'B', 'D'], goal: 'Empile le voicing Cmaj9 : Do, Mi, Sol, Si, Ré.' },
  'niveau-5/lecon-3': { notes: ['C', 'D', 'E', 'F', 'G'], goal: 'Fais dialoguer les voix.' },
  'niveau-5/lecon-4': { notes: ['C', 'D', 'E'], goal: 'Superpose les rythmes sur ces notes.' },
  'niveau-5/lecon-5': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Monte la gamme le plus fluidement possible.' },
  'niveau-5/lecon-6': { notes: ['C', 'E', 'G'], goal: "Colore l'accord de Do avec la pédale." },
  'niveau-5/lecon-7': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Joue le motif façon Bach.' },
  'niveau-5/lecon-8': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Joue la gamme, style classique.' },
  'niveau-5/lecon-9': { notes: ['C', 'E', 'G', 'B', 'D'], goal: 'Étire le voicing romantique.' },
  'niveau-5/lecon-10': { notes: ['C', 'D#', 'F', 'F#', 'G', 'A#'], goal: 'Improvise sur la gamme blues de Do.' },
  'niveau-5/lecon-11': { notes: ['C', 'E', 'G', 'B', 'D'], goal: 'Pose ton accord de composition.' },
  'niveau-5/lecon-12': { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], goal: 'Échauffe-toi avant de monter sur scène.' },
}

const FR = { C: 'Do', 'C#': 'Do#', D: 'Ré', 'D#': 'Ré#', E: 'Mi', F: 'Fa', 'F#': 'Fa#', G: 'Sol', 'G#': 'Sol#', A: 'La', 'A#': 'La#', B: 'Si' }
const frList = (notes) => notes.map((n) => FR[n]).join(', ')

let done = 0
for (const [key, { notes, goal }] of Object.entries(MAP)) {
  const file = `${ROOT}/${key}/page.tsx`
  let src = readFileSync(file, 'utf8')

  if (src.includes("component: 'piano'")) {
    console.log(`skip (déjà un piano): ${key}`)
    continue
  }

  const instructions = `${goal} Joue ${frList(notes)} sur ton piano (ou clique sur les touches) — chaque note validée s'allume.`
  const notesLiteral = notes.map((n) => `'${n}'`).join(', ')
  const block =
    `,\n  {\n` +
    `    id: 'piano-exercice',\n` +
    `    type: 'interactive',\n` +
    `    data: {\n` +
    `      component: 'piano',\n` +
    `      title: 'À toi de jouer 🎹',\n` +
    `      instructions: ${JSON.stringify(instructions)},\n` +
    `      targetNotes: [${notesLiteral}]\n` +
    `    }\n` +
    `  }\n`

  const anchor = '\n]\n\nexport default function'
  if (!src.includes(anchor)) {
    console.error(`ANCHOR INTROUVABLE: ${key}`)
    process.exit(1)
  }
  src = src.replace(anchor, `${block}]\n\nexport default function`)
  writeFileSync(file, src)
  done++
  console.log(`ok: ${key} -> [${notes.join(', ')}]`)
}
console.log(`\n${done} leçons mises à jour.`)
