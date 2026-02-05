/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
    ],
  },
  trailingSlash: true,
  // swcMinify: true,
  // reactStrictMode: true,
};

export default nextConfig;
