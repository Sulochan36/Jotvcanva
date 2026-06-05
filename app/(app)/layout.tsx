
import Sidebar from "@/components/dashboard/Sidebar";
import { Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}