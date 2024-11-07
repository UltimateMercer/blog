const { withContentlayer } = require("next-contentlayer");
// import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */


const nextConfig = {
  basePath: "/blog",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

// export default nextConfig;
// export default withContentlayer(nextConfig);
module.exports = withContentlayer(nextConfig);