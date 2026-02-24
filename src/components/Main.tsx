"use client";

import AdventureCard from "./AdventureCard";
import Menual from "./Menual";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import { searchAdventure, getAdventureBadge } from "@/apis/adventure";
import { toast } from "react-toastify";

export default function Main() {
    const [form, setForm] = useState({
        dealerCut: "",
        bufferCut: "",
        dealerCount: "3",
        bufferCount: "1",
        partyType: "4인",
        adventure: "",
    });
    const [isSearched, setIsSearched] = useState<boolean>(false);
    const [adventure, setAdventure] = useState<Character[]>();
    const [adventureBadge, setAdventureBadge] = useState<Badge>();
    const [adventureName, setAdventureName] = useState<string>("");

    const dealerCountHandler = (
        e: React.MouseEvent<HTMLButtonElement>,
        type: "up" | "down",
    ) => {
        e.preventDefault();

        if (!form.dealerCount) {
            setForm((data) => ({ ...data, dealerCount: "3" }));
            return;
        }
        if (type === "up" && +form.dealerCount < 99) {
            setForm((data) => ({
                ...data,
                dealerCount: (+form.dealerCount + 1).toString(),
            }));
        }
        if (type === "down" && +form.dealerCount > 1) {
            setForm((data) => ({
                ...data,
                dealerCount: (+form.dealerCount - 1).toString(),
            }));
        }
    };
    const bufferCountHandler = (
        e: React.MouseEvent<HTMLButtonElement>,
        type: "up" | "down",
    ) => {
        e.preventDefault();

        if (!form.bufferCount) {
            setForm((data) => ({ ...data, bufferCount: "1" }));
            return;
        }
        if (type === "up" && +form.bufferCount < 9) {
            setForm((data) => ({
                ...data,
                bufferCount: (+form.bufferCount + 1).toString(),
            }));
        }
        if (type === "down" && +form.bufferCount > 1) {
            setForm((data) => ({
                ...data,
                bufferCount: (+form.bufferCount - 1).toString(),
            }));
        }
    };
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.dealerCut) {
            toast.error("딜러컷을 입력해주세요.");
            return;
        }
        if (!form.bufferCut) {
            toast.error("버퍼컷을 입력해주세요.");
            return;
        }
        if (!form.adventure) {
            toast.error("모험단을 입력해주세요.");
            return;
        }
        if (!form.dealerCount || !form.bufferCount)
            setForm((data) => ({
                ...data,
                dealerCount: data.dealerCount || "3",
                bufferCount: data.bufferCount || "1",
            }));

        const adventureResult = await searchAdventure(form.adventure);
        const adventureBadgeResult = await getAdventureBadge(form.adventure);
        setAdventure(adventureResult.characters);
        setAdventureBadge(adventureBadgeResult);
        setAdventureName(form.adventure);
        setIsSearched(true);
    };

    useEffect(() => {
        const setDealerCountToNull = () => {
            setForm((data) => ({ ...data, dealerCount: "" }));
        };
        if (form.dealerCount === "0") setDealerCountToNull();
    }, [form.dealerCount]);

    return (
        <>
            <SearchForm
                form={form}
                setForm={setForm}
                dealerCountHandler={dealerCountHandler}
                bufferCountHandler={bufferCountHandler}
                submitHandler={submitHandler}
            />

            {isSearched && adventure ? (
                <div className="w-full">
                    <p className="text-lg mb-2">
                        검색 결과 <span className="t-main">1</span>
                    </p>
                    <div className="w-full flex gap-3">
                        <AdventureCard
                            characters={adventure}
                            form={form}
                            adventureName={adventureName}
                            adventureBadge={adventureBadge!}
                        />
                    </div>
                </div>
            ) : (
                <Menual />
            )}
        </>
    );
}
