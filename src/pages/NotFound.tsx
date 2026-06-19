import { Home, ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { ButtonLink } from "@/components/Button";
import { SERVICES } from "@/data/services";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable (404) | SGI"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
        path="/404"
        noindex
      />
      <section className="relative grid min-h-[80vh] place-items-center overflow-hidden gradient-deep px-5 text-center text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 animate-float-slow rounded-full bg-primary/30 blur-3xl"
        />
        <div className="relative">
          <p className="text-[7rem] font-extrabold leading-none text-white/90 lg:text-[10rem]">
            404
          </p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
            Cette page est introuvable
          </h1>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Le lien est peut-être erroné ou la page a été déplacée. Reprenons depuis
            l'accueil.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink to="/" variant="white" size="lg">
              <Home className="h-4 w-4" />
              Retour à l'accueil
            </ButtonLink>
            <ButtonLink
              to="/services"
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:border-white hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voir nos services
            </ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2 text-sm">
            {SERVICES.map((s) => (
              <ButtonLink
                key={s.slug}
                to={`/services/${s.slug}`}
                variant="ghost"
                size="sm"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                {s.title}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
