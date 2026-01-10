import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>L'importance de la bonne position</h2>
        <p>
          Maintenant que tu connais le clavier, il est temps d'apprendre à bien positionner
          tes mains. C'est <strong>crucial</strong> pour :
        </p>
        <ul>
          <li>Éviter les tensions et les douleurs</li>
          <li>Jouer avec fluidité et rapidité</li>
          <li>Développer une bonne technique dès le début</li>
          <li>Progresser plus rapidement</li>
        </ul>
        <p>
          Prendre de <strong>bonnes habitudes maintenant</strong> te fera gagner des mois
          (voire des années) de progression !
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
        <h2>Numérotation des doigts</h2>
        <p>
          Les pianistes utilisent un système de numérotation universel pour les doigts.
          C'est essentiel pour lire les partitions et suivre les exercices.
        </p>
        <p>
          <strong>Pour chaque main :</strong>
        </p>
        <ul>
          <li><strong>1</strong> = Pouce</li>
          <li><strong>2</strong> = Index</li>
          <li><strong>3</strong> = Majeur</li>
          <li><strong>4</strong> = Annulaire</li>
          <li><strong>5</strong> = Auriculaire (petit doigt)</li>
        </ul>
        <p>
          Mémorise bien cette numérotation, nous l'utiliserons dans toutes les leçons !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice de mémorisation',
      description: 'Assure-toi de bien connaître la numérotation des doigts',
      steps: [
        'Lève ta main droite devant toi, paume vers le bas',
        'Touche chaque doigt avec l\'autre main en disant son numéro à voix haute',
        'Pouce = 1, Index = 2, Majeur = 3, Annulaire = 4, Auriculaire = 5',
        'Répète l\'exercice avec la main gauche',
        'Ferme les yeux et redemande-toi : "Quel numéro pour l\'annulaire ?" (réponse: 4)'
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
          La forme correcte de la main au piano est souvent décrite comme
          <strong>"tenir délicatement une balle de tennis"</strong> ou
          <strong>"tenir une orange"</strong>.
        </p>
        <p>
          <strong>Caractéristiques d'une bonne position :</strong>
        </p>
        <ul>
          <li>Doigts légèrement courbés (pas raides, pas complètement pliés)</li>
          <li>Main formant un arrondi naturel</li>
          <li>Pouce légèrement incliné vers l\'intérieur</li>
          <li>Articulations des doigts souples et actives</li>
          <li>Poignet au même niveau que le dos de la main (ni trop haut, ni trop bas)</li>
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
        <h2>Erreurs courantes à éviter</h2>
        <p>
          Beaucoup de débutants font ces erreurs. Fais attention à ne pas les reproduire !
        </p>
        <ul>
          <li>❌ <strong>Doigts complètement plats</strong> sur les touches</li>
          <li>❌ <strong>Poignet trop bas</strong> (affaissé)</li>
          <li>❌ <strong>Poignet trop haut</strong> (en l\'air)</li>
          <li>❌ <strong>Doigts trop repliés</strong> (en griffe)</li>
          <li>❌ <strong>Épaules tendues</strong> ou remontées</li>
          <li>❌ <strong>Coudes collés</strong> au corps</li>
        </ul>
      `,
      variant: 'warning'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Trouve la forme parfaite',
      description: 'Entraîne-toi à adopter la bonne forme de main',
      steps: [
        'Imagine que tu tiens une orange dans ta main',
        'Garde cette forme arrondie et pose ta main sur le clavier',
        'Tes doigts doivent toucher les touches avec le bout arrondi (pas à plat)',
        'Vérifie que ton poignet est au même niveau que le dos de ta main',
        'Secoue tes épaules et laisse-les retomber naturellement (elles doivent être détendues)'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Posture générale au piano</h2>
        <p>
          La position de ton corps est tout aussi importante que celle de tes mains !
        </p>
        <p>
          <strong>Checklist de la bonne posture :</strong>
        </p>
        <ul>
          <li>✅ Assis sur la <strong>moitié avant</strong> du banc (pas complètement au fond)</li>
          <li>✅ Pieds <strong>à plat sur le sol</strong> (ou sur un repose-pieds si tu es petit)</li>
          <li>✅ Dos <strong>droit mais détendu</strong> (pas rigide)</li>
          <li>✅ Distance du clavier : tes coudes forment un angle de <strong>90-100 degrés</strong></li>
          <li>✅ Hauteur du banc: tes avant-bras sont <strong>parallèles au sol</strong></li>
          <li>✅ Corps <strong>centré</strong> face au Do central</li>
        </ul>
      `,
      variant: 'tip'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Ajuste ta posture',
      description: 'Configure ton espace de jeu pour un confort optimal',
      steps: [
        'Assieds-toi sur ton banc/chaise de piano',
        'Ajuste la hauteur pour que tes avant-bras soient parallèles au sol',
        'Place-toi au milieu du clavier (face au Do central)',
        'Vérifie que tes pieds touchent bien le sol',
        'Redresse ton dos sans être rigide',
        'Laisse tes bras pendre naturellement le long du corps, puis pose-les sur le clavier'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>La position de Do (C position)</h2>
        <p>
          Pour commencer, nous allons apprendre la <strong>position de Do</strong>,
          aussi appelée <strong>C position</strong> en anglais.
        </p>
        <p>
          C'est une position de base où chaque doigt est assigné à une touche spécifique.
        </p>
        <p>
          <strong>Main droite sur le Do central :</strong>
        </p>
        <ul>
          <li>Pouce (1) sur <strong>Do</strong></li>
          <li>Index (2) sur <strong>Ré</strong></li>
          <li>Majeur (3) sur <strong>Mi</strong></li>
          <li>Annulaire (4) sur <strong>Fa</strong></li>
          <li>Auriculaire (5) sur <strong>Sol</strong></li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Position de Do - Main gauche</h2>
        <p>
          La main gauche utilise la même logique, mais une octave plus bas
          (vers la gauche du clavier).
        </p>
        <p>
          <strong>Main gauche sur le Do grave :</strong>
        </p>
        <ul>
          <li>Auriculaire (5) sur <strong>Do</strong></li>
          <li>Annulaire (4) sur <strong>Ré</strong></li>
          <li>Majeur (3) sur <strong>Mi</strong></li>
          <li>Index (2) sur <strong>Fa</strong></li>
          <li>Pouce (1) sur <strong>Sol</strong></li>
        </ul>
        <p>
          Note que pour la main gauche, c'est <strong>l'auriculaire qui est sur le Do</strong>,
          pas le pouce !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice : Place tes mains en position de Do',
      description: 'Pratique le placement correct des deux mains',
      steps: [
        'Trouve le Do central sur ton clavier',
        'Place ton pouce droit (1) sur ce Do',
        'Place tes autres doigts droits sur Ré, Mi, Fa, Sol (doigts 2-3-4-5)',
        'Trouve le Do juste en-dessous (à gauche) du Do central',
        'Place ton auriculaire gauche (5) sur ce Do grave',
        'Place tes autres doigts gauches sur Ré, Mi, Fa, Sol (doigts 4-3-2-1)',
        'Vérifie ta forme de main : doigts courbés, poignet niveau, épaules détendues'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Exercice de frappe</h2>
        <p>
          Maintenant que tes mains sont en position, apprenons à <strong>frapper les touches</strong>
          correctement.
        </p>
        <p>
          <strong>La bonne technique de frappe :</strong>
        </p>
        <ul>
          <li>Le mouvement vient de <strong>l'articulation du doigt</strong> (pas du poignet)</li>
          <li>Soulève le doigt de quelques millimètres seulement</li>
          <li>Frappe fermement mais sans tension</li>
          <li>Le reste de la main reste stable</li>
          <li>Relâche immédiatement après la frappe (ne reste pas crispé)</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '13',
    type: 'practice',
    data: {
      title: 'Exercice final : Indépendance des doigts',
      description: 'Développe le contrôle de chaque doigt individuellement',
      steps: [
        'Place ta main droite en position de Do',
        'Joue chaque note lentement, une par une : Do (1), Ré (2), Mi (3), Fa (4), Sol (5)',
        'Redescends : Sol (5), Fa (4), Mi (3), Ré (2), Do (1)',
        'Répète 5 fois en veillant à bien courber tes doigts',
        'Fais le même exercice avec la main gauche',
        'Objectif : chaque doigt doit bouger indépendamment sans que les autres bougent'
      ]
    }
  },
  {
    id: '14',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif</h2>
        <p>Excellente leçon ! Tu sais maintenant :</p>
        <ul>
          <li>✅ La numérotation des doigts (1-5)</li>
          <li>✅ La forme correcte de la main (arrondie comme une orange)</li>
          <li>✅ La bonne posture au piano</li>
          <li>✅ La position de Do pour les deux mains</li>
          <li>✅ Comment frapper les touches correctement</li>
        </ul>
        <p>
          <strong>Conseil important :</strong> Prends le temps de vérifier ta position
          régulièrement. Au début, il est normal de devoir consciemment corriger ta posture.
          Avec le temps, cela deviendra automatique !
        </p>
        <p>
          Dans la prochaine leçon, nous allons jouer ton <strong>premier motif mélodique</strong>
          avec la main droite ! 🎵
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon2Page() {
  return (
    <LessonTemplate
      levelId={1}
      lessonNumber={2}
      title="Position des mains"
      duration={10}
      objectives={[
        'Mémoriser la numérotation des doigts (1-5)',
        'Adopter la forme correcte de la main au piano',
        'Installer une bonne posture générale',
        'Maîtriser la position de Do pour les deux mains',
        'Frapper les touches avec la bonne technique'
      ]}
      content={content}
      previousLesson={{
        title: 'Anatomie du clavier',
        href: '/parcours/niveau-1/lecon-1'
      }}
      nextLesson={{
        title: 'Premier motif main droite',
        href: '/parcours/niveau-1/lecon-3'
      }}
    />
  )
}
