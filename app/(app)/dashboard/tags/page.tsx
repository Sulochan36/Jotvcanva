import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";
import { Hash, ArrowRight } from "lucide-react";

export default async function TagsPage() {
    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    await connectDB();

    const notes = await Note.find({
        userId,
        isArchived: false,
    });

    const tagCounts: Record<string, number> = {};

    notes.forEach((note: any) => {
        note.tags.forEach((tag: string) => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });

    const tags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

    return (
        <div className="space-y-10">

            {/* Header */}

            <div>

                <h1 className="text-5xl font-bold tracking-tight">
                    Tags
                </h1>

                <p className="mt-3 text-zinc-400">
                    Browse your notes by topics and labels.
                </p>

                <div className="mt-6 flex gap-3">

                    <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                        {tags.length} Tags
                    </span>

                    <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                        {notes.length} Active Notes
                    </span>

                </div>

            </div>

            {/* Tags */}

            <div className="space-y-5">

                {tags.map(([tag, count]) => (

                    <Link
                        key={tag}
                        href={`/dashboard/tags/${tag}`}
                        className="group flex items-center justify-between rounded-3xl border border-white/10 bg-[#111111] p-7 transition-all duration-300 hover:border-[#b4abff]/40 hover:bg-[#151515]"
                    >

                        <div className="flex items-center gap-6">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b4abff]/10">

                                <Hash size={24} className="text-[#b4abff]" />

                            </div>

                            <div>

                                <h2 className="text-2xl font-semibold">
                                    #{tag}
                                </h2>

                                <p className="mt-2 text-sm text-zinc-400">
                                    Browse every note related to this topic.
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-10">

                            <div className="text-right">

                                <p className="text-2xl font-semibold">
                                    {count}
                                </p>

                                <p className="text-sm text-zinc-500">
                                    Notes
                                </p>

                            </div>

                            <ArrowRight size={20} className="text-zinc-600 transition group-hover:text-[#b4abff] group-hover:translate-x-1" />

                        </div>

                    </Link>

                ))}

            </div>

        </div>
    );
}