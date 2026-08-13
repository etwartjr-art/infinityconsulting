import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X,
  Youtube,
} from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import { CONTACT, NAV } from "@/lib/site";

const socialIcons = [
  { name: "Instagram", href: "https://www.instagram.com/infinityconsulting.app/", Icon: Instagram },
  { name: "Linkedin", href: "https://www.linkedin.com/in/marcelo-mribeiro/", Icon: Linkedin },
  { name: "Whatsapp", href: CONTACT.whatsapp, Icon: MessageCircle },
  { name: "Facebook", href: "https://www.facebook.com/marcelo.martinsribeiro", Icon: Facebook },
  { name: "Youtube", href: "https://www.youtube.com/@marcelomartinsribeiro", Icon: Youtube },
];

function TopBar() {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-3 text-sm sm:flex-row sm:justify-between">
        <a href={CONTACT.phoneHref} className="flex items-center gap-2 font-medium hover:text-brand">
          <Phone className="size-4 text-brand" aria-hidden />
          {CONTACT.phoneLabel}
        </a>
        <a href={CONTACT.emailHref} className="flex items-center gap-2 hover:text-brand">
          <Mail className="size-4 text-brand" aria-hidden />
          {CONTACT.email}
        </a>
        <ul className="flex items-center gap-2">
          {socialIcons.map(({ name, href, Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex size-7 items-center justify-center rounded-sm bg-white/95 text-navy transition-colors hover:bg-brand"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  const navLinks = NAV.map((item) => ({
    label: item.label,
    href: isHome ? `#${item.hash}` : `/#${item.hash}`,
  }));

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <TopBar />
      <div className="bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
          <Link to="/" className="shrink-0" aria-label="Infinity Consulting - Home">
            <img src={logo.url} alt="Infinity Consulting" className="h-12 w-auto md:h-14" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[0.95rem] text-navy transition-colors hover:text-brand-blue"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/contato"
              className="text-[0.95rem] text-navy transition-colors hover:text-brand-blue"
              activeProps={{ className: "font-semibold text-brand-blue" }}
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-navy transition-opacity hover:opacity-90 sm:inline-flex"
            >
              <MessageCircle className="size-4" aria-hidden />
              Fale conosco
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-md text-navy lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 text-navy"
                >
                  {item.label}
                </a>
              ))}
              <Link to="/contato" onClick={() => setOpen(false)} className="py-3 text-navy">
                Contato
              </Link>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="my-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-navy sm:hidden"
              >
                <MessageCircle className="size-4" aria-hidden />
                Fale conosco
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
