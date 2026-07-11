import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Bienvenue dans le monde de la main gauche ! 🎹</h2>
        <p>
          La main gauche est souvent négligée par les débutants, mais elle est
          <strong>tout aussi importante</strong> que la main droite !
        </p>
        <p>
          Au piano, la main droite joue généralement la <strong>mélodie</strong>
          (ce qu'on chante), tandis que la main gauche joue l'<strong>accompagnement</strong>
          (les accords et la basse qui donnent la profondeur).
        </p>
        <p>
          Aujourd'hui, tu vas découvrir les motifs de base de la main gauche !
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
        <h2>Rappel : Position de Do main gauche</h2>
        <p>
          Rappelle-toi, la main gauche utilise une numérotation inversée par rapport à la droite.
        </p>
        <p>
          <strong>Position de Do main gauche :</strong>
        </p>
        <ul>
          <li>Auriculaire (5) sur <strong>Do</strong> (Do grave, à gauche du Do central)</li>
          <li>Annulaire (4) sur <strong>Ré</strong></li>
          <li>Majeur (3) sur <strong>Mi</strong></li>
          <li>Index (2) sur <strong>Fa</strong></li>
          <li>Pouce (1) sur <strong>Sol</strong></li>
        </ul>
        <p>
          C'est comme un miroir de la main droite !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice 1 : Place ta main gauche',
      description: 'Familiarise-toi avec la position de Do main gauche',
      steps: [
        'Trouve le Do juste en-dessous (à gauche) du Do central',
        'Place ton auriculaire gauche (5) sur ce Do',
        'Place les autres doigts : Ré (4), Mi (3), Fa (2), Sol (1)',
        'Vérifie ta forme de main : doigts courbés, poignet niveau',
        'Joue chaque note une par une : Do (5) - Ré (4) - Mi (3) - Fa (2) - Sol (1)',
        'Répète 10 fois pour habituer ta main à cette position'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Notes basses individuelles</h2>
        <p>
          Le premier rôle de la main gauche est de jouer les <strong>notes de basse</strong>.
          Ce sont les notes graves qui donnent la <strong>fondation</strong> de la musique.
        </p>
        <p>
          Commence par apprendre à jouer des notes individuelles avec fermeté et clarté.
        </p>
        <p>
          <strong>Technique importante :</strong> Les notes de basse doivent être jouées
          avec un peu plus de poids que la mélodie. Imagine que tu "ancres" le son.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice 2 : Notes de basse fermes',
      description: 'Développe la force et le contrôle de la main gauche',
      steps: [
        'Main gauche en position de Do',
        'Joue le Do (5) avec fermeté - imagine que tu "plantes" la note',
        'Joue Sol (1) avec la même fermeté',
        'Alterne : Do (5) - Sol (1) - Do (5) - Sol (1), 20 fois',
        'Garde un rythme régulier (compte "1-2-1-2")',
        'Assure-toi que chaque note résonne bien avant de jouer la suivante'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Les intervalles : jouer deux notes ensemble</h2>
        <p>
          Un <strong>intervalle</strong> est le fait de jouer <strong>deux notes en même temps</strong>.
          C'est la base de l'harmonie au piano !
        </p>
        <p>
          <strong>Intervalle de quinte : Do + Sol</strong>
        </p>
        <p>
          L'intervalle le plus important pour la main gauche est la <strong>quinte</strong> :
          jouer le Do (5) et le Sol (1) simultanément.
        </p>
        <p>
          Cet intervalle sonne stable, puissant, et est utilisé dans presque toutes les chansons !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice 3 : Intervalle de quinte',
      description: 'Apprends à jouer deux notes parfaitement synchronisées',
      steps: [
        'Main gauche en position de Do',
        'Place ton auriculaire (5) sur Do et ton pouce (1) sur Sol',
        'Prends une grande respiration',
        'Appuie sur les DEUX touches en MÊME TEMPS (Do + Sol)',
        'Les deux sons doivent démarrer exactement ensemble',
        'Tiens les touches enfoncées pendant 3 secondes',
        'Relâche et répète 10 fois',
        'Objectif : les deux notes sonnent comme UNE seule note, pas deux séparées'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>Pattern d'accompagnement : Note basse alternée</h2>
        <p>
          Maintenant, apprenons un <strong>pattern d'accompagnement classique</strong> :
          alterner entre une note basse et un intervalle.
        </p>
        <p>
          <strong>Pattern à jouer :</strong>
        </p>
        <ol>
          <li>Do seul (5) - note basse</li>
          <li>Do + Sol ensemble (5 + 1) - intervalle de quinte</li>
          <li>Do seul (5) - note basse</li>
          <li>Do + Sol ensemble (5 + 1) - intervalle de quinte</li>
        </ol>
        <p>
          Ce pattern crée un <strong>rythme pulsé</strong>, parfait pour accompagner une mélodie !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice 4 : Pattern basse-accord',
      description: 'Maîtrise le pattern d\'accompagnement de base',
      steps: [
        'Joue : Do seul (5)',
        'Joue : Do + Sol ensemble (5+1)',
        'Joue : Do seul (5)',
        'Joue : Do + Sol ensemble (5+1)',
        'Répète ce pattern 20 fois en gardant un rythme régulier',
        'Compte "1-2-1-2" à chaque frappe',
        'Quand tu es à l\'aise, essaie d\'accélérer progressivement'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Introduction aux accords : les triades</h2>
        <p>
          Un <strong>accord</strong> est un groupe de <strong>trois notes ou plus</strong>
          jouées ensemble. On appelle un accord de 3 notes une <strong>triade</strong>.
        </p>
        <p>
          <strong>L'accord de Do majeur :</strong><br>
          Do (5) + Mi (3) + Sol (1)
        </p>
        <p>
          C'est l'accord le plus fondamental en musique ! Il sonne joyeux, stable et complet.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice 5 : Premier accord - Do majeur',
      description: 'Joue ton premier accord complet',
      steps: [
        'Main gauche en position de Do',
        'Place auriculaire (5) sur Do, majeur (3) sur Mi, pouce (1) sur Sol',
        'Vérifie que les 3 doigts sont bien positionnés',
        'Respire profondément',
        'Appuie sur les TROIS touches simultanément',
        'Les 3 sons doivent démarrer exactement ensemble',
        'Tiens l\'accord pendant 5 secondes',
        'Relâche, puis répète 10 fois',
        'Écoute bien le son : ça doit sonner harmonieux, pas désordonné'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Déplacement d'accord simple</h2>
        <p>
          Maintenant que tu sais jouer l'accord de Do, apprenons à nous déplacer
          vers un autre accord simple.
        </p>
        <p>
          <strong>L'accord de Fa majeur :</strong><br>
          Fa (4) + La (2) + Do (5 en haut)
        </p>
        <p>
          Pour jouer cet accord, il faut légèrement déplacer ta main vers la droite.
          C'est normal au début - avec la pratique, ces déplacements deviendront naturels.
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
        <h2>Pattern d'accompagnement avec accords</h2>
        <p>
          Voici un pattern très utilisé en musique pop et rock :
        </p>
        <p>
          <strong>Pattern "note basse puis accord" :</strong>
        </p>
        <ol>
          <li>Do seul (5) - note basse grave</li>
          <li>Accord Do majeur (Do-Mi-Sol : 5-3-1) - accord complet</li>
          <li>Do seul (5) - note basse grave</li>
          <li>Accord Do majeur (Do-Mi-Sol : 5-3-1) - accord complet</li>
        </ol>
        <p>
          Ce pattern crée un <strong>accompagnement riche</strong> parfait pour soutenir une mélodie.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '14',
    type: 'practice',
    data: {
      title: 'Exercice 6 : Pattern note-accord',
      description: 'Combine notes basses et accords',
      steps: [
        'Joue Do seul (5) avec fermeté',
        'Joue immédiatement l\'accord Do majeur (5-3-1 ensemble)',
        'Retour à Do seul (5)',
        'Puis l\'accord (5-3-1)',
        'Répète ce pattern 15 fois',
        'Garde un rythme régulier : "basse-accord-basse-accord"',
        'Assure-toi que l\'accord sonne bien ensemble (pas de notes décalées)'
      ]
    }
  },
  {
    id: '15',
    type: 'text',
    data: {
      content: `
        <h2>Challenge : Main gauche en mouvement</h2>
        <p>
          Maintenant, essayons une séquence plus longue qui utilise tout ce que
          tu as appris dans cette leçon.
        </p>
        <p>
          <strong>Séquence complète :</strong>
        </p>
        <ol>
          <li>Do seul (5) - basse</li>
          <li>Do + Sol (5+1) - quinte</li>
          <li>Do + Mi + Sol (5+3+1) - accord complet</li>
          <li>Do + Sol (5+1) - quinte</li>
          <li>Do seul (5) - basse</li>
        </ol>
        <p>
          Cette séquence crée un accompagnement dynamique et musical !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '16',
    type: 'practice',
    data: {
      title: 'Exercice final : Séquence d\'accompagnement complète',
      description: 'Combine tous les éléments appris',
      steps: [
        'Joue lentement la séquence : Do (5) → Do+Sol (5+1) → Do+Mi+Sol (5+3+1) → Do+Sol (5+1) → Do (5)',
        'Répète cette séquence 5 fois très lentement',
        'Compte "1-2-3-4-5" pour chaque élément',
        'Quand tu es à l\'aise, essaie de la jouer un peu plus vite',
        'Ajoute des nuances : commence doux et deviens progressivement fort',
        'Bravo ! Tu as un vrai accompagnement de main gauche ! 🎉'
      ]
    }
  },
  {
    id: '17',
    type: 'text',
    data: {
      content: `
        <h2>Astuce : La main gauche et le rythme</h2>
        <p>
          La main gauche est souvent appelée le <strong>"métronome interne"</strong>
          du pianiste. Elle maintient le rythme pendant que la main droite joue la mélodie.
        </p>
        <p>
          <strong>Conseils importants :</strong>
        </p>
        <ul>
          <li>La main gauche doit rester <strong>stable et régulière</strong></li>
          <li>Ne laisse pas la main gauche ralentir pendant les parties difficiles</li>
          <li>Pratique TOUJOURS la main gauche seule avant de combiner avec la droite</li>
          <li>La fermeté de la main gauche donne de la confiance à tout le morceau</li>
        </ul>
      `,
      variant: 'warning'
    }
  },
  {
    id: '18',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif</h2>
        <p>Excellente leçon ! Tu as découvert :</p>
        <ul>
          <li>✅ La position de Do pour la main gauche</li>
          <li>✅ Comment jouer des notes de basse fermes et ancrées</li>
          <li>✅ L'intervalle de quinte (Do + Sol)</li>
          <li>✅ Les patterns d'accompagnement basse-accord</li>
          <li>✅ Ton premier accord complet : Do majeur (Do-Mi-Sol)</li>
          <li>✅ Une séquence d'accompagnement complète</li>
        </ul>
        <p>
          <strong>Pratique quotidienne :</strong> Passe 5 minutes par jour sur les
          patterns d'accompagnement. La main gauche a besoin de beaucoup de répétition
          pour devenir aussi agile que la droite !
        </p>
        <p>
          Dans la prochaine leçon, le moment tant attendu : nous allons
          <strong>combiner les deux mains</strong> pour jouer ton premier morceau complet ! 🎹✨
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
      instructions: "Rejoue ton premier motif main gauche. Joue Do, Ré, Mi sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'D', 'E']
    }
  }
]

export default function Lecon4Page() {
  return (
    <LessonTemplate
      levelId={1}
      lessonNumber={4}
      title="Premier motif main gauche"
      duration={12}
      objectives={[
        'Maîtriser la position de Do pour la main gauche',
        'Jouer des notes de basse fermes et ancrées',
        'Jouer l\'intervalle de quinte (Do + Sol)',
        'Exécuter des patterns d\'accompagnement basse-accord',
        'Jouer l\'accord de Do majeur (Do-Mi-Sol)'
      ]}
      content={content}
      previousLesson={{
        title: 'Premier motif main droite',
        href: '/parcours/niveau-1/lecon-3'
      }}
      nextLesson={{
        title: 'Ton premier morceau complet',
        href: '/parcours/niveau-1/lecon-5'
      }}
    />
  )
}
