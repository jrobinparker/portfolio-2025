import { useLayoutEffect, useRef, MutableRefObject } from 'react';
import appleLogo from '../../assets/apple-logo.png';
import tsLogo from '../../assets/ts-logo.svg';
import jsLogo from '../../assets/js-logo.png';
import emberLogo from '../../assets/ember-logo.svg';
import phpLogo from '../../assets/php-logo.svg';
import sentryLogo from '../../assets/sentry-logo.svg';
import tailwindLogo from '../../assets/tailwind-logo.svg';
import swiftLogo from '../../assets/swift-logo.svg';

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

export default function Experience() {
  const gradientRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const shuffledColors = COLORS.map((val) => ({ val, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ val }) => val);

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
    <div className="w-full h-full flex flex-col place-content-center">
      <h1 className="text-zinc-100 mb-10">Experience</h1>
      <div className="h-3/4 w-3/4 self-center">
        <div className="text-zinc-100 flex flex-row h-full w-full rounded-lg bg-slate-900">
          <section className="w-2/5 h-full rounded-tl-lg rounded-bl-lg flex place-content-center place-items-center" style={ { backgroundColor: 'hsl(227deg, 35%, 80%)' } }>
            <div
              ref={gradientRef}
              className="h-full w-full p-20 rounded-tl-lg rounded-bl-lg"
            >
              <div className="place-items-center grid grid-rows-3 grid-flow-col gap-10">
                <img src={appleLogo} />
                <img src={emberLogo} />
                <img src={phpLogo}/>
                <img src={jsLogo} />
                <img src={tailwindLogo} />
                <img src={sentryLogo} />
                <img src={tsLogo} />
                <img src={swiftLogo} />
              </div>
            </div>
          </section>
          <div className="text-left w-3/5 h-full p-5 pl-10 text-bg">
            <h1 className="2xl:text-xl text-lg font-weight-bold mb-5">apple</h1>
            <h2 className="2xl:text-xl text-lg font-weight-semibold">software engineer</h2>
            <p className="2xl:text-xl text-md mb-5">
              about this position
            </p>
            <ul className="list-disc pl-10 md:text-base">
              <li>accomplishment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}