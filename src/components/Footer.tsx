import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Facebook } from "lucide-react";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <img
            src={SITE.logoWhite}
            alt={`Logo ${SITE.name}`}
            width={120}
            height={36}
            className="h-9 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {SITE.legalName}. Votre partenaire de confiance en expertise comptable,
            gestion sociale et solutions digitales au Togo et dans la sous-région.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Plan du site">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Navigation
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {[
              { label: "Accueil", to: "/" },
              { label: "Nos services", to: "/services" },
              { label: "À propos", to: "/a-propos" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link className="transition-colors hover:text-white" to={l.to}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Nos services">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  className="transition-colors hover:text-white"
                  to={`/services/${s.slug}`}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {SITE.address.full}
            </li>
          </ul>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
          >
            Écrire sur WhatsApp <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} {SITE.name}. Tous droits réservés.</p>
          <p>{SITE.hours}</p>
        </div>
      </div>
    </footer>
  );
}
