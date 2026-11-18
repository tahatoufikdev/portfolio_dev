import type { Dictionary } from "@/lib/get-translations";
import { contact, whatsappLink } from "@/lib/site";

export default function Contact({ t }: { t: Dictionary }) {
  return (
    <footer id="contact" className="bg-palm bg-linear-to-b from-night to-palm text-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24">
        <h2 className="display mx-auto max-w-3xl text-center text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] font-semibold text-balance">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75 text-justify hyphens-auto sm:text-center sm:text-balance sm:hyphens-none">{t.contact.text}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(t.hero.whatsapp_message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-6 py-3 font-medium text-palm hover:bg-white/90"
          >
            {t.contact.whatsapp}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full border border-white/30 px-6 py-3 font-medium hover:border-white"
          >
            {t.contact.email}
          </a>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Taha TOUFIK. {t.footer.made_with}
          </p>
          <div className="flex gap-5">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
