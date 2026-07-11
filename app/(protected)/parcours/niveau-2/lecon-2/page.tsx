import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Les doigtés au piano 🖐️</h2>
        <p>
          Tu as appris la position des mains dans la leçon précédente. Maintenant, nous allons
          voir comment <strong>numéroter et utiliser correctement tes doigts</strong>.
        </p>
        <p>
          Le doigté est essentiel pour jouer de manière fluide et efficace. C'est comme choisir
          le bon chemin sur une carte : un bon doigté rend tout plus facile !
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
        <h2>La numérotation des doigts</h2>
        <p>
          Chaque doigt a un numéro, et c'est universel dans le monde entier :
        </p>
        <ul>
          <li><strong>1 = Pouce</strong></li>
          <li><strong>2 = Index</strong></li>
          <li><strong>3 = Majeur</strong></li>
          <li><strong>4 = Annulaire</strong></li>
          <li><strong>5 = Auriculaire (petit doigt)</strong></li>
        </ul>
        <p>
          Cette numérotation est la même pour les deux mains. Quand tu vois un "3" sur une
          partition, cela signifie toujours "majeur", que ce soit main droite ou gauche.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Mémoriser les numéros',
      description: 'Associe chaque doigt à son numéro',
      steps: [
        'Lève ta main droite devant toi',
        'Pointe chaque doigt et dis son numéro à voix haute',
        'Répète 3 fois pour la main droite',
        'Fais la même chose avec la main gauche',
        'Maintenant, dis un numéro au hasard et lève le doigt correspondant',
        'Répète jusqu\'à ce que ce soit automatique'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Pourquoi le doigté est important ?</h2>
        <p>
          Un bon doigté permet de :
        </p>
        <ul>
          <li>Jouer <strong>plus vite</strong> et avec plus de fluidité</li>
          <li>Éviter les <strong>mouvements inutiles</strong> de la main</li>
          <li>Faciliter les <strong>passages difficiles</strong></li>
          <li>Maintenir une <strong>bonne position</strong> de main</li>
          <li>Éviter la <strong>fatigue</strong> et les tensions</li>
        </ul>
        <p>
          Utiliser le mauvais doigt, c'est comme essayer d'écrire avec le mauvais crayon :
          ça fonctionne, mais c'est beaucoup plus difficile !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Force et indépendance des doigts</h2>
        <p>
          Tous les doigts ne sont pas égaux :
        </p>
        <ul>
          <li><strong>Pouce (1)</strong> : Fort mais moins mobile latéralement</li>
          <li><strong>Index (2)</strong> : Fort et très mobile</li>
          <li><strong>Majeur (3)</strong> : Le plus fort, mais lié à l'annulaire</li>
          <li><strong>Annulaire (4)</strong> : Le plus faible et le moins indépendant</li>
          <li><strong>Auriculaire (5)</strong> : Faible mais important pour les accords</li>
        </ul>
        <p>
          L'entraînement va développer la force et l'indépendance de chaque doigt,
          surtout l'annulaire et l'auriculaire !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Indépendance des doigts',
      description: 'Entraîne chaque doigt individuellement',
      steps: [
        'Place ta main droite en position (pouce sur Do)',
        'Garde les 5 doigts posés sur les touches',
        'Lève seulement le doigt 1 (pouce) et appuie, répète 5 fois',
        'Fais de même avec chaque doigt : 2, 3, 4, 5',
        'Les autres doigts doivent rester immobiles sur les touches',
        'Répète l\'exercice avec la main gauche'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Règles de base du doigté</h2>
        <p>
          Voici quelques principes généraux :
        </p>
        <ul>
          <li><strong>Utilisez les doigts forts pour les notes importantes</strong> (1, 2, 3)</li>
          <li><strong>Évitez d'utiliser le pouce sur les touches noires</strong> (sauf nécessité)</li>
          <li><strong>Gardez la main proche du clavier</strong> pour changer de position</li>
          <li><strong>Anticipez</strong> : Regardez les prochaines notes pour choisir le bon doigt</li>
          <li><strong>Soyez cohérent</strong> : Utilisez toujours le même doigté pour le même passage</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Montée avec doigté logique',
      description: 'Joue une gamme en utilisant le bon doigté',
      steps: [
        'Main droite : Do(1) - Ré(2) - Mi(3) - Fa(4) - Sol(5)',
        'Répète 10 fois lentement',
        'Maintenant main gauche : Do(5) - Ré(4) - Mi(3) - Fa(2) - Sol(1)',
        'Répète 10 fois lentement',
        'Attention : Utilise bien les doigts indiqués entre parenthèses !',
        'Vérifie que tes doigts restent arrondis'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Le passage du pouce</h2>
        <p>
          Pour jouer plus de 5 notes consécutives, il faut faire <strong>passer le pouce</strong>
          sous la main. C'est une technique fondamentale !
        </p>
        <p>
          Par exemple, pour monter au-delà de Sol :
        </p>
        <ul>
          <li>Do(1) - Ré(2) - Mi(3)</li>
          <li>Le pouce passe sous la main et se place sur Fa(1)</li>
          <li>Puis Sol(2) - La(3) - Si(4) - Do(5)</li>
        </ul>
        <p>
          Nous pratiquerons cette technique en détail dans les prochaines leçons.
          Pour l'instant, concentre-toi sur les 5 doigts !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Erreurs courantes</h2>
        <p>
          Attention à ces mauvaises habitudes :
        </p>
        <ul>
          <li>❌ Utiliser toujours les mêmes doigts (1, 2, 3) et ignorer 4 et 5</li>
          <li>❌ Changer de doigté à chaque fois qu'on joue le même passage</li>
          <li>❌ Lever les doigts trop haut entre les notes</li>
          <li>❌ Tendre les doigts au lieu de les garder arrondis</li>
          <li>❌ Utiliser le pouce sur les touches noires (sauf exception)</li>
        </ul>
      `,
      variant: 'warning'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice final : Gamme complète',
      description: 'Joue la gamme de Do majeur avec le bon doigté',
      steps: [
        'Main droite : 1-2-3 puis pouce sous pour 1-2-3-4-5',
        'Do(1) Ré(2) Mi(3) Fa(1) Sol(2) La(3) Si(4) Do(5)',
        'Descends en inversant : 5-4-3-2-1 puis 3-2-1',
        'Répète 5 fois en montant et descendant',
        'Fais attention à bien utiliser les doigts indiqués',
        'Joue lentement pour l\'instant, la vitesse viendra avec la pratique'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif</h2>
        <p>Dans cette leçon, tu as appris :</p>
        <ul>
          <li>✅ La numérotation des doigts (1 à 5)</li>
          <li>✅ L'importance du bon doigté</li>
          <li>✅ La force relative de chaque doigt</li>
          <li>✅ Les règles de base du doigté</li>
          <li>✅ L'indépendance des doigts</li>
        </ul>
        <p>
          Le doigté peut sembler contraignant au début, mais c'est un outil puissant
          qui va te permettre de jouer de plus en plus facilement. Respecte-le !
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
      instructions: "Monte la gamme avec le bon doigté. Joue Do, Ré, Mi, Fa, Sol, La, Si sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    }
  }
]

export default function Lecon2Page() {
  return (
    <LessonTemplate
      levelId={2}
      lessonNumber={2}
      title="Les doigtés"
      duration={10}
      objectives={[
        'Connaître la numérotation des doigts (1 à 5)',
        'Comprendre l\'importance du bon doigté',
        'Développer l\'indépendance de chaque doigt',
        'Apprendre les règles de base du doigté',
        'Jouer une gamme avec le doigté correct'
      ]}
      content={content}
      previousLesson={{
        title: 'Position des mains',
        href: '/parcours/niveau-2/lecon-1'
      }}
      nextLesson={{
        title: 'Les intervalles',
        href: '/parcours/niveau-2/lecon-3'
      }}
    />
  )
}
