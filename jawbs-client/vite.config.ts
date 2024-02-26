import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import babel from "vite-plugin-babel";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false,
      emitWarning: true,
    }),
    babel(),
  ],
  server: {
    port: 3000,
    host: "0.0.0.0",
    proxy: {
      "/api": "http://api:3001",
    },
  },
});
