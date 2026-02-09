"use client";

import AdventureCard from "@/components/AdventureCard";
import Menual from "@/components/Menual";
import SearchForm from "@/components/SearchForm";
import { useState } from "react";
import { searchAdventure } from "@/apis/adventure";

export default function Main() {
    const [form, setForm] = useState({
        dealerCut: "",
        bufferCut: "",
        setCount: "1",
        babyCount: "0",
        adventure: "",
    });
    const [isSearched, setIsSearched] = useState(false);

    const setCountHandler = (
        e: React.MouseEvent<HTMLButtonElement>,
        type: "up" | "down",
    ) => {
        e.preventDefault();

        if (!form.setCount) {
            setForm((data) => ({ ...data, setCount: "1" }));
        }
        if (type === "up" && +form.setCount < 8) {
            setForm((data) => ({
                ...data,
                setCount: (+form.setCount + 1).toString(),
            }));
        }
        if (type === "down" && +form.setCount > 1) {
            setForm((data) => ({
                ...data,
                setCount: (+form.setCount - 1).toString(),
            }));
        }
    };
    const babyCountHandler = (
        e: React.MouseEvent<HTMLButtonElement>,
        type: "up" | "down",
    ) => {
        e.preventDefault();

        if (!form.babyCount) {
            setForm((data) => ({ ...data, babyCount: "0" }));
        }
        if (type === "up") {
            if (form.babyCount === "0")
                setForm((data) => ({ ...data, babyCount: "1" }));
            if (form.babyCount === "1")
                setForm((data) => ({ ...data, babyCount: "2" }));
            if (form.babyCount === "2")
                setForm((data) => ({ ...data, babyCount: "8" }));
        }
        if (type === "down") {
            if (form.babyCount === "1")
                setForm((data) => ({ ...data, babyCount: "0" }));
            if (form.babyCount === "2")
                setForm((data) => ({ ...data, babyCount: "1" }));
            if (form.babyCount === "8")
                setForm((data) => ({ ...data, babyCount: "2" }));
        }
    };
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.dealerCut && form.bufferCut && form.adventure)
            try {
                const result = await searchAdventure(form.adventure);
                console.log("검색 결과:", result);

                setIsSearched(true);
            } catch (error) {
                console.error("검색 실패:", error);
            }
    };

    return (
        <>
            <SearchForm
                form={form}
                setForm={setForm}
                setCountHandler={setCountHandler}
                babyCountHandler={babyCountHandler}
                submitHandler={submitHandler}
            />

            {isSearched ? (
                <div className="w-full">
                    <p className="text-lg mb-2">
                        검색 결과 <span className="t-main">1</span>
                    </p>
                    <div className="w-full flex gap-3">
                        <AdventureCard />
                    </div>
                </div>
            ) : (
                <Menual />
            )}
        </>
    );
}
