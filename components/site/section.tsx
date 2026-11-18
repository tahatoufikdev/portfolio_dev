// Fonds des sections : une vague noir / vert qui court sur la page, chaque section
// reprenant la couleur où la précédente s'arrête :
//   services (blanc → noir) → méthode (noir → vert) → projets + expérience (vert → noir, posé
//   sur un conteneur commun dans la page) → contact (noir → vert).
const tones = {
  night: { section: "bg-night text-white", intro: "text-white/70" },
  // du blanc pur (en haut) vers le noir (en bas) : voir .fade-white-night dans globals.css
  whiteToNight: { section: "fade-white-night", intro: "text-muted-foreground" },
  // dégradé vert → noir sur la hauteur de la section
  dawn: { section: "bg-linear-to-b from-palm to-night text-white", intro: "text-white/75" },
  // dégradé noir → vert sur la hauteur de la section
  dusk: { section: "bg-linear-to-b from-night to-palm text-white", intro: "text-white/75" },
  // fond transparent : la section est posée sur un dégradé commun (voir page.tsx)
  clear: { section: "text-white", intro: "text-white/75" },
};

export default function Section({
  id,
  title,
  intro,
  tone,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  tone: keyof typeof tones;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={tones[tone].section}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <h2 className="display text-center text-3xl font-semibold sm:text-4xl">{title}</h2>
        {intro && <p className={`mx-auto mt-4 max-w-4xl text-lg leading-relaxed text-justify hyphens-auto sm:text-center sm:text-balance sm:hyphens-none ${tones[tone].intro}`}>{intro}</p>}
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
