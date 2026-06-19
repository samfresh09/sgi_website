// Single source of truth for company info — used across UI, SEO meta and JSON-LD.

export const SITE = {
  name: "SGI",
  legalName: "SGI — Société d'Expertise Comptable et Informatique",
  shortDesc:
    "Cabinet d'expertise comptable et solutions informatiques à Lomé, Togo.",
  url: "https://sgi-tg.com",
  locale: "fr_FR",
  lang: "fr",
  email: "contact@sgi-tg.com",
  phone: "+228 91 61 38 30",
  phoneRaw: "+22891613830",
  phoneAlt: "+228 92 10 46 31",
  phoneAltRaw: "+22892104631",
  whatsapp: "22891613830",
  address: {
    locality: "Lomé",
    region: "Maritime",
    country: "Togo",
    countryCode: "TG",
    full: "Lomé, Togo",
  },
  hours: "Lun – Ven : 08h00 – 18h00",
  founded: "2014",
  logo: "/logo-sgi.png",
  logoWhite: "/logo-sgi-blanc.png",
  ogImage: "/og-image.jpg",
  social: {
    linkedin: "https://www.linkedin.com/company/sgi-togo",
    facebook: "https://www.facebook.com/sgi.togo",
  },
} as const;

export const STATS = [
  { value: "10", suffix: "+", label: "Années d'expérience" },
  { value: "200", suffix: "+", label: "Clients accompagnés" },
  { value: "5", suffix: "", label: "Pôles d'expertise" },
  { value: "100", suffix: "%", label: "Engagement qualité" },
] as const;

export const VALUES = [
  {
    icon: "ShieldCheck",
    title: "Rigueur",
    desc: "Précision et excellence technique dans chaque mission qui nous est confiée.",
  },
  {
    icon: "Lock",
    title: "Confidentialité",
    desc: "Protection absolue de vos données et secret professionnel garanti.",
  },
  {
    icon: "Users",
    title: "Proximité",
    desc: "Un accompagnement humain, disponible et réellement personnalisé.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation",
    desc: "Des outils modernes et des méthodes adaptées à votre réalité.",
  },
  {
    icon: "HeartHandshake",
    title: "Professionnalisme",
    desc: "Engagement, éthique et sens du résultat au quotidien.",
  },
] as const;

export const WHY = [
  {
    icon: "Layers",
    title: "Expertise pluridisciplinaire",
    desc: "Comptabilité, fiscalité, RH et informatique réunis dans un seul cabinet.",
  },
  {
    icon: "UserCheck",
    title: "Accompagnement sur mesure",
    desc: "Des solutions adaptées à la taille et au secteur de votre entreprise.",
  },
  {
    icon: "BookOpenCheck",
    title: "Maîtrise réglementaire",
    desc: "Conformité aux normes OHADA, fiscales et sociales en vigueur au Togo.",
  },
  {
    icon: "Target",
    title: "Orientation résultats",
    desc: "Un suivi rigoureux pensé pour la performance de votre organisation.",
  },
  {
    icon: "Clock",
    title: "Réactivité",
    desc: "Des délais respectés et un interlocuteur dédié qui vous répond vite.",
  },
  {
    icon: "ShieldCheck",
    title: "Fiabilité & confidentialité",
    desc: "Sécurité de vos données et engagement éthique au cœur de notre pratique.",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Échange & diagnostic",
    desc: "Nous analysons vos besoins, vos contraintes et vos objectifs lors d'un premier rendez-vous gratuit.",
  },
  {
    step: "02",
    title: "Proposition sur mesure",
    desc: "Vous recevez une offre claire, détaillée et adaptée à votre situation et à votre budget.",
  },
  {
    step: "03",
    title: "Mise en œuvre",
    desc: "Notre équipe déploie les prestations avec méthode, dans le respect des délais convenus.",
  },
  {
    step: "04",
    title: "Suivi & conseil continu",
    desc: "Nous restons à vos côtés, avec un reporting régulier et des conseils proactifs.",
  },
] as const;
