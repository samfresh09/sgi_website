import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock, CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/Button";
import { SITE } from "@/data/site";
import { breadcrumbLd, localBusinessLd } from "@/lib/jsonld";

const inputCls =
  "w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

const contactItems = [
  { icon: Phone, label: "Téléphone", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Localisation", value: SITE.address.full, href: undefined },
  { icon: Clock, label: "Horaires", value: SITE.hours, href: undefined },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const breadcrumb = [
    { name: "Accueil", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Demande de contact");
    const message = String(data.get("message") || "");
    const body = `Nom : ${name}%0AEmail : ${email}%0A%0A${encodeURIComponent(
      message,
    )}`;
    // Open the visitor's mail client pre-filled toward SGI.
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <Seo
        title="Contact — Demandez un devis gratuit | SGI Togo"
        description="Contactez SGI à Lomé, Togo. Téléphone, email et formulaire pour votre devis gratuit en expertise comptable, RH, conseil et solutions digitales."
        path="/contact"
        jsonLd={[localBusinessLd(), breadcrumbLd(breadcrumb)]}
      />

      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Notre équipe vous répond rapidement. Premier rendez-vous gratuit et sans engagement."
        breadcrumb={breadcrumb}
      />

      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Coordinates */}
          <Reveal direction="right" className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <h2 className="text-lg font-bold text-foreground">Nos coordonnées</h2>
              <ul className="mt-6 space-y-5">
                {contactItems.map((c) => {
                  const inner = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-brand text-white">
                        <c.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="font-medium text-foreground">
                          {c.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="group flex items-center gap-4 transition-colors hover:text-primary"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Discuter sur WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="Localisation de SGI à Lomé, Togo"
                src="https://www.google.com/maps?q=Lom%C3%A9%2C%20Togo&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-7 shadow-elevated sm:p-9"
            >
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-center gap-3 rounded-xl border border-primary/20 bg-brand-50 px-4 py-3 text-sm text-primary"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Votre logiciel de messagerie s'est ouvert. Vous pouvez aussi nous
                  écrire directement à {SITE.email}.
                </motion.div>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Nom complet
                  </label>
                  <input id="name" name="name" required maxLength={100} placeholder="Votre nom" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required maxLength={255} placeholder="votre@email.com" className={inputCls} />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                  Sujet
                </label>
                <input id="subject" name="subject" required maxLength={200} placeholder="Objet de votre demande" className={inputCls} />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea id="message" name="message" rows={6} required maxLength={2000} placeholder="Décrivez votre besoin…" className={inputCls} />
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                Envoyer le message
                <Send className="h-4 w-4" />
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                En envoyant ce formulaire, vous acceptez d'être recontacté par SGI au
                sujet de votre demande.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
