"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">
                Something went wrong
            </h2>

            <p>{error.message}</p>

            <button
                onClick={() => reset()}
                className="border px-4 py-2 rounded"
            >
                Try Again
            </button>
        </div>
    );
}