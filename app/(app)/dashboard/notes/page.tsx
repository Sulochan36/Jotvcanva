import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";
import {
    deleteNote,
    toggleFavorite,
    archiveNote,
} from "@/actions/note.actions";
import { auth } from "@clerk/nextjs/server";
import NoteCard from "@/components/dashboard/NoteCard";

export default async function NotesPage() {

    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    await connectDB();

    const notes = await Note.find({
        userId,
    });

    return (
        <div className="p-8">
            <h1 className="text-2xl mb-6">All Notes</h1>

            <Link
                href="/dashboard/notes/create"
                className="bg-black text-white px-4 py-2 rounded"
            >
                Create Note
            </Link>

            <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
        </div>
    );
}