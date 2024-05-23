import million from "million/compiler";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",

    build: {
        outDir: "dist",
    },

    plugins: [million.vite({ auto: true }), react()],
    server: {
        host: true,
        /* watch: {
             usePolling: true,
         },*/
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});