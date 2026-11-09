import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReaderCarousel } from "@/components/reader-carousel";
import { UrgencyTimer } from "@/components/urgency-timer";
import { SocialProofToast } from "@/components/social-proof-toast";
import { BeforeAfterSection } from "@/components/before-after-section";
import { RecipePreviewSection } from "@/components/recipe-preview-section";
import {
  Lock,
  Download,
  Check,
  HeartPulse,
  Frown,
  Users,
  ChevronDown,
  BadgeCheck,
  Gift,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import mainCoverAsset from "@/assets/capa-250-recetas.png.asset.json";
import bonusCoverAsset from "@/assets/capa-superando-diabetes.png.asset.json";

// Portadas restauradas de los e-books (principal y bonus)
const MAIN_EBOOK_COVER = "https://i.postimg.cc/dtpcWGvL/CAPA-ESPANHOL.png";
const BONUS_EBOOK_COVER = "https://i.postimg.cc/jjT99X1S/Gemini-Generated-Image-h6eafvh6eafvh6ea.png";

const CHECKOUT_URL = "https://pay.hotmart.com/R107911179I?checkoutMode=10";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "250 Receitas para Diabéticos | Apenas R$ 19,90 Hoje" },
      {
        name: "description",
        content:
          "250 receitas econômicas e de baixo índice glicêmico + bônus Superando a Diabetes. Acesso imediato em PDF por apenas R$ 19,90.",
      },
      { property: "og:title", content: "250 Receitas para Diabéticos | Apenas R$ 19,90 Hoje" },
      {
        property: "og:description",
        content:
          "Livro completo de baixo índice glicêmico com bônus grátis. Pagamento único, download imediato e garantia de 7 dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "250 Receitas para Diabéticos + Bônus Superando a Diabetes",
          description:
            "Livro digital com 250 receitas econômicas de baixo índice glicêmico, mais o e-book bônus Superando a Diabetes. Download imediato em PDF.",
          brand: { "@type": "Brand", name: "250 Receitas para Diabéticos" },
          category: "Livros digitais de saúde e nutrição",
          offers: {
            "@type": "Offer",
            price: "19.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: "/",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function CtaButton({
  children,
  subtitle = "ACESSO IMEDIATO EM PDF",
  className = "",
  href = CHECKOUT_URL,
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  href?: string;
}) {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as unknown as { fbq?: Function }).fbq) {
      (window as unknown as { fbq: Function }).fbq("track", "InitiateCheckout", {
        content_name: "250 Receitas para Diabéticos + Bônus",
        value: 19.90,
        currency: "BRL",
      });
    }
  };

  return (
    <Button
      asChild
      variant="sales"
      className={`sales-pulse group h-auto min-h-16 w-full flex-col rounded-2xl px-6 py-4 text-center ${className}`}
    >
      <a href={href} onClick={handleClick} className="flex flex-col items-center justify-center gap-0.5">
        <span className="flex items-center justify-center gap-2 text-base font-black uppercase tracking-wide sm:text-xl">
          <span>{children}</span>
          <ArrowRight className="shrink-0 stroke-[3] transition-transform duration-300 group-hover:translate-x-1.5 animate-arrow-nudge" size={22} />
        </span>
        {subtitle && (
          <span className="text-xs font-extrabold uppercase tracking-wider text-sales-foreground/80 sm:text-xs">
            ({subtitle})
          </span>
        )}
      </a>
    </Button>
  );
}

const categories = [
  {
    emoji: "🍳",
    title: "Cafés da Manhã com Energia",
    count: "30 receitas",
    text: "Panquecas de aveia e canela, crepiocas proteicas, batidos verdes e tortillas leves.",
  },
  {
    emoji: "🍲",
    title: "Pratos Principais Irresistíveis",
    count: "70 receitas",
    text: "Salmão ao forno, frango ao curry leve, lasanha de berinjela, ensopados e salteados saudáveis.",
  },
  {
    emoji: "🥗",
    title: "Saladas e Molhos Vivos",
    count: "30 receitas",
    text: "Combinações saciantes ricas em fibra, frutos secos e gorduras boas.",
  },
  {
    emoji: "🥣",
    title: "Sopas e Cremas Reconfortantes",
    count: "25 receitas",
    text: "Caldos depurativos, cremas de abobrinha e brócolis que abraçam o corpo sem elevar o açúcar.",
  },
  {
    emoji: "🥪",
    title: "Lanches e Petiscos Rápidos",
    count: "35 receitas",
    text: "Paletitas crocantes, chips de kale, homus caseiro e petiscos saciantes entre refeições.",
  },
  {
    emoji: "🍰",
    title: "Sobremesas e Doces Seguros",
    count: "40 receitas",
    text: "Mousses de cacau e abacate, pudins de chia, bolos integrais de cenoura e gelatinas light.",
  },
  {
    emoji: "🥤",
    title: "Bebidas e Sucos Funcionais",
    count: "20 receitas",
    text: "Águas infusionadas, sucos com fibra vegetal e chás estabilizadores de glicemia.",
  },
];

const faqs = [
  {
    q: "Como recebo o material após a compra?",
    a: "Acesso imediato por e-mail em formato PDF, para ler no celular, tablet, computador ou imprimir.",
  },
  {
    q: "Os ingredientes são difíceis de conseguir?",
    a: "Não. Todas as receitas estão adaptadas ao mercado lusófono com ingredientes de supermercado e feira comuns.",
  },
  {
    q: "Serve se estou cozinhando para um familiar?",
    a: "Totalmente. São refeições completas e nutritivas que toda a família pode compartilhar sem preparar pratos separados.",
  },
  {
    q: "O pagamento é seguro?",
    a: "Sim. Processado pela Hotmart, a plataforma de produtos digitais mais grande e segura da América Latina.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-md">
      {faqs.map((f, i) => (
        <div key={f.q} className={`transition-colors ${open === i ? "bg-mint/35" : "bg-white"}`}>
          <Button
            variant="ghost"
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex h-auto w-full items-center justify-between gap-4 whitespace-normal rounded-none px-6 py-5 text-left hover:bg-transparent"
            aria-expanded={open === i}
          >
            <span className="font-display text-base font-extrabold text-foreground sm:text-lg">{f.q}</span>
            <ChevronDown
              size={22}
              className={`shrink-0 text-brand transition-transform duration-200 ${open === i ? "rotate-180 text-brand-dark" : ""}`}
            />
          </Button>
          {open === i && (
            <div className="border-t border-brand/10 px-6 pb-5 pt-2">
              <p className="text-sm font-semibold leading-relaxed text-brand-dark sm:text-base">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="font-sans text-foreground">
      {/* Contador de Escassez e Urgência */}
      <UrgencyTimer />

      {/* Letrero electrónico */}
      <div className="sticky top-0 z-50 overflow-hidden bg-brand-dark py-2 text-[11px] font-semibold text-white sm:text-sm shadow-md">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {[
                "✅ Você está na página oficial das 250 Receitas para Diabéticos",
                "🚨 Oferta especial para a América Latina: 78% de desconto só hoje",
                "⚡ Acesso imediato e vitalício em PDF",
              ].map((t) => (
                <span key={t} className="px-6 font-bold">
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <header className="bg-white px-4 pb-14 pt-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-4 py-1.5 text-xs font-bold text-brand-dark sm:text-sm">
              <Zap size={16} className="fill-brand text-brand" /> Aprovado para Diabéticos e Pré-diabéticos | Ingredientes Acessíveis
            </span>
            <h1 className="mt-5 font-display text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl text-center">
              Volte a Apreciar a Comida Saborosa sem Medo dos Picos de Glicose nem de Restrições Extremas
            </h1>
            <h2 className="mt-4 text-base font-bold leading-relaxed text-brand-dark sm:text-lg text-center max-w-2xl mx-auto">
              O livro de receitas definitivo com 250 preparações econômicas, deliciosas e de baixo índice
              glicêmico para transformar suas refeições do dia a dia — para você ou para quem mais
              ama.
            </h2>

            <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left">
              {[
                "250 opções práticas: de cafés da manhã com energia a sobremesas cremosas sem açúcar refinado.",
                "Ingredientes comuns do supermercado local (nada de ingredientes caros ou raros).",
                "Projetado para manter sua glicose estável e proteger suas artérias, nervos e rins.",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-sm font-semibold text-muted-foreground sm:text-base">
                  <Check className="mt-0.5 shrink-0 text-brand" size={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-8 max-w-md">
              <CtaButton subtitle="ACESSO IMEDIATO EM PDF">Sim, quero as 250 receitas por apenas R$ 19,90!</CtaButton>
              <p className="mt-3.5 text-center text-xs font-semibold text-muted-foreground">
                🔒 Pagamento seguro via Hotmart • Download imediato em PDF • Garantia de 7 dias
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="book-stage relative mx-auto aspect-[7/6] w-full max-w-[580px] sm:aspect-none sm:min-h-[460px]" aria-label="Pack digital com os dois e-books incluídos">
              <div className="book-glow absolute inset-x-[6%] bottom-[2%] h-[25%] rounded-full" aria-hidden="true" />
              <div className="bonus-book absolute left-[46%] top-[3%] z-10 w-[51%] cover-shine-wrapper rounded-lg cover-glow-bonus sm:left-[49%] sm:top-[2%] sm:w-[48%]">
                <img
                  src={BONUS_EBOOK_COVER}
                  onError={(e) => { e.currentTarget.src = bonusCoverAsset.url; }}
                  alt="Capa do e-book bônus Superando a Diabetes"
                  width={768}
                  height={1089}
                  className="w-full h-auto rounded-lg"
                />
                <div className="bonus-seal absolute -bottom-3 -right-2 z-40 grid h-16 w-16 place-items-center rounded-full border-2 border-white bg-emerald-500 p-0.5 text-center font-display uppercase leading-tight text-white shadow-xl shadow-emerald-500/40 min-[380px]:h-20 min-[380px]:w-20 sm:-bottom-5 sm:-right-4 sm:h-24 sm:w-24 sm:border-4">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[9px] font-black uppercase tracking-wider text-emerald-100 min-[380px]:text-[10px] sm:text-xs">BÔNUS</span>
                    <span className="text-[11px] font-black uppercase tracking-wide text-white min-[380px]:text-xs sm:text-sm">GRÁTIS</span>
                  </div>
                </div>
              </div>
              <div className="main-book absolute left-[0%] top-[2%] z-30 w-[52%] cover-shine-wrapper rounded-lg cover-glow-main sm:left-[0%] sm:w-[50%]">
                <img
                  src={MAIN_EBOOK_COVER}
                  onError={(e) => { e.currentTarget.src = mainCoverAsset.url; }}
                  alt="Capa oficial do e-book 250 Receitas para Diabéticos"
                  width={768}
                  height={1088}
                  fetchPriority="high"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-sm font-bold text-brand-dark sm:mt-1">
              Pack digital completo: livro de receitas principal + guia bônus
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-4">
              {["Cafés da Manhã", "Pratos Principais", "Sobremesas Sem Açúcar"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-mint px-3 py-1 text-xs font-extrabold text-brand-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Dor */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-black text-foreground sm:text-3xl">
            Você Sente que Viver com Diabetes Transformou a Hora de Comer em um Castigo?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Frown,
                title: "A Comida Sem Sabor e Isolada",
                text: "Comer peito de frango insípido e alface enquanto o resto da família aprecia seus pratos favoritos.",
              },
              {
                icon: HeartPulse,
                title: "O Medo Constante do Glicosímetro",
                text: "Sentir culpa e ansiedade após cada mordida temendo ver o número acima de 180 ou 200 mg/dL.",
              },
              {
                icon: Users,
                title: "A Preocupação da Família",
                text: "O cansaço dos filhos ou cônjuges buscando receitas na internet que prometem saúde mas acabam sendo caras ou difíceis de preparar.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <c.icon className="text-brand" size={34} />
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-dark">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl bg-empathy p-6 text-center font-display text-base font-bold text-empathy-foreground shadow-sm sm:text-lg">
            Ter diabetes não significa renunciar ao prazer de sentar à mesa. Você só precisa do mapa de
            combinações e ingredientes de baixo impacto glicêmico.
          </p>
        </div>
      </section>

      {/* Transformação Antes vs Depois */}
      <BeforeAfterSection />

      {/* Amostra Exclusiva de Receitas */}
      <RecipePreviewSection />

      {/* Categorias */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-black sm:text-3xl">
            250 Opções Nutritivas e Saborosas para Cada Momento do Dia
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Primeiro cartão especial: Hábitos para Cuidar sua Diabetes */}
            <div className="rounded-2xl border-2 border-brand/40 bg-gradient-to-br from-mint/90 via-emerald-50 to-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-md shadow-brand/20">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-brand-dark">
                    ⭐ Cuidado Diário
                  </span>
                  <h3 className="font-display text-lg font-black text-foreground">Hábitos para Cuidar sua Diabetes</h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-brand-dark">
                Planeje suas refeições e registre suas dúvidas para revisar com seu médico ou nutricionista.
              </p>
            </div>

            {/* Categorias de receitas */}
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-brand/30"
              >
                <div className="text-3xl">{c.emoji}</div>
                <h3 className="mt-3 font-display text-lg font-bold">{c.title}</h3>
                <span className="mt-2 inline-block rounded-full bg-mint px-3 py-1 text-xs font-bold text-brand-dark">
                  {c.count}
                </span>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-brand-dark">{c.text}</p>
              </div>
            ))}

            {/* Último cartão especial: Bem-estar para Toda a Família */}
            <div className="rounded-2xl border-2 border-brand/40 bg-gradient-to-br from-mint/90 via-emerald-50 to-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-md shadow-brand/20">
                  <Users size={24} />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-brand-dark">
                    ⭐ Estilo de Vida
                  </span>
                  <h3 className="font-display text-lg font-black text-foreground">Bem-estar para Toda a Família</h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-brand-dark">
                Combine uma alimentação variada com movimento, descanso e o acompanhamento do seu profissional de saúde.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-md">
            <CtaButton subtitle="DOWNLOAD IMEDIATO EM PDF">Quero meu livro de receitas por R$ 19,90</CtaButton>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="bg-brand-dark px-4 py-16 text-white relative overflow-hidden">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="relative text-center">
            <div className="cover-shine-wrapper cover-glow-bonus bonus-section-book mx-auto w-56 rounded-lg sm:w-72">
              <img
                src={BONUS_EBOOK_COVER}
                onError={(e) => { e.currentTarget.src = bonusCoverAsset.url; }}
                alt="Capa oficial do e-book bônus Superando a Diabetes"
                loading="lazy"
                width={768}
                height={1089}
                className="w-full h-auto rounded-lg border-2 border-emerald-400/30"
              />
            </div>
            <span className="mt-5 inline-block rounded-full bg-mint px-4 py-1.5 text-xs font-black uppercase text-brand-dark shadow-md">
              Bônus Exclusivo Incluído
            </span>
          </div>
          <div className="text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-md sm:text-sm">
              <Gift size={18} /> Brinde Exclusivo Hoje (Valor: R$ 19,90 — GRÁTIS HOJE)
            </span>
            <h2 className="mt-5 text-center font-display text-2xl font-black text-white sm:text-3xl leading-tight">
              E-book Superando a Diabetes: Guia de Ação Rápida
            </h2>
            <p className="mt-3 text-center text-sm font-medium text-mint sm:text-base">
              O complemento perfeito para maximizar sua saúde e complementar o livro de receitas principal.
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Os 10 sinais precoces para evitar complicações irreversíveis (neuropatia, dano renal e vascular).",
                "O protocolo do sono e controle do estresse: como o cortisol sabota sua insulina sem você perceber.",
                "Suplementos e minerais essenciais (Magnésio, Cromo, Ômega-3 e Ácido Alfa-Lipoico).",
                "Guia de apps gratuitos para registrar glicemia e carboidratos no seu celular.",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-sm font-medium text-white/95 sm:text-base">
                  <Check className="mt-0.5 shrink-0 text-mint" size={22} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ReaderCarousel />

      {/* Preço */}
      <section id="comprar" className="scroll-mt-16 bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-brand/40 bg-white p-6 shadow-2xl sm:p-10">
          <div className="text-center">
            <span className="inline-block rounded-full bg-brand px-5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-sm">
              🔥 Oferta Especial de Lançamento
            </span>
          </div>
          <ul className="mt-8 space-y-3.5">
            {[
              ["Livro 250 Receitas para Diabéticos", "R$ 37,00"],
              ["E-book Superando a Diabetes (Bônus)", "R$ 19,00"],
              ["Atualizações digitais vitalícias", "Inestimável"],
            ].map(([label, value]) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 border-b border-border pb-3.5 text-sm sm:text-base"
              >
                <span className="flex min-w-0 items-center gap-2 font-semibold">
                  <Check className="shrink-0 text-brand stroke-[2.5]" size={20} />
                  <span className="text-foreground">{label}</span>
                </span>
                <span className="shrink-0 font-extrabold text-brand-dark">{value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-muted-foreground line-through">Preço Regular: R$ 56,00</p>
            <p className="mt-1 font-display text-4xl font-black text-brand sm:text-5xl">
              HOJE SOMENTE: R$ 19,90
            </p>
            <p className="mt-2 text-xs font-semibold text-muted-foreground sm:text-sm">
              Pagamento único sem assinaturas nem cobranças recorrentes. Acesso digital imediato.
            </p>
          </div>

          <div className="mt-8">
            <CtaButton href={CHECKOUT_URL} subtitle="ACESSO IMEDIATO - GARANTIA 7 DIAS">
              Baixar todo o pack por apenas R$ 19,90
            </CtaButton>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Lock size={15} className="text-brand" /> Criptografia SSL 256-bit
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck size={15} className="text-brand" /> Hotmart Verified
            </span>
            <span className="flex items-center gap-1.5">
              <Download size={15} className="text-brand" /> Download imediato em PDF
            </span>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border-2 border-brand/20 bg-white p-8 text-center shadow-lg sm:flex-row sm:text-left">
          <div className="guarantee-seal relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-mint text-center text-brand-dark shadow-md" aria-label="Garantia de 7 dias">
            <div className="guarantee-ring absolute -inset-1.5 rounded-full border-2 border-dashed border-brand pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center justify-center leading-none">
              <span className="text-[10px] font-black uppercase tracking-wider text-brand-dark">Garantia</span>
              <span className="font-display text-5xl font-black leading-none text-brand-dark my-0.5">7</span>
              <span className="text-xs font-black uppercase tracking-wider text-brand-dark">Dias</span>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-mint px-3 py-1 text-xs font-extrabold text-brand-dark mb-2">
              <ShieldCheck size={16} /> Compra 100% Livre de Risco
            </div>
            <h2 className="font-display text-xl font-black sm:text-2xl text-foreground">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-dark sm:text-base">
              Experimente as receitas durante 7 dias completos. Se sentir que não são fáceis, saborosas e
              amigáveis com sua glicemia, peça 100% do seu dinheiro de volta diretamente na
              Hotmart. Sem perguntas nem trâmites.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 pb-32 md:pb-16">
        <h2 className="mb-10 text-center font-display text-2xl font-black sm:text-3xl">
          Perguntas Frequentes
        </h2>
        <Faq />
        <div className="mx-auto mt-10 max-w-md">
          <CtaButton subtitle="DOWNLOAD IMEDIATO EM PDF">Obter o pack por R$ 19,90</CtaButton>
        </div>
      </section>

      <footer className="bg-surface px-4 py-8 pb-14 text-center text-xs text-muted-foreground">
        <p>
          Este material é informativo e não substitui a orientação do seu médico ou nutricionista.
        </p>
        <p className="mt-2 font-bold">© {new Date().getFullYear()} 250 Receitas para Diabéticos.</p>
      </footer>

      {/* Letrero eletrônico inferior fixo em português */}
      <div className="fixed inset-x-0 bottom-0 z-50 overflow-hidden bg-brand-dark py-2.5 text-[11px] font-bold text-white shadow-[0_-4px_20px_rgba(0,0,0,0.25)] sm:text-xs">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {[
                "✅ Página Oficial das 250 Receitas para Diabéticos",
                "🚨 Oferta especial para a América Latina: 78% de desconto só hoje",
                "⚡ Acesso imediato e vitalício em PDF",
                "🔒 Garantia incondicional de 7 dias",
              ].map((t) => (
                <span key={t} className="px-6 font-bold">
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Social Proof Toast de Compras ao Vivo */}
      <SocialProofToast />
    </div>
  );
}
