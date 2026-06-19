import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
// `ssgOptions` is consumed by vite-react-ssg (it augments Vite's config type).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
  },
  ssr: {
    // framer-motion ships ESM that must be processed during SSG prerender
    noExternal: ["framer-motion"],
  },
  ssgOptions: {
    dirStyle: "nested",
    formatting: "none",
    script: "async",
  },
});
