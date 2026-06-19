import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/lib/icons";
import { SERVICES } from "@/data/services";

const highlights = [
  "Conformité OHADA & fiscale",
  "Interlocuteur dédié",
  "1er rendez-vous offert",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-deep pt-28 pb-20 text-white lg:pt-36 lg:pb-28">
      {/* Decorative layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:46px_46px] opacity-40 [mask-image:radial-gradient(ellipse_at_50%_30%,#000,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 animate-float-slow rounded-full bg-primary/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 animate-float rounded-full bg-accent/20 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Cabinet d'expertise comptable &amp; informatique — Lomé, Togo
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.6rem]"
          >
            Votre partenaire de confiance en{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient bg-gradient-to-r from-sky-300 to-white">
                expertise comptable
              </span>
            </span>{" "}
            &amp; solutions digitales
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            SGI accompagne les entreprises, PME et institutions du Togo et de la
            sous-région avec rigueur, professionnalisme et innovation — de la
            comptabilité à la transformation digitale.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2"
          >
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {h}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.32 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink to="/contact" variant="white" size="lg">
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              to="/services"
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:border-white hover:text-white"
            >
              Découvrir nos services
            </ButtonLink>
          </motion.div>
        </div>

        {/* Floating service cards cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="grid grid-cols-2 gap-4">
            {SERVICES.slice(0, 4).map((s, i) => (
              <motion.div
                key={s.slug}
                animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Icon name={s.icon} className="h-5 w-5 text-white" />
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-white">
                  {s.title}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-white/15 bg-white/95 p-5 text-brand-900 shadow-elevated">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Engagement qualité
            </p>
            <p className="mt-1 text-sm text-brand-900/80">
              Des prestations fiables, confidentielles et conformes aux normes en
              vigueur.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
