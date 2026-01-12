import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>Les arpèges : fondation de l'accompagnement</h2>
<p>Les arpèges (accords "brisés" joués note par note) sont omniprésents dans la musique pour piano. Ils créent du mouvement, de la texture, et permettent de maintenir des harmonies tout en gardant une ligne fluide.</p>
<p>Dans cette leçon, nous allons explorer les patterns d'arpèges avancés qui enrichiront considérablement votre jeu.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>L'arpège simple sur deux octaves</h2>
<p>Commençons par la base : l'arpège ascendant et descendant sur deux octaves.</p>
<p><strong>Accord de Do majeur (C-E-G-C) :</strong></p>
<ul>
<li>Main droite : 1-2-3-1 / 2-3-5 (montée)</li>
<li>Do-Mi-Sol-Do / Mi-Sol-Do</li>
<li>Descente : 5-3-2-1 / 3-2-1</li>
</ul>
<p>Le passage du pouce doit être fluide et silencieux.</p>`,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Arpèges de base',
      steps: [
        'Jouez l\'arpège de Do majeur sur 2 octaves, lentement (♩= 60)',
        'Concentrez-vous sur l\'égalité des notes',
        'Ajoutez Fa majeur (F-A-C-F) avec le même doigté',
        'Puis Sol majeur (G-B-D-G)',
        'Pratiquez la transition fluide entre les arpèges : C-F-G-C'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `<h2>La basse d'Alberti : pattern classique</h2>
<p>La basse d'Alberti est un pattern d'arpège brisé très utilisé dans la musique classique (Mozart, Haydn, Clementi).</p>
<p><strong>Pattern pour Do majeur (C-E-G) :</strong></p>
<ul>
<li>Do (grave) - Sol - Mi - Sol</li>
<li>Ordre : Fondamentale - Quinte - Tierce - Quinte</li>
<li>Crée un accompagnement fluide et continu</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `<h2>Applications de la basse d'Alberti</h2>
<p>Ce pattern est parfait pour accompagner une mélodie à la main droite.</p>
<p><strong>Exemple :</strong></p>
<ul>
<li>Main gauche : Do-Sol-Mi-Sol (répété en boucle)</li>
<li>Main droite : mélodie simple (ex: Do-Ré-Mi-Fa-Sol)</li>
<li>La basse crée un tapis sonore sur lequel la mélodie peut "flotter"</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Basse d\'Alberti',
      steps: [
        'Main gauche seule : Do-Sol-Mi-Sol en boucle, régulièrement',
        'Ajoutez la main droite : tenez juste un Do aigu',
        'Main droite : jouez une gamme de Do pendant que la gauche continue',
        'Changez d\'accord : passez à F (Fa-Do-La-Do)',
        'Créez une progression : C - F - G - C avec ce pattern'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `<h2>Arpèges étendus sur toute la tessiture</h2>
<p>Les arpèges étendus couvrent plusieurs octaves et créent des effets spectaculaires, particulièrement dans la musique romantique.</p>
<p><strong>Technique :</strong></p>
<ul>
<li>Mouvement fluide du bras et de l'épaule</li>
<li>Anticipation visuelle des positions</li>
<li>Passages de pouce réguliers et préparés</li>
<li>Crescendo/diminuendo naturels en montant/descendant</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `<h2>Patterns d'arpèges variés</h2>
<p>Explorons différents patterns rythmiques sur les arpèges :</p>
<ul>
<li><strong>Triolets :</strong> C-E-G | C-E-G | C-E-G (feeling fluide)</li>
<li><strong>Sextolets :</strong> C-E-G-C-E-G (mouvement rapide)</li>
<li><strong>Pattern 1-2-3-5 :</strong> C-E-G-C avec accent sur la dernière note</li>
<li><strong>Pattern ondulant :</strong> Montée-descente en boucle</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Variations rythmiques',
      steps: [
        'Arpège de C majeur en noires : C-E-G-C',
        'Même arpège en croches : plus rapide, même pattern',
        'En triolets : 3 notes par temps (C-E-G | C-E-G)',
        'En sextolets : 6 notes par temps (très fluide)',
        'Alternez les patterns pour développer flexibilité'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `<h2>Arpèges à deux mains</h2>
<p>Les arpèges peuvent être partagés entre les deux mains pour créer des textures plus riches.</p>
<p><strong>Pattern de Chopin (type Nocturne) :</strong></p>
<ul>
<li>Main gauche : Do grave</li>
<li>Main droite : Mi-Sol-Do-Mi-Sol-Do-Mi-Sol (arpège continu)</li>
<li>La main gauche marque les basses, la droite crée l'atmosphère</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `<h2>Coordination main gauche-main droite</h2>
<p><strong>Pattern croisé :</strong></p>
<ul>
<li>Main gauche : Do-Mi (notes graves)</li>
<li>Main droite : Sol-Do-Mi-Sol (continuation dans le registre aigu)</li>
<li>Les mains se complètent pour créer un arpège continu</li>
</ul>
<p>Cette technique permet de jouer des arpèges très étendus avec fluidité.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Exercice : Arpèges à deux mains',
      steps: [
        'MG : jouez Do grave, tenez',
        'MD : jouez l\'arpège Mi-Sol-Do-Mi-Sol-Do en boucle',
        'Synchronisez : MG sur chaque début de mesure',
        'Ajoutez la pédale pour lier les notes',
        'Créez un accompagnement de style romantique'
      ]
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Application au répertoire</h2>
<p>Les arpèges sont partout dans le répertoire pianistique :</p>
<ul>
<li><strong>Mozart :</strong> Basse d'Alberti dans les sonates</li>
<li><strong>Chopin :</strong> Arpèges étendus dans les Nocturnes, Préludes</li>
<li><strong>Debussy :</strong> Arpèges impressionnistes créant des atmosphères</li>
<li><strong>Jazz :</strong> Arpèges rapides pour l'accompagnement</li>
</ul>
<p>Maîtriser les arpèges vous ouvre les portes d'un immense répertoire. Pratiquez-les quotidiennement dans toutes les tonalités pour développer une technique solide et fluide !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon7Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={7}
      title="Les arpèges étendus"
      duration={16}
      objectives={[
        'Maîtriser les arpèges sur deux octaves',
        'Jouer la basse d\'Alberti avec fluidité',
        'Développer les arpèges étendus',
        'Coordonner les arpèges à deux mains',
        'Appliquer les patterns d\'arpèges au répertoire'
      ]}
      content={content}
      previousLesson={{ title: 'Techniques d\'interprétation', href: '/parcours/niveau-4/lecon-6' }}
      nextLesson={{ title: 'Lecture à vue niveau 2', href: '/parcours/niveau-4/lecon-8' }}
    />
  )
}
