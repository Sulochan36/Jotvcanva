import NoteCard from "./NoteCard";

interface Note {
    _id: string;
    title: string;
    content: string;
    workspace: string;
    tags: string[];
    theme: string;
}

interface NotesGridProps {
    notes: Note[];
}

export default function NotesGrid({
    notes,
}: NotesGridProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {notes.map((note) => (
                <NoteCard
                    key={note._id}
                    note={note}
                />
            ))}

        </div>
    );
}