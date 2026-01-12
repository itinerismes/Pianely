# 🚀 Guide de Migration vers VPS

**À utiliser quand tu es prêt à passer en production avec VPS**

---

## Prérequis

- ✅ App testée et validée en local
- ✅ Compte Hetzner/Contabo/DigitalOcean créé
- ✅ Nom de domaine (optionnel mais recommandé)
- ✅ Clés Supabase production prêtes

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

## Étape 2 : Configuration DNS (Si domaine)

```
Si tu as un domaine (ex: pianely.com) :

1. Chez ton registrar (Namecheap, OVH, etc.)
2. Ajoute un record A :
   - Type : A
   - Name : @ (ou app)
   - Value : IP_DU_VPS
   - TTL : 300

3. Attends 5-10 minutes (propagation DNS)
```

---

## Étape 3 : Connexion SSH

```bash
# Depuis ton terminal local
ssh root@XXX.XXX.XXX.XXX

# Première connexion : accepte la fingerprint
# Connecté ✅
```

---

## Étape 4 : Installation Automatique

### Script d'Installation Complet

Je vais créer ce script pour toi. Il installe :
- Docker & Docker Compose
- Nginx (reverse proxy)
- SSL Let's Encrypt (HTTPS)
- Firewall
- Auto-restart
- Monitoring

```bash
# Sur le VPS, lance :
curl -fsSL https://raw.githubusercontent.com/ton-repo/pianely/main/vps-setup.sh | bash
```

**Ou installation manuelle** (voir section suivante)

---

## Étape 5 : Installation Manuelle (Alternative)

```bash
# Sur le VPS

# 1. Update système
apt update && apt upgrade -y

# 2. Install Docker
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker

# 3. Install Docker Compose
apt install docker-compose -y

# 4. Install Git
apt install git -y

# 5. Clone le repo
cd /opt
git clone https://github.com/ton-repo/pianely.git
cd pianely

# 6. Configure .env
cp .env.example .env.production
nano .env.production

# Édite avec tes vraies clés :
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...
NODE_ENV=production

# 7. Build et lance
docker-compose -f docker-compose.prod.yml up -d --build

# 8. Vérifie que ça tourne
docker-compose ps
# Doit afficher : pianely_app ... Up
```

---

## Étape 6 : Configuration Nginx + SSL

```bash
# 1. Install Nginx
apt install nginx certbot python3-certbot-nginx -y

# 2. Configure Nginx
nano /etc/nginx/sites-available/pianely

# Copie cette config :
server {
    listen 80;
    server_name pianely.com www.pianely.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # Timeouts pour conversions longues
        proxy_connect_timeout 300s;
        proxy_send_timeout 300s;
        proxy_read_timeout 300s;
    }
}

# 3. Active la config
ln -s /etc/nginx/sites-available/pianely /etc/nginx/sites-enabled/
nginx -t  # Test config
systemctl restart nginx

# 4. SSL gratuit avec Let's Encrypt
certbot --nginx -d pianely.com -d www.pianely.com

# Suit les instructions (email, accepte TOS)
# SSL configuré automatiquement ✅
```

---

## Étape 7 : Firewall

```bash
# Configure UFW
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw enable
ufw status
```

---

## Étape 8 : Auto-Restart & Monitoring

```bash
# 1. Auto-restart Docker au boot
systemctl enable docker

# 2. Auto-restart app si crash
# (Déjà configuré dans docker-compose.yml avec restart: unless-stopped)

# 3. Monitoring simple
apt install htop -y

# Surveille RAM/CPU :
htop

# Surveille logs :
docker-compose logs -f --tail=100
```

---

## Étape 9 : CI/CD - Deploy Automatique

### Créer GitHub Action

```yaml
# .github/workflows/deploy-vps.yml

name: Deploy to VPS
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.VPS_HOST }}
          username: root
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /opt/pianely
            git pull origin main
            docker-compose -f docker-compose.prod.yml up -d --build
```

### Configure les Secrets GitHub

```
1. GitHub repo → Settings → Secrets → Actions
2. Ajoute :
   - VPS_HOST : IP du VPS
   - VPS_SSH_KEY : Ta clé SSH privée

3. Push sur main → Deploy automatique ! 🚀
```

---

## Étape 10 : Vérification Post-Installation

```bash
# 1. Vérifie que l'app répond
curl http://localhost:3000
# Doit retourner du HTML

# 2. Vérifie SSL
curl https://pianely.com
# Doit retourner du HTML en HTTPS

# 3. Test conversion PDF
# Upload un PDF depuis l'interface web
# Vérifie les logs :
docker-compose logs -f pianely_app

# 4. Vérifie l'utilisation ressources
htop
# RAM utilisée doit être < 3GB
# CPU < 50% en idle
```

---

## 📊 Monitoring & Maintenance

### Logs

```bash
# Voir logs en temps réel
cd /opt/pianely
docker-compose logs -f

# Logs des 100 dernières lignes
docker-compose logs --tail=100

# Logs d'une erreur spécifique
docker-compose logs | grep ERROR
```

### Redémarrage

```bash
# Redémarrer l'app
docker-compose restart

# Rebuild complet
docker-compose down
docker-compose up -d --build
```

### Nettoyage

```bash
# Nettoie les images Docker inutilisées
docker system prune -a

# Libère de l'espace
```

### Backup Base de Données

```bash
# Backup Supabase (déjà géré par Supabase)
# Mais backup des fichiers locaux si besoin

# Backup uploads
tar -czf backup-uploads-$(date +%Y%m%d).tar.gz /opt/pianely/uploads
```

---

## 🔒 Sécurité

### 1. Change le Port SSH (Optionnel)

```bash
nano /etc/ssh/sshd_config
# Change Port 22 → Port 2222
systemctl restart sshd

# N'oublie pas d'ouvrir le port :
ufw allow 2222/tcp
ufw delete allow 22/tcp
```

### 2. Désactive Root Login

```bash
# Crée un user non-root d'abord
adduser pianely
usermod -aG sudo pianely
usermod -aG docker pianely

# Puis :
nano /etc/ssh/sshd_config
# Change PermitRootLogin yes → no
systemctl restart sshd
```

### 3. Fail2Ban (Protection brute-force)

```bash
apt install fail2ban -y
systemctl enable fail2ban
systemctl start fail2ban
```

---

## 💰 Estimation Coûts VPS

### Hetzner CPX21 (Recommandé)
- **€8.50/mois** (~$9)
- 3 vCPU, 4GB RAM
- 80GB SSD
- 20TB traffic
- **Handle : 100-200 users/jour**

### Upgrade si Croissance

**200-500 users/jour** :
- CPX31 : €15.90/mois (4 vCPU, 8GB RAM)

**500-1000 users/jour** :
- CPX41 : €29.90/mois (8 vCPU, 16GB RAM)

**1000+ users/jour** :
- Load balancer + 2× CPX21 : ~€40/mois
- Ou CDN + Cache (Cloudflare gratuit)

---

## 🎯 Performance Optimizations

### 1. Redis Cache (Optionnel)

```yaml
# docker-compose.prod.yml
services:
  redis:
    image: redis:alpine
    restart: unless-stopped

  pianely:
    depends_on:
      - redis
    environment:
      - REDIS_URL=redis://redis:6379
```

### 2. Queue System (Si beaucoup de conversions)

```bash
# Install Redis + Bull Queue
npm install bull ioredis

# Gère les conversions en file d'attente
# Évite surcharge CPU
```

### 3. CDN (Cloudflare)

```
1. Ajoute ton domaine sur Cloudflare (gratuit)
2. Active le proxy (nuage orange)
3. Cache automatique des assets statiques
4. Protection DDoS gratuite
5. SSL automatique
```

---

## 🐛 Troubleshooting Production

### "Connection refused"
```bash
# Vérifie que Docker tourne
docker-compose ps

# Vérifie les logs
docker-compose logs

# Redémarre
docker-compose restart
```

### "Out of Memory"
```bash
# Vérifie RAM
free -h

# Vérifie processus gourmands
htop

# Upgrade VPS si nécessaire
```

### "SSL Certificate Expired"
```bash
# Renouvelle (automatique normalement)
certbot renew

# Force renouvellement
certbot renew --force-renewal
```

### "Conversions Lentes"
```bash
# Vérifie CPU
htop

# Limite conversions simultanées dans le code
# Ou upgrade vers VPS plus puissant
```

---

## 📈 Scaling Strategy

### Phase 1 : Single VPS (0-200 users/day)
- 1× Hetzner CPX21 : €8.50/mois
- Suffit largement

### Phase 2 : Vertical Scaling (200-500 users/day)
- Upgrade vers CPX31 : €15.90/mois
- Plus de RAM/CPU

### Phase 3 : Horizontal Scaling (500+ users/day)
- Load balancer
- 2× CPX21 : ~€40/mois
- Redis cache partagé

### Phase 4 : Multi-Region (1000+ users/day)
- VPS EU + VPS US
- CDN global
- ~€100/mois

---

## ✅ Checklist Migration Complète

```
□ VPS créé et accessible via SSH
□ Docker installé
□ App déployée (docker-compose up)
□ Nginx configuré
□ SSL Let's Encrypt actif (HTTPS)
□ Firewall configuré (UFW)
□ DNS pointant vers VPS
□ CI/CD GitHub Actions configuré
□ Logs accessibles (docker-compose logs)
□ Monitoring en place (htop)
□ Backup strategy définie
□ Test complet des conversions
□ Performance acceptable
□ Domaine accessible publiquement
```

---

## 🎉 Tu Es En Prod !

**L'app est maintenant accessible à** :
- https://pianely.com (ou ton domaine)
- Conversions PDF/Audio/YouTube fonctionnent
- SSL sécurisé
- Auto-restart si crash
- Logs disponibles
- Deploy automatique sur push

**Coût** : €8.50/mois pour 100-200 users/jour

**Prochaine étape** : Monétisation avec Stripe ! 💰
