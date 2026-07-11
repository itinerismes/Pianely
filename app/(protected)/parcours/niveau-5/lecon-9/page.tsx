import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {id: '1', type: 'text', data: {content: `<h2>Répertoire romantique : Chopin & Liszt 🌹</h2><p>L\'ère romantique célèbre l\'émotion, la virtuosité et l\'expression personnelle. Chopin et Liszt ont révolutionné le piano.</p>`, variant: 'normal'}},
  {id: '2', type: 'text', data: {content: `<h2>Chopin : Prélude Op. 28 No. 7 en La majeur</h2><p>Court mais parfait, ce prélude capture l\'essence de Chopin.</p><ul><li>16 mesures de pure beauté</li><li>Mélodie simple mais profondément expressive</li><li>Accessible techniquement</li></ul>`, variant: 'highlight'}},
  {id: '3', type: 'practice', data: {title: 'Exercice : Prélude No. 7', description: 'Chante avec le piano', steps: ['Apprends la mélodie main droite', 'Ajoute les accords main gauche', 'Focus sur le legato et le chant', 'Utilise beaucoup de pédale', 'Imagine que tu chantes à travers le piano']}},
  {id: '4', type: 'text', data: {content: `<h2>Style d\'interprétation Chopin</h2><ul><li><strong>Rubato</strong> : Flexibilité du tempo, mais la pulsation reste</li><li><strong>Pédale</strong> : Généreuse, créant une atmosphère</li><li><strong>Cantabile</strong> : Le piano doit chanter comme une voix</li><li><strong>Nuances</strong> : Subtiles et infinies</li><li><strong>Élégance</strong> : Raffinement aristocratique</li></ul>`, variant: 'normal'}},
  {id: '5', type: 'text', data: {content: `<h2>Chopin : Nocturne Op. 9 No. 2</h2><p>Le nocturne le plus célèbre.</p><ul><li>Mélodie ornementée et expressive</li><li>Accompagnement en arpèges</li><li>Atmosphère nocturne et rêveuse</li></ul>`, variant: 'tip'}},
  {id: '6', type: 'practice', data: {title: 'Exercice : Nocturne Op. 9 No. 2', description: 'Travaille les ornements', steps: ['Apprends la mélodie sans ornements', 'Ajoute progressivement les fioritures', 'Main gauche : arpèges réguliers comme une harpe', 'Pédale syncopée pour la clarté', 'Laisse respirer la mélodie']}},
  {id: '7', type: 'text', data: {content: `<h2>Liszt : Consolation No. 3</h2><p>Liszt accessible et poétique.</p><ul><li>Mélodie sublime et contemplative</li><li>Accompagnement fluide</li><li>Moins virtuose que ses autres œuvres</li></ul>`, variant: 'highlight'}},
  {id: '8', type: 'practice', data: {title: 'Exercice : Consolation No. 3', description: 'Crée l\'atmosphère', steps: ['Apprends le thème principal', 'Travaille la fluidité de l\'accompagnement', 'Équilibre mélodie et harmonie', 'Pédale pour créer l\'atmosphère', 'Sens la consolation et la paix']}},
  {id: '9', type: 'text', data: {content: `<h2>Style Liszt</h2><ul><li><strong>Virtuosité</strong> : Technique éblouissante</li><li><strong>Orchestral</strong> : Pense orchestre, pas piano</li><li><strong>Dramatique</strong> : Grands gestes, grandes émotions</li><li><strong>Innovation</strong> : Repousse les limites du possible</li></ul>`, variant: 'normal'}},
  {id: '10', type: 'text', data: {content: `<h2>Autres œuvres romantiques</h2><p><strong>Chopin :</strong></p><ul><li>Valse Op. 64 No. 2</li><li>Prélude Op. 28 No. 4 en Mi mineur</li></ul><p><strong>Schumann :</strong></p><ul><li>Rêverie (Kinderszenen)</li><li>Des Abends (Fantasiestücke)</li></ul><p><strong>Brahms :</strong></p><ul><li>Intermezzo Op. 118 No. 2</li></ul>`, variant: 'tip'}},
  {id: '11', type: 'text', data: {content: `<h2>Récapitulatif</h2><ul><li>✅ Préludes de Chopin</li><li>✅ Nocturne Op. 9 No. 2</li><li>✅ Consolation de Liszt</li><li>✅ Style romantique et expression</li><li>✅ Rubato et pédale</li></ul>`, variant: 'highlight'}},
  {
    id: 'piano-exercice',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'À toi de jouer 🎹',
      instructions: "Étire le voicing romantique. Joue Do, Mi, Sol, Si, Ré sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'E', 'G', 'B', 'D']
    }
  }
]

export default function Lecon9Page() {
  return <LessonTemplate levelId={5} lessonNumber={9} title="Répertoire romantique (Chopin, Liszt)" duration={24} objectives={['Interpréter les Préludes de Chopin', 'Jouer un Nocturne', 'Maîtriser le rubato', 'Utiliser la pédale romantique', 'Comprendre le style Liszt']} content={content} previousLesson={{title: 'Répertoire classique', href: '/parcours/niveau-5/lecon-8'}} nextLesson={{title: 'Improvisation et jazz', href: '/parcours/niveau-5/lecon-10'}} />
}
