// Service catalogue — drives the Services index, the dynamic /services/:slug pages,
// the home overview, the footer and the per-page SEO/JSON-LD.

export type Service = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  // <meta description> for the dedicated page (≤ 160 chars)
  metaDescription: string;
  intro: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  keywords: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "expertise-comptable",
    icon: "Calculator",
    title: "Expertise comptable",
    tagline: "Une comptabilité fiable, conforme et sereine.",
    metaDescription:
      "Tenue, révision comptable et conformité fiscale au Togo. SGI sécurise votre comptabilité selon le référentiel OHADA et vous libère du temps.",
    intro:
      "Confiez votre comptabilité à un cabinet rigoureux. Nous assurons la tenue, la révision et la fiabilisation de vos comptes dans le respect du référentiel OHADA, pour une gestion sécurisée et des décisions éclairées.",
    features: [
      "Tenue et révision comptable",
      "Établissement des états financiers (OHADA)",
      "Déclarations fiscales périodiques",
      "Assistance et conseil comptable",
      "Mise en place de procédures comptables",
    ],
    benefits: [
      { title: "Conformité garantie", desc: "Des comptes à jour et conformes aux normes en vigueur." },
      { title: "Vision claire", desc: "Des tableaux de bord pour piloter votre activité." },
      { title: "Gain de temps", desc: "Vous vous concentrez sur votre métier, pas sur la paperasse." },
    ],
    keywords: ["expertise comptable Togo", "comptabilité Lomé", "OHADA", "états financiers", "déclaration fiscale Togo"],
  },
  {
    slug: "gestion-sociale-rh",
    icon: "Users",
    title: "Gestion sociale & RH",
    tagline: "Votre paie et votre administration du personnel, sans faille.",
    metaDescription:
      "Gestion de la paie, déclarations sociales (CNSS) et administration du personnel au Togo. SGI gère votre social en toute conformité.",
    intro:
      "Externalisez votre gestion sociale en toute confiance. De l'élaboration des bulletins de paie aux déclarations sociales, nous sécurisons l'administration de votre personnel et vous évitons tout risque de non-conformité.",
    features: [
      "Élaboration des bulletins de paie",
      "Déclarations sociales (CNSS, etc.)",
      "Rédaction des contrats de travail",
      "Gestion administrative du personnel",
      "Conseil en droit social",
    ],
    benefits: [
      { title: "Zéro erreur de paie", desc: "Des salaires justes et des cotisations exactes, chaque mois." },
      { title: "Conformité sociale", desc: "Vous respectez vos obligations sans y penser." },
      { title: "Climat serein", desc: "Des collaborateurs rassurés par une gestion irréprochable." },
    ],
    keywords: ["gestion de la paie Togo", "déclaration CNSS", "ressources humaines Lomé", "contrat de travail Togo"],
  },
  {
    slug: "conseil-accompagnement",
    icon: "TrendingUp",
    title: "Conseil & accompagnement",
    tagline: "Un partenaire stratégique pour grandir sereinement.",
    metaDescription:
      "Conseil financier, optimisation et accompagnement du dirigeant au Togo. SGI vous épaule dans vos décisions et vos contrôles.",
    intro:
      "Au-delà des chiffres, nous éclairons vos décisions. Optimisation financière, accompagnement du dirigeant, assistance lors des contrôles : nous mettons notre expertise au service de votre croissance et de votre sérénité.",
    features: [
      "Optimisation financière et fiscale",
      "Accompagnement et conseil du dirigeant",
      "Élaboration de prévisionnels et budgets",
      "Assistance en cas de contrôle fiscal ou social",
      "Conseil à la création d'entreprise",
    ],
    benefits: [
      { title: "Décisions éclairées", desc: "Des analyses fiables pour choisir la bonne direction." },
      { title: "Rentabilité optimisée", desc: "Nous identifions les leviers d'économie et de performance." },
      { title: "Soutien en cas de contrôle", desc: "Vous n'êtes jamais seul face à l'administration." },
    ],
    keywords: ["conseil financier Togo", "accompagnement dirigeant", "contrôle fiscal Togo", "création entreprise Lomé"],
  },
  {
    slug: "informatique-digital",
    icon: "MonitorSmartphone",
    title: "Informatique & digital",
    tagline: "Digitalisez votre gestion, gagnez en efficacité.",
    metaDescription:
      "Solutions informatiques de gestion et accompagnement à la digitalisation au Togo. SGI modernise vos outils et vos processus.",
    intro:
      "La technologie au service de votre gestion. Nous déployons des solutions informatiques adaptées et vous accompagnons dans votre transformation digitale, pour automatiser vos tâches et fiabiliser vos données.",
    features: [
      "Solutions informatiques de gestion",
      "Accompagnement à la digitalisation",
      "Déploiement d'outils de gestion (ERP, paie, compta)",
      "Dématérialisation des documents",
      "Formation et support aux outils",
    ],
    benefits: [
      { title: "Processus automatisés", desc: "Moins de saisie manuelle, moins d'erreurs." },
      { title: "Données fiables", desc: "Une information centralisée, sécurisée et accessible." },
      { title: "Productivité accrue", desc: "Vos équipes se concentrent sur l'essentiel." },
    ],
    keywords: ["solution informatique gestion Togo", "digitalisation entreprise Lomé", "ERP Togo", "logiciel comptabilité"],
  },
  {
    slug: "formation",
    icon: "GraduationCap",
    title: "Formation",
    tagline: "Montez en compétence, durablement.",
    metaDescription:
      "Formations en comptabilité, fiscalité, outils informatiques et management au Togo. SGI renforce les compétences de vos équipes.",
    intro:
      "Des compétences renforcées pour des équipes plus performantes. Nous concevons des programmes de formation pratiques, animés par des experts, et adaptés aux besoins réels de votre organisation.",
    features: [
      "Formation en comptabilité et fiscalité",
      "Formation aux outils informatiques de gestion",
      "Renforcement des capacités managériales",
      "Formations sur mesure en entreprise",
      "Sessions inter et intra-entreprises",
    ],
    benefits: [
      { title: "Équipes autonomes", desc: "Vos collaborateurs maîtrisent leurs outils et leurs obligations." },
      { title: "Programmes concrets", desc: "Des cas pratiques directement applicables au quotidien." },
      { title: "Sur mesure", desc: "Un contenu calibré sur votre secteur et votre niveau." },
    ],
    keywords: ["formation comptabilité Togo", "formation fiscalité Lomé", "formation management entreprise"],
  },
];

export const getService = (slug?: string) =>
  SERVICES.find((s) => s.slug === slug);
