import { LayoutGrid, ShieldCheck, Sparkles } from "lucide-react";


export default function Features() {
    const features = [
        {
            icon: Sparkles,
            title: "Smart Notes",
            desc: "Capture ideas before they fade away.",
        },
        {
            icon: LayoutGrid,
            title: "Workspaces",
            desc: "Organize everything into focused environments.",
        },
        {
            icon: ShieldCheck,
            title: "Secure Archive",
            desc: "Keep your knowledge safe forever.",
        },
    ];

    return (
        <section id="features" className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-16 text-center text-4xl font-bold text-white">
                    Precision tools for the focused mind.
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/2 p-8 transition hover:-translate-y-1 hover:border-violet-500/20">
                            <feature.icon className="mb-6 h-8 w-8 text-violet-300" />

                            <h3 className="mb-4 text-xl font-semibold text-white">
                                {feature.title}
                            </h3>

                            <p className="text-zinc-400">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}