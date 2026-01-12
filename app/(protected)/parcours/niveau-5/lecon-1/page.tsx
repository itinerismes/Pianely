import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Bienvenue au Niveau 5 - Maîtrise ! 🎓</h2>
        <p>
          Félicitations d'avoir atteint le dernier niveau ! Tu as parcouru un long chemin depuis tes premiers pas au piano.
          Dans ce niveau, nous allons explorer les techniques les plus avancées et te préparer à devenir un véritable virtuose.
        </p>
        <p>
          Les gammes avancées vont transformer ta vélocité et ta fluidité. Tu vas apprendre des variations
          qui semblent impossibles au début, mais qui deviendront naturelles avec la pratique.
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
        <h2>La gamme chromatique</h2>
        <p>
          La <strong>gamme chromatique</strong> utilise TOUTES les touches du piano (blanches et noires)
          en succession. C'est un demi-ton entre chaque note.
        </p>
        <p>
          <strong>Doigté main droite (ascendant)</strong> :
        </p>
        <ul>
          <li>Sur touches blanches : utilise le pouce (1)</li>
          <li>Sur touches noires : utilise le majeur (3)</li>
          <li>Exception : Si♭-Si-Do utilise 1-3-1</li>
        </ul>
        <p>
          <strong>Doigté main gauche (ascendant)</strong> :
        </p>
        <ul>
          <li>Inverse : pouce sur blanches, majeur sur noires</li>
          <li>Même principe mais avec la main inversée</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Gamme chromatique sur une octave',
      description: 'Maîtrise le doigté chromatique',
      steps: [
        'Main droite : Do(1)-Do#(3)-Ré(1)-Ré#(3)-Mi(1)-Fa(1)-Fa#(3)-Sol(1)-Sol#(3)-La(1)-La#(3)-Si(1)-Do(1)',
        'Joue très lentement, en vérifiant chaque doigt',
        'Répète 10 fois en montant',
        'Maintenant descends en inversant le doigté',
        'Main gauche : Même principe, commence lentement',
        'Augmente progressivement la vitesse jusqu\'à ♩= 120'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Gammes par intervalles : Tierces</h2>
        <p>
          Les <strong>gammes par tierces</strong> consistent à jouer deux notes en même temps,
          espacées d'une tierce (3 notes). C'est excellent pour la coordination et l'harmonie.
        </p>
        <p>
          <strong>Gamme de Do majeur en tierces</strong> :
        </p>
        <ul>
          <li>Do-Mi, Ré-Fa, Mi-Sol, Fa-La, Sol-Si, La-Do, Si-Ré, Do-Mi</li>
          <li>Main droite : 1-3, 2-4, 3-5, 1-3, 2-4, 3-5, 1-3, 2-4</li>
          <li>Les deux notes doivent sonner exactement ensemble</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice : Gammes en tierces',
      description: 'Développe la précision et la synchronisation',
      steps: [
        'Joue Do-Mi ensemble (1-3), maintiens enfoncé',
        'Relâche et joue Ré-Fa ensemble (2-4)',
        'Continue toute la gamme en tierces',
        'Vérifie que les deux notes sonnent exactement en même temps',
        'Répète 10 fois très lentement',
        'Essaie avec la main gauche (doigté inversé)'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Gammes par intervalles : Sixtes</h2>
        <p>
          Les <strong>gammes par sixtes</strong> sont encore plus difficiles car l'écart
          entre les doigts est plus grand (6 notes d'écart).
        </p>
        <p>
          <strong>Gamme de Do majeur en sixtes</strong> :
        </p>
        <ul>
          <li>Do-La, Ré-Si, Mi-Do, Fa-Ré, Sol-Mi, La-Fa, Si-Sol, Do-La</li>
          <li>Main droite : 1-5, puis repositionnement constant</li>
          <li>C'est un excellent exercice d'extension de la main</li>
        </ul>
      `,
      variant: 'tip'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Gammes en sixtes',
      description: 'Étire la main avec contrôle',
      steps: [
        'Commence par jouer Do-La (1-5), sens l\'extension',
        'Relâche légèrement entre chaque sixte pour éviter la tension',
        'Continue : Ré-Si, Mi-Do, etc.',
        'Joue très lentement, concentre-toi sur l\'absence de tension',
        'Si tu sens une douleur, ARRÊTE et étire ta main',
        'Répète 5 fois seulement pour commencer'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>Gammes en mouvement contraire</h2>
        <p>
          Le <strong>mouvement contraire</strong> signifie que les deux mains jouent la même gamme
          mais dans des directions opposées.
        </p>
        <p>
          <strong>Technique</strong> :
        </p>
        <ul>
          <li>Les deux mains commencent sur Do (octaves différentes)</li>
          <li>Main droite monte : Do-Ré-Mi-Fa-Sol-La-Si-Do</li>
          <li>Main gauche descend en même temps : Do-Si-La-Sol-Fa-Mi-Ré-Do</li>
          <li>Les deux mains jouent en miroir, c'est très symétrique</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Gammes en mouvement contraire',
      description: 'Synchronise les deux mains en miroir',
      steps: [
        'Place les deux pouces sur Do (octaves différentes)',
        'Compte "1-2-3-4-5-6-7-8"',
        'Main droite monte pendant que main gauche descend',
        'Les deux mains doivent jouer exactement ensemble sur chaque temps',
        'Commence très lentement (♩= 60)',
        'Répète 10 fois, puis augmente à ♩= 80, puis ♩= 100'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Gammes en octaves</h2>
        <p>
          Les <strong>gammes en octaves</strong> consistent à jouer la même note avec deux doigts
          séparés d'une octave. C'est spectaculaire et puissant !
        </p>
        <p>
          <strong>Technique</strong> :
        </p>
        <ul>
          <li>Main droite : pouce (1) et auriculaire (5) jouent ensemble</li>
          <li>Exemple : Do-Do (1-5), Ré-Ré (1-5), Mi-Mi (1-5), etc.</li>
          <li>Le poignet doit pivoter légèrement pour chaque octave</li>
          <li>Garde la main arquée et les doigts fermes</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice final : Gammes en octaves',
      description: 'Développe la puissance et l\'éclat',
      steps: [
        'Joue Do-Do (octave) avec 1-5, forte (f)',
        'Le son doit être plein et résonnant',
        'Continue la gamme entière en octaves',
        'Utilise le poids du bras, pas juste les doigts',
        'Répète 5 fois seulement (c\'est très exigeant)',
        'Si tu sens de la fatigue, arrête et repose-toi'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Programme d'entraînement quotidien</h2>
        <p>
          Pour maîtriser ces gammes avancées, voici un programme de 20 minutes par jour :
        </p>
        <ul>
          <li><strong>5 min</strong> : Gamme chromatique (main droite et gauche)</li>
          <li><strong>5 min</strong> : Gammes en tierces (Do majeur)</li>
          <li><strong>5 min</strong> : Gammes en mouvement contraire</li>
          <li><strong>5 min</strong> : Gammes en octaves</li>
        </ul>
        <p>
          Alterne les gammes : un jour Do majeur, le lendemain Sol majeur, etc.
          En 3 mois de pratique quotidienne, tu verras une transformation spectaculaire
          de ta technique !
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
        <h2>Récapitulatif</h2>
        <p>Dans cette leçon, tu as découvert :</p>
        <ul>
          <li>✅ La gamme chromatique et son doigté spécial</li>
          <li>✅ Les gammes en tierces et sixtes (intervalles doubles)</li>
          <li>✅ Les gammes en mouvement contraire (synchronisation)</li>
          <li>✅ Les gammes en octaves (puissance et brillance)</li>
          <li>✅ Un programme d'entraînement quotidien</li>
        </ul>
        <p>
          Ces techniques avancées sont utilisées par tous les grands pianistes.
          Sois patient, pratique régulièrement, et tu développeras une technique
          digne d'un virtuose !
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon1Page() {
  return (
    <LessonTemplate
      levelId={5}
      lessonNumber={1}
      title="Gammes avancées"
      duration={20}
      objectives={[
        'Maîtriser la gamme chromatique',
        'Jouer des gammes en tierces et sixtes',
        'Coordonner les gammes en mouvement contraire',
        'Développer la puissance avec les gammes en octaves',
        'Établir un programme d\'entraînement quotidien'
      ]}
      content={content}
      previousLesson={{
        title: 'Projet de récital',
        href: '/parcours/niveau-4/lecon-10'
      }}
      nextLesson={{
        title: 'Accords complexes et voicings',
        href: '/parcours/niveau-5/lecon-2'
      }}
    />
  )
}
