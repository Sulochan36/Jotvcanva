import { ArrowRight, Sparkles, FolderOpen, Tag } from "lucide-react";
import Link from "next/link";

export default function Showcase() {
    return (
        <section className="relative overflow-hidden py-32">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(180,171,255,0.12),transparent_55%)]" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

                {/* Left */}

                <div>

                    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                        Built for productivity
                    </span>

                    <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
                        Your workspace.
                        <br />
                        Your second brain.
                    </h2>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                        Organize thoughts, capture ideas instantly, and revisit
                        knowledge effortlessly. Everything stays structured,
                        searchable and beautifully organized.
                    </p>

                    <div className="mt-12 grid grid-cols-3 gap-8">

                        <div>
                            <h3 className="text-5xl font-bold text-white">
                                100+
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-500">
                                Notes organized
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-white">
                                24/7
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-500">
                                Access anywhere
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-white">
                                ∞
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-500">
                                Ideas captured
                            </p>
                        </div>

                    </div>


                </div>

                {/* Right */}

                <div className="relative">

                    <div className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-violet-500/20 blur-[120px]" />

                    <div className="relative rounded-[36px] border border-white/10 bg-[#111114] p-8 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

                        {/* Window */}

                        <div className="mb-8 flex items-center gap-2">

                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />

                        </div>

                        {/* Title */}

                        <div className="mb-8">

                            <div className="h-5 w-52 rounded-full bg-white/10" />

                            <div className="mt-4 h-3 w-80 rounded-full bg-white/5" />

                            <div className="mt-2 h-3 w-64 rounded-full bg-white/5" />

                        </div>

                        {/* Workspace */}

                        <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-[#18181c] p-5">

                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15">

                                    <FolderOpen className="text-violet-300" size={22} />

                                </div>

                                <div>

                                    <p className="font-medium text-white">
                                        Product Design
                                    </p>

                                    <p className="text-sm text-zinc-500">
                                        18 Notes
                                    </p>

                                </div>

                            </div>

                            <Sparkles className="text-violet-400" size={18} />

                        </div>

                        {/* Tags */}

                        <div className="mb-8 flex flex-wrap gap-3">

                            {["React", "Design", "AI", "Next.js"].map(tag => (

                                <div key={tag} className="flex items-center gap-2 rounded-full border border-white/10 bg-[#18181c] px-4 py-2">

                                    <Tag size={13} className="text-violet-300" />

                                    <span className="text-sm text-zinc-300">
                                        {tag}
                                    </span>

                                </div>

                            ))}

                        </div>

                        {/* Lines */}

                        <div className="space-y-4">

                            <div className="h-3 w-full rounded-full bg-white/5" />
                            <div className="h-3 w-5/6 rounded-full bg-white/5" />
                            <div className="h-3 w-3/4 rounded-full bg-white/5" />
                            <div className="h-3 w-full rounded-full bg-white/5" />
                            <div className="h-3 w-2/3 rounded-full bg-violet-400/20" />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}