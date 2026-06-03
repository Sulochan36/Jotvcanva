import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";

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
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">
                #{tag}
            </h1>

            <div className="space-y-4">
                {notes.map((note: any) => (
                    <div
                        key={note._id}
                        className="border rounded-lg p-4"
                    >
                        <Link
                            href={`/dashboard/notes/${note._id}`}
                        >
                            <h2 className="font-semibold">
                                {note.title}
                            </h2>
                        </Link>

                        <p className="text-sm">
                            📁 {note.workspace}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}