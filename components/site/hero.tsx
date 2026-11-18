import { MapPin } from "lucide-react";
import type { Dictionary } from "@/lib/get-translations";
import { whatsappLink } from "@/lib/site";

export default function Hero({ t }: { t: Dictionary }) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
      <div>
        <h1 className="display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] font-semibold text-pretty lg:whitespace-pre-line">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-muted-foreground max-sm:text-justify max-sm:hyphens-auto">{t.hero.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={whatsappLink(t.hero.whatsapp_message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-6 py-3 font-medium text-white hover:bg-brand-strong"
          >
            {t.hero.cta_whatsapp}
          </a>
          <a
            href="#projets"
            className="rounded-full border border-line bg-surface px-6 py-3 font-medium hover:border-ink"
          >
            {t.hero.cta_projects}
          </a>
        </div>
        <p className="mt-6 flex items-center gap-2 text-muted-foreground">
          <MapPin aria-hidden="true" className="size-5 shrink-0 text-gold-deep" />
          {t.hero.markets}
        </p>
      </div>

      {/* L'élément fort de la page : une demande client, dite avec ses mots, et la réponse. */}
      <figure className="rounded-2xl bg-mist p-5 sm:p-6">
        <figcaption className="mb-4 text-sm font-medium text-[#86630f]">{t.hero.chat_caption}</figcaption>
        <ol className="flex flex-col gap-3">
          {t.hero.chat.map((message, i) => {
            const fromTaha = message.from === "taha";
            return (
              <li
                key={i}
                className={
                  "bubble max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed " +
                  (fromTaha ? "self-end rounded-ee-sm bg-brand text-white" : "self-start rounded-es-sm bg-surface")
                }
                style={{ animationDelay: `${0.3 + i * 0.9}s` }}
              >
                <span className="sr-only">{fromTaha ? "Taha : " : "Client : "}</span>
                {message.text}
              </li>
            );
          })}
        </ol>
      </figure>
    </section>
  );
}
