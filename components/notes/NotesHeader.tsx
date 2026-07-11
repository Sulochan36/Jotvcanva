import Link from "next/link";
import { Plus } from "lucide-react";

interface NotesHeaderProps {
    totalNotes: number;
    workspaceCount: number;
}

export default function NotesHeader({
    totalNotes,
    workspaceCount,
}: NotesHeaderProps) {
    return (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

                <h1 className="text-4xl font-bold tracking-tight">
                    All Notes
                </h1>

                <p className="mt-2 text-neutral-400">
                    You have <span className="text-white font-semibold">{totalNotes}</span> active notes across <span className="text-white font-semibold">{workspaceCount}</span> workspaces.
                </p>

            </div>

            <Link href="/dashboard/notes/create" className="flex items-center gap-2 rounded-2xl bg-[#b4abff] px-6 py-3 font-medium text-black shadow-[0_0_30px_rgba(180,171,255,.35)] transition hover:opacity-90">

                <Plus size={18} />

                New Note

            </Link>

        </div>
    );
}