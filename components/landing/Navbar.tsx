import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

export default async function Navbar() {
    const { userId } = await auth();

    return (
        <header className="sticky top-0 z-50 px-6 pt-6">

            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#111111]/80 px-7 backdrop-blur-2xl">

                {/* Logo */}

                <Link href="/" className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b4abff] font-black text-black shadow-[0_0_35px_rgba(180,171,255,0.35)]">
                        JC
                    </div>

                    <div>

                        <h1 className="text-xl font-bold tracking-tight text-white">
                            JotCanva
                        </h1>

                        <p className="text-xs text-zinc-500">
                            Your Creative Workspace
                        </p>

                    </div>

                </Link>

                {/* Navigation */}

                <nav className="hidden items-center gap-10 md:flex">

                    <a href="#features" className="text-sm font-medium text-zinc-400 transition hover:text-white">
                        Features
                    </a>

                    <a href="#showcase" className="text-sm font-medium text-zinc-400 transition hover:text-white">
                        Showcase
                    </a>

                    <a href="#faq" className="text-sm font-medium text-zinc-400 transition hover:text-white">
                        FAQ
                    </a>

                </nav>

                {/* Actions */}

                {userId ? (

                    <div className="flex items-center gap-4">

                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 rounded-xl bg-[#b4abff] px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.03]"
                        >
                            Dashboard
                            <ArrowRight size={16} />
                        </Link>

                        <UserButton/>

                    </div>

                ) : (

                    <div className="flex items-center gap-3">

                        <Link
                            href="/sign-in"
                            className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/sign-up"
                            className="flex items-center gap-2 rounded-xl bg-[#b4abff] px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.03]"
                        >
                            Get Started
                            <ArrowRight size={16} />
                        </Link>

                    </div>

                )}

            </div>

        </header>
    );
}