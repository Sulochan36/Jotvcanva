'use client';
import { Show, UserButton } from "@clerk/nextjs";
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
                className={`top-0 left-0 h-screen border-r transition-all duration-300 ${collapsed ? "w-20" : "w-72"}
                        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    {!collapsed && (
                        <div>
                            <Link href='/'>
                            <div className="flex items-center gap-2">
                                    <p className='text-md font-bold text-gray-500 rounded-full border bg-neutral-900 p-2'>
                                        JC
                                    </p>
                                    <h1 className="font-bold text-xl">
                                        JotCanva
                                    </h1>
                            </div>
                                
                            </Link>
                            

                            <p className="text-xs text-gray-500">
                                Visual Workspace
                            </p>
                        </div>
                    )}

                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="hidden md:block"
                    >
                        {collapsed ? (
                            <FiChevronRight />
                        ) : (
                            <FiChevronLeft />
                        )}
                    </button>

                    <button
                        onClick={() => setMobileOpen(false)}
                        className="md:hidden"
                    >
                        <FiX />
                    </button>
                </div>

                <nav className="p-3 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-lg px-3 py-3 transition
                                ${isActive ? "bg-black text-white" : "hover:bg-neutral-500"}`}
                            >
                                <Icon size={20} />

                                {!collapsed && (
                                    <span>
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-6 left-0 w-full px-3">
                    <Show when="signed-in">
                        <UserButton />
                    </Show>
                </div>
            </aside>
        </>
    );
}

export default Sidebar