// next.config.mjs

import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = nextMDX({
  extensions: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: ["drive.google.com", "image.aladin.co.kr"],
  },
  redirects: async () => {
    return [
      {
        source: "/storybook",
        permanent: true,
        destination: "/storybook/index.html",
      },
    ];
  },
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
