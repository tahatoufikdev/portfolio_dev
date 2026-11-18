import { getTranslations, isLocale } from "@/lib/get-translations";
import Header from "@/components/site/header";
import Hero from "@/components/site/hero";
import Services from "@/components/site/services";
import Method from "@/components/site/method";
import Projects from "@/components/site/projects";
import About from "@/components/site/about";
import Contact from "@/components/site/contact";
import CardEffects from "@/components/site/card-effects";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: param } = await params;
  const locale = isLocale(param) ? param : "fr";
  const t = getTranslations(locale);

  return (
    <>
      <Header t={t} locale={locale} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Method t={t} />
        {/* Projets + expérience : un seul dégradé vert → noir, qui enchaîne sur le contact (noir → vert) */}
        <div className="bg-night bg-linear-to-b from-palm to-night">
          <Projects t={t} />
          <About t={t} locale={locale} />
        </div>
      </main>
      <Contact t={t} />
      <CardEffects />
    </>
  );
}
