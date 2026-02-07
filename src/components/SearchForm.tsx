import Input from "./Input";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

type SearchFormProps = {
    form: FormType;
    setForm: React.Dispatch<React.SetStateAction<FormType>>;
    setCountHandler: (
        e: React.MouseEvent<HTMLButtonElement>,
        type: "up" | "down",
    ) => void;
    babyCountHandler: (
        e: React.MouseEvent<HTMLButtonElement>,
        type: "up" | "down",
    ) => void;
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SearchForm({
    form,
    setForm,
    setCountHandler,
    babyCountHandler,
    submitHandler,
}: SearchFormProps) {
    return (
        <form
            className="w-xl p-10 flex flex-col gap-3 border border-gray300 dark:border-none dark:bg-gray900 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]"
            onSubmit={(e) => submitHandler(e)}
        >
            <div className="flex gap-3">
                <div className="relative">
                    <Input
                        id="dealer-cut"
                        placeholder="숫자 입력"
                        value={form.dealerCut}
                        onChange={(e) =>
                            setForm((data) => ({
                                ...data,
                                dealerCut: e.target.value.replace(/\D/g, ""),
                            }))
                        }
                        maxLength={3}
                    >
                        딜러컷
                    </Input>
                    {form.dealerCut && (
                        <span className="absolute right-4 top-1/2 translate-y-0.5 text-gray700 dark:text-gray500">
                            억
                        </span>
                    )}
                </div>
                <div className="relative">
                    <Input
                        id="buffer-cut"
                        placeholder="숫자 입력"
                        value={form.bufferCut}
                        onChange={(e) =>
                            setForm((data) => ({
                                ...data,
                                bufferCut: e.target.value.replace(/\D/g, ""),
                            }))
                        }
                        maxLength={3}
                    >
                        버퍼컷
                    </Input>
                    {form.bufferCut && (
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
                        value={form.setCount}
                        onChange={(e) =>
                            setForm((data) => ({
                                ...data,
                                setCount: e.target.value.replace(/[^1-8]/g, ""),
                            }))
                        }
                        maxLength={1}
                    >
                        벞교 수
                    </Input>
                    <div className="absolute right-2 bottom-1 flex flex-col text-gray500 dark:text-gray700">
                        <button
                            type="button"
                            className="hover:bg-gray100 dark:hover:bg-gray800 rounded-md px-1 hover:text-gray600"
                            onClick={(e) => setCountHandler(e, "up")}
                        >
                            <ChevronUp size={20} />
                        </button>
                        <button
                            type="button"
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
                        value={form.babyCount}
                        onChange={(e) =>
                            setForm((data) => ({
                                ...data,
                                babyCount: e.target.value.replace(
                                    /[^0128]/g,
                                    "",
                                ),
                            }))
                        }
                        maxLength={1}
                    >
                        업둥이 수
                    </Input>
                    <div className="absolute right-2 bottom-1 flex flex-col text-gray500 dark:text-gray700">
                        <button
                            type="button"
                            className="hover:bg-gray100 dark:hover:bg-gray800 rounded-md px-1 hover:text-gray600"
                            onClick={(e) => babyCountHandler(e, "up")}
                        >
                            <ChevronUp size={20} />
                        </button>
                        <button
                            type="button"
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
                    maxLength={50}
                    value={form.adventure}
                    onChange={(e) =>
                        setForm((data) => ({
                            ...data,
                            adventure: e.target.value,
                        }))
                    }
                >
                    모험단
                </Input>
                <button
                    type="submit"
                    className={`absolute right-4 top-1/2 translate-0.5 text-gray500 dark:text-gray700 ${form.adventure.length > 30 && "opacity-0 pointer-events-none"}`}
                >
                    <Search />
                </button>
            </div>
        </form>
    );
}
