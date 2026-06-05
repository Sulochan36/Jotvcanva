import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";
import NoteCard from "@/components/dashboard/NoteCard";

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

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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