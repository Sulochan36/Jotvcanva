export default function Showcase() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
                <div>
                    <h2 className="text-5xl font-bold text-white">
                        Architected for the creative flow.
                    </h2>

                    <p className="mt-6 text-zinc-400">
                        Every interaction is designed to reduce friction and
                        maximize clarity.
                    </p>

                    <div className="mt-10 flex gap-12">
                        <div>
                            <h3 className="text-4xl font-bold text-white">
                                99.9%
                            </h3>
                            <p className="text-zinc-500">
                                Uptime Focus
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-white">
                                256-bit
                            </h3>
                            <p className="text-zinc-500">
                                Encryption
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-4xl border border-white/10 bg-zinc-950 min-h-100" />
            </div>
        </section>
    );
}