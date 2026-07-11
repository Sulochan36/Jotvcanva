import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { Search, Plus, LayoutGrid, List } from "lucide-react";
import NoteCard from "@/components/notes/NoteCard";

export default async function NotesPage() {
    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    await connectDB();

    const notes = await Note.find({
        userId,
        isArchived: false,
    }).sort({
        updatedAt: -1,
    });

    const workspaces = [...new Set(notes.map((note) => note.workspace))];

    return (
        <div className="space-y-10">

            {/* Header */}

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                <div>

                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        All Notes
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        You have <span className="font-semibold text-white">{notes.length}</span> active notes across <span className="font-semibold text-white">{workspaces.length}</span> workspaces.
                    </p>

                </div>

                <div className="flex flex-col gap-4 sm:flex-row">

                    {/* <div className="relative">

                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

                        <input
                            placeholder="Search notes..."
                            className="h-12 w-72 rounded-2xl border border-white/10 bg-[#111111] pl-11 pr-4 text-sm outline-none transition focus:border-[#b4abff]/50"
                        />

                    </div> */}

                    <Link
                        href="/dashboard/notes/create"
                        className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#b4abff] px-6 font-medium text-black transition hover:opacity-90"
                    >
                        <Plus size={18} />
                        New Note
                    </Link>

                </div>

            </div>

            {/* Filters */}

            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex flex-wrap items-center gap-3">

                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                        Workspace
                    </span>

                    <button className="rounded-xl bg-[#b4abff]/20 px-4 py-2 text-sm font-medium text-[#b4abff]">
                        All
                    </button>

                    {workspaces.map((workspace) => (
                        <Link
                            key={workspace}
                            href={`/dashboard/workspaces/${workspace}`}
                            className="rounded-xl border border-white/10 bg-[#111111] px-4 py-2 text-sm text-zinc-300 transition hover:border-[#b4abff]/40 hover:text-white"
                        >
                            {workspace}
                        </Link>
                    ))}

                </div>

                <div className="flex items-center gap-5">

                    <div className="flex items-center gap-2 text-sm text-zinc-500">

                        <span className="uppercase tracking-wider">
                            Sort:
                        </span>

                        <span className="font-medium text-white">
                            Last Modified
                        </span>

                    </div>

                    <div className="flex rounded-xl border border-white/10 bg-[#111111]">

                        <button className="border-r border-white/10 p-3 text-zinc-400 transition hover:text-white">
                            <LayoutGrid size={18} />
                        </button>

                        <button className="p-3 text-zinc-400 transition hover:text-white">
                            <List size={18} />
                        </button>

                    </div>

                </div>

            </div>

            {/* Notes */}

            {notes.length === 0 ? (

                <div className="flex h-[450px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#111111] text-center">

                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#b4abff]/10">

                        <Plus size={34} className="text-[#b4abff]" />

                    </div>

                    <h2 className="text-2xl font-semibold text-white">
                        No notes yet
                    </h2>

                    <p className="mt-3 max-w-md text-zinc-400">
                        Your digital workspace is empty. Start capturing ideas, research and thoughts.
                    </p>

                    <Link
                        href="/dashboard/notes/create"
                        className="mt-8 rounded-2xl bg-[#b4abff] px-6 py-3 font-medium text-black transition hover:opacity-90"
                    >
                        Create Your First Note
                    </Link>

                </div>

            ) : (

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

                    {notes.map((note: any) => (
                        <NoteCard
                            key={note._id.toString()}
                            note={{
                                _id: note._id.toString(),
                                title: note.title,
                                content: note.content,
                                workspace: note.workspace,
                                tags: note.tags,
                                theme: note.theme,
                                createdAt: note.createdAt?.toString(),
                                isFavorite: note.isFavorite,
                                isArchived: note.isArchived,
                            }}
                        />
                    ))}

                </div>

            )}

        </div>
    );
}