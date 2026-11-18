// Coordonnées et projets (titrés par leur domaine : pas de nom de client) : les données qui ne dépendent pas de la langue.

export const contact = {
  whatsappNumber: "33766491893",
  email: "bookingtaha98@gmail.com",
  linkedin: "https://www.linkedin.com/in/tahatoufik/",
  github: "https://github.com/tahatoufikdev",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type Project = {
  id: "boucherie" | "ecoviande" | "iksiir";
  url: string;
  image?: string;
  stack: string;
};

// Études de cas « réalisé avec l'IA ».
// Site WordPress + automatisations faites avec Claude Code.
export const aiSiteCase = {
  url: "https://habachiya.com",
  image: "/images/habachiya.jpg",
  stack: "WordPress, WooCommerce, Claude Code",
};

// Application mobile reprise et développée avec Claude Code (pas encore finie) :
// pas de lien, seulement des captures (données de démonstration).
export const aiAppCase = {
  name: "BreakFast",
  stack: "React Native, NestJS, Stripe, Claude Code",
  screenshots: ["/images/breakfast/boutique.png", "/images/breakfast/suivi.png", "/images/breakfast/espace-pro.png"],
};

// Réalisés sans IA.
export const clientProjects: Project[] = [
  { id: "boucherie", url: "https://www.boucherielabellerouge.fr", image: "/images/boucherie.jpg", stack: "WooCommerce" },
  { id: "iksiir", url: "https://iksiir.com", image: "/images/iksiir.jpg", stack: "WooCommerce" },
  { id: "ecoviande", url: "https://ecoviande.fr", stack: "WordPress" },
];

