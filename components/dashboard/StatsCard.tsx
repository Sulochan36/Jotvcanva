type StatCardProps = {
    title: string;
    value: number;
};

export default function StatsCard({title,value}: StatCardProps) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0f1014] p-5">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
                {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
                {value}
            </h2>
        </div>
    );
}