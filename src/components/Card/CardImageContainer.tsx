import { useLayoutEffect, useMemo, useRef, MutableRefObject } from 'react';

const COLORS = [
  'hsl(10deg, 56%, 91%)',
  'hsl(0deg, 59%, 88%)',
  'hsl(316deg, 72%, 86%)',
  'hsl(267deg, 84%, 81%)',
  'hsl(343deg, 81%, 75%)',
  'hsl(350deg, 65%, 77%)',
  'hsl(23deg, 92%, 75%)',
  'hsl(41deg, 86%, 83%)',
  'hsl(115deg, 54%, 76%)',
  'hsl(170deg, 57%, 73%)',
  'hsl(189deg, 71%, 73%)',
  'hsl(199deg, 76%, 69%)',
  'hsl(217deg, 92%, 76%)',
  'hsl(232deg, 97%, 85%)'
];

interface CardImageContainerProps {
  children: React.ReactNode;
}

export default function CardImageContainer({ children }: CardImageContainerProps) {
    const gradientRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const shuffledColors = useMemo(() => {
    return COLORS.map((val) => ({ val, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ val }) => val);
  }, []);

  useLayoutEffect(() => {
    if (!gradientRef.current) return;
		const randomNumOfLayers = Math.floor(Math.random() * 6) + 1;
		const meshGradients = [];

		for (let i = 0; i < randomNumOfLayers; i++) {
			const start = Math.floor(Math.random() * 100);
			const end = Math.floor(Math.random() * 100);

			meshGradients.push(
				`radial-gradient(at ${Number(start)}% ${Number(end)}%, ${shuffledColors[i]} 0px, transparent 50%)`
			);
		}

    gradientRef.current.style.background = meshGradients.join(', ')
  });

    return (
      <section className="w-full xl:w-2/5 md:max-xl:h-2/5 rounded-tl-lg xl:rounded-bl-lg max-xl:rounded-tr-lg flex" style={ { backgroundColor: 'hsl(227deg, 35%, 80%)' } }>
        <div
          ref={gradientRef}
          className="w-full h-full p-5 rounded-tl-lg rounded-bl-lg max-xl:rounded-tr-lg flex place-content-center"
        >
          {children}
        </div>
      </section>
    )
}