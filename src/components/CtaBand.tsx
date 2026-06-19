import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { ButtonLink } from "./Button";
import { SITE } from "@/data/site";

export default function CtaBand({
  title = "Prêt à confier votre gestion à des experts ?",
  text = "Échangeons sur vos besoins lors d'un premier rendez-vous gratuit et sans engagement.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-16 lg:py-20">
      <motion.div
        data-reveal
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] gradient-deep px-6 py-14 text-center shadow-elevated sm:px-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 animate-float-slow rounded-full bg-primary/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -bottom-20 h-72 w-72 animate-float rounded-full bg-accent/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink to="/contact" variant="white" size="lg">
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              to={`tel:${SITE.phoneRaw}`}
              external
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:border-white hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
