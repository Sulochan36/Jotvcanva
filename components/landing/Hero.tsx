import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-28 pb-24">

            {/* Background */}

            <div className="absolute inset-0 bg-[#050505]" />

            <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

            <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

            <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-fuchsia-600/10 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Badge */}

                <div className="flex justify-center">

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">

                        <Sparkles size={15} className="text-violet-400" />

                        <span className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-300">
                            Crafted for Modern Thinkers
                        </span>

                    </div>

                </div>

                {/* Heading */}

                <div className="mx-auto mt-10 max-w-5xl text-center">

                    <h1 className="text-6xl font-black leading-[1.05] tracking-tight text-white md:text-8xl">

                        Your Ideas

                        <br />

                        <span className="bg-linear-to-r from-white via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                            Deserve Better
                        </span>

                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-zinc-400 md:text-xl">

                        JotCanva is your digital thinking space for notes,
                        workspaces, knowledge and creativity. Capture ideas,
                        organize projects and build your second brain without
                        distractions.

                    </p>

                </div>

                {/* CTA */}

                <div className="mt-12 flex flex-wrap justify-center gap-5">

                    <Link href="/sign-up" className="group flex items-center gap-2 rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(139,92,246,0.35)] transition hover:scale-105">

                        Start Writing

                        <ArrowRight size={18} className="transition group-hover:translate-x-1" />

                    </Link>

                    <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base text-white backdrop-blur-xl transition hover:border-violet-400 hover:bg-white/10">

                        Explore Demo

                    </button>

                </div>

                {/* Floating Dashboard */}

                <div className="relative mx-auto mt-24 max-w-6xl">

                    <div className="absolute -top-12 left-12 rounded-2xl border border-white/10 bg-[#0f0f12]/90 px-6 py-4 shadow-2xl backdrop-blur-xl">

                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Today's Notes
                        </p>

                        <p className="mt-2 text-3xl font-bold text-white">
                            24
                        </p>

                    </div>

                    <div className="absolute right-12 top-20 rounded-2xl border border-white/10 bg-[#0f0f12]/90 px-6 py-4 shadow-2xl backdrop-blur-xl">

                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Workspaces
                        </p>

                        <p className="mt-2 text-3xl font-bold text-violet-300">
                            8
                        </p>

                    </div>

                    <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#0d0d10] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">

                        <img
                            src="/dashboard-preview.png"
                            alt="Dashboard"
                            className="rounded-3xl"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}