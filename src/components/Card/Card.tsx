import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import './styles.css';

interface CardProps {
    children: React.ReactNode;
    cardType?: 'about' | 'exp' | 'proj';
    expIdx?: number;
}

export default function Card({ children, expIdx, cardType }: CardProps) {
    const cardRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useLayoutEffect(() => {
        if (!cardRef.current) return;
        
        cardRef.current.classList.add('fade-in');
        setTimeout(() => cardRef.current?.classList.remove('fade-in'), 1000);
    }, [expIdx])

    return (
        <div className={`xl:m-5 min-w-[300px] h-[700px] w-full ${cardType === 'exp' && `max-xl:h-auto max-xl:mx-5`} ${cardType === 'proj' && 'max-sm:h-1/3 max-sm:mb-5'} ${cardType === 'about' && 'h-auto max-xl:mx-5'}`} ref={cardRef}>
            <div className={`flex rounded-lg bg-slate-800 shadow-lg flex-col h-full xl:flex-row min-h-[300px] w-full justify-start ${cardType === 'exp' && `max-xl:pb-5 max-xl:h-auto`} ${(cardType === 'proj' && 'xl:flex-col max-xl:h-auto xl:h-auto max-xl:max-w-[900px] max-xl:place-items-center mb-20')} ${cardType === 'about' && 'p-10 xl:h-auto xl:max-h-[1000px]'}`}>
                {children}
            </div>
        </div>
    )
}