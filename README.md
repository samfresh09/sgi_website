# SGI — Site vitrine (refonte)

Refonte du site de **SGI — Société d'Expertise Comptable et Informatique** (Lomé, Togo).
Site **multi-pages** moderne, animé, avec **pré-rendu statique (SSG)** pour un référencement
(SEO) optimal sur tous les navigateurs et moteurs de recherche.

## Stack technique

- **React 18 + TypeScript**
- **Vite 5** (build) + **vite-react-ssg** (génération de pages HTML statiques)
- **Tailwind CSS** (design system sur mesure, charte bleu/rouge du logo SGI)
- **Framer Motion** (animations modernes : reveals au scroll, compteurs, parallaxe douce)
- **lucide-react** (icônes)

> Aucune dépendance à Lovable. Le projet est 100 % autonome.

## Démarrage

```bash
npm install      # installe les dépendances
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build + pré-rendu statique + sitemap (sortie : /dist)
npm run preview  # prévisualise le build de production
```

## Structure

```
src/
  components/        Composants UI (Header, Footer, Hero, cartes, SEO, animations…)
    home/            Sections de la page d'accueil
  pages/             Une page par route (Home, Services, ServiceDetail, About, Contact, 404)
  data/              Source unique des contenus (site.ts, services.ts)
  lib/               Utilitaires (icônes, JSON-LD, cn)
  App.tsx            Définition des routes (react-router)
  main.tsx           Point d'entrée SSG (ViteReactSSG)
scripts/postbuild.mjs  Génère sitemap.xml, 404.html, et hisse <meta charset>
```

## Pages générées (statique, indexable)

`/` · `/services` · `/services/{5 services}` · `/a-propos` · `/contact` · `/404`

## Référencement (SEO) intégré

- **HTML pré-rendu** : tout le contenu est présent dans le HTML (visible par Google, Bing, etc.
  sans exécution de JavaScript).
- **Balises par page** : `title`, `meta description`, `canonical`, `robots` uniques et optimisés.
- **Open Graph + Twitter Cards** (partage réseaux sociaux).
- **Données structurées JSON-LD** : `Organization`/`AccountingService`, `WebSite`,
  `BreadcrumbList`, `Service`, `ItemList`, `ContactPoint` → éligibilité aux résultats enrichis.
- **`sitemap.xml`** (généré automatiquement) + **`robots.txt`** + **`site.webmanifest`**.
- **`hreflang`** (fr / x-default), `theme-color`, favicon, `<meta charset>` en tête.
- **Accessibilité & performance** : HTML sémantique, focus visibles, `prefers-reduced-motion`,
  images dimensionnées, polices en `display=swap`, page 404 dédiée.

## Déploiement

Le dossier **`/dist`** est entièrement statique : déployable tel quel sur Netlify, Vercel,
GitHub Pages, Cloudflare Pages, ou tout hébergement Apache/Nginx.

À faire avant la mise en ligne :

1. Remplacer l'image de partage **`public/og-image.jpg`** par un visuel de marque 1200×630.
2. Vérifier les coordonnées dans **`src/data/site.ts`** (téléphone, e-mail, réseaux sociaux).
3. (Optionnel) Brancher le formulaire de contact sur un service d'envoi (Formspree, EmailJS,
   ou une fonction serverless). Par défaut, il ouvre le client mail du visiteur.
4. Soumettre `https://sgi-tg.com/sitemap.xml` dans Google Search Console & Bing Webmaster.
5. Configurer une redirection **301 `www.sgi-tg.com` → `sgi-tg.com`** (un seul hôte canonique).
# sgi_website
