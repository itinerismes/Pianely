import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Ta première mélodie ! 🎵</h2>
        <p>
          C'est le moment que tu attendais : tu vas jouer ta <strong>première vraie mélodie</strong>
          avec la main droite !
        </p>
        <p>
          Ne t'inquiète pas, nous allons commencer très simplement avec un motif que
          tout le monde connaît. À la fin de cette leçon, tu seras capable de jouer
          une mélodie fluide et musicale.
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
        <h2>Rappel : Position de Do main droite</h2>
        <p>
          Avant de commencer, assure-toi que ta main droite est bien placée :
        </p>
        <ul>
          <li>Pouce (1) sur <strong>Do</strong></li>
          <li>Index (2) sur <strong>Ré</strong></li>
          <li>Majeur (3) sur <strong>Mi</strong></li>
          <li>Annulaire (4) sur <strong>Fa</strong></li>
          <li>Auriculaire (5) sur <strong>Sol</strong></li>
        </ul>
        <p>
          Vérifie aussi ta posture : dos droit, épaules détendues, doigts courbés !
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
        <h2>Le motif ascendant : Do-Ré-Mi-Fa-Sol</h2>
        <p>
          Le premier motif que nous allons apprendre est la <strong>gamme ascendante</strong>
          sur 5 notes.
        </p>
        <p>
          <strong>Séquence à jouer :</strong>
        </p>
        <ul>
          <li><strong>Do</strong> (doigt 1) → appuie avec le pouce</li>
          <li><strong>Ré</strong> (doigt 2) → appuie avec l'index</li>
          <li><strong>Mi</strong> (doigt 3) → appuie avec le majeur</li>
          <li><strong>Fa</strong> (doigt 4) → appuie avec l'annulaire</li>
          <li><strong>Sol</strong> (doigt 5) → appuie avec l'auriculaire</li>
        </ul>
        <p>
          C'est comme monter un escalier, une marche à la fois !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice 1 : Motif ascendant lent',
      description: 'Joue la gamme montante très lentement pour bien sentir chaque note',
      steps: [
        'Place ta main droite en position de Do',
        'Joue très lentement : Do (1) - Ré (2) - Mi (3) - Fa (4) - Sol (5)',
        'Compte à voix haute : "1... 2... 3... 4... 5..."',
        'Veille à bien lever chaque doigt avant de frapper (mouvement de l\'articulation)',
        'Répète 10 fois en augmentant progressivement la vitesse',
        'Important : garde les autres doigts posés sur leurs touches !'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Le motif descendant : Sol-Fa-Mi-Ré-Do</h2>
        <p>
          Maintenant que tu montes l'escalier, il faut apprendre à le redescendre !
        </p>
        <p>
          <strong>Séquence à jouer :</strong>
        </p>
        <ul>
          <li><strong>Sol</strong> (doigt 5) → auriculaire</li>
          <li><strong>Fa</strong> (doigt 4) → annulaire</li>
          <li><strong>Mi</strong> (doigt 3) → majeur</li>
          <li><strong>Ré</strong> (doigt 2) → index</li>
          <li><strong>Do</strong> (doigt 1) → pouce</li>
        </ul>
        <p>
          C'est exactement le même motif, mais dans l'autre sens !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice 2 : Motif descendant',
      description: 'Pratique le mouvement inverse',
      steps: [
        'Garde ta main droite en position de Do',
        'Joue lentement : Sol (5) - Fa (4) - Mi (3) - Ré (2) - Do (1)',
        'Compte à rebours : "5... 4... 3... 2... 1..."',
        'Fais bien attention à l\'annulaire (doigt 4), souvent le plus faible',
        'Répète 10 fois',
        'Vérifie que ton poignet reste stable (ne bouge pas de haut en bas)'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Combinaison : Montée et descente</h2>
        <p>
          Maintenant, combinons les deux pour créer une <strong>vraie mélodie fluide</strong> !
        </p>
        <p>
          <strong>Motif complet :</strong><br>
          Do - Ré - Mi - Fa - Sol - Fa - Mi - Ré - Do
        </p>
        <p>
          En doigtés : 1 - 2 - 3 - 4 - 5 - 4 - 3 - 2 - 1
        </p>
        <p>
          C'est le motif le plus classique en musique, utilisé dans d'innombrables
          chansons depuis des siècles !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice 3 : Motif complet',
      description: 'Joue la mélodie complète de façon fluide',
      steps: [
        'Joue : Do (1) - Ré (2) - Mi (3) - Fa (4) - Sol (5)',
        'Sans t\'arrêter, redescends : Fa (4) - Mi (3) - Ré (2) - Do (1)',
        'Répète en comptant : "1-2-3-4-5-4-3-2-1"',
        'Essaie de garder un rythme régulier (comme un métronome)',
        'Quand tu es à l\'aise, essaie de jouer sans compter à voix haute',
        'Objectif : jouer 5 fois de suite sans erreur'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Introduction au rythme</h2>
        <p>
          Jusqu'ici, tu as joué les notes une par une, à ton propre rythme.
          Maintenant, introduisons la notion de <strong>tempo</strong> (vitesse).
        </p>
        <p>
          <strong>Le rythme régulier :</strong>
        </p>
        <ul>
          <li>Chaque note doit durer <strong>exactement la même durée</strong></li>
          <li>Imagine un battement de cœur : bum... bum... bum...</li>
          <li>Ou le tic-tac d'une horloge</li>
          <li>La régularité est plus importante que la vitesse !</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice 4 : Joue avec le rythme',
      description: 'Développe ton sens du tempo',
      steps: [
        'Tape du pied régulièrement (comme un métronome)',
        'À chaque tape de pied, joue une note du motif',
        'Do (tape) - Ré (tape) - Mi (tape) - Fa (tape) - Sol (tape)...',
        'Continue la descente en gardant le même rythme',
        'Si tu as un métronome (ou une app), règle-le sur 60 BPM',
        'Joue le motif complet 5 fois sans accélérer ni ralentir'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Variantes mélodiques</h2>
        <p>
          Maintenant que tu maîtrises le motif de base, essayons quelques
          <strong>variantes créatives</strong> !
        </p>
        <p>
          <strong>Variante 1 - Par sauts :</strong><br>
          Do - Mi - Sol - Mi - Do (doigts : 1-3-5-3-1)
        </p>
        <p>
          <strong>Variante 2 - Répétition :</strong><br>
          Do-Do - Ré-Ré - Mi-Mi - Fa-Fa - Sol-Sol
        </p>
        <p>
          <strong>Variante 3 - Notes tenues :</strong><br>
          Do (tiens 2 secondes) - Ré (tiens 2 secondes) - etc.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Exercice 5 : Explore les variantes',
      description: 'Développe ta musicalité avec les variations',
      steps: [
        'Essaie la Variante 1 (par sauts) : Do-Mi-Sol-Mi-Do, 5 fois',
        'Essaie la Variante 2 (répétitions) : chaque note deux fois',
        'Essaie la Variante 3 (notes tenues) : compte jusqu\'à 2 pour chaque note',
        'Invente ta propre variante en utilisant les 5 notes !',
        'Par exemple : Do-Mi-Ré-Fa-Mi-Sol ou n\'importe quelle combinaison'
      ]
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `
        <h2>Nuances : Fort et Doux</h2>
        <p>
          La musique n'est pas juste des notes - c'est aussi l'<strong>expression</strong> !
          Apprenons à varier le volume.
        </p>
        <p>
          <strong>Piano (p)</strong> = doux, délicat<br>
          <strong>Forte (f)</strong> = fort, puissant
        </p>
        <p>
          Pour jouer plus fort : frappe les touches avec plus d'énergie<br>
          Pour jouer plus doux : frappe délicatement, comme si les touches étaient fragiles
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '14',
    type: 'practice',
    data: {
      title: 'Exercice 6 : Dynamiques',
      description: 'Ajoute de l\'expression à ta mélodie',
      steps: [
        'Joue le motif complet (Do-Ré-Mi-Fa-Sol-Fa-Mi-Ré-Do) TRÈS FORT',
        'Rejoue exactement le même motif TRÈS DOUX',
        'Essaie un crescendo : commence doux et deviens de plus en plus fort',
        'Essaie un diminuendo : commence fort et deviens de plus en plus doux',
        'Joue : Do (fort) - Ré (doux) - Mi (fort) - Fa (doux) - Sol (fort)...'
      ]
    }
  },
  {
    id: '15',
    type: 'text',
    data: {
      content: `
        <h2>Challenge final : "Ode à la joie"</h2>
        <p>
          Félicitations ! Tu es maintenant prêt à jouer le début d'un vrai morceau :
          <strong>"Ode à la joie"</strong> de Beethoven (version simplifiée).
        </p>
        <p>
          <strong>Notes à jouer :</strong><br>
          Mi - Mi - Fa - Sol - Sol - Fa - Mi - Ré - Do - Do - Ré - Mi - Mi - Ré - Ré
        </p>
        <p>
          <strong>Doigtés :</strong><br>
          3 - 3 - 4 - 5 - 5 - 4 - 3 - 2 - 1 - 1 - 2 - 3 - 3 - 2 - 2
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '16',
    type: 'practice',
    data: {
      title: 'Exercice final : Ode à la joie',
      description: 'Joue ton premier morceau célèbre !',
      steps: [
        'Apprends la première partie : Mi-Mi-Fa-Sol-Sol-Fa-Mi-Ré',
        'Répète cette partie 5 fois jusqu\'à la mémoriser',
        'Apprends la deuxième partie : Do-Do-Ré-Mi-Mi-Ré-Ré',
        'Répète cette partie 5 fois',
        'Combine les deux parties pour jouer le morceau complet',
        'Ajoute des nuances : joue la première partie forte, la seconde douce',
        'Bravo ! Tu viens de jouer du Beethoven ! 🎉'
      ]
    }
  },
  {
    id: '17',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif</h2>
        <p>Incroyable progression ! Tu as appris :</p>
        <ul>
          <li>✅ Le motif ascendant (Do-Ré-Mi-Fa-Sol)</li>
          <li>✅ Le motif descendant (Sol-Fa-Mi-Ré-Do)</li>
          <li>✅ À jouer avec un rythme régulier</li>
          <li>✅ Les variantes mélodiques (sauts, répétitions)</li>
          <li>✅ Les nuances (fort et doux)</li>
          <li>✅ Ton premier morceau célèbre : Ode à la joie !</li>
        </ul>
        <p>
          <strong>Pratique quotidienne recommandée :</strong> 10 minutes par jour
          sur ces exercices pendant une semaine avant de passer à la leçon suivante.
        </p>
        <p>
          Dans la prochaine leçon, nous allons apprendre les <strong>motifs de la main gauche</strong>
          et les accords de base ! 🎵
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
      instructions: "Rejoue ton premier motif main droite. Joue Do, Ré, Mi sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'D', 'E']
    }
  }
]

export default function Lecon3Page() {
  return (
    <LessonTemplate
      levelId={1}
      lessonNumber={3}
      title="Premier motif main droite"
      duration={12}
      objectives={[
        'Jouer le motif ascendant Do-Ré-Mi-Fa-Sol',
        'Jouer le motif descendant Sol-Fa-Mi-Ré-Do',
        'Maintenir un rythme régulier',
        'Varier les dynamiques (fort/doux)',
        'Jouer "Ode à la joie" de Beethoven'
      ]}
      content={content}
      previousLesson={{
        title: 'Position des mains',
        href: '/parcours/niveau-1/lecon-2'
      }}
      nextLesson={{
        title: 'Premier motif main gauche',
        href: '/parcours/niveau-1/lecon-4'
      }}
    />
  )
}
