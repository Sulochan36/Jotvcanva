import Link from "next/link";
import { FolderOpen, FileText } from "lucide-react";

type WorkspaceCardProps = {
    workspace: string;
    count: number;
};

export default function WorkspaceCard({
    workspace,
    count,
}: WorkspaceCardProps) {
    return (
        <Link href={`/dashboard/workspaces/${workspace}`} className="group flex min-h-[270px] flex-col rounded-3xl border border-white/10 bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b4abff]/40 hover:shadow-[0_0_40px_rgba(180,171,255,0.08)]">

            <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b4abff]/10 text-[#b4abff]">

                    <FolderOpen size={26} />

                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    Personal
                </span>

            </div>

            <div className="mt-8">

                <h3 className="text-2xl font-semibold">
                    {workspace}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Organize your ideas, notes, research and documents inside this workspace.
                </p>

            </div>

            <div className="mt-auto flex items-center justify-between pt-10">

                <div className="flex items-center gap-2 text-sm text-zinc-500">

                    <FileText size={16} />

                    {count} Notes

                </div>

                <span className="text-sm text-[#b4abff] opacity-0 transition group-hover:opacity-100">
                    Open →
                </span>

            </div>

        </Link>
    );
}