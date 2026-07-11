import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Le rythme : le battement du coeur de la musique</h2>
        <p>
          Tu sais maintenant jouer les bonnes notes avec les bons doigts. Mais la musique,
          ce n'est pas seulement <strong>quelles notes</strong> jouer, c'est aussi
          <strong>quand</strong> et <strong>combien de temps</strong> les jouer.
        </p>
        <p>
          Le rythme est ce qui donne vie à la musique. C'est le battement régulier
          qui te fait taper du pied ou hocher la tête !
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
        <h2>Le tempo et la pulsation</h2>
        <p>
          Avant de parler des durées, parlons du <strong>tempo</strong> et de la
          <strong>pulsation</strong> :
        </p>
        <ul>
          <li><strong>Pulsation (ou temps)</strong> : Le battement régulier de la musique, comme un métronome</li>
          <li><strong>Tempo</strong> : La vitesse de cette pulsation (rapide ou lent)</li>
        </ul>
        <p>
          Pense à ton coeur qui bat : c'est une pulsation régulière. Quand tu cours,
          elle accélère (tempo rapide). Quand tu te reposes, elle ralentit (tempo lent).
        </p>
        <p>
          En musique, tout est organisé autour de cette pulsation régulière !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Sentir la pulsation',
      description: 'Développe ton sens du rythme',
      steps: [
        'Tape dans tes mains de façon régulière : 1-2-3-4, 1-2-3-4',
        'Compte à voix haute en tapant : "1-2-3-4"',
        'Accélère un peu, puis ralentis, mais garde toujours la régularité',
        'Maintenant tape du pied en comptant mentalement',
        'C\'est ça la pulsation : un battement constant et régulier',
        'Cette pulsation sera ta référence pour toutes les durées de notes'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Les valeurs de notes : la ronde</h2>
        <p>
          Les notes ont des <strong>durées différentes</strong>. Commençons par la plus longue :
          la <strong>ronde</strong>.
        </p>
        <p>
          <strong>La ronde (♩)</strong> :
        </p>
        <ul>
          <li>Ressemble à un cercle vide : ○</li>
          <li>Dure <strong>4 temps</strong> (4 pulsations)</li>
          <li>Tu comptes : "1-2-3-4" en maintenant la note</li>
          <li>C'est la note la plus longue en musique de base</li>
        </ul>
        <p>
          Quand tu joues une ronde, tu appuies sur la touche et tu la maintiens enfoncée
          pendant 4 temps complets.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer des rondes',
      description: 'Pratique les notes longues',
      steps: [
        'Assieds-toi au piano et trouve un Do',
        'Tape du pied pour sentir la pulsation : 1-2-3-4',
        'Appuie sur Do et maintiens pendant 4 temps',
        'Compte à voix haute : "1-2-3-4" pendant que la note sonne',
        'Relâche et recommence : joue 5 rondes sur Do',
        'Essaie maintenant sur Mi, puis sur Sol'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>La blanche : moitié d'une ronde</h2>
        <p>
          La <strong>blanche</strong> dure deux fois moins longtemps qu'une ronde.
        </p>
        <p>
          <strong>La blanche (♩)</strong> :
        </p>
        <ul>
          <li>Ressemble à un cercle vide avec une tige : 𝅗𝅥</li>
          <li>Dure <strong>2 temps</strong></li>
          <li>Tu comptes : "1-2"</li>
          <li>Dans le temps d'une ronde, tu peux jouer 2 blanches</li>
        </ul>
        <p>
          1 ronde = 2 blanches = 4 temps au total
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer des blanches',
      description: 'Entraîne-toi aux notes moyennes',
      steps: [
        'Tape du pied régulièrement : 1-2-3-4',
        'Sur le "1", joue Do et maintiens pendant 2 temps ("1-2")',
        'Sur le "3", joue Mi et maintiens pendant 2 temps ("3-4")',
        'Tu as joué deux blanches : Do (1-2) et Mi (3-4)',
        'Recommence plusieurs fois : Do-Mi, Do-Mi, Do-Mi',
        'Essaie maintenant Do-Sol, Ré-Fa, Mi-Sol'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>La noire : le temps de base</h2>
        <p>
          La <strong>noire</strong> est l'unité de base en musique. C'est souvent elle
          qui représente "un temps".
        </p>
        <p>
          <strong>La noire (♩)</strong> :
        </p>
        <ul>
          <li>Ressemble à un cercle plein avec une tige : ♩</li>
          <li>Dure <strong>1 temps</strong></li>
          <li>Tu comptes : "1" ou "2" ou "3" ou "4"</li>
          <li>C'est la durée la plus courante</li>
        </ul>
        <p>
          1 ronde = 2 blanches = 4 noires = 4 temps au total
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer des noires',
      description: 'Maîtrise le temps de base',
      steps: [
        'Tape du pied : 1-2-3-4',
        'À chaque temps, joue une note : Do-Ré-Mi-Fa',
        'Chaque note dure exactement 1 temps (une noire)',
        'Répète : Do-Ré-Mi-Fa, Do-Ré-Mi-Fa',
        'Maintenant joue : Do-Do-Do-Do (4 noires sur Do)',
        'Puis : Do-Mi-Sol-Mi (4 noires avec des notes différentes)'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Comparer les trois durées</h2>
        <p>
          Récapitulons visuellement :
        </p>
        <ul>
          <li><strong>Ronde</strong> : ○ = 4 temps = "1-2-3-4"</li>
          <li><strong>Blanche</strong> : 𝅗𝅥 = 2 temps = "1-2"</li>
          <li><strong>Noire</strong> : ♩ = 1 temps = "1"</li>
        </ul>
        <p>
          Chaque durée est <strong>deux fois plus courte</strong> que la précédente :
        </p>
        <ul>
          <li>1 ronde = 2 blanches</li>
          <li>1 blanche = 2 noires</li>
          <li>Donc : 1 ronde = 4 noires</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice final : Mélanger les durées',
      description: 'Combine différentes valeurs de notes',
      steps: [
        'Joue cette séquence sur Do : ronde (compte 1-2-3-4)',
        'Puis deux blanches sur Mi et Sol (compte 1-2, 3-4)',
        'Puis quatre noires sur Do-Ré-Mi-Fa (compte 1-2-3-4)',
        'Recommence toute la séquence 3 fois',
        'Vérifie que ton pied tape toujours régulièrement',
        'Si c\'est facile, essaie d\'accélérer un peu le tempo !'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif</h2>
        <p>Félicitations ! Tu comprends maintenant :</p>
        <ul>
          <li>✅ Ce qu'est la pulsation (le battement régulier)</li>
          <li>✅ La ronde : 4 temps (note la plus longue)</li>
          <li>✅ La blanche : 2 temps (moitié d'une ronde)</li>
          <li>✅ La noire : 1 temps (unité de base)</li>
          <li>✅ Comment compter en jouant</li>
        </ul>
        <p>
          Le rythme est aussi important que les notes ! Dans la prochaine leçon,
          tu vas utiliser ces durées pour jouer ta première vraie mélodie.
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
      instructions: "Garde un tempo régulier (aide-toi du métronome). Joue Do, Ré, Mi sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'D', 'E']
    }
  }
]

export default function Lecon4Page() {
  return (
    <LessonTemplate
      levelId={2}
      lessonNumber={4}
      title="Introduction au rythme (noires, blanches, rondes)"
      duration={15}
      objectives={[
        'Comprendre la pulsation et le tempo',
        'Connaître la ronde (4 temps)',
        'Connaître la blanche (2 temps)',
        'Connaître la noire (1 temps)',
        'Jouer en comptant les temps'
      ]}
      content={content}
      previousLesson={{
        title: 'Les intervalles',
        href: '/parcours/niveau-2/lecon-3'
      }}
      nextLesson={{
        title: 'Première mélodie simple',
        href: '/parcours/niveau-2/lecon-5'
      }}
    />
  )
}
