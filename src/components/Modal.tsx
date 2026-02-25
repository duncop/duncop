"use client";

import { VERIFICATION } from "@/constants/report";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function Modal({
    onClose,
    isOpen,
    onSubmit,
}: {
    onClose?: () => void;
    isOpen: boolean;
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        const init = () => setIsSubmit(false);
        init();
    }, [isOpen]);

    return (
        <div
            className={`fixed top-0 w-full h-screen z-100 duration-300 ${
                isOpen
                    ? "bg-black/50 backdrop-blur-xs"
                    : "bg-clear pointer-events-none"
            }`}
            onClick={onClose}
        >
            <div
                className={`z-10 fixed top-1/2 w-2xl min-h-50 m-auto flex flex-col gap-5 inset-x-0 translate-y-[-50%] border bg-white dark:bg-gray1000 border-gray200 dark:border-gray900 shadow-lg rounded-2xl p-10 duration-300 ease-in-out
                        ${
                            isOpen
                                ? "opacity-100"
                                : "translate-y-[1%] opacity-0 pointer-events-none"
                        }`}
                onClick={(e) => e.stopPropagation()}
            >
                {VERIFICATION.map((v) => (
                    <div key={v.id}>
                        <div className="flex gap-2 items-center">
                            <Check className="t-main mb-1" />
                            <h4 className="mb-1">{v.title}</h4>
                        </div>
                        <p className="whitespace-pre-wrap">{v.body}</p>
                    </div>
                ))}
                <button
                    type="button"
                    className="w-full h-12.5 font-semibold text-lg b-main rounded-xl text-white dark:text-gray1000 hover:bg-hover-green dark:hover:bg-hover-green-dark"
                    onClick={(e) => {
                        setIsSubmit(true);
                        onSubmit(e);
                    }}
                    disabled={isSubmit}
                >
                    확인했습니다
                </button>
            </div>
        </div>
    );
}
