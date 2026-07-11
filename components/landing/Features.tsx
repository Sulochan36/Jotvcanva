import {
    Sparkles,
    LayoutGrid,
    ShieldCheck,
    FolderKanban,
    BrainCircuit,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Features() {
    return (
        <section id="features" className="relative overflow-hidden py-32">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                        Everything you need
                    </span>

                    <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
                        Built for people who think,
                        create and organize.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        JotCanva combines elegant note taking, structured workspaces,
                        intelligent organization and beautiful writing into one
                        distraction-free experience.
                    </p>

                </div>

                <div className="grid gap-6 lg:grid-cols-12">

                    {/* Large */}

                    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0f12] p-10 lg:col-span-7">

                        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/15 blur-[120px]" />

                        <Sparkles className="mb-8 h-10 w-10 text-violet-400" />

                        <h3 className="text-3xl font-bold text-white">
                            Smart Note Taking
                        </h3>

                        <p className="mt-5 max-w-lg text-lg leading-8 text-zinc-400">
                            Capture ideas instantly, structure your thoughts,
                            organize with tags and never lose inspiration again.
                        </p>

                        <div className="mt-12 rounded-2xl border border-white/10 bg-black/30 p-6">

                            <div className="mb-3 h-4 w-40 rounded bg-white/10" />

                            <div className="mb-2 h-3 w-full rounded bg-white/5" />

                            <div className="mb-2 h-3 w-4/5 rounded bg-white/5" />

                            <div className="h-3 w-2/3 rounded bg-violet-400/30" />

                        </div>

                    </div>

                    {/* Workspace */}

                    <div className="rounded-[32px] border border-white/10 bg-[#0f0f12] p-8 lg:col-span-5">

                        <LayoutGrid className="mb-6 h-8 w-8 text-cyan-400" />

                        <h3 className="text-2xl font-semibold text-white">
                            Workspaces
                        </h3>

                        <p className="mt-4 leading-7 text-zinc-400">
                            Separate projects, clients and personal knowledge into
                            beautiful dedicated environments.
                        </p>

                    </div>

                    {/* AI */}

                    <div className="rounded-[32px] border border-white/10 bg-[#0f0f12] p-8 lg:col-span-4">

                        <BrainCircuit className="mb-6 h-8 w-8 text-violet-400" />

                        <h3 className="text-2xl font-semibold text-white">
                            Your Second Brain
                        </h3>

                        <p className="mt-4 text-zinc-400 leading-7">
                            Connect ideas together and build a personal knowledge
                            system that grows with you.
                        </p>

                    </div>

                    {/* Archive */}

                    <div className="rounded-[32px] border border-white/10 bg-[#0f0f12] p-8 lg:col-span-4">

                        <ShieldCheck className="mb-6 h-8 w-8 text-emerald-400" />

                        <h3 className="text-2xl font-semibold text-white">
                            Secure Archive
                        </h3>

                        <p className="mt-4 text-zinc-400 leading-7">
                            Archive notes instead of deleting them and revisit
                            important thoughts anytime.
                        </p>

                    </div>

                    {/* Organization */}

                    <div className="rounded-[32px] border border-white/10 bg-[#0f0f12] p-8 lg:col-span-4">

                        <FolderKanban className="mb-6 h-8 w-8 text-orange-400" />

                        <h3 className="text-2xl font-semibold text-white">
                            Organize Everything
                        </h3>

                        <p className="mt-4 text-zinc-400 leading-7">
                            Powerful tags, collections and favorites keep your
                            knowledge structured without effort.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}