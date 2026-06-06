import Link from "next/link";
import { ChevronRight } from "lucide-react";

type WorkspaceCardProps = {
    workspace: string;
    count: number;
};

export default function WorkspaceCard({
    workspace,
    count,
}: WorkspaceCardProps) {
    return (
        <Link
            href={`/dashboard/workspaces/${workspace}`}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111] p-4 hover:border-violet-500/40 transition"
        >
            <div>
                <h3 className="font-medium">
                    {workspace}
                </h3>

                <p className="text-sm text-zinc-500">
                    {count} Notes
                </p>
            </div>

            <ChevronRight
                size={18}
                className="text-zinc-500"
            />
        </Link>
    );
}