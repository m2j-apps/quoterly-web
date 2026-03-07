import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/year",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
