import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Building2,
  ClipboardList,
  CircleCheckBig,
  Cog,
  Handshake,
  LineChart,
  Phone,
  Rocket,
  Search,
  Store,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import founder from "@/assets/founder.png.asset.json";
import founderBg from "@/assets/founder-bg.jpeg.asset.json";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import mapBg from "@/assets/map.png.asset.json";
import pillarsBg from "@/assets/pillars-bg.jpeg.asset.json";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consultoria Empresarial – Infinity Consulting" },
      {
        name: "description",
        content:
          "Consultoria empresarial com soluções estratégicas e acessíveis: diagnóstico, plano de ação, execução e acompanhamento para alavancar o seu negócio.",
      },
      { property: "og:title", content: "Consultoria Empresarial – Infinity Consulting" },
      {
        property: "og:description",
        content:
          "Transforme seu negócio com a expertise da Infinity Consulting. Soluções estratégicas e acessíveis para o sucesso empresarial.",
      },
      { property: "og:image", content: heroBg.url },
      { name: "twitter:image", content: heroBg.url },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Search,
    title: "Diagnóstico Estratégico",
    text: 'Realizamos uma análise profunda para identificar oportunidades e quantificar os resultados. Nosso foco é encontrar "ganhos rápidos", desenvolver um plano de ação preciso e redefinir a arquitetura estratégica para o sucesso contínuo.',
  },
  {
    icon: ClipboardList,
    title: "Plano de Ação",
    text: "Após a análise minuciosa de cada ponto de melhoria, apresentamos um Plano de Ação detalhado em reuniões, onde discutimos e priorizamos as ações necessárias para impulsionar o crescimento e a eficiência da sua empresa.",
  },
  {
    icon: Rocket,
    title: "Execução",
    text: "Implementamos o Plano de Ação de maneira eficaz, acompanhando de perto os Key Performance Indicators (KPIs) e tomando ações corretivas conforme necessário. Além disso, promovemos a transferência de Know-How para fortalecer a capacidade interna da sua equipe.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento",
    text: "Durante esta fase crucial de transição, facilitamos a passagem de responsabilidades, garantindo que as atividades diárias da sua empresa permaneçam em pleno funcionamento. Estamos comprometidos em assegurar uma transição suave e bem-sucedida para o próximo estágio do seu sucesso empresarial.",
  },
];

const stats = [
  { value: "300", label: "Clientes Felizes" },
  { value: "2.018", label: "Data da Empresa" },
  { value: "7", label: "Especialidades" },
];

const whatWeDo = [
  { icon: Handshake, label: "Comercial" },
  { icon: TrendingUp, label: "Vendas" },
  { icon: Cog, label: "Gestão Operacional" },
  { icon: BarChart3, label: "Controladoria" },
  { icon: Store, label: "Reestruturação de Loja" },
  { icon: Building2, label: "Gerência de Projetos" },
];

const howWeAct = [
  "Gestão Global do Negócio",
  "Implementação de Método",
  "Implementação de Processos",
];

const pillars = [
  {
    title: "Diversidade de abordagens",
    text: "Não acreditamos que existe uma única maneira certa ou errada de alcançar um resultado e valorizamos a diversidade de abordagens para alcançá-lo. Valorizamos a simplicidade na operação e sempre levamos em consideração a experiência de quem irá executar as tarefas.",
  },
  {
    title: "Medir o que é relevante",
    text: "Acreditamos na importância de medir tudo o que for de alta relevância e controlar as perdas. Posteriormente, no momento adequado, podemos medir também o que for de baixa relevância.",
  },
  {
    title: "Entender antes de mudar",
    text: "Entendemos a operação e depois implementamos mudanças, todas as características devem ser mantidas, ajudamos a corrigir desvios e a traçar novos caminhos, mas sendo nós mesmos.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-sm font-semibold tracking-wide text-brand-blue uppercase">
      {children}
    </p>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative bg-navy bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg.url})` }}
      >
        <div className="absolute inset-0 bg-navy/85" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <div className="text-white">
            <h1 className="text-4xl leading-tight md:text-6xl">
              Transforme Seu <span className="text-brand">Negócio</span>
              <span className="mt-2 block text-2xl font-normal md:text-3xl">
                com a Expertise da Infinity Consulting
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Soluções Estratégicas e Acessíveis para o Sucesso Empresarial!
            </p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-medium text-navy transition-opacity hover:opacity-90"
            >
              Fale com a nossa Equipe
            </a>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
            <h2 className="text-2xl text-white">Fale com a nossa equipe</h2>
            <p className="mt-2 text-sm text-white/75">
              Deixe sua mensagem que em breve nossa equipe entrará em contato
            </p>
            <div className="mt-6">
              <ContactForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section
        id="quemsomos"
        className="bg-surface bg-contain bg-right bg-no-repeat py-20"
        style={{ backgroundImage: `url(${mapBg.url})` }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <SectionLabel>Potencialize Seu Sucesso</SectionLabel>
            <h2 className="mt-3 text-3xl text-navy md:text-4xl">
              Empresarial com a Experiência Personalizada da{" "}
              <span className="text-brand-blue">Infinity Consulting</span>
            </h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              A <strong className="text-navy">Infinity Consulting</strong> é muito mais do que uma
              empresa de consultoria,{" "}
              <strong className="text-navy">somos seus parceiros dedicados ao sucesso empresarial</strong>
              . Fundada em 2018, trazemos uma abordagem abrangente e inovadora para atender às
              necessidades específicas do seu negócio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-background p-8 text-center shadow-sm"
              >
                <p className="font-display text-4xl font-bold text-brand-blue">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <SectionLabel>Nossos Serviços</SectionLabel>
            <h2 className="mt-3 text-3xl text-navy md:text-4xl">
              Soluções Estratégicas Sob Medida Para Alavancar Seu Sucesso.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-brand/30 text-navy">
                  <service.icon className="size-7" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl text-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section
        className="relative bg-navy bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${founderBg.url})` }}
      >
        <div className="absolute inset-0 bg-navy/90" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <img
            src={founder.url}
            alt="Marcelo Ribeiro, fundador da Infinity Consulting"
            loading="lazy"
            className="mx-auto w-full max-w-md rounded-2xl object-cover"
          />
          <div className="text-white">
            <SectionLabel>
              <span className="text-brand">Fundador da Infinity Consulting</span>
            </SectionLabel>
            <h2 className="mt-3 text-3xl md:text-4xl">Marcelo Ribeiro</h2>
            <div className="mt-6 space-y-4 leading-8 text-white/85">
              <p>
                Acumulou <strong className="text-white">mais de 20 anos</strong> de sólida{" "}
                <strong className="text-white">experiência</strong> na condução bem sucedida de{" "}
                <strong className="text-white">negócios em companhias multinacionais</strong>{" "}
                aumentando a <strong className="text-white">eficiência e a melhoria</strong> de
                desempenho das mesmas e reestruturação operacional e comercial como executivo e
                consultor de empresas.
              </p>
              <p>
                Em sua carreira profissional trabalhou no{" "}
                <strong className="text-white">Grupo Pão de Açúcar, Bretas, Grupo JC, Rede Brasil</strong>
                . Neste período trabalhou em diversos projetos, de aumento de eficiência em grande
                variedade de setores incluindo indústria, atacado, distribuição, varejo, dentre
                outros. Fazemos os processos de integração de operações, consolidação e
                reestruturação operacional e comercial.
              </p>
              <p>
                <strong className="text-white">Atualmente</strong> possui formação em{" "}
                <strong className="text-white">Administração de empresas</strong>, pós-graduação em
                gestão estratégica, pós-graduação em investimentos, pós em finanças e controladoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="comofunciona" className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl text-navy md:text-4xl">Como Funciona o Nosso Trabalho</h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              Nosso método ensina aos empresários como gerenciar seus negócios de forma prática e
              personalizada, implementando processos de gestão adaptados às características de cada
              empresa.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              Os processos de gestão são aplicados ao estilo de gerenciamento do empresário, para
              tornar as implementações mais fáceis e eficazes. Para nós o entendimento e compromisso
              é o que mais importa.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {["Transferência", "Implantação", "Gestão"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-navy px-6 py-3 text-sm font-medium text-white"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl bg-background p-8 shadow-sm">
              <SectionLabel>O Que Fazemos</SectionLabel>
              <p className="mt-4 leading-8 text-muted-foreground">
                Nosso objetivo é ajudar os empresários e as empresas a melhorar o desempenho de seus
                negócios, por meio da gestão e operação eficiente de processos e indicadores (KPIs).
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {whatWeDo.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-navy">
                    <span className="flex size-10 items-center justify-center rounded-full bg-brand/30">
                      <item.icon className="size-5" aria-hidden />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-background p-8 shadow-sm">
              <SectionLabel>Como atuamos</SectionLabel>
              <p className="mt-4 leading-8 text-muted-foreground">
                Envolvendo a transformação das pessoas e implementando métodos de gestão eficazes com
                mudança de mentalidade que trará o sucesso de todo o processo. Trabalhamos com o
                empresário, pois nos traz a garantia de que o conhecimento ficará na sua empresa.
              </p>
              <ul className="mt-6 space-y-4">
                {howWeAct.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy">
                    <CircleCheckBig className="size-5 text-brand-blue" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section
        className="relative bg-navy bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${pillarsBg.url})` }}
      >
        <div className="absolute inset-0 bg-navy/90" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center text-white">
            <SectionLabel>
              <span className="text-brand">Porque Fazemos</span>
            </SectionLabel>
            <h2 className="mt-3 text-3xl md:text-4xl">Nossos Pilares</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="rounded-2xl bg-white/10 p-8 text-white">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-navy">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-white/80">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl text-navy md:text-4xl">Clientes Atendidos</h2>
          <div className="mt-10">
            <ClientsMarquee />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionLabel>Fale Conosco</SectionLabel>
            <h2 className="mt-3 text-3xl text-navy md:text-4xl">
              Teremos o prazer em atendê-los
            </h2>
            <a
              href={CONTACT.phoneHref}
              className="mt-8 inline-flex items-center gap-3 text-2xl font-semibold text-navy hover:text-brand-blue"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-brand/30">
                <Phone className="size-5" aria-hidden />
              </span>
              {CONTACT.phoneLabel}
            </a>
            <ul className="mt-8 space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Target className="size-5 text-brand-blue" aria-hidden />
                Diagnóstico completo do seu negócio
              </li>
              <li className="flex items-center gap-2">
                <Users className="size-5 text-brand-blue" aria-hidden />
                Time dedicado ao seu resultado
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-background p-8 shadow-lg md:p-10">
            <h3 className="text-2xl text-navy">Fale com a nossa equipe</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Deixe sua mensagem que em breve nossa equipe entrará em contato
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
