import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/lib/icons";
import { staggerChild } from "./Reveal";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div variants={staggerChild} data-reveal>
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-elevated"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-glow">
          <Icon name={service.icon} className="h-7 w-7" />
        </div>
        <h3 className="relative mt-6 text-xl font-bold text-foreground">
          {service.title}
        </h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.tagline}
        </p>
        <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          En savoir plus
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}
