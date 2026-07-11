import { LucideIcon } from "lucide-react";

type StatCardProps = {
    title: string;
    value: number;
    icon: LucideIcon;
    badge?: string;
};

export default function StatsCard({
    title,
    value,
    icon: Icon,
    badge,
}: StatCardProps) {
    return (
        <div className="group rounded-3xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:border-[#b4abff]/40 hover:shadow-[0_0_30px_rgba(180,171,255,0.12)]">

            <div className="mb-6 flex items-start justify-between">

                <div className="rounded-xl bg-white/5 p-3">
                    <Icon
                        size={20}
                        className="text-zinc-300"
                    />
                </div>

                {badge && (
                    <span className="rounded-full bg-[#b4abff]/15 px-3 py-1 text-[11px] font-medium text-[#b4abff]">
                        {badge}
                    </span>
                )}

            </div>

            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                {title}
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
                {value}
            </h2>

        </div>
    );
}