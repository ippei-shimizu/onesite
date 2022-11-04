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

// const config = {
//   async redirects() {
//     return [
//       {
//         source: "/mousemove-stalking-img",
//         destination: "/blogs/mousemove-stalking-img",
//         permanent: false,
//       },
//       {
//         source: "/locomotive-scroll-parallax",
//         destination: "/blogs/locomotive-scroll-parallax",
//         permanent: false,
//       },
//       {
//         source: "/gsap-scrolltrigger",
//         destination: "/blogs/gsap-scrolltrigger",
//         permanent: false,
//       },
//       {
//         source: "/javascript-parts",
//         destination: "/blogs/javascript-parts",
//         permanent: false,
//       },
//       {
//         source: "/cubic-bezier-hover",
//         destination: "/blogs/cubic-bezier-hover",
//         permanent: false,
//       },
//       {
//         source: "/hamburger-menu-01",
//         destination: "/blogs/hamburger-menu-01",
//         permanent: false,
//       },
//       {
//         source: "/anime-js-svg",
//         destination: "/blogs/anime-js-svg",
//         permanent: false,
//       },
//       {
//         source: "/colorbox-modal",
//         destination: "/blogs/colorbox-modal",
//         permanent: false,
//       },
//     ];
//   },
// };

// module.exports = config;
module.exports = nextConfig;
