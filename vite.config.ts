import { defineConfig } from "vite";
import { reactRouterPlugin } from "vite-plugin-next-react-router";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRouterPlugin({
      async: true,
      pageDir: "src/pages",
      extensions: ["js", "jsx", "ts", "tsx"],
      output: "./src/routes.tsx",
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
