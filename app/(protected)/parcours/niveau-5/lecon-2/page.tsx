import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Les accords complexes 🎹</h2>
        <p>
          Tu connais déjà les accords de base (majeurs, mineurs, 7èmes). Maintenant, nous allons explorer
          des sonorités plus riches et sophistiquées utilisées dans le jazz, le gospel et la musique moderne.
        </p>
        <p>
          Ces accords transformeront ta musique en lui donnant profondeur, couleur et émotion.
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
        <h2>Les accords de 9ème</h2>
        <p>
          Un <strong>accord de 9ème</strong> est un accord de 7ème auquel on ajoute une neuvième note
          (la 2ème note de la gamme, une octave plus haut).
        </p>
        <p>
          <strong>Accord de Do majeur 9</strong> (Cmaj9) :
        </p>
        <ul>
          <li>Do (fondamentale) - Mi (tierce majeure) - Sol (quinte) - Si (7ème majeure) - Ré (9ème)</li>
          <li>Sonorité: très lumineuse, aérienne, sophistiquée</li>
        </ul>
        <p>
          <strong>Accord de Do mineur 9</strong> (Cm9) :
        </p>
        <ul>
          <li>Do - Mi♭ - Sol - Si♭ - Ré</li>
          <li>Sonorité: mélancolique mais riche</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Progression d\'accords en 9ème',
      description: 'Joue une suite d\'accords sophistiqués',
      steps: [
        'Main gauche : joue la fondamentale seule (Do)',
        'Main droite : joue Mi-Sol-Si-Ré (les autres notes de Cmaj9)',
        'Tiens l\'accord pendant 4 temps',
        'Passe à Dm9, puis Em9, puis Fmaj9',
        'Écoute la richesse harmonique',
        'Répète la progression 5 fois'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Les accords de 11ème et 13ème</h2>
        <p>
          On peut aller encore plus loin en ajoutant des notes supplémentaires :
        </p>
        <p>
          <strong>Accord de 11ème</strong> :
        </p>
        <ul>
          <li>Ajoute la 11ème note (4ème degré de la gamme)</li>
          <li>Exemple: C11 = Do-Mi-Sol-Si♭-Ré-Fa</li>
          <li>6 notes ! Impossible de tout jouer, on choisit les plus importantes</li>
        </ul>
        <p>
          <strong>Accord de 13ème</strong> :
        </p>
        <ul>
          <li>Ajoute la 13ème note (6ème degré de la gamme)</li>
          <li>Exemple: C13 = Do-Mi-Sol-Si♭-Ré-Fa-La</li>
          <li>7 notes ! On utilise le voicing (choix des notes à jouer)</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Le voicing : l'art du choix</h2>
        <p>
          Le <strong>voicing</strong> est l'art de choisir quelles notes jouer et dans quel ordre
          pour créer un son optimal. On ne peut pas jouer toutes les notes d'un accord de 13ème !
        </p>
        <p>
          <strong>Principes du voicing</strong> :
        </p>
        <ul>
          <li><strong>Fondamentale à la basse</strong> : La note la plus grave est généralement la fondamentale</li>
          <li><strong>Omissions</strong> : On peut souvent omettre la quinte (elle n'apporte pas beaucoup de couleur)</li>
          <li><strong>Espacement</strong> : Plus l'accord est grave, plus il faut d'espace entre les notes</li>
          <li><strong>Tierce et 7ème</strong> : Ces notes définissent la couleur, garde-les toujours</li>
        </ul>
      `,
      variant: 'tip'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Voicing d\'un accord C13',
      description: 'Choisis les meilleures notes',
      steps: [
        'C13 complet : Do-Mi-Sol-Si♭-Ré-Fa-La (7 notes)',
        'Main gauche : joue Do (fondamentale)',
        'Main droite : joue Mi-Si♭-Ré-La (tierce, 7ème, 9ème, 13ème)',
        'On a omis Sol et Fa pour un son plus clair',
        'Écoute la richesse du son',
        'Compare avec toutes les notes jouées ensemble (trop dense !)'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Les accords altérés</h2>
        <p>
          Les <strong>accords altérés</strong> utilisent des notes modifiées (dièse ou bémol)
          pour créer de la tension et de l'intérêt.
        </p>
        <p>
          <strong>Types d'altérations courantes</strong> :
        </p>
        <ul>
          <li><strong>♭9</strong> : Neuvième bémol (Ré♭ dans un accord de Do)</li>
          <li><strong>#9</strong> : Neuvième dièse (Ré# dans un accord de Do)</li>
          <li><strong>♭5 ou #11</strong> : Quinte bémol / Onzième dièse</li>
          <li><strong>#5 ou ♭13</strong> : Quinte augmentée / Treizième bémol</li>
        </ul>
        <p>
          Ces accords créent de la tension qui demande résolution !
        </p>
      `,
      variant: 'warning'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Accords altérés',
      description: 'Crée de la tension harmonique',
      steps: [
        'Joue C7 (Do-Mi-Sol-Si♭) - son de base',
        'Transforme en C7♭9 : remplace Ré par Ré♭',
        'Écoute la tension créée',
        'Transforme en C7#9 : remplace Ré par Ré#',
        'Encore plus de tension !',
        'Résous vers F majeur (Fa-La-Do) - sensation de résolution'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Les slash chords (accords barrés)</h2>
        <p>
          Un <strong>slash chord</strong> (noté C/E par exemple) indique que l'accord de Do
          est joué avec Mi à la basse au lieu de Do.
        </p>
        <p>
          <strong>Utilisations courantes</strong> :
        </p>
        <ul>
          <li><strong>C/E</strong> : Do majeur avec Mi à la basse (1ère inversion)</li>
          <li><strong>C/G</strong> : Do majeur avec Sol à la basse (2ème inversion)</li>
          <li><strong>C/B♭</strong> : Do majeur avec Si♭ à la basse (crée une ligne de basse chromatique)</li>
        </ul>
        <p>
          Les slash chords créent des progressions de basse plus intéressantes !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice : Progression avec slash chords',
      description: 'Crée une ligne de basse fluide',
      steps: [
        'Joue: C - C/B♭ - F/A - Fm/A♭',
        'Main gauche : Do - Si♭ - La - La♭ (descente chromatique)',
        'Main droite : garde l\'accord de base',
        'La ligne de basse descend doucement, très musical',
        'Répète 10 fois en écoutant la progression',
        'C\'est utilisé dans des milliers de chansons !'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Application : Réharmonisation</h2>
        <p>
          La <strong>réharmonisation</strong> consiste à remplacer des accords simples
          par des accords plus riches. C'est comme colorier un dessin en noir et blanc !
        </p>
        <p>
          <strong>Exemple avec "Au clair de la lune"</strong> :
        </p>
        <p>
          Original : C - C - C - G7 - C - C - G7 - G7
        </p>
        <p>
          Réharmonisé : Cmaj9 - Am7 - Dm7 - G13 - Cmaj9 - Fmaj9 - Dm7 - G7♭9
        </p>
        <p>
          La mélodie reste identique, mais l'harmonie est transformée !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Projet : Réharmonise une mélodie simple',
      description: 'Applique tes nouvelles connaissances',
      steps: [
        'Choisis une mélodie simple que tu connais',
        'Identifie les accords de base (I, IV, V)',
        'Remplace chaque accord majeur par un accord maj9',
        'Remplace chaque accord mineur par un accord m7 ou m9',
        'Remplace V7 par V13 ou V7alt',
        'Joue et compare avec la version originale',
        'Ressens la richesse harmonique ajoutée !'
      ]
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
          <li>✅ Les accords de 9ème, 11ème et 13ème</li>
          <li>✅ L'art du voicing (choisir les bonnes notes)</li>
          <li>✅ Les accords altérés pour créer de la tension</li>
          <li>✅ Les slash chords et leurs utilisations</li>
          <li>✅ La réharmonisation pour enrichir une mélodie</li>
        </ul>
        <p>
          Ces concepts ouvrent un univers infini de possibilités harmoniques.
          Expérimente, écoute de la musique jazz et moderne, et laisse tes oreilles
          te guider vers les sonorités qui te plaisent !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: 'piano-exercice',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'À toi de jouer 🎹',
      instructions: "Empile le voicing Cmaj9 : Do, Mi, Sol, Si, Ré. Joue Do, Mi, Sol, Si, Ré sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'E', 'G', 'B', 'D']
    }
  }
]

export default function Lecon2Page() {
  return (
    <LessonTemplate
      levelId={5}
      lessonNumber={2}
      title="Accords complexes et voicings"
      duration={22}
      objectives={[
        'Comprendre et jouer les accords de 9ème, 11ème et 13ème',
        'Maîtriser l\'art du voicing',
        'Utiliser les accords altérés pour créer de la tension',
        'Explorer les slash chords',
        'Réharmoniser une mélodie simple'
      ]}
      content={content}
      previousLesson={{
        title: 'Gammes avancées',
        href: '/parcours/niveau-5/lecon-1'
      }}
      nextLesson={{
        title: 'Polyphonie et contrepoint',
        href: '/parcours/niveau-5/lecon-3'
      }}
    />
  )
}
