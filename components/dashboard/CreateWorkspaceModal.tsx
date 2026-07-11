"use client";

import { createWorkspace } from "@/actions/workspace.action";
import { useState } from "react";



export default function CreateWorkspaceModal() {

    const [open, setOpen] = useState(false);

    return (
        <>

            <button
                onClick={() => setOpen(true)}
                className="flex min-h-[270px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#111111] transition hover:border-[#b4abff]/40"
            >

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-2xl">
                    +
                </div>

                <h3 className="text-2xl font-semibold">
                    Create Workspace
                </h3>

                <p className="mt-3 max-w-xs text-center text-sm leading-7 text-zinc-500">
                    Start a new environment for your next big idea.
                </p>

            </button>

            {open && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

                    <form
                        action={createWorkspace}
                        className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] p-8"
                    >

                        <h2 className="mb-6 text-2xl font-bold">
                            Create Workspace
                        </h2>

                        <input
                            name="name"
                            placeholder="Workspace Name"
                            className="mb-6 w-full rounded-xl border border-white/10 bg-[#191919] px-4 py-3 outline-none"
                        />

                        <div className="flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-xl border border-white/10 px-5 py-2"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="rounded-xl bg-[#b4abff] px-5 py-2 font-medium text-black"
                            >
                                Create
                            </button>

                        </div>

                    </form>

                </div>

            )}

        </>
    );
}