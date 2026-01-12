import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Bienvenue dans les gammes complètes !</h2>
        <p>
          Les <strong>gammes</strong> sont les fondations de toute la musique occidentale.
          Chaque chanson, chaque mélodie que tu connais est construite à partir d'une gamme.
        </p>
        <p>
          Une gamme, c'est comme l'alphabet de la musique : une série de notes organisées
          dans un ordre précis. Aujourd'hui, tu vas apprendre la <strong>gamme de Do majeur</strong>
          sur une octave complète !
        </p>
        <p>
          Cette gamme est la plus simple et la plus importante : elle ne contient aucune
          touche noire, uniquement les touches blanches de Do à Do.
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
        <h2>La structure de la gamme majeure</h2>
        <p>
          Une gamme majeure suit toujours le même <strong>schéma d'intervalles</strong> :
        </p>
        <ul>
          <li><strong>Ton</strong> - <strong>Ton</strong> - <strong>Demi-ton</strong> - <strong>Ton</strong> - <strong>Ton</strong> - <strong>Ton</strong> - <strong>Demi-ton</strong></li>
        </ul>
        <p>
          Pour la gamme de Do majeur, cela donne :
        </p>
        <ul>
          <li>Do → Ré (ton)</li>
          <li>Ré → Mi (ton)</li>
          <li>Mi → Fa (demi-ton) ← Pas de touche noire entre Mi et Fa</li>
          <li>Fa → Sol (ton)</li>
          <li>Sol → La (ton)</li>
          <li>La → Si (ton)</li>
          <li>Si → Do (demi-ton) ← Pas de touche noire entre Si et Do</li>
        </ul>
        <p>
          Résultat : <strong>Do - Ré - Mi - Fa - Sol - La - Si - Do</strong>
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
        <h2>Le doigté correct pour la gamme</h2>
        <p>
          Le doigté est CRUCIAL pour jouer les gammes de manière fluide. Voici le doigté
          standard pour la gamme de Do majeur :
        </p>
        <p>
          <strong>Main droite (ascendante) :</strong><br>
          Do(1) - Ré(2) - Mi(3) - <span style="color: #e74c3c;">Fa(1)</span> - Sol(2) - La(3) - Si(4) - Do(5)
        </p>
        <p>
          <strong>Main droite (descendante) :</strong><br>
          Do(5) - Si(4) - La(3) - Sol(2) - <span style="color: #e74c3c;">Fa(1)</span> - Mi(3) - Ré(2) - Do(1)
        </p>
        <p>
          Le pouce <strong>passe sous les doigts</strong> pour atteindre le Fa en montant,
          et les doigts <strong>passent par-dessus le pouce</strong> en descendant.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Gamme ascendante main droite',
      description: 'Apprends à monter la gamme de Do majeur',
      steps: [
        'Place ton pouce (1) sur Do, index (2) sur Ré, majeur (3) sur Mi',
        'Joue Do-Ré-Mi très lentement',
        'Après avoir joué Mi, passe le POUCE (1) sous ta main pour atteindre Fa',
        'Continue : Sol(2), La(3), Si(4), Do(5)',
        'Répète 10 fois très lentement en te concentrant sur le passage du pouce',
        'Le mouvement doit être fluide, sans à-coup'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Le doigté de la main gauche</h2>
        <p>
          La main gauche utilise un doigté différent, qui est en miroir de la main droite :
        </p>
        <p>
          <strong>Main gauche (ascendante) :</strong><br>
          Do(5) - Ré(4) - Mi(3) - Fa(2) - <span style="color: #e74c3c;">Sol(1)</span> - La(3) - Si(2) - Do(1)
        </p>
        <p>
          <strong>Main gauche (descendante) :</strong><br>
          Do(1) - Si(2) - La(3) - <span style="color: #e74c3c;">Sol(1)</span> - Fa(2) - Mi(3) - Ré(4) - Do(5)
        </p>
        <p>
          Pour la main gauche, le pouce passe sous pour atteindre le <strong>Sol</strong>
          en montant (et non le Fa comme pour la main droite).
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Gamme ascendante main gauche',
      description: 'Maîtrise la gamme avec la main gauche',
      steps: [
        'Place ton auriculaire (5) sur Do, annulaire (4) sur Ré, majeur (3) sur Mi',
        'Joue Do-Ré-Mi-Fa avec les doigts 5-4-3-2',
        'Après Fa, passe le POUCE (1) sous ta main pour atteindre Sol',
        'Continue : La(3), Si(2), Do(1)',
        'Répète 10 fois très lentement',
        'Concentre-toi sur la fluidité du passage du pouce'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Gamme descendante : la technique inverse</h2>
        <p>
          Descendre une gamme demande la technique inverse : les doigts passent
          <strong>par-dessus le pouce</strong> au lieu que le pouce passe sous les doigts.
        </p>
        <p>
          <strong>Pour la main droite :</strong><br>
          En descendant, quand tu arrives sur Fa (joué avec le pouce), le majeur (3)
          va passer par-dessus pour jouer Mi.
        </p>
        <p>
          <strong>Pour la main gauche :</strong><br>
          En descendant, quand tu arrives sur Sol (joué avec le pouce), le majeur (3)
          va passer par-dessus pour jouer La.
        </p>
        <p>
          Le secret : anticipe le mouvement et laisse ta main se déplacer naturellement.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Gamme descendante',
      description: 'Descends la gamme avec fluidité',
      steps: [
        'MAIN DROITE : Commence sur Do(5), descends Si-La-Sol-Fa(pouce)',
        'Sur Fa, passe le majeur(3) par-dessus pour jouer Mi',
        'Continue Mi-Ré-Do',
        'Répète 5 fois main droite',
        'MAIN GAUCHE : Commence sur Do(1), descends Si-La-Sol(pouce)',
        'Sur Sol, passe le majeur(3) par-dessus pour jouer Fa',
        'Continue Fa-Mi-Ré-Do',
        'Répète 5 fois main gauche'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Gamme complète : montée et descente</h2>
        <p>
          Maintenant que tu maîtrises chaque direction séparément, il est temps de
          jouer la gamme <strong>complète</strong> : monter ET descendre sans arrêt.
        </p>
        <p>
          L'objectif : un mouvement continu, régulier, comme une vague qui monte
          et redescend. Chaque note doit avoir la même durée et la même intensité.
        </p>
        <p>
          <strong>Critères de réussite :</strong>
        </p>
        <ul>
          <li>Toutes les notes sont clairement audibles</li>
          <li>Le tempo est régulier (pas d'accélération ou de ralentissement)</li>
          <li>Les transitions (passages du pouce) sont fluides</li>
          <li>Les doigts restent arrondis et détendus</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice : Gamme complète montée/descente',
      description: 'Joue la gamme en boucle continue',
      steps: [
        'Main droite : Monte Do→Do, puis redescends Do→Do sans t\'arrêter',
        'Répète 3 fois très lentement',
        'Main gauche : Monte Do→Do, puis redescends Do→Do sans t\'arrêter',
        'Répète 3 fois très lentement',
        'Quand c\'est fluide, augmente LÉGÈREMENT le tempo',
        'Joue chaque main 5 fois à ce nouveau tempo',
        'L\'objectif : 3 montées/descentes consécutives sans erreur'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>L'importance des gammes dans ton apprentissage</h2>
        <p>
          Pourquoi passer autant de temps sur les gammes ? Parce qu'elles développent :
        </p>
        <ul>
          <li><strong>La technique</strong> : Fluidité, vélocité, égalité des doigts</li>
          <li><strong>La connaissance du clavier</strong> : Tu mémorises les distances entre les notes</li>
          <li><strong>La théorie musicale</strong> : Tu comprends la structure des tonalités</li>
          <li><strong>Le répertoire</strong> : La plupart des morceaux contiennent des passages de gammes</li>
          <li><strong>L'indépendance</strong> : Chaque doigt devient plus fort et plus précis</li>
        </ul>
        <p>
          Les pianistes professionnels jouent des gammes tous les jours, même après
          des décennies de pratique. C'est un échauffement essentiel et un outil
          de perfectionnement permanent.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Défi final : Gammes en rythme',
      description: 'Ajoute de la musicalité à tes gammes',
      steps: [
        'Joue la gamme montante/descendante main droite en comptant "1-2-3-4-5-6-7-8"',
        'Chaque note dure 1 temps (noires)',
        'Utilise un tempo lent (60 bpm si tu as un métronome)',
        'Répète 5 fois en gardant le tempo parfaitement régulier',
        'Fais la même chose avec la main gauche',
        'Quand c\'est maîtrisé, essaie en croches (2 notes par temps)',
        'Félicitations : tu sais maintenant jouer une gamme complète !'
      ]
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `
        <h2>Pour aller plus loin</h2>
        <p>
          La gamme de Do majeur est la première d'une grande famille. Une fois
          que tu la maîtrises parfaitement, tu pourras apprendre :
        </p>
        <ul>
          <li>La gamme de Sol majeur (1 dièse)</li>
          <li>La gamme de Fa majeur (1 bémol)</li>
          <li>Les gammes mineures (plus mélancoliques)</li>
          <li>Les gammes chromatiques (toutes les touches)</li>
        </ul>
        <p>
          Mais pour l'instant, concentre-toi sur cette gamme de Do majeur.
          Pratique-la <strong>tous les jours pendant 5 minutes</strong> en début
          de session, et tu verras ta technique progresser rapidement !
        </p>
      `,
      variant: 'tip'
    }
  }
]

export default function Lecon1Page() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={1}
      title="Les gammes complètes"
      duration={15}
      objectives={[
        'Comprendre la structure d\'une gamme majeure',
        'Apprendre le doigté correct pour la gamme de Do majeur',
        'Jouer la gamme ascendante et descendante',
        'Maîtriser les passages du pouce sous les doigts'
      ]}
      content={content}
      previousLesson={{
        title: 'Coordination mains ensemble',
        href: '/parcours/niveau-2/lecon-7'
      }}
      nextLesson={{
        title: 'Lecture de partition niveau 1',
        href: '/parcours/niveau-3/lecon-2'
      }}
    />
  )
}
