import { CircleArrowRight, Mail, Phone } from "lucide-react";

import logoGrey from "@/assets/logo-grey.png.asset.json";
import { CONTACT, SPECIALTIES } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3">
        <div>
          <img src={logoGrey.url} alt="Infinity Consulting" className="h-14 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/80">
            Fundada em 2018, a <strong className="text-white">Infinity Consulting</strong> é uma
            empresa de <strong className="text-white">consultoria abrangente</strong>, proporcionando
            soluções acessíveis às empresas.
          </p>
        </div>

        <div>
          <h2 className="text-2xl">Especialidades</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {SPECIALTIES.map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/85">
                <CircleArrowRight className="size-4 shrink-0 text-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl">Fale Conosco</h2>
          <p className="mt-6 text-sm text-white/85">{CONTACT.location}</p>
          <a
            href={CONTACT.phoneHref}
            className="mt-6 flex items-center gap-2 text-sm text-white/85 hover:text-brand"
          >
            <Phone className="size-4 text-brand" aria-hidden />
            {CONTACT.phoneLabel}
          </a>
          <a
            href={CONTACT.emailHref}
            className="mt-4 flex items-center gap-2 text-sm text-white/85 hover:text-brand"
          >
            <Mail className="size-4 text-brand" aria-hidden />
            {CONTACT.email}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="border-t border-white/15 py-6 text-center text-xs text-white/70">
          Todos os direitos reservados ao Infinity Consulting by Agência Criosites (Criação de Sites
          Profissionais)
        </div>
      </div>
    </footer>
  );
}
