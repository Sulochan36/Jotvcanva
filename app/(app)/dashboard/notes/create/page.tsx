import { createNote } from "@/actions/note.actions";

export default function CreateNotePage() {
    return (
        <form action={createNote} className="flex flex-col gap-4 p-8">
            <input name="title" placeholder="Title" className="border p-2" />

            <textarea
                name="content"
                placeholder="Content"
                className="border p-2"
            />

            <input name="workspace" placeholder="Workspace" className="border p-2" />

            <input name="theme" placeholder="Theme" className="border p-2" />

            <button className="bg-black text-white p-2 rounded">
                Create Note
            </button>
        </form>
    );
}