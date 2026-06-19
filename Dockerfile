# syntax=docker/dockerfile:1

# ---------- Stage 1: build the static site (SSG) ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies from the lockfile (reproducible)
COPY package.json package-lock.json ./
RUN npm ci

# Build: vite-react-ssg prerender + postbuild (sitemap, 404.html, charset)
COPY . .
RUN npm run build

# ---------- Stage 2: serve with nginx ----------
FROM nginx:1.27-alpine AS runner

# Custom server config (clean nested URLs, gzip, caching, custom 404)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static output
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Basic healthcheck for Dokploy / Docker
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
