import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>La main gauche entre en jeu !</h2>
        <p>
          Jusqu'à présent, tu as travaillé principalement avec la main droite. Maintenant,
          il est temps de développer ta <strong>main gauche</strong> !
        </p>
        <p>
          Au piano, la main gauche joue généralement :
        </p>
        <ul>
          <li>Les <strong>basses</strong> (notes graves)</li>
          <li>Les <strong>accords d'accompagnement</strong></li>
          <li>Le <strong>support harmonique</strong> pour la mélodie</li>
        </ul>
        <p>
          Dans cette leçon, tu vas découvrir tes trois premiers accords !
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
        <h2>Qu'est-ce qu'un accord ?</h2>
        <p>
          Un <strong>accord</strong> est un ensemble de notes jouées en même temps
          pour créer une harmonie.
        </p>
        <p>
          Les accords sont construits avec :
        </p>
        <ul>
          <li><strong>Au minimum 3 notes</strong> jouées simultanément</li>
          <li>Des <strong>intervalles spécifiques</strong> (généralement des tierces)</li>
          <li>Une <strong>note fondamentale</strong> qui donne son nom à l'accord</li>
        </ul>
        <p>
          Les trois accords que tu vas apprendre aujourd'hui (Do, Fa, Sol) permettent
          d'accompagner des centaines de chansons !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `
        <h2>Position de la main gauche</h2>
        <p>
          Pour jouer des accords, ta main gauche doit adopter une position spéciale :
        </p>
        <ul>
          <li>Main <strong>ouverte et détendue</strong></li>
          <li>Doigts <strong>écartés</strong> (plus qu'en position normale)</li>
          <li>Le poignet reste <strong>stable et aligné</strong></li>
          <li>Les doigts sont <strong>arrondis</strong> même s'ils sont écartés</li>
        </ul>
        <p>
          Tu vas utiliser principalement trois doigts : le pouce (1), le majeur (3),
          et l'auriculaire (5). C'est la position standard pour les accords !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Préparer la main gauche',
      description: 'Trouve la bonne ouverture de main',
      steps: [
        'Lève ta main gauche devant toi, paume vers le sol',
        'Écarte doucement les doigts 1, 3, et 5 (pouce, majeur, auriculaire)',
        'Les doigts 2 et 4 restent repliés légèrement',
        'Pose cette forme sur la table : tu dois voir un "triangle"',
        'Maintenant, pose cette même forme sur le clavier',
        'Garde les doigts arrondis même s\'ils sont écartés'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>L'accord de Do majeur (C)</h2>
        <p>
          Commençons par l'accord le plus simple : <strong>Do majeur</strong>.
        </p>
        <p>
          <strong>Construction de l'accord de Do :</strong>
        </p>
        <ul>
          <li><strong>Do</strong> (fondamentale) - Auriculaire (5)</li>
          <li><strong>Mi</strong> (tierce majeure) - Majeur (3)</li>
          <li><strong>Sol</strong> (quinte juste) - Pouce (1)</li>
        </ul>
        <p>
          En résumé : Place ton auriculaire gauche sur Do (grave), ton majeur sur Mi,
          et ton pouce sur Sol. Appuie sur les trois touches en même temps !
        </p>
        <p>
          Cet accord sonne joyeux, stable, et lumineux.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Accord de Do',
      description: 'Apprends à jouer ton premier accord',
      steps: [
        'Trouve un Do grave (à gauche du Do central)',
        'Place auriculaire (5) sur Do, majeur (3) sur Mi, pouce (1) sur Sol',
        'Vérifie que tes trois doigts sont bien positionnés',
        'Appuie sur les trois touches EN MÊME TEMPS',
        'Écoute le son : c\'est harmonieux, stable',
        'Répète 10 fois : appuie, relâche, appuie, relâche...'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>L'accord de Fa majeur (F)</h2>
        <p>
          Deuxième accord : <strong>Fa majeur</strong>.
        </p>
        <p>
          <strong>Construction de l'accord de Fa :</strong>
        </p>
        <ul>
          <li><strong>Fa</strong> (fondamentale) - Auriculaire (5)</li>
          <li><strong>La</strong> (tierce majeure) - Majeur (3)</li>
          <li><strong>Do</strong> (quinte juste) - Pouce (1)</li>
        </ul>
        <p>
          C'est exactement la même forme de main que l'accord de Do, mais décalée
          sur Fa ! L'auriculaire gauche se place maintenant sur Fa au lieu de Do.
        </p>
        <p>
          Cet accord sonne un peu plus doux et chaleureux que Do.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Accord de Fa',
      description: 'Apprends le deuxième accord',
      steps: [
        'Trouve un Fa grave (en dessous du Do central)',
        'Place auriculaire (5) sur Fa, majeur (3) sur La, pouce (1) sur Do',
        'Appuie sur les trois touches ensemble',
        'Écoute la sonorité : plus douce que Do',
        'Répète 10 fois',
        'Alterne maintenant : Do (5 fois) puis Fa (5 fois)'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>L'accord de Sol majeur (G)</h2>
        <p>
          Troisième accord : <strong>Sol majeur</strong>.
        </p>
        <p>
          <strong>Construction de l'accord de Sol :</strong>
        </p>
        <ul>
          <li><strong>Sol</strong> (fondamentale) - Auriculaire (5)</li>
          <li><strong>Si</strong> (tierce majeure) - Majeur (3)</li>
          <li><strong>Ré</strong> (quinte juste) - Pouce (1)</li>
        </ul>
        <p>
          Encore une fois, c'est la même forme de main ! L'auriculaire se place
          sur Sol (entre Fa et Do).
        </p>
        <p>
          Cet accord sonne brillant et a tendance à "appeler" l'accord de Do.
          On dit que Sol "résout" vers Do.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice : Accord de Sol et transitions',
      description: 'Apprends le troisième accord et les changements',
      steps: [
        'Trouve Sol grave (entre Fa et le Do central)',
        'Place auriculaire (5) sur Sol, majeur (3) sur Si, pouce (1) sur Ré',
        'Joue l\'accord de Sol 10 fois',
        'Maintenant, enchaîne : Do - Fa - Sol - Do',
        'Chaque accord doit sonner propre et clair',
        'Répète cette progression 5 fois lentement'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Progression d'accords : Do - Fa - Sol - Do</h2>
        <p>
          Ces trois accords forment la progression la plus utilisée en musique !
          On l'appelle souvent <strong>I - IV - V - I</strong> (en chiffres romains).
        </p>
        <p>
          Des milliers de chansons utilisent cette progression :
        </p>
        <ul>
          <li>"Let It Be" des Beatles</li>
          <li>"Hallelujah" de Leonard Cohen</li>
          <li>"Someone Like You" d'Adele</li>
          <li>Et beaucoup d'autres !</li>
        </ul>
        <p>
          En maîtrisant ces trois accords, tu peux déjà accompagner énormément de musique.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif</h2>
        <p>Bravo ! Tu as appris :</p>
        <ul>
          <li>✅ Ce qu'est un accord (3 notes jouées ensemble)</li>
          <li>✅ La position de main pour les accords (doigts 5-3-1)</li>
          <li>✅ L'accord de Do majeur (Do-Mi-Sol)</li>
          <li>✅ L'accord de Fa majeur (Fa-La-Do)</li>
          <li>✅ L'accord de Sol majeur (Sol-Si-Ré)</li>
          <li>✅ Comment enchaîner ces trois accords</li>
        </ul>
        <p>
          Entraîne-toi à passer d'un accord à l'autre jusqu'à ce que ce soit fluide.
          Dans la prochaine leçon, tu vas jouer les deux mains ensemble !
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon6Page() {
  return (
    <LessonTemplate
      levelId={2}
      lessonNumber={6}
      title="Main gauche et accords de base (Do, Fa, Sol)"
      duration={15}
      objectives={[
        'Comprendre ce qu\'est un accord',
        'Adopter la position de main pour les accords',
        'Jouer l\'accord de Do majeur',
        'Jouer l\'accord de Fa majeur',
        'Jouer l\'accord de Sol majeur',
        'Enchaîner les trois accords fluidement'
      ]}
      content={content}
      previousLesson={{
        title: 'Première mélodie simple',
        href: '/parcours/niveau-2/lecon-5'
      }}
      nextLesson={{
        title: 'Coordination mains ensemble',
        href: '/parcours/niveau-2/lecon-7'
      }}
    />
  )
}
