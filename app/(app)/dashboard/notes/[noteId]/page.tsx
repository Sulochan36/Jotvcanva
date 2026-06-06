import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { FiEdit2, FiShare2 } from "react-icons/fi";

export default async function NotePage({
    params,
}: {
    params: Promise<{ noteId: string }>;
}) {
    const { noteId } = await params;

    await connectDB();

    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    const note = await Note.findOne({
        _id: noteId,
        userId,
    });

    if (!note) {
        return <div>Note not found</div>;
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">

            {/* Header */}

            <div className="flex items-center justify-between mb-10">

                <div className="flex items-center gap-3 text-sm text-zinc-500">
                    <Link href="/dashboard/workspaces">
                        Workspaces
                    </Link>

                    <span>›</span>

                    <Link href={`/dashboard/workspaces/${note.workspace}`}>
                        {note.workspace}
                    </Link>
                </div>

                <div className="flex items-center gap-3">

                    <Link
                        href={`/dashboard/notes/${note._id}/edit`}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 py-2 text-sm hover:border-violet-500/40"
                    >
                        <FiEdit2 />
                        Edit
                    </Link>

                    <Link
                        href={`/share/${note.slug}`}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 py-2 text-sm hover:border-violet-500/40"
                    >
                        <FiShare2 />
                        Share
                    </Link>

                </div>

            </div>

            {/* Note */}

            <article className="rounded-3xl border border-white/10 bg-[#111111] p-8 lg:p-12">

                <div className="flex flex-wrap items-center gap-3 mb-6">

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-zinc-400">
                        Note
                    </span>

                    <span className="text-sm text-zinc-500">
                        {new Date(
                            note.createdAt
                        ).toLocaleDateString()}
                    </span>

                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {note.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-10">
                    {note.tags.map((tag: string) => (
                        <Link
                            key={tag}
                            href={`/dashboard/tags/${tag}`}
                            className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-400 hover:border-violet-500/40 hover:text-violet-300 transition"
                        >
                            #{tag}
                        </Link>
                    ))}
                </div>

                <div className="h-px bg-white/10 mb-10" />

                <div className="max-w-none text-zinc-300 leading-8 text-lg whitespace-pre-wrap">
                    {note.content}
                </div>

            </article>

        </div>
    );
}