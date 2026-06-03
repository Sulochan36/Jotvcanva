
import { Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex">
            <aside className="w-64 p-6 border-r">
                <h1 className="text-2xl font-bold mb-8">JotCanva</h1>

                <nav className="flex flex-col gap-4">
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/dashboard/notes">Notes</Link>
                    <Link href="/dashboard/workspaces">Workspaces</Link>
                    <Link href="/dashboard/tags">Tags</Link>
                    <Link href="/dashboard/favorites">Favorites</Link>
                    <Link href="/dashboard/archive">Archive</Link>
                    <Link href="/dashboard/settings">Settings</Link>
                </nav>

                <Show when="signed-in">
                    <UserButton />
                </Show>
            </aside>

            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}