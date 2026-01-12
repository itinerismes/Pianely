import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>Les deux mains ensemble : le défi ultime !</h2>
        <p>
          C'est le moment le plus excitant et le plus challengeant de ton apprentissage :
          <strong>jouer avec les deux mains en même temps</strong> !
        </p>
        <p>
          Tu sais déjà :
        </p>
        <ul>
          <li>✅ Jouer des mélodies avec la main droite</li>
          <li>✅ Jouer des accords avec la main gauche</li>
        </ul>
        <p>
          Maintenant, tu vas coordonner les deux pour créer une vraie musique complète,
          avec mélodie ET accompagnement !
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
        <h2>Pourquoi c'est difficile ?</h2>
        <p>
          Jouer les deux mains ensemble demande à ton cerveau de faire plusieurs
          choses simultanément :
        </p>
        <ul>
          <li>Contrôler <strong>deux mains indépendantes</strong></li>
          <li>Lire (ou mémoriser) <strong>deux lignes musicales</strong> différentes</li>
          <li>Maintenir le <strong>même tempo</strong> pour les deux mains</li>
          <li>Coordonner les <strong>mouvements</strong> avec précision</li>
        </ul>
        <p>
          C'est normal si c'est difficile au début ! Même les pianistes professionnels
          ont galéré à ce stade. La clé, c'est la patience et la pratique méthodique.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'text',
    data: {
      content: `
        <h2>La méthode progressive</h2>
        <p>
          Ne t'attends pas à jouer parfaitement les deux mains dès la première fois !
          Voici la méthode en <strong>5 étapes</strong> :
        </p>
        <ol>
          <li><strong>Maîtrise chaque main séparément</strong> (tu l'as déjà fait !)</li>
          <li><strong>Joue très lentement</strong> les deux mains ensemble</li>
          <li><strong>Synchronise les attaques</strong> (quand les notes commencent ensemble)</li>
          <li><strong>Augmente graduellement le tempo</strong></li>
          <li><strong>Ajoute l'expression musicale</strong></li>
        </ol>
        <p>
          Ne saute aucune étape ! Chaque étape construit sur la précédente.
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '4',
    type: 'practice',
    data: {
      title: 'Exercice préparatoire : Synchronisation simple',
      description: 'Commence par le plus simple',
      steps: [
        'Main droite sur Do, main gauche sur l\'accord de Do',
        'Compte "1-2-3-4" à voix haute',
        'Sur le "1", appuie sur les DEUX mains en même temps',
        'Maintiens pendant 4 temps (une ronde)',
        'Relâche et recommence',
        'Répète 10 fois : l\'objectif est une attaque parfaitement synchronisée'
      ]
    }
  },
  {
    id: '5',
    type: 'text',
    data: {
      content: `
        <h2>Premier exercice : Mélodie + accord tenu</h2>
        <p>
          Commençons par quelque chose d'accessible : une mélodie à la main droite
          pendant que la main gauche tient un accord.
        </p>
        <p>
          <strong>Main gauche :</strong> Accord de Do (tenu pendant 4 temps)<br>
          <strong>Main droite :</strong> Do - Ré - Mi - Fa (4 noires)
        </p>
        <p>
          La main gauche ne bouge pas, ce qui facilite la coordination. Concentre-toi
          sur la main droite qui joue la mélodie.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '6',
    type: 'practice',
    data: {
      title: 'Exercice : Mélodie sur accord tenu',
      description: 'Première coordination main droite/gauche',
      steps: [
        'Place main gauche sur accord de Do, main droite sur Do',
        'Compte "1-2-3-4"',
        'Sur "1" : Appuie sur l\'accord (MG) ET sur Do (MD) ensemble',
        'Sur "2" : Main gauche reste, main droite joue Ré',
        'Sur "3" : Main gauche reste, main droite joue Mi',
        'Sur "4" : Main gauche reste, main droite joue Fa',
        'Répète 5 fois très lentement'
      ]
    }
  },
  {
    id: '7',
    type: 'text',
    data: {
      content: `
        <h2>Deuxième exercice : Changements d'accords</h2>
        <p>
          Maintenant, augmentons la difficulté : la main gauche va changer d'accord
          pendant que la main droite joue.
        </p>
        <p>
          <strong>Structure :</strong>
        </p>
        <ul>
          <li><strong>Mesure 1 :</strong> Accord de Do (MG) + Do-Ré-Mi-Fa (MD)</li>
          <li><strong>Mesure 2 :</strong> Accord de Sol (MG) + Sol-Fa-Mi-Ré (MD)</li>
        </ul>
        <p>
          L'astuce : change l'accord de la main gauche PENDANT que tu joues la première
          note de la main droite. Les deux mains bougent en même temps !
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '8',
    type: 'practice',
    data: {
      title: 'Exercice : Changements d\'accords',
      description: 'Coordonne les changements',
      steps: [
        'Mesure 1 : Accord Do (MG) pendant que MD joue Do-Ré-Mi-Fa',
        'Au début de la mesure 2 : CHANGE pour accord Sol (MG) en jouant Sol (MD)',
        'Continue la mélodie : Fa-Mi-Ré à la main droite',
        'Si c\'est trop dur, arrête-toi entre les deux mesures',
        'Répète jusqu\'à ce que le changement d\'accord soit fluide',
        'Quand c\'est bon, essaie sans arrêt entre les mesures'
      ]
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Exercice complet : "Au clair de la lune" avec accompagnement</h2>
        <p>
          Tu vas maintenant jouer la mélodie que tu connais ("Au clair de la lune")
          avec un accompagnement d'accords à la main gauche !
        </p>
        <p>
          <strong>Structure simplifiée :</strong>
        </p>
        <ul>
          <li><strong>Phrase 1 :</strong> Accord Do (MG) + Do-Do-Do-Ré-Mi-Ré (MD)</li>
          <li><strong>Phrase 2 :</strong> Accord Sol (MG) + Do-Mi-Ré-Ré-Do (MD)</li>
        </ul>
        <p>
          Note : La main gauche joue chaque accord au début de chaque phrase
          et le tient pendant toute la phrase.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice final : Au clair de la lune complet',
      description: 'Joue ton premier morceau avec les deux mains',
      steps: [
        'Révise la mélodie seule (MD) 3 fois',
        'Révise les accords seuls (MG) 3 fois',
        'Joue TRÈS LENTEMENT les deux mains ensemble',
        'Phrase 1 : Pose l\'accord Do (MG), puis joue Do-Do-Do-Ré-Mi-Ré (MD)',
        'Phrase 2 : Change pour accord Sol (MG), puis joue Do-Mi-Ré-Ré-Do (MD)',
        'Répète 10 fois : chaque fois, ça sera plus facile !',
        'Quand c\'est fluide, augmente un peu le tempo'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Conseils pour réussir</h2>
        <p>
          Voici des astuces éprouvées pour maîtriser la coordination :
        </p>
        <ul>
          <li><strong>LENTEUR</strong> : C'est le secret numéro 1. Plus lent = plus facile</li>
          <li><strong>Répétition</strong> : Joue le même passage 20, 30, 50 fois si nécessaire</li>
          <li><strong>Isoler les difficultés</strong> : Travaille seulement les changements d'accords</li>
          <li><strong>Respirer</strong> : Ne retiens pas ta respiration ! Respire naturellement</li>
          <li><strong>Pause régulières</strong> : 5 minutes de pratique, 1 minute de pause</li>
          <li><strong>Célèbre les progrès</strong> : Même les petites victoires comptent !</li>
        </ul>
      `,
      variant: 'tip'
    }
  },
  {
    id: '12',
    type: 'text',
    data: {
      content: `
        <h2>Félicitations : Niveau 2 terminé !</h2>
        <p>C'est un accomplissement majeur ! Tu as maintenant :</p>
        <ul>
          <li>✅ Une excellente posture et position des mains</li>
          <li>✅ Maîtrisé les doigtés et l'indépendance des doigts</li>
          <li>✅ Compris les intervalles (secondes et tierces)</li>
          <li>✅ Appris les valeurs rythmiques (rondes, blanches, noires)</li>
          <li>✅ Joué ta première mélodie complète</li>
          <li>✅ Maîtrisé trois accords fondamentaux</li>
          <li>✅ Coordonné les deux mains ensemble !</li>
        </ul>
        <p>
          Tu es maintenant capable de jouer de vraies chansons au piano ! Le Niveau 3
          va approfondir ces compétences et t'ouvrir de nouvelles possibilités musicales.
        </p>
        <p>
          <strong>Prends le temps de consolider ces acquis avant de continuer.
          La patience et la pratique régulière sont les clés du succès !</strong>
        </p>
      `,
      variant: 'highlight'
    }
  }
]

export default function Lecon7Page() {
  return (
    <LessonTemplate
      levelId={2}
      lessonNumber={7}
      title="Coordination mains ensemble"
      duration={15}
      objectives={[
        'Comprendre les défis de la coordination',
        'Synchroniser les attaques des deux mains',
        'Jouer une mélodie sur un accord tenu',
        'Changer d\'accords pendant une mélodie',
        'Jouer "Au clair de la lune" complet avec accompagnement',
        'Terminer le Niveau 2 avec succès'
      ]}
      content={content}
      previousLesson={{
        title: 'Main gauche et accords de base',
        href: '/parcours/niveau-2/lecon-6'
      }}
    />
  )
}
