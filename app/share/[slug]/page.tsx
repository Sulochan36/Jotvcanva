import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function SharedNotePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    await connectDB();

    const note = await Note.findOne({
        slug,
    });

    if (!note) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto py-10">
            <h1 className="text-4xl font-bold mb-4">
                {note.title}
            </h1>

            <p>{note.content}</p>
        </div>
    );
}