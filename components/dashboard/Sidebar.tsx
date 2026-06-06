'use client';
import { Show, UserButton,useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    FiMenu,
    FiX,
    FiHome,
    FiFileText,
    FiFolder,
    FiTag,
    FiStar,
    FiArchive,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";

const navItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: FiHome,
    },
    {
        label: "Notes",
        href: "/dashboard/notes",
        icon: FiFileText,
    },
    {
        label: "Workspaces",
        href: "/dashboard/workspaces",
        icon: FiFolder,
    },
    {
        label: "Tags",
        href: "/dashboard/tags",
        icon: FiTag,
    },
    {
        label: "Favorites",
        href: "/dashboard/favorites",
        icon: FiStar,
    },
    {
        label: "Archive",
        href: "/dashboard/archive",
        icon: FiArchive,
    },
];

const Sidebar = () => {
    const { user } = useUser();
    const pathname = usePathname();

    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Button */}

            <button
                onClick={() => setMobileOpen(true)}
                className="fixed top-4 left-4 z-50 md:hidden border p-2 rounded"
            >
                <FiMenu size={20} />
            </button>

            {/* Mobile Overlay */}

            {mobileOpen && (
                <div
                    className="fixed inset-0  z-40 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Sidebar */}

            <aside
                className={`fixed md:sticky top-0 left-0 z-40 h-screen bg-[#0d0d0d] border-r border-white/10 transition-all duration-300 flex flex-col ${collapsed ? "w-20" : "w-72"} ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
                    {!collapsed && (
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 font-bold text-white">
                                JC
                            </div>

                            <div>
                                <h2 className="font-semibold text-white">
                                    JotCanva
                                </h2>

                                <p className="text-xs text-zinc-500">
                                    Visual Workspace
                                </p>
                            </div>
                        </Link>
                    )}

                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="hidden md:flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/5"
                    >
                        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
                    </button>

                    <button
                        onClick={() => setMobileOpen(false)}
                        className="md:hidden"
                    >
                        <FiX />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        const isActive =
                            pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all ${isActive ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20" : "text-zinc-400 hover:bg-white/5 hover:text-white"}`}
                            >
                                <Icon size={18} />

                                {!collapsed && (
                                    <span className="font-medium">
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="border-t border-white/10 p-4">
                    <Show when="signed-in">
                        <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>

                            <UserButton />

                            {!collapsed && (
                                <div className="overflow-hidden">
                                    <p className="text-sm font-medium text-white truncate">
                                        {user?.fullName || user?.firstName}
                                    </p>

                                    <p className="text-xs text-zinc-500 truncate">
                                        {user?.primaryEmailAddress?.emailAddress}
                                    </p>
                                </div>
                            )}

                        </div>
                    </Show>
                </div>
            </aside>
        </>
    );
}

export default Sidebar