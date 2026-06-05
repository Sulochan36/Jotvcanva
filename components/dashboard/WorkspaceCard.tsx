import Link from "next/link";

interface WorkspaceCardProps {
    workspace: string;
    count: number;
}

export default function WorkspaceCard({
    workspace,
    count,
}: WorkspaceCardProps) {
    return (
        <Link
            href={`/dashboard/workspaces/${workspace}`}
            className="
                block
                rounded-3xl
                border
                p-5
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
            "
        >
            <div className="text-3xl mb-3">
                📁
            </div>

            <h3 className="font-semibold text-lg">
                {workspace}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
                {count} Notes
            </p>
        </Link>
    );
}