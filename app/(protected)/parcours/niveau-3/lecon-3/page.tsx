import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Au-delà des accords de base : les accords enrichis</h2>
        <p>
          Tu connais déjà les accords de base (Do, Sol, Fa) avec 3 notes. Maintenant,
          tu vas découvrir les <strong>accords enrichis</strong> qui ajoutent une
          <strong>4ème note</strong> pour créer des couleurs plus riches et sophistiquées.
        </p>
        <p>
          Ces accords sont utilisés dans presque toute la musique moderne : jazz,
          pop, rock, musique de film... Ils donnent une profondeur émotionnelle
          que les accords simples ne peuvent pas atteindre.
        </p>
        <p>
          Les deux types d'accords à 4 notes les plus importants sont :
        </p>
        <ul>
          <li><strong>Les accords de septième de dominante</strong> (7) - tension et résolution</li>
          <li><strong>Les accords de septième majeure</strong> (maj7) - douceur et élégance</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `
        <h2>L'accord de septième de dominante (7)</h2>
        <p>
          Un accord de septième de dominante ajoute une note qui crée une
          <strong>tension</strong> demandant à être résolue.
        </p>
        <p>
          <strong>Construction :</strong> Prends un accord majeur et ajoute la note
          qui se trouve à 10 demi-tons (une septième mineure) au-dessus de la fondamentale.
        </p>
        <p>
          <strong>Do7 (Do septième) :</strong>
        </p>
        <ul>
          <li>Do (fondamentale)</li>
          <li>Mi (tierce majeure)</li>
          <li>Sol (quinte juste)</li>
          <li><strong>Si♭ (septième mineure)</strong> ← La note ajoutée</li>
        </ul>
        <p>
          Cet accord a un caractère <strong>instable</strong> qui demande à
          se résoudre vers un autre accord (généralement Fa majeur).
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer Do7',
      description: 'Découvre la sonorité de l\'accord de septième',
      steps: [
        'Main gauche : Place pouce sur Do, majeur sur Mi, auriculaire sur Sol',
        'Ajoute l\'index sur Si♭ (touche noire à gauche de Si)',
        'Joue l\'accord complet : Do-Mi-Sol-Si♭',
        'Écoute la tension créée par le Si♭',
        'Maintenant joue Do7, puis résous sur Fa majeur (Fa-La-Do)',
        'Entends-tu comment Fa apaise la tension de Do7 ?',
        'Répète : Do7 → Fa, 10 fois pour mémoriser cette résolution'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>L'accord de septième majeure (maj7)</h2>
        <p>
          L'accord de septième majeure a un caractère complètement différent :
          <strong>doux, rêveur, élégant</strong>. C'est l'accord du jazz et des
          ballades romantiques.
        </p>
        <p>
          <strong>Construction :</strong> Prends un accord majeur et ajoute la note
          qui se trouve à 11 demi-tons (une septième majeure) au-dessus de la fondamentale.
        </p>
        <p>
          <strong>Do maj7 (Do majeur septième) :</strong>
        </p>
        <ul>
          <li>Do (fondamentale)</li>
          <li>Mi (tierce majeure)</li>
          <li>Sol (quinte juste)</li>
          <li><strong>Si (septième majeure)</strong> ← La note ajoutée</li>
        </ul>
        <p>
          Contrairement au Do7, cet accord est <strong>stable et apaisé</strong>.
          Il n'a pas besoin de se résoudre.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer Do maj7',
      description: 'Explore la douceur de l\'accord majeur 7',
      steps: [
        'Main gauche : Do-Mi-Sol-Si (Do avec toutes les touches blanches)',
        'Joue l\'accord lentement, note par note',
        'Écoute la couleur douce et aérienne',
        'Compare avec Do majeur simple (Do-Mi-Sol) : quelle différence ?',
        'Joue alternativement : Do maj7, puis Do simple, 5 fois',
        'Le maj7 sonne plus sophistiqué, plus "jazzé"',
        'Mémorise cette sonorité unique'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Les inversions d'accords</h2>
        <p>
          Jusqu'à présent, tu as joué les accords en position <strong>fondamentale</strong> :
          la note de base (fondamentale) en bas. Mais on peut réorganiser les notes !
        </p>
        <p>
          <strong>Les 3 positions d'un accord à 3 notes :</strong>
        </p>
        <ul>
          <li><strong>Position fondamentale :</strong> Do-Mi-Sol (Do en bas)</li>
          <li><strong>Premier renversement :</strong> Mi-Sol-Do (Mi en bas)</li>
          <li><strong>Deuxième renversement :</strong> Sol-Do-Mi (Sol en bas)</li>
        </ul>
        <p>
          C'est toujours le même accord de Do majeur, mais les notes sont dans
          un ordre différent. Cela permet des transitions plus fluides entre
          les accords et des mélodies plus intéressantes à la basse.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Inversions de Do majeur',
      description: 'Maîtrise les 3 positions de l\'accord',
      steps: [
        'Position fondamentale : Do(pouce)-Mi(majeur)-Sol(auriculaire)',
        'Premier renversement : Mi(pouce)-Sol(index)-Do(majeur)',
        'Deuxième renversement : Sol(pouce)-Do(index)-Mi(majeur)',
        'Joue les 3 positions l\'une après l\'autre, lentement',
        'Écoute : c\'est toujours Do majeur, mais la couleur change',
        'Répète la boucle : fondamentale → 1er → 2ème → fondamentale',
        'Fais 10 tours complets sans t\'arrêter'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>Progressions harmoniques enrichies</h2>
        <p>
          Maintenant que tu connais les accords enrichis et les inversions, tu peux
          créer des <strong>progressions harmoniques plus riches</strong>.
        </p>
        <p>
          Voici une progression très utilisée dans la musique moderne :
        </p>
        <p>
          <strong>I - vi - IV - V7</strong> (en Do majeur)
        </p>
        <ul>
          <li><strong>I :</strong> Do maj7 (Do-Mi-Sol-Si)</li>
          <li><strong>vi :</strong> La mineur (La-Do-Mi)</li>
          <li><strong>IV :</strong> Fa maj7 (Fa-La-Do-Mi)</li>
          <li><strong>V7 :</strong> Sol7 (Sol-Si-Ré-Fa)</li>
        </ul>
        <p>
          Cette progression crée un voyage émotionnel : stabilité → mélancolie →
          espoir → tension → retour au début.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Progression I-vi-IV-V7',
      description: 'Joue une progression harmonique riche',
      steps: [
        'Do maj7 : Do-Mi-Sol-Si (4 temps)',
        'La mineur : La-Do-Mi (4 temps)',
        'Fa maj7 : Fa-La-Do-Mi (4 temps)',
        'Sol7 : Sol-Si-Ré-Fa (4 temps)',
        'Joue chaque accord en blanche (2 temps par accord)',
        'Répète la progression 5 fois',
        'Écoute comment Sol7 crée l\'envie de revenir à Do',
        'Essaie d\'utiliser des inversions pour fluidifier les transitions'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Appliquer les accords enrichis dans tes morceaux</h2>
        <p>
          Maintenant, reprends des morceaux que tu connais et enrichis-les !
        </p>
        <p>
          <strong>Exemple : "Au clair de la lune" avec accords enrichis</strong>
        </p>
        <p>
          Au lieu de :
        </p>
        <ul>
          <li>Do majeur → Sol majeur → Do majeur</li>
        </ul>
        <p>
          Essaie :
        </p>
        <ul>
          <li>Do maj7 → Sol7 → Do maj7</li>
        </ul>
        <p>
          La différence est subtile mais profonde. La musique devient plus
          mature, plus expressive. C'est la même mélodie, mais avec plus
          de profondeur émotionnelle.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice : Enrichir "Au clair de la lune"',
      description: 'Transforme un morceau simple avec des accords enrichis',
      steps: [
        'Joue d\'abord avec les accords simples (Do, Sol, Do) pour te rappeler',
        'Remplace Do par Do maj7 (Do-Mi-Sol-Si)',
        'Remplace Sol par Sol7 (Sol-Si-Ré-Fa)',
        'Joue la mélodie avec ces nouveaux accords',
        'Compare : entends-tu la richesse supplémentaire ?',
        'Essaie différentes inversions pour voir ce qui sonne le mieux',
        'Félicitations : tu viens d\'arranger ton premier morceau !'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Tableau récapitulatif des accords enrichis</h2>
        <p>
          Voici les accords enrichis les plus courants en Do majeur :
        </p>
        <ul>
          <li><strong>Do maj7 :</strong> Do-Mi-Sol-Si (stable, doux)</li>
          <li><strong>Ré min7 :</strong> Ré-Fa-La-Do (mélancolique)</li>
          <li><strong>Mi min7 :</strong> Mi-Sol-Si-Ré (sombre)</li>
          <li><strong>Fa maj7 :</strong> Fa-La-Do-Mi (lumineux)</li>
          <li><strong>Sol7 :</strong> Sol-Si-Ré-Fa (tension)</li>
          <li><strong>La min7 :</strong> La-Do-Mi-Sol (nostalgique)</li>
        </ul>
        <p>
          Chaque accord a son caractère unique. Apprends à les reconnaître
          à l'oreille et tu pourras créer n'importe quelle ambiance musicale !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `
        <h2>Continuer à explorer</h2>
        <p>
          Les accords enrichis ouvrent un monde de possibilités. Voici comment
          continuer à progresser :
        </p>
        <ul>
          <li><strong>Transpose :</strong> Apprends ces accords dans d'autres tonalités</li>
          <li><strong>Écoute active :</strong> Identifie les accords enrichis dans tes chansons préférées</li>
          <li><strong>Improvise :</strong> Crée tes propres progressions d'accords</li>
          <li><strong>Combine :</strong> Mélange accords simples et enrichis pour varier les couleurs</li>
        </ul>
        <p>
          Avec le temps, l'utilisation des accords enrichis deviendra naturelle
          et intuitive. Tu développeras ton propre style harmonique !
        </p>
      `,
      variant: 'normal'
    }
  }
]

export default function Lecon3Page() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={3}
      title="Les accords enrichis"
      duration={16}
      objectives={[
        'Comprendre et jouer les accords de septième (7 et maj7)',
        'Maîtriser les inversions d\'accords',
        'Créer des progressions harmoniques riches',
        'Appliquer les accords enrichis dans tes morceaux'
      ]}
      content={content}
      previousLesson={{
        title: 'Lecture de partition niveau 1',
        href: '/parcours/niveau-3/lecon-2'
      }}
      nextLesson={{
        title: 'Techniques d\'articulation',
        href: '/parcours/niveau-3/lecon-4'
      }}
    />
  )
}
