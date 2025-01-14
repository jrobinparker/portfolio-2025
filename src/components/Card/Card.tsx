import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import './styles.css';

interface CardProps {
    children: React.ReactNode;
    expIdx: number;
}

export default function Card({ children, expIdx }: CardProps) {
    const cardRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useLayoutEffect(() => {
        if (!cardRef.current) return;
        
        cardRef.current.classList.add('fade-in');
        setTimeout(() => cardRef.current?.classList.remove('fade-in'), 1000);
    }, [expIdx])

    return (
        <div className="xl:m-5 min-w-[225px] w-full h-[600px] sm:max-md:h-2/5" ref={cardRef}>
            <div className="text-zinc-100 flex rounded-lg bg-slate-800 shadow-lg flex-col xl:flex-row min-h-[300px] h-full w-full justify-start">
                {children}
            </div>
        </div>
    )
}