import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";
import WorkspaceCard from "@/components/dashboard/WorkspaceCard";

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
                count: { $sum: 1 },
            },
        },
    ]);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">
                Workspaces
            </h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {workspaces.map((workspace) => (
                    <WorkspaceCard
                        key={workspace._id}
                        workspace={workspace._id}
                        count={workspace.count}
                    />
                ))}
            </div>
        </div>
    );
}