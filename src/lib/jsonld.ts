import { SITE } from "@/data/site";
import { SERVICES, type Service } from "@/data/services";

const abs = (p: string) => `${SITE.url}${p}`;

// Reusable organisation node — referenced by @id everywhere.
export const organizationLd = {
  "@type": ["Organization", "AccountingService", "ProfessionalService"],
  "@id": `${SITE.url}/#organization`,
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: abs(SITE.logo),
  image: abs(SITE.ogImage),
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: SITE.founded,
  description: SITE.shortDesc,
  areaServed: { "@type": "Country", name: "Togo" },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "customer service",
    areaServed: "TG",
    availableLanguage: ["French"],
  },
  sameAs: [SITE.social.linkedin, SITE.social.facebook],
};

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    ...organizationLd,
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.lang,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path === "/" ? "" : it.path.replace(/\/$/, "")),
    })),
  };
}

export function serviceLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: abs(`/services/${service.slug}`),
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Country", name: "Togo" },
  };
}

export function servicesCatalogLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services SGI",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: abs(`/services/${s.slug}`),
    })),
  };
}
