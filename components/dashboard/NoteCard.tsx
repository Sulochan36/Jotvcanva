import Link from "next/link";

interface NoteCardProps {
    note: {
        _id: string;
        title: string;
        content: string;
        workspace: string;
        tags: string[];
        theme: string;
    };
}

const themeStyles: Record<string, string> = {
    aurora: "bg-purple-500",
    ocean: "bg-blue-50",
    forest: "bg-green-500",
    sunset: "bg-orange-50",
    midnight: "bg-slate-400",
};

export default function NoteCard({
    note,
}: NoteCardProps) {
    return (
        <Link
            href={`/dashboard/notes/${note._id}`}
            className={`
                block
                rounded-3xl
                border
                p-5
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
                ${themeStyles[note.theme] || "bg-transparent"}
            `}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium">
                    {note.workspace}
                </span>

                <span className="text-xs capitalize">
                    {note.theme}
                </span>
            </div>

            <h3 className="font-bold text-lg mb-2 line-clamp-1">
                {note.title}
            </h3>

            <p className="text-sm text-gray-600 line-clamp-3">
                {note.content}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
                {note.tags?.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full border"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}