import { useState, useEffect } from "react";
import { ShoppingBag, X, CheckCircle2 } from "lucide-react";

const RECENT_PURCHASES = [
  { name: "Maria G.", city: "São Paulo, Brasil", time: "há 2 min" },
  { name: "Carlos R.", city: "Bogotá, Colômbia", time: "há 4 min" },
  { name: "Elena S.", city: "Santiago, Chile", time: "há 1 min" },
  { name: "Jorge M.", city: "Buenos Aires, Argentina", time: "há 5 min" },
  { name: "Lucía P.", city: "Lima, Peru", time: "há 3 min" },
  { name: "Antonio R.", city: "Montevideo, Uruguai", time: "há 6 min" },
  { name: "Carmen V.", city: "San José, Costa Rica", time: "há 2 min" },
  { name: "Rosa H.", city: "Guayaquil, Equador", time: "há 3 min" },
];

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Initial show after 3 seconds
    const initialTimer = setTimeout(() => setVisible(true), 3000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setVisible(true);
      }, 1000);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const current = RECENT_PURCHASES[index];

  return (
    <div
      className="fixed bottom-14 left-3 z-40 max-w-[320px] rounded-2xl border border-brand/30 bg-white/95 p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500 animate-in fade-in slide-in-from-bottom-5 sm:bottom-12 sm:left-4"
      role="status"
      aria-live="polite"
    >
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-2 text-muted-foreground hover:text-foreground p-1"
        aria-label="Fechar notificação"
      >
        <X size={14} />
      </button>

      <div className="flex items-center gap-3 pr-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-brand-dark shadow-sm">
          <ShoppingBag size={20} className="text-brand" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-xs font-black text-foreground">
            <span>{current.name}</span>
            <CheckCircle2 size={13} className="text-emerald-500 fill-emerald-100" />
            <span className="text-[10px] font-semibold text-muted-foreground">• {current.time}</span>
          </div>
          <p className="mt-0.5 text-[11px] font-bold leading-tight text-brand-dark">
            Adquiriu o <span className="font-extrabold text-foreground">Pack 250 Receitas + Bônus</span>
          </p>
          <span className="mt-0.5 block text-[10px] font-semibold text-muted-foreground">
            📍 {current.city}
          </span>
        </div>
      </div>
    </div>
  );
}
