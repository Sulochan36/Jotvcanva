import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { createNote } from "@/actions/note.actions";
import NoteMetadata from "./NoteMetadata";
import EditorToolbar from "./EditorToolbar";
import TitleInput from "./TitleInput";
import ContentEditor from "./ContentEditor";
import Workspace from '@/models/workspace.model'


export default async function CreateNotePage() {
    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    await connectDB();

    const workspaces = (await Workspace.find({ userId })).map((workspace) => ({
        _id: workspace._id.toString(),
        name: workspace.name,
    }));

    const hasGeneral = workspaces.some(
        (workspace) => workspace.name === "General"
    );

    if (!hasGeneral) {
        workspaces.unshift({
            _id: "general",
            name: "General",
        } as any);
    }

    return (
        <form action={createNote}>

            <EditorToolbar />

            <main className="mx-auto max-w-5xl px-8 py-12">

                <NoteMetadata workspaces={workspaces} />
                <TitleInput />
                <ContentEditor />

            </main>

        </form>
    );
}