export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b]">

            {/* Mesh Gradient */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(180,171,255,.18),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,.14),transparent_25%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,.12),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,.16),transparent_30%)]" />

            {/* Grid */}

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[64px_64px]" />

            {/* Giant Brand Name */}

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">

                <h1 className="select-none text-[18vw] font-black uppercase -tracking-widest">

                    <span className="bg-[linear-gradient(110deg,#ffffff08_25%,#b4abff55_45%,#ffffff08_65%)] bg-size-[250%_100%] bg-clip-text text-transparent animate-[gradient_10s_linear_infinite]">
                        JotCanva
                    </span>

                </h1>

            </div>

            {/* Moving Glow */}

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">

                <div className="h-58 w-550 -rotate-12 bg-linear-to-r from-transparent via-[#b4abff]/30 to-transparent blur-3xl animate-[shine_10s_linear_infinite]" />

            </div>

            {/* Floating Orbs */}

            <div className="absolute left-24 top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[140px]" />

            {/* Clerk Dialog */}

            <div className="relative z-10 rounded-3xl border border-white/30 shadow-2xl shadow-white/20 bg-white/2 p-2 backdrop-blur-xl">
                {children}
            </div>

        </main>
    );
}