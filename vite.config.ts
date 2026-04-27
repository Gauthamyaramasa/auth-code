import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@kinde/infrastructure": path.resolve(__dirname, "preview/kinde-mock.tsx"),
    },
  },
});
