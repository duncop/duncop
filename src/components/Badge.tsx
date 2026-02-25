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
                <>
                    <CircleStar size={20} className="hidden sm:block" />
                    <CircleStar size={16} className="sm:hidden" />
                </>
            ) : (
                <TriangleAlert size={20} />
            )}
            {type}
        </div>
    );
}
