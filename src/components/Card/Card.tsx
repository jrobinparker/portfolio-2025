export default function Card({ children }) {
    return (
        <div className="h-full w-3/4 self-center">
            <div className="text-zinc-100 flex flex-row h-full w-full rounded-lg bg-slate-900">
                {children}
            </div>
        </div>
    )
}