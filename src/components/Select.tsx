"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Select({
    children,
    options,
    value,
    setValue,
}: {
    children?: React.ReactNode;
    options: string[];
    value: string;
    setValue: (select: string) => void;
}) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative w-50 flex flex-col gap-1">
            <label htmlFor={"1"}>{children}</label>
            <div
                id={"1"}
                className={`dark:border-gray700 h-12.5 flex justify-between items-center border border-gray-300 pl-4 pr-2 focus:outline-none transition-colors
                    ${isFocused ? "rounded-t-xl" : "rounded-xl"}`}
                onClick={() => setIsFocused(!isFocused)}
            >
                {value}
                <ChevronDown size={20} className="text-gray500" />
            </div>
            {isFocused && (
                <ul className="absolute z-1 w-full top-19.5 border-x border-b border-gray-300 dark:border-gray700 rounded-b-xl bg-white dark:bg-gray900">
                    {options.map((o, i) => (
                        <li
                            key={i}
                            className={`p-4 hover:bg-gray200 dark:hover:bg-gray800 ${options.length - 1 === i && "rounded-b-xl"}`}
                            onClick={() => {
                                setValue(o);
                                setIsFocused(false);
                            }}
                        >
                            {o}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
