// Post-build: generate sitemap.xml, a root 404.html, and ensure <meta charset>
// is the first element in every <head> (react-helmet prepends its tags, which
// can otherwise push charset past the 1024-byte limit browsers scan).
import { readFile, writeFile, copyFile, access, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ORIGIN = "https://sgi-tg.com";

const exists = async (p) =>
  access(p, constants.F_OK).then(() => true).catch(() => false);

// Extract service slugs straight from the data file (single source of truth).
async function getServiceSlugs() {
  const src = await readFile(join(root, "src/data/services.ts"), "utf8");
  return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function urlNode(path, { priority = "0.7", changefreq = "monthly" } = {}) {
  const loc = `${ORIGIN}${path === "/" ? "/" : path}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

async function main() {
  const slugs = await getServiceSlugs();
  const today = new Date().toISOString().slice(0, 10);

  const routes = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    ...slugs.map((s) => ({ path: `/services/${s}`, priority: "0.8" })),
    { path: "/a-propos", priority: "0.7" },
    { path: "/contact", priority: "0.8" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Generated ${today} -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => urlNode(r.path, r))
    .join("\n")}\n</urlset>\n`;

  await writeFile(join(dist, "sitemap.xml"), xml, "utf8");
  console.log(`✓ sitemap.xml (${routes.length} URLs)`);

  // Hoist <meta charset> to the very top of every <head>.
  const htmlFiles = await collectHtml(dist);
  let fixed = 0;
  for (const file of htmlFiles) {
    let html = await readFile(file, "utf8");
    const before = html;
    // Drop any existing charset meta, then re-insert it right after <head>.
    html = html.replace(/<meta\s+charset=["'][^"']*["']\s*\/?>(\n\s*)?/gi, "");
    html = html.replace(/<head>/i, '<head><meta charset="utf-8">');
    if (html !== before) {
      await writeFile(file, html, "utf8");
      fixed++;
    }
  }
  console.log(`✓ charset hoisted (${fixed} pages)`);

  // Root-level 404.html (Netlify / GitHub Pages / most static hosts use it).
  const generated404 = join(dist, "404", "index.html");
  if (await exists(generated404)) {
    await copyFile(generated404, join(dist, "404.html"));
    console.log("✓ 404.html");
  } else {
    console.warn("! 404/index.html not found — skipped 404.html");
  }
}

// Recursively collect all .html files under a directory.
async function collectHtml(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await collectHtml(full)));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
