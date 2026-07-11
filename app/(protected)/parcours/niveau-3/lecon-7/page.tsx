import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>L'expression musicale : l'âme de ton interprétation</h2>
        <p>
          Tu maîtrises maintenant la technique de base : notes, rythmes, coordination,
          pédale. Mais il manque l'élément le plus important : <strong>l'émotion</strong>.
        </p>
        <p>
          Deux pianistes peuvent jouer exactement les mêmes notes et créer des
          expériences complètement différentes. La différence ? L'<strong>expression musicale</strong>.
        </p>
        <p>
          L'expression, c'est ta voix unique, ta personnalité musicale. C'est ce
          qui transforme une suite de notes en une histoire qui touche le cœur.
        </p>
        <p>
          Dans cette leçon, tu vas apprendre les outils principaux de l'expression :
          dynamiques, tempo, phrasé, et émotion. Tu vas passer de pianiste
          technique à <strong>artiste interprète</strong> !
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
        <h2>Les dynamiques : peindre avec le volume</h2>
        <p>
          Tu as déjà vu les dynamiques de base (piano, forte, etc.). Maintenant,
          apprenons à les utiliser pour créer du <strong>contraste</strong> et
          de la <strong>tension dramatique</strong>.
        </p>
        <p>
          <strong>La palette complète des nuances :</strong>
        </p>
        <ul>
          <li><strong>ppp (pianississimo)</strong> : à peine audible, un murmure</li>
          <li><strong>pp (pianissimo)</strong> : très doux, intime</li>
          <li><strong>p (piano)</strong> : doux, calme</li>
          <li><strong>mp (mezzo-piano)</strong> : moyennement doux</li>
          <li><strong>mf (mezzo-forte)</strong> : moyennement fort</li>
          <li><strong>f (forte)</strong> : fort, affirmé</li>
          <li><strong>ff (fortissimo)</strong> : très fort, puissant</li>
          <li><strong>fff (fortississimo)</strong> : maximum de puissance</li>
        </ul>
        <p>
          Le contraste entre pp et ff est ce qui crée le drame et l'émotion.
          Un morceau joué tout en mf est ennuyeux, comme un film sans variation
          de rythme.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Peindre avec les dynamiques',
      description: 'Explore toute la palette de volumes',
      steps: [
        'Joue la gamme de Do en commençant ppp (presque inaudible)',
        'Monte progressivement : pp, p, mp, mf, f, ff, fff',
        'Chaque note doit être progressivement plus forte',
        'Redescends en diminuant : fff→ff→f→mf→mp→p→pp→ppp',
        'Le crescendo et diminuendo doivent être parfaitement graduels',
        'Répète 5 fois : affine ton contrôle du volume',
        'Maintenant essaie des contrastes brusques : pp→ff→pp',
        'Ressens la tension créée par ces changements dynamiques'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Le crescendo et diminuendo : tension et résolution</h2>
        <p>
          Les changements progressifs de volume sont les outils les plus puissants
          pour créer de l'émotion.
        </p>
        <p>
          <strong>Crescendo (cresc. ou <)</strong> : augmenter progressivement
        </p>
        <ul>
          <li>Crée de l'<strong>anticipation</strong>, de la <strong>tension</strong></li>
          <li>Dirige l'auditeur vers un point culminant</li>
          <li>Peut être court (sur 2 mesures) ou long (sur 16 mesures)</li>
        </ul>
        <p>
          <strong>Diminuendo (dim. ou >)</strong> : diminuer progressivement
        </p>
        <ul>
          <li>Crée de l'<strong>apaisement</strong>, de la <strong>résolution</strong></li>
          <li>Donne une impression de distance ou de disparition</li>
          <li>Souvent utilisé en fin de phrase musicale</li>
        </ul>
        <p>
          Un crescendo suivi d'un diminuendo crée une vague émotionnelle :
          tension → climax → relâchement. C'est la structure de base de l'expression musicale.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice : Créer des vagues émotionnelles',
      description: 'Maîtrise le crescendo et diminuendo',
      steps: [
        'Joue "Au clair de la lune" en commençant piano',
        'Fais un crescendo progressif sur les 4 premières mesures',
        'Atteins forte sur "au clair de la lune"',
        'Immédiatement après, fais un diminuendo',
        'Finis en piano sur la dernière note',
        'Répète : sens comment la dynamique change l\'émotion',
        'Essaie différentes "vagues" : crescendo rapide, diminuendo lent',
        'Chaque choix crée une ambiance différente'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Le tempo et ses variations : le temps élastique</h2>
        <p>
          Le tempo (vitesse) n'est jamais complètement rigide en musique expressive.
          Les variations subtiles de tempo ajoutent de la vie et de l'humanité.
        </p>
        <p>
          <strong>Variations de tempo courantes :</strong>
        </p>
        <ul>
          <li><strong>Ritardando (rit.)</strong> : ralentir progressivement</li>
          <li><strong>Accelerando (accel.)</strong> : accélérer progressivement</li>
          <li><strong>Rubato</strong> : "temps volé" - flexibilité expressive du tempo</li>
          <li><strong>Fermata (𝄐)</strong> : prolonger une note au-delà de sa valeur</li>
          <li><strong>A tempo</strong> : retour au tempo original</li>
        </ul>
        <p>
          Le <strong>rubato</strong> est particulièrement important : c'est l'art
          de légèrement accélérer ou ralentir pour des raisons expressives, tout
          en gardant le tempo global cohérent.
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
        <h2>Le phrasé musical : respirer avec la musique</h2>
        <p>
          Le <strong>phrasé</strong> est l'organisation de la musique en "phrases"
          musicales, comme les phrases dans un texte. Chaque phrase a un début,
          un développement, et une fin.
        </p>
        <p>
          <strong>Caractéristiques d'une bonne phrase musicale :</strong>
        </p>
        <ul>
          <li><strong>Direction</strong> : La phrase va quelque part, elle a un but</li>
          <li><strong>Climax</strong> : Un point culminant (souvent vers le milieu/fin)</li>
          <li><strong>Respiration</strong> : Une légère pause à la fin de la phrase</li>
          <li><strong>Cohérence</strong> : Les notes sont liées en une unité</li>
        </ul>
        <p>
          Imagine un chanteur : il doit respirer entre les phrases. Au piano,
          tu dois créer ces "respirations" musicales avec de légères pauses ou
          des changements subtils de tempo/volume.
        </p>
        <p>
          Les <strong>lignes de phrasé</strong> sur les partitions (courbes au-dessus
          des notes) indiquent où commencent et finissent les phrases.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Créer des phrases musicales',
      description: 'Apprends à phraser expressément',
      steps: [
        'Joue "Ode à la joie" (première phrase : Mi-Mi-Fa-Sol-Sol-Fa-Mi-Ré)',
        'Identifie où est le climax : probablement sur le premier Sol',
        'Fais un crescendo jusqu\'au Sol (climax)',
        'Puis un diminuendo jusqu\'à la fin de la phrase (Ré)',
        'Fais une micro-pause après le Ré (respiration)',
        'Commence la phrase suivante après cette respiration',
        'Répète 10 fois en exagérant le phrasé',
        'C\'est vivant, humain, respirant !'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Jouer avec émotion : la connexion cœur-musique</h2>
        <p>
          Toutes ces techniques (dynamiques, tempo, phrasé) servent un seul but :
          <strong>exprimer une émotion</strong>.
        </p>
        <p>
          <strong>Comment trouver l'émotion d'un morceau :</strong>
        </p>
        <ul>
          <li><strong>Écoute des interprétations</strong> : Comment les grands maîtres le jouent-ils ?</li>
          <li><strong>Lis le contexte</strong> : Quand et pourquoi le compositeur l'a-t-il écrit ?</li>
          <li><strong>Ressens la tonalité</strong> : Majeur = joyeux, mineur = triste (généralement)</li>
          <li><strong>Identifie les mots-clés</strong> : Allegro (joyeux), Andante (calmement), etc.</li>
          <li><strong>Projette tes propres émotions</strong> : Qu'évoque ce morceau pour toi ?</li>
        </ul>
        <p>
          Le plus important : <strong>ressens sincèrement ce que tu joues</strong>.
          Si tu ne ressens rien, l'auditeur ne ressentira rien non plus. La musique
          est un langage émotionnel direct du cœur au cœur.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `
        <h2>Les indications d'expression sur les partitions</h2>
        <p>
          Les compositeurs utilisent des termes italiens pour indiquer l'expression
          souhaitée. Voici les plus courants :
        </p>
        <p>
          <strong>Caractère général :</strong>
        </p>
        <ul>
          <li><strong>Dolce</strong> : doux, suave</li>
          <li><strong>Espressivo</strong> : expressif, avec émotion</li>
          <li><strong>Cantabile</strong> : chantant</li>
          <li><strong>Maestoso</strong> : majestueux</li>
          <li><strong>Grazioso</strong> : gracieux</li>
          <li><strong>Con fuoco</strong> : avec feu, passionné</li>
        </ul>
        <p>
          <strong>Tempo et caractère :</strong>
        </p>
        <ul>
          <li><strong>Allegro</strong> : rapide et joyeux</li>
          <li><strong>Andante</strong> : allant, posé</li>
          <li><strong>Adagio</strong> : lent et tranquille</li>
          <li><strong>Vivace</strong> : vif, animé</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer avec différents caractères',
      description: 'Explore les différentes couleurs émotionnelles',
      steps: [
        'Choisis un morceau simple que tu connais bien',
        'Joue-le "Dolce" : doux, tendre, comme une berceuse',
        'Rejoue-le "Con fuoco" : passionné, énergique, intense',
        'Rejoue-le "Grazioso" : gracieux, léger, délicat',
        'Rejoue-le "Maestoso" : majestueux, noble, puissant',
        'Ressens comment chaque caractère change TOUT',
        'C\'est le même morceau, mais 4 histoires différentes !',
        'Choisis ton interprétation préférée et affine-la'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>L'équilibre entre technique et expression</h2>
        <p>
          Un piège courant : se concentrer tellement sur l'expression qu'on
          néglige la technique, ou l'inverse.
        </p>
        <p>
          <strong>L'approche équilibrée :</strong>
        </p>
        <ol>
          <li><strong>Phase 1 : Technique pure</strong> - Apprends les notes, le rythme, les doigtés</li>
          <li><strong>Phase 2 : Expression consciente</strong> - Ajoute dynamiques et phrasé délibérément</li>
          <li><strong>Phase 3 : Expression intuitive</strong> - Laisse l'émotion guider naturellement</li>
        </ol>
        <p>
          Au début, l'expression doit être <strong>exagérée</strong> pour que tu
          l'intègres. Avec le temps, elle devient naturelle et subtile. C'est comme
          apprendre une langue : d'abord tu penses à chaque mot, puis tu parles
          couramment sans y penser.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `
        <h2>Développer ton style personnel</h2>
        <p>
          L'expression musicale est ce qui fait ton <strong>style unique</strong>.
          Deux pianistes peuvent avoir des visions complètement différentes du
          même morceau, et les deux peuvent être magnifiques.
        </p>
        <p>
          <strong>Pour développer ton style :</strong>
        </p>
        <ul>
          <li><strong>Écoute beaucoup</strong> : Immerge-toi dans différents styles et époques</li>
          <li><strong>Expérimente</strong> : Essaie des choses inhabituelles, prends des risques</li>
          <li><strong>Enregistre-toi</strong> : Tu découvriras ce qui sonne bien et ce qui ne marche pas</li>
          <li><strong>Sois sincère</strong> : Joue ce que tu ressens, pas ce que tu "devrais" ressentir</li>
          <li><strong>Accepte l'imperfection</strong> : L'expression authentique bat la perfection technique</li>
        </ul>
        <p>
          Avec le temps, ton style va émerger naturellement. C'est ton empreinte
          musicale unique, aussi personnelle qu'une signature. Cultive-la et
          sois fier de ta voix musicale !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: 'piano-exercice',
    type: 'interactive',
    data: {
      component: 'piano',
      title: 'À toi de jouer 🎹',
      instructions: "Fais chanter l'accord de Do. Joue Do, Mi, Sol sur ton piano (ou clique sur les touches) — chaque note validée s'allume.",
      targetNotes: ['C', 'E', 'G']
    }
  }
]

export default function Lecon7Page() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={7}
      title="L'expression musicale"
      duration={16}
      objectives={[
        'Maîtriser les dynamiques et créer du contraste',
        'Utiliser les variations de tempo expressives',
        'Comprendre et appliquer le phrasé musical',
        'Jouer avec sincérité et émotion'
      ]}
      content={content}
      previousLesson={{
        title: 'Morceaux célèbres faciles',
        href: '/parcours/niveau-3/lecon-6'
      }}
      nextLesson={{
        title: 'Premier morceau complet',
        href: '/parcours/niveau-3/lecon-8'
      }}
    />
  )
}
