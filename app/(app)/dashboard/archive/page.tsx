import Link from "next/link";
import { Search, Archive } from "lucide-react";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { auth } from "@clerk/nextjs/server";
import NoteCard from "@/components/notes/NoteCard";

export default async function ArchivePage() {
    await connectDB();

    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    const archivedNotes = await Note.find({
        userId,
        isArchived: true,
    }).sort({
        updatedAt: -1,
    });

    const workspaceCounts = archivedNotes.reduce(
        (acc: Record<string, number>, note: any) => {
            acc[note.workspace] = (acc[note.workspace] || 0) + 1;
            return acc;
        },
        {}
    );

    const workspaces = Object.keys(workspaceCounts);

    return (
        <div className="space-y-10">

            {/* Header */}

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        Archive
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        Notes you've archived for later reference.
                    </p>

                </div>

                <div className="relative w-full max-w-md">

                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

                    <input
                        placeholder="Search archived notes..."
                        className="w-full rounded-2xl border border-white/10 bg-[#111111] py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-[#b4abff]/40"
                    />

                </div>

            </div>

            {/* Workspace Filters */}

            {workspaces.length > 0 && (
                <div className="flex flex-wrap gap-3">

                    <button className="rounded-full bg-[#b4abff]/20 px-4 py-2 text-sm font-medium text-[#b4abff]">
                        All Workspaces
                    </button>

                    {workspaces.map((workspace) => (
                        <button
                            key={workspace}
                            className="rounded-full border border-white/10 bg-[#171717] px-4 py-2 text-sm text-zinc-300 transition hover:border-[#b4abff]/40 hover:text-white"
                        >
                            {workspace}
                        </button>
                    ))}

                </div>
            )}

            {/* Empty State */}

            {archivedNotes.length === 0 ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#111111] text-center">

                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#b4abff]/10">

                        <Archive className="h-9 w-9 text-[#b4abff]" />

                    </div>

                    <h2 className="text-3xl font-semibold text-white">
                        Archive is empty
                    </h2>

                    <p className="mt-3 max-w-md text-zinc-400">
                        Archived notes will appear here. Restore them anytime from their note card.
                    </p>

                    <Link
                        href="/dashboard/notes"
                        className="mt-8 rounded-xl bg-[#b4abff] px-6 py-3 font-medium text-black transition hover:opacity-90"
                    >
                        Browse Notes
                    </Link>

                </div>
            ) : (
                <div className="columns-1 gap-6 md:columns-2 xl:columns-3">

                    {archivedNotes.map((note: any) => (
                        <div
                            key={note._id.toString()}
                            className="mb-6 break-inside-avoid"
                        >
                            <NoteCard
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
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}