import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Rythmes avancés🥁</h2>
        <p>
          Le rythme est l'âme de la musique. Dans cette leçon, nous allons explorer des concepts
          rythmiques qui vont transformer ta musicalité et te donner accès à des styles comme
          le jazz, la musique latine et la musique contemporaine.
        </p>
        <p>
          Prépare-toi à défier ton cerveau avec des polyrythmies qui semblent impossibles au début
          mais deviennent naturelles avec la pratique !
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
        <h2>Les mesures asymétriques</h2>
        <p>
          La plupart de la musique est en 4/4 ou 3/4. Les <strong>mesures asymétriques</strong>
          utilisent des nombres impairs de temps : 5/4, 7/8, 11/8, etc.
        </p>
        <p>
          <strong>5/4 - La plus courante</strong> :
        </p>
        <ul>
          <li>Peut se diviser en 3+2 ou 2+3</li>
          <li>Exemple célèbre : "Take Five" de Dave Brubeck</li>
          <li>Compte : 1-2-3 / 1-2  ou  1-2 / 1-2-3</li>
        </ul>
        <p>
          <strong>7/8 - Plus complexe</strong> :
        </p>
        <ul>
          <li>Peut se diviser en 2+2+3, 3+2+2, ou 2+3+2</li>
          <li>Utilisée dans la musique des Balkans</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer en 5/4',
      description: 'Maîtrise la mesure à 5 temps',
      steps: [
        'Compte à voix haute : "1-2-3 / 1-2"',
        'Frappe des mains sur chaque nombre',
        'Main gauche : joue Do sur chaque temps (5 fois)',
        'Répète jusqu\'à ce que ce soit naturel',
        'Main droite : joue une gamme Do-Ré-Mi-Fa-Sol sur ces 5 temps',
        'Combine les deux mains'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Les polyrythmies : 3 contre 2</h2>
        <p>
          Une <strong>polyrythmie</strong> combine deux rythmes différents simultanément.
          La plus simple et la plus utilisée est <strong>3 contre 2</strong>.
        </p>
        <p>
          <strong>Comment ça fonctionne</strong> :
        </p>
        <ul>
          <li>Main droite : joue 3 notes égales dans un temps</li>
          <li>Main gauche : joue 2 notes égales dans le même temps</li>
          <li>Les notes ne tombent jamais ensemble sauf au début !</li>
        </ul>
        <p>
          Astuce mnémotechnique : "Nice cup of tea" (3 contre 2)
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice : Polyrythmie 3 contre 2',
      description: 'Sépare les deux rythmes',
      steps: [
        'Dis à voix haute : "Nice-cup-of / tea-tea"',
        '"Nice-cup-of" = 3 syllabes = main droite',
        '"tea-tea" = 2 syllabes = main gauche',
        'Frappe sur une table : main droite 3x, main gauche 2x',
        'Au piano : main droite Do-Mi-Sol (triolet), main gauche Do-Sol (2 noires)',
        'Répète 20 fois jusqu\'à l\'automatisme'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Polyrythmie avancée : 4 contre 3</h2>
        <p>
          Encore plus complexe : <strong>4 contre 3</strong>. Une main joue 4 notes
          égales pendant que l\'autre joue 3 notes égales.
        </p>
        <p>
          <strong>Méthode de maîtrise</strong> :
        </p>
        <ul>
          <li>Trouve le plus petit commun multiple : 12</li>
          <li>Divise 12 par 4 = 3 (positions de la main droite)</li>
          <li>Divise 12 par 3 = 4 (positions de la main gauche)</li>
          <li>Main droite tombe sur : 1, 4, 7, 10</li>
          <li>Main gauche tombe sur : 1, 5, 9</li>
        </ul>
        <p>
          Astuce : "Pass the god-damn but-ter"
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Polyrythmie 4 contre 3',
      description: 'Le défi ultime',
      steps: [
        'Dis : "Pass-the-god-damn / but-ter-plate"',
        '4 syllabes main droite, 3 syllabes main gauche',
        'Frappe sur une table jusqu\'à ce que ce soit fluide',
        'Au piano : main droite Do-Ré-Mi-Fa (4 notes égales)',
        'Main gauche : Do-Sol-Do (3 notes égales, même durée totale)',
        'Pratique 10 minutes par jour pendant une semaine'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>Les syncopes avancées</h2>
        <p>
          Les <strong>syncopes</strong> déplacent l'accent rythmique des temps forts
          vers les temps faibles. C'est l'essence du jazz et du funk !
        </p>
        <p>
          <strong>Types de syncopes</strong> :
        </p>
        <ul>
          <li><strong>Anticipation</strong> : La note arrive avant le temps fort</li>
          <li><strong>Prolongation</strong> : Une note des temps faibles continue sur le temps fort</li>
          <li><strong>Contretemps</strong> : Jouer entre les temps principaux</li>
        </ul>
        <p>
          La syncope crée du "groove" et du mouvement !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Pattern de syncope jazz',
      description: 'Crée du groove',
      steps: [
        'Compte "1 et 2 et 3 et 4 et"',
        'Main gauche : joue Do sur 1 et 3 (temps forts)',
        'Main droite : joue Sol sur les "et" (contretemps)',
        'Ça swingue déjà !',
        'Varie en ajoutant des accents',
        'Essaie différentes combinaisons de temps et contretemps'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Les croches swing</h2>
        <p>
          Dans le jazz, les <strong>croches swing</strong> ne sont pas jouées égales.
          La première croche est plus longue, la deuxième plus courte.
        </p>
        <p>
          <strong>Proportion</strong> :
        </p>
        <ul>
          <li>Au lieu de 50%-50%, c'est plutôt 67%-33%</li>
          <li>C'est comme jouer des triolets et omettre la note du milieu</li>
          <li>Ça donne ce "bounce" caractéristique du jazz</li>
        </ul>
        <p>
          Écoute des standards de jazz pour intégrer ce feeling !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice : Walking bass avec swing',
      description: 'Crée une ligne de basse jazz',
      steps: [
        'Main gauche : joue Do-Mi♭-Sol-Si♭ (4 croches)',
        'Applique le swing : longue-courte, longue-courte',
        'Ajoute un léger accent sur les temps 2 et 4',
        'Ça doit "bouncer" naturellement',
        'Main droite : ajoute des accords sur les temps',
        'Tu joues maintenant du jazz !'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Application créative</h2>
        <p>
          Maintenant que tu maîtrises ces concepts, expérimente :
        </p>
        <ul>
          <li>Prends une mélodie simple et mets-la en 5/4 ou 7/8</li>
          <li>Ajoute des polyrythmies dans tes improvisations</li>
          <li>Crée des ostinatos rythmiques complexes</li>
          <li>Combine plusieurs techniques dans une même pièce</li>
        </ul>
        <p>
          Le rythme est ta signature musicale. Développe ton propre style rythmique !
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
          <li>✅ Les mesures asymétriques (5/4, 7/8)</li>
          <li>✅ Les polyrythmies 3 contre 2 et 4 contre 3</li>
          <li>✅ Les syncopes avancées et le groove</li>
          <li>✅ Le swing et les croches inégales</li>
          <li>✅ L'application créative des rythmes complexes</li>
        </ul>
        <p>
          Ces concepts rythmiques te donnent accès à un univers musical infini.
          Continue à écouter, analyser et expérimenter !
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon4Page() {
  return (
    <LessonTemplate
      levelId={5}
      lessonNumber={4}
      title="Rythmes avancés et polyrythmies"
      duration={23}
      objectives={[
        'Maîtriser les mesures asymétriques',
        'Jouer des polyrythmies 3 contre 2 et 4 contre 3',
        'Créer du groove avec les syncopes',
        'Comprendre et appliquer le swing',
        'Expérimenter avec des patterns rythmiques complexes'
      ]}
      content={content}
      previousLesson={{
        title: 'Polyphonie et contrepoint',
        href: '/parcours/niveau-5/lecon-3'
      }}
      nextLesson={{
        title: 'Technique véloce',
        href: '/parcours/niveau-5/lecon-5'
      }}
    />
  )
}
