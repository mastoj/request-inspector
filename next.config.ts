import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/inspect2/:path*",
        destination:
          "https://request-inspector-nine.vercel.app/api/inspect/:path*",
      },
    ];
  },
};

export default nextConfig;
