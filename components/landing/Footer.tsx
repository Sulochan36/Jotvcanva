export default function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-20">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-5">
                <div>
                    <h2 className="text-2xl font-bold text-violet-300">
                        JotCanva
                    </h2>

                    <p className="mt-4 text-sm text-zinc-500">
                        The premium environment for digital thought.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 font-semibold text-white">
                        Product
                    </h3>
                    <div className="space-y-2 text-zinc-500">
                        <p>Features</p>
                        <p>Workspaces</p>
                        <p>Security</p>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 font-semibold text-white">
                        Company
                    </h3>
                    <div className="space-y-2 text-zinc-500">
                        <p>About</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 font-semibold text-white">
                        Resources
                    </h3>
                    <div className="space-y-2 text-zinc-500">
                        <p>Docs</p>
                        <p>Community</p>
                        <p>Changelog</p>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 font-semibold text-white">
                        Socials
                    </h3>
                    <div className="space-y-2 text-zinc-500">
                        <p>X</p>
                        <p>LinkedIn</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}