"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Select({
    id,
    children,
    options,
    value,
    setValue,
}: {
    id: string;
    children?: React.ReactNode;
    options: string[];
    value: string;
    setValue: (select: string) => void;
}) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative w-50 flex flex-col gap-1">
            <label htmlFor={id}>{children}</label>
            <button
                id={id}
                type="button"
                className={`dark:border-gray700 h-12.5 flex justify-between items-center border border-gray-300 pl-4 pr-2 focus:outline-none transition-colors
                    ${isFocused ? "rounded-t-xl" : "rounded-xl"}`}
                onClick={() => setIsFocused(!isFocused)}
                value={value}
            >
                {value}
                <ChevronDown
                    size={20}
                    className="text-gray500 dark:text-gray700"
                />
            </button>
            {isFocused && (
                <ul className="absolute z-1 w-full top-19.5 border-x border-b border-gray-300 dark:border-gray700 rounded-b-xl bg-white dark:bg-gray900">
                    {options.map((o, i) => (
                        <li key={i} className="w-full">
                            <button
                                type="button"
                                className={`w-full p-4 flex hover:bg-gray200 dark:hover:bg-gray800 ${options.length - 1 === i && "rounded-b-xl"}`}
                                onClick={() => {
                                    setValue(o);
                                    setIsFocused(false);
                                }}
                            >
                                {o}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
