import { Check, X } from "lucide-react";
import Badge from "./Badge";
import CharacterListItem from "./CharacterListItem";
import { dealerFilter, bufferFilter } from "@/utils/adventure";

export default function AdventureCard({
    adventureBadge,
    characters,
    form,
    adventureName,
}: {
    adventureBadge: Badge;
    characters: Character[];
    form: Form;
    adventureName: string;
}) {
    if (!characters.length) {
        return (
            <div className="card">
                <div className="w-full flex justify-between">
                    <div className="flex flex-wrap gap-2 gap-y-0 mr-2">
                        <h3 className="h3 whitespace-nowrap">
                            {adventureName}
                        </h3>
                        {adventureBadge.criminal ? (
                            <Badge type="전과자" />
                        ) : (
                            adventureBadge.award && <Badge type="시민상" />
                        )}
                    </div>
                    <div className="min-w-8 h-8 sm:min-w-9 sm:h-9 flex justify-center items-center rounded-full text-white dark:text-gray900 bg-yellow-400 dark:bg-yellow-300 text-xl sm:text-2xl font-semibold">
                        ?
                    </div>
                </div>
                <p className="text-xs sm:text-sm text-gray600 dark:text-gray500 -mt-1 mb-2">
                    이내&nbsp;
                    <span className="t-main">?</span>
                    &nbsp;&nbsp;디레지에&nbsp;
                    <span className="t-main">?</span>
                    &nbsp;&nbsp;악연&nbsp;
                    <span className="t-main">?</span>
                </p>

                <div className="w-full flex gap-3">
                    <div className="w-full bg-gray100 dark:bg-gray800 px-4 py-3 sm:p-5 rounded-xl">
                        <p className="font-normal">컷 만족 딜러</p>
                        <p className="font-semibold text-xl">
                            <span className="font-bold text-3xl t-main">?</span>{" "}
                            명
                        </p>
                    </div>
                    <div className="w-full bg-gray100 dark:bg-gray800 px-4 py-3 sm:p-5 rounded-xl">
                        <p className="font-normal">컷 만족 버퍼</p>
                        <p className="font-semibold text-xl">
                            <span className="font-bold text-3xl t-main">?</span>{" "}
                            명
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const dealer_list = dealerFilter(
        characters,
        +form.dealerCut,
        form.partyType,
    );
    const buffer_list = bufferFilter(
        characters,
        +form.bufferCut,
        form.partyType,
    );

    return (
        <div className="card">
            <div className="w-full flex justify-between">
                <div className="flex flex-wrap gap-2 gap-y-0 mr-2">
                    <h3 className="h3 whitespace-nowrap">{adventureName}</h3>
                    {adventureBadge.criminal ? (
                        <Badge type="전과자" />
                    ) : (
                        adventureBadge.award && <Badge type="시민상" />
                    )}
                </div>
                <div
                    className={`min-w-8 h-8 sm:min-w-9 sm:h-9 flex justify-center items-center rounded-full text-white dark:text-gray900
                    ${
                        dealer_list.length >= +form.dealerCount &&
                        buffer_list.length >= +form.bufferCount
                            ? "b-main"
                            : "bg-red"
                    }`}
                >
                    {dealer_list.length >= +form.dealerCount &&
                    buffer_list.length >= +form.bufferCount ? (
                        <>
                            <Check
                                strokeWidth={3}
                                className="hidden sm:block"
                            />
                            <Check
                                strokeWidth={3}
                                size={20}
                                className="sm:hidden"
                            />
                        </>
                    ) : (
                        <>
                            <X strokeWidth={3} className="hidden sm:block" />
                            <X
                                strokeWidth={3}
                                size={20}
                                className="sm:hidden"
                            />
                        </>
                    )}
                </div>
            </div>
            <p className="text-xs sm:text-sm text-gray600 dark:text-gray500 -mt-1 mb-2">
                이내&nbsp;
                <span className="t-main">{characters[0].advenInae}</span>
                &nbsp;&nbsp;디레지에&nbsp;
                <span className="t-main">{characters[0].advenDire}</span>
                &nbsp;&nbsp;악연&nbsp;
                <span className="t-main">{characters[0].advenDireHard}</span>
            </p>

            <div className="w-full flex gap-3">
                <div className="w-full bg-gray100 dark:bg-gray800 px-4 py-3 sm:p-5 rounded-xl">
                    <p className="font-normal text-sm sm:text-base">
                        컷 만족 딜러
                    </p>
                    <p className="font-semibold text-xl">
                        <span
                            className={`font-bold text-3xl ${dealer_list.length < +form.dealerCount ? "text-red" : "t-main"}`}
                        >
                            {dealer_list.length}
                        </span>{" "}
                        명
                    </p>
                </div>
                <div className="w-full bg-gray100 dark:bg-gray800 px-4 py-3 sm:p-5 rounded-xl">
                    <p className="font-normal text-sm sm:text-base">
                        컷 만족 버퍼
                    </p>
                    <p className="font-semibold text-xl">
                        <span
                            className={`font-bold text-3xl ${buffer_list.length < +form.bufferCount ? "text-red" : "t-main"}`}
                        >
                            {buffer_list.length}
                        </span>{" "}
                        명
                    </p>
                </div>
            </div>

            <div className="w-full gap-3 hidden sm:flex">
                <ul className="w-full flex flex-col gap-3">
                    {dealer_list.map((d, i) => (
                        <div key={d.key} className="w-full flex flex-col gap-3">
                            {i === 0 ? (
                                <hr className="text-white/0" />
                            ) : (
                                <hr className="text-gray200 dark:text-gray800" />
                            )}
                            <CharacterListItem isBuffer={false} character={d} />
                        </div>
                    ))}
                </ul>
                <ul className="w-full flex flex-col gap-3">
                    {buffer_list.map((b, i) => (
                        <div key={b.key} className="w-full flex flex-col gap-3">
                            {i === 0 ? (
                                <hr className="text-white/0" />
                            ) : (
                                <hr className="text-gray200 dark:text-gray800" />
                            )}
                            <CharacterListItem isBuffer={true} character={b} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
