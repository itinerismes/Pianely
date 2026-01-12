import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>Lecture à vue : compétence essentielle</h2>
<p>La lecture à vue est la capacité de jouer une partition que vous n'avez jamais vue auparavant, sans préparation. C'est une compétence qui transforme votre relation au piano : elle vous permet d'explorer un répertoire illimité et de jouer avec d'autres musiciens.</p>
<p>À ce niveau intermédiaire, nous allons développer des stratégies pour lire rapidement des partitions plus complexes.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>Principe fondamental : regarder devant</h2>
<p>La règle d'or de la lecture à vue : <strong>vos yeux doivent toujours être en avance sur vos mains</strong>.</p>
<ul>
<li>Regardez 1 à 2 mesures en avance</li>
<li>Ne regardez jamais vos mains (sauf exceptions)</li>
<li>Utilisez votre vision périphérique pour les touches</li>
<li>Anticipez les patterns et les formes</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `<h2>Lecture par groupes, pas par notes</h2>
<p>À ce niveau, vous ne devez plus lire note par note, mais par <strong>patterns musicaux</strong> :</p>
<ul>
<li><strong>Accords</strong> - reconnaissez la forme (triade, accord de 7ème)</li>
<li><strong>Gammes</strong> - voyez la direction et la tonalité</li>
<li><strong>Arpèges</strong> - identifiez le pattern</li>
<li><strong>Intervalles</strong> - tierce, quinte, octave (pas "Do-Mi" mais "tierce")</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Reconnaissance de patterns',
      steps: [
        'Prenez une partition simple',
        'Sans jouer, identifiez 5 patterns (accords, gammes, arpèges)',
        'Nommez-les à voix haute',
        'Maintenant jouez en pensant au pattern, pas aux notes individuelles',
        'Répétez avec des partitions de plus en plus complexes'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `<h2>Gérer les lignes supplémentaires</h2>
<p>Les notes avec beaucoup de lignes supplémentaires peuvent ralentir la lecture. Stratégies :</p>
<p><strong>Points de référence :</strong></p>
<ul>
<li>Do central (entre les deux portées)</li>
<li>Do grave (2 lignes sous la clé de Fa)</li>
<li>Do aigu (2 lignes au-dessus de la clé de Sol)</li>
<li>Comptez par intervalles depuis ces points</li>
</ul>`,
      variant: 'tip'
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `<h2>Lire les accords rapidement</h2>
<p>Pour lire un accord à 3 ou 4 notes instantanément :</p>
<ul>
<li><strong>Identifiez la note du bas</strong> (la fondamentale)</li>
<li><strong>Regardez la forme</strong> (tierce, tierce, tierce = accord de 7ème)</li>
<li><strong>Jouez la forme</strong> sans déchiffrer chaque note</li>
</ul>
<p>Exemple : Si vous voyez Do-Mi-Sol empilés, pensez "accord de Do majeur", pas "Do, puis Mi, puis Sol".</p>`,
      variant: 'highlight'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Lecture d\'accords',
      steps: [
        'Écrivez ou trouvez une série d\'accords en notation',
        'Regardez le premier accord 2 secondes',
        'Fermez les yeux et jouez-le',
        'Vérifiez si c\'est correct',
        'Augmentez progressivement : 2 accords, puis 3, puis 4',
        'Chronométrez-vous pour mesurer vos progrès'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `<h2>Gérer les rythmes complexes</h2>
<p>Les rythmes complexes ralentissent souvent la lecture. Approche :</p>
<ul>
<li><strong>Identifiez le temps :</strong> 4/4, 3/4, 6/8, etc.</li>
<li><strong>Repérez les temps forts :</strong> où tombent les accents ?</li>
<li><strong>Simplifiez mentalement :</strong> syncope = "et du temps"</li>
<li><strong>Tapez le rythme</strong> avant de jouer si nécessaire</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `<h2>Stratégie de survie : ne pas s'arrêter</h2>
<p>En lecture à vue, la règle absolue : <strong>CONTINUEZ</strong>, quoi qu'il arrive.</p>
<ul>
<li>Si vous ratez une note : continuez</li>
<li>Si vous ne pouvez pas jouer un passage : simplifiez, mais gardez le tempo</li>
<li>Jouez les notes principales (mélodie, basse) et omettez le reste si nécessaire</li>
<li>Le rythme et la continuité priment sur la perfection</li>
</ul>`,
      variant: 'warning'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice quotidien de lecture à vue',
      steps: [
        'Choisissez une partition FACILE (2 niveaux sous votre niveau)',
        'Regardez la tonalité, le tempo, le caractère (30 secondes)',
        'Jouez du début à la fin SANS S\'ARRÊTER',
        'Acceptez les erreurs, gardez le tempo',
        'Recommencez avec une autre partition chaque jour',
        'Ne rejouez JAMAIS la même partition - toujours du nouveau !'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `<h2>Progression méthodique</h2>
<p>Pour améliorer votre lecture à vue systématiquement :</p>
<ul>
<li><strong>Semaine 1-2 :</strong> Pièces niveau débutant avancé</li>
<li><strong>Semaine 3-4 :</strong> Pièces niveau 3 (Préparatoire)</li>
<li><strong>Semaine 5-6 :</strong> Pièces début niveau 4 (Intermédiaire)</li>
<li><strong>Objectif :</strong> Lire couramment à 1-2 niveaux sous votre niveau technique</li>
</ul>`,
      variant: 'tip'
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `<h2>Ressources pour pratiquer</h2>
<p>Où trouver du matériel de lecture à vue :</p>
<ul>
<li><strong>Recueils de lecture à vue :</strong> Spécifiquement conçus pour cette pratique</li>
<li><strong>Partitions faciles :</strong> Arrangements simplifiés de mélodies connues</li>
<li><strong>IMSLP.org :</strong> Partitions classiques gratuites</li>
<li><strong>Duos piano :</strong> Jouer avec un ami force à continuer</li>
<li><strong>Applications :</strong> Certaines apps génèrent des exercices de lecture</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Les bénéfices à long terme</h2>
<p>Pratiquer la lecture à vue quotidiennement (même 5-10 minutes) transformera votre jeu :</p>
<ul>
<li>Vous apprendrez de nouvelles pièces 3x plus rapidement</li>
<li>Vous pourrez jouer avec d'autres musiciens spontanément</li>
<li>Vous explorerez un répertoire illimité</li>
<li>Votre compréhension musicale s'approfondira</li>
</ul>
<p>La lecture à vue est comme un muscle : elle se développe avec la pratique régulière et patiente. Soyez constant, et les progrès viendront !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon8Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={8}
      title="Lecture à vue niveau 2"
      duration={15}
      objectives={[
        'Lire par patterns musicaux plutôt que par notes',
        'Gérer les lignes supplémentaires efficacement',
        'Lire les accords instantanément',
        'Maintenir la continuité malgré les erreurs',
        'Établir une routine quotidienne de lecture à vue'
      ]}
      content={content}
      previousLesson={{ title: 'Les arpèges étendus', href: '/parcours/niveau-4/lecon-7' }}
      nextLesson={{ title: 'Répertoire classique intermédiaire', href: '/parcours/niveau-4/lecon-9' }}
    />
  )
}
