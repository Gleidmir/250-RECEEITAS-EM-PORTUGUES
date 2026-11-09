import { useState } from "react";
import { Clock, ShieldCheck, Sparkles, ChefHat, Check } from "lucide-react";

const OFFICIAL_RECIPES = [
  {
    chapter: "Capítulo 1 — Café da Manhã",
    title: "Panqueca de Aveia com Canela",
    prepTime: "8 minutos",
    gi: "Baixo Índice Glicêmico",
    icon: "🥞",
    color: "from-amber-500/10 to-orange-500/5 border-amber-200",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
    ingredients: [
      "2 colheres de sopa de aveia em flocos finos",
      "1 ovo",
      "1/2 banana amassada",
      "Canela a gosto",
      "1 fio de óleo de coco",
    ],
    steps: [
      "Misture todos os ingredientes até formar uma massa homogênea.",
      "Aqueça a frigideira com o óleo de coco.",
      "Despeje a massa e doure dos dois lados.",
      "Sirva com canela por cima.",
    ],
    tip: "A canela ajuda a dar sabor doce sem necessidade de açúcar e estabiliza a glicemia.",
  },
  {
    chapter: "Capítulo 2 — Pratos Principais",
    title: "Salmão ao Forno com Aspargos",
    prepTime: "18 minutos",
    gi: "Sem Açúcares / Proteína Limpa",
    icon: "🐟",
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-200",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
    ingredients: [
      "1 filé de salmão fresco",
      "6 aspargos tenros",
      "Limão fresco a gosto",
      "Sal marinho, pimenta e alecrim a gosto",
      "1 fio de azeite de oliva virgem extra",
    ],
    steps: [
      "Tempere o salmão com limão, sal e alecrim.",
      "Coloque em uma assadeira junto com os aspargos.",
      "Asse a 200°C por 15-18 minutos até dourar.",
      "Sirva imediatamente com o molho do assado.",
    ],
    tip: "Rico em ômega-3, que favorece a saúde cardiovascular, frequentemente afetada em pessoas com diabetes.",
  },
  {
    chapter: "Capítulo 1 — Café da Manhã",
    title: "Omelete de Claras com Espinafre e Tomate",
    prepTime: "6 minutos",
    gi: "Proteína Máxima / Sem Carboidratos",
    icon: "🍳",
    color: "from-rose-500/10 to-red-500/5 border-rose-200",
    badgeBg: "bg-rose-100 text-rose-900 border-rose-300",
    ingredients: [
      "4 claras de ovo",
      "1 punhado de espinafre fresco",
      "1 tomate picado em cubos",
      "Sal, pimenta e orégano a gosto",
      "1 fio de azeite de oliva",
    ],
    steps: [
      "Bata as claras com sal e pimenta.",
      "Refogue o espinafre e o tomate no azeite por 2 minutos.",
      "Acrescente as claras batidas e cozinhe em fogo baixo até coagrarem.",
      "Termine com orégano e sirva quente.",
    ],
    tip: "Rica em proteína e praticamente sem carboidratos, ideal para manter a glicemia estável pela manhã.",
  },
  {
    chapter: "Capítulo 2 — Pratos Principais",
    title: "Lasanha de Berinjela com Carne Moída",
    prepTime: "25 minutos",
    gi: "Baixo Impacto Glicêmico",
    icon: "🍆",
    color: "from-purple-500/10 to-indigo-500/5 border-purple-200",
    badgeBg: "bg-purple-100 text-purple-900 border-purple-300",
    ingredients: [
      "2 berinjelas em lâminas finas",
      "300 g de carne moída magra",
      "Molho de tomate caseiro sem açúcar",
      "Queijo light ralado",
      "Ervas aromáticas a gosto",
    ],
    steps: [
      "Asse levemente as lâminas de berinjela em uma frigideira.",
      "Monte camadas alternando berinjela, carne moída refogada e molho de tomate caseiro.",
      "Cubra com queijo light ralado.",
      "Asse 25 minutos a 200°C até gratinar.",
    ],
    tip: "Substitui a massa tradicional de trigo, reduzindo mais de 80% dos carboidratos do prato.",
  },
];

export function RecipePreviewSection() {
  const [activeTab, setActiveTab] = useState(0);
  const recipe = OFFICIAL_RECIPES[activeTab];

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-4 py-1.5 text-xs font-black uppercase tracking-wide text-brand-dark">
            <Sparkles size={16} className="text-brand" /> Receitas Reais Incluídas no Livro
          </span>
          <h2 className="mt-4 font-display text-2xl font-black text-foreground sm:text-4xl">
            Visão Exclusiva das Receitas do E-book
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-brand-dark sm:text-base">
            Cada uma das 250 receitas vem organizada com ingredientes simples, preparo rápido e dicas nutricionais.
          </p>
        </div>

        {/* Seletor de Receitas */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {OFFICIAL_RECIPES.map((r, i) => (
            <button
              key={r.title}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition-all ${
                activeTab === i
                  ? "bg-brand text-white shadow-md scale-105"
                  : "bg-surface text-foreground border border-border hover:bg-mint/40"
              }`}
            >
              <span className="text-base">{r.icon}</span>
              <span>{r.title}</span>
            </button>
          ))}
        </div>

        {/* Cartão Detalhado da Receita */}
        <div className={`mt-8 rounded-3xl border-2 bg-gradient-to-b ${recipe.color} p-6 sm:p-8 shadow-xl transition-all duration-300`}>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">{recipe.icon}</span>
              <div>
                <span className={`inline-block rounded-full border px-3 py-0.5 text-[11px] font-black uppercase tracking-wide ${recipe.badgeBg}`}>
                  {recipe.chapter}
                </span>
                <h3 className="mt-1 font-display text-xl font-black text-foreground sm:text-2xl">
                  {recipe.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-muted-foreground">
              <span className="flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 shadow-2xs">
                <Clock size={15} className="text-brand" /> {recipe.prepTime}
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 shadow-2xs">
                <ShieldCheck size={15} className="text-emerald-600" /> {recipe.gi}
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {/* Ingredientes */}
            <div className="rounded-2xl border border-border/70 bg-white/90 p-5 shadow-xs">
              <h4 className="flex items-center gap-2 font-display text-base font-black text-foreground">
                <ChefHat size={18} className="text-brand" /> Ingredientes Fáceis de Encontrar:
              </h4>
              <ul className="mt-3.5 space-y-2">
                {recipe.ingredients.map((ing) => (
                  <li key={ing} className="flex items-start gap-2 text-xs font-bold text-brand-dark sm:text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand stroke-[3]" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Passos e Dica */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-border/70 bg-white/90 p-5 shadow-xs">
                <h4 className="font-display text-base font-black text-foreground mb-3">
                  Passo a Passo Rápido:
                </h4>
                <ol className="space-y-2 text-xs font-semibold text-brand-dark sm:text-sm">
                  {recipe.steps.map((step, idx) => (
                    <li key={step} className="flex gap-2">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint font-black text-[11px] text-brand-dark">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Dica Nutricional */}
              <div className="rounded-2xl border border-brand/30 bg-mint/50 p-4 text-xs font-bold text-brand-dark">
                💡 <span className="font-black text-foreground">Dica de Saúde:</span> {recipe.tip}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-mint/40 border border-brand/20 p-4 text-center text-xs font-bold text-brand-dark sm:text-sm max-w-2xl mx-auto shadow-sm">
          ✨ Isto é apenas uma amostra! O e-book inclui <span className="font-extrabold text-brand-dark underline">250 receitas completas divididas em 7 capítulos</span> por apenas <span className="font-black text-brand">R$ 19,90</span>.
        </div>
      </div>
    </section>
  );
}
