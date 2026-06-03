import Link from "next/link";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { auth } from "@clerk/nextjs/server";

export default async function FavoritesPage() {
    await connectDB();

    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    const favoriteNotes = await Note.find({
        userId,
        isFavorite: true,
    });

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Favorite Notes
            </h1>

            {favoriteNotes.length === 0 ? (
                <p>No favorite notes found.</p>
            ) : (
                <div className="space-y-4">
                    {favoriteNotes.map((note: any) => (
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