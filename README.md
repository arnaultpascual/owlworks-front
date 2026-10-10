# owlworks.dev

Le site d'OwlWorks, studio indépendant (SASU) : SaaS, apps mobiles, logiciels de bureau, open source.

**Concept : « Le Perchoir ».** La page est une carte électronique tracée comme un plan technique.
- Le hero dessine le hibou avec ses vraies cotes.
- Une piste unique part de son perchoir et descend toute la page. Elle se ramifie vers chaque produit (U1 ThirdWatch, U2 Tiny Legion, U3 ReadSeal, J1–J3 open source) et y fait passer le courant.
- Chaque produit prend la page à son tour. ThirdWatch : un banc de mesure noir. Tiny Legion : le vrai jeu, dans l'écran du composant. ReadSeal : une politique qu'on lit, scellée à la cire.

## Lancer

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # dist/ : le site complet, prêt à déployer
npm run preview      # sert dist/
npm run typecheck
npm run review       # captures desktop / mobile / animations réduites / sans JS + vidéos (après build)
npm run lighthouse   # Lighthouse mobile (après build)
```

Scripts de génération (leurs résultats sont versionnés) :

```bash
npm run images                 # assets/ → shared/img (AVIF + WebP) ; boucle vidéo depuis le repo du jeu
npm run github                 # dépôts GitHub épinglés → shared/data/github.json (aussi lancé par build)
node scripts/brand-assets.mjs  # favicon, icônes, og-image, CNAME, robots, sitemap, manifeste, _headers
node scripts/tiny-legion.mjs   # recompile la vitrine du vrai jeu → public/tiny-legion/
node scripts/logo-compare.mjs  # compare le logo SVG au PNG source → review/logo-compare.png
```

## Structure

```
site/               le site (Le Perchoir) : render.ts (HTML au build), main.ts, plan, piste, U1–U3, style.css
shared/
  content.ts        TOUT le texte (fr, structure prête pour en) + infos légales
  brand/            le hibou en SVG géométrique (groupes animables) et le wordmark
  styles/           tokens (couleurs, polices, échelles) + base (reset, a11y)
  render/html.ts    helpers de rendu au build (head SEO, <picture>, dépôts GitHub, JSON-LD)
  js/               vrai jeu Tiny Legion (embed), scène runner du plan, env, easter egg (site muet)
  fonts/ img/ video/ data/
legal/              mentions légales, confidentialité Tiny Legion (FR), 404, rendu Markdown
en/                 coquilles des pages anglaises (accueil, legal notice, privacy)
public/             CNAME, robots, sitemap, icônes, og-image, app-ads.txt, _headers, tiny-legion/
assets/             sources des images affichées (logo, captures Tiny Legion FR + EN, 2 écrans ReadSeal)
tiny-legion-src/    mise en scène de la vitrine du jeu (compilée avec le moteur du repo du jeu)
scripts/            build, images, github, brand-assets, tiny-legion, review, lighthouse
```

Chaque page est **rendue au build** depuis `shared/content.ts` (plugin dans `vite.config.ts`) :
le contenu est dans le HTML, lisible et indexable sans JavaScript.

### Français / English

Le site existe en deux langues, en pages statiques (compatible GitHub Pages) :

| Page | Français | English |
|---|---|---|
| Accueil | `/` | `/en/` |
| Mentions légales | `/legal/mentions-legales/` | `/en/legal/legal-notice/` |
| Confidentialité Tiny Legion | `/legal/tiny-legion/confidentialite/` | `/en/legal/tiny-legion/privacy/` |

- Tous les textes sont dans `shared/content.ts` : `fr` et `en` (`SiteContent`), plus `COPY_PERCHOIR_FR` / `COPY_PERCHOIR_EN` pour le design. TypeScript refuse une langue à laquelle il manque un texte.
- Une page prend sa langue dans son `<html lang="…">`. Ajouter une page anglaise = un `index.html` sous `en/` avec `lang="en"`.
- Bouton FR / EN dans le header, balises `hreflang` sur chaque page, sitemap avec les deux langues, image de partage par langue (`og-image.png`, `og-image-en.png`). Pas de redirection automatique selon la langue du navigateur.
- Sur `/en/`, le vrai jeu tourne en anglais, avec les captures et la vidéo anglaises du store.
- La 404 (unique sur GitHub Pages) parle les deux langues.

`assets/` ne garde que les sources des images affichées ; les visuels complets vivent dans les repos des produits.

### Tiny Legion en direct

La section Tiny Legion montre le vrai jeu :
- `scripts/tiny-legion.mjs` compile le moteur Three.js depuis les sources du jeu (variable `TINY_LEGION_REPO`), sans rien modifier dans le repo du jeu. La mise en scène est dérivée de `src/dev/promo.ts`.
- Le résultat est versionné dans `public/tiny-legion/` : le build et la CI n'ont pas besoin du repo du jeu.
- Côté page : une iframe chargée à l'approche, muette, sans stockage, pilotée par la page.
- Après une mise à jour du jeu, relancer le script.

## Déployer (GitHub Pages)

`dist/` est un site statique complet pour `https://owlworks.dev`. Tous les chemins partent de la racine.

**Une seule fois :**

1. Dépôt GitHub › *Settings › Pages* : **Source = GitHub Actions**, **Custom domain = `owlworks.dev`**.
2. DNS de `owlworks.dev` :
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - (facultatif) `www` en `CNAME` → `arnaultpascual.github.io`
3. Conseillé : vérifier le domaine dans *GitHub › Settings (du compte) › Pages* (enregistrement TXT).
4. Une fois le certificat émis, cocher **Enforce HTTPS** : `.dev` est en HSTS preload.

Ensuite, chaque push sur `main` reconstruit et publie le site (`.github/workflows/deploy.yml`).

**Search Console / Play Console** : vérifier la propriété de domaine `owlworks.dev` par enregistrement
DNS TXT, ou coller le jeton dans `PLACEHOLDERS.GOOGLE_SITE_VERIFICATION` (`shared/content.ts`).

GitHub Pages ignore `_headers` (CSP, cache long). Ce fichier ne sert que sur Cloudflare Pages. Le build
échoue s'il trouve une ressource en `http://`.

## Polices

Geom Graphic n'était pas fournie. Substitut : **Oxanium** (SIL OFL), carré-arrondi comme le wordmark.
Pour revenir à Geom Graphic :
1. déposer les woff2 dans `shared/fonts/` ;
2. ajouter le `@font-face` dans `shared/styles/tokens.css` ;
3. changer une ligne : `--font-brand`.

Le wordmark SVG se régénère avec `scripts/wordmark.py <wght> <fichier.ttf>`.
