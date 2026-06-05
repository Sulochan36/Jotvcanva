import Link from "next/link";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { auth } from "@clerk/nextjs/server";
import NoteCard from "@/components/dashboard/NoteCard";

export default async function ArchivePage() {
    await connectDB();

    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    const archivedNotes = await Note.find({
        userId,
        isArchived: true,
    });

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">
                Archived Notes
            </h1>

            <p className="mb-6">
                Total Archived: {archivedNotes.length}
            </p>

            {archivedNotes.length === 0 ? (
                <p>No archived notes found.</p>
            ) : (
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {archivedNotes.map((note: any) => (
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