import fr from "@/lib/translations/fr.json";
import en from "@/lib/translations/en.json";
import ar from "@/lib/translations/ar.json";

export const locales = ["fr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export type Dictionary = typeof fr;

const dictionaries: Record<Locale, Dictionary> = { fr, en, ar };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Textes chargés côté serveur : la page arrive déjà traduite, sans clignotement.
export function getTranslations(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}
