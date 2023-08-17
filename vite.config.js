/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@icons": path.resolve(__dirname, "./public/icons"),
    },
  },
  plugins: [svgr(), react()],
});
