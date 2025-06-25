import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.mdx$/,
  // options: {
  //   remarkPlugins: [],
  //   rehypePlugins: [],
  // },
});

export default withMDX(nextConfig);
