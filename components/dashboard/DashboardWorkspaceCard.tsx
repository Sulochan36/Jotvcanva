import Link from "next/link";
import {
    ChevronRight,
    FolderOpen,
} from "lucide-react";

type Props = {
    workspace: string;
    count: number;
};

export default function DashboardWorkspaceCard({
    workspace,
    count,
}: Props) {
    return (
        <Link
            href={`/dashboard/workspaces/${workspace}`}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111] p-4 transition hover:border-[#b4abff]/40 hover:bg-[#151518]"
        >
            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    <FolderOpen
                        size={20}
                        className="text-[#b4abff]"
                    />
                </div>

                <div>
                    <h3 className="font-medium text-white">
                        {workspace}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                        {count} Notes
                    </p>
                </div>

            </div>

            <ChevronRight
                size={18}
                className="text-zinc-600 transition group-hover:text-[#b4abff]"
            />
        </Link>
    );
}