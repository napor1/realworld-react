/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), viteTsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3888",
      },
    },
  },
});
