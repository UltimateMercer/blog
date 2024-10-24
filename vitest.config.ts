import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ""),
      "contentlayer/generated": ".contentlayer/generated",
    },
  },
  test: {
    include: ["./tests/vitest/**/*.test.tsx"],
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/vitest/setup.ts",
  },
});
