import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import Header from "@/components/dashboard/Header";
import StatsCard from "@/components/dashboard/StatsCard";
import NoteCard from "@/components/dashboard/NoteCard";
import WorkspaceCard from "@/components/dashboard/WorkspaceCard";

export default async function DashboardPage() {
    await connectDB();

    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    const notes = await Note.find({
        userId,
    });

    const totalNotes = notes.length;
    const favorites = notes.filter((note) => note.isFavorite).length;
    const archived = notes.filter((note) => note.isArchived).length;
    const workspaces = [...new Set(notes.map((note) => note.workspace))];

    const tags = [...new Set(notes.flatMap((note) => note.tags)),];

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <Header/>

                <Link
                    href="/dashboard/notes/create"
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Create Note
                </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-10">
                <StatsCard
                    title="Notes"
                    value={totalNotes}
                />

                <StatsCard
                    title="Favorites"
                    value={favorites}
                />

                <StatsCard
                    title="Archived"
                    value={archived}
                />

                <StatsCard
                    title="Workspaces"
                    value={workspaces.length}
                />
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Recent Notes
                </h2>

                <div className="grid gap-4">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {notes.slice(0, 6).map((note) => (
                            <NoteCard
                                key={note._id.toString()}
                                note={{
                                    ...note.toObject(),
                                    _id: note._id.toString(),
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Workspaces
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {workspaces.map((workspace) => {
                        const count = notes.filter(
                            (note) =>
                                note.workspace === workspace
                        ).length;

                        return (
                            <WorkspaceCard
                                key={workspace}
                                workspace={workspace}
                                count={count}
                            />
                        );
                    })}
                </div>
            </section>


            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Popular Tags
                </h2>

                <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                        <Link
                            key={tag}
                            href={`/dashboard/tags/${tag}`}
                            className="border rounded-full px-3 py-2"
                        >
                            #{tag}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}