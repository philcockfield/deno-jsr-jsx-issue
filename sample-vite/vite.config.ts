import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, type PluginOption, type Plugin } from "vite";

export default defineConfig({
  root: "./",
  server: { port: 1234 },
  plugins: [react() as PluginOption[], deno() as Plugin[]],
});
