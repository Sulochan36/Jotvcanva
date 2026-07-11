import Link from "next/link";

type Props = {
    tags: string[];
};

export default function PopularTags({
    tags,
}: Props) {
    return (
        <div className="rounded-3xl border border-white/10 bg-[#111111] p-6">

            <h3 className="mb-6 text-lg font-semibold text-white">
                Popular Tags
            </h3>

            <div className="flex flex-wrap gap-3">

                {tags.map((tag) => (
                    <Link
                        key={tag}
                        href={`/dashboard/tags/${tag}`}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 transition hover:border-[#b4abff]/40 hover:text-white"
                    >
                        #{tag}
                    </Link>
                ))}

            </div>

        </div>
    );
}