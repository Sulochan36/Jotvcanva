import Link from "next/link";
import NoteCard from "../notes/NoteCard";

type RecentNotesProps = {
    notes: any[];
};

export default function RecentNotes({
    notes,
}: RecentNotesProps) {
    return (
        <section>

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-3xl font-semibold">
                    Recent Notes
                </h2>

                <Link
                    href="/dashboard/notes"
                    className="text-sm font-medium text-[#b4abff] hover:underline"
                >
                    View All
                </Link>

            </div>

            {notes.length === 0 ? (

                <div className="rounded-3xl border border-dashed border-white/10 p-12 text-center text-zinc-500">
                    No recent notes.
                </div>

            ) : (

                <div className="grid gap-6 md:grid-cols-2">

                    {notes.map((note) => (
                        <NoteCard
                            key={note._id}
                            note={note}
                        />
                    ))}

                </div>

            )}

        </section>
    );
}