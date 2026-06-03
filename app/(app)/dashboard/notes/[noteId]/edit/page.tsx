import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { updateNote } from "@/actions/note.actions";

export default async function EditPage({
    params,
}: {
    params: { noteId: string };
}) {
    const { noteId } = await params;

    await connectDB();

    const note = await Note.findById(noteId);

    if (!note) return <div>Note not found</div>;

    return (
        <form
            action={updateNote.bind(null, note._id.toString())}
            className="flex flex-col gap-4 p-8"
        >
            <input
                name="title"
                defaultValue={note.title}
                className="border p-2"
            />

            <textarea
                name="content"
                defaultValue={note.content}
                className="border p-2"
            />

            <input
                name="workspace"
                defaultValue={note.workspace}
                className="border p-2"
            />

            <input
                name="theme"
                defaultValue={note.theme}
                className="border p-2"
            />

            <button className="bg-black text-white p-2 rounded">
                Update Note
            </button>
        </form>
    );
}