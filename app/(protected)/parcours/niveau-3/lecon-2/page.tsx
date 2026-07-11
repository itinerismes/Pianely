import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Entrer dans le monde de la partition !</h2>
        <p>
          Jusqu'à présent, tu as appris le piano "à l'oreille" ou avec des indications
          simples. Maintenant, tu vas apprendre à <strong>lire des partitions</strong> !
        </p>
        <p>
          Une partition, c'est le langage universel de la musique. Grâce à elle,
          tu pourras jouer n'importe quel morceau écrit par n'importe quel compositeur,
          n'importe où dans le monde !
        </p>
        <p>
          C'est comme apprendre à lire : au début, c'est lent et laborieux, mais
          avec la pratique, ça devient naturel et automatique.
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
        <h2>La portée et les clés</h2>
        <p>
          La musique est écrite sur une <strong>portée</strong> : 5 lignes horizontales
          sur lesquelles on place des notes.
        </p>
        <p>
          Au piano, on utilise deux portées superposées :
        </p>
        <ul>
          <li><strong>La portée du haut : clé de Sol (𝄞)</strong> → Main droite (notes aiguës)</li>
          <li><strong>La portée du bas : clé de Fa (𝄢)</strong> → Main gauche (notes graves)</li>
        </ul>
        <p>
          Ces deux portées sont reliées par une accolade, formant ce qu'on appelle
          un <strong>système</strong> de piano.
        </p>
        <p>
          La clé de Sol indique que la note Sol se trouve sur la 2ème ligne en partant
          du bas. La clé de Fa indique que la note Fa se trouve sur la 4ème ligne.
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
        <h2>Lire la clé de Sol (main droite)</h2>
        <p>
          Commençons par la clé de Sol. Voici les notes sur les <strong>lignes</strong> :
        </p>
        <ul>
          <li>1ère ligne (bas) : <strong>Mi</strong></li>
          <li>2ème ligne : <strong>Sol</strong></li>
          <li>3ème ligne : <strong>Si</strong></li>
          <li>4ème ligne : <strong>Ré</strong></li>
          <li>5ème ligne (haut) : <strong>Fa</strong></li>
        </ul>
        <p>
          Moyen mnémotechnique : <strong>"Mi Sol Si Ré Fa"</strong> → "Mi Soleil Si ReDessine Facilement"
        </p>
        <p>
          Et voici les notes dans les <strong>interlignes</strong> (entre les lignes) :
        </p>
        <ul>
          <li>Entre ligne 1 et 2 : <strong>Fa</strong></li>
          <li>Entre ligne 2 et 3 : <strong>La</strong></li>
          <li>Entre ligne 3 et 4 : <strong>Do</strong></li>
          <li>Entre ligne 4 et 5 : <strong>Mi</strong></li>
        </ul>
        <p>
          Moyen mnémotechnique : <strong>"Fa La Do Mi"</strong> → "Fais La Danse Mieux"
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Identifier les notes en clé de Sol',
      description: 'Apprends à reconnaître les notes rapidement',
      steps: [
        'Prends une feuille et dessine une portée (5 lignes)',
        'Dessine la clé de Sol au début (symboliquement, juste un "G")',
        'Marque chaque ligne : Mi-Sol-Si-Ré-Fa',
        'Marque chaque interligne : Fa-La-Do-Mi',
        'Répète à voix haute 5 fois : les lignes, puis les interlignes',
        'Ferme les yeux et récite dans l\'ordre',
        'Quand c\'est bon, tu es prêt pour la suite !'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Lire la clé de Fa (main gauche)</h2>
        <p>
          La clé de Fa est utilisée pour les notes graves. Les notes sur les <strong>lignes</strong> :
        </p>
        <ul>
          <li>1ère ligne (bas) : <strong>Sol</strong></li>
          <li>2ème ligne : <strong>Si</strong></li>
          <li>3ème ligne : <strong>Ré</strong></li>
          <li>4ème ligne : <strong>Fa</strong></li>
          <li>5ème ligne (haut) : <strong>La</strong></li>
        </ul>
        <p>
          Moyen mnémotechnique : <strong>"Sol Si Ré Fa La"</strong> → "Sol Si RéDécouvre Facilement LA"
        </p>
        <p>
          Et les notes dans les <strong>interlignes</strong> :
        </p>
        <ul>
          <li>Entre ligne 1 et 2 : <strong>La</strong></li>
          <li>Entre ligne 2 et 3 : <strong>Do</strong></li>
          <li>Entre ligne 3 et 4 : <strong>Mi</strong></li>
          <li>Entre ligne 4 et 5 : <strong>Sol</strong></li>
        </ul>
        <p>
          Moyen mnémotechnique : <strong>"La Do Mi Sol"</strong> → "LA DOminante MIcro SOLaire"
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Identifier les notes en clé de Fa',
      description: 'Maîtrise la lecture en clé de Fa',
      steps: [
        'Dessine une nouvelle portée',
        'Dessine la clé de Fa au début (symboliquement, un "F")',
        'Marque chaque ligne : Sol-Si-Ré-Fa-La',
        'Marque chaque interligne : La-Do-Mi-Sol',
        'Répète à voix haute 5 fois',
        'Compare avec la clé de Sol : quelles différences ?',
        'Récite les deux clés alternativement'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Les valeurs de notes : la durée</h2>
        <p>
          Maintenant que tu sais QUELLE note jouer, il faut savoir COMBIEN DE TEMPS
          la jouer. C'est ce qu'on appelle les <strong>valeurs rythmiques</strong>.
        </p>
        <p>
          Voici les 4 valeurs les plus courantes :
        </p>
        <ul>
          <li><strong>Ronde (○)</strong> : 4 temps - la plus longue</li>
          <li><strong>Blanche (𝅗𝅥)</strong> : 2 temps - la moitié d'une ronde</li>
          <li><strong>Noire (♩)</strong> : 1 temps - la moitié d'une blanche</li>
          <li><strong>Croche (♪)</strong> : 1/2 temps - la moitié d'une noire</li>
        </ul>
        <p>
          Chaque valeur dure exactement la moitié de la valeur précédente.
          C'est un système très logique !
        </p>
        <p>
          La plupart des morceaux simples utilisent principalement des <strong>noires</strong>
          et des <strong>blanches</strong>.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>Les mesures et les temps</h2>
        <p>
          La musique est organisée en <strong>mesures</strong> : des segments de temps
          séparés par des barres verticales.
        </p>
        <p>
          La <strong>signature rythmique</strong> (chiffres au début) indique :
        </p>
        <ul>
          <li><strong>Chiffre du haut</strong> : Nombre de temps par mesure</li>
          <li><strong>Chiffre du bas</strong> : Valeur de référence (4 = noire)</li>
        </ul>
        <p>
          <strong>4/4</strong> (le plus courant) = 4 temps par mesure, la noire vaut 1 temps<br>
          <strong>3/4</strong> (valse) = 3 temps par mesure, la noire vaut 1 temps
        </p>
        <p>
          Pour compter : "1-2-3-4" ou "1-2-3" selon la signature rythmique.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Lire un rythme simple',
      description: 'Comprends les valeurs rythmiques',
      steps: [
        'Tape dans tes mains en comptant "1-2-3-4" (4 noires)',
        'Tape seulement sur "1" et "3", compte "1-2-3-4" (2 blanches)',
        'Tape seulement sur "1", compte "1-2-3-4" (1 ronde)',
        'Tape "1-et-2-et-3-et-4-et" (8 croches)',
        'Répète chaque exercice 3 fois',
        'Mélange : 1 blanche (1-2) + 2 noires (3, 4)',
        'Félicitations : tu comprends les rythmes de base !'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Ta première lecture de partition</h2>
        <p>
          Il est temps de combiner tout ce que tu as appris : notes + rythmes !
        </p>
        <p>
          Voici une mélodie ultra-simple à lire (clé de Sol, main droite) :
        </p>
        <p>
          <strong>Mesure 1 :</strong> Do (noire) - Do (noire) - Sol (noire) - Sol (noire)<br>
          <strong>Mesure 2 :</strong> La (noire) - La (noire) - Sol (blanche)<br>
          <strong>Mesure 3 :</strong> Fa (noire) - Fa (noire) - Mi (noire) - Mi (noire)<br>
          <strong>Mesure 4 :</strong> Ré (noire) - Ré (noire) - Do (blanche)
        </p>
        <p>
          Tu reconnais cette mélodie ? C'est <strong>"Ah ! vous dirai-je, maman"</strong>
          (ou "Twinkle Twinkle Little Star" en anglais) !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer depuis la partition',
      description: 'Lis et joue ta première mélodie écrite',
      steps: [
        'Identifie chaque note AVANT de jouer (dis leur nom)',
        'Compte le rythme à voix haute avant de jouer',
        'Joue TRÈS LENTEMENT mesure par mesure',
        'Mesure 1 : Do-Do-Sol-Sol en comptant 1-2-3-4',
        'Mesure 2 : La-La-Sol(2 temps) en comptant 1-2-3-4',
        'Continue pour les mesures 3 et 4',
        'Quand chaque mesure est fluide, joue tout d\'un trait',
        'Répète 5 fois : tu viens de lire ta première partition !'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Conseils pour progresser en lecture</h2>
        <p>
          La lecture de partition est une compétence qui demande du temps. Voici
          comment progresser efficacement :
        </p>
        <ul>
          <li><strong>Pratique quotidienne</strong> : 5-10 minutes par jour valent mieux que 1h par semaine</li>
          <li><strong>Commence simple</strong> : Ne cherche pas à lire des morceaux difficiles</li>
          <li><strong>Lis à voix haute</strong> : Nomme les notes avant de les jouer</li>
          <li><strong>Utilise les repères</strong> : Mémorise les notes "piliers" (Do central, Sol, etc.)</li>
          <li><strong>Ne regarde pas le clavier</strong> : Force-toi à garder les yeux sur la partition</li>
          <li><strong>Sois patient</strong> : C'est normal que ce soit lent au début</li>
        </ul>
        <p>
          Avec le temps, tu liras aussi naturellement que tu lis ces mots !
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
        <h2>Prochaines étapes en lecture</h2>
        <p>
          Tu as maintenant les bases de la lecture de partition ! Dans les prochaines
          leçons et avec la pratique, tu vas :
        </p>
        <ul>
          <li>Lire plus rapidement (déchiffrage)</li>
          <li>Lire les deux mains simultanément</li>
          <li>Reconnaître les altérations (dièses et bémols)</li>
          <li>Comprendre les nuances et expressions</li>
          <li>Lire des rythmes plus complexes</li>
        </ul>
        <p>
          Pour l'instant, concentre-toi sur les bases : identifier les notes
          correctement et respecter les rythmes simples. La vitesse viendra
          naturellement avec la pratique régulière !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: 'piano-exercice',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'À toi de jouer 🎹',
      instructions: "Joue les notes lues sur la portée. Joue Do, Ré, Mi, Fa, Sol sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'D', 'E', 'F', 'G']
    }
  }
]

export default function Lecon2Page() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={2}
      title="Lecture de partition niveau 1"
      duration={18}
      objectives={[
        'Comprendre la portée et les deux clés (Sol et Fa)',
        'Identifier les notes sur les lignes et interlignes',
        'Lire les valeurs rythmiques (ronde, blanche, noire, croche)',
        'Jouer une mélodie simple depuis une partition'
      ]}
      content={content}
      previousLesson={{
        title: 'Les gammes complètes',
        href: '/parcours/niveau-3/lecon-1'
      }}
      nextLesson={{
        title: 'Les accords enrichis',
        href: '/parcours/niveau-3/lecon-3'
      }}
    />
  )
}
