import Link from "next/link";
import NoteCard from "./NoteCard";

type RecentNotesProps = {
    notes: any[];
};

export default function RecentNotes({
    notes,
}: RecentNotesProps) {
    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-semibold">
                    Recent Notes
                </h2>

                <Link
                    href="/dashboard/notes"
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition"
                >
                    View All
                </Link>
            </div>

            {notes.length === 0 ? (
                <div className="border border-dashed rounded-2xl p-8 text-center text-zinc-500">
                    No notes found.
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-5">
                    {notes.map((note) => (
                        <NoteCard
                            key={note._id}
                            note={note}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}