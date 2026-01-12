import LessonTemplate from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

export default function Niveau3Lecon2() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={2}
      title="Lecture de partition niveau 1"
      description="Apprenez à lire les notes sur la portée musicale et déchiffrez vos premières partitions."
      duration="18 min"
      objectives={[
        "Comprendre la structure de la portée musicale",
        "Identifier les clés de Sol et de Fa",
        "Lire les notes sur les lignes et interlignes",
        "Reconnaître les notes du Do central aux extrémités",
        "Déchiffrer une simple mélodie à vue",
        "Associer les notes écrites aux touches du piano"
      ]}
      previousLesson="/parcours/niveau-3/lecon-1"
      nextLesson="/parcours/niveau-3/lecon-3"
    >
      <ContentBlock variant="highlight">
        <h2>Entrez dans le monde de la lecture musicale</h2>
        <p>
          Jusqu'à présent, vous avez appris le piano principalement par l'imitation et la pratique.
          Maintenant, vous allez acquérir une compétence essentielle : lire la musique comme vous
          lisez un texte. Cette capacité vous ouvrira l'accès à des milliers de morceaux !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>La portée musicale : votre nouvelle carte routière</h2>
        <p>
          La musique s'écrit sur une <strong>portée</strong>, composée de 5 lignes horizontales
          parallèles. Les notes sont placées sur ces lignes ou dans les espaces entre les lignes.
        </p>
        <p className="mt-4">
          <strong>Principe de base :</strong> Plus une note est haute sur la portée, plus elle est
          aiguë au piano. Plus elle est basse, plus elle est grave.
        </p>
        <p className="mt-3 text-sm opacity-80">
          Imaginez la portée comme un escalier musical : chaque ligne et chaque espace représente
          une marche qui monte vers les sons aigus.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Les deux clés : Sol et Fa</h2>
        <p>
          Au piano, nous utilisons deux portées superposées, chacune avec sa clé :
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-bold">Clé de Sol (main droite) :</p>
            <p>Symbole qui ressemble à un "G" stylisé. Elle entoure la ligne du Sol.</p>
            <p className="text-sm opacity-80">Cette clé indique les notes aiguës, jouées par la main droite.</p>
          </div>
          <div>
            <p className="font-bold">Clé de Fa (main gauche) :</p>
            <p>Symbole avec deux points autour de la ligne du Fa.</p>
            <p className="text-sm opacity-80">Cette clé indique les notes graves, jouées par la main gauche.</p>
          </div>
        </div>
        <p className="mt-4">
          Les deux portées sont reliées par une accolade sur la gauche, formant le
          <strong> grand système</strong> ou <strong>grande portée</strong> du piano.
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Le Do central : votre point de repère</h2>
        <p>
          Le <strong>Do central</strong> (aussi appelé Do3 ou Middle C en anglais) est la note
          centrale du piano. C'est votre point de référence le plus important !
        </p>
        <p className="mt-3">
          Sur la partition :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Il se place sur une petite ligne ajoutée entre les deux portées</li>
          <li>Il est pile au milieu du clavier du piano</li>
          <li>C'est souvent le point de départ pour localiser les autres notes</li>
        </ul>
        <p className="mt-4">
          <strong>Astuce :</strong> Trouvez le Do central sur votre clavier (près du milieu, à gauche
          du groupe de deux touches noires), placez votre pouce droit dessus. C'est votre "maison" !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 1 : Lire en clé de Sol</h2>
        <p>Apprenons les notes sur la portée en clé de Sol (main droite) :</p>
        <div className="mt-3 space-y-3">
          <div>
            <p className="font-bold">Sur les lignes (de bas en haut) :</p>
            <p>Mi - Sol - Si - Ré - Fa</p>
            <p className="text-sm opacity-80">Moyen mnémotechnique : "Mi Sol Si Ré Fa fait la gamme"</p>
          </div>
          <div>
            <p className="font-bold">Dans les interlignes (de bas en haut) :</p>
            <p>Fa - La - Do - Mi</p>
            <p className="text-sm opacity-80">Moyen mnémotechnique : "Fa La Do Mi, c'est facile"</p>
          </div>
        </div>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Écrivez ces notes sur un papier avec une portée dessinée</li>
          <li>Placez chaque note à son emplacement (ligne ou interligne)</li>
          <li>Jouez chaque note au piano en les identifiant à voix haute</li>
          <li>Répétez jusqu'à reconnaître instantanément chaque position</li>
        </ol>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 2 : Lire en clé de Fa</h2>
        <p>Maintenant les notes en clé de Fa (main gauche) :</p>
        <div className="mt-3 space-y-3">
          <div>
            <p className="font-bold">Sur les lignes (de bas en haut) :</p>
            <p>Sol - Si - Ré - Fa - La</p>
            <p className="text-sm opacity-80">Moyen mnémotechnique : "Sol Si Ré Fa La, quelle merveille"</p>
          </div>
          <div>
            <p className="font-bold">Dans les interlignes (de bas en haut) :</p>
            <p>La - Do - Mi - Sol</p>
            <p className="text-sm opacity-80">Moyen mnémotechnique : "La Do Mi Sol, c'est le goal"</p>
          </div>
        </div>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Dessinez une portée en clé de Fa sur votre papier</li>
          <li>Placez toutes ces notes à leur position correcte</li>
          <li>Jouez-les au piano avec la main gauche</li>
          <li>Entraînez-vous à les reconnaître rapidement</li>
        </ol>
      </ContentBlock>

      <ContentBlock variant="normal">
        <h2>Exercice 3 : Du Do central vers l'aigu</h2>
        <p>Pratiquons la lecture en partant du Do central et en montant :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Placez votre pouce droit sur le Do central</li>
          <li>Imaginez (ou dessinez) cette séquence en clé de Sol :</li>
          <li className="ml-6">Do (ligne ajoutée) - Ré (sous la portée) - Mi (1ère ligne) - Fa (1er interligne)</li>
          <li className="ml-6">Sol (2ème ligne) - La (2ème interligne) - Si (3ème ligne) - Do (3ème interligne)</li>
          <li>Jouez cette gamme en identifiant chaque note écrite</li>
          <li>Répétez 5 fois en lisant comme si c'était une partition</li>
        </ol>
        <p className="mt-4">
          Vous venez de lire votre première gamme de Do majeur sur partition !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 4 : Du Do central vers le grave</h2>
        <p>Maintenant, descendons en clé de Fa :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Placez votre pouce gauche sur le Do central</li>
          <li>Imaginez cette séquence en clé de Fa (en descendant) :</li>
          <li className="ml-6">Do (ligne ajoutée) - Si (1ère interligne) - La (1ère ligne) - Sol (2ème interligne)</li>
          <li className="ml-6">Fa (2ème ligne) - Mi (3ème interligne) - Ré (3ème ligne) - Do (4ème interligne)</li>
          <li>Jouez cette séquence avec la main gauche</li>
          <li>Répétez en vous concentrant sur la reconnaissance des notes</li>
        </ol>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Techniques de mémorisation efficaces</h2>
        <p>Pour apprendre à lire rapidement, utilisez ces stratégies :</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Points de repère :</strong> Mémorisez d'abord le Do central, puis le Fa et le Sol</li>
          <li><strong>Par intervalle :</strong> Si vous connaissez un Do, la note sur la ligne suivante est un Mi</li>
          <li><strong>Par mouvement :</strong> Ligne-interligne-ligne = 3 notes consécutives (Do-Ré-Mi)</li>
          <li><strong>Lecture quotidienne :</strong> 5 minutes par jour valent mieux qu'une heure par semaine</li>
          <li><strong>Flashcards :</strong> Créez des cartes avec des notes à identifier</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 5 : Déchiffrage de mélodie simple</h2>
        <p>Essayons de lire une très simple mélodie (imaginée ou que vous dessinez) :</p>
        <p className="mt-3 font-bold">En clé de Sol :</p>
        <p className="ml-4">Do - Do - Sol - Sol - La - La - Sol</p>
        <p className="ml-4 text-sm opacity-80">(Début de "Ah vous dirais-je maman" / "Twinkle Twinkle")</p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Dessinez cette mélodie sur une portée en clé de Sol</li>
          <li>Identifiez la position de chaque note</li>
          <li>Jouez-la lentement en lisant la partition</li>
          <li>Répétez jusqu'à pouvoir la jouer sans hésitation</li>
          <li>Essayez d'autres mélodies simples que vous connaissez</li>
        </ol>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 6 : Lecture à deux mains</h2>
        <p>Le vrai défi : lire les deux portées en même temps !</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Commencez avec les deux mains sur le Do central</li>
          <li>Main droite : montez Do-Ré-Mi (en lisant la clé de Sol)</li>
          <li>Main gauche : descendez Do-Si-La (en lisant la clé de Fa)</li>
          <li>Jouez chaque main séparément en lisant</li>
          <li>Essayez TRÈS lentement de jouer les deux ensemble</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Ne vous découragez pas si c'est difficile ! Lire deux portées simultanément demande
          beaucoup de pratique. Commencez par bien maîtriser chaque main séparément.
        </p>
      </ContentBlock>

      <ContentBlock variant="warning">
        <h2>Pièges courants de la lecture</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Confondre les clés de Sol et de Fa (vérifiez toujours la clé !)</li>
          <li>Oublier que chaque ligne ET chaque interligne est une note différente</li>
          <li>Vouloir aller trop vite (la vitesse vient avec la pratique)</li>
          <li>Ne pas utiliser de points de repère (Do central, Sol, Fa)</li>
          <li>Lire note par note sans voir les mouvements (montée, descente, saut)</li>
          <li>Négliger la pratique quotidienne de lecture</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 7 : Les lignes supplémentaires</h2>
        <p>
          Pour les notes très aiguës ou très graves, on ajoute de petites lignes au-dessus ou
          en-dessous de la portée : les <strong>lignes supplémentaires</strong>.
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Le Do central utilise une ligne supplémentaire entre les deux portées</li>
          <li>Au-dessus de la clé de Sol : La-Do-Mi... (chaque ligne supplémentaire)</li>
          <li>En-dessous de la clé de Fa : Mi-Do-La... (chaque ligne supplémentaire)</li>
          <li>Entraînez-vous à lire quelques notes avec lignes supplémentaires</li>
          <li>Ne vous inquiétez pas, cela viendra progressivement avec la pratique</li>
        </ol>
      </ContentBlock>

      <ContentBlock variant="highlight">
        <h2>Programme d'entraînement à la lecture</h2>
        <p>Pour développer une lecture fluide, pratiquez ainsi pendant 2 semaines :</p>
        <div className="mt-3 space-y-3">
          <p><strong>Semaine 1 - Reconnaissance des notes :</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jour 1-2 : Clé de Sol uniquement, toutes les notes du Do central au Do aigu</li>
            <li>Jour 3-4 : Clé de Fa uniquement, toutes les notes du Do central au Do grave</li>
            <li>Jour 5-7 : Alternance entre les deux clés, reconnaissance rapide</li>
          </ul>
          <p className="mt-3"><strong>Semaine 2 - Lecture de mélodies :</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jour 1-3 : Mélodies simples en clé de Sol (cherchez en ligne ou dans un livre)</li>
            <li>Jour 4-5 : Mélodies simples en clé de Fa</li>
            <li>Jour 6-7 : Premières pièces avec les deux mains (très simples)</li>
          </ul>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Ressources pour progresser</h2>
        <p>
          La lecture de partition est une compétence qui se développe par la pratique régulière.
          Quelques conseils pour continuer :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Utilisez des applications de lecture de notes (Flashcards musicales)</li>
          <li>Procurez-vous un livre de débutant avec partitions simples</li>
          <li>Lisez 5 minutes par jour, même sans jouer au piano</li>
          <li>Déchiffrez de nouvelles mélodies simples chaque semaine</li>
          <li>Soyez patient : certains mettent des mois à lire couramment</li>
        </ul>
        <p className="mt-4">
          Rappelez-vous : vous avez mis des années à lire couramment le français. La lecture
          musicale demande aussi du temps, mais chaque jour de pratique vous rapproche du but !
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>Prochaine étape</h2>
        <p>
          Maintenant que vous savez lire les notes de base, continuez à pratiquer la lecture en
          parallèle des autres leçons. Dans la leçon suivante, nous enrichirons votre vocabulaire
          d'accords avec les accords de 7ème et les inversions.
        </p>
        <p className="mt-3">
          La combinaison de la lecture de notes et de la compréhension des accords vous donnera
          une vision complète de la musique écrite !
        </p>
      </ContentBlock>
    </LessonTemplate>
  )
}
