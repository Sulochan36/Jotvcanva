"use client";

import { useUser } from "@clerk/nextjs";

const Header = () => {
    const { user } = useUser();

    const hour = new Date().getHours();

    let greeting = "Evening";

    if (hour < 12) {
        greeting = "Morning";
    } else if (hour < 16) {
        greeting = "Afternoon";
    }

    return (
        <div className="rounded-3xl border p-6">
            <h1 className="text-3xl font-bold">
                Good {greeting}, {user?.firstName} 👋
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
                Capture ideas before they disappear.
            </p>
        </div>
    );
};

export default Header;