import { resolve } from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@shared"] = resolve(__dirname, "../shared");
    return config;
  },
};

export default nextConfig;
