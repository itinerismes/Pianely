import LessonTemplate from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

export default function Niveau3Lecon6() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={6}
      title="Morceaux célèbres faciles"
      description="Apprenez vos premiers extraits de pièces classiques célèbres et découvrez les grands compositeurs."
      duration="18 min"
      objectives={[
        "Apprendre des extraits de pièces classiques célèbres",
        "Découvrir les grands compositeurs et leurs styles",
        "Appliquer toutes les techniques apprises jusqu'ici",
        "Développer l'interprétation musicale",
        "Comprendre la structure de pièces simples",
        "Gagner confiance pour aborder le répertoire classique"
      ]}
      previousLesson="/parcours/niveau-3/lecon-5"
      nextLesson="/parcours/niveau-3/lecon-7"
    >
      <ContentBlock variant="highlight">
        <h2>Votre entrée dans le répertoire classique</h2>
        <p>
          Félicitations ! Vous avez maintenant toutes les bases techniques pour aborder de vraies
          pièces musicales. Dans cette leçon, nous allons explorer des extraits de morceaux célèbres
          que vous reconnaîtrez peut-être. C'est un moment excitant : vous allez jouer de la VRAIE
          musique classique !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Pourquoi commencer par des extraits ?</h2>
        <p>
          Les pièces classiques complètes peuvent être longues et décourageantes pour débuter.
          En apprenant d'abord des extraits courts mais représentatifs, vous allez :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Goûter au style de différents compositeurs</li>
          <li>Obtenir rapidement des résultats satisfaisants</li>
          <li>Construire votre répertoire progressivement</li>
          <li>Développer votre culture musicale</li>
          <li>Identifier les compositeurs que vous aimez</li>
        </ul>
        <p className="mt-4">
          Chaque extrait sera comme une fenêtre ouverte sur l'univers d'un compositeur.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Morceau 1 : "Ode à la joie" - Beethoven</h2>
        <p>
          Commençons par l'une des mélodies les plus célèbres de l'histoire de la musique,
          tirée de la 9e Symphonie de Beethoven.
        </p>
        <div className="mt-4 space-y-2">
          <p><strong>Mélodie (main droite) :</strong></p>
          <p className="ml-4">Mi - Mi - Fa - Sol | Sol - Fa - Mi - Ré | Do - Do - Ré - Mi | Mi - Ré - Ré</p>
          <p className="ml-4 text-sm opacity-80">(Chaque note = une noire, tempo modéré)</p>
        </div>
        <p className="mt-4">
          <strong>Accompagnement simple (main gauche) :</strong> Accord de Do majeur (Do-Mi-Sol)
          tenu pendant les 4 premières mesures.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 1 : Apprendre "Ode à la joie"</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite seule : apprenez la mélodie note par note, lentement</li>
          <li>Trouvez le bon doigté : 3-3-4-5 | 5-4-3-2 | 1-1-2-3 | 3-2-2</li>
          <li>Répétez 10 fois jusqu'à fluidité</li>
          <li>Main gauche : accord de Do majeur (Do-Mi-Sol) en position grave</li>
          <li>Jouez l'accord au début de chaque phrase de 4 notes</li>
          <li>Mains ensemble : très lentement au début</li>
          <li>Ajoutez la pédale : changez à chaque phrase</li>
        </ol>
        <p className="mt-4">
          <strong>Expression :</strong> Jouez avec noblesse et majesté, mezzo-forte (moyennement
          fort). C'est un hymne à la joie universelle !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Morceau 2 : "Prélude en Do majeur" - Bach (extrait)</h2>
        <p>
          Un des préludes les plus apaisants de Bach, basé sur un arpège simple mais hypnotique.
          Nous allons apprendre le motif de base.
        </p>
        <div className="mt-4 space-y-2">
          <p><strong>Motif d'arpège (deux mains) :</strong></p>
          <p className="ml-4">Main gauche : Do grave</p>
          <p className="ml-4">Main droite : Mi - Sol - Do - Mi - Sol - Do - Mi - Sol</p>
          <p className="ml-4 text-sm opacity-80">(Notes égales, fluides, comme une vague)</p>
        </div>
        <p className="mt-4">
          Le secret de cette pièce : maintenir la pédale pendant tout l'arpège pour créer
          une nappe harmonique continue.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 2 : Le style de Bach</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite seule : pratiquez l'arpège Mi-Sol-Do-Mi-Sol-Do-Mi-Sol</li>
          <li>Doigté : 1-2-3-1-2-3-1-2 (passage du pouce fluide)</li>
          <li>Toutes les notes doivent être égales en volume et durée</li>
          <li>Ajoutez le Do grave à la main gauche (pouce ou 5e doigt)</li>
          <li>Enfoncez la pédale quand vous jouez le Do grave</li>
          <li>Maintenez la pédale pendant tout l'arpège</li>
          <li>Répétez ce motif 10 fois : Do grave + arpège</li>
        </ol>
        <p className="mt-4">
          <strong>Expression :</strong> Jouez doucement (piano), régulièrement, comme une méditation
          musicale. Bach recherchait l'équilibre et la sérénité.
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Comprendre les styles des compositeurs</h2>
        <div className="mt-3 space-y-3">
          <p><strong>Bach (1685-1750) - Baroque :</strong></p>
          <p className="ml-4">Lignes mélodiques entrelacées, régularité, mathématique musicale,
          spiritualité</p>

          <p><strong>Mozart (1756-1791) - Classique :</strong></p>
          <p className="ml-4">Clarté, élégance, équilibre, mélodies chantantes, légèreté</p>

          <p><strong>Beethoven (1770-1827) - Classique/Romantique :</strong></p>
          <p className="ml-4">Puissance, émotion intense, dramaturgie, humanisme, lutte héroïque</p>

          <p><strong>Chopin (1810-1849) - Romantique :</strong></p>
          <p className="ml-4">Poésie, mélancolie, virtuosité pianistique, rubato, intimité</p>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Morceau 3 : "Petite musique de nuit" - Mozart (thème)</h2>
        <p>
          Une des mélodies les plus reconnaissables de Mozart, élégante et enjouée.
        </p>
        <div className="mt-4 space-y-2">
          <p><strong>Thème principal (main droite) :</strong></p>
          <p className="ml-4">Sol Sol | Ré Ré | Sol Sol | Ré Ré Sol-Ré | Do Do | Sol</p>
          <p className="ml-4 text-sm opacity-80">(Rythme : noire-noire | noire-noire | etc.)</p>
        </div>
        <p className="mt-4">
          <strong>Accompagnement (main gauche) :</strong> Alternez Sol grave et l'accord
          Sol-Si-Ré en rythme régulier.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 3 : L'élégance mozartienne</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite : apprenez le thème avec précision rythmique</li>
          <li>Articulation : les notes répétées (Sol-Sol, Ré-Ré) doivent être détachées mais légères</li>
          <li>Main gauche : pratiquez l'alternance basse-accord (Sol grave, puis Sol-Si-Ré)</li>
          <li>Coordonnez les deux mains très lentement</li>
          <li>Pédale discrète : changez à chaque mesure</li>
          <li>Accélérez progressivement jusqu'à tempo allegro (joyeux et vif)</li>
        </ol>
        <p className="mt-4">
          <strong>Expression :</strong> Jouez avec légèreté, clarté et bonne humeur. Mozart
          aimait que sa musique semble facile et naturelle, même si elle est techniquement exigeante.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Morceau 4 : "Lettre à Élise" - Beethoven (ouverture)</h2>
        <p>
          L'une des pièces pour piano les plus célèbres au monde, tendre et mélancolique.
        </p>
        <div className="mt-4 space-y-2">
          <p><strong>Motif d'ouverture (main droite, très simplifié) :</strong></p>
          <p className="ml-4">Mi - Ré# - Mi - Ré# - Mi - Si - Ré - Do - La</p>
          <p className="ml-4 text-sm opacity-80">(Ré# = touche noire entre Ré et Mi)</p>
        </div>
        <p className="mt-4">
          <strong>Accompagnement (main gauche) :</strong> La grave (octave basse) au début
          de la phrase.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 4 : Jouer "Lettre à Élise"</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite seule : repérez le Ré# (touche noire entre Ré et Mi)</li>
          <li>Doigté suggéré : 3-2-3-2-3-1-3-2-1 (majeur commence)</li>
          <li>Jouez lentement, en sentant l'alternance Mi-Ré#-Mi</li>
          <li>Le caractère : doux, interrogatif, un peu mélancolique</li>
          <li>Ajoutez le La grave à la main gauche au début</li>
          <li>Pédale légère : enfoncez sur le La, maintenez pendant la phrase</li>
          <li>Répétez 10 fois en cherchant l'expression romantique</li>
        </ol>
        <p className="mt-4">
          <strong>Note :</strong> Cette pièce utilise une touche noire (Ré#), votre première
          sortie hors des touches blanches. Prenez le temps de bien localiser cette note.
        </p>
      </ContentBlock>

      <ContentBlock variant="normal">
        <h2>Morceau 5 : "Le Cygne" - Saint-Saëns (mélodie)</h2>
        <p>
          Une mélodie d'une beauté poignante, évoquant la grâce d'un cygne glissant sur l'eau.
        </p>
        <div className="mt-4 space-y-2">
          <p><strong>Début de la mélodie (main droite, simplifié) :</strong></p>
          <p className="ml-4">Sol - La - Sol - Fa - Mi - Fa - Sol</p>
          <p className="ml-4 text-sm opacity-80">(Notes longues, très liées, chantantes)</p>
        </div>
        <p className="mt-4">
          <strong>Accompagnement (main gauche) :</strong> Arpège lent de Do majeur : Do-Mi-Sol-Mi
          en boucle.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 5 : Chanter au piano</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite : jouez la mélodie en legato PARFAIT</li>
          <li>Chaque note doit couler dans la suivante sans rupture</li>
          <li>Imaginez un chanteur ou un violoncelliste jouant cette ligne</li>
          <li>Main gauche : arpège Do-Mi-Sol-Mi en notes égales, douces</li>
          <li>L'accompagnement doit rester discret sous la mélodie</li>
          <li>Mains ensemble : la mélodie doit ressortir, l'arpège bercer</li>
          <li>Pédale généreuse : changez tous les deux temps</li>
        </ol>
        <p className="mt-4">
          <strong>Expression :</strong> Jouez avec une grande douceur (pianissimo), comme si vous
          ne vouliez pas déranger la beauté fragile du cygne. Laissez la mélodie respirer.
        </p>
      </ContentBlock>

      <ContentBlock variant="warning">
        <h2>Erreurs d'interprétation à éviter</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Jouer trop vite :</strong> Prenez le temps. La musique a besoin d'espace pour respirer</li>
          <li><strong>Volume uniforme :</strong> Variez les nuances, même dans ces extraits simples</li>
          <li><strong>Accompagnement trop fort :</strong> L'accompagnement soutient, il ne concurrence pas</li>
          <li><strong>Manque de caractère :</strong> Chaque compositeur a son style, adaptez votre jeu</li>
          <li><strong>Pédale excessive :</strong> Même dans les pièces romantiques, changez régulièrement</li>
          <li><strong>Ignorer les silences :</strong> Les silences font partie de la musique</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Morceau 6 : "Menuet en Sol" - Bach</h2>
        <p>
          Un menuet élégant, souvent le premier morceau baroque que les étudiants apprennent.
        </p>
        <div className="mt-4 space-y-2">
          <p><strong>Ouverture (très simplifiée) :</strong></p>
          <p className="ml-4">Main droite : Ré - Sol - La - Si - Do</p>
          <p className="ml-4">Main gauche : Sol grave - Si - Ré (accord en arpège)</p>
        </div>
        <p className="mt-4">
          Le menuet est une danse à trois temps (1-2-3, 1-2-3), avec un caractère noble et
          mesuré.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 6 : Comprendre la danse baroque</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Sentez le rythme à trois temps : 1-2-3, 1-2-3 (un peu comme une valse)</li>
          <li>Main droite : mélodie Ré-Sol-La-Si-Do avec phrasé élégant</li>
          <li>Main gauche : Sol grave sur le temps 1, puis Si-Ré sur les temps 2-3</li>
          <li>Pédale minimale : Bach privilégie la clarté des voix</li>
          <li>Articulez légèrement les notes (ni trop legato, ni staccato)</li>
          <li>Tempo modéré : assez pour danser, pas trop rapide</li>
        </ol>
        <p className="mt-4">
          <strong>Style :</strong> Imaginez une danse de cour du 18e siècle - élégante, raffinée,
          avec de petites révérences. La musique baroque demande clarté et précision.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Comment apprendre un nouveau morceau ?</h2>
        <p>Méthode professionnelle en 7 étapes :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Écouter :</strong> Écoutez l'œuvre complète plusieurs fois avant de jouer</li>
          <li><strong>Analyser :</strong> Identifiez les sections, répétitions, difficultés</li>
          <li><strong>Main droite :</strong> Apprenez très lentement, note par note</li>
          <li><strong>Main gauche :</strong> Idem, séparément, avec patience</li>
          <li><strong>Mains ensemble :</strong> Section par section, extrêmement lentement</li>
          <li><strong>Assembler :</strong> Reliez les sections progressivement</li>
          <li><strong>Interpréter :</strong> Ajoutez expression, nuances, votre touche personnelle</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Règle d'or : si vous vous trompez, c'est que vous allez trop vite. Ralentissez !
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Construire votre répertoire</h2>
        <p>Conseils pour développer un répertoire solide :</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Variété :</strong> Apprenez des pièces de différentes époques et styles</li>
          <li><strong>Révision :</strong> Rejouez régulièrement vos anciennes pièces (ne les oubliez pas !)</li>
          <li><strong>Progression :</strong> Alternez pièces faciles et légèrement difficiles</li>
          <li><strong>Plaisir :</strong> Choisissez des morceaux que vous aimez vraiment</li>
          <li><strong>Patience :</strong> Il vaut mieux une pièce bien maîtrisée que dix à moitié apprises</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Ressources pour aller plus loin</h2>
        <p>
          Pour continuer à explorer le répertoire des pièces faciles :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Livres recommandés :</strong> "Le Petit Livre d'Anna Magdalena Bach", "ABRSM Grade 1-2"</li>
          <li><strong>En ligne :</strong> IMSLP.org (partitions gratuites du domaine public)</li>
          <li><strong>Applications :</strong> Simply Piano, Flowkey (avec vraies partitions)</li>
          <li><strong>Chaînes YouTube :</strong> Tutoriels de pièces classiques pour débutants</li>
        </ul>
        <p className="mt-4">
          N'hésitez pas à chercher des versions simplifiées de vos pièces préférées - presque
          tout peut être adapté pour votre niveau !
        </p>
      </ContentBlock>

      <ContentBlock variant="highlight">
        <h2>Programme de pratique pour cette leçon</h2>
        <p>Sur 2 semaines, travaillez ces extraits :</p>
        <div className="mt-3 space-y-3">
          <p><strong>Semaine 1 :</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Jours 1-2 : Ode à la joie (Beethoven)</li>
            <li>Jours 3-4 : Prélude en Do (Bach)</li>
            <li>Jours 5-6 : Petite musique de nuit (Mozart)</li>
            <li>Jour 7 : Révision des trois</li>
          </ul>
          <p className="mt-2"><strong>Semaine 2 :</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Jours 1-2 : Lettre à Élise (Beethoven)</li>
            <li>Jours 3-4 : Le Cygne (Saint-Saëns)</li>
            <li>Jours 5-6 : Menuet en Sol (Bach)</li>
            <li>Jour 7 : Mini-récital personnel des 6 extraits</li>
          </ul>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Célébrez vos progrès !</h2>
        <p>
          Vous jouez maintenant des morceaux que des millions de personnes reconnaissent et
          apprécient. C'est un accomplissement majeur ! Ces extraits ne sont que le début :
          le répertoire pianistique contient des milliers de merveilles qui n'attendent que vous.
        </p>
        <p className="mt-3">
          Chaque compositeur a quelque chose d'unique à offrir. En explorant différents styles,
          vous découvrirez quelles musiques résonnent le plus en vous. Et c'est exactement ce
          qui fera de vous un musicien unique.
        </p>
        <p className="mt-3">
          Dans la prochaine leçon, nous approfondirons l'expression musicale : comment utiliser
          les nuances et les variations de tempo pour raconter une histoire avec votre jeu.
        </p>
      </ContentBlock>
    </LessonTemplate>
  )
}
