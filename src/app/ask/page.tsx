import Link from "next/link";
import { ASK, FAQ } from "@/constants/ask";

export default function Ask() {
    return (
        <div className="m-auto gap-5 sm:gap-10 flex flex-col items-center">
            <h2 className="h2">문의하기</h2>
            <div className="card p">
                <h4 className="h4">자주 묻는 질문</h4>
                <p className="font-semibold text-base">
                    <span className="t-main">Q. </span>
                    {FAQ[0].title}
                </p>
                <p className="whitespace-pre-wrap mb-2 -mt-2">{FAQ[0].body}</p>
                <p className="font-semibold text-base">
                    <span className="t-main">Q. </span>
                    {FAQ[1].title}
                </p>
                <p className="whitespace-pre-wrap mb-2 -mt-2">{FAQ[1].body}</p>
            </div>
            <div className="card p">
                <h4 className="h4">{ASK[0].title}</h4>
                <p className="whitespace-pre-wrap mb-2">{ASK[0].body}</p>
            </div>
            <div className="card p">
                <h4 className="h4">{ASK[1].title}</h4>
                <p className="whitespace-pre-wrap mb-2">{ASK[1].body}</p>
            </div>

            <Link
                href="https://pf.kakao.com/_ExknRX/chat"
                className="w-full h-12.5 font-semibold flex items-center justify-center text-base sm:text-lg b-main rounded-xl text-white dark:text-gray1000 hover:bg-hover-green dark:hover:bg-hover-green-dark"
            >
                카카오톡 채팅방 연결
            </Link>
        </div>
    );
}
