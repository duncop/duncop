import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ToastProvider from "@/components/ToastProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const pretendard = localFont({
    src: "../assets/fonts/PretendardVariable.woff2",
    variable: "--font-pretendard",
});

const sebang_gothic = localFont({
    src: "../assets/fonts/SEBANGGothic.ttf",
    variable: "--font-sebang-gothic",
});

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "DUNCOP",
    description: "DUNCOP(던캅)은 DUNDAM 기반 벞교 컷 확인 서비스입니다.",
    keywords: "DUNCOP, 던캅, 던파, 던전앤파이터, DNF, 벞교, 법교, 버프교환",
    openGraph: {
        siteName: "DUNCOP",
        images: {
            url: "/og-image.png",
        },
        description: "DUNDAM 기반 벞교 컷 확인 서비스",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function () {
                            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                                document.documentElement.classList.add('dark');
                            }
                        })();
                        `,
                    }}
                />
            </head>
            <body
                className={`${pretendard.variable} ${sebang_gothic.variable} font-medium antialiased dark:bg-gray1000 select-none`}
            >
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
                    <GoogleAnalytics
                        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
                    />
                ) : null}
                <ScrollToTop />
                <ToastProvider />
                <Header />
                <div className="w-6xl h-full m-auto pt-30 pb-15 px-5">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
