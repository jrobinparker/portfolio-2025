import { useLayoutEffect, useRef, MutableRefObject } from "react";
import generateGradient from "../../helpers/generateGradient";

interface CardImageContainerProps {
  children: React.ReactNode;
  cardType?: "exp" | "proj";
}

export default function CardImageContainer({
  children,
  cardType,
}: CardImageContainerProps) {
  const gradientRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useLayoutEffect(() => {
    if (!gradientRef.current) return;

    gradientRef.current.style.background = generateGradient();
  });

  return (
    <section
      className={`w-full xl:w-2/5 md:max-xl:h-2/5 flex rounded-tl-lg ${cardType === "proj" ? "xl:w-full lg:h-2/3 rounded-tr-lg" : "xl:rounded-bl-lg max-xl:rounded-tr-lg"}`}
      style={{ backgroundColor: "hsl(227deg, 35%, 80%)" }}
    >
      <div
        ref={gradientRef}
        className={`w-full h-full p-5 rounded-tl-lg ${cardType === "proj" ? "xl:w-full h-2/3 rounded-tr-lg" : "xl:rounded-bl-lg max-xl:rounded-tr-lg"} flex place-content-center`}
      >
        {children}
      </div>
    </section>
  );
}
