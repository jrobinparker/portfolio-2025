import { MutableRefObject, useLayoutEffect, useRef } from "react";
import "./styles.css";

interface CardProps {
  children: React.ReactNode;
  cardType?: "about" | "exp" | "proj";
  cardStyle?: string;
  expIdx?: number;
}

export default function Card({ children, expIdx, cardType, cardStyle }: CardProps) {
  const cardRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useLayoutEffect(() => {
    if (!cardRef.current) return;

    cardRef.current.classList.add("fade-in");
    setTimeout(() => cardRef.current?.classList.remove("fade-in"), 1000);
  }, [expIdx]);

  return (
    <div
      className={`xl:m-5 min-w-[300px] h-[700px] w-full ${cardStyle}`}
      ref={cardRef}
    >
      <div className={`relative ${cardType === "exp" ? "h-full" : "h-auto"}`}>
        <div className="absolute -inset-2 rounded-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-800 via-violet-500 to-zinc-400 opacity-50 blur-2xl"></div>
        <div
          className={`relative flex border border-zinc-700 rounded-lg bg-slate-800 shadow-lg flex-col h-full xl:flex-row min-h-[300px] w-full justify-start ${cardType === "exp" && `max-xl:pb-5 max-xl:mb-5 md:max-xl:max-h-[720px]`} ${cardType === "proj" && "xl:flex-col max-xl:h-auto xl:h-auto max-xl:max-w-[900px] max-xl:place-items-center mb-20"} ${cardType === "about" && "p-10 xl:h-auto max-xl:max-h-[1000px]"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
