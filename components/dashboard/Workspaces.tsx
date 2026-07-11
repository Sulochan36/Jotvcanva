import DashboardWorkspaceCard from "./DashboardWorkspaceCard";

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
        <section>

            <div className="mb-5 flex items-center justify-between">

                <h2 className="text-3xl font-semibold">
                    Workspaces
                </h2>

            </div>

            <div className="space-y-4">

                {workspaces.map((workspace) => (
                    <DashboardWorkspaceCard
                        key={workspace.name}
                        workspace={workspace.name}
                        count={workspace.count}
                    />
                ))}

            </div>

        </section>
    );
}