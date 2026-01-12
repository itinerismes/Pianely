import LessonTemplate from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

export default function Niveau3Lecon1() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={1}
      title="Les gammes complètes"
      description="Maîtrisez la gamme de Do majeur sur une octave complète et comprenez la structure des gammes."
      duration="15 min"
      objectives={[
        "Comprendre la structure d'une gamme majeure",
        "Jouer la gamme de Do majeur sur une octave complète",
        "Maîtriser le doigté ascendant et descendant",
        "Développer la fluidité et la régularité du jeu",
        "Reconnaître les intervalles dans la gamme"
      ]}
      previousLesson="/parcours/niveau-2/lecon-8"
      nextLesson="/parcours/niveau-3/lecon-2"
    >
      <ContentBlock variant="highlight">
        <h2>Bienvenue au Niveau 3 !</h2>
        <p>
          Félicitations pour avoir complété le Niveau 2 ! Vous entrez maintenant dans une phase
          passionnante de votre apprentissage. Les gammes sont la fondation technique de tout pianiste,
          et vous allez découvrir comment elles structurent toute la musique que vous jouez.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Qu'est-ce qu'une gamme ?</h2>
        <p>
          Une gamme est une succession de notes organisées selon un schéma précis d'intervalles.
          La gamme majeure, que nous allons étudier, suit toujours le même motif :
        </p>
        <p className="font-bold mt-4">
          Ton - Ton - Demi-ton - Ton - Ton - Ton - Demi-ton
        </p>
        <p className="mt-4">
          Pour la gamme de Do majeur : <span className="font-semibold">Do - Ré - Mi - Fa - Sol - La - Si - Do</span>
        </p>
        <p className="mt-2 text-sm opacity-80">
          Remarquez qu'il n'y a pas de touches noires dans cette gamme, ce qui la rend parfaite pour débuter !
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Le doigté des gammes</h2>
        <p>
          Le doigté est crucial pour jouer les gammes avec fluidité. Pour la gamme de Do majeur :
        </p>
        <div className="mt-4 space-y-2">
          <p><strong>Main droite (ascendant) :</strong> 1-2-3 | 1-2-3-4-5</p>
          <p className="text-sm opacity-80">Do-Ré-Mi | Fa-Sol-La-Si-Do</p>
          <p className="mt-3"><strong>Main droite (descendant) :</strong> 5-4-3-2-1 | 3-2-1</p>
          <p className="text-sm opacity-80">Do-Si-La-Sol-Fa | Mi-Ré-Do</p>
        </div>
        <p className="mt-4">
          Le passage du pouce sous le 3e doigt (et inversement) est la clé d'une gamme fluide.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 1 : Le passage du pouce</h2>
        <p>Avant de jouer la gamme complète, travaillons le mouvement le plus délicat :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez Do-Ré-Mi (doigts 1-2-3) lentement</li>
          <li>Pendant que le 3 (majeur) appuie sur Mi, préparez le pouce sous la main</li>
          <li>Glissez le pouce jusqu'au Fa sans lever le poignet</li>
          <li>Continuez Fa-Sol-La-Si-Do (doigts 1-2-3-4-5)</li>
          <li>Répétez ce mouvement 10 fois très lentement</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Le secret : le pouce doit anticiper son mouvement et passer sous la main avec souplesse,
          sans mouvement brusque du poignet.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 2 : Gamme ascendante par sections</h2>
        <p>Construisons la gamme progressivement :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Section 1 :</strong> Do-Ré-Mi (1-2-3) - Répétez 5 fois</li>
          <li><strong>Section 2 :</strong> Fa-Sol-La-Si-Do (1-2-3-4-5) - Répétez 5 fois</li>
          <li><strong>Liaison :</strong> Mi-Fa (passage du pouce) - Répétez 10 fois</li>
          <li><strong>Gamme complète :</strong> Do à Do aigu - Lentement 5 fois</li>
        </ol>
        <p className="mt-4">
          Objectif : chaque note doit avoir la même intensité et le même timing. Utilisez un métronome à 60 BPM.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 3 : Gamme descendante</h2>
        <p>La descente utilise un doigté différent :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Commencez sur Do aigu avec le 5e doigt (auriculaire)</li>
          <li>Descendez : 5-4-3-2-1 (Do-Si-La-Sol-Fa)</li>
          <li>Le 3e doigt passe par-dessus le pouce après le Fa</li>
          <li>Terminez : 3-2-1 (Mi-Ré-Do)</li>
          <li>Pratiquez la descente 10 fois lentement</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Le passage du 3 par-dessus le pouce doit être aussi fluide que le passage du pouce en montant.
        </p>
      </ContentBlock>

      <ContentBlock variant="normal">
        <h2>Exercice 4 : Gamme complète aller-retour</h2>
        <p>Maintenant, enchaînons montée et descente sans pause :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Montez la gamme du Do grave au Do aigu</li>
          <li>Sans arrêter, redescendez immédiatement</li>
          <li>Commencez très lentement (métronome à 60 BPM, une note par temps)</li>
          <li>Répétez 5 fois en gardant un tempo régulier</li>
          <li>Vérifiez que toutes les notes sonnent clairement</li>
        </ol>
        <p className="mt-4">
          C'est normal si c'est difficile au début. La régularité viendra avec la pratique quotidienne.
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Points techniques à surveiller</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Position de la main :</strong> Gardez les doigts arrondis, comme tenant une balle</li>
          <li><strong>Poignet :</strong> Souple et aligné avec l'avant-bras, pas de mouvements brusques</li>
          <li><strong>Tempo :</strong> Commencez très lent et n'accélérez que quand c'est parfait</li>
          <li><strong>Régularité :</strong> Toutes les notes doivent avoir la même durée et intensité</li>
          <li><strong>Respiration :</strong> N'oubliez pas de respirer naturellement</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 5 : Main gauche</h2>
        <p>La main gauche utilise un doigté inversé :</p>
        <div className="mt-4 space-y-2">
          <p><strong>Main gauche (ascendant) :</strong> 5-4-3-2-1 | 3-2-1</p>
          <p><strong>Main gauche (descendant) :</strong> 1-2-3 | 1-2-3-4-5</p>
        </div>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Répétez tous les exercices précédents avec la main gauche</li>
          <li>Concentrez-vous sur le passage du pouce (ou du 3e doigt)</li>
          <li>Travaillez lentement jusqu'à obtenir la même fluidité qu'à droite</li>
        </ol>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 6 : Variations rythmiques</h2>
        <p>Pour renforcer votre maîtrise, variez le rythme :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Rythme pointé :</strong> Longue-courte, longue-courte (comme "bonjour, bonjour")</li>
          <li><strong>Rythme inversé :</strong> Courte-longue, courte-longue</li>
          <li><strong>Accentuations :</strong> Accentuez chaque première note de doigté (1-2-3, 1-2-3-4-5)</li>
          <li><strong>Nuances :</strong> Jouez crescendo en montant, diminuendo en descendant</li>
        </ol>
        <p className="mt-4">
          Ces variations développent contrôle et musicalité tout en renforçant la mémoire musculaire.
        </p>
      </ContentBlock>

      <ContentBlock variant="warning">
        <h2>Erreurs courantes à éviter</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Lever le poignet pendant le passage du pouce</li>
          <li>Jouer trop vite avant d'avoir maîtrisé lentement</li>
          <li>Avoir des notes inégales en volume ou durée</li>
          <li>Regarder constamment les mains (apprenez à sentir les touches)</li>
          <li>Négliger la main gauche (elle est aussi importante !)</li>
          <li>Pratiquer avec tension dans les épaules ou les poignets</li>
        </ul>
      </ContentBlock>

      <ContentBlock variant="highlight">
        <h2>Plan de pratique quotidien</h2>
        <p>Pour maîtriser cette leçon, pratiquez 15 minutes par jour pendant une semaine :</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Minutes 1-3 :</strong> Échauffement - exercice du passage du pouce</li>
          <li><strong>Minutes 4-7 :</strong> Main droite - gamme complète lente</li>
          <li><strong>Minutes 8-11 :</strong> Main gauche - gamme complète lente</li>
          <li><strong>Minutes 12-15 :</strong> Variations rythmiques et accélération progressive</li>
        </ul>
        <p className="mt-4">
          Objectif à atteindre : jouer la gamme à 80 BPM (une note par temps) avec fluidité
          et régularité avant de passer à la leçon suivante.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Pourquoi les gammes sont importantes ?</h2>
        <p>
          Les gammes ne sont pas qu'un exercice technique - elles sont présentes dans presque toute
          la musique que vous jouerez. En maîtrisant la gamme de Do majeur, vous :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Développez l'indépendance et la force de chaque doigt</li>
          <li>Apprenez les positions de base au clavier</li>
          <li>Comprenez la structure de la musique occidentale</li>
          <li>Préparez vos mains pour jouer n'importe quel morceau</li>
          <li>Améliorez votre lecture de partition (prochaine leçon !)</li>
        </ul>
        <p className="mt-4">
          Avec une pratique régulière, jouer cette gamme deviendra aussi naturel que marcher.
          Patience et persévérance !
        </p>
      </ContentBlock>
    </LessonTemplate>
  )
}
