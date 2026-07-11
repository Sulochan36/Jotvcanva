'use client';

import Link from "next/link";
import {
    ArrowLeft,
    Bold,
    Italic,
    Link2,
    Image,
    List,
    Cloud,
    SunMedium,
} from "lucide-react";

const EditorToolbar = () => {
    return (
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-neutral-800 bg-[#0f0f11]/90 px-8 backdrop-blur-xl">

            {/* Left */}

            <div className="flex items-center gap-6">

                <Link href="/dashboard/notes" className="rounded-lg p-2 transition hover:bg-neutral-800">
                    <ArrowLeft className="h-5 w-5 text-neutral-300" />
                </Link>

                <div className="text-sm text-neutral-500">
                    Workspace
                    <span className="mx-2">/</span>

                    <span className="font-medium text-neutral-200">
                        Creative Strategist
                    </span>
                </div>

            </div>

            {/* Center */}

            <div className="hidden md:flex items-center rounded-2xl border border-neutral-800 bg-neutral-900/70 px-2 py-1 shadow-lg">

                <button type="button" className="rounded-lg p-2 text-neutral-300 transition hover:bg-neutral-800">
                    <Bold size={18} />
                </button>

                <button type="button" className="rounded-lg p-2 text-neutral-300 transition hover:bg-neutral-800">
                    <Italic size={18} />
                </button>

                <button type="button" className="rounded-lg p-2 text-neutral-300 transition hover:bg-neutral-800">
                    <Link2 size={18} />
                </button>

                <div className="mx-2 h-6 w-px bg-neutral-700" />

                <button type="button" className="rounded-lg p-2 text-neutral-300 transition hover:bg-neutral-800">
                    <Image size={18} />
                </button>

                <button type="button" className="rounded-lg p-2 text-neutral-300 transition hover:bg-neutral-800">
                    <List size={18} />
                </button>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

                <div className="hidden items-center gap-2 text-sm text-neutral-500 md:flex">
                    <Cloud size={16} />
                    Draft Saved
                </div>

                <button
                    type="button"
                    className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
                >
                    <SunMedium size={18} />
                </button>

                <button
                    type="submit"
                    className="rounded-xl bg-[#b4abff] px-6 py-2 text-sm font-medium text-black transition hover:opacity-90"
                >
                    Publish
                </button>

            </div>

        </header>
    );
};

export default EditorToolbar;