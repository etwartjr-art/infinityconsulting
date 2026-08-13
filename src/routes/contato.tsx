import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Youtube } from "lucide-react";

import memphis from "@/assets/memphis-bg.png.asset.json";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT, SPECIALTIES } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato – Infinity Consulting | Consultoria Empresarial" },
      {
        name: "description",
        content:
          "Fale com a equipe da Infinity Consulting. Envie sua mensagem, ligue (62) 98588-6261 ou escreva para contato@infintyconsulting.app.",
      },
      { property: "og:title", content: "Contato – Infinity Consulting" },
      {
        property: "og:description",
        content: "Deixe sua mensagem que em breve nossa equipe entrará em contato.",
      },
      { property: "og:url", content: "https://infinityconsulting.lovable.app/contato" },
    ],
    links: [{ rel: "canonical", href: "https://infinityconsulting.lovable.app/contato" }],
  }),

  component: ContatoPage,
});

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/infinityconsulting.app/", Icon: Instagram },
  { name: "Linkedin", href: "https://www.linkedin.com/in/marcelo-mribeiro/", Icon: Linkedin },
  { name: "Whatsapp", href: CONTACT.whatsapp, Icon: MessageCircle },
  { name: "Facebook", href: "https://www.facebook.com/marcelo.martinsribeiro", Icon: Facebook },
  { name: "Youtube", href: "https://www.youtube.com/@marcelomartinsribeiro", Icon: Youtube },
];

function ContatoPage() {
  return (
    <>
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl">Contato</h1>
          <p className="mt-4 text-sm text-white/80">
            <Link to="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-brand">Contato</span>
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${memphis.url})` }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <div className="rounded-2xl bg-background p-8 shadow-lg md:p-10">
            <h2 className="text-3xl text-navy">Fale Conosco</h2>
            <div className="mt-8">
              <ContactForm withSubject withMessage submitLabel="Enviar" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-display text-sm font-semibold tracking-wide text-brand-blue uppercase">
              Fale contato
            </p>
            <h2 className="mt-2 text-3xl text-navy md:text-4xl">Como podemos te ajudar?</h2>
            <p className="mt-4 text-muted-foreground">
              Deixe sua mensagem que em breve nossa equipe entrará em contato
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-navy hover:text-brand-blue"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-brand/25 text-navy">
                  <Phone className="size-5" aria-hidden />
                </span>
                {CONTACT.phoneLabel}
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-3 text-navy hover:text-brand-blue"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-brand/25 text-navy">
                  <Mail className="size-5" aria-hidden />
                </span>
                {CONTACT.email}
              </a>
            </div>

            <div className="mt-10">
              <h3 className="text-lg text-navy">Conheça alguma de nossas especialidades:</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SPECIALTIES.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-background px-4 py-2 text-sm text-navy shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-lg text-navy">Siga nossas Redes Sociais</h3>
              <ul className="mt-4 flex gap-3">
                {socials.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      className="flex size-11 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-brand hover:text-navy"
                    >
                      <Icon className="size-5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
