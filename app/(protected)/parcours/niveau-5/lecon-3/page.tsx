import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>La polyphonie : plusieurs voix indépendantes 🎼</h2>
        <p>
          La <strong>polyphonie</strong> est l'art de jouer plusieurs mélodies indépendantes en même temps.
          C'est comme diriger un orchestre où chaque main (et parfois chaque doigt) joue une voix différente.
        </p>
        <p>
          Le <strong>contrepoint</strong> est la technique de composition qui régit comment ces voix
          interagissent harmonieusement. C'est la base de la musique de Bach et de nombreux compositeurs classiques.
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
        <h2>Les voix indépendantes</h2>
        <p>
          En polyphonie, chaque voix a sa propre personnalité :
        </p>
        <ul>
          <li><strong>Soprano (voix supérieure)</strong> : Souvent la mélodie principale</li>
          <li><strong>Alto (voix intermédiaire)</strong> : Soutien harmonique</li>
          <li><strong>Ténor</strong> : Ligne mélodique secondaire</li>
          <li><strong>Basse</strong> : Fondation harmonique et rythmique</li>
        </ul>
        <p>
          L'objectif : faire entendre chaque voix clairement tout en créant une harmonie d'ensemble.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Deux voix simples',
      description: 'Développe l\'indépendance des mains',
      steps: [
        'Main droite : joue Do-Ré-Mi-Fa-Sol (montante)',
        'Main gauche : joue Do-Si-La-Sol-Fa (descendante)',
        'Les deux en même temps, lentement',
        'Écoute les deux lignes séparément dans ta tête',
        'Accentue d\'abord la main droite, puis la main gauche',
        'Répète jusqu\'à ce que les deux voix soient claires'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Le contrepoint species : première espèce</h2>
        <p>
          Le <strong>contrepoint en première espèce</strong> est la forme la plus simple :
          note contre note (note vs note).
        </p>
        <p>
          <strong>Règles de base</strong> :
        </p>
        <ul>
          <li>Chaque note d'une voix correspond à une note de l'autre voix</li>
          <li>Les intervalles doivent être consonants (3ces, 5tes, 6tes, 8ves)</li>
          <li>Éviter les intervalles parallèles de 5te et 8ve</li>
          <li>Le mouvement contraire est préférable</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice : Contrepoint note contre note',
      description: 'Compose un court passage',
      steps: [
        'Main gauche (cantus firmus) : Do-Do-Sol-Sol-La-La-Sol',
        'Main droite (counterpoint) : Mi-Fa-Si-Do-Do-Fa-Mi',
        'Joue lentement, écoute les intervalles',
        'Vérifie : pas de 5tes ou 8ves parallèles',
        'Analyse : mouvement contraire, oblique ou similaire ?',
        'Expérimente avec d\'autres notes pour la main droite'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Le canon : imitation parfaite</h2>
        <p>
          Un <strong>canon</strong> est une forme de contrepoint où une voix imite exactement
          une autre voix après un délai. "Frère Jacques" est un canon célèbre !
        </p>
        <p>
          <strong>Types de canons</strong> :
        </p>
        <ul>
          <li><strong>Canon à l'unisson</strong> : L'imitation commence sur la même note</li>
          <li><strong>Canon à la quinte</strong> : L'imitation commence une quinte plus haut</li>
          <li><strong>Canon par mouvement contraire</strong> : L'imitation est inversée</li>
        </ul>
      `,
      variant: 'tip'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Canon simple',
      description: 'Joue un canon à l\'unisson',
      steps: [
        'Mélodie : Do-Ré-Mi-Fa-Mi-Ré-Do',
        'Main gauche : commence la mélodie',
        'Main droite : attend 2 temps, puis joue la même mélodie',
        'Les deux mains jouent la même chose, décalées !',
        'Répète 5 fois en gardant le timing précis',
        'C\'est le principe de "Frère Jacques" !'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>La fugue : le sommet de la polyphonie</h2>
        <p>
          La <strong>fugue</strong> est la forme la plus complexe de contrepoint. Elle commence
          avec un thème (le sujet) qui est ensuite imité et développé par différentes voix.
        </p>
        <p>
          <strong>Structure d'une fugue</strong> :
        </p>
        <ul>
          <li><strong>Exposition</strong> : Chaque voix présente le sujet</li>
          <li><strong>Développement</strong> : Le sujet est transformé, combiné</li>
          <li><strong>Strette</strong> : Les voix se superposent de plus en plus</li>
          <li><strong>Pédale</strong> : Note tenue à la basse pendant que les voix continuent</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Analyse d\'une fugue de Bach',
      description: 'Écoute et décompose',
      steps: [
        'Écoute la Fugue en Do majeur BWV 846 de Bach',
        'Identifie le sujet (première mélodie)',
        'Repère quand le sujet revient dans différentes voix',
        'Note les transformations : inversion, augmentation',
        'Essaie de jouer juste le sujet au piano',
        'Apprécie la complexité magistrale de Bach !'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Techniques d'écriture polyphonique</h2>
        <p>
          Pour écrire ou improviser en polyphonie :
        </p>
        <ul>
          <li><strong>Mouvement contraire</strong> : Les voix vont dans des directions opposées</li>
          <li><strong>Mouvement oblique</strong> : Une voix bouge, l'autre reste fixe</li>
          <li><strong>Mouvement similaire</strong> : Les voix vont dans la même direction</li>
          <li><strong>Mouvement parallèle</strong> : Les voix gardent le même intervalle (à éviter généralement)</li>
        </ul>
        <p>
          Le mouvement contraire crée l'indépendance, le mouvement parallèle crée l'unité.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice : Compose une courte invention',
      description: 'Crée ta propre pièce polyphonique',
      steps: [
        'Invente un motif simple de 4 notes (ex: Do-Ré-Fa-Mi)',
        'Main gauche : joue ce motif',
        'Main droite : réponds avec un motif complémentaire',
        'Développe : fais monter le motif, le descendre, l\'inverser',
        'Crée 8 mesures de musique polyphonique',
        'Enregistre-toi et écoute : on entend bien les deux voix ?'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Application au répertoire moderne</h2>
        <p>
          La polyphonie n'est pas seulement pour la musique baroque ! On la trouve partout :
        </p>
        <ul>
          <li><strong>Jazz</strong> : Les voix de chaque instrument créent du contrepoint</li>
          <li><strong>Film</strong> : Les thèmes se superposent pour créer émotion</li>
          <li><strong>Pop</strong> : Les harmonies vocales sont du contrepoint</li>
          <li><strong>Piano solo</strong> : Tu peux créer l'illusion de plusieurs musiciens</li>
        </ul>
        <p>
          Maîtriser la polyphonie te donne un contrôle total sur la texture musicale !
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
        <p>Dans cette leçon, tu as exploré :</p>
        <ul>
          <li>✅ Le concept de polyphonie et les voix indépendantes</li>
          <li>✅ Les règles du contrepoint en première espèce</li>
          <li>✅ Les canons et leur construction</li>
          <li>✅ La structure des fugues</li>
          <li>✅ Comment composer en style polyphonique</li>
        </ul>
        <p>
          La polyphonie développe ton oreille harmonique et ta capacité à penser
          musicalement sur plusieurs niveaux simultanés. Continue à étudier Bach -
          c'est le maître absolu de cet art !
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon3Page() {
  return (
    <LessonTemplate
      levelId={5}
      lessonNumber={3}
      title="Polyphonie et contrepoint"
      duration={24}
      objectives={[
        'Comprendre la polyphonie et les voix indépendantes',
        'Appliquer les règles du contrepoint',
        'Jouer et composer des canons',
        'Analyser la structure d\'une fugue',
        'Créer sa propre pièce polyphonique'
      ]}
      content={content}
      previousLesson={{
        title: 'Accords complexes et voicings',
        href: '/parcours/niveau-5/lecon-2'
      }}
      nextLesson={{
        title: 'Rythmes avancés et polyrythmies',
        href: '/parcours/niveau-5/lecon-4'
      }}
    />
  )
}
