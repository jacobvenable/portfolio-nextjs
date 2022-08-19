// next.config.mjs
import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism-plus";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
