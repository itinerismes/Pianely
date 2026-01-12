import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Le moment est venu : ton premier morceau complet !</h2>
        <p>
          Félicitations ! Tu es arrivé à un moment décisif de ton parcours pianistique :
          apprendre et maîtriser ton <strong>premier morceau complet</strong>.
        </p>
        <p>
          Jusqu'à présent, tu as travaillé des exercices, des extraits, des versions
          simplifiées. Maintenant, tu vas choisir un morceau entier et le travailler
          du début à la fin, jusqu'à pouvoir le jouer de mémoire, avec expression,
          et même le présenter à d'autres.
        </p>
        <p>
          Ce morceau deviendra une partie de toi. Tu le porteras avec toi pour
          toujours. C'est un accomplissement majeur et une étape émotionnelle
          importante dans ta vie de musicien.
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
        <h2>Choisir le bon morceau</h2>
        <p>
          Le choix de ton premier morceau complet est crucial. Il doit être :
        </p>
        <ul>
          <li><strong>À ton niveau</strong> : Ni trop facile (ennuyeux), ni trop difficile (décourageant)</li>
          <li><strong>Motivant</strong> : Un morceau que tu AIMES vraiment</li>
          <li><strong>Complet mais accessible</strong> : 2-3 minutes maximum</li>
          <li><strong>Varié</strong> : Qui te fait travailler plusieurs techniques</li>
        </ul>
        <p>
          <strong>Suggestions de morceaux adaptés au niveau 3 :</strong>
        </p>
        <ul>
          <li><strong>Classique :</strong> "Prélude en Do majeur" de Bach (simplifié), "Für Elise" (début)</li>
          <li><strong>Romantique :</strong> "Gymnopédie n°1" de Satie, "Rêverie" de Debussy (simplifié)</li>
          <li><strong>Moderne :</strong> "River Flows in You" de Yiruma, "Nuvole Bianche" de Einaudi (simplifié)</li>
          <li><strong>Film/Pop :</strong> Thèmes de films célèbres, chansons pop arrangées pour piano solo</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `
        <h2>Test du "niveau 80%"</h2>
        <p>
          Comment savoir si un morceau est à ton niveau ? Utilise la règle du
          <strong>"niveau 80%"</strong> :
        </p>
        <p>
          Quand tu essaies de déchiffrer la première page :
        </p>
        <ul>
          <li><strong>Tu reconnais 80% des notes et rythmes</strong> : Parfait !</li>
          <li><strong>Tu reconnais 90-100%</strong> : Trop facile, choisis plus difficile</li>
          <li><strong>Tu reconnais moins de 70%</strong> : Trop dur pour l'instant</li>
        </ul>
        <p>
          Le morceau idéal doit être un <strong>défi accessible</strong> : assez
          difficile pour te faire progresser, mais pas au point de te décourager.
        </p>
        <p>
          Si tu hésites entre deux morceaux, choisis le plus facile. Tu progresseras
          plus vite avec un morceau légèrement trop facile qu'avec un morceau
          trop difficile qui te frustrera.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Choisir ton morceau',
      description: 'Prends le temps de faire le bon choix',
      steps: [
        'Fais une liste de 5 morceaux qui te plaisent vraiment',
        'Pour chaque morceau, cherche une partition adaptée à ton niveau',
        'Écoute chaque version plusieurs fois',
        'Essaie de déchiffrer les 8 premières mesures de chaque',
        'Applique le test du "niveau 80%"',
        'Élimine ceux qui sont trop faciles ou trop durs',
        'Parmi ceux qui restent, choisis celui qui te parle le plus',
        'Félicitations : tu as ton morceau !'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Méthodologie d'apprentissage : le plan d'attaque</h2>
        <p>
          Apprendre un morceau complet demande une approche structurée. Voici
          la méthode éprouvée en <strong>7 phases</strong> :
        </p>
        <ol>
          <li><strong>Analyse globale</strong> : Structure, tonalité, difficultés (1 session)</li>
          <li><strong>Déchiffrage mains séparées</strong> : Note par note, lentement (2-3 semaines)</li>
          <li><strong>Assemblage progressif</strong> : Combiner les mains section par section (1-2 semaines)</li>
          <li><strong>Fluidification</strong> : Augmenter le tempo graduellement (1-2 semaines)</li>
          <li><strong>Mémorisation</strong> : Jouer sans partition (1 semaine)</li>
          <li><strong>Expression</strong> : Ajouter dynamiques et phrasé (1 semaine)</li>
          <li><strong>Performance</strong> : Peaufiner et jouer pour les autres (continu)</li>
        </ol>
        <p>
          Total : environ <strong>2 mois</strong> pour un morceau de 2-3 minutes.
          C'est normal ! La patience est essentielle.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Phase 1 : Analyse globale</h2>
        <p>
          Avant de jouer une seule note, <strong>comprends le morceau</strong> :
        </p>
        <ul>
          <li><strong>Écoute 10 fois</strong> : Imprégnez-toi de la mélodie</li>
          <li><strong>Structure</strong> : Combien de sections ? A-B-A ? A-B-C ?</li>
          <li><strong>Tonalité</strong> : Quelle est la tonalité principale ?</li>
          <li><strong>Tempo</strong> : Rapide, modéré, lent ?</li>
          <li><strong>Difficultés techniques</strong> : Où sont les passages délicats ?</li>
          <li><strong>Motifs récurrents</strong> : Quels patterns se répètent ?</li>
        </ul>
        <p>
          Cette analyse te donne une <strong>carte mentale</strong> du morceau.
          Tu sais où tu vas, ce qui te guide tout au long de l'apprentissage.
        </p>
        <p>
          Astuce : Note tes observations sur la partition avec un crayon.
          Marque les sections (A, B, C), les passages difficiles (⚠️), les
          répétitions (idem).
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Phases 2-3 : Déchiffrage et assemblage</h2>
        <p>
          <strong>Règle d'or : JAMAIS les deux mains ensemble au début !</strong>
        </p>
        <p>
          <strong>Phase 2 : Mains séparées (2-3 semaines)</strong>
        </p>
        <ul>
          <li>Travaille chaque main jusqu'à la maîtrise complète</li>
          <li>Divise en sections de 4-8 mesures</li>
          <li>Tempo : 50% du tempo final, ou plus lent</li>
          <li>Marque les doigtés optimaux dès le début</li>
        </ul>
        <p>
          <strong>Phase 3 : Assemblage (1-2 semaines)</strong>
        </p>
        <ul>
          <li>Combine les mains section par section (pas tout d'un coup !)</li>
          <li>Commence par les sections les plus faciles</li>
          <li>Garde un tempo très lent (40-50% du tempo final)</li>
          <li>Ne passe à la section suivante que quand la précédente est fluide</li>
        </ul>
        <p>
          La clé : <strong>patience et répétition</strong>. Chaque section doit
          être jouée 20-30 fois avant de passer à la suivante.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Travail méthodique d\'une section',
      description: 'Applique la méthode sur 8 mesures',
      steps: [
        'Choisis les 8 premières mesures de ton morceau',
        'Main droite seule : joue 10 fois très lentement',
        'Main gauche seule : joue 10 fois très lentement',
        'Combine les 2 premières mesures : 10 fois',
        'Ajoute les mesures 3-4 : joue mesures 1-4, 10 fois',
        'Ajoute les mesures 5-6 : joue mesures 1-6, 10 fois',
        'Ajoute les mesures 7-8 : joue tout, 10 fois',
        'Si c\'est fluide, augmente légèrement le tempo',
        'Répète ce processus pour chaque section du morceau'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Phase 4 : Fluidification et tempo</h2>
        <p>
          Une fois que tu peux jouer le morceau entier lentement sans erreur,
          il est temps d'augmenter progressivement le tempo.
        </p>
        <p>
          <strong>Méthode d'augmentation du tempo :</strong>
        </p>
        <ol>
          <li>Joue le morceau complet au tempo actuel sans erreur (3 fois de suite)</li>
          <li>Augmente le tempo de 5% (si tu utilises un métronome)</li>
          <li>Rejoue 5 fois au nouveau tempo</li>
          <li>Si c'est fluide, garde ce tempo pour ta session suivante</li>
          <li>Si ce n'est pas fluide, reviens au tempo précédent</li>
          <li>Répète ce processus sur plusieurs semaines</li>
        </ol>
        <p>
          <strong>Important :</strong> Ne sacrifie JAMAIS la précision pour la vitesse.
          Un tempo plus lent joué parfaitement est infiniment préférable à un
          tempo rapide avec des erreurs.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Phase 5 : Mémorisation</h2>
        <p>
          Jouer de mémoire est une compétence précieuse. Voici comment mémoriser
          efficacement :
        </p>
        <p>
          <strong>Les 4 types de mémoire musicale :</strong>
        </p>
        <ul>
          <li><strong>Mémoire auditive</strong> : Tu connais la mélodie par cœur</li>
          <li><strong>Mémoire visuelle</strong> : Tu "vois" la partition dans ta tête</li>
          <li><strong>Mémoire tactile</strong> : Tes doigts "savent" où aller</li>
          <li><strong>Mémoire analytique</strong> : Tu comprends la structure harmonique</li>
        </ul>
        <p>
          <strong>Technique de mémorisation :</strong>
        </p>
        <ol>
          <li>Mémorise section par section (4-8 mesures)</li>
          <li>Joue chaque section 10 fois avec partition, 10 fois sans</li>
          <li>Teste-toi : peux-tu commencer de n'importe quel point ?</li>
          <li>Visualise le morceau sans piano (dans le bus, avant de dormir)</li>
          <li>Chante les mélodies à voix haute</li>
        </ol>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Phase 6 : Expression et interprétation</h2>
        <p>
          Une fois les notes maîtrisées, c'est le moment de transformer ton jeu
          technique en <strong>art</strong>.
        </p>
        <p>
          <strong>Checklist d'expression :</strong>
        </p>
        <ul>
          <li>✓ Dynamiques variées : Où sont les crescendos, diminuendos ?</li>
          <li>✓ Phrasé clair : Où sont les respirations musicales ?</li>
          <li>✓ Articulation : Legato, staccato, accents appropriés ?</li>
          <li>✓ Pédale : Utilisée judicieusement pour enrichir (pas noyer) ?</li>
          <li>✓ Rubato : Légères variations de tempo pour l'expressivité ?</li>
          <li>✓ Caractère global : Le morceau a-t-il une identité émotionnelle ?</li>
        </ul>
        <p>
          <strong>Méthode :</strong> Enregistre-toi et écoute objectivement. Compare
          avec des enregistrements professionnels. Qu'est-ce qui manque ? Qu'est-ce
          qui pourrait être amélioré ?
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Phase 7 : Performance et partage</h2>
        <p>
          La musique n'existe pleinement que lorsqu'elle est <strong>partagée</strong>.
          Jouer pour les autres, même (et surtout) pour un petit public familial,
          est une expérience transformatrice.
        </p>
        <p>
          <strong>Comment se préparer à jouer devant les autres :</strong>
        </p>
        <ul>
          <li><strong>Pratique la performance</strong> : Joue comme si tu avais un public</li>
          <li><strong>Gère le trac</strong> : Respire profondément, commence lentement</li>
          <li><strong>Accepte l'imperfection</strong> : Les erreurs font partie de la musique live</li>
          <li><strong>Raconte l'histoire</strong> : Présente brièvement le morceau</li>
          <li><strong>Savoure l'instant</strong> : C'est un moment unique et précieux</li>
        </ul>
        <p>
          Conseil : Filme-toi en train de jouer. C'est stressant comme une vraie
          performance, et tu peux revoir ta prestation objectivement.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '13',
    type: 'practice',
    data: {
      title: 'Projet final : Ton premier morceau complet',
      description: 'Plan d\'action pour les 8 prochaines semaines',
      steps: [
        'Semaine 1 : Analyse et déchiffrage main droite (première moitié)',
        'Semaine 2 : Main droite (deuxième moitié) + main gauche (première moitié)',
        'Semaine 3 : Main gauche (deuxième moitié) + révision mains séparées',
        'Semaine 4 : Assemblage première moitié du morceau',
        'Semaine 5 : Assemblage deuxième moitié + morceau complet lent',
        'Semaine 6 : Augmentation progressive du tempo',
        'Semaine 7 : Mémorisation + ajout de l\'expression',
        'Semaine 8 : Peaufinage + première performance pour un proche',
        'Célèbre cette victoire : tu as accompli quelque chose d\'extraordinaire !'
      ]
    }
  },
  {
    id: '14',
    type: 'text',
    data: {
      content: `
        <h2>Félicitations : Niveau 3 terminé !</h2>
        <p>
          Tu as parcouru un chemin extraordinaire au cours de ce niveau. Tu maîtrises maintenant :
        </p>
        <ul>
          <li>✅ Les gammes complètes avec doigté correct</li>
          <li>✅ La lecture de partition (clé de Sol et Fa)</li>
          <li>✅ Les accords enrichis (7, maj7) et leurs inversions</li>
          <li>✅ Les techniques d'articulation (legato, staccato, accents)</li>
          <li>✅ L'utilisation expressive de la pédale de sustain</li>
          <li>✅ Des morceaux célèbres (Beethoven, Pachelbel, Tiersen)</li>
          <li>✅ L'expression musicale (dynamiques, tempo, phrasé)</li>
          <li>✅ La méthodologie pour apprendre un morceau complet</li>
        </ul>
        <p>
          Tu n'es plus un débutant. Tu es un <strong>pianiste en progression</strong>
          avec des compétences réelles et un premier répertoire. Le Niveau 4 va
          t'ouvrir les portes de morceaux encore plus beaux et complexes.
        </p>
        <p>
          <strong>Continue à pratiquer, reste patient, et surtout : prends du plaisir
          dans chaque note que tu joues. La musique est un voyage sans fin !</strong>
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon8Page() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={8}
      title="Premier morceau complet"
      duration={18}
      objectives={[
        'Choisir un morceau adapté à ton niveau',
        'Apprendre une méthodologie d\'apprentissage structurée',
        'Maîtriser les techniques de mémorisation',
        'Préparer et réaliser ta première performance'
      ]}
      content={content}
      previousLesson={{
        title: 'L\'expression musicale',
        href: '/parcours/niveau-3/lecon-7'
      }}
      nextLesson={{
        title: 'Techniques avancées du rythme',
        href: '/parcours/niveau-4/lecon-1'
      }}
    />
  )
}
