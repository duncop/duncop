"use client";

import { useState } from "react";
import Input from "./Input";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export default function SearchForm() {
    const [dealerCut, setDealerCut] = useState("");
    const [bufferCut, setBufferCut] = useState("");
    const [setCount, setSetCount] = useState("1");
    const [babyCount, setBabyCount] = useState("0");
    const [adventure, setAdventure] = useState<string>("");

    const setCountHandler = (
        e: React.MouseEvent<HTMLButtonElement>,
        type: "up" | "down",
    ) => {
        e.preventDefault();

        if (!setCount) {
            setSetCount("1");
        }
        if (type === "up" && +setCount < 8) {
            setSetCount((+setCount + 1).toString());
        }
        if (type === "down" && +setCount > 1) {
            setSetCount((+setCount - 1).toString());
        }
    };

    const babyCountHandler = (
        e: React.MouseEvent<HTMLButtonElement>,
        type: "up" | "down",
    ) => {
        e.preventDefault();

        if (!babyCount) {
            setBabyCount("0");
        }
        if (type === "up") {
            if (babyCount === "0") setBabyCount("1");
            if (babyCount === "1") setBabyCount("2");
            if (babyCount === "2") setBabyCount("8");
        }
        if (type === "down") {
            if (babyCount === "1") setBabyCount("0");
            if (babyCount === "2") setBabyCount("1");
            if (babyCount === "8") setBabyCount("2");
        }
    };

    return (
        <form
            className="w-xl p-10 flex flex-col gap-3 border border-gray300 dark:border-none dark:bg-gray900 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]"
            onSubmit={() => {}}
        >
            <div className="flex gap-3">
                <div className="relative">
                    <Input
                        id="dealer-cut"
                        placeholder="숫자 입력"
                        value={dealerCut}
                        onChange={(e) =>
                            setDealerCut(e.target.value.replace(/\D/g, ""))
                        }
                        maxLength={3}
                    >
                        딜러컷
                    </Input>
                    {dealerCut && (
                        <span className="absolute right-4 top-1/2 translate-y-0.5 text-gray700 dark:text-gray500">
                            억
                        </span>
                    )}
                </div>
                <div className="relative">
                    <Input
                        id="buffer-cut"
                        placeholder="숫자 입력"
                        value={bufferCut}
                        onChange={(e) =>
                            setBufferCut(e.target.value.replace(/\D/g, ""))
                        }
                        maxLength={3}
                    >
                        버퍼컷
                    </Input>
                    {bufferCut && (
                        <span className="absolute right-4 top-1/2 translate-y-0.5 text-gray700 dark:text-gray500">
                            만
                        </span>
                    )}
                </div>
            </div>
            <div className="flex gap-3">
                <div className="relative">
                    <Input
                        id="set-count"
                        placeholder="1"
                        value={setCount}
                        onChange={(e) =>
                            setSetCount(e.target.value.replace(/[^1-8]/g, ""))
                        }
                        maxLength={1}
                    >
                        벞교 수
                    </Input>
                    <div className="absolute right-2 bottom-1 flex flex-col text-gray500 dark:text-gray700">
                        <button
                            className="hover:bg-gray100 dark:hover:bg-gray800 rounded-md px-1 hover:text-gray600"
                            onClick={(e) => setCountHandler(e, "up")}
                        >
                            <ChevronUp size={20} />
                        </button>
                        <button
                            className="hover:bg-gray100 dark:hover:bg-gray800 rounded-md px-1 hover:text-gray600"
                            onClick={(e) => setCountHandler(e, "down")}
                        >
                            <ChevronDown size={20} />
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <Input
                        id="baby-count"
                        placeholder="0"
                        value={babyCount}
                        onChange={(e) =>
                            setBabyCount(e.target.value.replace(/[^0128]/g, ""))
                        }
                        maxLength={1}
                    >
                        업둥이 수
                    </Input>
                    <div className="absolute right-2 bottom-1 flex flex-col text-gray500 dark:text-gray700">
                        <button
                            className="hover:bg-gray100 dark:hover:bg-gray800 rounded-md px-1 hover:text-gray600"
                            onClick={(e) => babyCountHandler(e, "up")}
                        >
                            <ChevronUp size={20} />
                        </button>
                        <button
                            className="hover:bg-gray100 dark:hover:bg-gray800 rounded-md px-1 hover:text-gray600"
                            onClick={(e) => babyCountHandler(e, "down")}
                        >
                            <ChevronDown size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Input
                    id="adventure-name"
                    placeholder="모험단 이름 입력"
                    value={adventure}
                    onChange={(e) => setAdventure(e.target.value)}
                >
                    모험단
                </Input>
                {adventure.length < 30 && (
                    <Search className="absolute right-4 top-1/2 translate-0.5 text-gray500 dark:text-gray700" />
                )}
            </div>
        </form>
    );
}
