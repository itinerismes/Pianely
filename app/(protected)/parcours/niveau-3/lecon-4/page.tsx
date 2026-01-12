import { LessonTemplate } from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

const content: ContentBlock[] = [
  {
    id: '1',
    type: 'text',
    data: {
      content: `
        <h2>L'art de l'articulation : donner vie à la musique</h2>
        <p>
          Tu sais maintenant quelles notes jouer et pour combien de temps. Mais
          il reste une dimension essentielle : <strong>comment</strong> jouer ces notes.
        </p>
        <p>
          C'est ce qu'on appelle l'<strong>articulation</strong> : la manière dont
          tu attaques, maintiens et relâches chaque note. C'est la différence entre
          jouer des notes et faire de la musique !
        </p>
        <p>
          Imagine la voix humaine : on peut chanter la même mélodie de façon
          douce et coulée, ou vive et détachée. Au piano, l'articulation te permet
          d'exprimer ces mêmes nuances.
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
        <h2>Le legato : jouer lié</h2>
        <p>
          Le <strong>legato</strong> (mot italien signifiant "lié") est l'art de
          connecter les notes sans silence entre elles. C'est comme chanter une
          mélodie fluide d'une seule respiration.
        </p>
        <p>
          <strong>Technique du legato :</strong>
        </p>
        <ul>
          <li>Maintiens la première note enfoncée</li>
          <li>Appuie sur la deuxième note AVANT de relâcher la première</li>
          <li>Il doit y avoir un court instant où les deux touches sont enfoncées</li>
          <li>Relâche la première note juste après avoir appuyé sur la seconde</li>
        </ul>
        <p>
          Le legato crée une sensation de <strong>continuité</strong>, de flux
          musical. C'est essentiel pour les mélodies expressives et les phrases
          chantantes.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '3',
    type: 'practice',
    data: {
      title: 'Exercice : Legato sur 5 notes',
      description: 'Maîtrise la connexion parfaite entre les notes',
      steps: [
        'Position de départ : pouce sur Do',
        'Joue Do et maintiens la touche enfoncée',
        'Appuie sur Ré AVANT de relâcher Do (les deux sont enfoncées un instant)',
        'Relâche Do juste après avoir appuyé sur Ré',
        'Continue : Ré→Mi, Mi→Fa, Fa→Sol, tout en legato',
        'Il ne doit y avoir AUCUN silence entre les notes',
        'Répète 10 fois : Do-Ré-Mi-Fa-Sol en legato parfait',
        'Maintenant descends : Sol-Fa-Mi-Ré-Do en legato'
      ]
    }
  },
  {
    id: '4',
    type: 'text',
    data: {
      content: `
        <h2>Le staccato : jouer détaché</h2>
        <p>
          Le <strong>staccato</strong> (mot italien signifiant "détaché") est
          l'opposé du legato. Chaque note est <strong>courte et séparée</strong>
          de la suivante par un silence.
        </p>
        <p>
          <strong>Technique du staccato :</strong>
        </p>
        <ul>
          <li>Appuie sur la touche avec un mouvement vif et rebondissant</li>
          <li>Relâche immédiatement (la note dure environ la moitié de sa valeur)</li>
          <li>Le doigt rebondit comme une balle qui touche le sol</li>
          <li>Le poignet reste souple et détendu</li>
        </ul>
        <p>
          Le staccato crée de l'<strong>énergie</strong>, du <strong>rythme</strong>,
          et du <strong>caractère</strong>. C'est parfait pour les passages joyeux,
          légers ou humoristiques.
        </p>
        <p>
          Sur la partition, le staccato est indiqué par un point au-dessus
          ou en-dessous de la note : <strong>♪˙</strong>
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '5',
    type: 'practice',
    data: {
      title: 'Exercice : Staccato sur 5 notes',
      description: 'Développe un toucher léger et rebondissant',
      steps: [
        'Joue Do avec un mouvement vif du doigt',
        'Relâche IMMÉDIATEMENT : la note ne doit durer qu\'un instant',
        'Imagine que la touche est brûlante !',
        'Continue : Do-Ré-Mi-Fa-Sol, tout en staccato',
        'Chaque note doit être courte, claire, et séparée',
        'Garde le poignet souple, ne tends pas',
        'Répète 10 fois : Do-Ré-Mi-Fa-Sol en staccato',
        'Compare avec le legato : quelle différence de caractère !'
      ]
    }
  },
  {
    id: '6',
    type: 'text',
    data: {
      content: `
        <h2>Contraste legato vs staccato</h2>
        <p>
          La vraie magie arrive quand tu combines les deux articulations dans
          le même morceau. Le contraste crée l'intérêt musical.
        </p>
        <p>
          <strong>Exemple typique :</strong>
        </p>
        <ul>
          <li><strong>Mélodie :</strong> jouée legato (fluide, chantante)</li>
          <li><strong>Accompagnement :</strong> joué staccato (léger, rythmique)</li>
        </ul>
        <p>
          Ou inversement :
        </p>
        <ul>
          <li><strong>Mélodie :</strong> jouée staccato (vive, enjouée)</li>
          <li><strong>Accompagnement :</strong> joué legato (soutenu, moelleux)</li>
        </ul>
        <p>
          C'est comme la différence entre marcher sur la pointe des pieds (staccato)
          et glisser en patins à glace (legato) !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '7',
    type: 'practice',
    data: {
      title: 'Exercice : Alterner legato et staccato',
      description: 'Développe le contrôle et la versatilité',
      steps: [
        'Monte Do-Ré-Mi-Fa-Sol en LEGATO',
        'Descends Sol-Fa-Mi-Ré-Do en STACCATO',
        'Répète 5 fois cette combinaison',
        'Maintenant inverse : monte en staccato, descends en legato',
        'Répète 5 fois',
        'Essaie des variations : 2 notes legato, 2 notes staccato',
        'L\'objectif : passer instantanément d\'une articulation à l\'autre',
        'C\'est difficile, mais c\'est ce qui fait un pianiste expressif !'
      ]
    }
  },
  {
    id: '8',
    type: 'text',
    data: {
      content: `
        <h2>Les accents : mettre en valeur certaines notes</h2>
        <p>
          Un <strong>accent</strong> est une note jouée plus <strong>fort</strong>
          que les notes environnantes pour la mettre en valeur. Sur la partition,
          c'est indiqué par le symbole : <strong>></strong>
        </p>
        <p>
          <strong>Comment accentuer une note :</strong>
        </p>
        <ul>
          <li>Appuie avec plus de <strong>vitesse</strong> (pas de force brute)</li>
          <li>Le mouvement vient du poignet et de l'avant-bras</li>
          <li>L'accent doit être clair mais pas violent</li>
          <li>Retourne immédiatement au volume normal</li>
        </ul>
        <p>
          Les accents créent du <strong>rythme</strong> et de la <strong>structure</strong>.
          Ils indiquent où tombent les temps forts et guident l'oreille de l'auditeur.
        </p>
      `,
      variant: 'normal'
    }
  },
  {
    id: '9',
    type: 'text',
    data: {
      content: `
        <h2>Les nuances dynamiques</h2>
        <p>
          Les <strong>dynamiques</strong> indiquent le volume général de la musique.
          Voici les principales :
        </p>
        <ul>
          <li><strong>pp (pianissimo)</strong> : très doux</li>
          <li><strong>p (piano)</strong> : doux</li>
          <li><strong>mp (mezzo-piano)</strong> : moyennement doux</li>
          <li><strong>mf (mezzo-forte)</strong> : moyennement fort</li>
          <li><strong>f (forte)</strong> : fort</li>
          <li><strong>ff (fortissimo)</strong> : très fort</li>
        </ul>
        <p>
          Et les nuances progressives :
        </p>
        <ul>
          <li><strong>crescendo (cresc.)</strong> : augmenter progressivement le volume</li>
          <li><strong>diminuendo (dim.)</strong> : diminuer progressivement le volume</li>
        </ul>
        <p>
          Ces nuances ne sont pas des volumes absolus : elles sont relatives
          au contexte du morceau.
        </p>
      `,
      variant: 'highlight'
    }
  },
  {
    id: '10',
    type: 'practice',
    data: {
      title: 'Exercice : Jouer avec les dynamiques',
      description: 'Maîtrise le contrôle du volume',
      steps: [
        'Joue Do-Ré-Mi-Fa-Sol en piano (p) - très doux',
        'Rejoue en forte (f) - assez fort',
        'Quelle différence de sensation et de son ?',
        'Maintenant, fais un crescendo : commence très doux, finis fort',
        'Do(pp)-Ré(p)-Mi(mf)-Fa(f)-Sol(ff)',
        'Puis un diminuendo : commence fort, finis doux',
        'Sol(ff)-Fa(f)-Mi(mf)-Ré(p)-Do(pp)',
        'Répète 5 fois chaque exercice : c\'est tout un art !'
      ]
    }
  },
  {
    id: '11',
    type: 'text',
    data: {
      content: `
        <h2>Combiner toutes les articulations</h2>
        <p>
          Un bon pianiste utilise toutes ces techniques simultanément pour
          créer une interprétation riche et expressive.
        </p>
        <p>
          <strong>Dans un même passage, tu peux avoir :</strong>
        </p>
        <ul>
          <li>Une mélodie legato à la main droite</li>
          <li>Un accompagnement staccato à la main gauche</li>
          <li>Des accents sur les temps forts</li>
          <li>Un crescendo menant au climax</li>
        </ul>
        <p>
          C'est complexe, mais c'est ce qui transforme une suite de notes en
          une véritable histoire musicale. Ton cerveau apprend à gérer plusieurs
          choses en même temps !
        </p>
      `,
      variant: 'tip'
    }
  },
  {
    id: '12',
    type: 'practice',
    data: {
      title: 'Exercice final : Articulation complète',
      description: 'Intègre toutes les techniques apprises',
      steps: [
        'Main droite : Do-Ré-Mi-Fa-Sol en LEGATO, piano',
        'Main gauche : Accord de Do en STACCATO sur le premier temps',
        'Ajoute un ACCENT sur le Mi (temps fort)',
        'Fais un CRESCENDO du Do au Sol',
        'C\'est difficile ! Décompose : travaille chaque main séparément',
        'Puis combine très lentement',
        'Répète jusqu\'à ce que ce soit fluide',
        'Bravo : tu crées maintenant de la vraie musique expressive !'
      ]
    }
  },
  {
    id: '13',
    type: 'text',
    data: {
      content: `
        <h2>L'articulation : une quête permanente</h2>
        <p>
          Maîtriser l'articulation prend des années, même pour les professionnels.
          C'est un raffinement constant de ton toucher et de ta sensibilité musicale.
        </p>
        <p>
          <strong>Conseils pour progresser :</strong>
        </p>
        <ul>
          <li><strong>Écoute attentivement</strong> : Entends-tu vraiment les différences d'articulation ?</li>
          <li><strong>Exagère au début</strong> : Rends le legato ultra-lié, le staccato ultra-court</li>
          <li><strong>Enregistre-toi</strong> : Tu entendras des choses que tu ne remarques pas en jouant</li>
          <li><strong>Imite les grands</strong> : Écoute des enregistrements et observe comment ils articulent</li>
          <li><strong>Sois patient</strong> : C'est normal si ça semble impossible au début</li>
        </ul>
        <p>
          Chaque morceau que tu joueras désormais sera une occasion de pratiquer
          et d'affiner ton articulation !
        </p>
      `,
      variant: 'normal'
    }
  }
]

export default function Lecon4Page() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={4}
      title="Techniques d'articulation"
      duration={14}
      objectives={[
        'Maîtriser le legato (jeu lié)',
        'Maîtriser le staccato (jeu détaché)',
        'Comprendre et appliquer les accents',
        'Contrôler les dynamiques (piano, forte, crescendo, diminuendo)'
      ]}
      content={content}
      previousLesson={{
        title: 'Les accords enrichis',
        href: '/parcours/niveau-3/lecon-3'
      }}
      nextLesson={{
        title: 'La pédale de sustain',
        href: '/parcours/niveau-3/lecon-5'
      }}
    />
  )
}
