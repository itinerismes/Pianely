import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {id: '1', type: 'text', data: {content: `<h2>Répertoire classique : Mozart & Beethoven 🎹</h2><p>L\'ère classique représente clarté, équilibre et forme parfaite. Mozart et Beethoven en sont les maîtres absolus.</p>`, variant: 'normal'}},
  {id: '2', type: 'text', data: {content: `<h2>Mozart : Sonate K.545 en Do majeur</h2><p>La sonate "facile" de Mozart est un chef-d\'œuvre de clarté.</p><ul><li>Premier mouvement : Allegro léger et transparent</li><li>Deuxième mouvement : Andante expressif</li><li>Troisième mouvement : Rondo joyeux</li></ul>`, variant: 'highlight'}},
  {id: '3', type: 'practice', data: {title: 'Exercice : K.545 Premier mouvement', description: 'Travaille la clarté mozartienne', steps: ['Apprends le thème principal (8 premières mesures)', 'Focus sur l\'articulation légère', 'Pédale minimale ou absente', 'Chaque note doit être comme une perle', 'Tempo allegro mais contrôlé']}},
  {id: '4', type: 'text', data: {content: `<h2>Style d\'interprétation Mozart</h2><ul><li><strong>Clarté</strong> : Chaque note doit être distincte</li><li><strong>Légèreté</strong> : Pas de lourdeur romantique</li><li><strong>Équilibre</strong> : Mélodie et accompagnement bien dosés</li><li><strong>Élégance</strong> : Grâce et naturel</li><li><strong>Tempo</strong> : Ni trop lent ni trop rapide</li></ul>`, variant: 'normal'}},
  {id: '5', type: 'text', data: {content: `<h2>Beethoven : Für Elise</h2><p>Une des pièces les plus célèbres au monde.</p><ul><li>Thème principal mélancolique</li><li>Sections contrastées en majeur</li><li>Difficulté technique modérée</li><li>Grande profondeur expressive</li></ul>`, variant: 'highlight'}},
  {id: '6', type: 'practice', data: {title: 'Exercice : Für Elise', description: 'Maîtrise les contrastes', steps: ['Apprends le thème A (Mi-Ré#-Mi-Ré#-Mi-Si-Ré-Do-La)', 'Travaille les transitions entre sections', 'Section centrale plus lumineuse', 'Retour au thème principal', 'Focus sur l\'expression émotionnelle']}},
  {id: '7', type: 'text', data: {content: `<h2>Beethoven : Sonate "Pathétique"</h2><p>Premier mouvement accessible pour niveau avancé.</p><ul><li>Introduction grave dramatique</li><li>Allegro passionné</li><li>Contraste entre douceur et puissance</li></ul>`, variant: 'normal'}},
  {id: '8', type: 'text', data: {content: `<h2>Style Beethoven</h2><ul><li><strong>Contraste</strong> : Dynamiques extrêmes</li><li><strong>Passion</strong> : Engagement émotionnel</li><li><strong>Architecture</strong> : Structure solide</li><li><strong>Innovation</strong> : Repousse les limites</li></ul>`, variant: 'tip'}},
  {id: '9', type: 'practice', data: {title: 'Exercice : Contrastes beethovéniens', description: 'Explore la dynamique', steps: ['Choisis un passage de Beethoven', 'Exagère les nuances : pp très doux, ff très fort', 'Travaille les crescendos dramatiques', 'Sens l\'énergie et la tension', 'Laisse parler l\'émotion']}},
  {id: '10', type: 'text', data: {content: `<h2>Autres œuvres recommandées</h2><p><strong>Mozart :</strong></p><ul><li>Rondo alla Turca (Sonate K.331)</li><li>Fantaisie en Ré mineur K.397</li></ul><p><strong>Beethoven :</strong></p><ul><li>Bagatelles Op. 119</li><li>Sonate "Clair de lune" (1er mouvement)</li></ul>`, variant: 'normal'}},
  {id: '11', type: 'text', data: {content: `<h2>Récapitulatif</h2><ul><li>✅ Sonate K.545 de Mozart</li><li>✅ Für Elise de Beethoven</li><li>✅ Style classique vs romantique</li><li>✅ Clarté mozartienne</li><li>✅ Passion beethovénienne</li></ul>`, variant: 'highlight'}},
  {
    id: 'piano-exercice',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'À toi de jouer 🎹',
      instructions: "Joue la gamme, style classique. Joue Do, Ré, Mi, Fa, Sol, La, Si sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    }
  }
]

export default function Lecon8Page() {
  return <LessonTemplate levelId={5} lessonNumber={8} title="Répertoire classique (Mozart, Beethoven)" duration={23} objectives={['Interpréter Mozart K.545', 'Jouer Für Elise', 'Comprendre le style classique', 'Maîtriser les contrastes beethovéniens', 'Différencier Mozart et Beethoven']} content={content} previousLesson={{title: 'Répertoire baroque', href: '/parcours/niveau-5/lecon-7'}} nextLesson={{title: 'Répertoire romantique', href: '/parcours/niveau-5/lecon-9'}} />
}
