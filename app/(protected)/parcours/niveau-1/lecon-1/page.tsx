import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Bienvenue à ta première leçon de piano ! 🎹</h2>
        <p>
          Aujourd'hui, tu vas découvrir l'anatomie du clavier. C'est la base essentielle
          pour comprendre comment fonctionne le piano et comment naviguer sur les touches.
        </p>
        <p>
          Ne t'inquiète pas si tout semble nouveau - à la fin de cette leçon, tu sauras
          identifier toutes les notes et comprendre la structure du clavier !
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
        <h2>Les 88 touches du piano</h2>
        <p>
          Un piano standard possède <strong>88 touches</strong> :
          <strong>52 touches blanches</strong> et <strong>36 touches noires</strong>.
        </p>
        <p>
          Mais ne panique pas ! Ces touches suivent un motif qui se répète encore et encore.
          Une fois que tu connais ce motif, tu peux naviguer sur tout le clavier.
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
        <h2>Les 7 notes fondamentales</h2>
        <p>
          Les touches blanches correspondent aux <strong>7 notes naturelles</strong> :
        </p>
        <ul>
          <li><strong>Do</strong> (C en notation internationale)</li>
          <li><strong>Ré</strong> (D)</li>
          <li><strong>Mi</strong> (E)</li>
          <li><strong>Fa</strong> (F)</li>
          <li><strong>Sol</strong> (G)</li>
          <li><strong>La</strong> (A)</li>
          <li><strong>Si</strong> (B)</li>
        </ul>
        <p>
          Après <strong>Si</strong>, on revient à <strong>Do</strong> et le cycle recommence.
          C'est ce qu'on appelle une <strong>octave</strong>.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Comment trouver le Do ?</h2>
        <p>
          Le <strong>Do</strong> est la note la plus importante à repérer car elle sert
          de point de référence pour toutes les autres notes.
        </p>
        <p>
          <strong>Astuce visuelle :</strong> Le Do se trouve toujours juste à gauche
          d'un groupe de <strong>2 touches noires</strong>.
        </p>
        <p>
          Sur le clavier, tu verras des groupes alternés de 2 et 3 touches noires.
          Le Do est toujours la touche blanche qui précède les 2 noires.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice pratique : Trouve tous les Do',
      description:
        'Maintenant, va à ton piano (ou clavier) et applique ce que tu viens d\'apprendre !',
      steps: [
        'Regarde ton clavier et repère les groupes de 2 touches noires',
        'Pour chaque groupe de 2 touches noires, trouve la touche blanche juste à gauche',
        'Appuie sur chacune de ces touches - ce sont tous des Do !',
        'Compte combien de Do tu as trouvé (sur un clavier 88 touches, il y en a 8)'
      ]
    }
  },
  {
    id: '5b',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'Piano Interactif : Trouve les Do',
      instructions: 'Clique sur toutes les touches Do (Do) sur le piano ci-dessous. Utilise ce que tu viens d\'apprendre : cherche les groupes de 2 touches noires !',
      targetNotes: ['C']
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Les autres notes blanches</h2>
        <p>
          Une fois que tu as trouvé un <strong>Do</strong>, les autres notes suivent
          dans l'ordre alphabétique :
        </p>
        <ul>
          <li><strong>Do</strong> → juste avant les 2 noires</li>
          <li><strong>Ré</strong> → entre les 2 noires (la première)</li>
          <li><strong>Mi</strong> → entre les 2 noires (la deuxième)</li>
          <li><strong>Fa</strong> → juste avant les 3 noires</li>
          <li><strong>Sol</strong> → entre les 3 noires (la première)</li>
          <li><strong>La</strong> → entre les 3 noires (la deuxième)</li>
          <li><strong>Si</strong> → entre les 3 noires (la troisième)</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '6b',
    type: 'interactive',
    data: {
      component: 'quiz',
      question: 'Comment repère-t-on le Do sur le clavier ?',
      options: [
        'C\'est la touche blanche juste à gauche d\'un groupe de 2 touches noires',
        'C\'est la touche blanche juste à gauche d\'un groupe de 3 touches noires',
        'C\'est la touche blanche entre les 2 touches noires',
        'C\'est la première touche blanche du clavier'
      ],
      correctAnswer: 0,
      explanation: 'Exactement ! Le Do se trouve toujours juste à gauche d\'un groupe de 2 touches noires. C\'est ton point de repère principal sur le clavier.'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Joue ta première gamme',
      description:
        'Une gamme, c\'est simplement jouer toutes les notes dans l\'ordre. Essayons !',
      steps: [
        'Trouve un Do au milieu de ton clavier',
        'En partant de ce Do, joue chaque touche blanche vers la droite',
        'Nomme chaque note à voix haute : "Do, Ré, Mi, Fa, Sol, La, Si, Do"',
        'Bravo ! Tu viens de jouer ta première gamme de Do majeur 🎉',
        'Essaie maintenant de la jouer dans l\'autre sens (du Do aigu au Do grave)'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>Les touches noires : les altérations</h2>
        <p>
          Les <strong>touches noires</strong> représentent les notes altérées,
          appelées <strong>dièses (#)</strong> et <strong>bémols (♭)</strong>.
        </p>
        <p>
          Chaque touche noire a 2 noms possibles :
        </p>
        <ul>
          <li>Un <strong>dièse</strong> élève la note d'un demi-ton (ex: Do#)</li>
          <li>Un <strong>bémol</strong> abaisse la note d'un demi-ton (ex: Ré♭)</li>
        </ul>
        <p>
          Par exemple, la touche noire entre Do et Ré peut s'appeler <strong>Do#</strong>
          (Do dièse) ou <strong>Ré♭</strong> (Ré bémol) - c'est la même touche !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Important à retenir</h2>
        <p>
          Pour l'instant, concentre-toi sur les <strong>touches blanches</strong>.
          Nous allons travailler avec elles dans les prochaines leçons.
        </p>
        <p>
          Les touches noires viendront plus tard, une fois que tu seras à l'aise
          avec les notes naturelles.
        </p>
      `,
      variant: 'warning'
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Qu'est-ce qu'une octave ?</h2>
        <p>
          Une <strong>octave</strong> est l'intervalle entre un Do et le Do suivant.
          C'est un cycle complet de toutes les 7 notes (Do, Ré, Mi, Fa, Sol, La, Si).
        </p>
        <p>
          Le mot "octave" vient du latin "octavus" qui signifie "huitième", car si tu
          comptes le Do de départ, il y a 8 notes au total.
        </p>
        <p>
          Sur un piano de 88 touches, il y a environ <strong>7 octaves complètes</strong>
          plus quelques notes supplémentaires.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Le Do central (Do 3)</h2>
        <p>
          Sur un piano standard, il existe un <strong>Do particulièrement important</strong>
          appelé le <strong>Do central</strong> ou <strong>Do 3</strong>.
        </p>
        <p>
          C'est le Do qui se trouve approximativement au milieu du clavier. Il sert de
          point de référence universel pour les pianistes.
        </p>
        <p>
          <strong>Comment le trouver :</strong> Si ton piano a 88 touches, le Do central
          est le 4ème Do en partant de la gauche.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Exercice final : Test de reconnaissance',
      description:
        'Vérifie que tu as bien compris l\'anatomie du clavier !',
      steps: [
        'Trouve le Do central sur ton clavier',
        'À partir du Do central, identifie et joue : Ré, Mi, Fa, Sol, La, Si',
        'Trouve tous les Mi sur ton clavier (indice : ils sont juste après les 2 noires)',
        'Trouve tous les Sol sur ton clavier (indice : première noire dans le groupe de 3)',
        'Joue une gamme complète (Do à Do) à 3 endroits différents du clavier'
      ]
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif</h2>
        <p>Félicitations ! Tu connais maintenant :</p>
        <ul>
          <li>✅ Les 7 notes naturelles (Do, Ré, Mi, Fa, Sol, La, Si)</li>
          <li>✅ Comment trouver le Do en repérant les groupes de 2 touches noires</li>
          <li>✅ Ce qu'est une octave et le Do central</li>
          <li>✅ La structure répétitive du clavier</li>
          <li>✅ L'existence des touches noires (dièses et bémols)</li>
        </ul>
        <p>
          C'est une excellente base ! Dans la prochaine leçon, nous allons apprendre
          la <strong>position correcte des mains</strong> sur le clavier.
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon1Page() {
  return (
    <LessonTemplate
      levelId={1}
      lessonNumber={1}
      title="Anatomie du clavier"
      duration={8}
      objectives={[
        'Comprendre la structure du clavier (88 touches)',
        'Identifier les 7 notes naturelles (Do, Ré, Mi, Fa, Sol, La, Si)',
        'Repérer le Do en utilisant les groupes de touches noires',
        'Comprendre le concept d\'octave',
        'Localiser le Do central sur le piano'
      ]}
      content={content}
      nextLesson={{
        title: 'Position des mains',
        href: '/parcours/niveau-1/lecon-2'
      }}
    />
  )
}
