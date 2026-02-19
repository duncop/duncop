import { PRIVACY_POLICY } from "@/constants/privacyPolicy";

export default function PrivacyPolicy() {
    return (
        <div className="gap-10 flex flex-col items-center">
            <h2>개인정보 처리방침</h2>
            <p>{PRIVACY_POLICY[0].body}</p>
            {PRIVACY_POLICY.slice(1).map((p) => (
                <div className="card" key={p.id}>
                    <h4>
                        제 {p.id}조 ({p.title})
                    </h4>
                    <p className="whitespace-pre-wrap mb-2">{p.body}</p>
                </div>
            ))}
        </div>
    );
}
