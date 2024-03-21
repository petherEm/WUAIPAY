/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.przelewy24.pl",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
