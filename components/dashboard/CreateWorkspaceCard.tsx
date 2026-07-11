import { Plus } from "lucide-react";

export default function CreateWorkspaceCard() {
    return (
        <button className="flex min-h-[270px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#111111] transition hover:border-[#b4abff]/40">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10">

                <Plus size={24} />

            </div>

            <h3 className="text-2xl font-semibold">
                Create Workspace
            </h3>

            <p className="mt-3 max-w-xs text-center text-sm leading-7 text-zinc-500">
                Start a new environment for your next big idea.
            </p>

        </button>
    );
}