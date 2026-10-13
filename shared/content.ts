/**
 * Every word of the site, in French (`fr`, the root) and English (`en`, under /en/).
 * Rendered into the HTML at build time; a page picks its language from <html lang>.
 * Strings may hold a little inline HTML. Voice: the studio ("OwlWorks"), the visitor "vous" / "you";
 * Tiny Legion speaks with the game's own "tu".
 */

/* ------------------------------------------------------------ placeholders */

/** To fill before going live. Rendered as-is (visibly) until then. */
export const PLACEHOLDERS = {
  /** from the OwlWorks partner page on the Atlassian Marketplace */
  CONTACT_EMAIL: 'contact@owlworks.dev',
  LINKEDIN_URL: '', // optional: leave empty to hide the link
  /** capital social, fixe (RNE / INPI) */
  CAPITAL: '50 €',
  /** registered office (Annuaire des Entreprises / INSEE, checked 10/10/2026) */
  ADRESSE: '105 rue Dragon, 13006 Marseille',
  SIREN: 'SIREN 100 439 413, RCS Marseille',
  /** TVA intracommunautaire (DGFiP, via l’Annuaire des Entreprises) */
  TVA: 'FR70 100 439 413',
  HEBERGEUR_NOM: 'GitHub, Inc. (GitHub Pages)',
  HEBERGEUR_ADRESSE: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
  HEBERGEUR_TEL: '+1 877 448 4820',
  /** optional: Search Console HTML-tag verification (a DNS TXT record works too and needs nothing here) */
  GOOGLE_SITE_VERIFICATION: '',
} as const;

export const SITE = {
  url: 'https://owlworks.dev',
  name: 'OwlWorks',
  /** shown only where the law requires it (directeur de la publication, mentions légales) */
  owner: 'Arnault Pascual',
  legalForm: 'SASU',
  github: 'https://github.com/arnaultpascual',
  /** Tiny Legion store pages: empty = shown as "coming soon", filled = a real link */
  stores: {
    googlePlay: 'https://play.google.com/store/apps/details?id=dev.owlworks.tinylegion',
    appStore: '',
  },
  /** OwlWorks partner page on the Atlassian Marketplace (ReadSeal is not listed yet) */
  atlassianVendor: 'https://marketplace.atlassian.com/vendors/413411677/owlworks',
  githubHandle: 'arnaultpascual',
  email: PLACEHOLDERS.CONTACT_EMAIL,
  linkedin: PLACEHOLDERS.LINKEDIN_URL,
  year: 2026,
  /** paths, identical in dev and in each deployed build */
  paths: {
    home: '/',
    legal: '/legal/mentions-legales/',
    tinyLegionPrivacy: '/legal/tiny-legion/confidentialite/',
    homeEn: '/en/',
    legalEn: '/en/legal/legal-notice/',
    tinyLegionPrivacyEn: '/en/legal/tiny-legion/privacy/',
  },
  colors: {
    orange: '#FF6A13',
    night: '#011F2A',
    cream: '#FCF0E8',
  },
} as const;

/* ------------------------------------------------------------------ types */

export type Locale = 'fr' | 'en';

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface Fact {
  /** big, typographic: "10 → 1", "21", "7" */
  value: string;
  /** what the value means */
  label: string;
  /** one sentence of detail */
  detail?: string;
}

export interface Feature {
  title: string;
  text: string;
}

export interface Project {
  id: 'tiny-legion' | 'readseal' | 'thirdwatch';
  name: string;
  /** "Jeu mobile", "App Confluence"… */
  kind: string;
  /** honest status line, shown as text */
  status: string;
  statusTone: 'soon' | 'beta' | 'live';
  tagline: string;
  pitch: string;
  /** short, punchy line for very large type */
  shout: string;
  features: Feature[];
  facts: Fact[];
  stack?: string[];
  cta?: Link;
  links?: Link[];
  /** store pages (href '' = not published yet) */
  stores?: { name: string; href: string }[];
  /** a line with the owl's sense of humour */
  aside: string;
}

export interface Repo {
  name: string;
  /** French one-liner (GitHub's English description is the fallback) */
  pitch: string;
  detail: string;
  stack: string[];
  /** what the micro-interaction acts out */
  verb: string;
}

/** a page of the site, in every language */
export type PageId = 'home' | 'legal' | 'tinyLegionPrivacy';

export interface SiteContent {
  locale: Locale;
  /** Open Graph locale, e.g. fr_FR */
  ogLocale: string;
  /** this language's address for each page */
  paths: Record<PageId, string>;
  /** the other language, for the switcher */
  other: { locale: Locale; short: string; label: string; switchTo: string };
  /** micro-copy of the site's design (Le Perchoir) */
  perchoir: PerchoirCopy;
  meta: { title: string; description: string; ogAlt: string };
  a11y: {
    skip: string;
    menu: string;
    close: string;
    newTab: string;
    logo: string;
  };
  nav: Link[];
  hero: {
    eyebrow: string;
    title: string;
    /** the title split in beats, for kinetic type */
    beats: string[];
    /** the part of the title set in the accent colour (the "eye") */
    mark: string;
    lede: string;
    skills: string[];
    scrollHint: string;
    /** what the owl is doing right now (status line) */
    watch: string;
  };
  studio: {
    title: string;
    text: string;
    offers: Feature[];
    languages: string[];
  };
  /** text: optional sentence under the title ('' = none) */
  projectsIntro: { kicker: string; title: string; text: string };
  projects: { tinyLegion: Project; readseal: Project; thirdwatch: Project };
  tinyLegionExtras: {
    ranks: string[];
    powers: string[];
    bosses: string[];
    modes: Feature[];
    screenshotsAlt: Record<string, string>;
    videoLabel: string;
    gateHint: string;
    mergeHint: string;
  };
  readsealExtras: {
    policyTitle: string;
    policyParagraphs: string[];
    counterLabel: (n: number, total: number) => string;
    attestation: string;
    button: string;
    sealed: string;
    register: { title: string; columns: string[]; frozen: string; rows: { who: string; status: 'confirmed' | 'pending' | 'no-access' }[] };
    reminders: string[];
    screenshotsAlt: Record<string, string>;
    statusNote: string;
  };
  thirdwatchExtras: {
    uptimeLabel: string;
    tokenLabel: string;
    tokenRefreshed: string;
    scenario: string[];
    alertChannels: string[];
    trial: string;
  };
  openSource: {
    kicker: string;
    title: string;
    text: string;
    repos: Record<string, Repo>;
    starsLabel: (n: number) => string;
    profile: Link;
  };
  contact: {
    kicker: string;
    title: string;
    text: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    availability: string;
  };
  footer: {
    line: string;
    legal: Link;
    tinyLegionPrivacy: Link;
    noTracking: string;
    madeBy: string;
    backToTop: string;
  };
  easterEgg: {
    console: string;
    hoot: string;
  };
  notFound: { title: string; kicker: string; text: string; back: string };
  ui: {
    /** shown next to a store that has no link yet */
    storeSoon: string;
    storesLabel: string;
    source: string;
    soon: string;
    beta: string;
    live: string;
  };
  legal: LegalContent;
}

export interface LegalSection {
  title: string;
  /** paragraphs; a string starting with "- " is a list item */
  body: string[];
  /** open question, rendered as a visible TODO */
  todo?: string;
}

export interface LegalContent {
  back: string;
  updated: string;
  /** aria-label of the legal links in the footer */
  navLabel: string;
  /** aria-label of the language switcher */
  langNav: string;
  mentions: { title: string; description: string; kicker: string; note?: string; sections: LegalSection[] };
  tinyLegionPrivacy: {
    title: string;
    description: string;
    kicker: string;
    h1: string;
    updated: string;
    /** Markdown */
    md: string;
  };
}

/* ------------------------------------------------------------------- copy */

const P = PLACEHOLDERS;

/* ----------------------------------------------- Tiny Legion privacy policy */
/* Markdown, rendered by shared/render/markdown.ts. This is the policy declared on the stores. */
const TL_PRIVACY_FR = `Tiny Legion est un jeu mobile pour Android, iPhone et iPad, édité par **OwlWorks**. Cette page explique quelles données sont utilisées quand tu joues, par qui et pourquoi. Elle dit aussi comment tu gardes la main dessus.

## En bref

- **Pas de compte, pas de serveur.** Ta progression et tes réglages restent sur ton téléphone. Nous ne recevons aucune donnée te concernant.
- **Des publicités financent le jeu.** Elles sont fournies par Google AdMob, qui traite certaines données de ton appareil.
  - En Europe, tu choisis au premier lancement si elles peuvent être personnalisées.
  - Tu peux changer d'avis à tout moment : *Réglages › Confidentialité*.
  - Sur iPhone et iPad, le suivi publicitaire n'a lieu que si tu l'autorises dans la fenêtre d'Apple.
- **Un seul achat possible : retirer les publicités.** Le paiement passe entièrement par Google Play ou par l'App Store.

## 1. Qui est responsable de tes données ?

Le responsable du traitement est :
**OwlWorks**, SASU au capital de ${P.CAPITAL} (${P.SIREN})
${P.ADRESSE}, France
Contact : ${P.CONTACT_EMAIL}

Pour les publicités, Google est responsable de ses propres usages des données (voir la section 4). Pour les achats et les statistiques de leurs boutiques, Google et Apple le sont aussi.

## 2. Ce qui est enregistré sur ton téléphone

Le jeu enregistre, **uniquement dans la mémoire de ton appareil** :

- ta progression : niveaux et étoiles, or, améliorations de l'Atelier, reliques, bonus, statistiques et bestiaire ;
- tes réglages : volume de la musique et des effets, langue, vibrations, graphismes ;
- l'achat « Sans pub », s'il est actif ;
- l'heure de la dernière publicité plein écran, pour ne pas en montrer plus d'une toutes les 10 minutes.

Ces informations ne nous sont jamais envoyées. Elles servent uniquement à faire fonctionner le jeu.

**Pour les supprimer** (ta progression sera perdue définitivement) :
- sur Android : désinstalle le jeu, ou va dans *Paramètres › Applications › Tiny Legion › Stockage › Effacer les données* ;
- sur iPhone et iPad : supprime l'app (appui long sur son icône › *Supprimer l'app*).

Si la sauvegarde de ton téléphone est activée (sur ton compte Google pour Android, sur iCloud ou ton ordinateur pour iPhone et iPad), elle peut inclure ces données. Cette sauvegarde t'appartient : nous n'y avons pas accès.

## 3. Les données que nous collectons : aucune

Nous n'exploitons aucun serveur pour le jeu. Nous ne te demandons ni compte, ni nom, ni adresse e-mail. Nous n'utilisons aucun outil de statistiques ou de suivi qui nous soit propre. Le jeu fonctionne même sans connexion.

Seule exception, indirecte : les **rapports de plantage et de performance** que les boutiques nous transmettent, si tu l'as autorisé.
- Sur Android : si tu partages les données d'utilisation et de diagnostic avec Google, la Google Play Console nous montre ces rapports.
- Sur iPhone et iPad : si tu as choisi *Partager avec les développeurs* (*Réglages › Confidentialité et sécurité › Analyses et améliorations*), App Store Connect nous les montre.
- Ils contiennent le modèle d'appareil, la version du système et la trace de l'erreur.
- Ils ne permettent pas de t'identifier et servent uniquement à corriger les bugs.

## 4. Les publicités (Google AdMob)

Le jeu est gratuit et financé par la publicité :

- une bannière sur l'écran d'accueil, et nulle part ailleurs ;
- une publicité plein écran à la fin d'un niveau, **au plus une toutes les 10 minutes** ;
- des publicités récompensées (regarder une vidéo pour gagner de l'or), **toujours facultatives**.

Elles sont fournies par **Google AdMob** (SDK Google Mobile Ads), sur Android comme sur iPhone et iPad. Ce service est géré par Google Ireland Limited pour l'Europe, et par Google LLC ailleurs.

**Données traitées par Google.** Pour afficher les publicités, les mesurer, éviter de te montrer toujours la même et lutter contre la fraude, le SDK de Google collecte automatiquement :

- l'**adresse IP** de ton appareil, qui permet d'estimer une position approximative (ville ou pays) ;
- des **identifiants** :
  - sur Android : l'identifiant publicitaire et l'identifiant de groupe d'applications ;
  - sur iPhone et iPad : l'identifiant pour les fournisseurs (IDFV), et l'identifiant publicitaire (IDFA) seulement si tu autorises le suivi (voir plus bas) ;
- des **informations techniques** : modèle d'appareil, version du système, langue, type de connexion ;
- tes **interactions avec les publicités** (affichages, appuis) ;
- des **données de diagnostic** (performances et plantages du SDK).

Google peut aussi utiliser les outils publicitaires du système, conçus pour mesurer les publicités sans t'identifier :
- sur Android récent, les services publicitaires d'Android (centres d'intérêt, mesure des conversions), que tu peux désactiver dans *Paramètres › Sécurité et confidentialité › Confidentialité › Annonces* (le chemin varie selon les téléphones) ;
- sur iPhone et iPad, SKAdNetwork, l'outil d'Apple pour mesurer les publicités sans identifiant.

**Ton consentement (Espace économique européen, Royaume-Uni, Suisse).**
- Au premier lancement, un message de Google te demande ton accord avant toute publicité personnalisée, et avant d'utiliser ton appareil à des fins publicitaires.
- Ce message respecte le cadre de transparence et de consentement de l'IAB Europe (TCF). Il liste les partenaires publicitaires concernés.
- Tu peux tout accepter, tout refuser, ou choisir finement.
- **Tu peux changer d'avis à tout moment** avec le bouton *Réglages › Confidentialité* du jeu.
- Si tu refuses, Google n'affiche que des publicités non personnalisées ou limitées. Il n'utilise alors tes données que dans la mesure autorisée, par exemple pour lutter contre la fraude.

**Sur iPhone et iPad : l'autorisation de suivi d'Apple** (*App Tracking Transparency*).
- Le jeu peut afficher la fenêtre d'Apple « Autoriser Tiny Legion à suivre votre activité dans les apps et sites web d'autres sociétés ? ». En Europe, elle vient après le message de consentement de Google.
- Si tu refuses, l'identifiant publicitaire (IDFA) n'est pas transmis : les publicités restent, mais moins ciblées.
- Tu peux changer d'avis à tout moment dans *Réglages › Confidentialité et sécurité › Suivi*.

**Ailleurs dans le monde**, des publicités personnalisées peuvent être affichées selon les règles locales. Pour les limiter :
- sur Android : réinitialise ou supprime ton identifiant publicitaire dans *Paramètres › Google › Annonces* (le chemin varie selon les téléphones) ;
- sur iPhone et iPad : refuse le suivi dans *Réglages › Confidentialité et sécurité › Suivi*.

Le traitement par Google est décrit ici :
- Règles de confidentialité de Google : https://policies.google.com/privacy
- Utilisation des données par Google dans les applications partenaires : https://policies.google.com/technologies/partner-sites
- Tes préférences publicitaires chez Google : https://myadcenter.google.com

**Nous ne vendons aucune donnée.** Google nous fournit seulement des statistiques globales (nombre de publicités affichées, revenus), sans rien qui puisse t'identifier.

## 5. L'achat « Sans pub »

Le jeu propose un seul achat intégré : retirer les publicités.
- Il supprime la bannière et les publicités plein écran.
- Les publicités récompensées restent disponibles, si tu veux de l'or en plus.

Le paiement est **entièrement traité par Google Play** (Android) **ou par l'App Store** (iPhone et iPad). Nous recevons seulement une confirmation de l'achat (numéro de commande ou de transaction, produit, date, pays), **jamais tes coordonnées de paiement**.

L'achat est mémorisé sur ton appareil. Tu peux le récupérer si tu réinstalles le jeu avec le même compte : Google Play le restaure tout seul, et sur iPhone et iPad le bouton *Restaurer les achats* le fait.

## 6. Ce qui nous autorise à traiter ces données (bases légales)

| Traitement | Base légale |
|---|---|
| Sauvegarde de ta progression et de tes réglages sur ton appareil | Nécessaire pour fournir le jeu que tu as installé |
| Publicités personnalisées ; lecture et écriture d'informations sur ton appareil à des fins publicitaires ; sur iPhone et iPad, suivi par l'IDFA | Ton **consentement** (RGPD, art. 6.1.a ; loi Informatique et Libertés, art. 82 ; autorisation de suivi d'Apple), que tu peux retirer à tout moment |
| Publicités non personnalisées, mesure des publicités, lutte contre la fraude | **Intérêt légitime** (RGPD, art. 6.1.f) : financer un jeu gratuit et le protéger des abus, dans le respect de tes choix |
| Achat « Sans pub » | **Exécution du contrat** de vente (RGPD, art. 6.1.b) |
| Rapports de plantage (Google Play, App Store Connect) | **Intérêt légitime** (RGPD, art. 6.1.f) : corriger les bugs |

## 7. Qui reçoit ces données, et où vont-elles ?

- **Google** (Google Ireland Limited, et Google LLC aux États-Unis), pour les publicités, le consentement, et les achats sur Android ;
- les **partenaires publicitaires de Google** que tu as acceptés dans le message de consentement ;
- **Apple** (Apple Distribution International Ltd. en Europe, Apple Inc. aux États-Unis), pour les achats et les statistiques de l'App Store sur iPhone et iPad.

Des données peuvent être transférées hors de l'Union européenne, notamment aux États-Unis. Google et Apple encadrent ces transferts de deux façons :
- le cadre de protection des données UE–États-Unis (*Data Privacy Framework*) ;
- les clauses contractuelles types de la Commission européenne.

Détails : https://privacy.google.com/businesses/compliance et https://www.apple.com/legal/privacy/fr-ww/

## 8. Combien de temps ?

- **Données sur ton appareil** : jusqu'à ce que tu les effaces ou que tu désinstalles le jeu.
- **Données traitées par Google** : selon les durées fixées par Google, décrites sur https://policies.google.com/technologies/retention
- **Rapports de plantage** : selon les durées de la Google Play Console et d'App Store Connect.

## 9. Les enfants

Tiny Legion n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons sciemment aucune donnée les concernant.

En France, un mineur de moins de 15 ans ne peut pas consentir seul aux publicités personnalisées. Le consentement doit être donné conjointement avec un titulaire de l'autorité parentale. Un parent peut aussi le refuser avec *Réglages › Confidentialité*.

Si tu penses qu'un enfant a pu transmettre des données, écris-nous.

## 10. Tes droits

Sur tes données, tu disposes des droits suivants :
- accès, rectification et effacement ;
- limitation et opposition ;
- portabilité ;
- retirer ton consentement à tout moment ;
- définir des directives sur le sort de tes données après ta mort.

Comment les exercer :
- **Publicités** : ton consentement se change dans *Réglages › Confidentialité*. Pour les données détenues par Google, tu peux aussi t'adresser à Google : https://support.google.com/policies/contact/general_privacy_form
- **Auprès de nous** : nous ne détenons aucune donnée t'identifiant, mais tu peux nous écrire à ${P.CONTACT_EMAIL}. Nous te répondrons sous un mois.
- **Réclamation** : tu peux saisir la CNIL (3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, https://www.cnil.fr/plaintes) ou l'autorité de protection des données de ton pays.

## 11. Sécurité

Nous ne stockons aucune donnée sur des serveurs. Les échanges du SDK de Google avec ses serveurs sont chiffrés (HTTPS).

## 12. Les autorisations du jeu

**Sur Android :**

| Autorisation | À quoi elle sert |
|---|---|
| Accès à Internet, état du réseau | Charger les publicités (le jeu fonctionne sans connexion) |
| Identifiant publicitaire, services publicitaires d'Android | Les publicités et leur mesure, selon tes choix |
| Empêcher la mise en veille, service au premier plan | Utilisées par les services Google pour les publicités |
| Vibreur | Les vibrations du jeu (désactivables dans les Réglages) |

**Sur iPhone et iPad**, le jeu ne demande qu'une autorisation : le **suivi publicitaire** (*App Tracking Transparency*), et tu peux la refuser sans rien perdre du jeu.

Sur tous les appareils, le jeu n'accède **ni** à l'appareil photo, **ni** au micro, **ni** à tes contacts, **ni** à ta position précise, **ni** à tes photos ou fichiers.

## 13. Modifications

Nous mettrons cette page à jour si le jeu évolue, par exemple pour une nouvelle fonctionnalité ou un nouveau partenaire. La date en haut de la page indique la dernière version.

## 14. Contact

${P.CONTACT_EMAIL}
OwlWorks, ${P.ADRESSE}, France`;

const TL_PRIVACY_EN = `Tiny Legion is a mobile game for Android, iPhone and iPad, published by **OwlWorks**. This page explains what data is used when you play, by whom and why, and how you stay in control of it.

## In short

- **No account, no server.** Your progress and settings stay on your phone. We receive no data about you.
- **Ads pay for the game.** They are provided by Google AdMob, which processes some data from your device.
  - In Europe, you choose on first launch whether they may be personalised.
  - You can change your mind at any time: *Settings › Privacy*.
  - On iPhone and iPad, ad tracking only happens if you allow it in Apple's prompt.
- **Only one purchase: removing the ads.** Payment is handled entirely by Google Play or the App Store.

## 1. Who is responsible for your data?

The data controller is:
**OwlWorks**, a French simplified joint-stock company with a single shareholder (SASU), share capital ${P.CAPITAL} (${P.SIREN})
${P.ADRESSE}, France
Contact: ${P.CONTACT_EMAIL}

For ads, Google is responsible for its own uses of the data (see section 4). For purchases and their store statistics, so are Google and Apple.

## 2. What is stored on your phone

The game stores, **only in your device's memory**:

- your progress: levels and stars, gold, Workshop upgrades, relics, boosts, statistics and bestiary;
- your settings: music and sound effects volume, language, vibration, graphics;
- the "No ads" purchase, if active;
- the time of the last full-screen ad, so that no more than one is shown every 10 minutes.

This information is never sent to us. It is only used to make the game work.

**To delete it** (your progress will be lost for good):
- on Android: uninstall the game, or go to *Settings › Apps › Tiny Legion › Storage › Clear data*;
- on iPhone and iPad: delete the app (touch and hold its icon › *Remove App*).

If your phone's backup is turned on (to your Google account on Android, to iCloud or your computer on iPhone and iPad), it may include this data. That backup belongs to you: we have no access to it.

## 3. Data we collect: none

We run no servers for the game. We ask for no account, no name and no email address. We use no analytics or tracking tools of our own. The game works offline.

The only exception, an indirect one, is the **crash and performance reports** the stores pass on to us, if you allowed it.
- On Android: if you share usage and diagnostics data with Google, the Google Play Console shows us these reports.
- On iPhone and iPad: if you chose *Share With App Developers* (*Settings › Privacy & Security › Analytics & Improvements*), App Store Connect shows them to us.
- They contain the device model, the system version and the error trace.
- They cannot identify you and are only used to fix bugs.

## 4. Ads (Google AdMob)

The game is free and paid for by ads:

- a banner on the home screen, and nowhere else;
- a full-screen ad at the end of a level, **at most once every 10 minutes**;
- rewarded ads (watch a video to earn gold), **always optional**.

They are provided by **Google AdMob** (Google Mobile Ads SDK), on Android as well as on iPhone and iPad. This service is operated by Google Ireland Limited for Europe and by Google LLC elsewhere.

**Data processed by Google.** To serve ads, measure them, avoid showing you the same one over and over and prevent fraud, Google's SDK automatically collects:

- your device's **IP address**, from which an approximate location (city or country) can be estimated;
- **identifiers**:
  - on Android: the advertising ID and the app set ID;
  - on iPhone and iPad: the identifier for vendors (IDFV), and the advertising identifier (IDFA) only if you allow tracking (see below);
- **technical information**: device model, system version, language, connection type;
- your **interactions with ads** (impressions, taps);
- **diagnostic data** (the SDK's performance and crashes).

Google may also use the system's own advertising tools, designed to measure ads without identifying you:
- on recent Android phones, Android's advertising services (topics of interest, conversion measurement), which you can turn off in *Settings › Security & privacy › Privacy › Ads* (the path varies by phone);
- on iPhone and iPad, SKAdNetwork, Apple's tool for measuring ads without an identifier.

**Your consent (European Economic Area, United Kingdom, Switzerland).**
- On first launch, a Google message asks for your consent before any personalised ad, and before your device is used for advertising purposes.
- The message follows IAB Europe's Transparency & Consent Framework (TCF). It lists the advertising partners involved.
- You can accept all, refuse all, or choose in detail.
- **You can change your mind at any time** with the *Settings › Privacy* button in the game.
- If you refuse, Google only shows non-personalised or limited ads. It then uses your data only as far as allowed, for example to prevent fraud.

**On iPhone and iPad: Apple's tracking permission** (*App Tracking Transparency*).
- The game may show Apple's prompt "Allow Tiny Legion to track your activity across other companies' apps and websites?". In Europe, it comes after Google's consent message.
- If you refuse, the advertising identifier (IDFA) is not shared: ads remain, but less targeted.
- You can change your mind at any time in *Settings › Privacy & Security › Tracking*.

**Elsewhere in the world**, personalised ads may be shown according to local rules. To limit them:
- on Android: reset or delete your advertising ID in *Settings › Google › Ads* (the path varies by phone);
- on iPhone and iPad: turn tracking off in *Settings › Privacy & Security › Tracking*.

Google's processing is described here:
- Google Privacy Policy: https://policies.google.com/privacy
- How Google uses information from apps that use its services: https://policies.google.com/technologies/partner-sites
- Your ad preferences at Google: https://myadcenter.google.com

**We do not sell any data.** Google only gives us overall statistics (number of ads shown, revenue), with nothing that could identify you.

## 5. The "No ads" purchase

The game offers a single in-app purchase: removing the ads.
- It removes the banner and the full-screen ads.
- Rewarded ads remain available, if you want extra gold.

Payment is **handled entirely by Google Play** (Android) **or the App Store** (iPhone and iPad). We only receive a confirmation of the purchase (order or transaction number, product, date, country), **never your payment details**.

The purchase is remembered on your device. You can get it back if you reinstall the game with the same account: Google Play restores it by itself, and on iPhone and iPad the *Restore purchases* button does it.

## 6. What allows us to process this data (legal bases)

| Processing | Legal basis |
|---|---|
| Saving your progress and settings on your device | Necessary to provide the game you installed |
| Personalised ads; storing and reading information on your device for advertising; on iPhone and iPad, tracking with the IDFA | Your **consent** (GDPR, Art. 6(1)(a); French Data Protection Act, Art. 82; Apple's tracking permission), which you can withdraw at any time |
| Non-personalised ads, ad measurement, fraud prevention | **Legitimate interest** (GDPR, Art. 6(1)(f)): funding a free game and protecting it from abuse, while respecting your choices |
| "No ads" purchase | **Performance of the sales contract** (GDPR, Art. 6(1)(b)) |
| Crash reports (Google Play, App Store Connect) | **Legitimate interest** (GDPR, Art. 6(1)(f)): fixing bugs |

## 7. Who receives this data, and where does it go?

- **Google** (Google Ireland Limited, and Google LLC in the United States), for ads, consent, and purchases on Android;
- **Google's advertising partners** that you accepted in the consent message;
- **Apple** (Apple Distribution International Ltd. in Europe, Apple Inc. in the United States), for purchases and App Store statistics on iPhone and iPad.

Data may be transferred outside the European Union, in particular to the United States. Google and Apple cover these transfers in two ways:
- the EU–U.S. Data Privacy Framework;
- the European Commission's standard contractual clauses.

Details: https://privacy.google.com/businesses/compliance and https://www.apple.com/legal/privacy/

## 8. How long?

- **Data on your device**: until you clear it or uninstall the game.
- **Data processed by Google**: for the periods set by Google, described at https://policies.google.com/technologies/retention
- **Crash reports**: for the periods of the Google Play Console and App Store Connect.

## 9. Children

Tiny Legion is not directed at children under 13. We do not knowingly collect any data about them.

In France, a minor under 15 cannot consent alone to personalised ads. Consent must be given jointly with a holder of parental authority. A parent can also refuse it with *Settings › Privacy*.

If you believe a child may have provided data, please write to us.

## 10. Your rights

Regarding your data, you have the following rights:
- access, rectification and erasure;
- restriction and objection;
- portability;
- withdrawing your consent at any time;
- setting instructions for what happens to your data after your death.

How to exercise them:
- **Ads**: change your consent in *Settings › Privacy*. For data held by Google, you can also contact Google: https://support.google.com/policies/contact/general_privacy_form
- **With us**: we hold no data that identifies you, but you can write to us at ${P.CONTACT_EMAIL}. We will reply within one month.
- **Complaints**: you can contact the French data protection authority, the CNIL (https://www.cnil.fr/en), or the data protection authority of your country.

## 11. Security

We store no data on servers. Google's SDK encrypts its exchanges with its servers (HTTPS).

## 12. The game's permissions

**On Android:**

| Permission | What it is for |
|---|---|
| Internet access, network state | Loading ads (the game works offline) |
| Advertising ID, Android advertising services | Ads and their measurement, according to your choices |
| Keep awake, foreground service | Used by Google's services for ads |
| Vibration | The game's vibrations (can be turned off in Settings) |

**On iPhone and iPad**, the game asks for one permission only: **ad tracking** (*App Tracking Transparency*), which you can refuse without losing anything in the game.

On every device, the game does **not** access your camera, microphone, contacts, precise location, photos or files.

## 13. Changes

We will update this page if the game changes, for example with a new feature or a new partner. The date at the top of the page shows the latest version.

## 14. Contact

${P.CONTACT_EMAIL}
OwlWorks, ${P.ADRESSE}, France`;

/* ------------------------------------------------------ Le Perchoir copy */
/* Labels of the design (the page drawn as a circuit board). Uppercase is done in CSS. */
export const COPY_PERCHOIR_FR = {
  a11y: {
    plan: 'Le hibou d’OwlWorks dessiné comme un plan coté : deux yeux de 248 de diamètre, un engrenage à huit dents, un perchoir en piste de circuit.',
    cyanOn: 'Revenir au tirage papier',
    cyanOff: 'Passer en tirage cyanotype',
    /** live region, {n} = soldiers (used by the client script) */
    legionLive: { one: 'Légion : {n} unité', other: 'Légion : {n} unités' },
    runner:
      'Scène de jeu : la légion court sur la route. Souris, doigt ou flèches gauche et droite pour la diriger ; elle grossit en passant les portes « +N ».',
  },

  nav: {
    label: 'Sections de la planche',
    /** reference designators shown before each nav label (same order as c.nav) */
    refs: ['A1–A4', 'U1', 'U2', 'U3', 'J1–J3', 'J0'],
  },

  tools: {
    cyan: 'Cyanotype',
    cyanKey: 'B',
  },

  probe: { x: 'X', y: 'Y' },

  hero: {
    plate: 'Pl. 1',
    fig: 'Fig. 1 — Le hibou, vue de face. Cotes en px du dessin source.',
    notes: {
      axis: 'Axe de symétrie x 672',
      between: '264',
      dia: 'Ø 248',
      r124: 'R124',
      r99: 'R99',
      teeth: '8 dents',
      gear: 'R65 · R52',
      ear: '27,4°',
      via: 'Via Ø 63',
      perch: '737',
    },
    titleBlock: [
      { k: 'Projet', v: 'OwlWorks' },
      { k: 'Planche', v: '1/1' },
      { k: 'Éch.', v: '1:1' },
      { k: 'Bureau d’études', v: 'OwlWorks' },
      { k: 'Rév.', v: 'A' },
    ],
    stateLabel: 'État',
    skillsLabel: 'Brochage',
  },

  studio: {
    sheet: 'Nomenclature',
    chip: { ref: 'U0', name: 'OwlWorks', sub: 'SASU · studio indépendant', vcc: 'VCC', pinsLabel: 'Langages' },
    bom: {
      caption: 'Nomenclature du studio : quatre sous-ensembles, un seul fabricant.',
      columns: ['Repère', 'Désignation', 'Valeur', 'Note'],
      refs: ['A1', 'A2', 'A3', 'A4'],
      values: ['Kotlin · Swift', 'TypeScript', 'Swift · Rust · KMP', 'GitHub · MIT'],
      footer: 'Fournisseur unique',
      supplier: 'OwlWorks SASU',
    },
  },

  intro: { sheet: 'Composants actifs', refs: 'U1 · U2 · U3' },

  /** shared component labels */
  comp: {
    note: 'Note',
  },

  tl: {
    ref: 'U2',
    part: 'TL-RUN-01',
    sheet: 'Composant U2 · runner de foule',
    road: 'Route = piste',
    gate: 'Porte « +N » = composant',
    unit: 'Unité Ø 14 · rang = anneaux',
    powerOn: 'Mettre sous tension',
    powerOff: 'Revenir au plan',
    boost: '+20',
    merge: 'Fusionner',
    legion: 'Légion',
    steer: 'Flèches ← → pour diriger',
    extrasTitle: 'Fiche technique',
    extras: { ranks: 'Rangs', powers: 'Pouvoirs', bosses: 'Boss', modes: 'Modes' },
    photos: 'Captures jointes',
    photoRef: (n: number) => `Photo ${n}`,
    videoRef: 'Extrait',
    booting: 'Mise sous tension…',
    screen: 'Écran LCD · jeu réel',
    frameTitle: 'Tiny Legion, partie en direct (sans son)',
    /** labels once the game has taken over: the game says "tu" */
    game: {
      sheet: 'Le jeu prend la main',
      boost: 'Porte +20',
      legion: 'Ta légion',
      steer: 'Dirige ta légion : souris, doigt ou ← →',
      /** {rank} = the rank's name, from the game */
      evolved: 'Évolution ! Tes soldats deviennent {rank}.',
    },
  },

  rs: {
    ref: 'U3',
    sheet: 'Composant U3 · politique sur la table à dessin',
    byline: 'Équipe sécurité',
    ruler: 'Lu',
    qc: 'Contrôle',
    qcSub: 'En attente de lecture',
    status: { confirmed: 'Confirmé', pending: 'En attente', 'no-access': 'Sans accès' } as Record<string, string>,
    dates: ['à l’instant', 'J−2', '—', '—'],
    frozenStamp: 'Figé',
    remindersTitle: 'Relances',
    due: 'Échéance',
    featuresTitle: 'Spécifications',
    plates: ['Pl. U3-a', 'Pl. U3-b'],
  },

  tw: {
    ref: 'U1',
    sheet: 'Composant U1 · banc de mesure',
    scope: 'CH1 · uptime',
    scopeUnit: 'ms',
    up: 'UP',
    timebase: '1 s/div',
    probe: 'Sonde',
    chip: 'NE555',
    chipRole: 'Minuterie du token',
    pins: ['GND', 'TRIG', 'OUT', 'RESET', 'CTRL', 'THR', 'DIS', 'VCC'],
    ttl: 'TTL',
    valid: 'Valide',
    expired: 'Expiré',
    scenarioTitle: 'Scénario · points de test',
    tp: (n: number) => `TP${n}`,
    ok: 'OK',
    channelsTitle: 'Sorties d’alerte',
    stackTitle: 'Pile',
    featuresTitle: 'Spécifications',
  },

  os: {
    sheet: 'Connecteurs',
    refs: { Verrou: 'J1', atelier: 'J2', OctopusFTP: 'J3' } as Record<string, string>,
    verrou: { parts: ['Anse', 'Corps', 'Cylindre', 'Pêne'], locked: 'Verrouillé' },
    atelier: { lanes: ['wt/1', 'wt/2', 'wt/3', 'wt/4'], main: 'main', gate: 'Approbation' },
    octopus: { fan: '×8', src: 'FTP' },
  },

  contact: {
    ref: 'J0',
    sheet: 'Connecteur J0 · fin de piste',
    plug: 'Branchez-vous ici',
  },

  footer: {
    titleBlock: [
      { k: 'Titre', v: 'Le Perchoir — la carte mère' },
      { k: 'Planche', v: '1/1' },
      { k: 'Éch.', v: '1:1' },
      { k: 'Bureau d’études', v: 'OwlWorks' },
      { k: 'Format', v: 'Une page' },
      { k: 'N°', v: 'OW-01' },
    ],
    revisions: {
      caption: 'Révisions',
      columns: ['Rév.', 'Date', 'Description', 'Par'],
      rows: [['A', '10.10.2026', 'Première édition de la planche', 'OW']],
    },
    cyanHint: 'Touche B : tirage cyanotype.',
  },
};

export type PerchoirCopy = typeof COPY_PERCHOIR_FR;

export const fr: SiteContent = {
  locale: 'fr',
  ogLocale: 'fr_FR',
  paths: { home: SITE.paths.home, legal: SITE.paths.legal, tinyLegionPrivacy: SITE.paths.tinyLegionPrivacy },
  other: { locale: 'en', short: 'EN', label: 'English', switchTo: 'Read in English' },
  perchoir: COPY_PERCHOIR_FR,

  meta: {
    title: 'OwlWorks — studio indépendant · SaaS, apps mobiles, outils pour développeurs',
    description:
      'OwlWorks est un studio indépendant qui conçoit et construit ses propres SaaS, apps mobiles et outils pour développeurs : ThirdWatch, Tiny Legion, ReadSeal, et des projets open source.',
    ogAlt: 'Le hibou d’OwlWorks, perché sur une piste de circuit imprimé',
  },

  a11y: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    newTab: '(nouvel onglet)',
    logo: 'OwlWorks, accueil',
  },

  nav: [
    { label: 'Studio', href: '#studio' },
    { label: 'ThirdWatch', href: '#thirdwatch' },
    { label: 'Tiny Legion', href: '#tiny-legion' },
    { label: 'ReadSeal', href: '#readseal' },
    { label: 'Open source', href: '#open-source' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    eyebrow: 'OwlWorks — studio indépendant',
    title: 'Des apps qui ne ferment pas l’œil.',
    beats: ['Des apps', 'qui ne ferment', 'pas l’œil.'],
    mark: 'œ',
    lede:
      'Des SaaS, des apps mobiles et des outils pour développeurs. Et ce qui peut servir à d’autres part en open source.',
    skills: ['Android', 'Kotlin', 'Swift', 'TypeScript', 'Rust'],
    scrollHint: 'Descendez, le hibou vous suit des yeux',
    watch: 'En veille : des produits en ligne, du code en open source, 0 réunion inutile.',
  },

  studio: {
    title: 'Des produits maison.',
    text:
      'OwlWorks est une SASU indépendante qui conçoit, construit et maintient ses propres produits : des SaaS, des apps mobiles et des outils pour développeurs. Du téléphone au navigateur, jusqu’aux logiciels de bureau.',
    offers: [
      { title: 'Apps mobiles', text: 'Android natif d’abord, iOS en Swift quand il le faut. Des apps rapides et optimisées.' },
      { title: 'SaaS', text: 'Du produit complet, front et back en TypeScript, jusqu’à la facturation et au monitoring.' },
      { title: 'Logiciels de bureau', text: 'Swift natif, Rust et Kotlin Multiplatform : des outils pour développeurs et des logiciels nés d’un vrai besoin.' },
      { title: 'Open source', text: 'Le code qui peut servir à d’autres est publié sur GitHub, avec sa documentation et sa licence.' },
    ],
    languages: ['Kotlin', 'Swift', 'TypeScript', 'Rust'],
  },

  projectsIntro: {
    kicker: 'Produits',
    title: 'Ce que le hibou surveille en ce moment.',
    text: '',
  },

  projects: {
    tinyLegion: {
      id: 'tiny-legion',
      name: 'Tiny Legion',
      kind: 'Jeu mobile',
      status: 'En ligne sur Google Play, bientôt sur l’App Store',
      statusTone: 'live',
      tagline: 'Fusionne. Évolue. Écrase la horde.',
      shout: 'Écrase la horde.',
      pitch:
        'Un runner de foule. Ton armée court sur une route au-dessus de l’océan, traverse des portes «&nbsp;+N&nbsp;» pour grossir et écrase des hordes de centaines d’ennemis.',
      features: [
        { title: 'Fusionne', text: '10 soldats donnent 1 soldat plus fort. 21 rangs à débloquer, des Piquiers aux Démiurges.' },
        { title: 'Esquive', text: 'Des pièges sur la route : à gauche, à droite, à l’instinct.' },
        { title: 'Combine', text: 'Des cartes de pouvoir à combiner : Volée, Foudre, Poudre noire, Catapulte…' },
        { title: 'Affronte', text: '7 boss, du Nécromancien au Kraken en passant par le Dragon.' },
      ],
      facts: [
        { value: '10 → 1', label: 'la fusion', detail: '10 soldats donnent 1 soldat plus fort.' },
        { value: '21', label: 'rangs', detail: 'Des Piquiers aux Démiurges.' },
        { value: '7', label: 'boss', detail: 'Nécromancien, Dragon, Kraken…' },
        { value: '∞', label: 'îles', detail: 'Une campagne en archipel sans fin, 10 niveaux par île.' },
      ],
      links: [{ label: 'Politique de confidentialité de Tiny Legion', href: SITE.paths.tinyLegionPrivacy }],
      stores: [
        { name: 'Google Play', href: SITE.stores.googlePlay },
        { name: 'App Store', href: SITE.stores.appStore },
      ],
      aside: 'Les hordes sont plus nombreuses après minuit. Le hibou a vérifié.',
    },

    readseal: {
      id: 'readseal',
      name: 'ReadSeal',
      kind: 'App Confluence',
      status: 'Bientôt sur l’Atlassian Marketplace',
      statusTone: 'soon',
      tagline: 'Lu. Confirmé. Scellé.',
      shout: 'Publié ne veut pas dire lu.',
      pitch:
        'Politiques de conformité, règles de sécurité, guides d’onboarding : certaines pages doivent être <em>lues</em>, pas seulement publiées. Et il faut pouvoir le prouver. ReadSeal transforme ça en campagne, avec un registre scellé à la version que chacun a lue.',
      features: [
        {
          title: 'Côté lecteur',
          text: 'Un compteur s’affiche sous le titre de la page. Il ouvre un bouton «&nbsp;J’ai lu&nbsp;», avec une attestation à cocher si l’auteur en a rédigé une. Un seul clic répond à toutes les campagnes en attente sur cette page.',
        },
        {
          title: 'Relances',
          text: 'Au choix de l’organisateur : 7 jours puis 1 jour avant l’échéance, puis tous les jours ou toutes les semaines en cas de retard. Envoyées entre 7&nbsp;h et 22&nbsp;h dans le fuseau horaire de la campagne, sous forme de commentaire Confluence qui ne mentionne que les personnes concernées.',
        },
        {
          title: 'Campagnes récurrentes',
          text: 'Chaque année, chaque semestre ou chaque trimestre, avec un registre propre à chaque tour.',
        },
        {
          title: 'Contrôle et traçabilité',
          text: 'Seuls les administrateurs Confluence et les groupes qu’ils désignent gèrent les campagnes. ReadSeal signale nommément chaque destinataire qui n’a pas accès à la page. Personne ne peut supprimer une campagne : la clôturer fige le registre.',
        },
        {
          title: 'Confidentialité',
          text: 'Tout tourne sur Atlassian. Aucun serveur externe, aucun email, aucun tracking.',
        },
        {
          title: 'Langues',
          text: 'Anglais, français, espagnol, allemand.',
        },
      ],
      facts: [
        { value: '1 clic', label: 'pour tout confirmer', detail: 'Toutes les campagnes en attente sur la page.' },
        { value: '7 h → 22 h', label: 'les relances', detail: 'Dans le fuseau horaire de la campagne.' },
        { value: '0', label: 'serveur externe', detail: 'Ni email, ni tracking.' },
        { value: '4', label: 'langues', detail: 'Anglais, français, espagnol, allemand.' },
      ],
      links: [{ label: 'OwlWorks sur l’Atlassian Marketplace', href: SITE.atlassianVendor, external: true }],
      aside: 'Le hibou a tout lu. Pour vos équipes, ReadSeal vérifie.',
    },

    thirdwatch: {
      id: 'thirdwatch',
      name: 'ThirdWatch',
      kind: 'SaaS · monitoring d’API',
      status: 'En ligne sur thirdwatch.app',
      statusTone: 'live',
      tagline: 'Le monitoring d’API qui gère l’authentification à votre place.',
      shout: 'Il veille. Vous dormez.',
      pitch:
        'Vos API sont protégées par OAuth2 ou JWT&nbsp;? ThirdWatch rafraîchit et renouvelle les tokens automatiquement, importe votre spec OpenAPI et teste des scénarios complets. Il surveille ce que les autres outils ne savent pas surveiller.',
      features: [
        { title: 'Authentification gérée', text: 'Tokens OAuth2 et JWT rafraîchis et renouvelés automatiquement. Vous donnez les identifiants une fois.' },
        { title: 'Import OpenAPI', text: 'Une spec Swagger ou OpenAPI (v2 et v3), et tous les moniteurs sont générés en un clic.' },
        { title: 'Scénarios multi-étapes', text: 'Enchaînez les appels : login → create → read → delete, de bout en bout.' },
        { title: 'Alertes', text: 'Par email, Slack, Discord et webhooks.' },
        { title: 'Et le reste', text: 'Détection d’anomalies, dashboard temps réel, multi-organisations.' },
      ],
      facts: [
        { value: 'OAuth2 · JWT', label: 'tokens renouvelés tout seuls' },
        { value: 'v2 · v3', label: 'OpenAPI / Swagger importés' },
        { value: '14 jours', label: 'd’essai gratuit, sans carte bancaire' },
      ],
      stack: ['Next.js', 'Fastify', 'PostgreSQL', 'Redis / Bull', 'Prisma'],
      cta: { label: 'Essayer 14 jours gratuitement', href: 'https://thirdwatch.app/fr', external: true },
      aside: 'Un token qui expire à 3&nbsp;h du matin ne devrait réveiller personne.',
    },
  },

  tinyLegionExtras: {
    ranks: ['Piquiers', 'Pistoliers', 'Mitrailleurs', 'Titans', 'Golems de cristal', 'Démiurges'],
    powers: ['Volée', 'Foudre', 'Poudre noire', 'Catapulte'],
    bosses: ['Nécromancien', 'Dragon', 'Kraken'],
    modes: [
      { title: 'Campagne', text: 'Un archipel sans fin, île après île, 10 niveaux par île.' },
      { title: 'Vague infinie', text: 'Combien de vagues tiendras-tu&nbsp;?' },
    ],
    screenshotsAlt: {
      '01-bataille': 'Tiny Legion : la légion bleue fonce dans une horde de centaines d’ennemis sur une route au-dessus de l’océan',
      '02-evolution': 'Tiny Legion : bannière «&nbsp;Évolution&nbsp;!&nbsp;», les soldats fusionnent en Pistoliers',
      '06-boss': 'Tiny Legion : la légion affronte le Nécromancien et sa marée de squelettes',
      '07-archipel': 'Tiny Legion : la carte de campagne, une île désertique reliée par un pont à une île enneigée',
    },
    videoLabel: 'Extrait de jeu de Tiny Legion, sans son',
    gateHint: 'Faites passer la légion par la porte',
    mergeHint: '10 soldats → 1 soldat plus fort',
  },

  readsealExtras: {
    policyTitle: 'Politique de sécurité de l’information',
    policyParagraphs: [
      'Les appareils, comptes et réseaux de l’entreprise vous sont confiés pour travailler. Cette page dit ce qui est permis, ce qui ne l’est pas, et ce qui est surveillé.',
      'Verrouillez votre session dès que vous quittez votre poste. Un écran ouvert dans un open space est une invitation.',
      'N’installez que des logiciels du catalogue approuvé. Pour le reste, demandez : la réponse est souvent oui, et elle est rapide.',
      'Sur un réseau public, passez par le VPN de l’entreprise. Le Wi-Fi du café est très sympathique, mais il écoute.',
      'Ne partagez jamais votre compte, même avec un collègue, même avec un manager, même «&nbsp;juste cinq minutes&nbsp;».',
      'Signalez tout incident sans attendre. Personne ne vous reprochera d’avoir prévenu trop tôt.',
    ],
    counterLabel: (n, total) => `${n}/${total} confirmé${n > 1 ? 's' : ''} · v3`,
    attestation: 'J’ai lu cette politique et je m’engage à la respecter.',
    button: 'J’ai lu',
    sealed: 'Scellé · version 3',
    register: {
      title: 'Registre — revue annuelle',
      columns: ['Personne', 'Statut', 'Version', 'Confirmé le'],
      frozen: 'Campagne clôturée : registre figé',
      rows: [
        { who: 'Vous', status: 'confirmed' },
        { who: 'Équipe produit', status: 'confirmed' },
        { who: 'Équipe support', status: 'pending' },
        { who: 'Prestataire externe', status: 'no-access' },
      ],
    },
    reminders: ['J−7', 'J−1', 'J+1', 'J+2', 'J+3'],
    screenshotsAlt: {
      confirm: 'ReadSeal : le compteur «&nbsp;0/5 confirmed&nbsp;» sous le titre ouvre l’attestation et le bouton «&nbsp;I have read it&nbsp;»',
      register: 'ReadSeal : le registre de preuve, avec le statut et la version confirmée par personne',
    },
    statusNote: 'Captures de la version actuelle, en anglais. L’app est aussi en français, en espagnol et en allemand.',
  },

  thirdwatchExtras: {
    uptimeLabel: 'Disponibilité, en direct (démo)',
    tokenLabel: 'Token d’accès',
    tokenRefreshed: 'Renouvelé automatiquement',
    scenario: ['POST /login', 'POST /orders', 'GET /orders/:id', 'DELETE /orders/:id'],
    alertChannels: ['Email', 'Slack', 'Discord', 'Webhooks'],
    trial: '14 jours d’essai gratuit, sans carte bancaire.',
  },

  openSource: {
    kicker: 'Open source',
    title: 'L’établi est ouvert.',
    text: 'Les outils publiés sur GitHub, quand ils méritent de sortir du disque dur.',
    repos: {
      Verrou: {
        name: 'Verrou',
        pitch: 'Un coffre-fort chiffré, post-quantique, qui ne touche jamais au réseau.',
        detail:
          'Codes 2FA, seed phrases, identifiants et notes sécurisées, sur votre bureau, hors ligne. Toute la crypto est en Rust, les exports sont protégés par un échange de clés hybride X25519 + ML-KEM-1024.',
        stack: ['Rust', 'Tauri 2', 'SolidJS'],
        verb: 'verrouiller',
      },
      atelier: {
        name: 'atelier',
        pitch: 'Un orchestrateur macOS natif pour faire travailler plusieurs agents Claude Code en parallèle.',
        detail:
          'Chaque agent travaille dans son propre git worktree, chaque action sensible passe par une boîte d’approbation, et le coût s’affiche en direct. En alpha, sous licence MIT.',
        stack: ['Swift', 'macOS'],
        verb: 'orchestrer',
      },
      OctopusFTP: {
        name: 'OctopusFTP',
        pitch: 'Un téléchargeur FTP/FTPS multi-connexions, avec huit bras de plus que nécessaire.',
        detail:
          'Jusqu’à 16 connexions en parallèle, limitation de débit, graphes de bande passante et vérification d’intégrité SHA-256 à l’arrivée.',
        stack: ['Python'],
        verb: 'télécharger',
      },
    },
    starsLabel: (n) => `${n} étoile${n > 1 ? 's' : ''} sur GitHub`,
    profile: { label: 'Tout voir sur GitHub', href: SITE.github, external: true },
  },

  contact: {
    kicker: 'Contact',
    title: 'Un SaaS, une app, une idée à 3&nbsp;h du matin&nbsp;?',
    text: 'Une question sur un produit, un bug, une idée d’outil : écrivez au studio. Chaque message est lu, et reçoit une réponse.',
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    availability: 'Studio basé en France.',
  },

  footer: {
    line: `© ${SITE.year} OwlWorks SASU`,
    legal: { label: 'Mentions légales', href: SITE.paths.legal },
    tinyLegionPrivacy: { label: 'Confidentialité Tiny Legion', href: SITE.paths.tinyLegionPrivacy },
    noTracking: 'Ce site ne dépose aucun cookie et ne vous suit pas.',
    madeBy: 'Conçu et codé à la main, sans template.',
    backToTop: 'Remonter',
  },

  easterEgg: {
    console: 'Hou hou. Vous lisez la console ? Alors on devrait parler.',
    hoot: 'Hou hou.',
  },

  notFound: {
    kicker: 'Erreur 404',
    title: 'Le hibou a regardé partout.',
    text: 'Cette page n’existe pas, ou plus. Même avec une vision nocturne, rien à signaler à cette adresse.',
    back: 'Retour à l’accueil',
  },

  ui: {
    storeSoon: 'bientôt',
    storesLabel: 'Télécharger Tiny Legion',
    source: 'Code source',
    soon: 'Bientôt',
    beta: 'Bêta ouverte',
    live: 'En ligne',
  },

  legal: {
    back: 'Retour au site',
    updated: 'Dernière mise à jour : 10 octobre 2026',
    navLabel: 'Liens légaux',
    langNav: 'Langue',
    mentions: {
      title: 'Mentions légales',
      description: 'Mentions légales du site owlworks.dev, édité par OwlWorks SASU.',
      kicker: 'OwlWorks · Informations légales',
      sections: [
        {
          title: 'Éditeur du site',
          body: [
            `<strong>OwlWorks</strong>, société par actions simplifiée unipersonnelle (SASU) au capital de ${P.CAPITAL}.`,
            `Siège social : ${P.ADRESSE}.`,
            `Immatriculation : ${P.SIREN}.`,
            `TVA intracommunautaire : ${P.TVA}.`,
            `Contact : <a href="mailto:${P.CONTACT_EMAIL}">${P.CONTACT_EMAIL}</a>.`,
          ],
        },
        {
          title: 'Directeur de la publication',
          body: ['Arnault Pascual, président d’OwlWorks.'],
        },
        {
          title: 'Hébergement',
          body: [`${P.HEBERGEUR_NOM}`, `${P.HEBERGEUR_ADRESSE}`, `Téléphone : ${P.HEBERGEUR_TEL}`],
        },
        {
          title: 'Données personnelles et cookies',
          body: [
            'Ce site ne dépose aucun cookie, n’utilise aucun outil de mesure d’audience et ne collecte aucune donnée personnelle. Les polices et les images sont servies depuis le site lui-même.',
            'Si vous écrivez à OwlWorks par email, votre message et votre adresse ne servent qu’à vous répondre.',
            'Les applications d’OwlWorks ont chacune leur propre politique de confidentialité.',
          ],
        },
        {
          title: 'Propriété intellectuelle',
          body: [
            'Les textes, le logo OwlWorks, les visuels et le code de ce site appartiennent à OwlWorks, sauf mention contraire. Les visuels de Tiny Legion et de ReadSeal sont issus des applications elles-mêmes.',
            'Les polices Oxanium, Saira, JetBrains Mono, Lilita One et Red Hat Display sont distribuées sous licence SIL Open Font License 1.1.',
            'App Store est une marque d’Apple Inc. Google Play est une marque de Google LLC. Atlassian, Confluence et Atlassian Marketplace sont des marques d’Atlassian. Ces marques sont citées à titre purement descriptif.',
          ],
        },
      ],
    },
    tinyLegionPrivacy: {
      title: 'Tiny Legion — Politique de confidentialité',
      description: 'Politique de confidentialité du jeu mobile Tiny Legion (Android, iPhone, iPad), édité par OwlWorks.',
      kicker: 'Tiny Legion · Confidentialité',
      h1: 'Politique de confidentialité',
      updated: 'Dernière mise à jour : 10 octobre 2026',
      md: TL_PRIVACY_FR,
    },
  },
};


/* ------------------------------------------------------------------ English */

export const COPY_PERCHOIR_EN: PerchoirCopy = {
  a11y: {
    plan: 'The OwlWorks owl drawn as a dimensioned plan: two eyes 248 in diameter, an eight-tooth gear, a perch shaped like a circuit trace.',
    cyanOn: 'Back to the paper print',
    cyanOff: 'Switch to a cyanotype print',
    legionLive: { one: 'Legion: {n} unit', other: 'Legion: {n} units' },
    runner:
      'Game scene: the legion runs along the road. Mouse, finger or left and right arrows to steer it; it grows through the “+N” gates.',
  },

  nav: {
    label: 'Sections of the sheet',
    refs: ['A1–A4', 'U1', 'U2', 'U3', 'J1–J3', 'J0'],
  },

  tools: {
    cyan: 'Cyanotype',
    cyanKey: 'B',
  },

  probe: { x: 'X', y: 'Y' },

  hero: {
    plate: 'Sh. 1',
    fig: 'Fig. 1 — The owl, front view. Dimensions in px of the source drawing.',
    notes: {
      axis: 'Axis of symmetry x 672',
      between: '264',
      dia: 'Ø 248',
      r124: 'R124',
      r99: 'R99',
      teeth: '8 teeth',
      gear: 'R65 · R52',
      ear: '27.4°',
      via: 'Via Ø 63',
      perch: '737',
    },
    titleBlock: [
      { k: 'Project', v: 'OwlWorks' },
      { k: 'Sheet', v: '1/1' },
      { k: 'Scale', v: '1:1' },
      { k: 'Design office', v: 'OwlWorks' },
      { k: 'Rev.', v: 'A' },
    ],
    stateLabel: 'Status',
    skillsLabel: 'Pinout',
  },

  studio: {
    sheet: 'Bill of materials',
    chip: { ref: 'U0', name: 'OwlWorks', sub: 'SASU · independent studio', vcc: 'VCC', pinsLabel: 'Languages' },
    bom: {
      caption: 'Studio bill of materials: four sub-assemblies, one manufacturer.',
      columns: ['Ref.', 'Designation', 'Value', 'Note'],
      refs: ['A1', 'A2', 'A3', 'A4'],
      values: ['Kotlin · Swift', 'TypeScript', 'Swift · Rust · KMP', 'GitHub · MIT'],
      footer: 'Sole supplier',
      supplier: 'OwlWorks SASU',
    },
  },

  intro: { sheet: 'Active components', refs: 'U1 · U2 · U3' },

  comp: {
    note: 'Note',
  },

  tl: {
    ref: 'U2',
    part: 'TL-RUN-01',
    sheet: 'Component U2 · crowd runner',
    road: 'Road = trace',
    gate: '“+N” gate = component',
    unit: 'Unit Ø 14 · rank = rings',
    powerOn: 'Power on',
    powerOff: 'Back to the plan',
    boost: '+20',
    merge: 'Merge',
    legion: 'Legion',
    steer: '← → arrows to steer',
    extrasTitle: 'Data sheet',
    extras: { ranks: 'Ranks', powers: 'Powers', bosses: 'Bosses', modes: 'Modes' },
    photos: 'Attached screenshots',
    photoRef: (n: number) => `Photo ${n}`,
    videoRef: 'Clip',
    booting: 'Powering on…',
    screen: 'LCD screen · real game',
    frameTitle: 'Tiny Legion, live game (no sound)',
    game: {
      sheet: 'The game takes over',
      boost: '+20 gate',
      legion: 'Your legion',
      steer: 'Steer your legion: mouse, finger or ← →',
      evolved: 'Evolution! Your soldiers become {rank}.',
    },
  },

  rs: {
    ref: 'U3',
    sheet: 'Component U3 · policy on the drawing board',
    byline: 'Security team',
    ruler: 'Read',
    qc: 'Inspection',
    qcSub: 'Awaiting reading',
    status: { confirmed: 'Confirmed', pending: 'Pending', 'no-access': 'No access' },
    dates: ['just now', 'D−2', '—', '—'],
    frozenStamp: 'Frozen',
    remindersTitle: 'Reminders',
    due: 'Due date',
    featuresTitle: 'Specifications',
    plates: ['Pl. U3-a', 'Pl. U3-b'],
  },

  tw: {
    ref: 'U1',
    sheet: 'Component U1 · test bench',
    scope: 'CH1 · uptime',
    scopeUnit: 'ms',
    up: 'UP',
    timebase: '1 s/div',
    probe: 'Probe',
    chip: 'NE555',
    chipRole: 'Token timer',
    pins: ['GND', 'TRIG', 'OUT', 'RESET', 'CTRL', 'THR', 'DIS', 'VCC'],
    ttl: 'TTL',
    valid: 'Valid',
    expired: 'Expired',
    scenarioTitle: 'Scenario · test points',
    tp: (n: number) => `TP${n}`,
    ok: 'OK',
    channelsTitle: 'Alert outputs',
    stackTitle: 'Stack',
    featuresTitle: 'Specifications',
  },

  os: {
    sheet: 'Connectors',
    refs: { Verrou: 'J1', atelier: 'J2', OctopusFTP: 'J3' },
    verrou: { parts: ['Shackle', 'Body', 'Cylinder', 'Bolt'], locked: 'Locked' },
    atelier: { lanes: ['wt/1', 'wt/2', 'wt/3', 'wt/4'], main: 'main', gate: 'Approval' },
    octopus: { fan: '×8', src: 'FTP' },
  },

  contact: {
    ref: 'J0',
    sheet: 'Connector J0 · end of trace',
    plug: 'Plug in here',
  },

  footer: {
    titleBlock: [
      { k: 'Title', v: 'The Perch — the motherboard' },
      { k: 'Sheet', v: '1/1' },
      { k: 'Scale', v: '1:1' },
      { k: 'Design office', v: 'OwlWorks' },
      { k: 'Format', v: 'One page' },
      { k: 'No.', v: 'OW-01' },
    ],
    revisions: {
      caption: 'Revisions',
      columns: ['Rev.', 'Date', 'Description', 'By'],
      rows: [['A', '2026-10-10', 'First edition of the sheet', 'OW']],
    },
    cyanHint: 'B key: cyanotype print.',
  },
};

export const en: SiteContent = {
  locale: 'en',
  ogLocale: 'en_US',
  paths: { home: SITE.paths.homeEn, legal: SITE.paths.legalEn, tinyLegionPrivacy: SITE.paths.tinyLegionPrivacyEn },
  other: { locale: 'fr', short: 'FR', label: 'Français', switchTo: 'Lire en français' },
  perchoir: COPY_PERCHOIR_EN,

  meta: {
    title: 'OwlWorks — independent studio · SaaS, mobile apps, developer tools',
    description:
      'OwlWorks is an independent studio that designs and builds its own SaaS, mobile apps and developer tools: ThirdWatch, Tiny Legion, ReadSeal, and open-source projects.',
    ogAlt: 'The OwlWorks owl, perched on a printed-circuit trace',
  },

  a11y: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    newTab: '(new tab)',
    logo: 'OwlWorks, home',
  },

  nav: [
    { label: 'Studio', href: '#studio' },
    { label: 'ThirdWatch', href: '#thirdwatch' },
    { label: 'Tiny Legion', href: '#tiny-legion' },
    { label: 'ReadSeal', href: '#readseal' },
    { label: 'Open source', href: '#open-source' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    eyebrow: 'OwlWorks — independent studio',
    title: 'Apps that keep one eye open.',
    beats: ['Apps that', 'keep one eye', 'open.'],
    mark: 'eye',
    lede: 'SaaS products, mobile apps and developer tools. And whatever can help others goes open source.',
    skills: ['Android', 'Kotlin', 'Swift', 'TypeScript', 'Rust'],
    scrollHint: 'Scroll down, the owl’s eyes will follow you',
    watch: 'On watch: products in production, code in the open, 0 pointless meetings.',
  },

  studio: {
    title: 'Home-grown products.',
    text: 'OwlWorks is an independent French studio that designs, builds and maintains its own products: SaaS, mobile apps and developer tools. From the phone to the browser, all the way to the desktop.',
    offers: [
      { title: 'Mobile apps', text: 'Native Android first, iOS in Swift when it is needed. Fast, optimised apps.' },
      { title: 'SaaS', text: 'The whole product, front and back end in TypeScript, down to billing and monitoring.' },
      { title: 'Desktop software', text: 'Native Swift, Rust and Kotlin Multiplatform: developer tools and software born from a real need.' },
      { title: 'Open source', text: 'Code that can help others is published on GitHub, with its documentation and its licence.' },
    ],
    languages: ['Kotlin', 'Swift', 'TypeScript', 'Rust'],
  },

  projectsIntro: {
    kicker: 'Products',
    title: 'What the owl is watching right now.',
    text: '',
  },

  projects: {
    tinyLegion: {
      id: 'tiny-legion',
      name: 'Tiny Legion',
      kind: 'Mobile game',
      status: 'Live on Google Play, coming soon to the App Store',
      statusTone: 'live',
      tagline: 'Merge. Evolve. Crush the horde.',
      shout: 'Crush the horde.',
      pitch:
        'A crowd runner. Your army races along a road above the ocean, goes through “+N” gates to grow, and crushes hordes of hundreds of enemies.',
      features: [
        { title: 'Merge', text: '10 soldiers become 1 stronger soldier. 21 ranks to unlock, from Pikemen to Demiurges.' },
        { title: 'Dodge', text: 'Traps on the road: left, right, on instinct.' },
        { title: 'Combine', text: 'Power cards to combine: Volley, Lightning, Black Powder, Catapult…' },
        { title: 'Face', text: '7 bosses, from the Necromancer to the Kraken, by way of the Dragon.' },
      ],
      facts: [
        { value: '10 → 1', label: 'the merge', detail: '10 soldiers become 1 stronger soldier.' },
        { value: '21', label: 'ranks', detail: 'From Pikemen to Demiurges.' },
        { value: '7', label: 'bosses', detail: 'Necromancer, Dragon, Kraken…' },
        { value: '∞', label: 'islands', detail: 'An endless archipelago campaign, 10 levels per island.' },
      ],
      links: [{ label: 'Tiny Legion privacy policy', href: SITE.paths.tinyLegionPrivacyEn }],
      stores: [
        { name: 'Google Play', href: SITE.stores.googlePlay },
        { name: 'App Store', href: SITE.stores.appStore },
      ],
      aside: 'The hordes grow bigger after midnight. The owl checked.',
    },

    readseal: {
      id: 'readseal',
      name: 'ReadSeal',
      kind: 'Confluence app',
      status: 'Coming soon to the Atlassian Marketplace',
      statusTone: 'soon',
      tagline: 'Read. Confirmed. Sealed.',
      shout: 'Published does not mean read.',
      pitch:
        'Compliance policies, security rules, onboarding guides: some pages must be <em>read</em>, not just published. And you need to be able to prove it. ReadSeal turns that into a campaign, with a record sealed to the version each person read.',
      features: [
        {
          title: 'For readers',
          text: 'A counter shows under the page title. It opens an “I have read it” button, with a statement to tick if the author wrote one. One click answers every pending campaign on that page.',
        },
        {
          title: 'Reminders',
          text: 'The organiser chooses: 7 days then 1 day before the deadline, then daily or weekly when overdue. Sent between 7 a.m. and 10 p.m. in the campaign’s time zone, as a Confluence comment that only mentions the people concerned.',
        },
        {
          title: 'Recurring campaigns',
          text: 'Every year, half-year or quarter, with a separate record for each round.',
        },
        {
          title: 'Control and traceability',
          text: 'Only Confluence administrators and the groups they name manage campaigns. ReadSeal names every recipient who cannot access the page. Nobody can delete a campaign: closing it freezes the record.',
        },
        {
          title: 'Privacy',
          text: 'Everything runs on Atlassian. No external server, no email, no tracking.',
        },
        {
          title: 'Languages',
          text: 'English, French, Spanish, German.',
        },
      ],
      facts: [
        { value: '1 click', label: 'to confirm everything', detail: 'Every pending campaign on the page.' },
        { value: '7am → 10pm', label: 'reminders', detail: 'In the campaign’s time zone.' },
        { value: '0', label: 'external server', detail: 'No email, no tracking.' },
        { value: '4', label: 'languages', detail: 'English, French, Spanish, German.' },
      ],
      links: [{ label: 'OwlWorks on the Atlassian Marketplace', href: SITE.atlassianVendor, external: true }],
      aside: 'The owl has read everything. For your teams, ReadSeal checks.',
    },

    thirdwatch: {
      id: 'thirdwatch',
      name: 'ThirdWatch',
      kind: 'SaaS · API monitoring',
      status: 'Live at thirdwatch.app',
      statusTone: 'live',
      tagline: 'API monitoring that handles auth for you.',
      shout: 'It keeps watch. You sleep.',
      pitch:
        'Your APIs sit behind OAuth2 or JWT? ThirdWatch refreshes and renews tokens automatically, imports your OpenAPI spec and tests complete scenarios. It monitors what other tools can’t.',
      features: [
        { title: 'Managed authentication', text: 'OAuth2 and JWT tokens refreshed and renewed automatically. You enter the credentials once.' },
        { title: 'OpenAPI import', text: 'A Swagger or OpenAPI spec (v2 and v3), and every monitor is generated in one click.' },
        { title: 'Multi-step scenarios', text: 'Chain calls end to end: login → create → read → delete.' },
        { title: 'Alerts', text: 'By email, Slack, Discord and webhooks.' },
        { title: 'And the rest', text: 'Anomaly detection, real-time dashboard, multiple organisations.' },
      ],
      facts: [
        { value: 'OAuth2 · JWT', label: 'tokens renewed on their own' },
        { value: 'v2 · v3', label: 'OpenAPI / Swagger imported' },
        { value: '14 days', label: 'free trial, no credit card' },
      ],
      stack: ['Next.js', 'Fastify', 'PostgreSQL', 'Redis / Bull', 'Prisma'],
      cta: { label: 'Start a 14-day free trial', href: 'https://thirdwatch.app', external: true },
      aside: 'A token expiring at 3&nbsp;a.m. should not wake anyone up.',
    },
  },

  tinyLegionExtras: {
    ranks: ['Pikemen', 'Pistoleers', 'Gunners', 'Titans', 'Crystal Golems', 'Demiurges'],
    powers: ['Volley', 'Lightning', 'Black Powder', 'Catapult'],
    bosses: ['Necromancer', 'Dragon', 'Kraken'],
    modes: [
      { title: 'Campaign', text: 'An endless archipelago, island after island, 10 levels per island.' },
      { title: 'Endless Wave', text: 'How many waves can you hold?' },
    ],
    screenshotsAlt: {
      '01-bataille': 'Tiny Legion: the blue legion charges into a horde of hundreds of enemies on a road above the ocean',
      '02-evolution': 'Tiny Legion: the “EVOLUTION!” banner, the soldiers merge into Pistoleers',
      '06-boss': 'Tiny Legion: the legion faces the Necromancer and his tide of skeletons',
      '07-archipel': 'Tiny Legion: the campaign map, a desert island linked by a bridge to a snowy island',
    },
    videoLabel: 'Tiny Legion gameplay clip, no sound',
    gateHint: 'Send the legion through the gate',
    mergeHint: '10 soldiers → 1 stronger soldier',
  },

  readsealExtras: {
    policyTitle: 'Information security policy',
    policyParagraphs: [
      'The company’s devices, accounts and networks are entrusted to you for work. This page says what is allowed, what is not, and what is monitored.',
      'Lock your session as soon as you leave your desk. An open screen in an open-plan office is an invitation.',
      'Only install software from the approved catalogue. For anything else, ask: the answer is often yes, and it comes quickly.',
      'On a public network, go through the company VPN. The café Wi-Fi is very friendly, but it listens.',
      'Never share your account: not with a colleague, not with a manager, not even “just for five minutes”.',
      'Report any incident right away. Nobody will blame you for warning too early.',
    ],
    counterLabel: (n, total) => `${n}/${total} confirmed · v3`,
    attestation: 'I have read this policy and I agree to follow it.',
    button: 'I have read it',
    sealed: 'Sealed · version 3',
    register: {
      title: 'Record — annual review',
      columns: ['Person', 'Status', 'Version', 'Confirmed on'],
      frozen: 'Campaign closed: record frozen',
      rows: [
        { who: 'You', status: 'confirmed' },
        { who: 'Product team', status: 'confirmed' },
        { who: 'Support team', status: 'pending' },
        { who: 'External contractor', status: 'no-access' },
      ],
    },
    reminders: ['D−7', 'D−1', 'D+1', 'D+2', 'D+3'],
    screenshotsAlt: {
      confirm: 'ReadSeal: the “0/5 confirmed” counter under the title opens the statement and the “I have read it” button',
      register: 'ReadSeal: the evidence record, with each person’s status and confirmed version',
    },
    statusNote: 'Screenshots of the current version. The app also speaks French, Spanish and German.',
  },

  thirdwatchExtras: {
    uptimeLabel: 'Uptime, live (demo)',
    tokenLabel: 'Access token',
    tokenRefreshed: 'Renewed automatically',
    scenario: ['POST /login', 'POST /orders', 'GET /orders/:id', 'DELETE /orders/:id'],
    alertChannels: ['Email', 'Slack', 'Discord', 'Webhooks'],
    trial: '14-day free trial, no credit card required.',
  },

  openSource: {
    kicker: 'Open source',
    title: 'The workbench is open.',
    text: 'Tools published on GitHub, once they deserve to leave the hard drive.',
    repos: {
      Verrou: {
        name: 'Verrou',
        pitch: 'An encrypted, post-quantum vault that never touches the network.',
        detail:
          '2FA codes, seed phrases, credentials and secure notes, on your desktop, offline. All the crypto is in Rust; exports are protected by a hybrid X25519 + ML-KEM-1024 key exchange.',
        stack: ['Rust', 'Tauri 2', 'SolidJS'],
        verb: 'lock',
      },
      atelier: {
        name: 'atelier',
        pitch: 'A native macOS orchestrator that puts several Claude Code agents to work in parallel.',
        detail:
          'Each agent works in its own git worktree, every sensitive action goes through an approval inbox, and costs show live. In alpha, MIT licensed.',
        stack: ['Swift', 'macOS'],
        verb: 'orchestrate',
      },
      OctopusFTP: {
        name: 'OctopusFTP',
        pitch: 'A multi-connection FTP/FTPS downloader, with eight more arms than strictly necessary.',
        detail: 'Up to 16 parallel connections, speed limiting, bandwidth graphs and SHA-256 integrity checks on arrival.',
        stack: ['Python'],
        verb: 'download',
      },
    },
    starsLabel: (n) => `${n} star${n === 1 ? '' : 's'} on GitHub`,
    profile: { label: 'See everything on GitHub', href: SITE.github, external: true },
  },

  contact: {
    kicker: 'Contact',
    title: 'A SaaS, an app, an idea at 3&nbsp;a.m.?',
    text: 'A question about a product, a bug, an idea for a tool: write to the studio. Every message is read and answered.',
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    availability: 'Studio based in France.',
  },

  footer: {
    line: `© ${SITE.year} OwlWorks SASU`,
    legal: { label: 'Legal notice', href: SITE.paths.legalEn },
    tinyLegionPrivacy: { label: 'Tiny Legion privacy', href: SITE.paths.tinyLegionPrivacyEn },
    noTracking: 'This site sets no cookies and does not track you.',
    madeBy: 'Designed and coded by hand, no template.',
    backToTop: 'Back to top',
  },

  easterEgg: {
    console: 'Hoo hoo. Reading the console? Then we should talk.',
    hoot: 'Hoo hoo.',
  },

  notFound: {
    kicker: 'Error 404',
    title: 'The owl looked everywhere.',
    text: 'This page does not exist, or no longer does. Even with night vision, nothing to report at this address.',
    back: 'Back to home',
  },

  ui: {
    storeSoon: 'coming soon',
    storesLabel: 'Get Tiny Legion',
    source: 'Source code',
    soon: 'Soon',
    beta: 'Open beta',
    live: 'Live',
  },

  legal: {
    back: 'Back to the site',
    updated: 'Last updated: October 10, 2026',
    navLabel: 'Legal links',
    langNav: 'Language',
    mentions: {
      title: 'Legal notice',
      description: 'Legal notice of owlworks.dev, published by OwlWorks SASU.',
      kicker: 'OwlWorks · Legal information',
      note: 'This English version is provided for convenience. The French version (mentions légales) is the reference.',
      sections: [
        {
          title: 'Publisher',
          body: [
            `<strong>OwlWorks</strong>, a French simplified joint-stock company with a single shareholder (SASU), share capital ${P.CAPITAL}.`,
            `Registered office: ${P.ADRESSE}, France.`,
            `Registration: ${P.SIREN}.`,
            `EU VAT number: ${P.TVA}.`,
            `Contact: <a href="mailto:${P.CONTACT_EMAIL}">${P.CONTACT_EMAIL}</a>.`,
          ],
        },
        {
          title: 'Publication director',
          body: ['Arnault Pascual, president of OwlWorks.'],
        },
        {
          title: 'Hosting',
          body: [`${P.HEBERGEUR_NOM}`, `${P.HEBERGEUR_ADRESSE.replace('États-Unis', 'United States')}`, `Phone: ${P.HEBERGEUR_TEL}`],
        },
        {
          title: 'Personal data and cookies',
          body: [
            'This site sets no cookies, uses no audience measurement tool and collects no personal data. Fonts and images are served from the site itself.',
            'If you email OwlWorks, your message and your address are only used to reply to you.',
            'Each OwlWorks app has its own privacy policy.',
          ],
        },
        {
          title: 'Intellectual property',
          body: [
            'The texts, the OwlWorks logo, the visuals and the code of this site belong to OwlWorks unless stated otherwise. The Tiny Legion and ReadSeal visuals come from the apps themselves.',
            'The Oxanium, Saira, JetBrains Mono, Lilita One and Red Hat Display fonts are distributed under the SIL Open Font License 1.1.',
            'App Store is a trademark of Apple Inc. Google Play is a trademark of Google LLC. Atlassian, Confluence and Atlassian Marketplace are trademarks of Atlassian. These marks are mentioned for descriptive purposes only.',
          ],
        },
      ],
    },
    tinyLegionPrivacy: {
      title: 'Tiny Legion Privacy Policy',
      description: 'Privacy policy of the Tiny Legion mobile game (Android, iPhone, iPad), published by OwlWorks.',
      kicker: 'Tiny Legion · Privacy',
      h1: 'Privacy policy',
      updated: 'Last updated: October 10, 2026',
      md: TL_PRIVACY_EN,
    },
  },
};

export const locales: Record<Locale, SiteContent> = { fr, en };

export function getContent(locale: Locale = 'fr'): SiteContent {
  return locales[locale] ?? fr;
}

export default fr;
