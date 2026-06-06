import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-6 py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent_60%)]" />

            <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
                <div>
                    <span className="rounded-full border border-violet-500/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-violet-300">
                        Digital Sanctuary v2.0
                    </span>

                    <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
                        Capture ideas before they{" "}
                        <span className="italic text-violet-300">
                            disappear.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                        A high-performance workspace designed for digital creators,
                        architects of thought, and professionals who demand clarity.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <Link href="/sign-up" className="rounded-2xl bg-violet-300 px-8 py-4 font-medium text-black transition hover:scale-105">
                            Start Curating
                        </Link>

                        <button className="rounded-2xl border border-white/10 px-8 py-4 text-white transition hover:border-violet-400">
                            View Demo
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="rounded-4xl border border-violet-500/10 bg-zinc-950 p-8 shadow-[0_0_120px_rgba(139,92,246,0.25)]">
                        <img
                            src="/dashboard-preview.png"
                            alt="dashboard"
                            className="rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}