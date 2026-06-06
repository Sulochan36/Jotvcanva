import WorkspaceCard from "./WorkspaceCard";

type WorkspacesProps = {
    workspaces: {
        name: string;
        count: number;
    }[];
};

export default function Workspaces({
    workspaces,
}: WorkspacesProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                    Workspaces
                </h2>
            </div>

            <div className="space-y-3">
                {workspaces.map((workspace) => (
                    <WorkspaceCard
                        key={workspace.name}
                        workspace={workspace.name}
                        count={workspace.count}
                    />
                ))}
            </div>
        </div>
    );
}