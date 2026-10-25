import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  outputFileTracingRoot: path.resolve(__dirname),
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
