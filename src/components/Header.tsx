"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const nav = [
        { id: "home", name: "모험단 체크", path: "/" },
        { id: "report", name: "신고", path: "/report" },
    ];
    const path = usePathname();

    const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

    const themeToggleHandler = () => {
        document.documentElement.classList.toggle("dark");
        setIsLightTheme(!isLightTheme);
    };

    return (
        <>
            <header className="fixed z-1 top-0 w-full h-15 border-b flex justify-between items-center px-[20%] text-lg bg-white dark:bg-gray1000 border-gray300 dark:border-gray900">
                <Link href="/" className="logo">
                    DUN<span className="text-main">COP</span>
                </Link>
                <nav className="relative h-full flex">
                    {nav.map((n) => (
                        <Link
                            href={n.path}
                            className={`w-30 h-full flex justify-center items-center
                            ${path !== n.path && "text-gray500 hover:text-gray700 dark:text-gray700 dark:hover:text-gray500"}`}
                            key={n.id}
                        >
                            {n.name}
                        </Link>
                    ))}
                    <div
                        className={`absolute bottom-0 w-30 h-1 bg-gray1000 dark:bg-white ${path === "/" ? "" : path === "/report" ? "translate-x-30" : "opacity-0"}`}
                    />
                </nav>
                <button
                    className="w-10 h-10 flex items-center justify-center bg-gray200 hover:bg-gray300 dark:bg-gray900 dark:hover:bg-gray800 rounded-xl"
                    onClick={themeToggleHandler}
                >
                    {isLightTheme ? <Sun /> : <Moon />}
                </button>
            </header>
        </>
    );
}
