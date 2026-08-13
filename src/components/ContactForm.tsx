import { useState, type FormEvent } from "react";

import { CONTACT } from "@/lib/site";

type Props = {
  withSubject?: boolean;
  withMessage?: boolean;
  submitLabel?: string;
  variant?: "light" | "dark";
};

const inputBase =
  "w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors focus:border-brand";

export function ContactForm({
  withSubject = false,
  withMessage = false,
  submitLabel = "Agendar Agora",
  variant = "light",
}: Props) {
  const [error, setError] = useState<string | null>(null);

  const fieldClass =
    variant === "dark"
      ? `${inputBase} border-transparent bg-white/10 text-white placeholder:text-white/60`
      : `${inputBase} border-border bg-surface text-navy placeholder:text-muted-foreground`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") ?? "").trim();
    const phone = String(data.get("telefone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("assunto") ?? "").trim();
    const message = String(data.get("mensagem") ?? "").trim();

    if (!name || !phone || !email) {
      setError("Preencha nome, telefone e e-mail.");
      return;
    }
    setError(null);

    const text = [
      `Olá, meu nome é ${name}.`,
      subject ? `Assunto: ${subject}` : null,
      message || null,
      `Telefone: ${phone}`,
      `E-mail: ${email}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://api.whatsapp.com/send?phone=5562985886261&text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="nome" placeholder="Nome Completo" className={fieldClass} aria-label="Nome" />
        <input
          name="telefone"
          placeholder="Telefone com DDD"
          className={fieldClass}
          aria-label="Telefone"
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="E-mail que mais utiliza"
        className={fieldClass}
        aria-label="E-mail"
      />
      {withSubject ? (
        <input name="assunto" placeholder="Assunto" className={fieldClass} aria-label="Assunto" />
      ) : null}
      {withMessage ? (
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          rows={5}
          aria-label="Mensagem"
          className={`${fieldClass} rounded-3xl`}
        />
      ) : null}

      {error ? <p className="px-2 text-sm text-destructive">{error}</p> : null}

      <button
        type="submit"
        className="w-full rounded-full bg-brand px-6 py-3 font-medium text-navy transition-opacity hover:opacity-90"
      >
        {submitLabel}
      </button>
      <p
        className={
          variant === "dark" ? "px-2 text-xs text-white/60" : "px-2 text-xs text-muted-foreground"
        }
      >
        Ao enviar, sua mensagem é encaminhada para o nosso WhatsApp {CONTACT.phoneLabel}.
      </p>
    </form>
  );
}
