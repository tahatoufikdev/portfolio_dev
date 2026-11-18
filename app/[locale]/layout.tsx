import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Readex_Pro } from "next/font/google";
import "../globals.css";
import { getTranslations, isLocale, locales } from "@/lib/get-translations";
import { contact } from "@/lib/site";

// Une seule famille pour le latin et l'arabe : les trois langues ont le même rendu.
const readex = Readex_Pro({
  variable: "--font-readex",
  subsets: ["latin", "arabic"],
  display: "swap",
});

const siteUrl = "https://tahatoufik.dev";

const ogLocale = { fr: "fr_FR", en: "en_US", ar: "ar_SA" } as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  const lang = isLocale(locale) ? locale : "fr";

  return {
    metadataBase: new URL(siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    authors: [{ name: "Taha TOUFIK" }],
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en", ar: "/ar", "x-default": "/fr" },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      url: `${siteUrl}/${lang}`,
      title: t.meta.title,
      description: t.meta.description,
      siteName: "Taha TOUFIK",
    },
    twitter: {
      card: "summary",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
    verification: { google: "S7VXF8X2KK" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f4f7",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getTranslations(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taha TOUFIK",
    description: t.meta.description,
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/brand/${locale === "ar" ? "almotawir-almaghribi-logo" : "tahadev-logo"}.png`,
    image: `${siteUrl}/brand/tahadev-symbole.png`,
    telephone: `+${contact.whatsappNumber}`,
    email: contact.email,
    address: { "@type": "PostalAddress", addressCountry: "FR" },
    sameAs: [contact.github, contact.linkedin],
    knowsAbout: ["WordPress", "WooCommerce", "Next.js", "Claude Code", "Automatisation"],
  };

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={readex.variable}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YYW531ZJ2W"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-YYW531ZJ2W');`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
