import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative so the build works both when the site
// is served from the project subpath (github.com/sollinft/sollinft) and from
// the apex domain (sollinft.xyz via GitHub Pages + CNAME).
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2020",
  },
});
