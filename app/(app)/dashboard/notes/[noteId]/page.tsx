import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";

export default async function NotePage({params}: {params: { noteId: string };}) {
    const { noteId } = await params;

    await connectDB();

    const note = await Note.findById(noteId);

    if (!note) return <div>Note not found</div>;

    return (
        <div className="p-8">


            <h1 className="text-3xl">{note.title}</h1>
            <p className="mt-4">{note.content}</p>

            <Link
                href={`/dashboard/notes/${note._id}/edit`}
                className="mt-6 inline-block"
            >
                Edit
            </Link>

            <Link href={`/share/${note.slug}`}>
                Share Note
            </Link>
        </div>
    );
}