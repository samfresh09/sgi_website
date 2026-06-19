import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  breadcrumb: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden gradient-deep pt-28 pb-16 text-white lg:pt-36 lg:pb-20">
      {/* decorative grid + glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_at_top,#000,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 animate-float-slow rounded-full bg-primary/30 blur-3xl"
      />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumbs items={breadcrumb} light />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-[3.4rem]"
        >
          {eyebrow && (
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.18em] text-white/60">
              {eyebrow}
            </span>
          )}
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
