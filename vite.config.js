import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

const isCodeSandbox =
  "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

export default {
  plugins: [react(), glsl(), viteCommonjs(["spectorjs"])],
  root: "src/",
  publicDir: "../public/",
  base: "./",
  server: {
    host: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },

  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["spectorjs"])],
    },
  },
};
