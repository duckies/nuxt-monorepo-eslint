import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  ssr: true,
  srcDir: "src/",
  server: {
    port: 8000,
  },
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/eslint-module"],
  eslint: {
    cache: false,
    useEslintrc: true,
  },
};

export default config;
