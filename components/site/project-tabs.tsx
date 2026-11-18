"use client";

import { useState, type ReactNode } from "react";

type Group = { id: string; label: string; content: ReactNode };

// Filtre des projets : « Tous » (par défaut) affiche chaque groupe avec son titre,
// les autres boutons n'affichent qu'un groupe. Chaque groupe n'existe qu'une fois dans
// le HTML (rendu côté serveur, visible par Google) : le filtre ne fait que l'afficher ou le masquer.
export default function ProjectTabs({
  groups,
  allLabel,
  label,
}: {
  groups: Group[];
  allLabel: string;
  label: string;
}) {
  const ALL = "all";
  const [active, setActive] = useState(ALL);
  const buttons = [
    { id: ALL, label: allLabel },
    ...groups.map(({ id, label }) => ({ id, label })),
  ];

  return (
    <div>
      <div className="flex justify-center">
        <div
          role="group"
          aria-label={label}
          className="inline-flex flex-wrap justify-center gap-1 rounded-3xl border border-line bg-surface p-1 sm:rounded-full"
        >
          {buttons.map((button) => {
            const selected = button.id === active;
            return (
              <button
                key={button.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(button.id)}
                className={
                  "cursor-pointer rounded-full px-3 py-2.5 text-[13px] font-medium transition-colors sm:px-5 sm:py-2 sm:text-sm " +
                  (selected
                    ? "bg-brand text-white"
                    : "text-muted-foreground hover:text-ink")
                }
              >
                {button.label}
              </button>
            );
          })}
        </div>
      </div>

      {groups.map((group, i) => (
        <div
          key={group.id}
          hidden={active !== ALL && active !== group.id}
          className="mt-8"
        >
          {/* Avec « Tous », chaque groupe garde son titre pour qu'on sache où l'on est */}
          {active === ALL && (
            <h3
              className={
                "mb-4 text-center text-2xl font-semibold " + (i > 0 ? "mt-16" : "")
              }
            >
              {group.label}
            </h3>
          )}
          {group.content}
        </div>
      ))}
    </div>
  );
}
