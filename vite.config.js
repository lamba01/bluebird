import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // Ensure all assets resolve from root
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
});
