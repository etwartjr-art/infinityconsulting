export const CONTACT = {
  phoneLabel: "(62) 98588-6261",
  phoneHref: "tel:+5562985886261",
  email: "contato@infintyconsulting.app",
  emailHref: "mailto:contato@infintyconsulting.app",
  whatsapp:
    "https://api.whatsapp.com/send?phone=5562985886261&text=Estou%20no%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento!",
  location: "Goiás – Brasil",
};

export const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/infinityconsulting.app/" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/marcelo-mribeiro/" },
  { name: "Whatsapp", href: CONTACT.whatsapp },
  { name: "Facebook", href: "https://www.facebook.com/marcelo.martinsribeiro" },
  { name: "Youtube", href: "https://www.youtube.com/@marcelomartinsribeiro" },
] as const;

export const NAV = [
  { label: "Home", hash: "home" },
  { label: "Serviços", hash: "servicos" },
  { label: "Quem Somos", hash: "quemsomos" },
  { label: "Como funciona", hash: "comofunciona" },
] as const;

export const SPECIALTIES = [
  "Diagnóstico Estratégico",
  "Plano de Ação",
  "Execução",
  "Acompanhamento",
  "Método 5G",
  "Método PLOC",
];
