import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import Seo from "@/components/Seo";
import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { staggerParent } from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CountUp from "@/components/CountUp";
import CtaBand from "@/components/CtaBand";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/lib/icons";
import { SERVICES } from "@/data/services";
import { SITE, STATS, WHY, PROCESS } from "@/data/site";
import {
  localBusinessLd,
  websiteLd,
  servicesCatalogLd,
  breadcrumbLd,
} from "@/lib/jsonld";

const testimonials = [
  {
    quote:
      "SGI a fiabilisé toute notre comptabilité et nous a fait gagner un temps précieux. Un partenaire sérieux et réactif.",
    name: "Directrice d'une PME",
    sector: "Commerce — Lomé",
  },
  {
    quote:
      "Accompagnement de qualité sur la paie et les déclarations sociales. Nous avons enfin l'esprit tranquille.",
    name: "Gérant",
    sector: "BTP — Togo",
  },
  {
    quote:
      "Leur appui sur la digitalisation de notre gestion a transformé notre organisation au quotidien.",
    name: "Responsable administratif",
    sector: "Services — Lomé",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="SGI — Expertise Comptable & Solutions Informatiques au Togo"
        description="SGI, cabinet d'expertise comptable et informatique à Lomé (Togo) : comptabilité, fiscalité, gestion sociale & RH, conseil financier, digitalisation et formation. Devis gratuit."
        path="/"
        jsonLd={[
          localBusinessLd(),
          websiteLd(),
          servicesCatalogLd(),
          breadcrumbLd([{ name: "Accueil", path: "/" }]),
        ]}
      />

      <Hero />

      {/* Stats */}
      <section className="border-b border-border bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="text-4xl font-extrabold text-gradient lg:text-5xl">
                <CountUp value={Number(s.value)} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nos services"
            title="Des solutions complètes pour votre entreprise"
            description="Cinq pôles d'expertise complémentaires pour couvrir tous vos besoins de gestion, de conformité et de transformation."
          />
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
            <Reveal className="lg:col-span-1 sm:col-span-2">
              <ButtonLink
                to="/services"
                variant="outline"
                className="flex h-full min-h-[200px] w-full flex-col items-start justify-between rounded-3xl border-dashed p-7"
              >
                <span className="text-lg font-bold text-foreground">
                  Voir tous nos services
                </span>
                <span className="inline-flex items-center gap-2 text-primary">
                  Explorer <ArrowRight className="h-4 w-4" />
                </span>
              </ButtonLink>
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted/60 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pourquoi SGI"
            title="Les raisons de nous faire confiance"
            description="Un cabinet qui place l'excellence et la relation client au cœur de son activité."
          />
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {WHY.map((item) => (
              <Reveal
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-primary transition-colors group-hover:gradient-brand group-hover:text-white">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Notre méthode"
            title="Un accompagnement clair, en 4 étapes"
            description="De la première rencontre au suivi continu, nous avançons avec vous, en toute transparence."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 0.08}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <span className="text-5xl font-extrabold text-brand-100">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
                {i < PROCESS.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-10 hidden h-6 w-6 text-brand-200 lg:block" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-muted/60 py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-50" />À propos de SGI
            </span>
            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
              Un cabinet pluridisciplinaire engagé à vos côtés
            </h2>
            <p className="mt-4 text-muted-foreground">
              <strong className="text-foreground">{SITE.legalName}</strong> est un
              cabinet basé à Lomé, dédié à l'accompagnement des entreprises, PME,
              institutions et organisations professionnelles. Nous allions rigueur
              technique et approche réellement personnalisée.
            </p>
            <p className="mt-4 text-muted-foreground">
              Notre vision : devenir le partenaire de référence des entreprises de
              la sous-région dans leur croissance et leur transformation digitale.
            </p>
            <ButtonLink to="/a-propos" className="mt-8">
              En savoir plus sur le cabinet
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>

          <Reveal direction="left" className="grid grid-cols-2 gap-4">
            {[
              { k: "Mission", v: "Des prestations fiables qui sécurisent votre gestion." },
              { k: "Vision", v: "Le partenaire de référence de la sous-région." },
              { k: "Valeurs", v: "Rigueur, confidentialité, proximité, innovation." },
              { k: "Couverture", v: "Togo & sous-région ouest-africaine." },
            ].map((c) => (
              <div
                key={c.k}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <p className="text-sm font-bold text-primary">{c.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Témoignages"
            title="Ils nous font confiance"
            description="La satisfaction de nos clients est la meilleure preuve de notre engagement."
          />
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <Reveal
                key={t.name + t.sector}
                className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card"
              >
                <Quote className="h-8 w-8 text-brand-200" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  « {t.quote} »
                </p>
                <div className="mt-6">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.sector}</p>
                </div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
