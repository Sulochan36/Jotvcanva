import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function NotePage({
    params,
}: {
    params: Promise<{ noteId: string }>;
}) {
    const { noteId } = await params;

    await connectDB();

    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    const note = await Note.findOne({
        _id: noteId,
        userId,
    });

    if (!note) {
        return <div>Note not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="border rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm border rounded-full px-3 py-1">
                        📁 {note.workspace}
                    </span>

                    <span className="text-sm border rounded-full px-3 py-1">
                        {note.theme}
                    </span>
                </div>

                <h1 className="text-4xl font-bold mb-4">
                    {note.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-6">
                    {note.tags.map((tag: string) => (
                        <Link
                            key={tag}
                            href={`/dashboard/tags/${tag}`}
                            className="border rounded-full px-3 py-1 text-sm"
                        >
                            #{tag}
                        </Link>
                    ))}
                </div>

                <div className="prose max-w-none">
                    <p>{note.content}</p>
                </div>

                <div className="flex gap-4 mt-8">
                    <Link
                        href={`/dashboard/notes/${note._id}/edit`}
                        className="border px-4 py-2 rounded"
                    >
                        Edit
                    </Link>

                    <Link
                        href={`/share/${note.slug}`}
                        className="border px-4 py-2 rounded"
                    >
                        Share
                    </Link>
                </div>
            </div>
        </div>
    );
}