import { HELP, BADGE } from "@/constants/main";
import Badge from "./Badge";

export default function Menual() {
    return (
        <div className="card">
            <h4>{HELP[0].title}</h4>
            <p className="whitespace-pre-wrap mb-2">{HELP[0].body}</p>
            {BADGE.map((b) => (
                <div className="flex items-center gap-2" key={b.type}>
                    <Badge type={b.type} />
                    {b.description}
                </div>
            ))}
        </div>
    );
}
