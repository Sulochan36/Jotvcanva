import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="px-6 py-32">

            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-[#0f1014] px-10 py-24 text-center">

                {/* Background Glow */}

                <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-[#b4abff]/15 blur-[140px]" />

                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

                <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

                <div className="relative z-10 mx-auto max-w-3xl">

                    <span className="inline-flex rounded-full border border-[#b4abff]/30 bg-[#b4abff]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#b4abff]">
                        Ready to Start?
                    </span>

                    <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
                        Turn scattered thoughts into
                        <span className="block text-[#b4abff]">
                            organized knowledge.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                        JotCanva helps you capture ideas, organize projects,
                        and build a workspace that grows with your thinking.
                    </p>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

                        <Link
                            href="/sign-up"
                            className="inline-flex items-center gap-2 rounded-2xl bg-[#b4abff] px-8 py-4 text-base font-semibold text-black transition hover:scale-[1.03]"
                        >
                            Start Creating
                            <ArrowRight size={18} />
                        </Link>

                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">

                        <span>✓ Free to start</span>

                        <span>✓ Secure authentication</span>

                        <span>✓ Beautiful workspaces</span>

                    </div>

                </div>

            </div>

        </section>
    );
}