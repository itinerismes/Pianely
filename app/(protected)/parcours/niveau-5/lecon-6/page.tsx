import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {id: '1', type: 'text', data: {content: `<h2>Les pédales avancées 🎚️</h2><p>Au-delà de la pédale de sustain classique, le piano offre d'autres pédales et techniques avancées pour enrichir ton jeu.</p>`, variant: 'normal'}},
  {id: '2', type: 'text', data: {content: `<h2>La pédale de sustain avancée</h2><ul><li><strong>Demi-pédale</strong> : Relâche partielle pour contrôler la résonance</li><li><strong>Pédale vibrato</strong> : Mouvement rapide pour créer un vibrato</li><li><strong>Pédale syncopée</strong> : Change la pédale après avoir joué la note</li></ul>`, variant: 'highlight'}},
  {id: '3', type: 'practice', data: {title: 'Exercice : Pédale syncopée', description: 'La technique fondamentale', steps: ['Joue Do majeur main gauche', 'Garde la pédale enfoncée', 'Joue Mi majeur', 'AU MOMENT où tu joues Mi, relâche et réenfonce la pédale', 'Le son est propre, sans mélange', 'Pratique sur une progression d\'accords']}},
  {id: '4', type: 'text', data: {content: `<h2>La pédale una corda (pédale douce)</h2><p>La <strong>pédale de gauche</strong> déplace légèrement les marteaux, changeant la couleur du son.</p><ul><li>Ne réduit pas seulement le volume</li><li>Change le timbre, le rend plus doux et intime</li><li>Utilisée pour les passages pianissimo</li></ul>`, variant: 'normal'}},
  {id: '5', type: 'practice', data: {title: 'Exercice : Una corda', description: 'Explore la couleur sonore', steps: ['Joue une mélodie simple sans pédale gauche', 'Rejoue la même mélodie avec una corda', 'Écoute la différence de timbre', 'Combine avec pédale de sustain', 'Utilise pour créer des contrastes']}},
  {id: '6', type: 'text', data: {content: `<h2>La pédale sostenuto (pédale du milieu)</h2><p>La <strong>pédale sostenuto</strong> maintient seulement les notes déjà enfoncées.</p><ul><li>Joue une note basse, enfonce sostenuto</li><li>Cette note reste, les autres notes peuvent être jouées staccato</li><li>Utilisée pour des effets spéciaux</li></ul>`, variant: 'tip'}},
  {id: '7', type: 'practice', data: {title: 'Exercice : Sostenuto', description: 'Maîtrise la pédale centrale', steps: ['Joue un Do grave avec pédale sostenuto', 'Cette basse résonne pendant que tu joues', 'Joue une mélodie staccato en aigu', 'La basse continue, la mélodie reste sèche', 'Effet d\'orgue ou de bourdon']}},
  {id: '8', type: 'text', data: {content: `<h2>Techniques avancées de pédale</h2><ul><li><strong>Flutter pedal</strong> : Mouvements rapides pour créer des effets</li><li><strong>Half-damping</strong> : Contrôle précis de la résonance</li><li><strong>Pédale préparée</strong> : Enfonce avant de jouer pour la résonance sympathique</li></ul>`, variant: 'normal'}},
  {id: '9', type: 'practice', data: {title: 'Exercice : Pédale préparée', description: 'Résonance sympathique', steps: ['Enfonce la pédale de sustain AVANT de jouer', 'Joue un Do grave forte', 'Relâche immédiatement les touches', 'Le piano résonne par sympathie', 'Technique utilisée dans la musique contemporaine']}},
  {id: '10', type: 'text', data: {content: `<h2>Notation de la pédale</h2><p>Sur les partitions :</p><ul><li><strong>Ped.</strong> ou <strong>*</strong> : Indique quand pédaler</li><li><strong>∧</strong> : Relâcher la pédale</li><li><strong>Ligne continue</strong> : Maintenir la pédale</li><li>Parfois des indications verbales en italien</li></ul>`, variant: 'highlight'}},
  {id: '11', type: 'text', data: {content: `<h2>Application musicale</h2><p>Le choix de pédale dépend de :</p><ul><li>Le style (romantique = beaucoup, baroque = peu)</li><li>L\'acoustique de la salle</li><li>Le caractère de la pièce</li><li>Ton goût personnel</li></ul><p>Écoute de grands pianistes pour comprendre leur usage de la pédale !</p>`, variant: 'tip'}},
  {id: '12', type: 'text', data: {content: `<h2>Récapitulatif</h2><ul><li>✅ Pédale syncopée et demi-pédale</li><li>✅ Una corda pour les nuances</li><li>✅ Sostenuto pour effets spéciaux</li><li>✅ Techniques avancées</li><li>✅ Notation et interprétation</li></ul>`, variant: 'highlight'}},
  {
    id: 'piano-exercice',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'À toi de jouer 🎹',
      instructions: "Colore l'accord de Do avec la pédale. Joue Do, Mi, Sol sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'E', 'G']
    }
  }
]

export default function Lecon6Page() {
  return <LessonTemplate levelId={5} lessonNumber={6} title="Pédales avancées" duration={19} objectives={['Maîtriser la pédale syncopée', 'Utiliser l\'una corda pour la couleur', 'Exploiter la pédale sostenuto', 'Appliquer des techniques avancées', 'Interpréter la notation de pédale']} content={content} previousLesson={{title: 'Technique véloce', href: '/parcours/niveau-5/lecon-5'}} nextLesson={{title: 'Répertoire baroque', href: '/parcours/niveau-5/lecon-7'}} />
}
