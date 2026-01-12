import LessonTemplate from '@/components/lessons/LessonTemplate'
import type { ContentBlock } from '@/types/lesson'

export default function Niveau3Lecon7() {
  return (
    <LessonTemplate
      levelId={3}
      lessonNumber={7}
      title="L'expression musicale"
      description="Apprenez à utiliser les nuances dynamiques et les variations de tempo pour donner vie et émotion à votre jeu."
      duration="16 min"
      objectives={[
        "Comprendre et utiliser les nuances dynamiques (pp à ff)",
        "Maîtriser le crescendo et decrescendo",
        "Découvrir le rubato et les variations de tempo",
        "Utiliser les accents et le phrasé musical",
        "Développer votre sensibilité expressive",
        "Raconter une histoire musicale"
      ]}
      previousLesson="/parcours/niveau-3/lecon-6"
      nextLesson="/parcours/niveau-3/lecon-8"
    >
      <ContentBlock variant="highlight">
        <h2>De la technique à l'art</h2>
        <p>
          Vous savez maintenant jouer les notes, utiliser la pédale, maîtriser différentes
          articulations. Mais ce qui transforme un pianiste en artiste, c'est l'expression :
          la capacité à faire ressentir des émotions, à raconter une histoire sans mots,
          à toucher le cœur de l'auditeur. Bienvenue dans la dimension artistique du piano !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Les nuances dynamiques : la palette des volumes</h2>
        <p>
          En musique, le volume sonore ne reste jamais constant. Les <strong>nuances</strong>
          (ou <strong>dynamiques</strong>) sont les variations d'intensité qui donnent relief
          et émotion à votre jeu.
        </p>
        <p className="mt-4">
          <strong>Les principales nuances (du plus doux au plus fort) :</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mt-3 ml-4">
          <li><strong>pp (pianissimo) :</strong> Très doux, presque un murmure</li>
          <li><strong>p (piano) :</strong> Doux, intime</li>
          <li><strong>mp (mezzo-piano) :</strong> Moyennement doux</li>
          <li><strong>mf (mezzo-forte) :</strong> Moyennement fort</li>
          <li><strong>f (forte) :</strong> Fort, affirmé</li>
          <li><strong>ff (fortissimo) :</strong> Très fort, puissant</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 1 : Explorer la gamme des volumes</h2>
        <p>Développons votre contrôle dynamique :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez un accord de Do majeur (Do-Mi-Sol) en pianissimo (pp) - le plus doux possible
              tout en gardant un son clair</li>
          <li>Rejouez le même accord en piano (p) - un peu plus présent</li>
          <li>Puis en mezzo-forte (mf) - volume conversationnel</li>
          <li>Puis en forte (f) - affirmé, puissant</li>
          <li>Enfin en fortissimo (ff) - toute votre force (mais sans écraser !)</li>
          <li>Redescendez : ff → f → mf → p → pp</li>
          <li>Répétez 5 fois cette échelle de nuances</li>
        </ol>
        <p className="mt-4 text-sm opacity-80">
          Astuce : le contrôle ne vient pas de la force musculaire, mais de la vitesse d'attaque
          et du poids du bras. Restez toujours détendu.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Le crescendo et le decrescendo</h2>
        <p>
          Plus important que les nuances statiques, ce sont les <strong>transitions</strong>
          entre les nuances qui créent l'émotion.
        </p>
        <div className="mt-4 space-y-3">
          <p><strong>Crescendo (cresc. ou &lt;) :</strong></p>
          <p className="ml-4">
            Augmentation progressive du volume. Symbole : &lt; ou "cresc."
            <br />
            <span className="text-sm opacity-80">Effet : tension montante, excitation, anticipation</span>
          </p>
          <p><strong>Decrescendo ou Diminuendo (decresc. ou &gt;) :</strong></p>
          <p className="ml-4">
            Diminution progressive du volume. Symbole : &gt; ou "dim."
            <br />
            <span className="text-sm opacity-80">Effet : apaisement, distance, disparition</span>
          </p>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 2 : Maîtriser crescendo et decrescendo</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez une gamme de Do majeur en commençant pp (très doux)</li>
          <li>Augmentez progressivement le volume à chaque note</li>
          <li>Atteignez ff (très fort) sur le Do aigu</li>
          <li>Redescendez la gamme en diminuant : ff → pp</li>
          <li>L'augmentation et la diminution doivent être GRADUELLES, pas par paliers</li>
          <li>Imaginez un dimmer (variateur de lumière) qui monte et descend</li>
          <li>Répétez 5 fois en cherchant une transition parfaitement lisse</li>
        </ol>
        <p className="mt-4">
          C'est plus difficile qu'il n'y paraît ! Le contrôle du crescendo et decrescendo est
          une des marques d'un pianiste mature.
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>La règle du contraste</h2>
        <p>
          Principe fondamental de l'expression musicale : <strong>le contraste crée l'intérêt</strong>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Une phrase forte a plus d'impact après une phrase douce</li>
          <li>Un passage rapide est plus excitant après un passage lent</li>
          <li>Le silence après la musique crée une résonance émotionnelle</li>
          <li>La variété maintient l'attention de l'auditeur</li>
        </ul>
        <p className="mt-4">
          Évitez de jouer toute une pièce au même volume - c'est comme parler en monotone.
          Variez, contrastez, créez des reliefs !
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Le phrasé musical : respirer la musique</h2>
        <p>
          Le <strong>phrasé</strong> est l'art de grouper les notes en phrases musicales cohérentes,
          comme on groupe les mots en phrases dans un discours.
        </p>
        <p className="mt-3">
          <strong>Technique du phrasé :</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Chaque phrase a un début, un sommet (point culminant), et une fin</li>
          <li>Généralement : crescendo vers le sommet, diminuendo vers la fin</li>
          <li>Légère respiration (mini-silence) entre les phrases</li>
          <li>La dernière note d'une phrase est souvent plus douce</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 3 : Créer des phrases expressives</h2>
        <p>Travaillons une phrase musicale simple :</p>
        <div className="mt-3">
          <p>Phrase : Do - Ré - Mi - Fa - Sol - Fa - Mi - Ré - Do</p>
        </div>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Identifiez le sommet de la phrase : Sol (note centrale, la plus haute)</li>
          <li>Jouez Do-Ré-Mi-Fa en crescendo (montée vers le sommet)</li>
          <li>Sol est le point culminant : jouez-le mf ou f</li>
          <li>Fa-Mi-Ré-Do en decrescendo (descente, apaisement)</li>
          <li>Le Do final doit être doux, comme une résolution</li>
          <li>Ajoutez une mini-pause après le Do final (respiration)</li>
          <li>Répétez 10 fois en exagérant le phrasé</li>
        </ol>
        <p className="mt-4">
          Vous venez de créer une phrase musicale vivante ! C'est ce phrasé qui rend la musique
          humaine et touchante.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Les accents : mettre en valeur</h2>
        <p>
          Un <strong>accent</strong> (symbole : &gt; au-dessus d'une note) indique qu'une note
          doit être jouée avec plus d'intensité que ses voisines.
        </p>
        <p className="mt-3">
          <strong>Types d'accents :</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Accent rythmique :</strong> Met en valeur la structure rythmique</li>
          <li><strong>Accent expressif :</strong> Souligne une note importante émotionnellement</li>
          <li><strong>Sforzando (sf ou sfz) :</strong> Accent soudain et fort</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 4 : Jouer avec des accents</h2>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Jouez la gamme de Do : Do-Ré-Mi-Fa-Sol-Fa-Mi-Ré-Do</li>
          <li>Version 1 : Accentuez chaque première note (Do, puis Sol, puis Do final)</li>
          <li>Version 2 : Accentuez toutes les notes montantes (Do-Ré-Mi-Fa-Sol accentués)</li>
          <li>Version 3 : Accentuez aléatoirement 3 notes de votre choix</li>
          <li>Comparez les trois versions : comment l'accent change-t-il la perception ?</li>
        </ol>
        <p className="mt-4">
          Les accents guident l'oreille de l'auditeur et créent de l'intérêt rythmique et
          mélodique.
        </p>
      </ContentBlock>

      <ContentBlock variant="normal">
        <h2>Le tempo et ses variations</h2>
        <p>
          Le <strong>tempo</strong> (vitesse de la musique) n'est pas toujours rigide.
          Les variations de tempo sont un outil expressif puissant.
        </p>
        <div className="mt-4 space-y-3">
          <p><strong>Termes de tempo courants :</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Largo :</strong> Très lent, solennel</li>
            <li><strong>Adagio :</strong> Lent et paisible</li>
            <li><strong>Andante :</strong> Allure de marche</li>
            <li><strong>Moderato :</strong> Modéré</li>
            <li><strong>Allegro :</strong> Rapide et joyeux</li>
            <li><strong>Presto :</strong> Très rapide</li>
          </ul>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Les variations expressives du tempo</h2>
        <div className="mt-3 space-y-3">
          <p><strong>Ritardando (rit.) :</strong> Ralentir progressivement</p>
          <p className="ml-4 text-sm opacity-80">
            Souvent utilisé en fin de phrase ou de pièce pour conclure
          </p>

          <p><strong>Accelerando (accel.) :</strong> Accélérer progressivement</p>
          <p className="ml-4 text-sm opacity-80">
            Crée de l'excitation, de l'anticipation
          </p>

          <p><strong>Rubato :</strong> "Voler" du temps - étirer certaines notes, hâter d'autres</p>
          <p className="ml-4 text-sm opacity-80">
            Très utilisé dans la musique romantique (Chopin), donne une impression de spontanéité
          </p>

          <p><strong>Fermata (𝄐) :</strong> Prolonger une note au-delà de sa valeur</p>
          <p className="ml-4 text-sm opacity-80">
            Moment de suspension dramatique
          </p>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 5 : Expérimenter avec le tempo</h2>
        <p>Reprenons la phrase Do-Ré-Mi-Fa-Sol-Fa-Mi-Ré-Do :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Version A Tempo :</strong> Jouez à tempo strict, métronome à 80 BPM</li>
          <li><strong>Version Ritardando :</strong> Ralentissez progressivement du début à la fin</li>
          <li><strong>Version Accelerando :</strong> Accélérez du début à la fin</li>
          <li><strong>Version Rubato :</strong> Étirez les notes importantes (Do, Sol), hâtez les autres</li>
          <li><strong>Version Fermata :</strong> Tenez le Sol (sommet) 2-3 fois plus longtemps</li>
        </ol>
        <p className="mt-4">
          Sentez-vous comment chaque variation de tempo change l'émotion de la même phrase ?
        </p>
      </ContentBlock>

      <ContentBlock variant="warning">
        <h2>Pièges expressifs à éviter</h2>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Sur-expression :</strong> Trop exagérer les effets devient caricatural</li>
          <li><strong>Rubato anarchique :</strong> Le rubato doit rester musical, pas chaotique</li>
          <li><strong>Ignorer la partition :</strong> Respectez les indications du compositeur d'abord</li>
          <li><strong>Volume extrême :</strong> Même forte ne signifie pas "marteler" les touches</li>
          <li><strong>Monotonie :</strong> Varier systématiquement devient aussi monotone que ne pas varier</li>
          <li><strong>Changements brusques :</strong> Les transitions doivent être organiques</li>
        </ul>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 6 : Interpréter "Ode à la joie"</h2>
        <p>
          Reprenons "Ode à la joie" apprise à la leçon 6, mais enrichissons-la avec tout ce
          que vous venez d'apprendre :
        </p>
        <div className="mt-3 space-y-2">
          <p><strong>Phrase 1 :</strong> Mi-Mi-Fa-Sol</p>
          <p className="ml-4">→ Commencez mf, crescendo vers le Sol</p>

          <p><strong>Phrase 2 :</strong> Sol-Fa-Mi-Ré</p>
          <p className="ml-4">→ Decrescendo vers le Ré</p>

          <p><strong>Phrase 3 :</strong> Do-Do-Ré-Mi</p>
          <p className="ml-4">→ Piano, crescendo vers le Mi</p>

          <p><strong>Phrase 4 :</strong> Mi-Ré-Ré</p>
          <p className="ml-4">→ Le premier Ré fort, le deuxième doux (fin de phrase), ritardando</p>
        </div>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Travaillez chaque phrase séparément avec ces nuances</li>
          <li>Assemblez le tout en une interprétation cohérente</li>
          <li>Ajoutez des respirations (mini-pauses) entre les phrases</li>
          <li>Jouez comme si vous racontiez une histoire de joie et d'espoir</li>
        </ol>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 7 : Contraste dramatique</h2>
        <p>Créons une miniature dramatique avec contrastes extrêmes :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li><strong>Section A (mystérieuse) :</strong> Do-Si-La-Sol en pp, lentement, staccato léger</li>
          <li>Pause de 2 secondes (silence expressif)</li>
          <li><strong>Section B (dramatique) :</strong> Do grave ff, accord de Do majeur sforzando</li>
          <li>Pause de 2 secondes</li>
          <li><strong>Section C (apaisement) :</strong> Do-Mi-Sol-Do en pp, ritardando, legato</li>
          <li>Répétez cette séquence A-B-C comme une petite histoire</li>
        </ol>
        <p className="mt-4">
          Vous venez de composer et d'interpréter une mini-œuvre avec structure dramatique !
        </p>
      </ContentBlock>

      <ContentBlock variant="tip">
        <h2>L'expression vient de l'intérieur</h2>
        <p>
          Les indications techniques (crescendo, ritardando, etc.) ne sont que des outils.
          L'expression vraie vient de votre ressenti émotionnel.
        </p>
        <p className="mt-3">
          <strong>Questions à vous poser avant de jouer :</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Quelle émotion cette musique évoque-t-elle ? (joie, tristesse, nostalgie...)</li>
          <li>Quelle histoire raconte-t-elle ?</li>
          <li>Si c'était des paroles, que diraient-elles ?</li>
          <li>Qu'est-ce que je veux faire ressentir à l'auditeur ?</li>
        </ul>
        <p className="mt-4">
          Laissez vos émotions guider votre interprétation. La technique est au service de
          l'expression, jamais l'inverse.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Exercice 8 : Improvisation expressive</h2>
        <p>Libérez votre créativité expressive :</p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>Choisissez une émotion : joie, tristesse, colère, sérénité</li>
          <li>Improvisez une courte mélodie (5-10 notes) qui exprime cette émotion</li>
          <li>Utilisez TOUS les outils expressifs : nuances, accents, tempo, articulation, pédale</li>
          <li>Rejouez la même mélodie avec une émotion opposée</li>
          <li>Comparez : comment les choix expressifs changent-ils totalement le message ?</li>
        </ol>
        <p className="mt-4">
          Cette improvisation développe votre intuition musicale et votre palette expressive.
        </p>
      </ContentBlock>

      <ContentBlock>
        <h2>Écoute analytique : apprendre des grands</h2>
        <p>
          Pour développer votre sens de l'expression, écoutez activement les grands interprètes :
        </p>
        <div className="mt-3 space-y-2">
          <p><strong>Exercice d'écoute :</strong></p>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>Choisissez une pièce que vous apprenez</li>
            <li>Écoutez 3 interprétations différentes par 3 pianistes</li>
            <li>Notez les différences : tempi, nuances, phrasé, rubato</li>
            <li>Quelle version préférez-vous ? Pourquoi ?</li>
            <li>Que pouvez-vous intégrer dans votre propre interprétation ?</li>
          </ol>
        </div>
        <p className="mt-4 text-sm opacity-80">
          Chaque grand pianiste a sa voix unique. Inspirez-vous d'eux sans les copier servilement -
          trouvez VOTRE voix.
        </p>
      </ContentBlock>

      <ContentBlock variant="highlight">
        <h2>Plan de développement expressif (2 semaines)</h2>
        <div className="mt-3 space-y-3">
          <p><strong>Semaine 1 : Maîtriser les outils</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jours 1-2 : Exercices de nuances (pp à ff)</li>
            <li>Jours 3-4 : Crescendo et decrescendo</li>
            <li>Jours 5-6 : Phrasé et accents</li>
            <li>Jour 7 : Variations de tempo</li>
          </ul>
          <p className="mt-3"><strong>Semaine 2 : Application musicale</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Jours 1-3 : Réinterpréter vos pièces apprises avec expression</li>
            <li>Jours 4-5 : Improvisation expressive libre</li>
            <li>Jours 6-7 : Préparer une interprétation aboutie d'une pièce</li>
          </ul>
          <p className="mt-3 text-sm opacity-80">
            Objectif : passer du "je joue les notes" à "je fais de la musique"
          </p>
        </div>
      </ContentBlock>

      <ContentBlock>
        <h2>L'expression : votre signature musicale</h2>
        <p>
          La maîtrise technique vous donne les moyens. L'expression vous donne la voix. Deux
          pianistes jouant exactement les mêmes notes avec la même technique sonneront différemment
          si leur approche expressive diffère.
        </p>
        <p className="mt-3">
          C'est cette dimension personnelle qui fait de la musique un art et non une simple
          reproduction mécanique. Votre sensibilité, votre vécu, vos émotions uniques colorent
          chaque note que vous jouez.
        </p>
        <p className="mt-3">
          Dans la prochaine et dernière leçon de ce niveau, vous allez mettre en pratique
          TOUTES les compétences acquises en apprenant votre premier morceau complet de bout
          en bout. Vous êtes prêt !
        </p>
      </ContentBlock>
    </LessonTemplate>
  )
}
