
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import Sidebar from "@/components/dashboard/Sidebar";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex flex-1 flex-col">

                <div className="flex-1 p-8">
                    {children}
                </div>

                <DashboardFooter/>

            </main>
        </div>
    );
}