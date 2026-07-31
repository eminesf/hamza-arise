import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Smaller, cache-friendly output helps Core Web Vitals (LCP/TBT), which feed SEO.
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
  },
});
