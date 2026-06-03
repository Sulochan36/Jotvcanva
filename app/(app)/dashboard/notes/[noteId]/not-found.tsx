import Link from "next/link";

export default function NoteNotFound() {
    return (
        <div>
            <h1 className="text-3xl font-bold">
                Note Not Found
            </h1>

            <Link href="/dashboard/notes">
                Back to Notes
            </Link>
        </div>
    );
}