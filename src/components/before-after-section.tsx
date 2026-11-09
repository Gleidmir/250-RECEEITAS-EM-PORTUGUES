import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.hotmart.com/R107911179I?checkoutMode=10";

export function BeforeAfterSection() {
  return (
    <section className="bg-gradient-to-b from-surface via-white to-surface px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-dark">
            ⚖️ A Escolha para Sua Saúde e Tranquilidade
          </span>
          <h2 className="mt-4 font-display text-2xl font-black text-foreground sm:text-4xl">
            Veja a Diferença no Seu Dia a Dia
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-brand-dark sm:text-base">
            Compare como muda sua rotina quando você tem o guia certo na sua cozinha.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Card ANTES */}
          <div className="rounded-3xl border-2 border-rose-200 bg-rose-50/70 p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-rose-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-white">
              Sem as 250 Receitas
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose-100 text-rose-600">
                <XCircle size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-black text-rose-950">A Rotina de Privação e Medo</h3>
                <p className="text-xs font-bold text-rose-700">O caminho difícil e frustrante</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {[
                "Medo e ansiedade constante ao medir a glicemia depois de comer.",
                "Comida sem sabor, seca e insípida (peito de frango grelhado e alface sem mais).",
                "Sensação de isolamento enquanto o resto da família come bem.",
                "Gasto de dinheiro em produtos 'light' de supermercado carregados de químicos.",
                "Frustração de não saber o que preparar para o café da manhã, almoço ou jantar.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-rose-900">
                  <XCircle className="mt-0.5 shrink-0 text-rose-500" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card DEPOIS */}
          <div className="rounded-3xl border-2 border-brand/50 bg-gradient-to-br from-mint/90 via-emerald-50 to-white p-6 sm:p-8 shadow-xl relative overflow-hidden transform transition-transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-brand px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
              ⭐ Com as 250 Receitas
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-md shadow-brand/30">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-black text-foreground">Sua Nova Vida à Mesa</h3>
                <p className="text-xs font-extrabold text-brand-dark">Tranquilidade, sabor e variedade diária</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {[
                "Glicemia sob controle com receitas de baixo impacto glicêmico calculadas.",
                "250 opções deliciosas: sobremesas cremosas, cafés da manhã saciantes e jantares familiares.",
                "Toda a família come o mesmo prato delicioso sem cozinhar comidas separadas.",
                "Ingredientes econômicos e comuns do seu supermercado habitual.",
                "Acesso imediato em PDF no seu celular para consultar a qualquer momento.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-bold text-brand-dark">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                asChild
                variant="sales"
                className="sales-pulse group h-auto min-h-14 w-full rounded-2xl px-6 py-3.5 text-center shadow-lg"
              >
                <a href={CHECKOUT_URL} className="flex items-center justify-center gap-2 text-base font-black uppercase tracking-wide">
                  <span>Transformar minhas refeições por $5,90</span>
                  <ArrowRight className="shrink-0 stroke-[3] transition-transform duration-300 group-hover:translate-x-1.5 animate-arrow-nudge" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
