import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";

export default async function DashboardPage() {
    await connectDB();

    const notes = await Note.find();

    const totalNotes = notes.length;
    const favorites = notes.filter((note) => note.isFavorite).length;
    const archived = notes.filter((note) => note.isArchived).length;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>

                <Link
                    href="/dashboard/notes/create"
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Create Note
                </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="border rounded p-4">
                    <h2 className="text-lg font-semibold">Total Notes</h2>
                    <p className="text-2xl">{totalNotes}</p>
                </div>

                <div className="border rounded p-4">
                    <h2 className="text-lg font-semibold">Favorites</h2>
                    <p className="text-2xl">{favorites}</p>
                </div>

                <div className="border rounded p-4">
                    <h2 className="text-lg font-semibold">Archived</h2>
                    <p className="text-2xl">{archived}</p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Recent Notes
                </h2>

                <div className="grid gap-4">
                    {notes.slice(0, 5).map((note) => (
                        <Link
                            key={note._id.toString()}
                            href={`/dashboard/notes/${note._id}`}
                            className="border rounded p-4 block"
                        >
                            <h3 className="font-semibold">{note.title}</h3>
                            <p className="text-sm text-gray-600">
                                {note.workspace}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}