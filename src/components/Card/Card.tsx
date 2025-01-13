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
        <div className="ml-10" ref={cardRef}>
            <div className="text-zinc-100 flex w-[1500px] h-full rounded-lg bg-slate-800 shadow-lg">
                {children}
            </div>
        </div>
    )
}