import { MessageSquare, PackageCheck, ShieldCheck, Sparkles } from "lucide-react";
import type { Dictionary } from "@/lib/get-translations";
import Section from "./section";

// Une icône par étape, dans l'ordre des fichiers de traduction :
// besoin expliqué, traduit pour l'IA, relu et testé, livré.
const icons = [MessageSquare, Sparkles, ShieldCheck, PackageCheck];

// L'étape mise en avant : bien communiquer avec l'IA (carte blanche sur le dégradé).
const HIGHLIGHT = 1;

export default function Method({ t }: { t: Dictionary }) {
  return (
    <Section id="methode" title={t.method.title} intro={t.method.intro} tone="dusk">
      {/* Une vraie séquence : une carte par étape, le numéro en badge sur l'icône. */}
      <div className="relative">
        <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {t.method.steps.map((step, i) => {
            const Icon = icons[i];
            const highlighted = i === HIGHLIGHT;
            return (
              <li key={step.title} className="flex flex-col">
                <div
                  className={
                    "spotlight flex flex-1 flex-col items-center rounded-2xl p-6 text-center " +
                    (highlighted ? "bg-white text-ink" : "spot-on-dark border border-white/10 bg-white/7")
                  }
                >
                  <span
                    aria-hidden="true"
                    className={
                      "spot-icon relative flex size-11 items-center justify-center rounded-xl " +
                      (highlighted ? "border-2 border-brand bg-white text-gold-deep" : "bg-white/10 text-gold")
                    }
                  >
                    <Icon className="size-5" />
                    {/* Numéro de l'étape, en badge doré sur l'icône */}
                    <span className="absolute -end-2.5 -top-2.5 flex size-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className={"mt-2 leading-relaxed max-sm:text-justify max-sm:hyphens-auto " + (highlighted ? "text-muted-foreground" : "text-white/75")}>
                    {step.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
