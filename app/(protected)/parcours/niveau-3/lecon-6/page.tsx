import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Jouer les chefs-d'œuvre : morceaux célèbres faciles</h2>
        <p>
          C'est le moment le plus excitant de ton apprentissage : tu vas jouer
          des <strong>morceaux célèbres</strong> que tout le monde connaît !
        </p>
        <p>
          Ces pièces ont traversé les siècles et touché des millions de personnes.
          Maintenant, c'est ton tour de les faire vivre sous tes doigts.
        </p>
        <p>
          Dans cette leçon, tu vas apprendre des versions simplifiées de trois
          chefs-d'œuvre :
        </p>
        <ul>
          <li><strong>Ode à la joie</strong> de Beethoven (1824)</li>
          <li><strong>Canon en Ré</strong> de Pachelbel (1680)</li>
          <li><strong>Comptine d'un autre été</strong> de Yann Tiersen (2001)</li>
        </ul>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `
        <h2>Ode à la joie - Beethoven</h2>
        <p>
          L'<strong>Ode à la joie</strong> est le finale de la 9ème symphonie de Beethoven,
          probablement la mélodie la plus célèbre de toute la musique classique.
          C'est l'hymne de l'Union Européenne !
        </p>
        <p>
          <strong>Contexte :</strong> Beethoven était complètement sourd quand il a
          composé cette symphonie. Il ne pouvait pas entendre sa propre création,
          mais il entendait la musique dans sa tête. Quelle puissance créatrice !
        </p>
        <p>
          <strong>Mélodie (main droite) :</strong>
        </p>
        <p>
          Mi-Mi-Fa-Sol / Sol-Fa-Mi-Ré / Do-Do-Ré-Mi / Mi-Ré-Ré<br>
          Mi-Mi-Fa-Sol / Sol-Fa-Mi-Ré / Do-Do-Ré-Mi / Ré-Do-Do
        </p>
        <p>
          Chaque note est une noire (1 temps). Joue avec noblesse et dignité !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Ode à la joie - mélodie',
      description: 'Apprends cette mélodie immortelle',
      steps: [
        'Phrase 1 : Mi-Mi-Fa-Sol, répète 3 fois lentement',
        'Phrase 2 : Sol-Fa-Mi-Ré, répète 3 fois',
        'Phrase 3 : Do-Do-Ré-Mi, répète 3 fois',
        'Phrase 4 : Mi-Ré-Ré (attention : le Ré final est une blanche)',
        'Joue les 4 phrases ensemble : c\'est la première partie complète !',
        'Deuxième partie : identique sauf la fin (Ré-Do-Do au lieu de Mi-Ré-Ré)',
        'Répète 10 fois : ce morceau doit être majestueux et régulier',
        'Ajoute de la fierté et de la noblesse dans ton jeu'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Ode à la joie - accompagnement</h2>
        <p>
          Maintenant, ajoutons un accompagnement simple à la main gauche pour
          enrichir le morceau.
        </p>
        <p>
          <strong>Main gauche (accords tenus) :</strong>
        </p>
        <ul>
          <li><strong>Mesures 1-4 :</strong> Do majeur (Do-Mi-Sol) tenu</li>
          <li><strong>Mesures 5-8 :</strong> Sol majeur (Sol-Si-Ré) tenu</li>
          <li><strong>Mesures 9-12 :</strong> Fa majeur (Fa-La-Do) tenu</li>
          <li><strong>Mesures 13-16 :</strong> Do majeur (Do-Mi-Sol) tenu</li>
        </ul>
        <p>
          Chaque accord est tenu pendant 4 mesures (16 temps). C'est très simple,
          mais ça crée une fondation harmonique solide pour la mélodie.
        </p>
        <p>
          Utilise la pédale pour prolonger le son des accords pendant que ta
          main droite joue la mélodie.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice : Ode à la joie complète',
      description: 'Joue le morceau avec les deux mains',
      steps: [
        'Main gauche seule : Pratique les changements d\'accords',
        'Main droite seule : Révise la mélodie',
        'Combine TRÈS LENTEMENT : Do majeur (MG) + première phrase (MD)',
        'Continue : change pour Sol majeur (MG) au bon moment',
        'C\'est normal si c\'est difficile : travaille mesure par mesure',
        'Quand chaque section est fluide, joue tout d\'un trait',
        'Ajoute la pédale pour enrichir le son',
        'Félicitations : tu joues Beethoven !'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Canon en Ré - Pachelbel (simplifié)</h2>
        <p>
          Le <strong>Canon en Ré</strong> de Pachelbel est une pièce baroque
          hypnotique et magnifique. La version originale est complexe, mais
          nous allons jouer la progression d'accords caractéristique.
        </p>
        <p>
          <strong>La célèbre progression (en Do majeur pour simplifier) :</strong>
        </p>
        <p>
          Do - Sol - La mineur - Mi mineur - Fa - Do - Fa - Sol
        </p>
        <p>
          Cette progression se répète en boucle tout au long du morceau. C'est
          l'une des progressions les plus utilisées dans toute la musique occidentale !
          Des centaines de chansons pop modernes l'utilisent.
        </p>
        <p>
          <strong>Rythme :</strong> Chaque accord dure 2 temps (une blanche).
          Joue-les de manière régulière et méditative.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Canon de Pachelbel - accords',
      description: 'Joue la progression légendaire',
      steps: [
        'Apprends chaque accord séparément (main gauche)',
        'Do(2 temps) - Sol(2 temps) - La min(2 temps) - Mi min(2 temps)',
        'Répète cette première moitié 5 fois',
        'Deuxième moitié : Fa(2 temps) - Do(2 temps) - Fa(2 temps) - Sol(2 temps)',
        'Répète 5 fois',
        'Joue la progression complète en boucle',
        'Ajoute la pédale, change à chaque accord',
        'Laisse-toi hypnotiser par cette progression magique !',
        'Essaie d\'ajouter une mélodie simple à la main droite'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>Comptine d'un autre été - Yann Tiersen</h2>
        <p>
          Ce morceau minimaliste et poétique vient de la bande originale du film
          <strong>"Le Fabuleux Destin d'Amélie Poulain"</strong> (2001). C'est devenu
          un classique moderne du piano.
        </p>
        <p>
          La beauté de ce morceau réside dans sa simplicité : un motif répétitif
          à la main droite sur un ostinato de basse à la main gauche.
        </p>
        <p>
          <strong>Motif de base (simplifié, en La mineur) :</strong>
        </p>
        <p>
          <strong>Main droite :</strong> La-Do-Mi-Do-La-Do-Mi-Do (croches répétées)<br>
          <strong>Main gauche :</strong> La (octave grave, noire) sur les temps 1 et 3
        </p>
        <p>
          Le tempo est modéré (environ 130 bpm). Le morceau doit sonner léger,
          presque comme des gouttes de pluie.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Comptine d\'un autre été - motif',
      description: 'Maîtrise le motif répétitif caractéristique',
      steps: [
        'Main droite seule : La-Do-Mi-Do, répète en boucle',
        'Commence TRÈS lentement, chaque note claire',
        'Augmente progressivement le tempo jusqu\'à ce que ça coule',
        'Main gauche seule : La grave sur temps 1, silence, La sur temps 3',
        'Combine les deux mains : le défi est de garder la régularité',
        'La main droite joue 4 notes pendant que la gauche en joue 1',
        'Répète pendant 2 minutes : laisse-toi emporter par le motif',
        'C\'est hypnotique et méditatif !'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Apprendre des maîtres : l'importance des morceaux célèbres</h2>
        <p>
          Pourquoi est-il si important de jouer des morceaux célèbres, même
          dans des versions simplifiées ?
        </p>
        <ul>
          <li><strong>Motivation :</strong> Tu reconnais la musique, c'est gratifiant</li>
          <li><strong>Culture musicale :</strong> Tu comprends l'histoire de la musique</li>
          <li><strong>Oreille musicale :</strong> Tu intériorises les grandes mélodies</li>
          <li><strong>Inspiration :</strong> Tu découvres différents styles et époques</li>
          <li><strong>Répertoire :</strong> Tu peux jouer pour les autres</li>
        </ul>
        <p>
          Chaque morceau célèbre enseigne quelque chose : Beethoven la noblesse,
          Pachelbel la structure harmonique, Tiersen la texture minimaliste.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Comment aborder un nouveau morceau célèbre</h2>
        <p>
          Quand tu veux apprendre un nouveau morceau célèbre, suis cette méthode :
        </p>
        <ol>
          <li><strong>Écoute plusieurs versions</strong> : Comprends l'esprit du morceau</li>
          <li><strong>Trouve une version adaptée à ton niveau</strong> : Ne vise pas trop haut</li>
          <li><strong>Apprends chaque main séparément</strong> : Patience et rigueur</li>
          <li><strong>Décompose en petites sections</strong> : Mesure par mesure si nécessaire</li>
          <li><strong>Identifie les motifs répétitifs</strong> : La plupart des morceaux en ont</li>
          <li><strong>Travaille lentement</strong> : La vitesse viendra naturellement</li>
          <li><strong>Ajoute l'expression progressivement</strong> : D'abord les notes, puis l'émotion</li>
        </ol>
      `,
      variant: 'tip'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Projet : Choisis ton morceau favori',
      description: 'Commence à apprendre un morceau célèbre qui te plaît',
      steps: [
        'Pense à 3 morceaux célèbres que tu aimes',
        'Recherche des versions "facile" ou "débutant" sur internet',
        'Choisis celui qui te semble le plus accessible',
        'Écoute-le 5 fois pour bien le connaître',
        'Trouve la partition (gratuite sur IMSLP ou Musescore)',
        'Commence par identifier les notes de la première mesure',
        'Travaille cette première mesure jusqu\'à la maîtriser',
        'Continue mesure par mesure : dans quelques semaines, tu le joueras !'
      ]
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `
        <h2>Ton répertoire personnel</h2>
        <p>
          À partir de maintenant, tu vas construire ton <strong>répertoire personnel</strong> :
          l'ensemble des morceaux que tu sais jouer de mémoire.
        </p>
        <p>
          <strong>Conseils pour entretenir ton répertoire :</strong>
        </p>
        <ul>
          <li><strong>Joue régulièrement tes anciens morceaux</strong> : Ne les oublie pas</li>
          <li><strong>Améliore constamment</strong> : Chaque fois que tu rejoues, affine</li>
          <li><strong>Varie les styles</strong> : Baroque, classique, romantique, moderne</li>
          <li><strong>Garde une liste</strong> : Note tous les morceaux que tu maîtrises</li>
          <li><strong>Partage ta musique</strong> : Joue pour ta famille et tes amis</li>
        </ul>
        <p>
          Dans quelques années, tu auras un répertoire impressionnant de dizaines
          de morceaux. C'est un trésor personnel qui t'accompagnera toute ta vie !
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon6Page() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={6}
      title="Morceaux célèbres faciles"
      duration={18}
      objectives={[
        'Jouer "Ode à la joie" de Beethoven avec accompagnement',
        'Apprendre la progression du "Canon en Ré" de Pachelbel',
        'Découvrir "Comptine d\'un autre été" de Yann Tiersen',
        'Développer une méthode pour apprendre de nouveaux morceaux'
      ]}
      content={content}
      previousLesson={{
        title: 'La pédale de sustain',
        href: '/parcours/niveau-3/lecon-5'
      }}
      nextLesson={{
        title: 'L\'expression musicale',
        href: '/parcours/niveau-3/lecon-7'
      }}
    />
  )
}
