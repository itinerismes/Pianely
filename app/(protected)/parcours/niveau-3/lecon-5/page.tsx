import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>La pédale : l'âme du piano</h2>
        <p>
          La <strong>pédale de sustain</strong> (ou pédale forte) est la pédale
          de droite du piano. C'est l'un des éléments les plus puissants et
          caractéristiques du piano moderne.
        </p>
        <p>
          Quand tu appuies sur cette pédale, tous les étouffoirs se soulèvent
          simultanément, permettant à <strong>toutes les cordes de vibrer librement</strong>.
          Le résultat : un son riche, résonant, qui "respire".
        </p>
        <p>
          Sans la pédale de sustain, le piano sonnerait sec et limité. Avec elle,
          il devient l'instrument expressif et majestueux qu'on connaît. Elle
          permet de créer des nappes sonores, de lier des notes impossibles à
          connecter avec les doigts seuls, et d'enrichir la texture musicale.
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
        <h2>Comment utiliser la pédale de base</h2>
        <p>
          <strong>Position du pied :</strong>
        </p>
        <ul>
          <li>Place la <strong>plante du pied</strong> (pas les orteils) sur la pédale</li>
          <li>Le talon reste au sol en permanence</li>
          <li>Seul l'avant du pied bouge, comme une charnière</li>
          <li>Le mouvement vient de la cheville, pas de toute la jambe</li>
        </ul>
        <p>
          <strong>Deux positions :</strong>
        </p>
        <ul>
          <li><strong>Pédale levée</strong> : Son normal, notes s'arrêtent quand tu relâches</li>
          <li><strong>Pédale enfoncée</strong> : Son prolongé, toutes les cordes vibrent</li>
        </ul>
        <p>
          Important : Ne pousse pas fort ! La pédale n'a besoin que d'une légère
          pression pour être complètement enfoncée.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Découvrir l\'effet de la pédale',
      description: 'Comprends ce que fait la pédale',
      steps: [
        'Joue un accord de Do majeur (Do-Mi-Sol) SANS pédale',
        'Relâche les touches : le son s\'arrête immédiatement',
        'Maintenant, ENFONCE la pédale (avant de jouer)',
        'Joue l\'accord de Do majeur',
        'Relâche les touches MAIS garde la pédale enfoncée',
        'Le son continue ! Les cordes vibrent librement',
        'Relâche la pédale : le son s\'arrête',
        'Répète 5 fois pour bien sentir la différence'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>La technique du pédalage syncopé</h2>
        <p>
          La technique la plus importante et la plus utilisée est le
          <strong>pédalage syncopé</strong> (ou "après-coup"). C'est contre-intuitif
          mais essentiel !
        </p>
        <p>
          <strong>Ordre des opérations :</strong>
        </p>
        <ol>
          <li>Joue la note ou l'accord (pédale levée)</li>
          <li>IMMÉDIATEMENT après avoir joué, enfonce la pédale</li>
          <li>Joue la note suivante</li>
          <li>PENDANT que la nouvelle note sonne, relâche PUIS réenfonce la pédale</li>
          <li>Répète ce mouvement "relâcher-enfoncer" à chaque changement d'harmonie</li>
        </ol>
        <p>
          Pourquoi cette technique ? Elle permet de garder le son pur :
          tu changes la pédale au moment où la nouvelle harmonie arrive,
          évitant ainsi les mélanges cacophoniques.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Visualisation du pédalage syncopé</h2>
        <p>
          Imagine ce timing précis :
        </p>
        <p>
          <strong>Main :</strong> Joue Do ↓ ............... Joue Mi ↓<br>
          <strong>Pédale :</strong> ......... Enfonce ↓ ... ↑Relâche→Réenfonce ↓
        </p>
        <p>
          La pédale descend <strong>après</strong> que tu aies joué la première note,
          et change (monte puis redescend) <strong>pendant</strong> que la deuxième
          note sonne déjà.
        </p>
        <p>
          C'est "syncopé" parce que le changement de pédale n'est pas en même
          temps que la frappe de la touche, mais décalé (comme une syncope musicale).
        </p>
        <p>
          Au début, c'est déroutant car on a l'instinct d'appuyer sur la pédale
          EN MÊME TEMPS que les touches. Mais avec la pratique, ça devient naturel !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Pédalage syncopé sur deux notes',
      description: 'Maîtrise le timing du pédalage',
      steps: [
        'Joue Do (pédale levée)',
        'IMMÉDIATEMENT APRÈS, enfonce la pédale',
        'Le Do continue de sonner grâce à la pédale',
        'Joue Mi (la pédale est toujours enfoncée)',
        'PENDANT que Mi sonne, fais : relâche pédale → réenfonce immédiatement',
        'Ce mouvement "relâche-réenfonce" doit être fluide et rapide',
        'Répète : Do→Mi→Sol→Do avec changement de pédale à chaque note',
        'L\'objectif : transition fluide sans silence ni mélange sale'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Quand utiliser la pédale</h2>
        <p>
          La pédale n'est pas toujours appropriée. Voici quand l'utiliser :
        </p>
        <p>
          <strong>✅ Utilise la pédale pour :</strong>
        </p>
        <ul>
          <li>Lier des notes impossibles à connecter avec les doigts seuls</li>
          <li>Enrichir le son dans les passages lents et expressifs</li>
          <li>Créer des résonances et des couleurs harmoniques</li>
          <li>Soutenir les basses pendant que la main droite joue une mélodie</li>
        </ul>
        <p>
          <strong>❌ N'utilise PAS la pédale pour :</strong>
        </p>
        <ul>
          <li>Les passages rapides et articulés (scales, passages techniques)</li>
          <li>Les staccatos (la pédale annule l'effet staccato)</li>
          <li>Les passages polyphoniques complexes avec plusieurs voix indépendantes</li>
          <li>"Cacher" les erreurs ou les transitions maladroites</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>La demi-pédale : contrôle avancé</h2>
        <p>
          La <strong>demi-pédale</strong> (ou pédale partielle) est une technique
          avancée où tu n'enfonces pas complètement la pédale.
        </p>
        <p>
          <strong>Avantages de la demi-pédale :</strong>
        </p>
        <ul>
          <li>Moins de résonance = son plus clair</li>
          <li>Contrôle subtil de la quantité de sustain</li>
          <li>Permet de pédaler dans des passages plus denses</li>
          <li>Crée des nuances de couleur sonore</li>
        </ul>
        <p>
          <strong>Technique :</strong> Au lieu d'enfoncer la pédale jusqu'au bout,
          ne l'enfonce qu'à moitié ou aux trois-quarts. Les étouffoirs touchent
          légèrement les cordes, laissant vibrer certaines harmoniques mais pas toutes.
        </p>
        <p>
          C'est très subtil et demande une grande sensibilité. À pratiquer une
          fois que le pédalage syncopé est maîtrisé !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Explorer la demi-pédale',
      description: 'Découvre les nuances de la pédale partielle',
      steps: [
        'Joue un accord de Do majeur (Do-Mi-Sol)',
        'Enfonce la pédale COMPLÈTEMENT : écoute la résonance maximale',
        'Relâche et rejoue l\'accord',
        'Cette fois, enfonce la pédale seulement à MOITIÉ',
        'Compare : le son est plus contrôlé, moins "noyé"',
        'Expérimente différents degrés : 1/4, 1/2, 3/4, complet',
        'Chaque degré a sa couleur unique',
        'Note : sur certains pianos numériques, cet effet est limité'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Exercice musical : "Au clair de la lune" avec pédale</h2>
        <p>
          Appliquons la pédale à un morceau que tu connais. Voici comment
          pédaler "Au clair de la lune" :
        </p>
        <p>
          <strong>Phrase 1 :</strong> Do-Do-Do-Ré-Mi-Ré
        </p>
        <ul>
          <li>Joue Do, enfonce pédale</li>
          <li>Les 3 Do suivants : garde la pédale (c'est la même harmonie)</li>
          <li>Sur Ré : change la pédale (nouvelle harmonie)</li>
          <li>Mi : garde la pédale</li>
          <li>Dernier Ré : change la pédale</li>
        </ul>
        <p>
          Règle générale : <strong>Change la pédale quand l'harmonie change</strong>,
          pas à chaque note. Cela crée un son plus riche sans devenir boueux.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice : "Au clair de la lune" pédalée',
      description: 'Applique le pédalage syncopé à un morceau complet',
      steps: [
        'Joue "Au clair de la lune" SANS pédale d\'abord (révision)',
        'Identifie les changements d\'harmonie (Do→Sol→Do, etc.)',
        'Rejoue en ajoutant la pédale, changement à chaque nouvelle harmonie',
        'Utilise le pédalage syncopé : change PENDANT la nouvelle note',
        'Va TRÈS lentement au début',
        'Concentre-toi sur le timing : pédale après la note, change pendant',
        'Répète 10 fois jusqu\'à ce que ce soit fluide',
        'Compare avec/sans pédale : quelle richesse supplémentaire !'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Les erreurs courantes de pédalage</h2>
        <p>
          Voici les pièges à éviter :
        </p>
        <ul>
          <li><strong>Pédaler tout le temps :</strong> Crée un son boueux et confus</li>
          <li><strong>Changer à chaque note :</strong> Perd l'intérêt de la pédale, son haché</li>
          <li><strong>Enfoncer en même temps que les touches :</strong> Crée des mélanges sales</li>
          <li><strong>Oublier de relâcher :</strong> Les harmonies s'accumulent en cacophonie</li>
          <li><strong>Utiliser trop de force :</strong> Crée un bruit de pédale</li>
          <li><strong>Lever le talon du sol :</strong> Perte de contrôle et fatigue rapide</li>
        </ul>
        <p>
          La pédale est un art subtil. Même les pianistes professionnels travaillent
          constamment leur technique de pédalage. C'est un apprentissage permanent !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `
        <h2>Notation de la pédale sur les partitions</h2>
        <p>
          Sur les partitions, le pédalage est souvent indiqué par des symboles :
        </p>
        <ul>
          <li><strong>Ped.</strong> ou <strong>𝄆</strong> : Enfoncer la pédale</li>
          <li><strong>*</strong> ou <strong>𝄇</strong> : Relâcher la pédale</li>
          <li><strong>Ligne avec crochet</strong> : Ligne continue = pédale enfoncée, fin de ligne = relâcher</li>
        </ul>
        <p>
          Cependant, les indications de pédale sont souvent absentes ou approximatives.
          Un bon pianiste apprend à décider lui-même où pédaler en fonction :
        </p>
        <ul>
          <li>De l'harmonie (change à chaque changement d'accord)</li>
          <li>De l'acoustique (une grande salle demande moins de pédale)</li>
          <li>Du style (romantique = beaucoup, baroque = peu ou pas)</li>
          <li>De son goût artistique personnel</li>
        </ul>
        <p>
          Écoute beaucoup d'enregistrements et observe comment les maîtres utilisent
          la pédale. C'est une signature personnelle de chaque interprète !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: 'piano-exercice',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'À toi de jouer 🎹',
      instructions: "Tiens l'accord de Do avec la pédale de sustain. Joue Do, Mi, Sol sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'E', 'G']
    }
  }
]

export default function Lecon5Page() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={5}
      title="La pédale de sustain"
      duration={15}
      objectives={[
        'Comprendre la fonction de la pédale de sustain',
        'Maîtriser le pédalage syncopé (après-coup)',
        'Savoir quand utiliser et ne pas utiliser la pédale',
        'Appliquer la pédale dans un morceau simple'
      ]}
      content={content}
      previousLesson={{
        title: 'Techniques d\'articulation',
        href: '/parcours/niveau-3/lecon-4'
      }}
      nextLesson={{
        title: 'Morceaux célèbres faciles',
        href: '/parcours/niveau-3/lecon-6'
      }}
    />
  )
}
