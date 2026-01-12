import LessonTemplate from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

export default function Niveau3Lecon5() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={5}
      title="La pédale de sustain"
      description="Découvrez comment utiliser la pédale droite pour enrichir votre son et créer des ambiances musicales."
      duration="15 min"
      objectives={[
        "Comprendre le fonctionnement de la pédale de sustain",
        "Maîtriser la technique de base du pédalage",
        "Apprendre le pédalage syncopé (après l'attaque)",
        "Éviter les erreurs courantes de pédale",
        "Utiliser la pédale pour l'expression musicale",
        "Combiner pédale et articulations"
      ]}
      previousLesson="/parcours/niveau-3/lecon-4"
      nextLesson="/parcours/niveau-3/lecon-6"
    >
      <ContentBlock variant="highlight">
        <h2>L'âme du piano</h2>
        <p>
          La pédale de sustain est souvent appelée "l'âme du piano". Utilisée correctement,
          elle transforme le piano en un instrument capable de chanter, de créer des ambiances
          enveloppantes, et de produire des sonorités qu'aucun autre instrument ne peut égaler.
          Bienvenue dans une dimension nouvelle de votre jeu !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Comment fonctionne la pédale ?</h2>
        <p>
          Le piano possède généralement trois pédales, mais la plus importante est la
          <strong> pédale droite</strong>, appelée <strong>pédale forte</strong> ou
          <strong> pédale de sustain</strong>.
        </p>
        <p className="mt-4">
          <strong>Mécanisme :</strong> Quand vous l'enfoncez, elle soulève tous les étouffoirs
          qui normalement arrêtent la vibration des cordes. Résultat : toutes les notes jouées
          continuent de résonner même après avoir relâché les touches.
        </p>
        <p className="mt-3">
          <strong>Effet magique :</strong> Les cordes non jouées vibrent aussi par sympathie,
          créant une richesse harmonique et une résonance naturelle impossible sans la pédale.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Position du pied sur la pédale</h2>
        <p>Avant de commencer, établissons la bonne position :</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Pied droit :</strong> Sur la pédale droite (la plus utilisée)</li>
          <li><strong>Appui :</strong> Avant du pied sur la pédale, talon au sol</li>
          <li><strong>Angle :</strong> Pied légèrement incliné vers la droite, naturel</li>
          <li><strong>Position :</strong> Jambe détendue, pas de tension dans la cuisse</li>
          <li><strong>Mouvement :</strong> Pivot depuis le talon, comme une charnière</li>
        </ul>
        <p className="mt-4 text-sm opacity-80">
          Le talon reste toujours au sol. Seul l'avant du pied monte et descend, comme si
          vous tapiez du pied sur un rythme lent.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 1 : Découvrir l'effet de la pédale</h2>
        <p>Expérimentons pour comprendre ce que fait la pédale :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>SANS pédale : Jouez un Do, maintenez 2 secondes, relâchez. Le son s'arrête net.</li>
          <li>AVEC pédale : Enfoncez la pédale AVANT de jouer. Jouez un Do, relâchez la touche.
              Le son continue ! Maintenez la pédale 5 secondes, écoutez la résonance.</li>
          <li>Pédale enfoncée : Jouez Do-Mi-Sol ensemble, relâchez les touches. Les trois notes
              continuent de sonner ensemble.</li>
          <li>Pédale enfoncée : Jouez une gamme complète Do→Do. Relâchez les touches. Toutes les
              notes résonnent ensemble (un peu confus, non ?)</li>
        </ol>
        <p className="mt-4">
          Vous venez de découvrir le pouvoir et le danger de la pédale : elle enrichit le son,
          mais peut aussi créer de la boue sonore si mal utilisée !
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Deux règles d'or du pédalage</h2>
        <div className="mt-3 space-y-3">
          <p className="font-bold">Règle 1 : La pédale n'est pas un interrupteur</p>
          <p>
            Ne pensez pas "pédale enfoncée" ou "pédale levée". Pensez plutôt à trois états :
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Levée :</strong> Son sec, aucune résonance</li>
            <li><strong>Enfoncée :</strong> Résonance maximale</li>
            <li><strong>Demi-pédale :</strong> Résonance contrôlée (technique avancée)</li>
          </ul>
          <p className="font-bold mt-4">Règle 2 : Changez la pédale, ne l'utilisez pas continuellement</p>
          <p>
            Le secret d'un beau pédalage : savoir QUAND relâcher et réenfoncer la pédale pour
            éviter le mélange de sons incompatibles.
          </p>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Le pédalage syncopé : la technique de base</h2>
        <p>
          La technique la plus importante à maîtriser est le <strong>pédalage syncopé</strong>
          (aussi appelé pédalage après l'attaque). C'est la base d'un pédalage propre.
        </p>
        <p className="mt-3">
          <strong>Principe :</strong> Vous enfoncez la pédale APRÈS avoir joué la note, et vous
          la changez (lever-enfoncer rapidement) AU MOMENT où vous jouez la note suivante.
        </p>
        <p className="mt-3">
          <strong>Séquence :</strong>
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
          <li>Jouez la note (pédale levée)</li>
          <li>Enfoncez la pédale immédiatement après</li>
          <li>La note continue de sonner grâce à la pédale</li>
          <li>Jouez la note suivante EN MÊME TEMPS que vous changez la pédale (lever-enfoncer)</li>
        </ol>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 2 : Pédalage syncopé sur notes seules</h2>
        <p>Pratiquons cette coordination main-pied fondamentale :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main droite sur Do (sans pédale)</li>
          <li>Jouez Do, puis enfoncez la pédale juste après</li>
          <li>Comptez : "Note - Pédale - 2 - 3"</li>
          <li>Sur le temps suivant : jouez Ré ET changez la pédale simultanément</li>
          <li>Répétez : Do (pédale) - Ré (changement) - Mi (changement) - Fa (changement) - Sol (changement)</li>
          <li>Pratiquez très lentement 10 fois jusqu'à coordination parfaite</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Le changement de pédale doit être rapide : lever-enfoncer comme un seul mouvement,
          au moment précis où la touche s'enfonce.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 3 : Pédalage sur accords</h2>
        <p>Le pédalage syncopé est particulièrement important pour les progressions d'accords :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez un accord de Do majeur (Do-Mi-Sol) main droite</li>
          <li>Enfoncez la pédale juste après l'attaque</li>
          <li>L'accord continue de sonner</li>
          <li>Jouez l'accord suivant (Fa majeur : Fa-La-Do) ET changez la pédale simultanément</li>
          <li>Continuez avec Sol majeur (Sol-Si-Ré), puis retour à Do majeur</li>
          <li>Progression : Do (pédale) - Fa (changement) - Sol (changement) - Do (changement)</li>
        </ol>
        <p className="mt-4">
          Si c'est bien fait, vous n'entendrez pas de mélange entre les accords, mais chaque
          accord aura une belle résonance riche.
        </p>
      </ContentBlock>

      <ContentBlock variant="warning">
        <h2>Erreurs courantes à éviter absolument</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>La "soupe" sonore :</strong> Garder la pédale enfoncée trop longtemps, mélangeant
              des notes incompatibles</li>
          <li><strong>Pédale trop tôt :</strong> Enfoncer avant la note (sauf effet voulu), ce qui
              attrape des résonances parasites</li>
          <li><strong>Changement trop lent :</strong> Lever et réenfoncer lentement créent un "trou"
              dans le son</li>
          <li><strong>Pédale systématique :</strong> Utiliser la pédale sur tout crée une bouillie
              sonore</li>
          <li><strong>Pied tendu :</strong> Créer de la tension dans la jambe (restez détendu !)</li>
          <li><strong>Oublier d'écouter :</strong> Ne pas écouter si le mélange sonore est propre</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 4 : Gamme avec pédale</h2>
        <p>Challenge de coordination : pédalage syncopé sur une gamme :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez votre gamme de Do majeur main droite</li>
          <li>Changez la pédale à CHAQUE note (pédalage syncopé)</li>
          <li>Do (pédale) - Ré (changement) - Mi (changement)... jusqu'au Do aigu</li>
          <li>Commencez très lentement (métronome à 60 BPM, une note par temps)</li>
          <li>Écoutez : chaque note doit être pure, sans mélange avec la précédente</li>
          <li>Répétez 5 fois en augmentant progressivement la vitesse</li>
        </ol>
        <p className="mt-4">
          C'est difficile ! Cette coordination main-pied demande de la pratique, mais c'est LA
          technique fondamentale à maîtriser.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Quand utiliser la pédale ?</h2>
        <p>
          La pédale n'est pas toujours nécessaire. Voici un guide pratique :
        </p>
        <div className="mt-3 space-y-3">
          <p><strong>UTILISEZ la pédale pour :</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Lier des notes ou accords que vous ne pouvez pas tenir avec les doigts</li>
            <li>Enrichir le son et créer de la profondeur sonore</li>
            <li>Créer des ambiances (romantiques, mystérieuses, dramatiques)</li>
            <li>Soutenir des passages chantants en legato</li>
            <li>Les basses qui doivent résonner sous une mélodie</li>
          </ul>
          <p className="mt-3"><strong>N'utilisez PAS la pédale pour :</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Les passages staccato (détachés)</li>
            <li>Les passages rapides avec beaucoup de notes différentes</li>
            <li>Compenser un legato de doigts insuffisant</li>
            <li>Les exercices techniques (gammes sans pédale d'abord)</li>
          </ul>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 5 : Mélodie avec accompagnement</h2>
        <p>Application pratique : mélodie à la main droite, basse à la main gauche :</p>
        <div className="mt-3 space-y-2">
          <p><strong>Main gauche :</strong> Do grave (noire)</p>
          <p><strong>Main droite :</strong> Mi-Mi-Fa-Sol (quatre croches)</p>
        </div>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Jouez le Do grave, enfoncez la pédale</li>
          <li>Le Do continue de résonner pendant que vous jouez Mi-Mi-Fa-Sol</li>
          <li>Changez la pédale sur le prochain Do grave</li>
          <li>Répétez : la pédale permet au Do de soutenir toute la mélodie</li>
        </ol>
        <p className="mt-4">
          C'est l'utilisation la plus courante de la pédale : maintenir une basse pendant que
          la mélodie se déploie au-dessus.
        </p>
      </ContentBlock>

      <ContentBlock variant="normal">
        <h2>Exercice 6 : Pédale et articulation</h2>
        <p>Combinons pédale et articulations apprises dans la leçon précédente :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Phrase legato avec pédale :</strong> Do-Ré-Mi-Fa (main droite liée +
              pédale changée à chaque note) = son très lié et riche</li>
          <li><strong>Phrase staccato sans pédale :</strong> Sol-Sol-Sol-Sol (détaché, sec,
              aucune pédale) = son pétillant</li>
          <li>Alternez ces deux phrases pour sentir le contraste</li>
          <li>Répétez 5 fois</li>
        </ol>
        <p className="mt-4">
          La combinaison pédale + articulation décuple vos possibilités expressives !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 7 : Arpège avec pédale</h2>
        <p>
          Les arpèges (accords joués note par note) sont transformés par la pédale :
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>SANS pédale : jouez Do-Mi-Sol-Mi-Do (main droite) - les notes sont isolées</li>
          <li>AVEC pédale : enfoncez la pédale, jouez Do-Mi-Sol-Mi-Do, maintenez la pédale -
              les notes s'accumulent en un accord riche</li>
          <li>Essayez différents arpèges avec la pédale maintenue</li>
          <li>Expérimentez le changement de pédale à différents moments</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          C'est la technique utilisée dans les accompagnements de valses, les nocturnes de Chopin,
          et innombrables autres pièces du répertoire.
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>La notation de la pédale sur les partitions</h2>
        <p>Sur une partition, le pédalage est indiqué de deux façons :</p>
        <div className="mt-3 space-y-3">
          <p><strong>Méthode 1 - Symboles textuels :</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Ped.</strong> = Enfoncer la pédale</li>
            <li><strong>*</strong> = Relever la pédale</li>
          </ul>
          <p className="mt-2"><strong>Méthode 2 - Ligne de pédale :</strong></p>
          <p className="ml-4">Une ligne sous la portée indique la durée du pédalage :</p>
          <ul className="list-disc list-inside ml-4">
            <li>Début de ligne = enfoncer</li>
            <li>Crochet vers le haut = relever</li>
          </ul>
        </div>
        <p className="mt-4 text-sm opacity-80">
          Important : les indications de pédale sont souvent des suggestions. Avec l'expérience,
          vous développerez votre propre jugement de pédalage.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 8 : Progression d'accords expressive</h2>
        <p>Créons une ambiance avec pédale et nuances :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Main gauche : basses Do - La - Fa - Sol (une par mesure)</li>
          <li>Main droite : accords Do majeur - La mineur - Fa majeur - Sol majeur</li>
          <li>Enfoncez la pédale sur chaque basse et maintenez pendant toute la mesure</li>
          <li>Changez la pédale à chaque nouvelle basse</li>
          <li>Jouez piano (doucement) avec un tempo lent</li>
          <li>Écoutez la richesse harmonique créée par la pédale</li>
        </ol>
        <p className="mt-4">
          Vous venez de créer une ambiance digne d'une musique de film, simplement en utilisant
          correctement la pédale !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>La demi-pédale : technique avancée</h2>
        <p>
          Mentionnons brièvement une technique plus avancée : la <strong>demi-pédale</strong>
          ou <strong>pédale partielle</strong>.
        </p>
        <p className="mt-3">
          Au lieu d'enfoncer complètement ou de relever complètement la pédale, vous la maintenez
          à mi-course. Cela permet un contrôle très fin de la résonance.
        </p>
        <p className="mt-3">
          <strong>Ne vous préoccupez pas encore de cette technique.</strong> Maîtrisez d'abord
          le pédalage complet (enfoncer/relever). La demi-pédale viendra naturellement avec
          l'expérience et l'écoute affinée.
        </p>
      </ContentBlock>

      <ContentBlock variant="highlight">
        <h2>Programme de pratique sur 2 semaines</h2>
        <div className="mt-3 space-y-3">
          <p><strong>Semaine 1 : Coordination de base</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jours 1-3 : Pédalage syncopé sur notes seules (exercice 2)</li>
            <li>Jours 4-5 : Pédalage sur accords (exercice 3)</li>
            <li>Jours 6-7 : Gamme avec pédale (exercice 4)</li>
          </ul>
          <p className="mt-3"><strong>Semaine 2 : Application musicale</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jours 1-3 : Mélodie avec basse pédalée (exercice 5)</li>
            <li>Jours 4-5 : Arpèges et accompagnements (exercice 7)</li>
            <li>Jours 6-7 : Pièce simple avec pédale (reprenez une mélodie connue)</li>
          </ul>
          <p className="mt-3 text-sm opacity-80">
            Conseil : Pratiquez TOUJOURS sans pédale d'abord, puis ajoutez-la une fois que
            la pièce est maîtrisée aux doigts.
          </p>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Développer votre oreille de pédale</h2>
        <p>
          Le pédalage est autant une question d'oreille que de technique. Voici comment
          développer votre jugement :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Enregistrez-vous :</strong> Écoutez vos enregistrements pour détecter
              les mélanges sonores indésirables</li>
          <li><strong>Écoutez les maîtres :</strong> Notez comment les grands pianistes
              utilisent la pédale avec parcimonie</li>
          <li><strong>Expérimentez :</strong> Essayez la même pièce avec différents pédalages</li>
          <li><strong>Question clé :</strong> "Est-ce que le son est clair ou boueux ?"</li>
          <li><strong>Principe général :</strong> En cas de doute, utilisez moins de pédale</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>La pédale dans différents styles</h2>
        <p>Chaque style musical a ses conventions de pédalage :</p>
        <div className="mt-3 space-y-2">
          <p><strong>Musique baroque (Bach) :</strong> Peu ou pas de pédale (clarté des voix)</p>
          <p><strong>Classique (Mozart, Haydn) :</strong> Pédale discrète, changements fréquents</p>
          <p><strong>Romantique (Chopin, Liszt) :</strong> Pédale généreuse, ambiances riches</p>
          <p><strong>Impressionniste (Debussy) :</strong> Pédale pour créer des "brouillards" sonores</p>
          <p><strong>Jazz :</strong> Pédale sélective, souvent sur les basses</p>
        </div>
        <p className="mt-4">
          Votre pédalage doit s'adapter au style de la musique que vous jouez.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Les autres pédales (bonus)</h2>
        <p>Brève introduction aux deux autres pédales :</p>
        <div className="mt-3 space-y-3">
          <p><strong>Pédale gauche (una corda) :</strong></p>
          <p className="ml-4">
            Décale légèrement le mécanisme pour frapper moins de cordes, créant un son plus doux
            et intime. Utilisée pour les passages très pianissimo.
          </p>
          <p className="mt-2"><strong>Pédale centrale (sostenuto) :</strong></p>
          <p className="ml-4">
            Maintient seulement les notes enfoncées au moment où on l'active. Peu utilisée,
            sauf dans certaines pièces modernes spécifiques.
          </p>
        </div>
        <p className="mt-4 text-sm opacity-80">
          Pour l'instant, concentrez-vous uniquement sur la pédale droite (sustain). Les autres
          viendront bien plus tard dans votre apprentissage.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Vers une utilisation artistique</h2>
        <p>
          La pédale de sustain est un des outils les plus puissants du pianiste. Bien utilisée,
          elle transforme le piano en un orchestre. Mal utilisée, elle crée une bouillie
          inintelligible.
        </p>
        <p className="mt-3">
          Rappelez-vous : la pédale ne remplace pas une bonne technique de doigts. Apprenez
          toujours vos pièces sans pédale d'abord, puis ajoutez-la comme la touche finale,
          comme un peintre ajoute des glacis subtils sur un tableau déjà abouti.
        </p>
        <p className="mt-3">
          Avec la maîtrise de la pédale, vous êtes maintenant prêt à aborder de véritables
          morceaux du répertoire classique !
        </p>
      </ContentBlock>
    </LessonTemplate>
  )
}
