import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pretendard = localFont({
    src: "../assets/fonts/PretendardVariable.woff2",
    variable: "--font-pretendard",
});

const sebang_gothic = localFont({
    src: "../assets/fonts/SEBANGGothic.ttf",
    variable: "--font-sebang-gothic",
});

export const metadata: Metadata = {
    title: "DUNCOP",
    description: "던담 기반 벞교 컷 확인 서비스",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${pretendard.variable} ${sebang_gothic.variable} font-medium antialiased dark:bg-gray1000 select-none`}
            >
                <Header />
                <div className="w-6xl h-full m-auto pt-30 pb-15">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
