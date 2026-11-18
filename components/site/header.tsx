import type { Dictionary, Locale } from "@/lib/get-translations";
import { whatsappLink } from "@/lib/site";
import LogoMark from "./logo-mark";

const languages: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "عربي" },
];

export default function Header({ t, locale }: { t: Dictionary; locale: Locale }) {
  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#methode", label: t.nav.method },
    { href: "#projets", label: t.nav.projects },
    { href: "#experience", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href={`/${locale}`} className="flex items-center gap-2.5 text-lg font-semibold">
          <LogoMark className="size-9 shrink-0" />
          {/* Nom de la marque selon la langue : TahaDEV (fr, en) / المطور المغربي (ar) */}
          {locale === "ar" ? (
            <span>
              المطور <span className="text-gold-deep">المغربي</span>
            </span>
          ) : (
            <span>
              Taha<span className="text-gold-deep">DEV</span>
            </span>
          )}
        </a>

        <nav aria-label="Navigation" className="hidden items-center gap-6 text-[15px] text-muted-foreground md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <nav aria-label={t.nav.language} className="flex items-center text-sm">
            {languages.map((lang) => (
              <a
                key={lang.code}
                href={`/${lang.code}`}
                hrefLang={lang.code}
                lang={lang.code}
                aria-current={lang.code === locale ? "page" : undefined}
                className={
                  lang.code === locale
                    ? "rounded-md px-2.5 py-2 font-semibold text-ink"
                    : "rounded-md px-2.5 py-2 text-muted-foreground hover:text-ink"
                }
              >
                {lang.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappLink(t.hero.whatsapp_message)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-strong sm:inline-flex"
          >
            {t.nav.whatsapp}
          </a>
        </div>
      </div>
    </header>
  );
}
