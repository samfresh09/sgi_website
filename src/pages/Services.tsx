import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { staggerParent } from "@/components/Reveal";
import { SERVICES } from "@/data/services";
import { servicesCatalogLd, breadcrumbLd } from "@/lib/jsonld";

export default function Services() {
  return (
    <>
      <Seo
        title="Nos services — Expertise comptable, RH, conseil & digital | SGI"
        description="Découvrez les services de SGI au Togo : expertise comptable, gestion sociale & RH, conseil & accompagnement, informatique & digital et formation."
        path="/services"
        jsonLd={[
          servicesCatalogLd(),
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Nos expertises"
        title="Des services pensés pour la performance de votre entreprise"
        subtitle="Cinq pôles complémentaires, un seul interlocuteur. SGI couvre l'ensemble de vos besoins de gestion, de conformité et de transformation digitale."
        breadcrumb={[
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBand
        title="Un besoin précis ? Parlons-en."
        text="Nos experts identifient la solution la plus adaptée à votre situation."
      />
    </>
  );
}
