'use client'
import Link from "next/link";
import { useUser } from "@clerk/nextjs";



export default function HeroBanner() {
    

    const { user } = useUser();

    const hour = new Date().getHours();

    let greeting = "Evening";

    if (hour < 12) {
        greeting = "Morning";
    } else if (hour < 16) {
        greeting = "Afternoon";
    }
    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#1b1a25] via-[#17171d] to-[#101014] p-8 md:p-10">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold text-white">
                    Good {greeting}, {user?.firstName} 👋
                </h1>

                <p className="mt-3 text-zinc-400">
                    Capture ideas before they disappear.
                    Your creative workspace is ready.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                    <Link
                        href="/dashboard/notes/create"
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#b4abff] px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
                    >
                        +
                        Create Note
                    </Link>

                    <button className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-3 text-white transition hover:border-[#b4abff]/40 hover:bg-white/[0.04]">
                        Quick Workspace
                    </button>

                </div>
            </div>

            <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 text-[250px] font-black text-violet-500/10 lg:block">
                {greeting=="Evening" ? "🌚" : greeting=="Afternoon"? "☀️" : "🌞"}📝
            </div>
        </div>
    );
}