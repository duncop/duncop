"use client";

import AdventureCard from "@/components/AdventureCard";
import Menual from "@/components/Menual";
import SearchForm from "@/components/SearchForm";
import { useEffect, useState } from "react";
import { searchAdventure } from "@/apis/adventure";

export default function Main() {
    const [form, setForm] = useState({
        dealerCut: "",
        bufferCut: "",
        dealerCount: "3",
        bufferCount: "1",
        partyType: "4인",
        adventure: "",
    });
    const [isSearched, setIsSearched] = useState(false);
    const [adventure, setAdventure] = useState<Character[]>();

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

        if (form.dealerCut && form.bufferCut && form.adventure)
            try {
                const result: Response = await searchAdventure(form.adventure);
                setAdventure(result.characters);
                setIsSearched(true);
            } catch (error) {
                console.error("검색 실패:", error);
            }
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
                        <AdventureCard characters={adventure} form={form} />
                    </div>
                </div>
            ) : (
                <Menual />
            )}
        </>
    );
}
