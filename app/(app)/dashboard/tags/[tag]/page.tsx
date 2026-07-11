import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";
import NoteCard from "@/components/notes/NoteCard";
import { ArrowLeft, Hash } from "lucide-react";

export default async function TagPage({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    await connectDB();

    const notes = await Note.find({
        userId,
        tags: tag,
        isArchived: false,
    });

    return (
        <div className="space-y-10">

            {/* Header */}

            <div>

                <Link href="/dashboard/tags" className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">

                    <ArrowLeft size={16} />

                    Back to Tags

                </Link>

                <div className="mt-6 flex items-center gap-4">

                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#b4abff]/10">

                        <Hash size={28} className="text-[#b4abff]" />

                    </div>

                    <div>

                        <h1 className="text-5xl font-bold">
                            #{tag}
                        </h1>

                        <p className="mt-2 text-zinc-400">
                            {notes.length} notes found under this topic.
                        </p>

                    </div>

                </div>

            </div>

            {/* Notes */}

            {notes.length === 0 ? (

                <div className="rounded-3xl border border-dashed border-white/10 bg-[#111111] py-24 text-center">

                    <Hash size={40} className="mx-auto mb-5 text-zinc-600" />

                    <h2 className="text-2xl font-semibold">
                        No notes found
                    </h2>

                    <p className="mt-3 text-zinc-500">
                        There aren't any notes with this tag yet.
                    </p>

                </div>

            ) : (

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

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
                            }}
                        />

                    ))}

                </div>

            )}

        </div>
    );
}