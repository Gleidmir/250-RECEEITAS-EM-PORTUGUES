import { useState, useEffect } from "react";
import { Timer, Zap } from "lucide-react";

export function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59); // 14 min 59 sec

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 14 * 60 + 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-4 py-2 text-white shadow-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 text-center text-xs font-black uppercase tracking-wide sm:text-sm">
        <span className="inline-flex items-center gap-1.5 font-bold">
          <Zap size={16} className="fill-white text-white animate-pulse" />
          OFERTA DE LANÇAMENTO (78% OFF)! O PREÇO DE $5,90 USD EXPIRA EM:
        </span>
        <div className="inline-flex items-center gap-1 font-mono text-sm font-black bg-black/25 px-2.5 py-0.5 rounded-md border border-white/30 shadow-inner">
          <Timer size={15} className="mr-0.5 text-amber-200" />
          <span className="text-amber-100">{formattedMinutes}</span>
          <span className="animate-pulse">:</span>
          <span className="text-amber-100">{formattedSeconds}</span>
        </div>
      </div>
    </div>
  );
}
