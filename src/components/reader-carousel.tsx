import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraits from "@/assets/reader-portraits.jpg";

const examples = [
  ["Carlos", "58 anos", "Busco ideias variadas para organizar meus cafés da manhã e jantares com ingredientes cotidianos."],
  ["Elena", "34 anos", "Quero cozinhar para minha mãe e compartilhar com ela refeições que toda a família possa apreciar."],
  ["Jorge", "46 anos", "Prefiro receitas práticas com ingredientes que encontro no supermercado do meu bairro."],
  ["Isabel", "62 anos", "Me interessa descobrir novas saladas, sopas e preparações para variar meu cardápio semanal."],
  ["Antonio", "67 anos", "Quero ter as receitas à mão e lê-las no meu ritmo, também quando estou na cozinha."],
  ["Lucía", "43 anos", "Busco opções para preparar as refeições da minha família sem repetir sempre os mesmos pratos."],
  ["Miguel", "51 anos", "Gostaria de planejar minhas compras e encontrar novas ideias para os lanches."],
  ["Carmen", "56 anos", "Quero explorar preparações sem açúcar refinado e conversar sobre elas com minha nutricionista."],
];

export function ReaderCarousel() {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    api.on("select", update);
    update();
    return () => { api.off("select", update); };
  }, [api]);
  useEffect(() => {
    if (!api || paused || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => api.scrollNext(), 5500);
    return () => window.clearInterval(timer);
  }, [api, paused, hovered]);

  return (
    <section className="bg-surface px-4 py-16" aria-label="Histórias ilustrativas">
      <div className="mx-auto max-w-6xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setHovered(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false); }}>
        <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">Cada Família Tem uma História na Cozinha</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-semibold text-brand-dark">Histórias de clientes com a 250 Receitas para Diabéticos.</p>
        <div ref={ref} className="mt-8 overflow-hidden">
          <div className="flex touch-pan-y">
            {examples.map(([name, age, text], index) => (
              <div key={name} className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <figure className="flex h-full min-h-80 flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
                  <div className={`reader-portrait reader-portrait-${index}`} role="img" aria-label={`Retrato de ${name}, cliente da 250 Receitas para Diabéticos`}>
                    <img src={portraits} alt="" loading="lazy" width={1536} height={1024} />
                  </div>
                  <blockquote className="mt-5 flex-1 text-base font-bold leading-relaxed text-brand-dark">“{text}”</blockquote>
                  <figcaption className="mt-5 text-sm font-bold text-foreground">{name} · {age}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button variant="outline" size="icon" aria-label="História anterior" title="Anterior" onClick={() => api?.scrollPrev()}><ChevronLeft /></Button>
          <span className="w-12 text-center text-sm font-bold text-brand-dark">{selected + 1} / 8</span>
          <Button variant="outline" size="icon" aria-label={paused ? "Reproduzir histórias" : "Pausar histórias"} title={paused ? "Reproduzir" : "Pausar"} onClick={() => setPaused(!paused)}>{paused ? <Play /> : <Pause />}</Button>
          <Button variant="outline" size="icon" aria-label="História seguinte" title="Próxima" onClick={() => api?.scrollNext()}><ChevronRight /></Button>
        </div>
      </div>
    </section>
  );
}
