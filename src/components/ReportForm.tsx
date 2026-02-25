"use client";

import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import { SERVER_LIST, TYPE_LIST } from "@/constants/report";
import { toast } from "react-toastify";
import Modal from "./Modal";
import { reportUser } from "@/apis/report";

export default function ReportForm() {
    const [reportForm, setReportForm] = useState<ReportForm>({
        reporter: {
            server: "",
            character: "",
            adventure: "",
        },
        reportee: {
            server: "",
            character: "",
            adventure: "",
        },
        contents: {
            type: "",
            detail: "",
            image: null,
        },
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!reportForm.reportee.server) {
            toast.error("신고 대상자 서버를 선택해주세요.");
            return;
        }
        if (!reportForm.reportee.character) {
            toast.error("신고 대상자 캐릭터 이름을 입력해주세요.");
            return;
        }
        if (!reportForm.reportee.adventure) {
            toast.error("신고 대상자 모험단 이름을 입력해주세요.");
            return;
        }
        if (!reportForm.contents.type) {
            toast.error("신고 유형을 선택해주세요.");
            return;
        }
        if (!reportForm.contents.detail) {
            toast.error("상세 설명을 입력해주세요.");
            return;
        }
        if (!reportForm.contents.image) {
            toast.error("이미지를 첨부해주세요.");
            return;
        }
        setIsModalOpen(true);
    };

    const submitHandler2 = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await reportUser(reportForm);

            toast.success("신고가 접수되었습니다.");
            setReportForm({
                reporter: {
                    server: "",
                    character: "",
                    adventure: "",
                },
                reportee: {
                    server: "",
                    character: "",
                    adventure: "",
                },
                contents: {
                    type: "",
                    detail: "",
                    image: null,
                },
            });
            setIsModalOpen(false);
        } catch {
            toast.error("오류가 발생했습니다.");
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <form
                className="w-full max-w-xl flex flex-col gap-5 sm:gap-10"
                onSubmit={(e) => submitHandler(e)}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="reporter" className="font-semibold text-lg">
                        신고자
                    </label>
                    <div id="reporter" className="card p">
                        <div className="flex gap-3">
                            <Select
                                id="reporter-server"
                                options={SERVER_LIST}
                                value={reportForm.reporter.server}
                                placeholder="서버 선택"
                                setValue={(server) =>
                                    setReportForm((data) => ({
                                        ...data,
                                        reporter: { ...data.reporter, server },
                                    }))
                                }
                            >
                                서버
                            </Select>
                            <Input
                                id="reporter-character"
                                placeholder="캐릭터 이름 입력"
                                value={reportForm.reporter.character}
                                onChange={(e) =>
                                    setReportForm((data) => ({
                                        ...data,
                                        reporter: {
                                            ...data.reporter,
                                            character: e.target.value,
                                        },
                                    }))
                                }
                                maxLength={6}
                            >
                                캐릭터
                            </Input>
                        </div>
                        <Input
                            id="reporter-adventure"
                            placeholder="모험단 이름 입력"
                            value={reportForm.reporter.adventure}
                            onChange={(e) =>
                                setReportForm((data) => ({
                                    ...data,
                                    reporter: {
                                        ...data.reporter,
                                        adventure: e.target.value,
                                    },
                                }))
                            }
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
                    <div id="reportee" className="card p">
                        <div className="flex gap-3">
                            <Select
                                id="reportee-server"
                                options={SERVER_LIST}
                                value={reportForm.reportee.server}
                                placeholder="서버 선택"
                                setValue={(server) =>
                                    setReportForm((data) => ({
                                        ...data,
                                        reportee: { ...data.reportee, server },
                                    }))
                                }
                            >
                                서버
                            </Select>
                            <Input
                                id="reportee-character"
                                placeholder="캐릭터 이름 입력"
                                value={reportForm.reportee.character}
                                onChange={(e) =>
                                    setReportForm((data) => ({
                                        ...data,
                                        reportee: {
                                            ...data.reportee,
                                            character: e.target.value,
                                        },
                                    }))
                                }
                                maxLength={6}
                            >
                                캐릭터
                            </Input>
                        </div>
                        <Input
                            id="reportee-adventure"
                            placeholder="모험단 이름 입력"
                            value={reportForm.reportee.adventure}
                            onChange={(e) =>
                                setReportForm((data) => ({
                                    ...data,
                                    reportee: {
                                        ...data.reportee,
                                        adventure: e.target.value,
                                    },
                                }))
                            }
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
                    <div id="contents" className="card p">
                        <Select
                            id="contents-type"
                            options={TYPE_LIST}
                            value={reportForm.contents.type}
                            placeholder="신고 유형 선택"
                            setValue={(type) =>
                                setReportForm((data) => ({
                                    ...data,
                                    contents: { ...data.contents, type },
                                }))
                            }
                        >
                            신고 유형
                        </Select>
                        <Input
                            id="contents-detail"
                            placeholder="당시의 상황을 설명해주세요"
                            value={reportForm.contents.detail}
                            onChange={(e) =>
                                setReportForm((data) => ({
                                    ...data,
                                    contents: {
                                        ...data.contents,
                                        detail: e.target.value,
                                    },
                                }))
                            }
                            maxLength={500}
                        >
                            상세 설명
                        </Input>
                        <Input
                            id="contents-image"
                            type="file"
                            placeholder={reportForm.contents.image?.name}
                            accept="image/png, image/jpeg, image/gif, image/webp, .jpg, .jpeg, .png, .gif, .webp"
                            onChange={(e) => {
                                const file = e.target.files?.[0] ?? null;
                                setReportForm((data) => ({
                                    ...data,
                                    contents: { ...data.contents, image: file },
                                }));
                            }}
                        >
                            이미지 첨부
                        </Input>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full h-12.5 font-semibold text-base sm:text-lg b-main rounded-xl text-white dark:text-gray1000 hover:bg-hover-green dark:hover:bg-hover-green-dark"
                >
                    신고하기
                </button>
            </form>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={submitHandler2}
            />
        </>
    );
}
