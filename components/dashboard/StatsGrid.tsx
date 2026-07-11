import {
    FileText,
    Star,
    Archive,
    LayoutGrid,
} from "lucide-react";

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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatsCard
                title="Total Notes"
                value={totalNotes}
                icon={FileText}
                badge="+4 this week"
            />

            <StatsCard
                title="Favorites"
                value={favorites}
                icon={Star}
            />

            <StatsCard
                title="Archived"
                value={archived}
                icon={Archive}
            />

            <StatsCard
                title="Workspaces"
                value={workspaces}
                icon={LayoutGrid}
            />

        </div>
    );
}