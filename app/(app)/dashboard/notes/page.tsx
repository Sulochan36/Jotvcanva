import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";
import {
    deleteNote,
    toggleFavorite,
    archiveNote,
} from "@/actions/note.actions";
import { auth } from "@clerk/nextjs/server";

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

            <div className="mt-6 space-y-4">
                {notes.map((note: any) => (
                    <div key={note._id} className="border p-4 rounded">
                        <h2>{note.title}</h2>
                        <p>{note.workspace}</p>

                        <div className="flex gap-3 mt-4">
                            <Link href={`/dashboard/notes/${note._id}`}>
                                View
                            </Link>

                            <form action={toggleFavorite.bind(null, note._id.toString())}>
                                <button>Favorite</button>
                            </form>

                            <form action={archiveNote.bind(null, note._id.toString())}>
                                <button>Archive</button>
                            </form>

                            <form action={deleteNote.bind(null, note._id.toString())}>
                                <button className="text-red-500">Delete</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}