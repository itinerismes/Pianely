import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Les intervalles : la distance entre les notes</h2>
        <p>
          Tu connais maintenant les notes et comment positionner tes doigts. Il est temps
          de découvrir les <strong>intervalles</strong> : la distance entre deux notes.
        </p>
        <p>
          Un intervalle, c'est comme mesurer la distance entre deux villes. Au piano,
          on mesure la distance entre deux notes, et cela change complètement la sonorité !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `
        <h2>Qu'est-ce qu'un intervalle ?</h2>
        <p>
          Un intervalle est la distance entre deux notes. On compte le nombre de notes
          en incluant la première et la dernière.
        </p>
        <p>
          Les intervalles ont des noms spécifiques :
        </p>
        <ul>
          <li><strong>Unisson</strong> : Même note jouée deux fois</li>
          <li><strong>Seconde</strong> : Deux notes voisines (ex: Do-Ré)</li>
          <li><strong>Tierce</strong> : Trois notes (ex: Do-Mi)</li>
          <li><strong>Quarte</strong> : Quatre notes (ex: Do-Fa)</li>
          <li><strong>Quinte</strong> : Cinq notes (ex: Do-Sol)</li>
        </ul>
        <p>
          Dans cette leçon, nous allons nous concentrer sur les secondes et les tierces.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `
        <h2>Les secondes : notes voisines</h2>
        <p>
          Une seconde est l'intervalle le plus petit au piano (en excluant l'unisson).
          Ce sont deux notes qui se suivent directement.
        </p>
        <p>
          Exemples de secondes :
        </p>
        <ul>
          <li>Do - Ré</li>
          <li>Mi - Fa</li>
          <li>Sol - La</li>
          <li>Si - Do</li>
        </ul>
        <p>
          Une seconde se joue avec des doigts consécutifs : 1-2, 2-3, 3-4, ou 4-5.
          Le son est proche, presque "serré".
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer des secondes',
      description: 'Entraîne-toi à jouer des intervalles de seconde',
      steps: [
        'Place ta main droite en position (pouce sur Do)',
        'Joue Do-Ré (doigts 1-2) plusieurs fois',
        'Écoute bien le son : les notes sont proches',
        'Joue ensuite Ré-Mi (2-3), Mi-Fa (3-4), Fa-Sol (4-5)',
        'Maintenant, joue toutes les secondes en montant : Do-Ré, Ré-Mi, Mi-Fa, Fa-Sol',
        'Répète en redescendant : Sol-Fa, Fa-Mi, Mi-Ré, Ré-Do'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Les tierces : sauter une note</h2>
        <p>
          Une tierce est un intervalle de trois notes. Visuellement, on "saute" une
          touche entre les deux notes jouées.
        </p>
        <p>
          Exemples de tierces :
        </p>
        <ul>
          <li>Do - Mi (on saute Ré)</li>
          <li>Ré - Fa (on saute Mi)</li>
          <li>Mi - Sol (on saute Fa)</li>
          <li>Fa - La (on saute Sol)</li>
        </ul>
        <p>
          Les tierces sonnent harmonieuses et joyeuses. Elles sont la base de tous
          les accords majeurs !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer des tierces',
      description: 'Découvre la sonorité des tierces',
      steps: [
        'Place ta main droite en position (pouce sur Do)',
        'Joue Do-Mi (doigts 1-3) en sautant Ré',
        'Écoute la différence avec une seconde : plus ouvert, plus joyeux',
        'Joue Ré-Fa (2-4), puis Mi-Sol (3-5)',
        'Pour Do-Mi, joue les deux notes ensemble (en même temps)',
        'Répète chaque tierce 5 fois, en écoutant bien la sonorité'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Intervalles mélodiques et harmoniques</h2>
        <p>
          Il existe deux façons de jouer un intervalle :
        </p>
        <ul>
          <li><strong>Mélodique</strong> : Les notes sont jouées l'une après l'autre (successivement)</li>
          <li><strong>Harmonique</strong> : Les notes sont jouées ensemble (simultanément)</li>
        </ul>
        <p>
          Par exemple, Do-Mi mélodique : tu joues Do puis Mi.<br>
          Do-Mi harmonique : tu joues Do et Mi en même temps.
        </p>
        <p>
          Les intervalles harmoniques créent des accords, tandis que les intervalles
          mélodiques créent des mélodies !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Mélodique vs Harmonique',
      description: 'Compare les deux types d\'intervalles',
      steps: [
        'Joue Do-Mi mélodiquement (l\'un après l\'autre) 3 fois',
        'Joue Do-Mi harmoniquement (ensemble) 3 fois',
        'Écoute la différence : mélodique = mélodie, harmonique = accord',
        'Fais de même avec Do-Ré (seconde) : mélodique puis harmonique',
        'Essaie avec d\'autres intervalles : Ré-Fa, Mi-Sol',
        'Quelle version préfères-tu ? Les deux sont importantes !'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Reconnaître les intervalles à l'oreille</h2>
        <p>
          Avec la pratique, tu pourras reconnaître les intervalles juste en les écoutant :
        </p>
        <ul>
          <li><strong>Secondes</strong> : Son serré, un peu tendu</li>
          <li><strong>Tierces</strong> : Son joyeux, harmonieux, ouvert</li>
        </ul>
        <p>
          Voici des références pour retenir :
        </p>
        <ul>
          <li><strong>Seconde</strong> : Comme les deux premières notes de "Joyeux Anniversaire"</li>
          <li><strong>Tierce majeure</strong> : Comme les deux premières notes de "Oh When the Saints"</li>
        </ul>
      `,
      variant: 'tip'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice : Entraînement de l\'oreille',
      description: 'Développe ton oreille musicale',
      steps: [
        'Joue une seconde (Do-Ré) et ferme les yeux',
        'Écoute attentivement le son',
        'Joue maintenant une tierce (Do-Mi) et compare',
        'Répète plusieurs fois en alternant seconde et tierce',
        'Demande à quelqu\'un de jouer l\'un ou l\'autre : peux-tu deviner ?',
        'C\'est difficile au début, mais ça viendra avec la pratique !'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Application pratique</h2>
        <p>
          Les intervalles sont partout dans la musique ! Quand tu joues une mélodie,
          tu enchaînes des intervalles différents.
        </p>
        <p>
          Par exemple, la mélodie "Au clair de la lune" utilise principalement des
          secondes et des tierces. "Frère Jacques" aussi !
        </p>
        <p>
          Dans les prochaines leçons, tu utiliseras ces intervalles pour jouer
          tes premières vraies mélodies.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif</h2>
        <p>Bravo ! Tu maîtrises maintenant :</p>
        <ul>
          <li>✅ Ce qu'est un intervalle (distance entre deux notes)</li>
          <li>✅ Les secondes : notes voisines, son serré</li>
          <li>✅ Les tierces : on saute une note, son harmonieux</li>
          <li>✅ La différence entre intervalles mélodiques et harmoniques</li>
          <li>✅ Comment reconnaître les intervalles à l'oreille</li>
        </ul>
        <p>
          Les intervalles sont les briques de base de toute la musique. Tu vas les
          utiliser constamment dans ton parcours pianistique !
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon3Page() {
  return (
    <LessonTemplate
      levelId={2}
      lessonNumber={3}
      title="Les intervalles (secondes et tierces)"
      duration={12}
      objectives={[
        'Comprendre ce qu\'est un intervalle',
        'Reconnaître et jouer des secondes',
        'Reconnaître et jouer des tierces',
        'Différencier intervalles mélodiques et harmoniques',
        'Développer son oreille musicale'
      ]}
      content={content}
      previousLesson={{
        title: 'Les doigtés',
        href: '/parcours/niveau-2/lecon-2'
      }}
      nextLesson={{
        title: 'Introduction au rythme',
        href: '/parcours/niveau-2/lecon-4'
      }}
    />
  )
}
