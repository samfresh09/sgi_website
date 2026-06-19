# Déploiement sur Dokploy

Le site est un **site statique pré-rendu (SSG)** servi par **nginx** dans un conteneur Docker.
Dokploy construit l'image directement depuis ce dépôt GitHub à chaque `git push`.

- **Dépôt** : `https://github.com/samfresh09/sgi_website` (branche `main`)
- **Build** : `Dockerfile` (multi-stage : Node build → nginx)
- **Port du conteneur** : `80`
- **Domaine** : `sgi-tg.com`

---

## 1. DNS (chez votre registrar)

Faites pointer le domaine vers l'IP publique de votre serveur Dokploy :

| Type | Nom   | Valeur                |
|------|-------|-----------------------|
| A    | `@`   | `IP_DE_VOTRE_SERVEUR` |
| A    | `www` | `IP_DE_VOTRE_SERVEUR` |

> Attendez la propagation DNS avant d'activer le HTTPS (Let's Encrypt en a besoin).

---

## 2. Créer l'application dans Dokploy

1. **Create Project** → nommez-le `SGI`.
2. Dans le projet → **Create Service → Application** → nom : `site`.
3. Onglet **Provider / Source** :
   - Provider : **GitHub** (connectez votre compte GitHub si ce n'est pas fait),
     puis sélectionnez le dépôt **`samfresh09/sgi_website`** et la branche **`main`**.
   - *(Alternative sans app GitHub : Provider **Git**, URL `https://github.com/samfresh09/sgi_website.git`,
     branche `main`. Dépôt privé → ajoutez la **Deploy Key** affichée par Dokploy dans GitHub.)*
4. Onglet **Build Type** : choisissez **Dockerfile**.
   - Dockerfile Path : `./Dockerfile` (laisser par défaut).
5. Cliquez **Deploy**. Dokploy clone le repo, build l'image et démarre le conteneur.
   Suivez les logs dans l'onglet **Deployments / Logs**.

---

## 3. Domaine + HTTPS

Onglet **Domains** de l'application → **Add Domain** :

| Champ          | Valeur          |
|----------------|-----------------|
| Host           | `sgi-tg.com`    |
| Container Port | `80`            |
| HTTPS          | **activé**      |
| Certificate    | **Let's Encrypt** |

Ajoutez une **2ᵉ entrée** pour `www.sgi-tg.com` (Port 80, HTTPS, Let's Encrypt).
Pour la cohérence SEO, configurez une **redirection 301 `www` → apex** :
soit via l'option de redirection de Dokploy/Traefik, soit en gardant `www` comme simple
alias (le `<link rel="canonical">` du site pointe déjà vers `https://sgi-tg.com`).

---

## 4. Déploiement automatique (recommandé)

Onglet **Deployments** → activez **Auto Deploy** / créez le **Webhook GitHub**
(Dokploy fournit l'URL ; ajoutez-la dans *GitHub → Settings → Webhooks*).
Désormais, chaque `git push` sur `main` redéploie le site automatiquement.

---

## Variables d'environnement

Aucune n'est requise (site 100 % statique).

## Vérifications après mise en ligne

- `https://sgi-tg.com` → page d'accueil OK, cadenas HTTPS vert.
- `https://sgi-tg.com/services/expertise-comptable` → page service OK (URL propre).
- `https://sgi-tg.com/robots.txt` et `/sitemap.xml` → accessibles.
- Une URL inexistante → page 404 de marque (statut 404).
- Soumettre `https://sgi-tg.com/sitemap.xml` dans Google Search Console & Bing Webmaster.

---

## Tester l'image en local (optionnel, nécessite Docker)

```bash
docker build -t sgi-site .
docker run --rm -p 8080:80 sgi-site
# puis ouvrir http://localhost:8080
```
