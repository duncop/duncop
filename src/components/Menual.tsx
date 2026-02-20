import { HELP, BADGE } from "@/constants/main";
import Badge from "./Badge";

export default function Menual() {
    return (
        <div className="w-full p-10 flex flex-col gap-2 border border-gray300 dark:border-none dark:bg-gray900 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <h4>{HELP[0].title}</h4>
            <p className="whitespace-pre mb-2">{HELP[0].body}</p>
            {BADGE.map((b) => (
                <div className="flex items-center gap-2" key={b.type}>
                    <Badge type={b.type} />
                    {b.description}
                </div>
            ))}
        </div>
    );
}
