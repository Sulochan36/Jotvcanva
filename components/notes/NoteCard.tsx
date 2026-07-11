import Link from "next/link";
import { Star, Archive, Trash2, Pencil, ArrowUpRight } from "lucide-react";
import {
    deleteNote,
    toggleFavorite,
    archiveNote,
} from "@/actions/note.actions";

interface NoteCardProps {
    note: {
        _id: string;
        title: string;
        content: string;
        workspace: string;
        tags: string[];
        theme: string;
        createdAt?: string;
        isFavorite?: boolean;
        isArchived?: boolean;
    };
}

export default function NoteCard({
    note,
}: NoteCardProps) {
    return (
        <div className="group flex h-full min-h-[340px] flex-col rounded-3xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b4abff]/40 hover:shadow-[0_0_35px_rgba(180,171,255,0.12)]">

            {/* Header */}

            <div className="mb-6 flex items-start justify-between">

                <div>

                    <p className="text-xs uppercase tracking-[0.22em] text-zinc-600">
                        {note.workspace}
                    </p>

                    {note.createdAt && (
                        <p className="mt-2 text-xs text-zinc-500">
                            {new Date(note.createdAt).toLocaleDateString()}
                        </p>
                    )}

                </div>

                <div className="flex items-center gap-1">

                    <form action={toggleFavorite.bind(null, note._id)}>

                        <button
                            type="submit"
                            className="rounded-lg p-2 transition hover:bg-neutral-800"
                        >
                            <Star
                                size={16}
                                className={
                                    note.isFavorite
                                        ? "fill-[#b4abff] text-[#b4abff]"
                                        : "text-zinc-500 hover:text-[#b4abff]"
                                }
                            />
                        </button>

                    </form>

                    <form action={archiveNote.bind(null, note._id)}>

                        <button
                            type="submit"
                            className="rounded-lg p-2 transition hover:bg-neutral-800"
                        >
                            <Archive
                                size={16}
                                className={
                                    note.isArchived
                                        ? "text-[#b4abff]"
                                        : "text-zinc-500 hover:text-[#b4abff]"
                                }
                            />
                        </button>

                    </form>

                    <form action={deleteNote.bind(null, note._id)}>

                        <button
                            type="submit"
                            className="rounded-lg p-2 transition hover:bg-red-500/10"
                        >
                            <Trash2
                                size={16}
                                className="text-zinc-500 hover:text-red-500"
                            />
                        </button>

                    </form>

                </div>

            </div>

            {/* Title */}

            <Link href={`/dashboard/notes/${note._id}`}>

                <h3 className="mb-4 text-2xl font-semibold leading-snug text-white line-clamp-2 transition group-hover:text-[#b4abff]">
                    {note.title}
                </h3>

            </Link>

            {/* Content */}

            <Link
                href={`/dashboard/notes/${note._id}`}
                className="flex-1"
            >

                <p className="text-[15px] leading-8 text-zinc-400 line-clamp-6">
                    {note.content}
                </p>

            </Link>

            {/* Tags */}

            <div className="mt-8 flex flex-wrap gap-2">

                {note.tags.slice(0, 3).map((tag) => (
                    <Link
                        key={tag}
                        href={`/dashboard/tags/${tag}`}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-zinc-400 transition hover:border-[#b4abff]/40 hover:text-[#b4abff]"
                    >
                        {tag}
                    </Link>
                ))}

            </div>

            {/* Footer */}

            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">

                <Link
                    href={`/dashboard/notes/${note._id}/edit`}
                    className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#b4abff]"
                >
                    <Pencil size={15} />
                    Edit
                </Link>

                <Link
                    href={`/dashboard/notes/${note._id}`}
                    className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#b4abff]"
                >
                    Open
                    <ArrowUpRight size={15} />
                </Link>

            </div>

        </div>
    );
}