import { MessageCircle } from "lucide-react";

import { CONTACT } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-brand text-navy shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}
