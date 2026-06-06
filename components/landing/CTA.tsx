import Link from "next/link";

export default function CTA() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-linear-to-b from-violet-500/10 to-transparent p-16 text-center">
                <h2 className="text-5xl font-bold text-white">
                    Start building your second brain today.
                </h2>

                <p className="mt-6 text-zinc-400">
                    Join thousands organizing their ideas with JotCanva.
                </p>

                <Link href="/sign-up" className="mt-10 inline-flex rounded-2xl bg-violet-300 px-8 py-4 font-medium text-black transition hover:scale-105">
                    Get Access Now
                </Link>
            </div>
        </section>
    );
}