import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import Link from "next/link";

export default async function TagsPage() {
    const { userId } = await auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    await connectDB();

    const notes = await Note.find({
        userId,
        isArchived: false,
    });

    const tagCounts: Record<string, number> = {};

    notes.forEach((note: any) => {
        note.tags.forEach((tag: string) => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">
                Tags
            </h1>

            <div className="grid gap-4">
                {Object.entries(tagCounts).map(
                    ([tag, count]) => (
                        <Link
                            key={tag}
                            href={`/dashboard/tags/${tag}`}
                            className="border rounded-lg p-5"
                        >
                            <h2 className="text-xl font-semibold">
                                #{tag}
                            </h2>

                            <p>{count} Notes</p>
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}