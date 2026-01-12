import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>Explorer le répertoire classique intermédiaire</h2>
<p>Vous avez maintenant les outils techniques et musicaux pour aborder des œuvres du répertoire classique standard. Dans cette leçon, nous explorerons trois pièces iconiques adaptées au niveau intermédiaire.</p>
<p>Ces pièces sont non seulement magnifiques, mais elles développeront également des compétences spécifiques essentielles pour votre progression.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>Mozart - Extraits de Sonate K.545</h2>
<p>La Sonate en Do majeur K.545 de Mozart est surnommée "Sonata facile" (sonate facile). C'est le point d'entrée idéal dans les sonates classiques.</p>
<p><strong>Caractéristiques :</strong></p>
<ul>
<li>Clarté du style classique - élégance et équilibre</li>
<li>Main droite : mélodie avec ornements</li>
<li>Main gauche : basse d'Alberti typique</li>
<li>Structure claire en phrases de 4 mesures</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `<h2>Approche technique pour Mozart</h2>
<p><strong>Travail de la main gauche :</strong></p>
<ul>
<li>La basse d'Alberti doit être légère et régulière</li>
<li>Ne pas accentuer - créer un tapis sonore</li>
<li>Dynamique piano à mezzo-piano</li>
</ul>
<p><strong>Main droite :</strong></p>
<ul>
<li>Mélodie chantante et claire</li>
<li>Orner avec goût (trilles, mordants)</li>
<li>Phrasé naturel, comme une question-réponse</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Style Mozart',
      steps: [
        'Isolez la main gauche - travaillez la régularité de la basse d\'Alberti',
        'Ajoutez la pédale avec parcimonie (changements d\'harmonie)',
        'Main droite seule - exagérez le phrasé',
        'Réunissez : main droite forte, main gauche douce',
        'Enregistrez-vous et écoutez l\'équilibre'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `<h2>Beethoven - Für Elise</h2>
<p>"Für Elise" (Pour Élise) est probablement la pièce de piano la plus célèbre au monde. C'est un chef-d'œuvre accessible qui enseigne de nombreuses compétences.</p>
<p><strong>Compétences développées :</strong></p>
<ul>
<li>Mélodie expressive dans le registre aigu</li>
<li>Ostinato rythmique (Mi-Ré#-Mi-Ré#-Mi...)</li>
<li>Coordination entre mélodie et accompagnement</li>
<li>Contraste entre sections (A-B-A-C-A)</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `<h2>Défis techniques de Für Elise</h2>
<p><strong>Le thème principal :</strong></p>
<ul>
<li>Mi-Ré#-Mi-Ré#-Mi-Si-Ré-Do-La</li>
<li>Doit sonner comme une boîte à musique - léger et délicat</li>
<li>Doigté critique : 5-4-5-4-5-2-4-3-1 (main droite)</li>
</ul>
<p><strong>Section intermédiaire (B) :</strong></p>
<ul>
<li>Mélodie plus lyrique avec accompagnement en arpèges</li>
<li>Contraste de caractère - plus chaleureux</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Für Elise',
      steps: [
        'Mémorisez le thème Mi-Ré#-Mi-Ré#-Mi-Si-Ré-Do-La',
        'Travaillez-le très lentement, doigts légers',
        'Ajoutez la main gauche : accords simples sur les temps',
        'Section B : isolez la mélodie, puis les arpèges',
        'Travaillez les transitions entre sections'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `<h2>Chopin - Prélude Op. 28 No. 7</h2>
<p>Ce prélude court (16 mesures) est une miniature parfaite et une introduction idéale à Chopin.</p>
<p><strong>Caractéristiques :</strong></p>
<ul>
<li>Tonalité : La majeur - sonorité lumineuse</li>
<li>Tempo : Andantino - doux et balancé</li>
<li>Texture : mélodie simple sur accompagnement d'accords</li>
<li>Atmosphère : nostalgique, rêveur, intime</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `<h2>Style romantique de Chopin</h2>
<p>Ce prélude enseigne l'essence du style romantique :</p>
<ul>
<li><strong>Cantabile :</strong> La mélodie doit "chanter"</li>
<li><strong>Rubato subtil :</strong> Respiration naturelle des phrases</li>
<li><strong>Pédale généreuse :</strong> Créer une atmosphère enveloppante</li>
<li><strong>Dynamiques nuancées :</strong> Du pp au mf, jamais harsh</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice : Prélude de Chopin',
      steps: [
        'Chantez la mélodie avant de la jouer - intériorisez le phrasé',
        'Main gauche seule : accords legato, pas d\'accent',
        'Ajoutez la pédale : changement à chaque nouvel accord',
        'Réunissez : mélodie expressive, accompagnement discret',
        'Expérimentez avec le rubato - ralentir aux fins de phrases'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `<h2>Apprendre des enregistrements</h2>
<p>Écouter différentes interprétations est crucial pour développer votre compréhension musicale.</p>
<p><strong>Comment écouter activement :</strong></p>
<ul>
<li>Écoutez 3-5 interprétations différentes de la même pièce</li>
<li>Notez les différences de tempo, phrasé, dynamiques</li>
<li>Qu'est-ce qui vous touche dans chaque version ?</li>
<li>Quels choix artistiques pouvez-vous adopter ?</li>
</ul>`,
      variant: 'tip'
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `<h2>Pianistes recommandés</h2>
<p><strong>Pour Mozart :</strong></p>
<ul>
<li>Mitsuko Uchida - clarté et élégance</li>
<li>András Schiff - profondeur historique</li>
</ul>
<p><strong>Pour Beethoven :</strong></p>
<ul>
<li>Daniel Barenboim - puissance et émotion</li>
<li>Alfred Brendel - intelligence structurelle</li>
</ul>
<p><strong>Pour Chopin :</strong></p>
<ul>
<li>Arthur Rubinstein - poésie et sensibilité</li>
<li>Maurizio Pollini - précision et passion</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Votre parcours dans le répertoire</h2>
<p>Ces trois pièces sont des portes d'entrée vers des univers musicaux riches :</p>
<ul>
<li><strong>Mozart K.545</strong> → Autres sonates Mozart, Haydn, Clementi</li>
<li><strong>Für Elise</strong> → Bagatelles de Beethoven, Écossaises de Schubert</li>
<li><strong>Prélude Op. 28 No. 7</strong> → Autres Préludes de Chopin, Mazurkas</li>
</ul>
<p>Prenez le temps d'approfondir chaque pièce. Une œuvre bien apprise et comprise est plus précieuse qu'une douzaine survolées. Dans la prochaine leçon, nous préparerons votre premier projet de récital !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon9Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={9}
      title="Répertoire classique intermédiaire"
      duration={20}
      objectives={[
        'Aborder une sonate de Mozart avec style classique',
        'Maîtriser Für Elise de Beethoven',
        'Interpréter un prélude de Chopin avec sensibilité',
        'Apprendre à écouter et analyser des enregistrements',
        'Développer votre compréhension stylistique'
      ]}
      content={content}
      previousLesson={{ title: 'Lecture à vue niveau 2', href: '/parcours/niveau-4/lecon-8' }}
      nextLesson={{ title: 'Projet de récital', href: '/parcours/niveau-4/lecon-10' }}
    />
  )
}
