import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taha TOUFIK, sites web et automatisations avec l'IA",
    short_name: "Taha TOUFIK",
    description: "Sites WordPress et Next.js, automatisation de vos tâches répétitives grâce à l'IA.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f4f7",
    theme_color: "#13233f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
