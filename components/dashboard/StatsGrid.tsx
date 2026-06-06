
import StatsCard from "./StatsCard";

type Props = {
    totalNotes: number;
    favorites: number;
    archived: number;
    workspaces: number;
};

export default function StatsGrid({
    totalNotes,
    favorites,
    archived,
    workspaces,
}: Props) {
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <StatsCard title="Total Notes" value={totalNotes} />
            <StatsCard title="Favorites" value={favorites} />
            <StatsCard title="Archived" value={archived} />
            <StatsCard title="Workspaces" value={workspaces} />
        </div>
    );
}