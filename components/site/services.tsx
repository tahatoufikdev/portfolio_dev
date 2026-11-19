import { Globe, Monitor, Smartphone, Workflow } from "lucide-react";
import type { Dictionary } from "@/lib/get-translations";
import Section from "./section";

// Une icône par service, dans l'ordre des fichiers de traduction :
// sites, applications mobiles, applications desktop, automatisation.
const icons = [Globe, Smartphone, Monitor, Workflow];

// Le fond va du blanc au noir : les cartes sont opaques (blanches, et la carte mise en avant
// en vert) pour rester lisibles sur toute la hauteur du dégradé.
const HIGHLIGHT = 3;

export default function Services({ t }: { t: Dictionary }) {
  return (
    <Section id="services" title={t.services.title} tone="whiteToNight">
      <div className="grid gap-5 md:grid-cols-2">
        {t.services.items.map((service, i) => {
          const Icon = icons[i];
          const highlighted = i === HIGHLIGHT;
          // "Site vitrine, boutique…" → une étiquette par exemple (virgule latine ou arabe)
          const examples = service.examples.split(/\s*[,،]\s*/);

          return (
            <article
              key={service.title}
              className={
                "spotlight flex flex-col rounded-2xl p-6 sm:p-8 " +
                (highlighted ? "spot-on-dark bg-brand text-white" : "border border-line bg-white text-ink")
              }
            >
              <span
                aria-hidden="true"
                className={
                  "spot-icon flex size-12 items-center justify-center rounded-xl " +
                  (highlighted ? "bg-white/15 text-gold" : "border-2 border-brand bg-white text-gold-deep")
                }
              >
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
              <p className={"mt-3 leading-relaxed max-sm:text-justify max-sm:hyphens-auto " + (highlighted ? "text-white/85" : "text-muted-foreground")}>
                {service.text}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {examples.map((example) => (
                  <li
                    key={example}
                    className={
                      "rounded-full px-3 py-1 text-sm " +
                      (highlighted ? "bg-white/15 text-white" : "bg-mist text-ink/80")
                    }
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {/* Mise en avant : tout le monde a des tâches répétitives à automatiser.
          Le bloc tombe dans la partie sombre du dégradé de la section (texte clair). */}
      <div className="mt-16 text-center text-white sm:mt-20">
        <p className="display mx-auto max-w-3xl text-2xl font-semibold text-balance sm:text-3xl">{t.services.auto.title}</p>
        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {t.services.auto.tasks.map((task) => (
            <li key={task} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm sm:text-base">
              {task}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-white/75">{t.services.auto.text}</p>
      </div>
    </Section>
  );
}
