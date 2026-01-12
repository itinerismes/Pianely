import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `<h2>Préparer votre premier récital</h2>
<p>Félicitations ! Vous avez atteint un niveau où vous pouvez présenter un véritable récital. Que ce soit devant votre famille, des amis, ou dans un cadre plus formel, jouer en public est une expérience transformatrice.</p>
<p>Cette leçon vous guidera à travers toutes les étapes : du choix du répertoire à la performance elle-même.</p>`,
      variant: 'normal'
    }
  },
  {
    id: '2',
    type: 'text',
    data: {
      content: `<h2>Choisir votre répertoire</h2>
<p>Un bon programme de récital doit être équilibré et varié.</p>
<p><strong>Critères de sélection :</strong></p>
<ul>
<li><strong>Diversité :</strong> Mélangez les époques (Baroque, Classique, Romantique)</li>
<li><strong>Contraste :</strong> Alternez tempos rapides et lents</li>
<li><strong>Durée :</strong> 15-20 minutes pour un premier récital</li>
<li><strong>Niveau :</strong> Choisissez des pièces BIEN MAÎTRISÉES (pas votre pièce la plus difficile)</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `<h2>Exemple de programme équilibré</h2>
<p><strong>Programme suggéré (18 minutes) :</strong></p>
<ul>
<li><strong>1.</strong> Bach - Prélude en Do majeur (BWV 846) - 2min - Ouverture calme</li>
<li><strong>2.</strong> Mozart - Sonate K.545, 1er mvt - 4min - Énergie classique</li>
<li><strong>3.</strong> Chopin - Prélude Op. 28 No. 7 - 1min - Intimité romantique</li>
<li><strong>4.</strong> Beethoven - Für Elise - 3min - Pièce populaire</li>
<li><strong>5.</strong> Pièce contemporaine ou jazz - 3min - Contraste stylistique</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice : Créer votre programme',
      steps: [
        'Listez 7-8 pièces que vous maîtrisez bien',
        'Classez-les par époque et caractère',
        'Sélectionnez 4-5 pièces offrant contraste et variété',
        'Organisez l\'ordre : forte ouverture, progression émotionnelle, finale mémorable',
        'Chronométrez le tout (cible : 15-20 min)'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `<h2>Techniques de mémorisation</h2>
<p>Jouer de mémoire vous libère et vous permet de vous concentrer sur l'expression.</p>
<p><strong>Méthode en quatre couches :</strong></p>
<ul>
<li><strong>1. Mémoire musculaire :</strong> Répéter jusqu'à l'automatisme</li>
<li><strong>2. Mémoire visuelle :</strong> Visualiser la partition</li>
<li><strong>3. Mémoire analytique :</strong> Comprendre la structure harmonique</li>
<li><strong>4. Mémoire auditive :</strong> Entendre mentalement la musique</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `<h2>Processus de mémorisation en 5 étapes</h2>
<p><strong>Étape 1 : Mémoriser par sections</strong></p>
<ul>
<li>Divisez la pièce en sections de 4-8 mesures</li>
<li>Mémorisez une section à la fois</li>
</ul>
<p><strong>Étape 2 : Jouer sans regarder</strong></p>
<ul>
<li>Fermez les yeux et jouez la section</li>
</ul>
<p><strong>Étape 3 : Tester depuis différents points</strong></p>
<ul>
<li>Commencez au milieu, à la fin, etc.</li>
</ul>
<p><strong>Étape 4 : Chanter mentalement</strong></p>
<ul>
<li>Entendez la pièce sans jouer</li>
</ul>
<p><strong>Étape 5 : Analyse harmonique</strong></p>
<ul>
<li>Notez les progressions d\'accords</li>
</ul>`,
      variant: 'normal'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice de mémorisation',
      steps: [
        'Choisissez une pièce de votre programme',
        'Jour 1 : Mémorisez les 8 premières mesures par cœur',
        'Jour 2 : Ajoutez 8 mesures suivantes',
        'Jour 3 : Reliez les deux sections',
        'Jour 4 : Testez depuis différents points de départ',
        'Jour 5 : Jouez la section entière de mémoire 3 fois sans erreur'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `<h2>Préparation mentale et gestion du trac</h2>
<p>Le trac est normal - même les grands pianistes en ressentent ! Transformez-le en énergie positive.</p>
<p><strong>Techniques anti-trac :</strong></p>
<ul>
<li><strong>Respiration profonde :</strong> 4 temps inspiration, 4 temps expiration (avant de monter sur scène)</li>
<li><strong>Visualisation positive :</strong> Imaginez-vous jouant avec succès</li>
<li><strong>Routine pré-concert :</strong> Même échauffement, mêmes rituels</li>
<li><strong>Acceptation :</strong> "Je peux être nerveux ET bien jouer"</li>
</ul>`,
      variant: 'tip'
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `<h2>Présence scénique et communication</h2>
<p>Votre performance commence avant la première note.</p>
<p><strong>Protocole de scène :</strong></p>
<ul>
<li>Entrez avec confiance, posture droite</li>
<li>Saluez le public avec un sourire</li>
<li>Installez-vous calmement au piano</li>
<li>Prenez quelques secondes pour vous centrer</li>
<li>Respirez profondément avant de commencer</li>
<li>À la fin : pause brève avant de saluer</li>
</ul>`,
      variant: 'highlight'
    }
  },
  {
    id: '10',
    type: 'text',
    data: {
      content: `<h2>Gérer les erreurs en concert</h2>
<p>Même les professionnels font des erreurs. Ce qui compte : comment vous réagissez.</p>
<p><strong>Règles d'or :</strong></p>
<ul>
<li><strong>Ne montrez jamais l'erreur</strong> - pas de grimace, pas d'arrêt</li>
<li><strong>Continuez immédiatement</strong> - le public n'entend souvent pas l'erreur</li>
<li><strong>Restez dans la musique</strong> - gardez l'émotion et l'expression</li>
<li><strong>Ne vous excusez pas</strong> après le concert pour les petites erreurs</li>
</ul>`,
      variant: 'warning'
    }
  },
  {
    id: '11',
    type: 'practice',
    data: {
      title: 'Simulations de performance',
      steps: [
        'Semaine -3 : Jouez pour vous-même comme en concert (habillez-vous)',
        'Semaine -2 : Jouez pour un proche bienveillant',
        'Semaine -1 : Jouez pour 3-4 personnes',
        'Jour -2 : Répétition générale complète avec le protocole',
        'Jour -1 : Repos relatif, visualisation mentale',
        'JOUR J : Échauffement léger, confiance !'
      ]
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `<h2>Enregistrer votre performance</h2>
<p>Enregistrez systématiquement vos performances - c'est un outil d'apprentissage précieux.</p>
<p><strong>Avantages :</strong></p>
<ul>
<li>Évaluer objectivement votre jeu</li>
<li>Mesurer vos progrès dans le temps</li>
<li>Identifier les points à améliorer</li>
<li>Créer des souvenirs de votre parcours</li>
<li>Partager avec vos proches</li>
</ul>
<p><strong>Conseil :</strong> Un simple smartphone suffit. Placez-le à 2-3 mètres du piano.</p>`,
      variant: 'tip'
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `<h2>Après le récital : célébrer et analyser</h2>
<p><strong>Célébrez d'abord :</strong> Vous avez accompli quelque chose de magnifique ! Soyez fier, quel que soit le résultat.</p>
<p><strong>Puis analysez avec bienveillance :</strong></p>
<ul>
<li>Qu'est-ce qui a bien fonctionné ?</li>
<li>Quels moments vous ont rendu fier ?</li>
<li>Qu'améliorerez-vous la prochaine fois ?</li>
<li>Comment était votre gestion du trac ?</li>
</ul>
<p>Chaque performance vous rend plus fort. Ce récital n'est que le premier d'une longue série !</p>
<p><strong>Prochaine étape :</strong> Le Niveau 5 vous attend avec des défis encore plus passionnants. Vous êtes prêt !</p>`,
      variant: 'normal'
    }
  }
]

export default function Lecon10Page() {
  return (
    <LessonTemplate
      levelId={4}
      lessonNumber={10}
      title="Projet de récital"
      duration={20}
      objectives={[
        'Construire un programme équilibré et varié',
        'Maîtriser les techniques de mémorisation',
        'Gérer le trac et la présence scénique',
        'Se préparer mentalement à la performance',
        'Enregistrer et analyser sa performance'
      ]}
      content={content}
      previousLesson={{ title: 'Répertoire classique intermédiaire', href: '/parcours/niveau-4/lecon-9' }}
      nextLesson={{ title: 'Introduction aux techniques avancées', href: '/parcours/niveau-5/lecon-1' }}
    />
  )
}
