import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal, { staggerParent, staggerChild } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/lib/icons";
import { getService, SERVICES } from "@/data/services";
import { SITE } from "@/data/site";
import { serviceLd, breadcrumbLd } from "@/lib/jsonld";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <NotFound />;

  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const breadcrumb = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <Seo
        title={`${service.title} au Togo | SGI`}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        jsonLd={[serviceLd(service), breadcrumbLd(breadcrumb)]}
      />

      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.tagline}
        breadcrumb={breadcrumb}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Main content */}
          <div>
            <Reveal>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-brand text-white shadow-glow">
                <Icon name={service.icon} className="h-8 w-8" />
              </div>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                {service.intro}
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-2xl font-bold text-foreground">
                Ce que nous prenons en charge
              </h2>
            </Reveal>
            <motion.ul
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 grid gap-3 sm:grid-cols-2"
            >
              {service.features.map((f) => (
                <motion.li
                  key={f}
                  variants={staggerChild}
                  data-reveal
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-foreground/90">{f}</span>
                </motion.li>
              ))}
            </motion.ul>

            <Reveal className="mt-12">
              <h2 className="text-2xl font-bold text-foreground">
                Vos bénéfices concrets
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {service.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-border bg-card p-6 shadow-card"
                  >
                    <p className="font-bold text-foreground">{b.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Reveal className="rounded-3xl border border-border bg-card p-7 shadow-elevated">
              <h2 className="text-lg font-bold text-foreground">
                Discutons de votre projet
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Obtenez un devis gratuit et personnalisé pour « {service.title} ».
              </p>
              <ButtonLink to="/contact" className="mt-5 w-full">
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                to={`tel:${SITE.phoneRaw}`}
                external
                variant="outline"
                className="mt-3 w-full"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </ButtonLink>
            </Reveal>

            <Reveal className="mt-6 rounded-3xl border border-border bg-muted/50 p-7">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                Autres services
              </p>
              <ul className="mt-4 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to={`/services/${o.slug}`}
                      className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white"
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon name={o.icon} className="h-4 w-4 text-primary" />
                        {o.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
