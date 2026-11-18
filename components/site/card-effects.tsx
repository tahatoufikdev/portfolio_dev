"use client";

import { useEffect } from "react";

// Un seul écouteur pour toute la page : quand la souris passe sur une carte `.spotlight`,
// on donne sa position à la carte (--mx / --my) et le CSS dessine le halo qui la suit.
export default function CardEffects() {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const card = (event.target as Element | null)?.closest?.(".spotlight") as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
