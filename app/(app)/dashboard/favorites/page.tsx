import Link from "next/link";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { auth } from "@clerk/nextjs/server";
import NoteCard from "@/components/dashboard/NoteCard";

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
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {favoriteNotes.map((note: any) => (
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