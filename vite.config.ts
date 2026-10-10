import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GITHUB_PAGES=true prerenders the site to static HTML for GitHub Pages.
const githubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      ...(githubPages ? { prerender: { enabled: true, crawlLinks: false } } : {}),
    }),
    react(),
    tailwindcss(),
  ],
  resolve: { tsconfigPaths: true },
});
