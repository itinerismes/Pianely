import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>Au-delà des accords de base</h2>
<p>Vous connaissez déjà les accords à trois sons (triade). Les accords de septième ajoutent une quatrième note qui enrichit considérablement la sonorité et la couleur harmonique.</p>
<p>Ces accords sont essentiels dans le jazz, le blues, la musique classique romantique et moderne. Ils créent des tensions et des résolutions qui donnent vie à la musique.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>L'accord de septième de dominante</h2>
<p>C'est l'accord de 7ème le plus important. Il se construit sur le 5ème degré (dominante) et crée une forte tension qui demande résolution vers la tonique.</p>
<p><strong>Structure :</strong> Fondamentale - Tierce majeure - Quinte juste - Septième mineure</p>
<p><strong>Exemple en Do (G7) :</strong></p>
<ul>
<li>Sol (fondamentale) - Si (tierce majeure) - Ré (quinte) - Fa (septième mineure)</li>
<li>Notation : G7 ou Sol7</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `<h2>Résolution de la dominante</h2>
<p>L'accord de dominante 7ème contient un <strong>triton</strong> (intervalle de quarte augmentée) entre la tierce et la septième, créant une tension qui "veut" se résoudre.</p>
<p>Dans G7 → C :</p>
<ul>
<li>Si (sensible) monte vers Do</li>
<li>Fa (septième) descend vers Mi</li>
<li>Cette double attraction crée une résolution puissante</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Dominante et résolution',
      steps: [
        'Jouez G7 (Sol-Si-Ré-Fa) main gauche, tenez l\'accord',
        'Résolvez vers C majeur (Do-Mi-Sol)',
        'Écoutez la tension puis la résolution',
        'Pratiquez D7 → G, A7 → D, E7 → A',
        'Jouez une progression : C - G7 - C'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `<h2>L'accord de septième majeure (maj7)</h2>
<p>Accord plus doux et sophistiqué, utilisé dans le jazz et la bossa nova.</p>
<p><strong>Structure :</strong> Fondamentale - Tierce majeure - Quinte juste - Septième majeure</p>
<p><strong>Exemple Cmaj7 :</strong></p>
<ul>
<li>Do - Mi - Sol - Si</li>
<li>Sonorité douce, rêveuse, pas de tension</li>
<li>Notation : Cmaj7, CΔ7, ou CM7</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `<h2>L'accord de septième mineure (m7)</h2>
<p>Accord mélancolique et introspectif, très utilisé dans les ballades et le jazz modal.</p>
<p><strong>Structure :</strong> Fondamentale - Tierce mineure - Quinte juste - Septième mineure</p>
<p><strong>Exemple Dm7 :</strong></p>
<ul>
<li>Ré - Fa - La - Do</li>
<li>Sonorité douce-amère, contemplative</li>
<li>Notation : Dm7 ou Rém7</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Comparer les couleurs',
      steps: [
        'Jouez Cmaj7 - écoutez la sonorité lumineuse',
        'Jouez C7 - remarquez la tension',
        'Jouez Cm7 - ressentez la mélancolie',
        'Jouez les trois à la suite pour comparer',
        'Répétez dans d\'autres tonalités'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `<h2>L'accord demi-diminué (m7♭5)</h2>
<p>Aussi appelé "accord de septième mineure quinte bémol", il a une sonorité instable et mystérieuse.</p>
<p><strong>Structure :</strong> Fondamentale - Tierce mineure - Quinte diminuée - Septième mineure</p>
<p><strong>Exemple Bm7♭5 :</strong></p>
<ul>
<li>Si - Ré - Fa - La</li>
<li>Utilisé souvent comme IIm7♭5 dans les progressions mineures</li>
<li>Notation : Bm7♭5, Bø7, ou B half-dim</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `<h2>L'accord diminué 7ème (dim7)</h2>
<p>Accord très tendu, composé uniquement de tierces mineures superposées.</p>
<p><strong>Structure :</strong> Fondamentale - Tierce mineure - Quinte diminuée - Septième diminuée</p>
<p><strong>Exemple Bdim7 :</strong></p>
<ul>
<li>Si - Ré - Fa - La♭</li>
<li>Sonorité dramatique, souvent utilisé comme accord de passage</li>
<li>Propriété unique : symétrique (toutes les notes sont espacées de 3 demi-tons)</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `<h2>Progressions harmoniques classiques</h2>
<p>Les accords de 7ème s'insèrent naturellement dans des progressions standards :</p>
<p><strong>Progression II-V-I en Do majeur :</strong></p>
<ul>
<li>Dm7 - G7 - Cmaj7</li>
<li>La progression la plus importante du jazz</li>
</ul>
<p><strong>Progression II-V-I en Do mineur :</strong></p>
<ul>
<li>Dm7♭5 - G7 - Cm7</li>
<li>Sonorité plus sombre et dramatique</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice : Progression II-V-I',
      steps: [
        'En Do majeur : jouez Dm7 (4 temps) - G7 (4 temps) - Cmaj7 (4 temps)',
        'Main gauche : fondamentales, main droite : les 3 autres notes',
        'Travaillez la fluidité entre les accords',
        'Transposez en Sol majeur : Em7 - A7 - Gmaj7',
        'Transposez en Fa majeur : Gm7 - C7 - Fmaj7'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `<h2>Renversements des accords de 7ème</h2>
<p>Comme les triades, les accords de 7ème ont des renversements :</p>
<ul>
<li><strong>Position fondamentale :</strong> 1-3-5-7 (ex: C-E-G-B)</li>
<li><strong>1er renversement :</strong> 3-5-7-1 (ex: E-G-B-C)</li>
<li><strong>2ème renversement :</strong> 5-7-1-3 (ex: G-B-C-E)</li>
<li><strong>3ème renversement :</strong> 7-1-3-5 (ex: B-C-E-G)</li>
</ul>
<p>Les renversements permettent de conduire les voix plus smoothement.</p>`,
      variant: 'tip'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Application musicale</h2>
<p>Les accords de 7ème enrichissent énormément votre palette harmonique. Utilisez-les pour :</p>
<ul>
<li>Réharmoniser des mélodies simples</li>
<li>Créer des progressions plus intéressantes</li>
<li>Ajouter de la couleur à vos improvisations</li>
<li>Comprendre et jouer du jazz, blues et musique moderne</li>
</ul>
<p>Dans la prochaine leçon, nous explorerons des rythmes complexes qui donneront encore plus de vie à ces accords !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon3Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={3}
      title="Les accords de 7ème avancés"
      duration={17}
      objectives={[
        'Maîtriser les 5 types d\'accords de 7ème',
        'Comprendre la fonction de dominante',
        'Jouer la progression II-V-I',
        'Utiliser les renversements d\'accords de 7ème',
        'Enrichir vos harmonisations'
      ]}
      content={content}
      previousLesson={{ title: 'Les armures et tonalités', href: '/parcours/niveau-4/lecon-2' }}
      nextLesson={{ title: 'Rythmes complexes', href: '/parcours/niveau-4/lecon-4' }}
    />
  )
}
