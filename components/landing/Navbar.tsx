import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Navbar() {
    const { userId } = await auth();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <Link href="/" className="text-3xl font-bold tracking-tight text-violet-300">
                    JotCanva
                </Link>

                <nav className="hidden items-center gap-10 text-sm text-zinc-400 md:flex">
                    <a href="#product" className="hover:text-white transition">Product</a>
                    <a href="#features" className="hover:text-white transition">Features</a>
                    <a href="#pricing" className="hover:text-white transition">Pricing</a>
                </nav>

                {userId ? (
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="rounded-xl bg-violet-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-400">
                            Dashboard
                        </Link>

                        <UserButton />
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <Link href="/sign-in" className="text-sm text-zinc-400 hover:text-white">
                            Log In
                        </Link>

                        <Link href="/sign-up" className="rounded-xl bg-violet-300 px-5 py-2 text-sm font-medium text-black transition hover:scale-105">
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}