import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";

export default async function WorkspacePage({
    params,
}: {
    params: Promise<{ workspace: string }>;
}) {
    const { workspace } = await params;

    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    await connectDB();

    const notes = await Note.find({
        userId,
        workspace,
        isArchived: false,
    });

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">
                📁 {workspace}
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

                        <div className="flex gap-2 mt-2 flex-wrap">
                            {note.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="border px-2 py-1 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}