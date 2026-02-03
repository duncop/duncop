"use client";

import { useState } from "react";
import Input from "./Input";

export default function ReportForm() {
    const [contentsImage, setContentsImage] = useState<File | null>(null);

    return (
        <form
            className="w-xl flex flex-col gap-10"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="reporter" className="font-semibold text-lg">
                    신고자
                </label>
                <div
                    id="reporter"
                    className="p-10 flex flex-col gap-5 border border-gray300 dark:border-none dark:bg-gray900 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]"
                >
                    <div className="flex gap-3">
                        <Input
                            id="reporter-server"
                            placeholder="서버 입력"
                            maxLength={4}
                        >
                            서버
                        </Input>
                        <Input
                            id="reporter-character"
                            placeholder="캐릭터 이름 입력"
                            maxLength={6}
                        >
                            캐릭터
                        </Input>
                    </div>
                    <Input
                        id="reporter-adventure"
                        placeholder="모험단 이름 입력"
                        maxLength={8}
                    >
                        모험단
                    </Input>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="reportee" className="font-semibold text-lg">
                    대상자<span className="text-red"> (필수)</span>
                </label>
                <div
                    id="reportee"
                    className="p-10 flex flex-col gap-5 border border-gray300 dark:border-none dark:bg-gray900 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]"
                >
                    <div className="flex gap-3">
                        <Input
                            id="reportee-server"
                            placeholder="서버 입력"
                            maxLength={4}
                        >
                            서버
                        </Input>
                        <Input
                            id="reportee-character"
                            placeholder="캐릭터 이름 입력"
                            maxLength={6}
                        >
                            캐릭터
                        </Input>
                    </div>
                    <Input
                        id="reportee-adventure"
                        placeholder="모험단 이름 입력"
                        maxLength={8}
                    >
                        모험단
                    </Input>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="contents" className="font-semibold text-lg">
                    내용<span className="text-red"> (필수)</span>
                </label>
                <div
                    id="contents"
                    className="p-10 flex flex-col gap-5 border border-gray300 dark:border-none dark:bg-gray900 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]"
                >
                    <Input
                        id="contents-detail"
                        placeholder="당시의 상황을 설명해주세요"
                    >
                        상세 설명
                    </Input>
                    <Input
                        id="contents-image"
                        type="file"
                        placeholder={contentsImage?.name}
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0] ?? null;
                            setContentsImage(file);
                        }}
                    >
                        이미지 첨부
                    </Input>
                </div>
            </div>
            <button
                type="submit"
                className="w-full h-12.5 font-semibold text-lg bg-main rounded-xl dark:text-gray1000 hover:bg-hover-green dark:hover:bg-hover-green-dark"
            >
                신고하기
            </button>
        </form>
    );
}
