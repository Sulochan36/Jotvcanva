import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import {
    FiArrowLeft,
    FiEdit2,
    FiShare2,
    FiFolder,
    FiCalendar,
    FiTag,
} from "react-icons/fi";

export default async function NotePage({ params}: {params: Promise<{ noteId: string }>}) {
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
        <div className="min-h-screen bg-[#0b0b0d] text-white">

            {/* Toolbar */}

            <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-[#0b0b0d]/90 px-8 backdrop-blur-xl">

                <Link href="/dashboard/notes" className="flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white">
                    <FiArrowLeft />
                    Back
                </Link>

                <div className="flex items-center gap-3">

                    <Link
                        href={`/dashboard/notes/${note._id}/edit`}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#141416] px-4 py-2 text-sm transition hover:border-violet-500/40"
                    >
                        <FiEdit2 />
                        Edit
                    </Link>

                    <Link
                        href={`/share/${note.slug}`}
                        className="flex items-center gap-2 rounded-xl bg-[#b4abff] px-5 py-2 text-sm font-medium text-black transition hover:opacity-90"
                    >
                        <FiShare2 />
                        Share
                    </Link>

                </div>

            </header>

            <main className="mx-auto max-w-4xl px-8 py-14">

                {/* Metadata */}

                <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-neutral-500">

                    <div className="flex items-center gap-2">
                        <FiFolder />
                        <Link href={`/dashboard/workspaces/${note.workspace}`} className="hover:text-white transition">
                            {note.workspace}
                        </Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <FiCalendar />
                        {new Date(note.createdAt).toLocaleDateString()}
                    </div>

                    <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs capitalize text-violet-300">
                        {note.theme}
                    </div>

                </div>

                {/* Title */}

                <h1 className="mb-8 text-5xl font-bold tracking-tight">
                    {note.title}
                </h1>

                {/* Tags */}

                {note.tags.length > 0 && (
                    <div className="mb-10 flex flex-wrap gap-3">

                        {note.tags.map((tag: string) => (
                            <Link
                                key={tag}
                                href={`/dashboard/tags/${tag}`}
                                className="flex items-center gap-2 rounded-full border border-white/10 bg-[#141416] px-4 py-2 text-sm text-neutral-300 transition hover:border-violet-500/40 hover:text-violet-300"
                            >
                                <FiTag size={13} />
                                {tag}
                            </Link>
                        ))}

                    </div>
                )}

                <div className="mb-10 h-px bg-white/10" />

                {/* Content */}

                <article className="whitespace-pre-wrap text-lg leading-9 text-neutral-300">
                    {note.content}
                </article>

            </main>

        </div>
    );
}