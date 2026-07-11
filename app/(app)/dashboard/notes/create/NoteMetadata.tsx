'use client';

import { ChevronDown, FolderOpen, Plus, Tag } from "lucide-react";

interface WorkspaceItem {
    _id: string;
    name: string;
}

interface NoteMetadataProps {
    workspaces: WorkspaceItem[];
    defaultWorkspace?: string;
    defaultTags?: string;
}

const NoteMetadata = ({
    workspaces,
    defaultWorkspace,
    defaultTags,
}: NoteMetadataProps) => {
    return (
        <section className="mb-12 flex flex-wrap items-center gap-4">

            {/* Workspace */}

            <div className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3">

                <FolderOpen size={18} className="text-neutral-400" />

                <select
                    name="workspace"
                    defaultValue={defaultWorkspace}
                    className="bg-transparent text-sm text-neutral-200 outline-none"
                >
                    {workspaces.map((workspace) => (
                        <option
                            key={workspace._id}
                            value={workspace.name}
                            className="bg-[#171717]"
                        >
                            {workspace.name}
                        </option>
                    ))}
                </select>

                <ChevronDown size={16} className="text-neutral-500" />

            </div>

            {/* Tags */}

            <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2">

                <Tag size={15} className="text-neutral-400" />

                <input
                    name="tags"
                    defaultValue={defaultTags}
                    placeholder="react,nextjs,ai"
                    className="w-40 bg-transparent text-sm text-neutral-300 placeholder:text-neutral-500 outline-none"
                />

            </div>

            {/* Add Tag */}

            <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 transition hover:border-violet-500 hover:text-violet-400"
            >
                <Plus size={18} />
            </button>

        </section>
    );
};

export default NoteMetadata;