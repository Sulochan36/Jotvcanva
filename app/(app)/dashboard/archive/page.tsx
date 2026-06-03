import Link from "next/link";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";

export default async function ArchivePage() {
    await connectDB();

    const archivedNotes = await Note.find({
        isArchived: true,
    }).sort({ createdAt: -1 });

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
                <div className="space-y-4">
                    {archivedNotes.map((note: any) => (
                        <Link
                            key={note._id.toString()}
                            href={`/dashboard/notes/${note._id}`}
                            className="block border rounded p-4"
                        >
                            <h2 className="font-semibold text-lg">
                                {note.title}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {note.workspace}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}