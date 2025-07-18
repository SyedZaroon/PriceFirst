import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { cwd } from "node:process";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: ["2982-182-188-104-174.ngrok-free.app"],
  },
  resolve: {
    alias: {
      "@": path.resolve(cwd(), "src"),
    },
  },
});
