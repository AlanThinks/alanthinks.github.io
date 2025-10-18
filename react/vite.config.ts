import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@data": path.resolve(__dirname, "data"),
      "@legacy-css": path.resolve(__dirname, "../css"),
    },
  },
  server: {
    fs: {
      // Allow importing JSON and assets from the monorepo root
      allow: [path.resolve(__dirname, ".."), path.resolve(__dirname, ".")],
    },
  },
  build: {
    sourcemap: false,
  },
});
