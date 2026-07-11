import Link from "next/link";

interface WorkspaceFilterProps {
    workspaces: string[];
}

export default function WorkspaceFilter({
    workspaces,
}: WorkspaceFilterProps) {
    return (
        <div className="flex flex-wrap items-center gap-3">

            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Workspace
            </span>

            <Link href="/dashboard/notes" className="rounded-xl bg-[#2a2740] px-4 py-2 text-sm text-[#b4abff]">
                All
            </Link>

            {workspaces.map((workspace) => (
                <Link key={workspace} href={`/dashboard/workspaces/${workspace}`} className="rounded-xl border border-neutral-800 bg-[#151515] px-4 py-2 text-sm text-neutral-300 transition hover:border-[#b4abff]/40 hover:text-white">

                    {workspace}

                </Link>
            ))}

        </div>
    );
}