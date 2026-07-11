
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import HeroBanner from "@/components/dashboard/HeroBanner";
import Workspaces from "@/components/dashboard/Workspaces";
import PopularTags from "@/components/dashboard/PopularTags";
import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentNotes from "@/components/dashboard/RecentNotes";

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

    const workspaceData = workspaces.map((workspace) => ({
        name: workspace,
        count: notes.filter(
            (note) => note.workspace === workspace
        ).length,
    }));

    const recentNotes = notes.slice(0, 4).map((note) => ({
        ...note.toObject(),
        _id: note._id.toString(),
    }))

    return (
        <div className="space-y-10 p-8">
                <HeroBanner/>


            <StatsGrid
                totalNotes={totalNotes}
                favorites={favorites}
                archived={archived}
                workspaces={workspaces.length}
            />

            <div className="grid gap-10 xl:grid-cols-[2.2fr_1fr]">

                <RecentNotes notes={recentNotes} />

                <div className="space-y-6">
                    <Workspaces workspaces={workspaceData} />
                    <PopularTags tags={tags} />
                </div>

            </div>

            
        </div>
    );
}