import { CircleStar, TriangleAlert } from "lucide-react";

export default function Badge({ type }: { type: string }) {
    return (
        <div
            className={`h-8 px-2 rounded-sm flex gap-1 items-center ${
                type === "시민상"
                    ? "bg-badge-green text-text-green dark:bg-badge-green-dark dark:text-main"
                    : "bg-badge-red text-text-red dark:bg-badge-red-dark dark:text-red"
            }`}
        >
            {type === "시민상" ? (
                <CircleStar size={20} />
            ) : (
                <TriangleAlert size={20} />
            )}
            {type}
        </div>
    );
}
