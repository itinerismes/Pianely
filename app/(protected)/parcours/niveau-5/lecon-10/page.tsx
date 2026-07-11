import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {id: '1', type: 'text', data: {content: `<h2>Improvisation et jazz 🎷</h2><p>L\'improvisation est l\'art de composer en temps réel. C\'est la liberté musicale absolue !</p>`, variant: 'normal'}},
  {id: '2', type: 'text', data: {content: `<h2>Les bases du jazz : la gamme blues</h2><p>La <strong>gamme blues</strong> en Do :</p><ul><li>Do - Mi♭ - Fa - Fa# - Sol - Si♭ - Do</li><li>Les "blue notes" (Mi♭, Fa#, Si♭) créent le son blues</li><li>Utilise cette gamme sur un accord de Do7</li></ul>`, variant: 'highlight'}},
  {id: '3', type: 'practice', data: {title: 'Exercice : Improvisation blues', description: 'Crée tes premières phrases', steps: ['Main gauche : joue Do7 en boucle', 'Main droite : improvise avec la gamme blues', 'Commence par des notes longues', 'Ajoute du rythme et des syncopes', 'Laisse-toi aller, expérimente !', 'Enregistre-toi et écoute']}},
  {id: '4', type: 'text', data: {content: `<h2>La progression II-V-I</h2><p>La progression la plus importante du jazz :</p><ul><li>En Do majeur : Dm7 - G7 - Cmaj7</li><li>C\'est la cadence parfaite du jazz</li><li>Pratique cette progression dans toutes les tonalités</li></ul>`, variant: 'normal'}},
  {id: '5', type: 'practice', data: {title: 'Exercice : Improvisation sur II-V-I', description: 'Utilise les bonnes gammes', steps: ['Joue Dm7 (gamme de Do majeur)', 'Joue G7 (gamme de Sol mixolydien)', 'Résous sur Cmaj7 (gamme de Do majeur)', 'Improvise une mélodie qui suit les accords', 'Crée de la tension sur G7, résolution sur Cmaj7']}},
  {id: '6', type: 'text', data: {content: `<h2>Les standards de jazz</h2><p>Apprends ces standards incontournables :</p><ul><li><strong>Autumn Leaves</strong> : Progression claire</li><li><strong>Fly Me to the Moon</strong> : Belle mélodie</li><li><strong>All of Me</strong> : Structure simple</li><li><strong>Take Five</strong> : Mesure en 5/4</li></ul>`, variant: 'tip'}},
  {id: '7', type: 'practice', data: {title: 'Exercice : Autumn Leaves', description: 'Apprends un standard', steps: ['Apprends les accords de Autumn Leaves', 'Joue la mélodie main droite', 'Combine mélodie et accords', 'Improvise sur la grille d\'accords', 'Varie les voicings des accords']}},
  {id: '8', type: 'text', data: {content: `<h2>Techniques d\'improvisation</h2><ul><li><strong>Motifs</strong> : Crée un motif court et développe-le</li><li><strong>Question-réponse</strong> : Phrase puis réponse</li><li><strong>Space</strong> : Le silence est aussi important que les notes</li><li><strong>Répétition</strong> : Répète une idée avec variations</li><li><strong>Écoute</strong> : Écoute ce que tu joues, réagis</li></ul>`, variant: 'highlight'}},
  {id: '9', type: 'practice', data: {title: 'Exercice : Développement de motif', description: 'Crée et varie', steps: ['Invente un motif de 3-4 notes', 'Joue-le', 'Monte-le d\'une octave', 'Inverse-le (miroir)', 'Augmente les durées', 'Diminue les durées', 'Combine les variations']}},
  {id: '10', type: 'text', data: {content: `<h2>Le comping (accompagnement jazz)</h2><p>Accompagner un soliste :</p><ul><li>Joue les accords en rythme</li><li>Syncopé, pas sur les temps</li><li>Laisse de l\'espace</li><li>Réagis au soliste</li></ul>`, variant: 'normal'}},
  {id: '11', type: 'practice', data: {title: 'Exercice : Comping', description: 'Accompagne une mélodie enregistrée', steps: ['Trouve une version d\'un standard (YouTube)', 'Joue les accords en comping', 'Syncopé, varié', 'Écoute le soliste, adapte-toi', 'Crée un dialogue musical']}},
  {id: '12', type: 'text', data: {content: `<h2>Récapitulatif</h2><ul><li>✅ Gamme blues et improvisation</li><li>✅ Progression II-V-I</li><li>✅ Standards de jazz</li><li>✅ Techniques d\'improvisation</li><li>✅ Comping jazz</li></ul><p>L\'improvisation est un voyage sans fin. Pratique, écoute, et surtout : amuse-toi !</p>`, variant: 'highlight'}},
  {
    id: 'piano-exercice',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'À toi de jouer 🎹',
      instructions: "Improvise sur la gamme blues de Do. Joue Do, Ré#, Fa, Fa#, Sol, La# sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'D#', 'F', 'F#', 'G', 'A#']
    }
  }
]

export default function Lecon10Page() {
  return <LessonTemplate levelId={5} lessonNumber={10} title="Improvisation et jazz" duration={25} objectives={['Improviser avec la gamme blues', 'Maîtriser la progression II-V-I', 'Jouer des standards de jazz', 'Développer des motifs musicaux', 'Accompagner en style jazz']} content={content} previousLesson={{title: 'Répertoire romantique', href: '/parcours/niveau-5/lecon-9'}} nextLesson={{title: 'Composition et arrangement', href: '/parcours/niveau-5/lecon-11'}} />
}
