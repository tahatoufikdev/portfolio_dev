import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Les anciennes pages (déjà indexées par Google) renvoient vers la page unique.
  async redirects() {
    return [
      {
        source: "/:locale(fr|en|ar)/:page(projets|competences|experiences|tarifs|blog)/:rest*",
        destination: "/:locale",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
