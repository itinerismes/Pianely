import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Ta première vraie mélodie !</h2>
        <p>
          C'est un moment spécial : tu vas jouer ta première mélodie complète !
          Tu as toutes les compétences nécessaires :
        </p>
        <ul>
          <li>✅ Tu connais les notes</li>
          <li>✅ Tu maîtrises la position des mains et les doigtés</li>
          <li>✅ Tu comprends les intervalles</li>
          <li>✅ Tu sais compter les temps</li>
        </ul>
        <p>
          Maintenant, il est temps de tout combiner pour créer de la musique !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `
        <h2>Qu'est-ce qu'une mélodie ?</h2>
        <p>
          Une <strong>mélodie</strong> est une succession de notes qui forme une ligne
          musicale reconnaissable. C'est la partie que tu chantes ou fredonne !
        </p>
        <p>
          Une bonne mélodie combine :
        </p>
        <ul>
          <li><strong>Des hauteurs variées</strong> (notes différentes)</li>
          <li><strong>Des rythmes variés</strong> (durées différentes)</li>
          <li><strong>Une direction</strong> (monte, descend, ou reste stable)</li>
          <li><strong>Des phrases musicales</strong> (comme des phrases en langage)</li>
        </ul>
        <p>
          Aujourd'hui, tu vas jouer une mélodie simple avec la main droite uniquement.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `
        <h2>Préparation : Position et posture</h2>
        <p>
          Avant de commencer, assure-toi d'avoir une bonne position :
        </p>
        <ul>
          <li>Assis bien droit face au clavier</li>
          <li>Pieds à plat au sol</li>
          <li>Main droite en position des cinq doigts (pouce sur Do)</li>
          <li>Doigts arrondis et poignet détendu</li>
          <li>Épaules relaxées</li>
        </ul>
        <p>
          Prends ton temps. Une bonne position dès le début t'aidera à mieux jouer !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Échauffement',
      description: 'Prépare ta main droite',
      steps: [
        'Place ta main droite : pouce (1) sur Do',
        'Joue la gamme montante : Do-Ré-Mi-Fa-Sol (1-2-3-4-5)',
        'Puis descendante : Sol-Fa-Mi-Ré-Do (5-4-3-2-1)',
        'Répète 3 fois, lentement et régulièrement',
        'Vérifie que chaque doigt appuie bien au centre de sa touche',
        'Respire profondément : tu es prêt pour ta première mélodie !'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Première mélodie : "Au clair de la lune" (début)</h2>
        <p>
          Nous allons apprendre les 4 premières mesures de cette chanson traditionnelle.
          Voici les notes avec les doigtés :
        </p>
        <p>
          <strong>Phrase 1 :</strong><br>
          Do(1) Do(1) Do(1) Ré(2) Mi(3) Ré(2)<br>
          <em>Noires : chaque note = 1 temps</em>
        </p>
        <p>
          <strong>Phrase 2 :</strong><br>
          Do(1) Mi(3) Ré(2) Ré(2) Do(1) — (blanche puis ronde)<br>
          <em>La dernière note (Do) dure 2 temps</em>
        </p>
        <p>
          C'est la phrase "Au clair de la lune, mon ami Pierrot" !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Phrase 1',
      description: 'Apprends la première phrase note par note',
      steps: [
        'Joue seulement : Do-Do-Do (trois fois le même Do)',
        'Ajoute Ré-Mi-Ré : donc Do-Do-Do-Ré-Mi-Ré',
        'Répète cette phrase 5 fois sans t\'arrêter',
        'Compte à voix haute : 1-2-3-4-5-6 (6 noires au total)',
        'Assure-toi d\'utiliser les bons doigts (1-1-1-2-3-2)',
        'Quand c\'est fluide, passe à la phrase suivante'
      ]
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Phrase 2',
      description: 'Apprends la deuxième phrase',
      steps: [
        'Joue : Do-Mi-Ré-Ré-Do (doigts : 1-3-2-2-1)',
        'La dernière note (Do) dure plus longtemps (2 temps)',
        'Compte : 1-2-3-4-5-6 pour les 5 premières notes, puis 7-8 pour le Do final',
        'Répète cette phrase 5 fois',
        'Fais attention au dernier Do : maintiens-le bien 2 temps',
        'C\'est la fin de la première partie de la chanson !'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>Assemblage des deux phrases</h2>
        <p>
          Maintenant, tu vas jouer les deux phrases à la suite, comme une vraie mélodie !
        </p>
        <p>
          <strong>Mélodie complète :</strong>
        </p>
        <ol>
          <li>Phrase 1 : Do-Do-Do-Ré-Mi-Ré (6 noires)</li>
          <li>Phrase 2 : Do-Mi-Ré-Ré-Do— (4 noires + 1 blanche)</li>
        </ol>
        <p>
          Entre les deux phrases, tu peux respirer légèrement (comme quand tu chantes).
          C'est ce qu'on appelle une <strong>respiration musicale</strong>.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Mélodie complète',
      description: 'Joue les deux phrases ensemble',
      steps: [
        'Commence par la phrase 1 : Do-Do-Do-Ré-Mi-Ré',
        'Respire brièvement (ne lève pas la main, juste une micro-pause)',
        'Enchaîne avec la phrase 2 : Do-Mi-Ré-Ré-Do—',
        'Recommence toute la mélodie 3 fois de suite',
        'Compte mentalement pour garder le rythme régulier',
        'Félicitations : tu joues "Au clair de la lune" !'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Conseils pour bien jouer une mélodie</h2>
        <p>
          Voici quelques astuces pour améliorer ton jeu :
        </p>
        <ul>
          <li><strong>Commence lentement</strong> : La vitesse viendra naturellement avec la pratique</li>
          <li><strong>Joue régulièrement</strong> : Garde un tempo constant, ne ralentis pas puis accélère</li>
          <li><strong>Respecte les doigtés</strong> : Utilise toujours les mêmes doigts pour les mêmes notes</li>
          <li><strong>Écoute-toi</strong> : La mélodie doit être fluide et agréable à l'oreille</li>
          <li><strong>Détends-toi</strong> : Si tu sens une tension, arrête-toi et repositionne ta main</li>
        </ul>
      `,
      variant: 'tip'
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Erreurs courantes à éviter</h2>
        <p>
          Attention à ces pièges fréquents :
        </p>
        <ul>
          <li>❌ Jouer trop vite dès le début</li>
          <li>❌ Changer de doigts à chaque fois</li>
          <li>❌ Regarder ses doigts au lieu du clavier</li>
          <li>❌ Oublier de compter les temps</li>
          <li>❌ Tenir les notes trop courtes ou trop longues</li>
          <li>❌ Se crisper : reste toujours détendu !</li>
        </ul>
        <p>
          Si tu fais une erreur, ce n'est pas grave ! Arrête-toi, respire, et
          recommence calmement.
        </p>
      `,
      variant: 'warning'
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif et bravo !</h2>
        <p>Tu viens d'accomplir quelque chose d'extraordinaire :</p>
        <ul>
          <li>✅ Tu as joué ta première vraie mélodie</li>
          <li>✅ Tu as utilisé les bons doigtés</li>
          <li>✅ Tu as respecté le rythme</li>
          <li>✅ Tu as assemblé plusieurs compétences en même temps</li>
          <li>✅ Tu es officiellement capable de jouer une chanson au piano !</li>
        </ul>
        <p>
          Continue à pratiquer cette mélodie chaque jour. Bientôt, tu pourras la jouer
          les yeux fermés ! Dans la prochaine leçon, nous allons commencer à utiliser
          la main gauche.
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon5Page() {
  return (
    <LessonTemplate
      levelId={2}
      lessonNumber={5}
      title="Première mélodie simple (main droite seule)"
      duration={15}
      objectives={[
        'Comprendre ce qu\'est une mélodie',
        'Jouer "Au clair de la lune" (2 phrases)',
        'Combiner notes, doigtés et rythme',
        'Développer la fluidité du jeu',
        'Gagner en confiance au piano'
      ]}
      content={content}
      previousLesson={{
        title: 'Introduction au rythme',
        href: '/parcours/niveau-2/lecon-4'
      }}
      nextLesson={{
        title: 'Main gauche et accords de base',
        href: '/parcours/niveau-2/lecon-6'
      }}
    />
  )
}
