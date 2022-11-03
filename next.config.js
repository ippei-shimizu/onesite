/** @type {import('next').NextConfig} */
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
  async redirects() {
    return process.env.VERCEL_GIT_COMMIT_REF === "main"
      ? [
          {
            source: "/mousemove-stalking-img/",
            destination: "/blogs/mousemove-stalking-img",
            permanent: true,
          },
          {
            source: "/locomotive-scroll-parallax/",
            destination: "/blogs/locomotive-scroll-parallax",
            permanent: true,
          },
          {
            source: "/gsap-scrolltrigger/",
            destination: "/blogs/gsap-scrolltrigger",
            permanent: true,
          },
          {
            source: "/javascript-parts/",
            destination: "/blogs/javascript-parts",
            permanent: true,
          },
          {
            source: "/cubic-bezier-hover",
            destination: "/blogs/cubic-bezier-hover",
            permanent: true,
          },
          {
            source: "/hamburger-menu-01",
            destination: "/blogs/hamburger-menu-01",
            permanent: true,
          },
          {
            source: "/anime-js-svg",
            destination: "/blogs/anime-js-svg",
            permanent: true,
          },
          {
            source: "/colorbox-modal",
            destination: "/blogs/colorbox-modal",
            permanent: true,
          },
        ]
      : [];
  },
};

const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    buildExcludes: [/middleware-manifest.json$/],
  },
  reactStrinctMode: true,
});

module.exports = nextConfig;
