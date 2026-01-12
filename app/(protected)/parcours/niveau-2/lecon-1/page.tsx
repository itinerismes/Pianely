import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Bienvenue au Niveau 2 ! 🎹</h2>
        <p>
          Félicitations d'avoir terminé le Niveau 1 ! Tu connais maintenant l'anatomie du clavier
          et les notes de base. Dans cette leçon, nous allons aborder un aspect crucial :
          <strong>la position correcte des mains</strong>.
        </p>
        <p>
          Une bonne posture et un bon positionnement sont essentiels pour éviter les tensions
          et jouer avec aisance. C'est la fondation de toute ta technique future !
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
        <h2>La posture au piano</h2>
        <p>
          Avant même de poser les mains sur le clavier, ta posture générale est importante :
        </p>
        <ul>
          <li><strong>Assis bien droit</strong> : Ne te penche pas en avant ou en arrière</li>
          <li><strong>Pieds à plat au sol</strong> : Pour maintenir l'équilibre</li>
          <li><strong>Hauteur du siège</strong> : Tes coudes doivent être au même niveau que le clavier</li>
          <li><strong>Distance du clavier</strong> : Environ 20-30 cm entre toi et les touches</li>
          <li><strong>Épaules relaxées</strong> : Ne monte pas les épaules, reste détendu</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Trouve ta position idéale',
      description: 'Prends le temps d\'ajuster ta position avant de continuer',
      steps: [
        'Assieds-toi face au milieu du clavier',
        'Ajuste la hauteur de ton siège (coudes au niveau des touches)',
        'Place tes pieds à plat au sol',
        'Vérifie que tes épaules sont détendues',
        'Respire profondément et sens-toi confortable'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>La forme de la main</h2>
        <p>
          Imagine que tu tiens délicatement une balle de tennis ou une pomme dans ta main.
          C'est la forme naturelle que tes mains doivent avoir au piano.
        </p>
        <p>
          <strong>Caractéristiques d'une bonne position de main :</strong>
        </p>
        <ul>
          <li>Doigts arrondis, légèrement courbés</li>
          <li>Poignet aligné avec l'avant-bras (ni trop haut, ni trop bas)</li>
          <li>Pouces légèrement écartés sur le côté</li>
          <li>Ongles perpendiculaires aux touches</li>
          <li>Paume légèrement creusée (comme si tu tenais une balle)</li>
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
        <h2>Les cinq doigts sur cinq touches</h2>
        <p>
          Position de base appelée la <strong>"position des cinq doigts"</strong> :
        </p>
        <p>
          Place ta main droite avec :
        </p>
        <ul>
          <li><strong>Pouce (1)</strong> sur Do</li>
          <li><strong>Index (2)</strong> sur Ré</li>
          <li><strong>Majeur (3)</strong> sur Mi</li>
          <li><strong>Annulaire (4)</strong> sur Fa</li>
          <li><strong>Auriculaire (5)</strong> sur Sol</li>
        </ul>
        <p>
          C'est la position de départ pour de nombreux exercices et morceaux !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Position des cinq doigts',
      description: 'Place ta main droite dans la position de base',
      steps: [
        'Trouve un Do au milieu du clavier (Do central)',
        'Place ton pouce droit (1) sur ce Do',
        'Place les 4 autres doigts sur Ré, Mi, Fa, Sol',
        'Vérifie que tes doigts sont bien arrondis',
        'Appuie doucement sur chaque touche l\'une après l\'autre',
        'Nomme chaque note à voix haute : "Do, Ré, Mi, Fa, Sol"'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Le mouvement du doigt</h2>
        <p>
          Pour appuyer sur une touche :
        </p>
        <ul>
          <li>Le mouvement vient du <strong>bout du doigt</strong>, pas de la main entière</li>
          <li>Presse la touche avec la <strong>pulpe du doigt</strong> (le coussin, pas l'ongle)</li>
          <li>Le doigt doit <strong>se lever et retomber</strong> comme un petit marteau</li>
          <li>Garde les autres doigts proches des touches (ne les lève pas trop haut)</li>
          <li>Le poignet reste <strong>souple et stable</strong></li>
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
        <h2>Erreurs courantes à éviter</h2>
        <p>
          Attention à ces mauvaises habitudes :
        </p>
        <ul>
          <li>❌ Doigts trop plats sur les touches</li>
          <li>❌ Poignet trop bas ou trop haut</li>
          <li>❌ Épaules tendues et remontées</li>
          <li>❌ Doigts qui volent trop haut au-dessus du clavier</li>
          <li>❌ Se pencher trop près du piano</li>
        </ul>
        <p>
          Si tu ressens une tension ou une douleur, c'est que ta position n'est pas correcte !
        </p>
      `,
      variant: 'warning'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Gamme avec les cinq doigts',
      description: 'Maintenant, jouons une gamme partielle avec notre position',
      steps: [
        'Place ta main droite en position de cinq doigts (pouce sur Do)',
        'Joue Do - Ré - Mi - Fa - Sol (en montant)',
        'Puis Sol - Fa - Mi - Ré - Do (en descendant)',
        'Répète 5 fois en gardant une bonne forme de main',
        'Vérifie dans un miroir que tes doigts restent arrondis',
        'Essaie de jouer lentement et régulièrement'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>La main gauche</h2>
        <p>
          La main gauche suit les mêmes principes ! Place ta main gauche avec :
        </p>
        <ul>
          <li><strong>Auriculaire gauche (5)</strong> sur Do (une octave plus bas)</li>
          <li><strong>Annulaire (4)</strong> sur Ré</li>
          <li><strong>Majeur (3)</strong> sur Mi</li>
          <li><strong>Index (2)</strong> sur Fa</li>
          <li><strong>Pouce (1)</strong> sur Sol</li>
        </ul>
        <p>
          Remarque que les numéros sont inversés car ta main est retournée !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice final : Les deux mains',
      description: 'Entraîne-toi avec chaque main séparément',
      steps: [
        'Place ta main gauche en position (auriculaire sur Do grave)',
        'Joue Do - Ré - Mi - Fa - Sol avec la main gauche',
        'Répète 5 fois',
        'Maintenant, alterne : 5 fois main droite, puis 5 fois main gauche',
        'Vérifie que ta posture reste correcte pour les deux mains',
        'N\'essaie pas encore de jouer les deux mains ensemble !'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif</h2>
        <p>Félicitations ! Tu connais maintenant :</p>
        <ul>
          <li>✅ La bonne posture générale au piano</li>
          <li>✅ La forme correcte de la main (doigts arrondis)</li>
          <li>✅ La position des cinq doigts sur cinq touches</li>
          <li>✅ Comment bouger les doigts pour presser les touches</li>
          <li>✅ Les erreurs courantes à éviter</li>
        </ul>
        <p>
          Cette position est fondamentale. Dans les prochaines leçons, nous allons l'utiliser
          constamment. Prends le temps de bien l'intégrer avant de continuer !
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon1Page() {
  return (
    <LessonTemplate
      levelId={2}
      lessonNumber={1}
      title="Position des mains et posture"
      duration={12}
      objectives={[
        'Adopter une posture correcte au piano',
        'Comprendre la forme naturelle de la main',
        'Placer les cinq doigts sur cinq touches',
        'Connaître les erreurs courantes à éviter',
        'Jouer une gamme partielle avec chaque main'
      ]}
      content={content}
      nextLesson={{
        title: 'Les doigtés',
        href: '/parcours/niveau-2/lecon-2'
      }}
    />
  )
}
