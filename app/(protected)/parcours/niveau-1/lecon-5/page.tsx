import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Le grand moment est arrivé ! 🎉</h2>
        <p>
          Félicitations d'être arrivé jusqu'ici ! Dans cette leçon, tu vas accomplir
          quelque chose d'incroyable : jouer <strong>ton premier morceau complet avec les deux mains</strong>.
        </p>
        <p>
          C'est un moment magique que tous les pianistes se souviennent. La première fois
          où les deux mains travaillent ensemble pour créer de la vraie musique !
        </p>
        <p>
          Prends ton temps, sois patient avec toi-même, et surtout : <strong>profite du processus</strong> ! 🎹✨
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
        <h2>La clé du succès : pratique séparée</h2>
        <p>
          Avant de combiner les deux mains, il est <strong>ESSENTIEL</strong> de maîtriser
          chaque main séparément.
        </p>
        <p>
          <strong>La règle d'or :</strong> Si tu ne peux pas jouer une main les yeux fermés,
          tu n'es pas prêt à ajouter l'autre main !
        </p>
        <p>
          C'est comme apprendre à jongler : d'abord maîtrise chaque balle séparément,
          puis combine-les progressivement.
        </p>
      `,
      variant: 'warning'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `
        <h2>Notre morceau : "Mélodie Simple"</h2>
        <p>
          Le morceau que nous allons apprendre s'appelle <strong>"Mélodie Simple"</strong>.
          C'est une composition originale créée spécialement pour les débutants.
        </p>
        <p>
          <strong>Structure du morceau :</strong>
        </p>
        <ul>
          <li>8 mesures (phrases musicales)</li>
          <li>Main droite : mélodie simple et chantante</li>
          <li>Main gauche : accompagnement avec notes basses et accords</li>
          <li>Tempo lent et confortable</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Étape 1 : Apprends la main droite</h2>
        <p>
          Commençons par la mélodie de la main droite. Place ta main droite en
          <strong>position de Do</strong> (pouce sur Do central).
        </p>
        <p>
          <strong>Mélodie main droite (8 mesures) :</strong>
        </p>
        <p>
          Mesure 1-2 : Do - Do - Ré - Mi - Mi - Ré - Mi - Fa<br>
          Mesure 3-4 : Mi - Mi - Ré - Ré - Do - Do - Do - (silence)<br>
          Mesure 5-6 : Sol - Sol - Fa - Mi - Mi - Ré - Ré - Do<br>
          Mesure 7-8 : Ré - Ré - Mi - Fa - Mi - Ré - Do - (silence)
        </p>
        <p>
          <strong>Doigtés :</strong><br>
          1-1-2-3-3-2-3-4 | 3-3-2-2-1-1-1 | 5-5-4-3-3-2-2-1 | 2-2-3-4-3-2-1
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice 1 : Maîtrise la main droite',
      description: 'Apprends la mélodie mesure par mesure',
      steps: [
        'Mesures 1-2 : Joue Do-Do-Ré-Mi-Mi-Ré-Mi-Fa lentement, 10 fois',
        'Mesures 3-4 : Joue Mi-Mi-Ré-Ré-Do-Do-Do lentement, 10 fois',
        'Combine mesures 1-4 : joue sans t\'arrêter, 5 fois',
        'Mesures 5-6 : Joue Sol-Sol-Fa-Mi-Mi-Ré-Ré-Do, 10 fois',
        'Mesures 7-8 : Joue Ré-Ré-Mi-Fa-Mi-Ré-Do, 10 fois',
        'Combine mesures 5-8 : joue sans t\'arrêter, 5 fois',
        'MORCEAU COMPLET : joue les 8 mesures d\'un trait, 3 fois',
        'Objectif : pouvoir jouer toute la mélodie de mémoire, sans hésitation'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Étape 2 : Apprends la main gauche</h2>
        <p>
          Maintenant, passons à l'accompagnement de la main gauche. Place ta main gauche
          en <strong>position de Do</strong> (auriculaire sur Do grave).
        </p>
        <p>
          La main gauche va jouer un pattern simple : <strong>basse-accord-basse-accord</strong>.
        </p>
        <p>
          <strong>Accompagnement main gauche (pattern répété) :</strong>
        </p>
        <p>
          Mesures 1-4 :<br>
          Do seul (5) | Accord Do (5-3-1) | Do seul (5) | Accord Do (5-3-1)<br>
          (Répète ce pattern pour les 4 premières mesures)
        </p>
        <p>
          Mesures 5-8 :<br>
          Sol seul (1) | Accord Sol (déplace main) | Do seul (5) | Accord Do (5-3-1)<br>
          (Alterne entre Sol et Do pour créer du mouvement harmonique)
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
        <h2>Version simplifiée pour débutants</h2>
        <p>
          Si jouer les accords complets est encore difficile, voici une
          <strong>version simplifiée</strong> :
        </p>
        <p>
          <strong>Main gauche simplifiée :</strong>
        </p>
        <ul>
          <li>Mesures 1-4 : Joue juste Do (5) sur chaque temps (Do-Do-Do-Do...)</li>
          <li>Mesures 5-6 : Alterne Do (5) - Sol (1) - Do (5) - Sol (1)</li>
          <li>Mesures 7-8 : Retour à Do (5) sur chaque temps</li>
        </ul>
        <p>
          Cette version crée déjà un accompagnement musical tout en restant très simple !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice 2 : Maîtrise la main gauche',
      description: 'Pratique l\'accompagnement jusqu\'à ce qu\'il devienne automatique',
      steps: [
        'Choisis la version (complète avec accords OU simplifiée avec notes seules)',
        'Mesures 1-4 : Pattern Do sur 4 temps, répète 20 fois',
        'Mesures 5-8 : Pattern avec Sol, répète 20 fois',
        'ACCOMPAGNEMENT COMPLET : joue les 8 mesures sans arrêt, 10 fois',
        'Ferme les yeux et essaie de jouer l\'accompagnement de mémoire',
        'Objectif : la main gauche doit être complètement automatique et régulière'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Étape 3 : La technique de combinaison</h2>
        <p>
          Maintenant que tu maîtrises chaque main séparément, voici comment les combiner
          <strong>progressivement</strong> :
        </p>
        <p>
          <strong>Méthode de combinaison en 5 étapes :</strong>
        </p>
        <ol>
          <li><strong>Mains séparées au ralenti</strong> - vérifie que chaque main est parfaite</li>
          <li><strong>Première note ensemble</strong> - joue juste la première note des deux mains simultanément</li>
          <li><strong>Deux notes ensemble</strong> - ajoute la deuxième note</li>
          <li><strong>Une mesure complète</strong> - combine les deux mains pour une mesure</li>
          <li><strong>Morceau complet</strong> - assemble toutes les mesures</li>
        </ol>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice 3 : Combine les mains (Mesures 1-2)',
      description: 'Première coordination des deux mains',
      steps: [
        'ÉTAPE 1 : Joue main droite mesures 1-2, puis main gauche mesures 1-2 (séparément)',
        'ÉTAPE 2 : Joue juste la PREMIÈRE note des deux mains ensemble (Do main droite + Do main gauche)',
        'ÉTAPE 3 : Ajoute la deuxième note (deuxième Do main droite + accord/note main gauche)',
        'ÉTAPE 4 : Continue note par note jusqu\'à compléter 1 mesure',
        'ÉTAPE 5 : Joue les mesures 1-2 complètes avec les deux mains',
        'Répète les mesures 1-2 avec deux mains 10 fois très lentement',
        'Ne passe PAS à la suite avant de maîtriser ces 2 mesures !'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Problèmes courants et solutions</h2>
        <p>
          Voici les difficultés que rencontrent TOUS les débutants (c'est normal !) :
        </p>
        <ul>
          <li>
            <strong>❌ Problème :</strong> Les mains ne sont pas synchronisées<br>
            <strong>✅ Solution :</strong> Joue ENCORE PLUS LENTEMENT. Vitesse = ennemi du débutant
          </li>
          <li>
            <strong>❌ Problème :</strong> J'oublie ce que fait une main quand je me concentre sur l'autre<br>
            <strong>✅ Solution :</strong> Reviens à la pratique séparée. Chaque main doit être 100% automatique
          </li>
          <li>
            <strong>❌ Problème :</strong> Je me crispe et mes épaules se tendent<br>
            <strong>✅ Solution :</strong> Arrête-toi, respire, secoue tes bras, recommence détendu
          </li>
        </ul>
      `,
      variant: 'warning'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Exercice 4 : Combine le morceau complet',
      description: 'Assemble toutes les pièces du puzzle',
      steps: [
        'Maîtrise mesures 1-2 avec deux mains (déjà fait)',
        'Apprends mesures 3-4 avec deux mains (même méthode)',
        'Combine mesures 1-4 : joue la première moitié du morceau complet',
        'Apprends mesures 5-6 avec deux mains',
        'Apprends mesures 7-8 avec deux mains',
        'Combine mesures 5-8 : joue la deuxième moitié du morceau',
        'LE GRAND MOMENT : joue les 8 mesures complètes avec les deux mains !',
        'Répète le morceau complet 5 fois par jour pendant une semaine'
      ]
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `
        <h2>Ajoute de l'expression musicale</h2>
        <p>
          Une fois que tu peux jouer le morceau sans erreur, il est temps de le rendre
          <strong>musical</strong> !
        </p>
        <p>
          <strong>Techniques d'expression :</strong>
        </p>
        <ul>
          <li><strong>Nuances :</strong> Joue mesures 1-4 <em>piano</em> (doux), mesures 5-8 <em>forte</em> (fort)</li>
          <li><strong>Phrasé :</strong> "Respire" musicalement entre les mesures 4 et 5</li>
          <li><strong>Tempo rubato :</strong> Ralentis légèrement sur la dernière note de chaque phrase</li>
          <li><strong>Articulation :</strong> Détache légèrement certaines notes pour créer du rythme</li>
        </ul>
      `,
      variant: 'normal'
    }
  },
  {
    id: '14',
    type: 'text',
    data: {
      content: `
        <h2>Challenge : Joue de mémoire</h2>
        <p>
          Le véritable test de maîtrise d'un morceau, c'est de pouvoir le jouer
          <strong>de mémoire</strong>, sans regarder tes notes ni le clavier.
        </p>
        <p>
          <strong>Exercice de mémorisation :</strong>
        </p>
        <ol>
          <li>Joue le morceau en regardant tes mains</li>
          <li>Joue le morceau en regardant droit devant toi (pas les mains)</li>
          <li>Joue le morceau les yeux fermés (ultime test !)</li>
        </ol>
        <p>
          Si tu peux faire l'étape 3, le morceau est <strong>vraiment maîtrisé</strong> ! 🎯
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '15',
    type: 'practice',
    data: {
      title: 'Exercice final : Performance complète',
      description: 'Joue comme si tu étais en concert',
      steps: [
        'Installe-toi confortablement au piano, vérifie ta posture',
        'Prends une grande respiration',
        'Compte mentalement "1-2-3-4" pour te donner le tempo',
        'Joue le morceau complet du début à la fin SANS T\'ARRÊTER',
        'Même s\'il y a une erreur, continue jusqu\'à la fin (comme en concert)',
        'À la fin, tiens la dernière note pendant 3 secondes',
        'Relève tes mains avec fierté - TU VIENS DE JOUER TON PREMIER MORCEAU ! 🎉'
      ]
    }
  },
  {
    id: '16',
    type: 'text',
    data: {
      content: `
        <h2>Célébration et réflexion</h2>
        <p>
          <strong>FÉLICITATIONS ! 🎊🎉🎹</strong>
        </p>
        <p>
          Tu viens d'accomplir quelque chose que beaucoup de gens rêvent de faire mais
          n'osent jamais essayer : <strong>jouer du piano avec les deux mains</strong>.
        </p>
        <p>
          Prends un moment pour réaliser le chemin parcouru depuis la Leçon 1 :
        </p>
        <ul>
          <li>✅ Tu connais l'anatomie du clavier</li>
          <li>✅ Tu as une bonne posture et position des mains</li>
          <li>✅ Tu peux jouer des mélodies avec la main droite</li>
          <li>✅ Tu peux jouer des accompagnements avec la main gauche</li>
          <li>✅ Tu coordonnes les deux mains ensemble</li>
          <li>✅ Tu as joué un morceau complet ! 🏆</li>
        </ul>
        <p>
          C'est une <strong>base solide</strong> pour tout ce qui suit !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '17',
    type: 'text',
    data: {
      content: `
        <h2>Conseils pour continuer à progresser</h2>
        <p>
          Maintenant que tu as terminé le Niveau 1, voici comment maximiser ta progression :
        </p>
        <p>
          <strong>Routine quotidienne recommandée (20 minutes) :</strong>
        </p>
        <ul>
          <li><strong>5 min :</strong> Échauffement - gammes et exercices de doigts</li>
          <li><strong>10 min :</strong> Pratique de "Mélodie Simple" (ton morceau actuel)</li>
          <li><strong>5 min :</strong> Exploration libre - improvise ou rejoue tes parties préférées</li>
        </ul>
        <p>
          <strong>Important :</strong> 20 minutes par jour est BEAUCOUP plus efficace
          que 2 heures une fois par semaine !
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '18',
    type: 'text',
    data: {
      content: `
        <h2>Prochaine étape : Niveau 2 - Fondations</h2>
        <p>
          Une fois que tu peux jouer "Mélodie Simple" confortablement (sans erreur, avec
          expression), tu es prêt pour le <strong>Niveau 2 - Fondations</strong> !
        </p>
        <p>
          <strong>Ce qui t'attend au Niveau 2 :</strong>
        </p>
        <ul>
          <li>Morceaux plus longs et plus variés</li>
          <li>Introduction aux altérations (touches noires)</li>
          <li>Nouveaux rythmes et patterns</li>
          <li>Changements de position des mains</li>
          <li>Lecture de partitions simplifiées</li>
        </ul>
        <p>
          Mais ne te précipite pas ! Maîtrise vraiment le Niveau 1 avant de passer au suivant.
          Des fondations solides = progression rapide par la suite !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '19',
    type: 'text',
    data: {
      content: `
        <h2>Récapitulatif final</h2>
        <p>Dans cette leçon ultime du Niveau 1, tu as :</p>
        <ul>
          <li>✅ Appris à combiner les deux mains progressivement</li>
          <li>✅ Maîtrisé la technique de pratique séparée</li>
          <li>✅ Joué ton premier morceau complet : "Mélodie Simple"</li>
          <li>✅ Ajouté de l'expression musicale (nuances, phrasé)</li>
          <li>✅ Développé ta mémoire musicale</li>
          <li>✅ Réalisé une vraie performance du début à la fin !</li>
        </ul>
        <p>
          <strong>Tu n'es plus un débutant.</strong> Tu es maintenant un
          <strong>pianiste en progression</strong> avec de vraies compétences musicales ! 🎹✨
        </p>
        <p>
          Continue à pratiquer, sois patient avec toi-même, et surtout :
          <strong>prends plaisir à faire de la musique</strong> ! 🎵
        </p>
        <p>
          Bravo et à très bientôt pour le Niveau 2 ! 🚀
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon5Page() {
  return (
    <LessonTemplate
      levelId={1}
      lessonNumber={5}
      title="Ton premier morceau complet"
      duration={15}
      objectives={[
        'Maîtriser la technique de pratique mains séparées',
        'Coordonner les deux mains progressivement',
        'Jouer "Mélodie Simple" du début à la fin',
        'Ajouter de l\'expression musicale au morceau',
        'Performer le morceau de mémoire'
      ]}
      content={content}
      previousLesson={{
        title: 'Premier motif main gauche',
        href: '/parcours/niveau-1/lecon-4'
      }}
    />
  )
}
