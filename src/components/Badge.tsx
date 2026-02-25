import { CircleStar, TriangleAlert } from "lucide-react";

export default function Badge({ type }: { type: string }) {
    return (
        <div
            className={`p h-8 px-2 rounded-md flex gap-1 items-center whitespace-nowrap ${
                type === "시민상"
                    ? "bg-badge-green text-text-green dark:bg-badge-green-dark dark:text-main"
                    : "bg-badge-red text-text-red dark:bg-badge-red-dark dark:text-red"
            }`}
        >
            {type === "시민상" ? (
                <CircleStar className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
                <TriangleAlert className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
            {type}
        </div>
    );
}
