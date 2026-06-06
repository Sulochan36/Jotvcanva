import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface NoteCardProps {
    note: {
        _id: string;
        title: string;
        content: string;
        workspace: string;
        tags: string[];
        theme: string;
    };
}

export default function NoteCard({
    note,
}: NoteCardProps) {
    return (
        <Link href={`/dashboard/notes/${note._id}`} className="group block rounded-3xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-center justify-between mb-5">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-400">
                    📁 {note.workspace}
                </span>

                <ArrowUpRight size={18} className="text-zinc-500 transition group-hover:text-violet-400" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white line-clamp-1">
                {note.title}
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                {note.content}
            </p>

            <div className="flex flex-wrap gap-2">
                {note.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-300">
                        #{tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}