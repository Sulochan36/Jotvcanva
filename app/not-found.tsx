import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-4">
                404
            </h1>

            <p className="text-gray-500 mb-6">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/dashboard"
                className="px-4 py-2 border rounded"
            >
                Back to Dashboard
            </Link>
        </div>
    );
}