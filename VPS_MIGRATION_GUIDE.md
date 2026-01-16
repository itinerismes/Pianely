# 🚀 Guide de Migration vers VPS

**À utiliser quand tu es prêt à passer en production avec VPS**

---

## Prérequis

- ✅ App testée et validée en local
- ✅ Compte Hetzner/Contabo/DigitalOcean créé
- ✅ Nom de domaine (optionnel mais recommandé)
- ✅ Clés Supabase production prêtes
- ✅ Bucket `sheet-music` créé dans Supabase Storage

---

## Étape 1 : Créer le VPS

### Option A : Hetzner (Recommandé - €8.50/mois)

```
1. Vas sur https://www.hetzner.com/cloud
2. Crée un compte
3. Crée un projet "Pianely"
4. "Add Server"
   - Location : Nuremberg (Allemagne) ou Falkenstein
   - Image : Ubuntu 24.04
   - Type : CPX21 (3 vCPU, 4GB RAM)
   - Volume : Non
   - SSH Key : Ajoute ta clé publique
   - Name : pianely-prod
5. Crée le serveur (2 minutes)
6. Note l'IP : XXX.XXX.XXX.XXX
```

### Option B : Contabo (Budget - €6.99/mois)

```
1. https://contabo.com/en/vps/
2. VPS S : 4 vCPU, 8GB RAM
3. Ubuntu 24.04
4. Note l'IP reçue par email
```

---

## Étape 2 : Connexion SSH

```bash
# Depuis ton terminal local
ssh root@XXX.XXX.XXX.XXX

# Première connexion : accepte la fingerprint
```

---

## Étape 3 : Installation des Dépendances Système

```bash
# Mise à jour du système
apt update && apt upgrade -y

# Installer les outils de base
apt install -y curl wget git unzip zip build-essential

# Installer Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Vérifier
node -v  # v20.x.x
npm -v   # 10.x.x
```

---

## Étape 4 : Installation Java 25

```bash
# Ajouter le PPA pour Java 25
apt install -y openjdk-25-jre

# Ou si non disponible, installer manuellement
# wget https://download.java.net/java/GA/jdk25/...
# tar -xzf openjdk-25_linux-x64_bin.tar.gz
# mv jdk-25 /opt/
# export JAVA_HOME=/opt/jdk-25
# export PATH=$JAVA_HOME/bin:$PATH

# Vérifier
java -version  # openjdk version "25.x.x"
```

---

## Étape 5 : Installation Python et Dépendances OCR

```bash
# Installer Python 3.11+
apt install -y python3 python3-pip python3-venv

# Installer Tesseract OCR
apt install -y tesseract-ocr tesseract-ocr-eng tesseract-ocr-fra libtesseract-dev libleptonica-dev

# Télécharger les fichiers traineddata LEGACY (obligatoire pour Audiveris)
cd /usr/share/tesseract-ocr/5/tessdata/
wget https://github.com/tesseract-ocr/tessdata/raw/main/eng.traineddata -O eng.traineddata
wget https://github.com/tesseract-ocr/tessdata/raw/main/fra.traineddata -O fra.traineddata

# Vérifier
python3 --version  # Python 3.11+
tesseract --version  # tesseract 5.x.x
```

---

## Étape 6 : Cloner et Configurer l'Application

```bash
# Créer le dossier application
mkdir -p /var/www
cd /var/www

# Cloner le repo
git clone https://github.com/ton-username/pianely.git
cd pianely

# Installer les dépendances Node.js
npm install

# Créer le fichier .env
cat > .env.local << 'EOF'
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
EOF

# Éditer avec tes vraies clés
nano .env.local
```

---

## Étape 7 : Installation du Service OCR (Audiveris 5.6.2)

```bash
cd /var/www/pianely/services/ocr

# Créer l'environnement Python
python3 -m venv venv
source venv/bin/activate

# Installer les dépendances Python
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt

# Télécharger Audiveris 5.6.2
mkdir -p audiveris
cd audiveris

# Télécharger le package .deb
wget "https://github.com/Audiveris/audiveris/releases/download/5.6.2/Audiveris-5.6.2-ubuntu22.04-x86_64.deb" -O audiveris.deb

# Extraire le contenu
ar x audiveris.deb
tar -xf data.tar.zst

# Copier les fichiers nécessaires
cp -r opt/audiveris/lib/app/* .

# Extraire le dossier res/ du JAR
unzip -o audiveris.jar "res/*"

# Nettoyer
rm -rf opt usr audiveris.deb control.tar.* data.tar.* debian-binary

# Créer le script de lancement
cat > run-audiveris.sh << 'EOF'
#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Configure Tesseract data path
export TESSDATA_PREFIX="/usr/share/tesseract-ocr/5/tessdata"

# Run Audiveris with all JARs in classpath
java -cp ".:*" org.audiveris.omr.Main "$@"
EOF

chmod +x run-audiveris.sh

# Tester Audiveris
./run-audiveris.sh -help
# Devrait afficher "Audiveris: 5.6.2:xxx"

cd ..
deactivate
```

---

## Étape 8 : Installation du Service Transcription (Basic Pitch)

```bash
cd /var/www/pianely/services/transcription

# Créer l'environnement Python
python3 -m venv venv
source venv/bin/activate

# Installer les dépendances
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt

# Tester
python3 -c "import basic_pitch; print('Basic Pitch OK')"

deactivate
```

---

## Étape 9 : Build et Test

```bash
cd /var/www/pianely

# Build l'application
npm run build

# Tester en local
npm run start

# Dans un autre terminal, tester l'API
curl http://localhost:3000/api/health
# Devrait retourner {"status":"ok"}
```

---

## Étape 10 : Configuration Nginx

```bash
# Installer Nginx
apt install -y nginx

# Créer la config
cat > /etc/nginx/sites-available/pianely << 'EOF'
server {
    listen 80;
    server_name pianely.com www.pianely.com;  # Remplace par ton domaine

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        # Timeout pour les longues conversions PDF
        proxy_read_timeout 600s;
        proxy_connect_timeout 600s;
        proxy_send_timeout 600s;
    }
}
EOF

# Activer le site
ln -s /etc/nginx/sites-available/pianely /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Tester et recharger
nginx -t
systemctl reload nginx
```

---

## Étape 11 : SSL avec Let's Encrypt

```bash
# Installer Certbot
apt install -y certbot python3-certbot-nginx

# Obtenir le certificat (remplace par ton domaine)
certbot --nginx -d pianely.com -d www.pianely.com

# Renouvellement automatique (déjà configuré par certbot)
certbot renew --dry-run
```

---

## Étape 12 : Service Systemd

```bash
# Créer le service
cat > /etc/systemd/system/pianely.service << 'EOF'
[Unit]
Description=Pianely Next.js App
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/var/www/pianely
ExecStart=/usr/bin/npm run start
Restart=on-failure
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
EOF

# Activer et démarrer
systemctl daemon-reload
systemctl enable pianely
systemctl start pianely

# Vérifier
systemctl status pianely
```

---

## Étape 13 : Firewall

```bash
# Configurer UFW
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow http
ufw allow https
ufw enable
```

---

## Étape 14 : Mise à Jour Automatique

```bash
# Script de mise à jour
cat > /var/www/pianely/update.sh << 'EOF'
#!/bin/bash
cd /var/www/pianely
git pull origin main
npm install
npm run build
systemctl restart pianely
echo "✅ Mise à jour terminée"
EOF

chmod +x /var/www/pianely/update.sh
```

---

## Commandes Utiles

```bash
# Voir les logs
journalctl -u pianely -f

# Redémarrer l'application
systemctl restart pianely

# Mettre à jour
cd /var/www/pianely && ./update.sh

# Vérifier l'espace disque
df -h

# Vérifier la mémoire
free -h
```

---

## Dépannage

### Erreur "Bucket not found"
- Crée le bucket `sheet-music` dans Supabase Storage
- Assure-toi qu'il est public

### Erreur Tesseract "legacy engine"
- Télécharge les fichiers traineddata depuis GitHub (voir Étape 5)

### Timeout conversion PDF
- Le timeout Nginx est configuré à 600s
- Vérifie les logs : `journalctl -u pianely -f`

### Java non trouvé
- Vérifie : `java -version`
- Ajoute au PATH si nécessaire

---

## Coûts Estimés

| Service | Coût/mois |
|---------|-----------|
| VPS Hetzner CPX21 | €8.50 |
| Domaine (.com) | ~€1 |
| **Total** | ~**€10/mois** |

Supabase Free Tier : gratuit jusqu'à 500MB de stockage et 50k requêtes/mois.
