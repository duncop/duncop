import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full h-13 sm:h-15 pr-2 lg:pr-20 border-t flex gap-5 items-center justify-end border-gray300 dark:border-gray900 whitespace-nowrap">
            <Link
                href="/ask"
                className="p-3 text-gray700 hover:text-gray900 dark:text-gray500 dark:hover:text-gray300"
            >
                문의하기
            </Link>
            <Link
                href="/privacy-policy"
                className="p-3 text-gray700 hover:text-gray900 dark:text-gray500 dark:hover:text-gray300"
            >
                개인정보 처리방침
            </Link>
            <Link
                href="https://developers.neople.co.kr/"
                className="p-3 group text-gray700 hover:text-gray900 dark:text-gray500 dark:hover:text-gray300 hidden sm:block"
            >
                <span className="text-gray400 group-hover:text-gray500 dark:text-gray700 dark:group-hover:text-gray600">
                    powered by
                </span>{" "}
                <span className="text-neople">Neople</span> OpenAPI
            </Link>
        </footer>
    );
}
