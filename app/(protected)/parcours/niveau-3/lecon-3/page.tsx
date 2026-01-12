import LessonTemplate from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

export default function Niveau3Lecon3() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={3}
      title="Les accords enrichis"
      description="Découvrez les accords de septième et les inversions pour enrichir votre palette harmonique."
      duration="16 min"
      objectives={[
        "Comprendre la construction des accords de 7ème",
        "Jouer les accords de 7ème dominante et majeure",
        "Maîtriser les inversions d'accords",
        "Utiliser les inversions pour des transitions fluides",
        "Enrichir les accompagnements avec ces nouveaux accords",
        "Reconnaître les accords enrichis à l'oreille"
      ]}
      previousLesson="/parcours/niveau-3/lecon-2"
      nextLesson="/parcours/niveau-3/lecon-4"
    >
      <ContentBlock variant="highlight">
        <h2>Au-delà des accords basiques</h2>
        <p>
          Vous connaissez déjà les accords majeurs et mineurs (trois notes : fondamentale, tierce, quinte).
          Aujourd'hui, nous allons ajouter une quatrième note pour créer des accords plus riches et
          expressifs qui donnent de la profondeur à votre jeu.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Qu'est-ce qu'un accord de septième ?</h2>
        <p>
          Un accord de septième est simplement un accord de trois notes auquel on ajoute une
          <strong> septième</strong> (la septième note de la gamme en partant de la fondamentale).
        </p>
        <p className="mt-4">
          <strong>Structure :</strong> Fondamentale + Tierce + Quinte + Septième (4 notes)
        </p>
        <p className="mt-3">
          Il existe plusieurs types d'accords de septième, mais nous allons commencer par les deux
          plus courants :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Accord de 7ème de dominante :</strong> Son riche et tension qui appelle une résolution</li>
          <li><strong>Accord de 7ème majeure :</strong> Son doux et jazzy, stable et élégant</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>L'accord de 7ème de dominante (V7)</h2>
        <p>
          C'est l'accord de 7ème le plus utilisé en musique classique et populaire.
        </p>
        <p className="mt-3">
          <strong>Construction de Sol7 (G7) :</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>Sol (fondamentale)</li>
          <li>Si (tierce majeure)</li>
          <li>Ré (quinte juste)</li>
          <li>Fa (septième mineure)</li>
        </ul>
        <p className="mt-4 text-sm opacity-80">
          Notez que la septième est <em>mineure</em> (un ton en-dessous de la fondamentale à l'octave).
          C'est cette septième mineure qui crée la tension caractéristique de cet accord.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 1 : Jouer l'accord de Sol7</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main gauche : placez le pouce sur Sol, le majeur sur Si, l'auriculaire sur Ré</li>
          <li>Ajoutez le Fa avec votre main droite (pouce ou index)</li>
          <li>Jouez les quatre notes ensemble et écoutez le son</li>
          <li>Maintenant, main droite seule : Sol-Si-Ré-Fa (1-2-3-5)</li>
          <li>Répétez 10 fois, en appréciant la tension de l'accord</li>
        </ol>
        <p className="mt-4">
          <strong>Résolution :</strong> Après Sol7, jouez un accord de Do majeur (Do-Mi-Sol).
          Entendez-vous comment Sol7 "veut" résoudre sur Do ? C'est la magie de la 7ème de dominante !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>L'accord de 7ème majeure (Maj7)</h2>
        <p>
          Cet accord a un son plus doux et sophistiqué, très utilisé en jazz et musique moderne.
        </p>
        <p className="mt-3">
          <strong>Construction de DoMaj7 (CMaj7) :</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>Do (fondamentale)</li>
          <li>Mi (tierce majeure)</li>
          <li>Sol (quinte juste)</li>
          <li>Si (septième majeure)</li>
        </ul>
        <p className="mt-4 text-sm opacity-80">
          La différence cruciale : la septième est <em>majeure</em> (seulement un demi-ton en-dessous
          de l'octave). Cela donne un son stable et lumineux, contrairement à la tension du V7.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 2 : Jouer l'accord de DoMaj7</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite : Do-Mi-Sol-Si (doigts 1-2-3-5)</li>
          <li>Jouez l'accord en arpège d'abord (note par note) : Do, Mi, Sol, Si</li>
          <li>Puis jouez les quatre notes ensemble</li>
          <li>Écoutez la différence avec un accord de Do majeur simple (Do-Mi-Sol)</li>
          <li>Alternez entre Do majeur et DoMaj7 pour entendre l'enrichissement</li>
        </ol>
        <p className="mt-4">
          La septième majeure ajoute une couleur douce et rêveuse sans créer de tension.
          C'est parfait pour les ballades et les ambiances contemplatives.
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Formule rapide des accords de 7ème</h2>
        <div className="space-y-3 mt-3">
          <div>
            <p className="font-bold">Accord de 7ème de dominante (X7) :</p>
            <p>Accord majeur + septième mineure (10 demi-tons au-dessus de la fondamentale)</p>
            <p className="text-sm opacity-80">Exemples : Do7 = Do-Mi-Sol-Sib | Ré7 = Ré-Fa#-La-Do</p>
          </div>
          <div>
            <p className="font-bold">Accord de 7ème majeure (XMaj7) :</p>
            <p>Accord majeur + septième majeure (11 demi-tons au-dessus de la fondamentale)</p>
            <p className="text-sm opacity-80">Exemples : DoMaj7 = Do-Mi-Sol-Si | SolMaj7 = Sol-Si-Ré-Fa#</p>
          </div>
          <div>
            <p className="font-bold">Accord de 7ème mineure (Xm7) - bonus :</p>
            <p>Accord mineur + septième mineure</p>
            <p className="text-sm opacity-80">Exemples : Lam7 = La-Do-Mi-Sol | Rém7 = Ré-Fa-La-Do</p>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Les inversions d'accords</h2>
        <p>
          Une <strong>inversion</strong> est une réorganisation des notes d'un accord où la
          fondamentale n'est plus la note la plus grave.
        </p>
        <p className="mt-3">
          <strong>Pourquoi inverser ?</strong> Les inversions permettent :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Des transitions plus fluides entre accords (moins de sauts)</li>
          <li>Une ligne de basse plus mélodique</li>
          <li>Des accompagnements plus sophistiqués</li>
          <li>D'éviter la monotonie des accords en position fondamentale</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Les trois positions d'un accord (triade)</h2>
        <p>Prenons l'accord de Do majeur (Do-Mi-Sol) :</p>
        <div className="mt-4 space-y-3">
          <div>
            <p className="font-bold">Position fondamentale :</p>
            <p>Do-Mi-Sol (la fondamentale Do est à la basse)</p>
          </div>
          <div>
            <p className="font-bold">Première inversion :</p>
            <p>Mi-Sol-Do (la tierce Mi est à la basse)</p>
          </div>
          <div>
            <p className="font-bold">Deuxième inversion :</p>
            <p>Sol-Do-Mi (la quinte Sol est à la basse)</p>
          </div>
        </div>
        <p className="mt-4 text-sm opacity-80">
          L'accord reste un Do majeur dans les trois cas, mais la sonorité et la fonction
          musicale changent subtilement.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 3 : Pratiquer les inversions</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite, jouez Do-Mi-Sol (position fondamentale, doigts 1-3-5)</li>
          <li>Gardez Mi et Sol, montez le Do d'une octave : Mi-Sol-Do (1ère inversion, 1-2-5)</li>
          <li>Gardez Sol et Do, montez le Mi d'une octave : Sol-Do-Mi (2ème inversion, 1-2-5)</li>
          <li>Continuez le cycle : remontez le Sol pour revenir à Do-Mi-Sol à l'octave supérieure</li>
          <li>Descendez maintenant en sens inverse</li>
          <li>Répétez ce cycle 5 fois sans pause, en mouvement fluide</li>
        </ol>
        <p className="mt-4">
          Ce mouvement s'appelle un "mouvement par inversions" et c'est fondamental pour
          l'accompagnement au piano.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 4 : Progression harmonique avec inversions</h2>
        <p>Utilisons les inversions pour créer une progression fluide :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Do majeur</strong> en position fondamentale : Do-Mi-Sol</li>
          <li><strong>Fa majeur</strong> en 1ère inversion : La-Do-Fa (la note Do reste !)</li>
          <li><strong>Sol majeur</strong> en position fondamentale : Sol-Si-Ré</li>
          <li><strong>Do majeur</strong> en position fondamentale : Do-Mi-Sol</li>
        </ol>
        <p className="mt-4">
          Jouez cette progression lentement. Remarquez comme les notes bougent peu entre chaque
          accord grâce aux inversions. C'est le principe de la <strong>conduite des voix</strong>.
        </p>
      </ContentBlock>

      <ContentBlock variant="normal">
        <h2>Exercice 5 : Accords de 7ème avec inversions</h2>
        <p>Les accords de 7ème ont trois inversions (4 notes = 4 positions) :</p>
        <p className="mt-3"><strong>Sol7 (Sol-Si-Ré-Fa) :</strong></p>
        <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
          <li>Position fondamentale : Sol-Si-Ré-Fa</li>
          <li>1ère inversion : Si-Ré-Fa-Sol</li>
          <li>2ème inversion : Ré-Fa-Sol-Si</li>
          <li>3ème inversion : Fa-Sol-Si-Ré</li>
        </ol>
        <p className="mt-4">
          Pratiquez ces quatre positions à la main droite (doigts 1-2-3-5), en passant de l'une
          à l'autre par mouvement minimal.
        </p>
      </ContentBlock>

      <ContentBlock variant="warning">
        <h2>Erreurs courantes à éviter</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Confondre 7ème majeure et 7ème mineure (une seule note de différence !)</li>
          <li>Faire de trop grands sauts entre accords au lieu d'utiliser les inversions</li>
          <li>Oublier qu'une inversion garde le même nom d'accord (Do majeur reste Do majeur)</li>
          <li>Jouer les accords de 7ème trop fort (ils sonnent mieux avec douceur)</li>
          <li>Négliger l'écoute de la qualité sonore de chaque inversion</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 6 : Blues avec accords de 7ème</h2>
        <p>
          Les accords de 7ème de dominante sont l'âme du blues. Jouons une progression blues simple
          en Do :
        </p>
        <div className="mt-3 space-y-2">
          <p>Main gauche (basse) | Main droite (accord de 7ème) :</p>
          <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
            <li>Do7 (4 temps) - Do | Mi-Sol-Sib</li>
            <li>Do7 (4 temps) - Do | Mi-Sol-Sib</li>
            <li>Fa7 (4 temps) - Fa | La-Do-Mib</li>
            <li>Do7 (4 temps) - Do | Mi-Sol-Sib</li>
            <li>Sol7 (2 temps) - Sol | Si-Ré-Fa</li>
            <li>Fa7 (2 temps) - Fa | La-Do-Mib</li>
            <li>Do7 (4 temps) - Do | Mi-Sol-Sib</li>
          </ol>
        </div>
        <p className="mt-4">
          Jouez cette progression lentement avec un rythme régulier. Vous venez de jouer votre
          premier blues de 12 mesures !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 7 : Enrichir une mélodie</h2>
        <p>Reprenons une mélodie simple et enrichissons l'accompagnement :</p>
        <p className="mt-3">Mélodie : Do - Mi - Sol - Sol (mélodie quelconque)</p>
        <div className="mt-3 space-y-3">
          <p><strong>Accompagnement basique :</strong> Do majeur (Do-Mi-Sol) tenu</p>
          <p><strong>Accompagnement enrichi :</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Sur le 1er Do : DoMaj7 (Do-Mi-Sol-Si)</li>
            <li>Sur le Mi : Fa/Do en 2ème inversion (Do-Fa-La)</li>
            <li>Sur le 1er Sol : Sol7 (Sol-Si-Ré-Fa)</li>
            <li>Sur le 2ème Sol : Do majeur (Do-Mi-Sol)</li>
          </ul>
        </div>
        <p className="mt-4">
          Expérimentez avec différents accords de 7ème et inversions pour trouver les sonorités
          qui vous plaisent.
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Application pratique des inversions</h2>
        <p>Règle d'or pour choisir l'inversion :</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Mouvement minimal :</strong> Choisissez l'inversion où les notes bougent le moins possible</li>
          <li><strong>Ligne de basse :</strong> L'inversion détermine la note de basse, créez une mélodie à la basse</li>
          <li><strong>Registre :</strong> Restez dans un registre confortable pour vos mains</li>
          <li><strong>Effet désiré :</strong> Position fondamentale = stable, inversions = plus léger et mobile</li>
        </ul>
      </ContentBlock>

      <ContentBlock variant="highlight">
        <h2>Plan de pratique pour cette leçon</h2>
        <p>Pratiquez pendant 10-15 minutes par jour sur deux semaines :</p>
        <div className="mt-3 space-y-3">
          <p><strong>Semaine 1 - Les accords de 7ème :</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jours 1-3 : Do7, Sol7, Fa7 (7ème de dominante)</li>
            <li>Jours 4-5 : DoMaj7, SolMaj7, FaMaj7 (7ème majeure)</li>
            <li>Jours 6-7 : Progression blues avec accords de 7ème</li>
          </ul>
          <p className="mt-3"><strong>Semaine 2 - Les inversions :</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jours 1-3 : Inversions de Do, Fa, Sol majeurs</li>
            <li>Jours 4-5 : Inversions des accords de 7ème</li>
            <li>Jours 6-7 : Progressions harmoniques avec inversions fluides</li>
          </ul>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>L'écoute active</h2>
        <p>
          Pour vraiment comprendre ces accords, écoutez-les dans la musique réelle :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Accords de 7ème dominante :</strong> Blues, rock'n'roll, musique classique (résolutions)</li>
          <li><strong>Accords de 7ème majeure :</strong> Jazz, bossa nova, musiques de films</li>
          <li><strong>Inversions :</strong> Écoutez les accompagnements de piano et notez la fluidité</li>
        </ul>
        <p className="mt-4">
          Essayez d'identifier ces accords à l'oreille dans les chansons que vous aimez.
          Cette écoute analytique enrichira considérablement votre compréhension musicale !
        </p>
      </ContentBlock>
    </LessonTemplate>
  )
}
