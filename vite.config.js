import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import rehypeStarryNight from "rehype-starry-night";

export default defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.tsx",
      ssr: "resources/js/ssr.tsx",
      refresh: true,
    }),
    {
      enforce: "pre",
      ...mdx({
        mdExtensions: [".md", ".markdown"],
        rehypePlugins: [rehypeStarryNight],
      }),
    },
    react({ include: /\.(ts|tsx|mdx)$/ }),
  ],
});
