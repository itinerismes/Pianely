import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {id: '1', type: 'text', data: {content: `<h2>Répertoire baroque : Jean-Sébastien Bach 🎼</h2><p>Bach est considéré comme le plus grand compositeur de musique pour clavier. Son œuvre est la Bible du pianiste.</p>`, variant: 'normal'}},
  {id: '2', type: 'text', data: {content: `<h2>Le Prélude en Do majeur BWV 846</h2><p>Cette pièce du Clavier bien tempéré est parfaite pour commencer Bach.</p><ul><li>Arpèges continus de la main droite</li><li>Harmonie qui module constamment</li><li>Méditatif et contemplatif</li></ul>`, variant: 'highlight'}},
  {id: '3', type: 'practice', data: {title: 'Exercice : Prélude BWV 846', description: 'Travaille par sections', steps: ['Apprends les 8 premières mesures', 'Main droite seule : arpèges fluides', 'Main gauche seule : basse soutenue', 'Combine les mains lentement', 'Focus sur la régularité du rythme']}},
  {id: '4', type: 'text', data: {content: `<h2>Les Inventions à deux voix</h2><p>15 pièces courtes enseignant le contrepoint.</p><ul><li>Invention No. 1 en Do majeur : la plus connue</li><li>Deux voix d\'égale importance</li><li>Excellent pour l\'indépendance des mains</li></ul>`, variant: 'normal'}},
  {id: '5', type: 'practice', data: {title: 'Exercice : Invention No. 1', description: 'Maîtrise les deux voix', steps: ['Apprends le sujet (motif principal)', 'Identifie chaque entrée du sujet', 'Main droite puis main gauche séparément', 'Accentue une voix, puis l\'autre', 'Cherche l\'équilibre entre les deux voix']}},
  {id: '6', type: 'text', data: {content: `<h2>Les Suites françaises</h2><p>Six suites de danses baroques.</p><ul><li>Allemande, Courante, Sarabande, Gigue</li><li>Chaque danse a son caractère propre</li><li>Suite No. 5 en Sol majeur recommandée</li></ul>`, variant: 'tip'}},
  {id: '7', type: 'text', data: {content: `<h2>Style d\'interprétation baroque</h2><ul><li><strong>Articulation</strong> : Plus détachée que le romantique</li><li><strong>Ornements</strong> : Essentiels, suivre les conventions</li><li><strong>Tempo</strong> : Régulier, stable</li><li><strong>Dynamics</strong> : Terrasses (changements brusques, pas crescendo graduel)</li><li><strong>Pédale</strong> : Très peu ou pas du tout</li></ul>`, variant: 'highlight'}},
  {id: '8', type: 'practice', data: {title: 'Exercice : Style baroque', description: 'Applique les conventions', steps: ['Choisis un passage baroque', 'Joue sans pédale', 'Articule clairement chaque note', 'Ajoute les ornements appropriés', 'Utilise des contrastes de nuances (terrasses)', 'Enregistre et compare avec Glenn Gould']}},
  {id: '9', type: 'text', data: {content: `<h2>Autres compositeurs baroques</h2><ul><li><strong>Scarlatti</strong> : Sonates brillantes</li><li><strong>Haendel</strong> : Suites majestueuses</li><li><strong>Couperin</strong> : Pièces françaises élégantes</li><li><strong>Rameau</strong> : Caractère et virtuosité</li></ul>`, variant: 'normal'}},
  {id: '10', type: 'text', data: {content: `<h2>Programme d\'étude Bach</h2><p>Progression recommandée :</p><ul><li>Année 1 : Préludes du Clavier bien tempéré</li><li>Année 2 : Inventions à deux voix</li><li>Année 3 : Sinfonias à trois voix</li><li>Année 4+ : Suites françaises, anglaises, Partitas</li></ul>`, variant: 'tip'}},
  {id: '11', type: 'text', data: {content: `<h2>Récapitulatif</h2><ul><li>✅ Prélude en Do majeur BWV 846</li><li>✅ Inventions à deux voix</li><li>✅ Style d\'interprétation baroque</li><li>✅ Programme d\'étude progressif</li></ul>`, variant: 'highlight'}},
  {
    id: 'piano-exercice',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'À toi de jouer 🎹',
      instructions: "Joue le motif façon Bach. Joue Do, Ré, Mi, Fa, Sol, La, Si sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    }
  }
]

export default function Lecon7Page() {
  return <LessonTemplate levelId={5} lessonNumber={7} title="Répertoire baroque (Bach)" duration={22} objectives={['Interpréter le Prélude BWV 846', 'Jouer une Invention à deux voix', 'Comprendre le style baroque', 'Appliquer les ornements', 'Établir un programme d\'étude Bach']} content={content} previousLesson={{title: 'Pédales avancées', href: '/parcours/niveau-5/lecon-6'}} nextLesson={{title: 'Répertoire classique', href: '/parcours/niveau-5/lecon-8'}} />
}
