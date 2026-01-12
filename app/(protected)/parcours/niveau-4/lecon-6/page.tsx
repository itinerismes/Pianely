import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>Au-delà de la technique : l'art de l'interprétation</h2>
<p>Jouer les notes correctement n'est que le début. L'interprétation transforme une suite de notes en musique vivante, émotionnelle, qui touche l'auditeur.</p>
<p>Dans cette leçon, nous explorerons les outils expressifs qui font la différence entre un jeu mécanique et une véritable performance musicale.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>Les nuances dynamiques : de pp à ff</h2>
<p>Les dynamiques sont la palette de volumes à votre disposition :</p>
<ul>
<li><strong>pp (pianissimo)</strong> - très doux, presque un murmure</li>
<li><strong>p (piano)</strong> - doux, intime</li>
<li><strong>mp (mezzo-piano)</strong> - modérément doux</li>
<li><strong>mf (mezzo-forte)</strong> - modérément fort</li>
<li><strong>f (forte)</strong> - fort, affirmé</li>
<li><strong>ff (fortissimo)</strong> - très fort, dramatique</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `<h2>Le contraste dynamique : secret de l'expression</h2>
<p>La beauté ne réside pas dans le volume absolu, mais dans le <strong>contraste</strong>.</p>
<p>Un pianissimo après un fortissimo est magique. Un crescendo (augmentation progressive du volume) crée de la tension. Un diminuendo (diminution) crée de la résolution.</p>
<p><strong>Astuce :</strong> Si votre "forte" est toujours au maximum, vous n'avez nulle part où aller. Gardez de la réserve pour les moments culminants.</p>`,
      variant: 'tip'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Explorer les dynamiques',
      steps: [
        'Jouez la gamme de Do : commencez pp',
        'Faites un long crescendo jusqu\'à ff sur l\'octave montante',
        'Faites un diminuendo en descendant, retour à pp',
        'Répétez en exagérant les extrêmes',
        'Appliquez ce principe à une mélodie simple'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `<h2>Le rubato : prendre des libertés avec le tempo</h2>
<p>Le mot "rubato" signifie littéralement "volé" en italien. C'est l'art de jouer avec souplesse rythmique, en prenant du temps ici et en le rattrapant là.</p>
<p><strong>Principe :</strong></p>
<ul>
<li>Ralentir légèrement pour mettre en valeur un moment expressif</li>
<li>Accélérer subtilement dans un passage énergique</li>
<li>Le tempo moyen reste globalement stable</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `<h2>Quand utiliser le rubato ?</h2>
<p>Le rubato est particulièrement approprié dans :</p>
<ul>
<li><strong>Musique romantique</strong> (Chopin, Liszt, Schumann)</li>
<li><strong>Fins de phrases</strong> - ralentir naturellement</li>
<li><strong>Moments expressifs</strong> - appuyer sur une note importante</li>
<li><strong>Cadences</strong> - ralentir avant la résolution</li>
</ul>
<p><strong>Attention :</strong> Évitez le rubato dans Bach, Mozart (sauf ornements), ou toute musique nécessitant une pulsation stricte.</p>`,
      variant: 'warning'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Rubato contrôlé',
      steps: [
        'Jouez une phrase simple en tempo strict avec métronome',
        'Rejouez en ralentissant légèrement à la fin de la phrase',
        'Compensez en accélérant imperceptiblement au début de la phrase suivante',
        'Exagérez d\'abord, puis rendez plus subtil',
        'Enregistrez-vous pour évaluer si c\'est musical'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `<h2>Le phrasé : la respiration de la musique</h2>
<p>Le phrasé est à la musique ce que la ponctuation est au texte. Il structure, donne du sens, crée de la respiration.</p>
<p><strong>Principes du phrasé :</strong></p>
<ul>
<li>Chaque phrase a un sommet (apex) - un point culminant</li>
<li>Crescendo vers l'apex, diminuendo après</li>
<li>Levez légèrement le poignet à la fin des phrases</li>
<li>Respirez physiquement avec la musique</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `<h2>Articulation et phrasé</h2>
<p>L'articulation sert le phrasé :</p>
<ul>
<li><strong>Legato</strong> - lié, pour les phrases chantantes et expressives</li>
<li><strong>Staccato</strong> - détaché, pour l'énergie et la légèreté</li>
<li><strong>Tenuto</strong> - tenu, pour appuyer sur certaines notes</li>
<li><strong>Accent</strong> - pour marquer les sommets de phrases</li>
</ul>
<p>Variez l'articulation pour créer du relief et de l'intérêt.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `<h2>Raconter une histoire au piano</h2>
<p>Chaque pièce raconte une histoire. En tant qu'interprète, vous êtes le narrateur.</p>
<p><strong>Questions à se poser :</strong></p>
<ul>
<li>Quel est le caractère général ? (joyeux, mélancolique, dramatique)</li>
<li>Y a-t-il un développement émotionnel ?</li>
<li>Quels sont les moments de tension et de résolution ?</li>
<li>Comment puis-je faire ressentir cela à l'auditeur ?</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer avec intention',
      steps: [
        'Choisissez une pièce que vous connaissez',
        'Inventez une histoire ou une émotion spécifique',
        'Jouez en "racontant" cette histoire',
        'Changez l\'histoire et rejouez - notez comment votre jeu change',
        'Trouvez l\'histoire qui vous semble la plus vraie'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `<h2>Utiliser la pédale avec expression</h2>
<p>La pédale n'est pas juste un "effet" - c'est un outil d'expression :</p>
<ul>
<li><strong>Pédale courte</strong> - clarté, articulation nette</li>
<li><strong>Pédale longue</strong> - chaleur, résonance, atmosphère</li>
<li><strong>Demi-pédale</strong> - subtilité, mélange délicat</li>
<li><strong>Changements de pédale</strong> - marquent les harmonies et les phrases</li>
</ul>`,
      variant: 'tip'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Développer votre voix artistique</h2>
<p>L'interprétation est personnelle. Deux pianistes joueront différemment la même pièce, et c'est parfait.</p>
<p><strong>Pour développer votre style :</strong></p>
<ul>
<li>Écoutez de nombreuses interprétations différentes</li>
<li>Expérimentez des choix expressifs variés</li>
<li>Faites confiance à votre instinct musical</li>
<li>Soyez audacieux dans vos choix, puis affinez</li>
</ul>
<p>L'interprétation transforme la technique en art. C'est votre voix unique qui rendra la musique vivante !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon6Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={6}
      title="Techniques d'interprétation"
      duration={17}
      objectives={[
        'Maîtriser les nuances dynamiques de pp à ff',
        'Utiliser le rubato avec goût',
        'Créer un phrasé musical expressif',
        'Raconter une histoire par la musique',
        'Développer votre voix artistique personnelle'
      ]}
      content={content}
      previousLesson={{ title: 'Indépendance des mains avancée', href: '/parcours/niveau-4/lecon-5' }}
      nextLesson={{ title: 'Les arpèges étendus', href: '/parcours/niveau-4/lecon-7' }}
    />
  )
}
