import Link from "next/link";

type Props = {
    tags: string[];
};

export default function PopularTags({
    tags,
}: Props) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0f1014] p-5">
            <h3 className="mb-4 font-semibold text-white">
                Popular Tags
            </h3>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Link
                        key={tag}
                        href={`/dashboard/tags/${tag}`}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                    >
                        #{tag}
                    </Link>
                ))}
            </div>
        </div>
    );
}