import Image from "next/image";
import { ArrowDown, Check } from "lucide-react";
import type { Dictionary } from "@/lib/get-translations";
import { aiAppCase, aiSiteCase, clientProjects } from "@/lib/site";
import Section from "./section";
import ProjectTabs from "./project-tabs";

function domain(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span aria-hidden="true" className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand">
            <Check className="size-3.5 text-gold" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Projects({ t }: { t: Dictionary }) {
  const { habachiya, breakfast, orange } = t.projects.cases;

  // Réalisés avec l'IA : études de cas détaillées
  const withAi = (
    <>
      <p className="mx-auto max-w-5xl leading-relaxed text-white/75 text-justify hyphens-auto sm:text-center sm:text-balance sm:hyphens-none">{t.projects.ai_intro}</p>

      <div className="mt-8 flex flex-col gap-8">
        {/* Site + automatisations */}
        <article className="grid gap-8 spotlight rounded-2xl border border-line bg-surface p-5 text-ink sm:p-8 lg:grid-cols-[5fr_6fr] lg:gap-12">
          <a
            href={aiSiteCase.url}
            {...external}
            tabIndex={-1}
            aria-hidden="true"
            className="relative block aspect-[16/10] overflow-hidden rounded-xl border border-line lg:aspect-auto lg:min-h-full"
          >
            <Image
              src={aiSiteCase.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover object-top"
            />
          </a>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-medium">
                <a href={aiSiteCase.url} {...external} className="hover:underline">
                  {domain(aiSiteCase.url)}
                </a>
              </h3>
              <span className="text-sm text-muted-foreground">{aiSiteCase.stack}</span>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground max-sm:text-justify max-sm:hyphens-auto">{habachiya.summary}</p>
            <Points items={habachiya.points} />
            <p className="mt-6 border-t border-line pt-5 font-medium">{habachiya.result}</p>
          </div>
        </article>

        {/* Application mobile, en cours : captures uniquement, pas de lien */}
        <article className="grid gap-8 spotlight rounded-2xl border border-line bg-surface p-5 text-ink sm:p-8 lg:grid-cols-[5fr_6fr] lg:gap-12">
          <ul className="grid grid-cols-3 gap-3 self-start">
            {aiAppCase.screenshots.map((src, i) => (
              <li key={src}>
                <figure>
                  <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-line">
                    <Image
                      src={src}
                      alt={`${aiAppCase.name} : ${breakfast.captions[i]}`}
                      fill
                      sizes="(min-width: 1024px) 150px, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-center text-xs text-muted-foreground">{breakfast.captions[i]}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-medium">{aiAppCase.name}</h3>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">{t.projects.in_progress}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{aiAppCase.stack}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground max-sm:text-justify max-sm:hyphens-auto">{breakfast.summary}</p>
            <Points items={breakfast.points} />
          </div>
        </article>
      </div>
    </>
  );

  // Réalisés sans IA : l'expérience de développeur
  const withoutAi = (
    <>
      <p className="mx-auto max-w-5xl leading-relaxed text-white/75 text-justify hyphens-auto sm:text-center sm:text-balance sm:hyphens-none">{t.projects.manual_intro}</p>

      {/* Automatisation chez Orange : pas de capture, un schéma du flux à la place */}
      <article className="mt-8 grid gap-8 spotlight rounded-2xl border border-line bg-surface p-5 text-ink sm:p-8 lg:grid-cols-[5fr_6fr] lg:gap-12">
        <ol aria-hidden="true" className="flex flex-col items-stretch justify-center gap-2 rounded-xl bg-brand-soft p-6">
          {orange.flow.map((step, i) => (
            <li key={step} className="flex flex-col items-center gap-2">
              <span className="w-full max-w-64 rounded-lg bg-surface px-4 py-3 text-center font-medium">{step}</span>
              {i < orange.flow.length - 1 && <ArrowDown className="size-4 text-gold-deep" />}
            </li>
          ))}
        </ol>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-xl font-medium">{orange.title}</h3>
            <span className="text-sm text-muted-foreground">Google Cloud, Node.js</span>
          </div>
          <p className="mt-3 leading-relaxed text-muted-foreground max-sm:text-justify max-sm:hyphens-auto">{orange.summary}</p>
          <Points items={orange.points} />
          <p className="mt-6 border-t border-line pt-5 font-medium">{orange.result}</p>
        </div>
      </article>

      <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {clientProjects.map((project) => (
          <li key={project.id} className="spotlight spot-on-dark rounded-2xl border border-white/10 bg-white/7 p-4 sm:p-5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/15 bg-surface">
              {project.image ? (
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="spot-zoom object-cover object-top"
                />
              ) : (
                <span className="flex h-full items-center justify-center font-medium text-muted-foreground">
                  {domain(project.url)}
                </span>
              )}
            </div>
            <h3 className="mt-4 font-medium">
              {/* Lien étiré : son ::after couvre toute la carte, qui devient cliquable en entier */}
              <a
                href={project.url}
                {...external}
                className="after:absolute after:inset-0 after:z-10 after:rounded-2xl hover:underline"
              >
                {domain(project.url)}
              </a>
            </h3>
            <p className="text-sm text-white/70">{project.stack}</p>
            <p className="mt-2 leading-relaxed text-white/75 max-sm:text-justify max-sm:hyphens-auto">{t.projects.items[project.id]}</p>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <Section id="projets" title={t.projects.title} intro={t.projects.intro} tone="clear">
      <ProjectTabs
        label={t.projects.title}
        allLabel={t.projects.all}
        groups={[
          { id: "ia", label: t.projects.ai_title, content: withAi },
          { id: "sans-ia", label: t.projects.manual_title, content: withoutAi },
        ]}
      />
    </Section>
  );
}
