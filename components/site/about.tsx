import {
  Check,
  Globe,
  MapPin,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { Dictionary, Locale } from "@/lib/get-translations";

// Une icône par groupe de compétences, dans l'ordre des fichiers de traduction :
// IA et automatisation, Web, Mobile, Back-end et données, Outils.
const groupIcons = [Sparkles, Globe, Smartphone, Server, Wrench];

// Section sombre, pensée pour être lue facilement (même sur téléphone) :
// l'expérience d'abord en 4 cartes, puis les compétences en 5 blocs.
export default function About({
  t,
  locale,
}: {
  t: Dictionary;
  locale: Locale;
}) {
  const separator = locale === "ar" ? "، " : ", ";
  const [aiGroup, ...otherGroups] = t.about.skill_groups;

  return (
    <section id="experience" className="text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Phrase de présentation en accroche, à la place d'un titre de section */}
        <p className="display mx-auto max-w-none text-[clamp(1.35rem,2.6vw,2rem)] leading-snug font-medium text-justify hyphens-auto sm:text-center sm:text-balance sm:hyphens-none">
          {t.about.intro}
        </p>

        {/* Expérience */}
        <h2 className="mt-14 text-center text-2xl font-semibold sm:mt-20">
          {t.about.experience_title}
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.experience.map((job) => (
            <li
              key={job.company}
              className="spotlight spot-on-dark flex flex-col rounded-2xl bg-white/6 p-6"
            >
              <p className="text-sm text-white/70">{job.period}</p>
              <p className="mt-3 text-2xl font-semibold">{job.company}</p>
              <p className="mt-1 text-white/85">{job.role}</p>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                <MapPin aria-hidden="true" className="spot-icon size-4 shrink-0 text-gold" />
                {job.location}
              </p>
              <p className="mt-4 border-t border-white/10 pt-4 text-[15px] leading-relaxed text-white/75 max-sm:text-justify max-sm:hyphens-auto">
                {job.text}
              </p>
            </li>
          ))}
        </ol>

        {/* Compétences */}
        <h2 className="mt-16 text-center text-2xl font-semibold">{t.about.skills_title}</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {/* IA et automatisation : le bloc mis en avant */}
          <div className="spotlight spot-on-dark rounded-2xl bg-brand p-6 lg:row-span-2">
            <p className="flex items-center gap-3 text-lg font-semibold">
              <Sparkles aria-hidden="true" className="spot-icon size-6 shrink-0 text-gold" />
              {aiGroup.title}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {aiGroup.items.map((skill) => (
                <li key={skill} className="flex gap-3 leading-snug">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-gold"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Les autres groupes : un titre et une phrase simple */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {otherGroups.map((group, i) => {
              const Icon = groupIcons[i + 1];
              return (
                <div key={group.title} className="spotlight spot-on-dark rounded-2xl bg-white/6 p-6">
                  <p className="flex items-center gap-3 text-lg font-semibold">
                    <Icon
                      aria-hidden="true"
                      className="spot-icon size-5 shrink-0 text-gold"
                    />
                    {group.title}
                  </p>
                  <p className="mt-3 leading-relaxed text-white/75 max-sm:text-justify max-sm:hyphens-auto">
                    {group.items.join(separator)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
