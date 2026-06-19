import { motion } from "framer-motion";
import { Target, Eye, Compass } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import CountUp from "@/components/CountUp";
import Reveal, { staggerParent } from "@/components/Reveal";
import { Icon } from "@/lib/icons";
import { SITE, STATS, VALUES } from "@/data/site";
import { breadcrumbLd, localBusinessLd } from "@/lib/jsonld";

const pillars = [
  {
    icon: Target,
    title: "Notre mission",
    text: "Fournir des prestations de qualité en expertise comptable, gestion sociale, conseil financier et solutions informatiques, en alliant rigueur technique et approche personnalisée.",
  },
  {
    icon: Eye,
    title: "Notre vision",
    text: "Être le partenaire de référence des entreprises de la sous-région dans leur croissance et leur transformation digitale.",
  },
  {
    icon: Compass,
    title: "Notre approche",
    text: "Un accompagnement humain et proactif, fondé sur l'écoute, la confidentialité et un suivi rigoureux orienté résultats.",
  },
];

export default function About() {
  const breadcrumb = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
  ];
  return (
    <>
      <Seo
        title="À propos — Cabinet d'expertise comptable & informatique | SGI"
        description="SGI est un cabinet pluridisciplinaire basé à Lomé, Togo : expertise comptable, RH, conseil et solutions digitales. Découvrez notre mission, notre vision et nos valeurs."
        path="/a-propos"
        jsonLd={[localBusinessLd(), breadcrumbLd(breadcrumb)]}
      />

      <PageHero
        eyebrow="Qui sommes-nous"
        title="Un cabinet engagé pour la réussite des entreprises togolaises"
        subtitle={`${SITE.legalName} accompagne entreprises, PME et institutions avec rigueur, proximité et innovation.`}
        breadcrumb={breadcrumb}
      />

      {/* Intro + stats */}
      <section className="py-20 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-50" />
              Notre histoire
            </span>
            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
              Une expertise locale, des standards exigeants
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">{SITE.legalName}</strong> est un
                cabinet pluridisciplinaire basé au Togo, dédié à l'accompagnement des
                entreprises, PME, institutions et organisations professionnelles.
              </p>
              <p>
                Depuis notre création, nous mettons la rigueur technique et la
                proximité au service de la performance de nos clients — de la
                comptabilité quotidienne à la transformation digitale.
              </p>
              <p>
                Notre force : réunir sous un même toit la comptabilité, la fiscalité,
                la gestion sociale et l'informatique, pour un accompagnement
                réellement complet.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-7 text-center shadow-card"
              >
                <div className="text-4xl font-extrabold text-gradient">
                  <CountUp value={Number(s.value)} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission / vision / approach */}
      <section className="bg-muted/60 py-20 lg:py-24">
        <div className="container-x">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {pillars.map((p) => (
              <Reveal
                key={p.title}
                className="rounded-3xl border border-border bg-card p-8 shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-glow">
                  <p.icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Les piliers de notre engagement"
            description="Cinq principes qui guident chacune de nos missions."
          />
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {VALUES.map((v) => (
              <Reveal
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-primary">
                  <Icon name={v.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBand
        title="Envie d'en savoir plus sur SGI ?"
        text="Rencontrons-nous pour échanger sur vos besoins et la manière dont nous pouvons vous accompagner."
      />
    </>
  );
}
