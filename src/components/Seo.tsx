import { Head } from "vite-react-ssg";
import { SITE } from "@/data/site";

export type SeoProps = {
  title: string;
  description: string;
  /** Path beginning with "/" (e.g. "/services") — used for canonical & OG url. */
  path: string;
  /** Optional override of the social share image (absolute path under /public). */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** Any structured-data objects to inject as <script type="application/ld+json">. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const clean = (p: string) => (p === "/" ? "" : p.replace(/\/$/, ""));

export default function Seo({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
  jsonLd,
}: SeoProps) {
  const url = `${SITE.url}${clean(path)}`;
  const fullTitle =
    title.includes("SGI") ? title : `${title} | SGI`;
  const img = `${SITE.url}${image ?? SITE.ogImage}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <html lang={SITE.lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {/* hreflang (single-language site, self-referencing) */}
      <link rel="alternate" hrefLang="fr" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
}
