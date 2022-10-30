/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    BASIC_AUTH_USER: process.env.BASIC_AUTH_USER,
    BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD,
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrinctMode: true,
});

module.exports = nextConfig;
