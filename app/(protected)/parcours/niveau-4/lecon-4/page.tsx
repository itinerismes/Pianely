import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>L'univers des rythmes complexes</h2>
<p>Jusqu'ici, vous avez travaillé principalement en 4/4 avec des rythmes réguliers. Il est temps d'explorer les syncopes, les triolets avancés et les mesures composées qui enrichiront considérablement votre jeu.</p>
<p>Ces rythmes sont présents dans tous les styles : jazz, latin, classique moderne, et musique contemporaine.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>La syncope : jouer "à contre-temps"</h2>
<p>Une syncope déplace l'accent rythmique du temps fort vers le temps faible, créant une sensation de surprise et d'énergie.</p>
<p><strong>Syncope classique :</strong></p>
<ul>
<li>Au lieu de : ♩ ♩ ♩ ♩ (1-2-3-4)</li>
<li>On joue : ♩ ♪♩♪ ♩ (1-et-2-et-3-et-4)</li>
<li>L'accent se retrouve sur le "et" du temps</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Ressentir la syncope',
      steps: [
        'Tapez régulièrement avec votre pied : 1-2-3-4',
        'Frappez des mains sur les temps : 1-2-3-4',
        'Maintenant frappez sur "1-et-2-et-3-et-4-et" (les contretemps)',
        'Gardez le pied régulier !',
        'Jouez sur le piano : Do sur les contretemps, pied sur les temps'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `<h2>Syncopes dans la musique</h2>
<p>Les syncopes sont omniprésentes dans le jazz et la musique latine. Elles créent du "swing" et de l'énergie.</p>
<p><strong>Pattern ragtime classique :</strong></p>
<ul>
<li>Main gauche : Noire - Noire - Noire - Noire (1-2-3-4)</li>
<li>Main droite : Noire - Croche-Croche-Noire - Croche-Croche-Noire</li>
<li>La main droite "danse" sur les syncopes</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `<h2>Les triolets avancés</h2>
<p>Vous connaissez déjà les triolets de base (3 notes dans l'espace de 2). Explorons maintenant des combinaisons plus complexes.</p>
<p><strong>Triolets avec silences :</strong></p>
<ul>
<li>Note - Silence - Note (1-2-3)</li>
<li>Silence - Note - Note (1-2-3)</li>
<li>Ces patterns créent des effets de "hoquets" rythmiques</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Triolets variés',
      steps: [
        'Comptez "1-2-3, 1-2-3" régulièrement',
        'Jouez trois notes égales sur chaque triolet',
        'Ajoutez un silence sur le "2" : Note-Silence-Note',
        'Inversez : Silence-Note-Note',
        'Combinez ces patterns dans une improvisation'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `<h2>Mesures composées : 6/8</h2>
<p>Le 6/8 n'est pas simplement "6 croches par mesure". C'est une mesure à <strong>2 temps</strong>, chaque temps contenant 3 croches.</p>
<p><strong>Battue :</strong></p>
<ul>
<li>Temps 1 : croches 1-2-3 (FORT-faible-faible)</li>
<li>Temps 2 : croches 4-5-6 (fort-faible-faible)</li>
<li>Sensation "ternaire" - pensez à "1-2-3, 2-2-3"</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `<h2>Musique en 6/8</h2>
<p>Le 6/8 est très utilisé dans :</p>
<ul>
<li><strong>Berceuses</strong> : mouvement doux et berceur</li>
<li><strong>Gigues</strong> : danses rapides et énergiques</li>
<li><strong>Musique irlandaise</strong> : jigs et reels</li>
<li><strong>Barcarolles</strong> : évoquant le mouvement des vagues</li>
</ul>
<p>Exemple célèbre : "The House of the Rising Sun"</p>`,
      variant: 'normal'
    }
  },
  {
    id: '9',
    type: 'practice',
    data: {
      title: 'Exercice : Maîtriser le 6/8',
      steps: [
        'Battez la mesure : 2 temps larges (1-2)',
        'Subdivisez mentalement chaque temps en 3 croches',
        'Main gauche : jouez sur les temps principaux (1 et 4)',
        'Main droite : mélodie en croches 1-2-3-4-5-6',
        'Accentuez naturellement les temps 1 et 4'
      ]
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `<h2>Mesure en 9/8</h2>
<p>Le 9/8 est une extension du 6/8 : <strong>3 temps</strong> de 3 croches chacun.</p>
<p><strong>Battue :</strong></p>
<ul>
<li>Temps 1 : croches 1-2-3 (FORT-faible-faible)</li>
<li>Temps 2 : croches 4-5-6 (moyen-faible-faible)</li>
<li>Temps 3 : croches 7-8-9 (moyen-faible-faible)</li>
</ul>
<p>Utilisé dans la musique baroque (notamment les passacailles) et la musique folklorique.</p>`,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `<h2>Introduction aux polyrythmes</h2>
<p>Un polyrythme superpose deux rythmes différents simultanément. Le plus simple : <strong>2 contre 3</strong>.</p>
<p><strong>2 contre 3 :</strong></p>
<ul>
<li>Main gauche : 2 notes égales (♩ ♩)</li>
<li>Main droite : 3 notes égales (♩. ♩. ♩.)</li>
<li>Astuce : comptez "1-2-3-4-5-6" et jouez MG sur 1 et 4, MD sur 1-3-5</li>
</ul>`,
      variant: 'tip'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Exercice : Polyrythme 2 contre 3',
      steps: [
        'Tapez avec la main gauche : 1-2-3-4 (4 temps égaux)',
        'Tapez avec la main droite : 1-2-3-4-5-6 (6 temps égaux)',
        'Superposez : MG sur 1 et 4, MD sur 1-3-5',
        'Transférez au piano : MG joue Do-Sol, MD joue une gamme',
        'Ralentissez jusqu\'à sentir l\'indépendance'
      ]
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Application et pratique</h2>
<p>Intégrer ces rythmes complexes demande patience et méthode :</p>
<ul>
<li><strong>Isoler :</strong> Travaillez chaque main séparément</li>
<li><strong>Ralentir :</strong> Tempo très lent avec métronome</li>
<li><strong>Compter :</strong> Verbalisez le rythme avant de jouer</li>
<li><strong>Ressentir :</strong> Laissez votre corps intérioriser le groove</li>
</ul>
<p>Ces rythmes complexes vous ouvrent les portes de styles musicaux variés et enrichiront considérablement votre expression pianistique !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon4Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={4}
      title="Rythmes complexes"
      duration={16}
      objectives={[
        'Maîtriser les syncopes et contretemps',
        'Jouer les triolets avancés avec silences',
        'Comprendre les mesures composées 6/8 et 9/8',
        'S\'initier aux polyrythmes simples'
      ]}
      content={content}
      previousLesson={{ title: 'Les accords de 7ème avancés', href: '/parcours/niveau-4/lecon-3' }}
      nextLesson={{ title: 'Indépendance des mains avancée', href: '/parcours/niveau-4/lecon-5' }}
    />
  )
}
