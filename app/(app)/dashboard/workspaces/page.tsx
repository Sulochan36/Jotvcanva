import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";

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

            <div className="grid gap-4">
                {workspaces.map((workspace) => (
                    <Link
                        key={workspace._id}
                        href={`/dashboard/workspaces/${workspace._id}`}
                        className="border rounded-lg p-5"
                    >
                        <h2 className="text-xl font-semibold">
                            📁 {workspace._id}
                        </h2>

                        <p>{workspace.count} Notes</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}