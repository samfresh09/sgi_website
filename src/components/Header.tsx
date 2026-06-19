import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { ButtonLink } from "./Button";
import { SITE } from "@/data/site";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_-12px_rgba(15,40,70,0.4)]"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between lg:h-[4.5rem]">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {({ isActive }) => (
                <span className="nav-link" data-active={isActive}>
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            {SITE.phone}
          </a>
          <ButtonLink to="/contact" size="sm">
            Devis gratuit
          </ButtonLink>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <nav className="container-x flex flex-col gap-1 py-4" aria-label="Navigation mobile">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-3 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "bg-brand-50 text-primary"
                        : "text-foreground hover:bg-muted",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <ButtonLink to="/contact" size="md" className="mt-3 w-full">
                Demander un devis gratuit
              </ButtonLink>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="mt-2 flex items-center justify-center gap-2 py-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                {SITE.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
