import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import WorkspaceCard from "@/components/dashboard/WorkspaceCard";
import CreateWorkspaceCard from "@/components/dashboard/CreateWorkspaceCard";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";
import CreateWorkspaceModal from "@/components/dashboard/CreateWorkspaceModal";

export default async function WorkspacesPage() {
    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    await connectDB();

    const workspaces = await Note.aggregate([
        {
            $match: {
                userId,
                isArchived: false,
            },
        },
        {
            $group: {
                _id: "$workspace",
                count: {
                    $sum: 1,
                },
            },
        },
    ]);

    return (
        <div className="space-y-10">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div>

                    <h1 className="text-5xl font-bold tracking-tight">
                        Workspaces
                    </h1>

                    <p className="mt-3 text-zinc-400">
                        Manage your collaborative environments and personal canvases.
                    </p>

                    <div className="mt-5 flex gap-3">

                        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                            {workspaces.length} Active Projects
                        </span>

                        <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-400">
                            Synced
                        </span>

                    </div>

                </div>

                <div className="flex gap-3">

                    <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 py-2 text-sm hover:border-violet-500/40 transition">

                        <SlidersHorizontal size={16} />

                        Filter

                    </button>

                    <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 py-2 text-sm hover:border-violet-500/40 transition">

                        <ArrowUpDown size={16} />

                        Sort

                    </button>

                </div>

            </div>

            {/* Grid */}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {workspaces.map((workspace) => (
                    <WorkspaceCard
                        key={workspace._id}
                        workspace={workspace._id}
                        count={workspace.count}
                    />
                ))}

                <CreateWorkspaceModal />

            </div>

        </div>
    );
}