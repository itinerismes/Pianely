import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>L'indépendance : clé du répertoire avancé</h2>
<p>L'indépendance des mains est la capacité de faire exécuter à chaque main une tâche complètement différente - rythme, mélodie, dynamique - de manière simultanée et fluide.</p>
<p>Cette compétence est indispensable pour le répertoire classique, le jazz, et toute musique polyphonique. C'est ce qui transforme le piano d'un instrument mélodique en véritable orchestre.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>Rythmes différents simultanés</h2>
<p>Le premier niveau d'indépendance : jouer des rythmes différents dans chaque main.</p>
<p><strong>Exercice de base :</strong></p>
<ul>
<li>Main gauche : Noires régulières (♩ ♩ ♩ ♩)</li>
<li>Main droite : Croches régulières (♪♪ ♪♪ ♪♪ ♪♪)</li>
<li>La main droite joue deux fois plus vite que la gauche</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Rythmes simples indépendants',
      steps: [
        'Tapez avec la main gauche : noires régulières (1-2-3-4)',
        'Tapez avec la main droite : croches (1-et-2-et-3-et-4-et)',
        'Combinez les deux en tapant sur une table',
        'Transférez au piano : MG joue Do, MD joue Mi',
        'Gardez les deux mains parfaitement régulières'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `<h2>Patterns rythmiques opposés</h2>
<p>Complexifions avec des patterns rythmiques qui s'opposent :</p>
<p><strong>Pattern jazz classique :</strong></p>
<ul>
<li>Main gauche : ♩ - ♩ - ♩ - ♩ (walking bass régulier)</li>
<li>Main droite : Noire-Soupir-Croche.Croche-Noire (mélodie syncopée)</li>
<li>Les accents ne tombent jamais ensemble</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `<h2>Introduction au contrepoint</h2>
<p>Le contrepoint est l'art de combiner plusieurs lignes mélodiques indépendantes. Chaque main joue sa propre mélodie, et ensemble elles créent l'harmonie.</p>
<p><strong>Principe du contrepoint :</strong></p>
<ul>
<li>Chaque voix a sa propre direction mélodique</li>
<li>Mouvement contraire souvent privilégié (une main monte, l'autre descend)</li>
<li>Chaque voix doit être musicale individuellement</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `<h2>Les inventions à deux voix de Bach</h2>
<p>Bach a écrit 15 Inventions à deux voix spécifiquement pour développer l'indépendance des mains. Chaque invention est un petit chef-d'œuvre de contrepoint.</p>
<p><strong>Caractéristiques :</strong></p>
<ul>
<li>Deux voix complètement indépendantes</li>
<li>Imitations entre les mains</li>
<li>Lignes mélodiques entrelacées</li>
<li>Excellent exercice technique et musical</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice style Bach',
      steps: [
        'Main droite : jouez une gamme ascendante de Do (noires)',
        'Main gauche : jouez la même gamme descendante (même rythme)',
        'Les deux mains bougent en miroir - mouvement contraire',
        'Ajoutez une variation : MD en croches, MG en noires',
        'Gardez chaque voix claire et égale'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `<h2>Dynamiques indépendantes</h2>
<p>Un niveau supérieur d'indépendance : jouer à des volumes différents simultanément.</p>
<p><strong>Exercice fondamental :</strong></p>
<ul>
<li>Main droite : mélodie forte (f)</li>
<li>Main gauche : accompagnement doux (p)</li>
<li>La mélodie doit "chanter" au-dessus de l'accompagnement</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Contrôle dynamique',
      steps: [
        'Jouez un accord des deux mains - même volume',
        'Répétez en jouant la main droite plus forte',
        'Répétez en jouant la main gauche plus forte',
        'Alternez : MD forte puis MG forte',
        'Jouez une mélodie simple avec cet équilibre'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `<h2>Articulations différentes</h2>
<p>Chaque main peut avoir sa propre articulation :</p>
<ul>
<li><strong>Main droite legato</strong> (lié, coulé) : mélodie expressive</li>
<li><strong>Main gauche staccato</strong> (détaché, piqué) : accompagnement rythmique</li>
<li>Ou l'inverse selon l'effet voulu</li>
</ul>
<p>Cette différenciation crée des textures riches et variées.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `<h2>Exercices de coordination avancés</h2>
<p><strong>Exercice Hanon modifié :</strong></p>
<ul>
<li>Main droite : gamme de Do en croches ascendantes</li>
<li>Main gauche : accords sur les temps (I-IV-V-I)</li>
<li>La main droite est fluide et continue, la main gauche marque les harmonies</li>
</ul>
<p>Ce type d'exercice développe la capacité à maintenir une ligne continue pendant que l'autre main articule.</p>`,
      variant: 'tip'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Exercice quotidien d\'indépendance',
      steps: [
        'Main droite : jouez une mélodie simple (ex: Au clair de la lune)',
        'Main gauche : ajoutez une basse sur les temps principaux',
        'Variez le rythme de la main gauche (croches, triolets)',
        'Changez les dynamiques : MD forte, MG piano',
        'Travaillez 10 minutes chaque jour'
      ]
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Application au répertoire</h2>
<p>L'indépendance des mains s'applique à presque tout le répertoire pianistique :</p>
<ul>
<li><strong>Mozart/Haydn :</strong> Mélodie légère avec accompagnement d'Alberti</li>
<li><strong>Chopin :</strong> Mélodie chantante sur tapis d'arpèges</li>
<li><strong>Bach :</strong> Lignes polyphoniques entrecroisées</li>
<li><strong>Jazz :</strong> Improvisation sur rythme de walking bass</li>
</ul>
<p>Chaque style demande un type d'indépendance spécifique. La pratique quotidienne de ces exercices vous préparera à tous les défis !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon5Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={5}
      title="Indépendance des mains avancée"
      duration={18}
      objectives={[
        'Jouer des rythmes différents simultanément',
        'Comprendre les bases du contrepoint',
        'Contrôler les dynamiques indépendamment',
        'Maîtriser les articulations différenciées',
        'Appliquer ces techniques au répertoire'
      ]}
      content={content}
      previousLesson={{ title: 'Rythmes complexes', href: '/parcours/niveau-4/lecon-4' }}
      nextLesson={{ title: 'Techniques d\'interprétation', href: '/parcours/niveau-4/lecon-6' }}
    />
  )
}
