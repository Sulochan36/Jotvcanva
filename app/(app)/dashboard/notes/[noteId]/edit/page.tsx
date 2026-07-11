import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { updateNote } from "@/actions/note.actions";
import { auth } from "@clerk/nextjs/server";
import EditorToolbar from "../../create/EditorToolbar";
import NoteMetadata from "../../create/NoteMetadata";
import TitleInput from "../../create/TitleInput";
import ContentEditor from "../../create/ContentEditor";

export default async function EditPage({
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

    const workspaces = await Note.distinct("workspace", {
        userId,
    });

    return (
        <form action={updateNote.bind(null, note._id.toString())}>

            <EditorToolbar />

            <main className="mx-auto max-w-5xl px-8 py-10">

                <div className="rounded-3xl border border-neutral-800 bg-[#111111] p-10 shadow-2xl">

                    <NoteMetadata
                        workspaces={workspaces}
                        defaultWorkspace={note.workspace}
                        defaultTags={note.tags.join(", ")}
                    />

                    <TitleInput defaultValue={note.title}/>
            

                    <ContentEditor defaultValue={note.content} />

                    <input
                        type="hidden"
                        name="theme"
                        value={note.theme}
                    />

                </div>

            </main>

        </form>
    );
}