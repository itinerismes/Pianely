import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>Introduction aux gammes</h2>
<p>Bienvenue dans le niveau intermédiaire ! Les gammes sont la fondation technique de tout pianiste. Maîtriser les gammes majeures et mineures vous permettra de jouer n'importe quelle pièce avec fluidité et confiance.</p>
<p>Dans cette leçon, nous explorerons toutes les gammes majeures et les trois types de gammes mineures : naturelle, harmonique et mélodique.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>Les gammes majeures</h2>
<p>Une gamme majeure suit toujours la même structure d'intervalles : <strong>Ton - Ton - Demi-ton - Ton - Ton - Ton - Demi-ton</strong>.</p>
<p>Commençons par Do majeur (sans altérations) :</p>
<ul>
<li>Do - Ré - Mi - Fa - Sol - La - Si - Do</li>
<li>Main droite : 1-2-3-1-2-3-4-5</li>
<li>Main gauche : 5-4-3-2-1-3-2-1</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `<h3>Gamme de Sol majeur</h3>
<p>Sol majeur contient un dièse (Fa#) :</p>
<ul>
<li>Sol - La - Si - Do - Ré - Mi - Fa# - Sol</li>
<li>Main droite : 1-2-3-1-2-3-4-5</li>
<li>Main gauche : 5-4-3-2-1-3-2-1</li>
</ul>
<p><strong>Astuce :</strong> Le passage du pouce sous le 3ème doigt doit être fluide et silencieux.</p>`,
      variant: 'highlight'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Gammes majeures',
      steps: [
        'Jouez Do majeur sur 2 octaves, lentement (♩= 60)',
        'Ajoutez Sol majeur, puis Ré majeur (1 dièse, puis 2 dièses)',
        'Pratiquez Fa majeur (1 bémol : Si♭)',
        'Augmentez progressivement le tempo jusqu\'à ♩= 120',
        'Travaillez l\'égalité des doigts et la fluidité du passage du pouce'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `<h2>Les gammes mineures naturelles</h2>
<p>Les gammes mineures ont une sonorité plus sombre. La gamme mineure naturelle suit ce schéma :</p>
<p><strong>Ton - Demi-ton - Ton - Ton - Demi-ton - Ton - Ton</strong></p>
<p>Exemple avec La mineur (relative de Do majeur) :</p>
<ul>
<li>La - Si - Do - Ré - Mi - Fa - Sol - La</li>
<li>Aucune altération, comme Do majeur</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `<h2>Les gammes mineures harmoniques</h2>
<p>La gamme mineure harmonique élève le 7ème degré d'un demi-ton, créant un intervalle caractéristique de <strong>seconde augmentée</strong> entre le 6ème et le 7ème degré.</p>
<p>La mineur harmonique :</p>
<ul>
<li>La - Si - Do - Ré - Mi - Fa - Sol# - La</li>
<li>Notez le Sol dièse qui crée cette sonorité "orientale"</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `<h2>Les gammes mineures mélodiques</h2>
<p>La gamme mineure mélodique est unique : elle diffère à la montée et à la descente.</p>
<p><strong>À la montée :</strong> on élève les 6ème et 7ème degrés</p>
<ul>
<li>La - Si - Do - Ré - Mi - Fa# - Sol# - La</li>
</ul>
<p><strong>À la descente :</strong> on revient à la gamme mineure naturelle</p>
<ul>
<li>La - Sol - Fa - Mi - Ré - Do - Si - La</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Les trois types de gammes mineures',
      steps: [
        'Jouez La mineur naturel - écoutez la sonorité',
        'Jouez La mineur harmonique - remarquez le Sol#',
        'Jouez La mineur mélodique - montée avec Fa# et Sol#, descente naturelle',
        'Comparez les trois versions côte à côte',
        'Répétez avec Mi mineur et Ré mineur'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `<h2>Technique du passage du pouce avancée</h2>
<p>Pour jouer les gammes avec fluidité, le passage du pouce est crucial :</p>
<ul>
<li><strong>Anticipation :</strong> Préparez le pouce avant qu'il ne joue</li>
<li><strong>Mouvement latéral :</strong> Le pouce glisse sous la main, pas de mouvement vertical</li>
<li><strong>Légèreté :</strong> Évitez l'accent sur le pouce</li>
<li><strong>Poignet souple :</strong> Le poignet accompagne le mouvement naturellement</li>
</ul>`,
      variant: 'tip'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice de passage du pouce',
      steps: [
        'Jouez Do-Ré-Mi-Fa en boucle (1-2-3-1), très lentement',
        'Concentrez-vous uniquement sur la fluidité du passage 3→1',
        'Éliminez tout son ou accent parasite',
        'Augmentez le tempo progressivement',
        'Appliquez cette technique à toutes vos gammes'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `<h2>Plan de pratique hebdomadaire</h2>
<p>Pour maîtriser les gammes, voici un plan structuré :</p>
<ul>
<li><strong>Jour 1-2 :</strong> Do, Sol, Ré majeur (dièses progressifs)</li>
<li><strong>Jour 3-4 :</strong> Fa, Si♭, Mi♭ majeur (bémols progressifs)</li>
<li><strong>Jour 5-6 :</strong> La, Mi, Ré mineur (les trois formes)</li>
<li><strong>Jour 7 :</strong> Révision et travail des passages difficiles</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `<h2>Conseil pour la progression</h2>
<p>Ne cherchez pas la vitesse immédiatement. Un tempo lent et régulier avec une technique parfaite est infiniment plus bénéfique qu'un tempo rapide avec des défauts.</p>
<p><strong>Métronome recommandé :</strong></p>
<ul>
<li>Débutant dans la gamme : ♩= 60</li>
<li>Confortable : ♩= 80-100</li>
<li>Maîtrise : ♩= 120-144</li>
</ul>`,
      variant: 'tip'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Prochaines étapes</h2>
<p>Une fois ces gammes maîtrisées, vous aurez développé :</p>
<ul>
<li>Une technique solide et fiable</li>
<li>Une compréhension profonde des tonalités</li>
<li>L'agilité nécessaire pour le répertoire intermédiaire</li>
<li>La base pour aborder les armures dans la prochaine leçon</li>
</ul>
<p>Les gammes sont un travail de longue haleine - continuez à les pratiquer quotidiennement !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon1Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={1}
      title="Les gammes majeures et mineures"
      duration={18}
      objectives={[
        'Comprendre la structure des gammes majeures',
        'Maîtriser les trois types de gammes mineures',
        'Développer la technique du passage du pouce',
        'Jouer les gammes fondamentales avec fluidité',
        'Établir une routine de pratique quotidienne'
      ]}
      content={content}
      nextLesson={{ title: 'Les armures et tonalités', href: '/parcours/niveau-4/lecon-2' }}
    />
  )
}
