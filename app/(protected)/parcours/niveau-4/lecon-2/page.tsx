import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>Comprendre les armures</h2>
<p>L'armure (ou armature) est l'ensemble des altérations placées au début de chaque portée. Elle indique la tonalité d'un morceau et vous évite d'avoir à écrire les mêmes dièses ou bémols tout au long de la partition.</p>
<p>Maîtriser les armures vous permettra de lire plus rapidement et de comprendre instantanément dans quelle tonalité vous jouez.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>Le cercle des quintes</h2>
<p>Le cercle des quintes est l'outil fondamental pour comprendre les armures. En se déplaçant dans le sens horaire, on ajoute un dièse à chaque fois. Dans le sens antihoraire, on ajoute un bémol.</p>
<p><strong>Sens horaire (dièses) :</strong></p>
<ul>
<li>Do (0) → Sol (1#) → Ré (2#) → La (3#) → Mi (4#) → Si (5#) → Fa# (6#) → Do# (7#)</li>
</ul>
<p><strong>Sens antihoraire (bémols) :</strong></p>
<ul>
<li>Do (0) → Fa (1♭) → Si♭ (2♭) → Mi♭ (3♭) → La♭ (4♭) → Ré♭ (5♭) → Sol♭ (6♭) → Do♭ (7♭)</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `<h2>L'ordre des dièses</h2>
<p>Les dièses apparaissent toujours dans le même ordre à l'armure :</p>
<p><strong>Fa - Do - Sol - Ré - La - Mi - Si</strong></p>
<p>Mnémotechnique : "Fa Do Goûter Ré La Mi Si bon !"</p>
<ul>
<li>1 dièse : Fa# (Sol majeur)</li>
<li>2 dièses : Fa#, Do# (Ré majeur)</li>
<li>3 dièses : Fa#, Do#, Sol# (La majeur)</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `<h2>L'ordre des bémols</h2>
<p>Les bémols apparaissent dans l'ordre inverse des dièses :</p>
<p><strong>Si - Mi - La - Ré - Sol - Do - Fa</strong></p>
<p>Mnémotechnique : "Si Mi La Ré Gole Do Fa Mine !"</p>
<ul>
<li>1 bémol : Si♭ (Fa majeur)</li>
<li>2 bémols : Si♭, Mi♭ (Si♭ majeur)</li>
<li>3 bémols : Si♭, Mi♭, La♭ (Mi♭ majeur)</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice : Reconnaître les armures',
      steps: [
        'Dessinez le cercle des quintes sur une feuille',
        'Placez Do en haut, puis les tonalités avec dièses à droite',
        'Placez les tonalités avec bémols à gauche',
        'Pratiquez en nommant la tonalité sans regarder : "3 dièses = ?"',
        'Inversez : "Mi♭ majeur = combien de bémols ?"'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `<h2>Astuces pour identifier rapidement</h2>
<p><strong>Pour les dièses :</strong> Le dernier dièse de l'armure est le 7ème degré de la gamme. Montez d'un demi-ton pour trouver la tonique.</p>
<p>Exemple : Si l'armure se termine par Sol#, la tonalité est La majeur.</p>
<p><strong>Pour les bémols :</strong> L'avant-dernier bémol est la tonique (sauf pour Fa majeur qui a un seul bémol).</p>
<p>Exemple : Si l'armure contient Si♭, Mi♭, La♭, l'avant-dernier est Mi♭, donc la tonalité est Mi♭ majeur.</p>`,
      variant: 'tip'
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `<h2>Tonalités relatives majeures et mineures</h2>
<p>Chaque tonalité majeure a une <strong>relative mineure</strong> qui partage la même armure. La relative mineure se trouve une tierce mineure (3 demi-tons) en dessous de la majeure.</p>
<p><strong>Exemples :</strong></p>
<ul>
<li>Do majeur ↔ La mineur (0 altération)</li>
<li>Sol majeur ↔ Mi mineur (1 dièse)</li>
<li>Fa majeur ↔ Ré mineur (1 bémol)</li>
<li>Ré majeur ↔ Si mineur (2 dièses)</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Trouver les relatives',
      steps: [
        'Prenez une tonalité majeure (ex: Mi♭ majeur)',
        'Comptez 3 demi-tons vers le bas (Mi♭ → Ré → Do → Do)',
        'La relative mineure est Do mineur',
        'Vérifiez : les deux ont 3 bémols',
        'Répétez avec toutes les tonalités du cercle des quintes'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `<h2>Introduction à la transposition</h2>
<p>La transposition consiste à jouer une mélodie dans une autre tonalité. C'est une compétence précieuse pour accompagner des chanteurs ou adapter des morceaux à votre registre.</p>
<p><strong>Méthode par intervalles :</strong></p>
<ul>
<li>Identifiez l'intervalle de transposition (ex: de Do à Ré = seconde majeure)</li>
<li>Transportez chaque note du même intervalle</li>
<li>Ajustez les altérations selon la nouvelle armure</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `<h2>Transposition pratique</h2>
<p>Exemple : Transposer "Au clair de la lune" de Do majeur à Sol majeur.</p>
<p><strong>En Do majeur :</strong> Do-Do-Do-Ré-Mi-Ré / Do-Mi-Ré-Ré-Do</p>
<p><strong>En Sol majeur :</strong> Sol-Sol-Sol-La-Si-La / Sol-Si-La-La-Sol</p>
<p>Chaque note monte d'une quinte juste (Do→Sol, Ré→La, Mi→Si).</p>`,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice de transposition',
      steps: [
        'Choisissez une mélodie simple que vous connaissez',
        'Jouez-la dans sa tonalité originale',
        'Transposez-la une quinte au-dessus (utilisez le cercle des quintes)',
        'Ajustez les altérations selon la nouvelle armure',
        'Répétez dans plusieurs tonalités'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `<h2>Application pratique</h2>
<p>Lorsque vous commencez une nouvelle partition :</p>
<ul>
<li><strong>Étape 1 :</strong> Regardez l'armure et identifiez la tonalité</li>
<li><strong>Étape 2 :</strong> Déterminez si c'est majeur ou mineur (vérifiez les altérations accidentelles)</li>
<li><strong>Étape 3 :</strong> Anticipez mentalement les notes altérées</li>
<li><strong>Étape 4 :</strong> Jouez la gamme correspondante pour vous familiariser</li>
</ul>`,
      variant: 'tip'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Maîtrise des armures</h2>
<p>La connaissance des armures transformera votre lecture. Vous ne lirez plus note par note, mais par groupes et motifs dans la tonalité.</p>
<p>Avec le cercle des quintes bien intégré, vous comprendrez les modulations (changements de tonalité) et pourrez anticiper la structure harmonique des œuvres.</p>
<p>Pratiquez quotidiennement : nommez les armures que vous rencontrez dans vos partitions !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon2Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={2}
      title="Les armures et tonalités"
      duration={16}
      objectives={[
        'Maîtriser le cercle des quintes',
        'Identifier instantanément les armures',
        'Comprendre les tonalités relatives',
        'Appliquer les bases de la transposition'
      ]}
      content={content}
      previousLesson={{ title: 'Les gammes majeures et mineures', href: '/parcours/niveau-4/lecon-1' }}
      nextLesson={{ title: 'Les accords de 7ème avancés', href: '/parcours/niveau-4/lecon-3' }}
    />
  )
}
