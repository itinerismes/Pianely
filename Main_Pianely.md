# 🎹 Main_Pianely — État du projet & feuille de route

> Dernière mise à jour : 8 juillet 2026

Pianely est une application d'apprentissage du piano pour **grands débutants** (sans solfège au départ), pensée pour être utilisée avec un **piano numérique branché en USB** (Yamaha P-145).

---

## ✅ Ce qui a été fait

### Infrastructure
- **Base de données Supabase recréée** de zéro (projet `tberafusnxjhywetfdpx`, eu-north-1) après la perte de l'ancien projet : 11 tables, RLS, triggers, fonctions sécurisées, buckets Storage (`sheet-music`, `audio-uploads`)
- **42 leçons** et **8 morceaux débutants** seedés en base
- Variables d'environnement mises à jour (local + Vercel), clés en dur retirées du code
- Déploiement continu : push sur `main` → build Vercel automatique

### Design « Scène » (refonte totale)
Identité inspirée du cockpit dark-glass de boardyoplan, transposée au piano :
- Canvas **ébène laqué** avec projecteur **laiton** + glows velours + grain anti-banding
- Panneaux **glassmorphism** (blur, bordures en dégradé, halo laiton au survol)
- Typographie **Fraunces** (titres, affiche de concert) + **Manrope** (texte)
- Signature **« octave »** : toutes les progressions se lisent comme des touches de piano qui s'illuminent (`OctaveProgress`)
- Logomark : carré laqué laiton contenant une octave stylisée
- Tous les écrans refondus : landing, auth, dashboard, parcours, 42 leçons, morceaux, progression, achievements, settings

### Web MIDI — jouer sur un vrai piano
- **Moteur Web MIDI** (`lib/midi/midiEngine.ts` + `hooks/useMidiInput.ts`) : détection du clavier USB, hot-plug, reconnexion silencieuse
- **Indicateur de connexion** dans le header (« Connecter mon clavier »)
- **Piano virtuel synchronisé** : les touches pressées sur le vrai clavier s'illuminent en vert partout dans l'app
- **Mode Practice « Rocksmith »** sur chaque morceau : les notes tombent, la lecture **se fige sur chaque note jusqu'à ce qu'elle soit jouée** sur le clavier ; jouées en rythme, elles ne bloquent jamais. Précision, streak, vitesse 40-100 %, sessions enregistrées
- **Mode mains séparées** : tu joues une main, Pianely joue l'autre (séparation à Do4)

### Pédagogie débutant
- **« Ta séance du jour »** sur le dashboard : échauffement → leçon → morceau, étapes cochées automatiquement
- **Échauffement guidé** (`/echauffement`) : exercices de doigts (Do→Sol) validés note à note sur le clavier, sans pénalité
- **« Repérage »** : étape guidée pour trouver le **Do du milieu** sur un clavier 88 touches — joue n'importe quelle touche, l'app indique la direction et la distance
- **Leçons validées en jouant** : le bouton « Marquer comme terminée » ne se débloque qu'après avoir réellement joué les exercices
- **Solfège en douceur** : noms français (Do/Ré/Mi) affichés sur les touches et les consignes, notation internationale en secondaire
- **8 morceaux débutants** à 60 BPM (Au clair de la lune, Ode à la joie, Frère Jacques, Berceuse de Brahms…) générés en MIDI, niveaux 1-2
- **Progression 100 % dynamique** : complétion persistée en base (`user_progress`, `practice_logs`, achievements), déverrouillage progressif des leçons et des niveaux, dashboard calculant la vraie prochaine leçon

---

## 🔌 Pré-requis matériel & logiciel

| Élément | Détail |
|---|---|
| **Piano numérique** | Yamaha P-145 (ou tout clavier avec port USB TO HOST / MIDI USB) |
| **Câble** | **USB A → USB B** (« câble d'imprimante ») : prise **USB B carrée** côté piano (port *USB TO HOST* à l'arrière), prise **USB A** côté PC portable. Si le PC n'a que de l'USB-C : câble **USB-C → USB-B**. Non fourni avec le piano, ~5-10 € |
| **Branchement** | Piano allumé → câble USB entre le port *USB TO HOST* du P-145 et le PC portable → ouvrir Pianely → cliquer « Connecter mon clavier » dans le header → autoriser l'accès MIDI |
| **Navigateur** | **Chrome ou Edge** (Web MIDI non supporté par Firefox/Safari) |
| **Pilote** | Aucun : le P-145 est *class compliant*, Windows le reconnaît automatiquement |
| **Casque** | Prise **PHONES** (jack 6,35 mm) à l'arrière du P-145 : brancher un casque coupe automatiquement les haut-parleurs (adaptateur 3,5→6,35 mm si besoin) |
| **Tout dans le casque (setup « pro »)** | Le P-145 est une interface audio USB : 1) installer le **Yamaha Steinberg USB Driver** (gratuit, site Yamaha → Support → Downloads) ; 2) brancher le piano en USB, l'allumer ; 3) Windows → Paramètres → Système → Son → **Sortie = Yamaha P-145** (ou juste pour Chrome via le mélangeur de volume) ; 4) casque dans la prise PHONES du piano → ton jeu **et** les sons de Pianely (métronome, mode Écoute, mains séparées) dans le même casque |
| **Astuce** | Pour entendre le son du piano ET l'app en même temps, garde le volume du P-145 pour ton jeu — l'app ne rejoue pas tes notes (pas de double son) |

---

## 🚀 Nouvelles features possibles

### Court terme (pédagogie)
- [ ] **Métronome intégré** : visuel (pulsation laiton) + audio, réglable, disponible dans les leçons et le mode Practice
- [ ] **Vidéos de posture** : intégrer des vidéos type Pianote (YouTube embeds) dans les premières leçons — position des mains, du poignet, assise
- [ ] **Échauffements progressifs** : nouvelles séquences qui suivent le niveau (gamme de Do complète, main gauche, arpèges) au lieu des 3 mêmes exercices
- [ ] **Solfège qui s'estompe** : masquer progressivement les noms de notes (touches puis consignes) quand la précision dépasse un seuil — l'objectif est de lire sans étiquettes
- [ ] **Répétition espacée** : re-proposer automatiquement les leçons/morceaux faiblement réussis dans la séance du jour

### Moyen terme (moteur de jeu)
- [ ] **Timing précis dans Practice** : noter la justesse rythmique (parfait/bien/en retard) et pas seulement la bonne note, comme Rocksmith
- [ ] **Mode boucle** : sélectionner un passage difficile (mesures X à Y) et le travailler en boucle avec accélération progressive (60 % → 100 %)
- [ ] **Replay de session** : réécouter ce qu'on vient de jouer (l'app enregistre déjà les événements MIDI)
- [ ] **Vélocité / nuances** : exploiter la force de frappe (le P-145 la transmet) pour enseigner piano/forte
- [ ] **Détection d'accords en jeu libre** : afficher le nom de l'accord joué (Do majeur, La mineur…) en temps réel

### Long terme (contenu, social & IA)
- [ ] **Coach IA conversationnel** (tendance 2027 : le site devient un agent) : poser une question en langage naturel pendant une leçon (« pourquoi mon pouce passe sous la main ? », « c'est quoi une octave ? ») et obtenir une réponse adaptée à sa progression ; à terme, le coach compose la séance du jour selon les points faibles détectés (précision par touche, rythme)
- [ ] **Import de MIDI perso amélioré** : glisser-déposer un fichier MIDI → jouable en Practice immédiatement
- [ ] **Bibliothèque enrichie** : plus de morceaux par niveau, filtres par envie (film, jeux vidéo, classique, variété)
- [ ] **Statistiques avancées** : précision par touche/doigt, heatmap du clavier, courbe de progression hebdo
- [ ] **Objectifs personnalisés** : « jouer Ode à la joie à 100 % en deux mains d'ici 2 semaines » avec plan généré
- [ ] **Mode duo/partage** : partager un enregistrement de sa performance

---

## 🗂️ Repères techniques

- **Partition PDF → MIDI (local)** : `./scripts/pdf2midi.sh partition.pdf` → OCR Audiveris + music21, sortie dans `~/partitions-midi/`, puis import via « Ajouter un morceau ». Remplace définitivement la dédibox. Testé sur Experience (Einaudi, 10 pages → 1590 notes)
- **Schéma DB** : `supabase-schema.sql` + migrations `003`, `004` (la `002` est une variante abandonnée — ne jamais l'appliquer)
- **Design system** : utilities dans `app/globals.css` (`.panel`, `.btn-accent`, `.badge-brass`, `.octave-key`…)
- **MIDI** : `lib/midi/midiEngine.ts` (singleton) ; le composant `Piano` relaie le MIDI vers `onKeyPress` par défaut — passer `midiForwardsCallbacks={false}` si le parent écoute déjà via `useMidiNotes` (évite le double comptage)
- **Génération des morceaux** : `node scripts/generate-beginner-midis.mjs` (60 BPM, sortie dans `public/midi/`)
- **Connexion DB directe** : pooler transaction port **6543** uniquement (`aws-0-eu-north-1.pooler.supabase.com`)
