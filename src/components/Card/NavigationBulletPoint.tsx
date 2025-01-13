import './styles.css';

interface NavigationBulletPointProps {
    idx: number;
    expIdx: number;
    setExpIdx: () => void;
}

export default function NavigationBulletPoint({ idx, expIdx, setExpIdx }: NavigationBulletPointProps) {
    return (
        <span
            className={`p-1.5 bg-zinc-100 rounded-full cursor-pointer ${idx !== expIdx && 'opacity-50'}`}
            onClick={setExpIdx}
        />
    )
}