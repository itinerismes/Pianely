import LessonTemplate from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

export default function Niveau3Lecon4() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={4}
      title="Techniques d'articulation"
      description="Maîtrisez le legato et le staccato pour donner vie et expression à votre jeu."
      duration="14 min"
      objectives={[
        "Comprendre les différentes articulations au piano",
        "Maîtriser le jeu legato (lié)",
        "Maîtriser le jeu staccato (détaché)",
        "Combiner différentes articulations dans une même pièce",
        "Développer le contrôle du toucher",
        "Exprimer des émotions par l'articulation"
      ]}
      previousLesson="/parcours/niveau-3/lecon-3"
      nextLesson="/parcours/niveau-3/lecon-5"
    >
      <ContentBlock variant="highlight">
        <h2>Le secret de l'expression musicale</h2>
        <p>
          Deux pianistes peuvent jouer exactement les mêmes notes, mais l'un vous touchera
          profondément tandis que l'autre vous laissera indifférent. La différence ?
          L'articulation. C'est votre façon de "parler" au piano, votre accent musical.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Qu'est-ce que l'articulation ?</h2>
        <p>
          L'articulation est la manière dont vous attaquez et relâchez chaque note. C'est comme
          l'élocution dans le langage parlé : vous pouvez chuchoter, parler distinctement,
          crier, traîner les mots, ou les détacher clairement.
        </p>
        <p className="mt-4">
          Au piano, les deux articulations de base sont :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Legato :</strong> Lié, fluide, sans interruption entre les notes</li>
          <li><strong>Staccato :</strong> Détaché, notes courtes et séparées</li>
        </ul>
        <p className="mt-4 text-sm opacity-80">
          Il existe d'autres articulations (portato, marcato, tenuto...), mais commençons par
          ces deux fondamentales qui transformeront immédiatement votre jeu.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Le Legato : l'art de lier les notes</h2>
        <p>
          <strong>Legato</strong> vient de l'italien "lié". C'est l'articulation la plus naturelle
          au chant et la plus recherchée au piano. Les notes doivent s'enchaîner sans silence
          entre elles.
        </p>
        <p className="mt-3">
          <strong>Le défi technique :</strong> Au piano, contrairement au violon ou à la voix,
          chaque note nécessite une nouvelle attaque. Le legato exige donc une coordination parfaite :
          vous devez presser la touche suivante juste avant de relâcher la précédente.
        </p>
        <p className="mt-3 font-semibold">
          Sur une partition, le legato est indiqué par une courbe reliant plusieurs notes (une liaison).
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 1 : Le legato sur cinq notes</h2>
        <p>Travaillons le legato de manière consciente :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite, placez les doigts 1-2-3-4-5 sur Do-Ré-Mi-Fa-Sol</li>
          <li>Jouez le Do (pouce) et maintenez-le enfoncé</li>
          <li>Pressez le Ré (index) AVANT de relâcher le Do - les deux notes doivent se chevaucher légèrement</li>
          <li>Répétez ce processus pour chaque doigt : Do→Ré→Mi→Fa→Sol</li>
          <li>L'objectif : aucun silence entre les notes, un flux sonore continu</li>
          <li>Descendez ensuite : Sol→Fa→Mi→Ré→Do</li>
          <li>Répétez 10 fois très lentement</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Astuce : Imaginez que vous versez de l'eau d'un verre à l'autre sans interruption du flux.
          C'est la même fluidité que vous cherchez au piano.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 2 : Legato avec passage du pouce</h2>
        <p>Le vrai test du legato : maintenir la liaison lors du passage du pouce.</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez Do-Ré-Mi (1-2-3) en legato parfait</li>
          <li>Pendant que le Mi est enfoncé, préparez le pouce sous la main</li>
          <li>Le moment critique : pressez le Fa (pouce) exactement quand vous relâchez le Mi</li>
          <li>Continuez Fa-Sol (1-2) en legato</li>
          <li>Répétez cette séquence Do→Sol 20 fois très lentement</li>
          <li>Écoutez attentivement : vous ne devez entendre AUCUN silence</li>
        </ol>
        <p className="mt-4">
          Cette technique est cruciale pour jouer des gammes et mélodies de manière fluide et
          chantante.
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Les secrets d'un beau legato</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Transfert de poids :</strong> Transférez le poids d'un doigt à l'autre, pas d'attaque brutale</li>
          <li><strong>Écoute active :</strong> Vos oreilles sont votre meilleur guide, écoutez les silences indésirables</li>
          <li><strong>Pédale discrète :</strong> Plus tard, la pédale aidera, mais apprenez d'abord sans</li>
          <li><strong>Doigts proches des touches :</strong> Ne levez pas les doigts haut entre les notes</li>
          <li><strong>Mouvement horizontal :</strong> Sentez un mouvement de glissement d'une touche à l'autre</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Le Staccato : l'art du détaché</h2>
        <p>
          <strong>Staccato</strong> signifie "détaché" en italien. Les notes sont courtes, séparées
          les unes des autres par des silences. C'est l'opposé du legato.
        </p>
        <p className="mt-3">
          <strong>L'effet :</strong> Le staccato crée de la légèreté, du rythme, de l'énergie.
          Pensez aux gouttes d'eau qui tombent, au rire pétillant, aux notes qui rebondissent.
        </p>
        <p className="mt-3 font-semibold">
          Sur une partition, le staccato est indiqué par un point au-dessus ou en-dessous de la note.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 3 : Le staccato de poignet</h2>
        <p>Il existe plusieurs types de staccato. Commençons par le staccato de poignet :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite détendue, en l'air au-dessus du clavier</li>
          <li>Laissez tomber le poignet pour que le doigt frappe la touche (Do, par exemple)</li>
          <li>Rebondissez immédiatement, comme si la touche était brûlante</li>
          <li>Le mouvement vient du poignet, pas des doigts</li>
          <li>La note doit être courte mais claire, pas faible</li>
          <li>Répétez sur Do-Ré-Mi-Fa-Sol, une note staccato par seconde</li>
          <li>Pratiquez 10 fois, en cherchant le "rebond"</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Le staccato ne signifie pas "jouer doucement" - les notes staccato doivent avoir de
          l'énergie et de la clarté.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 4 : Le staccato de doigts</h2>
        <p>Pour des passages rapides, on utilise le staccato de doigts :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Placez la main en position au-dessus de Do-Ré-Mi-Fa-Sol</li>
          <li>Le poignet reste stable, seuls les doigts bougent</li>
          <li>Chaque doigt frappe rapidement sa touche et rebondit immédiatement</li>
          <li>Le mouvement est petit, nerveux, énergique</li>
          <li>Jouez Do-Ré-Mi-Ré-Do en staccato de doigts</li>
          <li>Accélérez progressivement tout en gardant chaque note distincte</li>
          <li>Répétez 15 fois</li>
        </ol>
        <p className="mt-4">
          Le staccato de doigts est essentiel pour les passages virtuoses et les notes répétées
          rapides.
        </p>
      </ContentBlock>

      <ContentBlock variant="normal">
        <h2>Exercice 5 : Contraste legato-staccato</h2>
        <p>Maintenant, combinons les deux articulations pour développer le contrôle :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez Do-Ré-Mi-Fa-Sol en legato (lié, fluide)</li>
          <li>Jouez Do-Ré-Mi-Fa-Sol en staccato (détaché, rebondissant)</li>
          <li>Alternez : legato, puis staccato, puis legato...</li>
          <li>Le contraste doit être très marqué</li>
          <li>Répétez 5 fois de chaque</li>
        </ol>
        <p className="mt-4">
          Cette capacité à changer instantanément d'articulation est ce qui donne vie à la musique.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 6 : Mélodie avec articulations variées</h2>
        <p>Créons une petite mélodie avec des articulations contrastées :</p>
        <div className="mt-3 space-y-2">
          <p className="font-semibold">Phrase 1 (legato) :</p>
          <p className="ml-4">Do-Ré-Mi (lié, doux, comme un chant)</p>
          <p className="font-semibold mt-2">Phrase 2 (staccato) :</p>
          <p className="ml-4">Sol-Sol-Sol (détaché, léger, comme des gouttes)</p>
          <p className="font-semibold mt-2">Phrase 3 (legato) :</p>
          <p className="ml-4">Mi-Ré-Do (lié, descendant doucement)</p>
        </div>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Jouez cette séquence en respectant scrupuleusement les articulations</li>
          <li>Exagérez les contrastes au début</li>
          <li>Répétez 10 fois jusqu'à ce que ce soit fluide et expressif</li>
        </ol>
        <p className="mt-4">
          Vous venez de créer une mini-histoire musicale grâce aux articulations !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 7 : Mélodie connue avec articulations</h2>
        <p>Reprenons "Au clair de la lune" et transformons-la par les articulations :</p>
        <div className="mt-3 space-y-3">
          <p><strong>Version A (tout legato) :</strong></p>
          <p className="ml-4">Jouez toute la mélodie en legato - doux, nocturne, romantique</p>
          <p><strong>Version B (tout staccato) :</strong></p>
          <p className="ml-4">Jouez toute la mélodie en staccato - léger, enjoué, presque comique</p>
          <p><strong>Version C (mixte) :</strong></p>
          <p className="ml-4">Première phrase legato, deuxième phrase staccato, alternez</p>
        </div>
        <p className="mt-4">
          Entendez-vous comment la même mélodie peut évoquer des émotions complètement
          différentes juste en changeant l'articulation ?
        </p>
      </ContentBlock>

      <ContentBlock variant="warning">
        <h2>Erreurs fréquentes à corriger</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Legato :</strong> Laisser des micro-silences entre les notes (écoutez attentivement !)</li>
          <li><strong>Legato :</strong> Utiliser la pédale comme béquille au lieu de vraiment lier avec les doigts</li>
          <li><strong>Staccato :</strong> Jouer faiblement au lieu de jouer court mais avec énergie</li>
          <li><strong>Staccato :</strong> Raidir les doigts ou le poignet (restez détendu et rebondissant)</li>
          <li><strong>Général :</strong> Ne pas exagérer assez les contrastes au début de l'apprentissage</li>
          <li><strong>Général :</strong> Oublier de respirer entre les phrases musicales</li>
        </ul>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Articulations et émotions</h2>
        <p>Guide pratique pour choisir l'articulation selon l'émotion :</p>
        <div className="mt-3 space-y-2">
          <p><strong>Legato convient pour :</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Mélodies chantantes et expressives</li>
            <li>Moments tendres, nostalgiques, romantiques</li>
            <li>Passages calmes et contemplatifs</li>
          </ul>
          <p className="mt-3"><strong>Staccato convient pour :</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Passages joyeux, légers, dansants</li>
            <li>Moments d'humour ou de malice</li>
            <li>Rythmes énergiques et accentués</li>
          </ul>
          <p className="mt-3"><strong>Mix des deux pour :</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Créer des contrastes dramatiques</li>
            <li>Donner du relief et de la variété</li>
            <li>La plupart des pièces classiques</li>
          </ul>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 8 : Gamme avec articulations</h2>
        <p>Revisitez votre gamme de Do majeur avec les articulations :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Gamme legato montante :</strong> Do→Do aigu, parfaitement lié</li>
          <li><strong>Gamme staccato descendante :</strong> Do aigu→Do grave, rebondissant</li>
          <li><strong>Gamme alternée :</strong> Notes alternées legato-staccato-legato-staccato</li>
          <li><strong>Gamme par paires :</strong> Deux notes legato, deux notes staccato</li>
          <li>Répétez chaque variation 5 fois</li>
        </ol>
        <p className="mt-4">
          Ces variations transforment un exercice technique en un véritable travail musical !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 9 : Improvisation expressive</h2>
        <p>Expérimentez librement avec les articulations :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Improvisez une courte mélodie (5-8 notes) sur les touches blanches</li>
          <li>Jouez-la d'abord tout en legato</li>
          <li>Rejouez-la tout en staccato</li>
          <li>Inventez votre propre pattern d'articulations mélangées</li>
          <li>Quelle version préférez-vous ? Pourquoi ?</li>
        </ol>
        <p className="mt-4">
          Cette expérimentation développe votre intuition musicale et votre sensibilité artistique.
        </p>
      </ContentBlock>

      <ContentBlock variant="highlight">
        <h2>Programme de pratique sur 10 jours</h2>
        <div className="mt-3 space-y-3">
          <p><strong>Jours 1-3 : Focus Legato</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>10 min de legato sur gammes et mélodies simples</li>
            <li>Objectif : aucun silence audible entre les notes</li>
          </ul>
          <p className="mt-2"><strong>Jours 4-6 : Focus Staccato</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>10 min de staccato (poignet et doigts)</li>
            <li>Objectif : notes courtes mais énergiques et claires</li>
          </ul>
          <p className="mt-2"><strong>Jours 7-10 : Combinaisons</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Mélangez les articulations dans des mélodies</li>
            <li>Objectif : contraste marqué et contrôle total</li>
          </ul>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>L'articulation dans le répertoire</h2>
        <p>
          Maintenant que vous maîtrisez ces techniques, écoutez comment les grands pianistes
          les utilisent :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Legato sublime :</strong> Chopin - Nocturnes (mélodies chantantes infinies)</li>
          <li><strong>Staccato brillant :</strong> Mozart - Sonates (légèreté et clarté)</li>
          <li><strong>Mix virtuose :</strong> Beethoven - Sonate "Pathétique" (contrastes dramatiques)</li>
        </ul>
        <p className="mt-4">
          En écoutant activement ces pièces, vous comprendrez le pouvoir expressif de
          l'articulation et vous inspirerez pour votre propre jeu.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Vers l'expression personnelle</h2>
        <p>
          L'articulation n'est pas qu'une technique - c'est votre voix au piano. Deux pianistes
          peuvent interpréter différemment les mêmes indications d'articulation, et c'est là
          toute la beauté de la musique.
        </p>
        <p className="mt-3">
          Avec la maîtrise du legato et du staccato, vous avez franchi un cap majeur : vous ne
          jouez plus seulement des notes, vous créez de la musique expressive. Dans la prochaine
          leçon, nous ajouterons un outil encore plus puissant : la pédale de sustain !
        </p>
      </ContentBlock>
    </LessonTemplate>
  )
}
