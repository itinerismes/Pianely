import LessonTemplate from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

export default function Niveau3Lecon8() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={8}
      title="Premier morceau complet"
      description="Apprenez et maîtrisez votre premier morceau complet en intégrant toutes les compétences acquises."
      duration="18 min"
      objectives={[
        "Apprendre un morceau complet de A à Z",
        "Intégrer toutes les techniques apprises (gammes, lecture, accords, articulation, pédale)",
        "Développer une méthodologie d'apprentissage efficace",
        "Travailler la mémorisation musicale",
        "Polir et perfectionner une interprétation",
        "Préparer une performance (même pour soi-même)"
      ]}
      previousLesson="/parcours/niveau-3/lecon-7"
      nextLesson="/parcours/niveau-4/lecon-1"
    >
      <ContentBlock variant="highlight">
        <h2>Votre premier chef-d'œuvre personnel</h2>
        <p>
          Vous avez parcouru un chemin extraordinaire depuis le Niveau 1. Vous maîtrisez la posture,
          la technique de base, la lecture de notes, les accords, l'articulation, la pédale, et
          l'expression. Il est temps de réunir toutes ces compétences dans un accomplissement majeur :
          votre premier morceau complet, de la première à la dernière note.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Le morceau choisi : "Prélude en Do majeur" de Bach (simplifié)</h2>
        <p>
          Nous allons travailler une version simplifiée mais complète du célèbre Prélude en Do majeur
          du "Clavier bien tempéré" de Bach. C'est un choix idéal car :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Structure simple : un motif d'arpège répété avec des harmonies changeantes</li>
          <li>Magnifique musicalité malgré sa simplicité technique</li>
          <li>Excellent pour travailler la régularité et le legato</li>
          <li>Utilisation essentielle de la pédale</li>
          <li>Pièce reconnue mondialement (vous impressionnerez votre entourage !)</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Structure du Prélude : comprendre avant de jouer</h2>
        <p>
          Le Prélude est construit sur un motif répétitif : chaque mesure contient un arpège
          de 8 notes (ou 16 croches réparties sur deux mains).
        </p>
        <p className="mt-3">
          <strong>Motif de base :</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>Main gauche : Note de basse (tenue avec la pédale)</li>
          <li>Main droite : Arpège de 5 notes, répété</li>
          <li>Le motif rythmique reste identique, seules les notes changent</li>
        </ul>
        <p className="mt-3">
          <strong>Version simplifiée (8 mesures) :</strong> Nous apprendrons les 8 premières
          mesures qui contiennent l'essence du morceau.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Mesure 1 : Le motif de base en Do majeur</h2>
        <p>Décortiquons la première mesure en détail :</p>
        <div className="mt-3 space-y-2">
          <p><strong>Main gauche :</strong> Do grave (octave basse)</p>
          <p><strong>Main droite :</strong> Mi - Sol - Do - Mi - Sol - Do - Mi - Sol</p>
          <p className="text-sm opacity-80 ml-4">
            (Doigté : 1-2-3-1-2-3-1-2, passage du pouce fluide)
          </p>
        </div>
        <p className="mt-3">
          <strong>Pédale :</strong> Enfoncez quand vous jouez le Do grave, maintenez pendant
          tout l'arpège.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 1 : Maîtriser la mesure 1</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite seule : jouez l'arpège Mi-Sol-Do-Mi-Sol-Do-Mi-Sol</li>
          <li>Chaque note doit être parfaitement égale en volume et durée</li>
          <li>Utilisez un métronome à 60 BPM (4 notes par temps = 4 doubles-croches)</li>
          <li>Répétez 20 fois jusqu'à régularité parfaite</li>
          <li>Ajoutez la main gauche : Do grave au début, silence pendant l'arpège</li>
          <li>Coordonnez : Do grave + premier Mi de l'arpège en même temps</li>
          <li>Ajoutez la pédale : enfoncez sur le Do, maintenez, relâchez à la fin</li>
          <li>Répétez 10 fois la mesure complète avec pédale</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Cette première mesure est votre fondation. Ne passez pas à la suite tant qu'elle
          n'est pas fluide et automatique.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Mesures 2-4 : Progression harmonique</h2>
        <p>Les mesures suivantes utilisent le même motif rythmique mais changent les notes :</p>
        <div className="mt-3 space-y-3">
          <p><strong>Mesure 2 (Ré mineur 7) :</strong></p>
          <p className="ml-4">MG: Ré | MD: Ré-Fa-La-Ré-Fa-La-Ré-Fa</p>

          <p><strong>Mesure 3 (Sol 7) :</strong></p>
          <p className="ml-4">MG: Sol | MD: Ré-Fa-Sol-Si-Ré-Fa-Sol-Si</p>

          <p><strong>Mesure 4 (Do majeur) :</strong></p>
          <p className="ml-4">MG: Do | MD: Mi-Sol-Do-Mi-Sol-Do-Mi-Sol</p>
        </div>
        <p className="mt-4">
          Remarquez : la main droite garde toujours la même structure d'arpège, mais les notes
          changent pour suivre l'harmonie.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 2 : Apprendre les mesures 2-4</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Mesure 2 :</strong> Apprenez séparément comme vous avez fait pour la mesure 1</li>
          <li>Main droite seule 10 fois, puis avec main gauche et pédale</li>
          <li><strong>Mesure 3 :</strong> Même processus, attention au Fa# (touche noire)</li>
          <li><strong>Mesure 4 :</strong> Retour au Do majeur (comme mesure 1)</li>
          <li><strong>Enchaînement :</strong> Reliez maintenant les mesures 1-2</li>
          <li>Point crucial : changez la pédale au début de chaque mesure (pédalage syncopé)</li>
          <li>Puis enchaînez 1-2-3, puis 1-2-3-4</li>
          <li>Répétez l'ensemble 5 fois très lentement (60 BPM)</li>
        </ol>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Méthodologie d'apprentissage efficace</h2>
        <p>
          Cette approche systématique fonctionne pour N'IMPORTE quel morceau :
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Analyse :</strong> Comprendre la structure avant de jouer</li>
          <li><strong>Décomposition :</strong> Diviser en petites sections (mesure par mesure)</li>
          <li><strong>Main droite :</strong> Maîtriser chaque section séparément</li>
          <li><strong>Main gauche :</strong> Idem, jusqu'à automatisme</li>
          <li><strong>Coordination :</strong> Réunir les mains très lentement</li>
          <li><strong>Assemblage :</strong> Relier les sections progressivement</li>
          <li><strong>Perfectionnement :</strong> Travailler les transitions et l'expression</li>
          <li><strong>Tempo :</strong> Augmenter la vitesse graduellement</li>
        </ol>
      </ContentBlock>

      <ContentBlock>
        <h2>Mesures 5-8 : Développement musical</h2>
        <p>Continuons avec les 4 dernières mesures de notre version simplifiée :</p>
        <div className="mt-3 space-y-3">
          <p><strong>Mesure 5 (La mineur) :</strong></p>
          <p className="ml-4">MG: La | MD: Do-Mi-La-Do-Mi-La-Do-Mi</p>

          <p><strong>Mesure 6 (Ré mineur) :</strong></p>
          <p className="ml-4">MG: Ré | MD: Ré-Fa-La-Ré-Fa-La-Ré-Fa</p>

          <p><strong>Mesure 7 (Sol majeur) :</strong></p>
          <p className="ml-4">MG: Sol | MD: Ré-Sol-Si-Ré-Sol-Si-Ré-Sol</p>

          <p><strong>Mesure 8 (Do majeur - conclusion) :</strong></p>
          <p className="ml-4">MG: Do | MD: Mi-Sol-Do-Mi-Sol-Do-Mi-Sol (ritardando et diminuendo)</p>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 3 : Compléter le morceau</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Apprenez les mesures 5-8 avec la même méthode que 1-4</li>
          <li>Une mesure à la fois, ne précipitez rien</li>
          <li>Quand chaque mesure est solide, commencez les assemblages :</li>
          <li className="ml-4">Mesures 1-4 ensemble (groupe A)</li>
          <li className="ml-4">Mesures 5-8 ensemble (groupe B)</li>
          <li className="ml-4">Enchaînement A+B avec pause entre les deux</li>
          <li className="ml-4">Enfin, les 8 mesures en continu</li>
          <li>Objectif : jouer les 8 mesures sans arrêt, même très lentement</li>
        </ol>
        <p className="mt-4">
          Prenez votre temps. Il vaut mieux passer une semaine entière sur ces 8 mesures et
          les maîtriser que de survoler 20 mesures approximativement.
        </p>
      </ContentBlock>

      <ContentBlock variant="warning">
        <h2>Pièges courants lors de l'apprentissage</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Aller trop vite :</strong> L'erreur #1. Si vous vous trompez, c'est trop rapide</li>
          <li><strong>Négliger les mains séparées :</strong> Toujours maîtriser chaque main avant de combiner</li>
          <li><strong>Pratiquer les erreurs :</strong> Chaque répétition avec erreur renforce la mauvaise habitude</li>
          <li><strong>Sessions trop longues :</strong> 20 min concentré &gt; 1h distrait</li>
          <li><strong>Ignorer le métronome :</strong> Il garantit la régularité rythmique</li>
          <li><strong>Sauter l'analyse :</strong> Comprendre la structure accélère l'apprentissage</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 4 : Travailler la régularité</h2>
        <p>
          La beauté de ce Prélude repose sur l'égalité parfaite des notes. Exercice spécifique :
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Choisissez une mesure (par exemple la mesure 1)</li>
          <li>Jouez-la 5 fois en accentuant la 1ère note de chaque groupe de 4</li>
          <li>Jouez-la 5 fois en accentuant la 2ème note de chaque groupe</li>
          <li>Idem pour la 3ème, puis la 4ème note</li>
          <li>Enfin, jouez-la 5 fois sans aucun accent (toutes égales)</li>
        </ol>
        <p className="mt-4">
          Cet exercice de déplacement d'accent développe une régularité et un contrôle extraordinaires.
          Appliquez-le à chaque mesure difficile.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 5 : Perfectionner la pédale</h2>
        <p>Le pédalage est crucial dans ce Prélude. Raffinons-le :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez les mesures 1-4 en changeant la pédale à chaque mesure (début de chaque basse)</li>
          <li>Le changement doit être simultané avec la nouvelle basse (pédalage syncopé)</li>
          <li>Écoutez attentivement : aucun mélange entre les harmonies</li>
          <li>Expérimentez : que se passe-t-il si vous gardez la pédale trop longtemps ? (boue sonore)</li>
          <li>Enregistrez-vous et écoutez la clarté harmonique</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Un pédalage imprécis ruinerait ce morceau. Un pédalage parfait crée une nappe harmonique
          paradisiaque.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 6 : Ajouter l'expression</h2>
        <p>
          Une fois les notes et le rythme maîtrisés, travaillons l'expression musicale :
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Nuances globales :</strong> Commencez p (doux), crescendo vers la mesure 4</li>
          <li><strong>Point culminant :</strong> Mesure 5 ou 6 en mf, puis diminuendo</li>
          <li><strong>Conclusion :</strong> Mesure 8 en p ou pp, avec ritardando</li>
          <li><strong>Qualité du son :</strong> Toucher délicat, notes perlées (comme des perles)</li>
          <li><strong>Caractère :</strong> Serein, méditatif, contemplatif, comme une prière</li>
          <li>Jouez en imaginant des images : ciel étoilé, cathédrale, lever de soleil...</li>
        </ol>
      </ContentBlock>

      <ContentBlock variant="normal">
        <h2>La mémorisation musicale</h2>
        <p>
          Jouer de mémoire (sans partition) est un objectif important. Plusieurs types de mémoire
          travaillent ensemble :
        </p>
        <div className="mt-3 space-y-3">
          <p><strong>Mémoire musculaire :</strong> Vos doigts "connaissent" le chemin (répétition)</p>
          <p><strong>Mémoire auditive :</strong> Vous entendez mentalement ce qui vient ensuite</p>
          <p><strong>Mémoire visuelle :</strong> Vous visualisez la partition ou les touches</p>
          <p><strong>Mémoire analytique :</strong> Vous comprenez la structure harmonique</p>
        </div>
        <p className="mt-4">
          Plus vous utilisez de types de mémoire, plus la mémorisation est solide.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 7 : Mémoriser le Prélude</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez les mesures 1-4 en regardant la partition (ou vos notes)</li>
          <li>Rejouez-les en regardant ailleurs (seulement si elles sont très sûres)</li>
          <li>Si vous bloquez, vérifiez la partition et recommencez</li>
          <li>Répétez jusqu'à jouer 1-4 de mémoire sans hésitation</li>
          <li>Même processus pour les mesures 5-8</li>
          <li>Enfin, jouez les 8 mesures complètes de mémoire</li>
          <li>Testez-vous le lendemain : la mémoire s'est-elle consolidée ?</li>
        </ol>
        <p className="mt-4">
          La vraie mémorisation demande plusieurs sessions sur plusieurs jours. Soyez patient.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 8 : Préparer votre "performance"</h2>
        <p>
          Même si vous ne jouez que pour vous-même, préparez une interprétation aboutie :
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Run-through :</strong> Jouez le morceau entier sans arrêt, même avec erreurs</li>
          <li>Si vous bloquez, improvisez quelque chose et continuez (ne vous arrêtez jamais)</li>
          <li>Répétez 3-5 "performances" complètes par session</li>
          <li><strong>Enregistrement :</strong> Enregistrez-vous (téléphone suffit)</li>
          <li>Écoutez objectivement : tempo, régularité, pédale, expression</li>
          <li>Identifiez 2-3 points à améliorer</li>
          <li>Travaillez ces points spécifiquement</li>
          <li>Enregistrez à nouveau et comparez</li>
        </ol>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 9 : Variations pour approfondir</h2>
        <p>Une fois le morceau maîtrisé, enrichissez-le avec des variations :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Variation dynamique :</strong> Jouez en crescendo continu du début à la fin</li>
          <li><strong>Variation tempo :</strong> Version molto lento (très lent), puis version plus fluide</li>
          <li><strong>Variation toucher :</strong> Version staccato léger, puis version legato extrême</li>
          <li><strong>Variation sans pédale :</strong> Jouez sans pédale pour tester votre legato de doigts</li>
        </ol>
        <p className="mt-4">
          Ces variations développent votre contrôle et votre compréhension profonde du morceau.
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Le plateau d'apprentissage : c'est normal !</h2>
        <p>
          Pendant l'apprentissage d'un morceau, vous traverserez des phases :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Découverte :</strong> Excitation, progrès rapides (jours 1-3)</li>
          <li><strong>Plateau :</strong> Impression de stagner, frustration (jours 4-7)</li>
          <li><strong>Percée :</strong> Soudain, tout devient fluide ! (jour 8+)</li>
          <li><strong>Consolidation :</strong> Le morceau devient solide et expressif</li>
        </ul>
        <p className="mt-4">
          Le plateau est normal et nécessaire. C'est pendant ces moments que votre cerveau
          consolide les apprentissages. Persistez !
        </p>
      </ContentBlock>

      <ContentBlock variant="highlight">
        <h2>Plan de travail sur 2 semaines</h2>
        <div className="mt-3 space-y-3">
          <p><strong>Semaine 1 : Apprentissage technique</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jours 1-2 : Mesures 1-2 (mains séparées puis ensemble)</li>
            <li>Jours 3-4 : Mesures 3-4, puis enchaîner 1-4</li>
            <li>Jours 5-6 : Mesures 5-6 (mains séparées puis ensemble)</li>
            <li>Jour 7 : Mesures 7-8, puis enchaîner 5-8</li>
          </ul>
          <p className="mt-3"><strong>Semaine 2 : Perfectionnement et interprétation</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jours 1-2 : Enchaînement complet 1-8, travail de la régularité</li>
            <li>Jours 3-4 : Pédalage précis, mémorisation</li>
            <li>Jours 5-6 : Expression, nuances, caractère musical</li>
            <li>Jour 7 : Performance finale enregistrée, célébration !</li>
          </ul>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Au-delà de ce morceau</h2>
        <p>
          Une fois ce Prélude maîtrisé, vous pouvez :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Apprendre la version complète du Prélude (35 mesures)</li>
          <li>Explorer d'autres préludes du Clavier bien tempéré</li>
          <li>Aborder des pièces similaires (Gymnopédies de Satie, Comptine d'Yann Tiersen)</li>
          <li>Commencer un deuxième morceau complet pendant que vous maintenez celui-ci</li>
        </ul>
        <p className="mt-4">
          La méthodologie que vous avez apprise ici fonctionne pour n'importe quel morceau,
          quel que soit le niveau. C'est votre méthode pour la vie !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Célébrer votre accomplissement</h2>
        <p>
          Terminer un morceau complet est un jalon majeur dans votre parcours de pianiste.
          Vous n'êtes plus un débutant absolu - vous êtes maintenant un pianiste qui peut
          apprendre et interpréter de vraies œuvres musicales.
        </p>
        <p className="mt-3">
          <strong>Quelques façons de célébrer :</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Jouez pour votre famille ou vos amis (ou votre chat !)</li>
          <li>Enregistrez une version "officielle" à conserver</li>
          <li>Partagez votre accomplissement sur les réseaux sociaux</li>
          <li>Notez dans un journal votre ressenti sur ce parcours</li>
          <li>Fixez-vous un nouveau défi musical excitant</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Réflexion sur votre parcours</h2>
        <p>
          Prenez un moment pour réfléchir à tout ce que vous avez accompli depuis le Niveau 1 :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Vous êtes passé de "trouver le Do central" à jouer Bach</li>
          <li>Vous maîtrisez la coordination des deux mains</li>
          <li>Vous lisez les notes sur une partition</li>
          <li>Vous comprenez les harmonies et les accords</li>
          <li>Vous utilisez la pédale avec contrôle</li>
          <li>Vous exprimez des émotions à travers la musique</li>
        </ul>
        <p className="mt-4">
          Cette progression est extraordinaire. Soyez fier de vous !
        </p>
      </ContentBlock>

      <ContentBlock variant="highlight">
        <h2>Et maintenant ? Vers le Niveau 4</h2>
        <p>
          Le Niveau 3 vous a donné des bases solides et complètes. Le Niveau 4 (Maîtrise) vous
          emmènera encore plus loin :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Technique avancée : octaves, trilles, passages rapides</li>
          <li>Répertoire plus ambitieux : Chopin, Debussy, pièces romantiques</li>
          <li>Improvisation et création musicale</li>
          <li>Compréhension approfondie de l'harmonie</li>
          <li>Développement de votre style personnel</li>
        </ul>
        <p className="mt-4">
          Mais avant de vous lancer, consolidez ce niveau. Assurez-vous que tout est fluide,
          naturel, automatique. Un édifice solide se construit sur des fondations inébranlables.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Message final du Niveau 3</h2>
        <p>
          La musique est un voyage sans fin. Chaque morceau appris ouvre la porte à dix autres.
          Chaque technique maîtrisée révèle de nouvelles possibilités. Vous avez maintenant
          les outils pour explorer librement le vaste océan du répertoire pianistique.
        </p>
        <p className="mt-3">
          Rappelez-vous toujours pourquoi vous avez commencé : l'amour de la musique, le plaisir
          de créer de la beauté, la joie de progresser. Gardez cette flamme vivante. Jouez avec
          votre cœur autant qu'avec vos doigts.
        </p>
        <p className="mt-3 font-semibold">
          Félicitations pour avoir complété le Niveau 3 ! Vous êtes officiellement un pianiste
          intermédiaire capable d'apprendre et d'interpréter de vraies œuvres musicales.
          Bravo, et bon courage pour la suite de votre magnifique voyage musical !
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Pratique continue recommandée</h2>
        <p>
          Avant de passer au Niveau 4, maintenez votre niveau 3 pendant 2-4 semaines :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Quotidiennement :</strong> Gammes (5 min) + Prélude (10 min) + Nouveau morceau (15 min)</li>
          <li><strong>Répertoire :</strong> Apprenez 2-3 morceaux supplémentaires de ce niveau</li>
          <li><strong>Révision :</strong> Rejouez vos anciens morceaux pour ne pas les oublier</li>
          <li><strong>Lecture :</strong> Déchiffrez régulièrement de nouvelles partitions simples</li>
          <li><strong>Créativité :</strong> Improvisez, expérimentez, jouez pour le plaisir !</li>
        </ul>
        <p className="mt-4">
          Quand tout cela vous semble naturel et que vous avez soif de nouveaux défis,
          vous serez prêt pour le Niveau 4 !
        </p>
      </ContentBlock>
    </LessonTemplate>
  )
}
