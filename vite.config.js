import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://209.141.46.44:8081",
        changeOrigin: true,
        //secure: false,
        rewrite: (path) => {
          console.log("Proxying request:", path);
          return path.replace(/^\/api/, "/api/v1");
        },
      },
    },
  },
});
