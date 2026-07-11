import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative mt-32 border-t border-white/10 bg-[#09090b]">

            {/* Glow */}

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b4abff]/40 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">

                    {/* Brand */}

                    <div>

                        <h2 className="bg-gradient-to-r from-white to-[#b4abff] bg-clip-text text-4xl font-black tracking-tight text-transparent">
                            JotCanva
                        </h2>

                        <p className="mt-6 max-w-md text-[15px] leading-8 text-zinc-400">
                            A modern workspace for creators, developers,
                            designers and thinkers to capture ideas,
                            organize knowledge and build their second brain.
                        </p>

                        <p className="mt-8 text-sm text-zinc-500">
                            Crafted with Next.js, Clerk & MongoDB.
                        </p>

                    </div>

                    {/* Product */}

                    <div>

                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                            Product
                        </h3>

                        <div className="space-y-3 text-zinc-500">

                            <Link
                                href="#features"
                                className="block transition hover:text-white"
                            >
                                Features
                            </Link>

                            <Link
                                href="/sign-up"
                                className="block transition hover:text-white"
                            >
                                Get Started
                            </Link>

                            <Link
                                href="/dashboard"
                                className="block transition hover:text-white"
                            >
                                Dashboard
                            </Link>

                        </div>

                    </div>

                    {/* Resources */}

                    <div>

                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                            Resources
                        </h3>

                        <div className="space-y-3 text-zinc-500">

                            <Link
                                href="#"
                                className="block transition hover:text-white"
                            >
                                Documentation
                            </Link>

                            <Link
                                href="#"
                                className="block transition hover:text-white"
                            >
                                Changelog
                            </Link>

                            <Link
                                href="#"
                                className="block transition hover:text-white"
                            >
                                Support
                            </Link>

                        </div>

                    </div>

                    {/* Connect */}

                    <div>

                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                            Connect
                        </h3>

                        <div className="space-y-3 text-zinc-500">

                            <Link
                                href="https://github.com"
                                className="block transition hover:text-[#b4abff]"
                            >
                                GitHub
                            </Link>

                            <Link
                                href="https://linkedin.com"
                                className="block transition hover:text-[#b4abff]"
                            >
                                LinkedIn
                            </Link>

                            <Link
                                href="https://x.com"
                                className="block transition hover:text-[#b4abff]"
                            >
                                X (Twitter)
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-zinc-500 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} JotCanva. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">

                        <Link
                            href="#"
                            className="transition hover:text-white"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="#"
                            className="transition hover:text-white"
                        >
                            Terms
                        </Link>

                        <span className="text-zinc-700">
                            Built with ❤️ using Next.js
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    );
}